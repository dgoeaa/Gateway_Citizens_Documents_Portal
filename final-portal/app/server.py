#!/usr/bin/env python3
"""Same-origin SQLite gateway, consolidated from the supplied NITDA server."""
import hashlib
import hmac
import json
import logging
import os
from pathlib import Path
import re
import secrets
import smtplib
import sqlite3
import ssl
import time
from contextlib import contextmanager
from email.message import EmailMessage
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent.parent
MAX_FILE = 10 * 1024 * 1024
TYPES = {
    ".pdf": "application/pdf", ".doc": "application/msword",
    ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".xls": "application/vnd.ms-excel",
    ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
}
STATUSES = {"received", "validation", "review", "action-required", "approved", "declined", "withdrawn"}
TERMINAL = {"approved", "declined", "withdrawn"}


class Rejected(Exception):
    def __init__(self, status, error):
        self.status, self.error = status, error


def text(data, key, minimum=0, maximum=1200):
    value = data.get(key, "")
    if not isinstance(value, str) or not minimum <= len(value.strip()) <= maximum:
        raise Rejected(400, "invalid_" + key)
    return value.strip()


def email(value):
    if not isinstance(value, str):
        raise Rejected(400, "invalid_email")
    value = value.strip().lower()
    if len(value) > 254 or not re.fullmatch(r"[^\s@<>]+@[^\s@<>]+\.[A-Za-z]{2,}", value):
        raise Rejected(400, "invalid_email")
    return value


class Portal:
    def __init__(self, environ=None):
        self.env = dict(os.environ if environ is None else environ)
        self.testing = self.env.get("PORTAL_TEST_MODE") == "1"
        self.secret = self.env.get("PORTAL_SECRET", "")
        self.origin = self.env.get("PORTAL_ORIGIN", "").rstrip("/")
        if not self.testing:
            if len(self.secret) < 32:
                raise RuntimeError("PORTAL_SECRET must contain at least 32 characters")
            if not self.env.get("SMTP_HOST") or not self.env.get("SMTP_FROM"):
                raise RuntimeError("SMTP_HOST and SMTP_FROM are required")
            parsed = urlparse(self.origin)
            if (parsed.scheme != "https" or not parsed.netloc or parsed.path or parsed.query
                    or parsed.fragment or parsed.username or parsed.password):
                raise RuntimeError("PORTAL_ORIGIN must be the public HTTPS origin")
            if not self.env.get("PORTAL_ADMINS", "").strip():
                raise RuntimeError("PORTAL_ADMINS must name authorized operator email addresses")
        self.secret = (self.secret or secrets.token_hex(32)).encode()
        self.admins = {email(e) for e in self.env.get("PORTAL_ADMINS", "").split(",") if e.strip()}
        self.data = Path(self.env.get("PORTAL_DATA") or str(ROOT / "data")).resolve()
        public = (ROOT / "public").resolve()
        if self.data == public or public in self.data.parents:
            raise RuntimeError("PORTAL_DATA must be outside the public directory")
        self.data.mkdir(parents=True, exist_ok=True, mode=0o700)
        self.files = self.data / "files"
        self.files.mkdir(exist_ok=True, mode=0o700)
        self.db = self.data / "portal.db"
        with self.connect() as c:
            c.executescript("""
                PRAGMA journal_mode=WAL;
                CREATE TABLE IF NOT EXISTS seq(year INTEGER PRIMARY KEY, n INTEGER NOT NULL);
                CREATE TABLE IF NOT EXISTS otp(email TEXT PRIMARY KEY, digest TEXT, expires INTEGER,
                    attempts INTEGER, sent INTEGER);
                CREATE TABLE IF NOT EXISTS proofs(digest TEXT PRIMARY KEY, email TEXT, expires INTEGER);
                CREATE TABLE IF NOT EXISTS records(id TEXT PRIMARY KEY, email TEXT, local_id TEXT,
                    data TEXT, complete INTEGER DEFAULT 0, UNIQUE(email,local_id));
                CREATE TABLE IF NOT EXISTS tickets(digest TEXT PRIMARY KEY, ref TEXT, idx INTEGER,
                    name TEXT, size INTEGER, sha TEXT, ctype TEXT, used INTEGER DEFAULT 0, expires INTEGER,
                    UNIQUE(ref,idx));
                CREATE TABLE IF NOT EXISTS cases(id TEXT PRIMARY KEY, email TEXT, data TEXT);
                CREATE TABLE IF NOT EXISTS feedback(id TEXT PRIMARY KEY, email TEXT, data TEXT);
                CREATE TABLE IF NOT EXISTS requests(email TEXT, key TEXT, kind TEXT, ref TEXT,
                    PRIMARY KEY(email,key,kind));
                CREATE TABLE IF NOT EXISTS audit(id INTEGER PRIMARY KEY, at INTEGER, actor TEXT,
                    event TEXT, ref TEXT);
                CREATE TABLE IF NOT EXISTS limits(key TEXT, at INTEGER);
                CREATE INDEX IF NOT EXISTS limits_key_at ON limits(key,at);
            """)
        self.db.chmod(0o600)

    @contextmanager
    def connect(self):
        c = sqlite3.connect(self.db, timeout=20)
        c.row_factory = sqlite3.Row
        try:
            with c:
                yield c
        finally:
            c.close()

    def digest(self, value):
        return hmac.new(self.secret, value.encode(), hashlib.sha256).hexdigest()

    def limit(self, key, count, seconds):
        now = int(time.time())
        with self.connect() as c:
            c.execute("BEGIN IMMEDIATE")
            c.execute("DELETE FROM limits WHERE at<?", (now - 3600,))
            key = self.digest(key)
            used = c.execute("SELECT count(*) FROM limits WHERE key=? AND at>?", (key, now - seconds)).fetchone()[0]
            if used >= count:
                raise Rejected(429, "rate_limited")
            c.execute("INSERT INTO limits VALUES(?,?)", (key, now))

    def audit(self, c, actor, event, ref=""):
        c.execute("INSERT INTO audit(at,actor,event,ref) VALUES(?,?,?,?)",
                  (int(time.time()), actor, event, ref))

    def newref(self, c, prefix="NITDA"):
        year = time.gmtime().tm_year
        row = c.execute("SELECT n FROM seq WHERE year=?", (year,)).fetchone()
        n = row["n"] + 1 if row else 1
        c.execute("INSERT OR REPLACE INTO seq VALUES(?,?)", (year, n))
        return f"{prefix}-{year}-{n}"

    def identity(self, d, admin=False):
        verification = d.get("verification")
        token = verification.get("token", "") if isinstance(verification, dict) else ""
        if not isinstance(token, str) or len(token) > 200:
            raise Rejected(403, "verification_required")
        with self.connect() as c:
            row = c.execute("SELECT email FROM proofs WHERE digest=? AND expires>?",
                            (self.digest(token), int(time.time()))).fetchone()
        if not row:
            raise Rejected(403, "verification_required")
        if admin and row["email"] not in self.admins:
            raise Rejected(403, "admin_required")
        return row["email"]

    def sendmail(self, address, code):
        if self.testing:
            # Explicit local test transport. Never advertised as email delivery.
            p = self.data / "last_otp.txt"
            fd = os.open(p, os.O_WRONLY | os.O_CREAT | os.O_TRUNC, 0o600)
            with os.fdopen(fd, "w") as f:
                f.write(address + " " + code)
            return
        message = EmailMessage()
        message["From"] = self.env["SMTP_FROM"]
        message["To"] = address
        message["Subject"] = "Your document portal verification code"
        message.set_content(f"Your verification code is {code}. It expires in 10 minutes.")
        with smtplib.SMTP(self.env["SMTP_HOST"], int(self.env.get("SMTP_PORT", "587")), timeout=15) as smtp:
            smtp.starttls(context=ssl.create_default_context())
            if self.env.get("SMTP_USER"):
                smtp.login(self.env["SMTP_USER"], self.env.get("SMTP_PASSWORD", ""))
            smtp.send_message(message)

    def verify(self, d):
        address = email(d.get("email"))
        self.limit("mail:" + address, 5, 3600)
        now = int(time.time())
        code = f"{secrets.randbelow(1000000):06d}"
        digest = self.digest(address + ":" + code)
        with self.connect() as c:
            c.execute("BEGIN IMMEDIATE")
            row = c.execute("SELECT sent FROM otp WHERE email=?", (address,)).fetchone()
            if row and now - row["sent"] < 30:
                raise Rejected(429, "resend_cooldown")
            c.execute("INSERT OR REPLACE INTO otp VALUES(?,?,?,0,?)", (address, digest, now + 600, now))
        try:
            self.sendmail(address, code)
        except (OSError, smtplib.SMTPException, ValueError):
            with self.connect() as c:
                c.execute("DELETE FROM otp WHERE email=? AND digest=?", (address, digest))
            raise Rejected(503, "mail_unavailable")
        return {"sent": True, "testMode": self.testing, "expiresAt": now + 600}

    def confirm(self, d):
        address = email(d.get("email"))
        code = text(d, "code", 6, 6)
        now = int(time.time())
        token = secrets.token_urlsafe(32)
        valid = False
        with self.connect() as c:
            c.execute("BEGIN IMMEDIATE")
            row = c.execute("SELECT * FROM otp WHERE email=?", (address,)).fetchone()
            if row and row["expires"] > now and row["attempts"] < 5:
                valid = hmac.compare_digest(row["digest"], self.digest(address + ":" + code))
                if valid:
                    c.execute("DELETE FROM otp WHERE email=?", (address,))
                    c.execute("DELETE FROM proofs WHERE expires<=?", (now,))
                    c.execute("INSERT INTO proofs VALUES(?,?,?)", (self.digest(token), address, now + 1800))
                    self.audit(c, address, "verified")
                else:
                    c.execute("UPDATE otp SET attempts=attempts+1 WHERE email=?", (address,))
        if not valid:
            raise Rejected(400, "invalid_code")
        return {"verification": {"token": token, "subject": address}, "expiresAt": now + 1800}

    def attachments(self, d):
        attachments = d.get("attachments")
        if not isinstance(attachments, list) or not 1 <= len(attachments) <= 5:
            raise Rejected(400, "one_to_five_attachments_required")
        result = []
        for item in attachments:
            if not isinstance(item, dict):
                raise Rejected(400, "invalid_attachment")
            name = text(item, "name", 1, 180)
            suffix = Path(name).suffix.lower()
            size = item.get("size")
            sha = item.get("sha256")
            if ("/" in name or "\\" in name or any(ord(ch) < 32 for ch in name)
                    or suffix not in TYPES or type(size) is not int or not 0 < size <= MAX_FILE
                    or not isinstance(sha, str) or not re.fullmatch("[a-f0-9]{64}", sha)):
                raise Rejected(400, "invalid_attachment")
            result.append((name, size, sha, TYPES[suffix]))
        return result

    def submit(self, d):
        actor = self.identity(d)
        if email(d.get("senderEmail")) != actor:
            raise Rejected(403, "email_mismatch")
        sender = d.get("sender")
        if not isinstance(sender, dict):
            raise Rejected(400, "invalid_sender")
        subject = text(d, "subject", 5, 140)
        description = text(d, "description", 15, 1200)
        category = text(d, "category", 1, 100)
        local_id = text(d, "localId", 1, 100)
        name = text(sender, "name", 2, 150)
        org = text(sender, "organisation", 2, 200)
        attachments = self.attachments(d)
        request_digest = hashlib.sha256(json.dumps(
            {k: v for k, v in d.items() if k not in {"verification", "submittedAt"}},
            sort_keys=True, separators=(",", ":")).encode()).hexdigest()
        now = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
        with self.connect() as c:
            c.execute("BEGIN IMMEDIATE")
            existing = c.execute("SELECT * FROM records WHERE email=? AND local_id=?", (actor, local_id)).fetchone()
            if existing:
                rec = json.loads(existing["data"])
                if rec.get("requestDigest") != request_digest:
                    raise Rejected(409, "idempotency_conflict")
                ref = existing["id"]
            else:
                ref = self.newref(c)
                rec = {"id": ref, "title": subject, "description": description, "category": category,
                       "name": name, "org": org, "orgType": text(sender, "organisationType", 0, 100),
                       "email": actor, "phone": text(d, "senderPhone", 0, 40),
                       "state": text(d, "state", 0, 100), "priority": text(d, "priority", 0, 30),
                       "status": "received", "officer": "", "unit": "Registry",
                       "submittedAt": now, "updatedAt": now, "files": [], "events": [],
                       "declared": [list(a) for a in attachments], "requestDigest": request_digest}
                c.execute("INSERT INTO records(id,email,local_id,data) VALUES(?,?,?,?)",
                          (ref, actor, local_id, json.dumps(rec)))
                self.audit(c, actor, "intake_started", ref)
            tickets = []
            for idx, (filename, size, sha, ctype) in enumerate(attachments):
                row = c.execute("SELECT used FROM tickets WHERE ref=? AND idx=?", (ref, idx)).fetchone()
                if row and row["used"]:
                    continue
                ticket = secrets.token_urlsafe(32)
                c.execute("INSERT OR REPLACE INTO tickets VALUES(?,?,?,?,?,?,?,0,?)",
                          (self.digest(ticket), ref, idx, filename, size, sha, ctype, int(time.time()) + 900))
                tickets.append({"name": filename, "index": idx, "ticket": ticket})
        return {"referenceId": ref, "uploads": tickets}

    def owned(self, c, d, actor):
        ref = text(d, "referenceId", 1, 100).upper()
        row = c.execute("SELECT * FROM records WHERE id=? AND email=?", (ref, actor)).fetchone()
        if not row:
            raise Rejected(404, "not_found")
        return row, json.loads(row["data"])

    def status(self, d):
        actor = self.identity(d)
        with self.connect() as c:
            row, rec = self.owned(c, d, actor)
        rec.pop("declared", None)
        rec.pop("requestDigest", None)
        rec["intakeComplete"] = bool(row["complete"])
        return {"record": rec}

    def finalize(self, d):
        actor = self.identity(d)
        with self.connect() as c:
            c.execute("BEGIN IMMEDIATE")
            row, rec = self.owned(c, d, actor)
            pending = c.execute("SELECT count(*) FROM tickets WHERE ref=? AND used=0", (row["id"],)).fetchone()[0]
            if pending or len(rec["files"]) != len(rec["declared"]):
                raise Rejected(409, "attachments_incomplete")
            if not row["complete"]:
                rec["events"].append(self.event("received", "Submission and all attachments received.", "Registry"))
                c.execute("UPDATE records SET complete=1,data=? WHERE id=?", (json.dumps(rec), row["id"]))
                self.audit(c, actor, "submission_received", row["id"])
        return {"ok": True, "referenceId": row["id"], "intakeComplete": True}

    @staticmethod
    def event(status, label, actor, note=""):
        return {"at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()), "status": status,
                "label": label, "actor": actor, "note": note}

    def writeback(self, d):
        actor = self.identity(d)
        action = text(d, "action", 1, 20)
        if action not in {"note", "respond", "withdraw"}:
            raise Rejected(400, "invalid_action")
        body = text(d, "body", 0 if action == "withdraw" else 5, 1200)
        with self.connect() as c:
            c.execute("BEGIN IMMEDIATE")
            row, rec = self.owned(c, d, actor)
            if not row["complete"] or rec["status"] in TERMINAL:
                raise Rejected(409, "record_not_writable")
            if action == "withdraw":
                rec["status"] = "withdrawn"
            elif action == "respond":
                if rec["status"] != "action-required":
                    raise Rejected(409, "response_not_requested")
                rec["status"] = "review"
            rec["events"].append(self.event(rec["status"], "Submitter " + action, "Submitter", body))
            rec["updatedAt"] = rec["events"][-1]["at"]
            c.execute("UPDATE records SET data=? WHERE id=?", (json.dumps(rec), row["id"]))
            self.audit(c, actor, action, row["id"])
        return {"ok": True}

    def support(self, d, feedback=False):
        actor = self.identity(d)
        if email(d.get("email")) != actor:
            raise Rejected(403, "email_mismatch")
        case = {"name": text(d, "name", 2, 150), "email": actor, "message": text(d, "message", 15, 2000),
                "topic": text(d, "topic", 1, 150), "requestId": text(d, "aboutReference", 0, 100),
                "status": "open", "replies": [], "at": int(time.time())}
        if feedback:
            rating = d.get("rating")
            if type(rating) is not int or not 1 <= rating <= 5:
                raise Rejected(400, "invalid_rating")
            case["rating"] = rating
        table = "feedback" if feedback else "cases"
        request_key = text(d, "requestKey", 1, 100)
        with self.connect() as c:
            c.execute("BEGIN IMMEDIATE")
            existing = c.execute("SELECT ref FROM requests WHERE email=? AND key=? AND kind=?",
                                 (actor, request_key, table)).fetchone()
            if existing:
                original = json.loads(c.execute(f"SELECT data FROM {table} WHERE id=?", (existing["ref"],)).fetchone()["data"])
                if any(original.get(k) != case.get(k) for k in ("name", "email", "message", "topic", "requestId", "rating")):
                    raise Rejected(409, "idempotency_conflict")
                return {"caseRef": existing["ref"]}
            if feedback and case["requestId"]:
                self.owned(c, {"referenceId": case["requestId"]}, actor)
            ref = self.newref(c, "FEEDBACK" if feedback else "CASE")
            case["ref"] = ref
            c.execute(f"INSERT INTO {table} VALUES(?,?,?)", (ref, actor, json.dumps(case)))
            c.execute("INSERT INTO requests VALUES(?,?,?,?)", (actor, request_key, table, ref))
            self.audit(c, actor, table + "_created", ref)
        return {"caseRef": ref}

    def cases(self, d):
        actor = self.identity(d)
        offset = d.get("offset", 0)
        if type(offset) is not int or not 0 <= offset <= 1000000:
            raise Rejected(400, "invalid_offset")
        with self.connect() as c:
            rows = c.execute("SELECT data FROM cases WHERE email=? ORDER BY rowid DESC LIMIT 101 OFFSET ?", (actor, offset)).fetchall()
        return {"items": [json.loads(r["data"]) for r in rows[:100]], "more": len(rows) > 100}

    def logout(self, d):
        self.identity(d)
        with self.connect() as c:
            c.execute("DELETE FROM proofs WHERE digest=?", (self.digest(d["verification"]["token"]),))
        return {"ok": True}

    def admin(self, path, d):
        actor = self.identity(d, admin=True)
        with self.connect() as c:
            if path == "/api/admin/list":
                offset = d.get("offset", 0)
                if type(offset) is not int or not 0 <= offset <= 1000000:
                    raise Rejected(400, "invalid_offset")
                reference = text(d, "referenceId", 0, 100)
                result = {}
                more = False
                for table in ("records", "cases", "feedback"):
                    if reference:
                        rows = c.execute(f"SELECT * FROM {table} WHERE id=?", (reference,)).fetchall()
                    else:
                        rows = c.execute(f"SELECT * FROM {table} ORDER BY rowid DESC LIMIT 101 OFFSET ?", (offset,)).fetchall()
                    more = more or len(rows) > 100
                    result[table] = []
                    for row in rows[:100]:
                        rec = json.loads(row["data"])
                        rec.pop("declared", None)
                        rec.pop("requestDigest", None)
                        if table == "records":
                            rec["intakeComplete"] = bool(row["complete"])
                        result[table].append(rec)
                audit_rows = c.execute("SELECT * FROM audit ORDER BY id DESC LIMIT 101 OFFSET ?", (offset,)).fetchall()
                more = more or len(audit_rows) > 100
                result["audit"] = [dict(r) for r in audit_rows[:100]]
                result["pagination"] = {"offset": offset, "pageSize": 100, "more": more}
                return result
            c.execute("BEGIN IMMEDIATE")
            ref = text(d, "referenceId", 1, 100)
            note = text(d, "body", 5, 1200)
            if path == "/api/admin/record":
                row = c.execute("SELECT * FROM records WHERE id=?", (ref,)).fetchone()
                if not row:
                    raise Rejected(404, "not_found")
                rec = json.loads(row["data"])
                status = text(d, "status", 1, 30)
                if not row["complete"] or rec["status"] in TERMINAL or status not in STATUSES:
                    raise Rejected(409, "invalid_transition")
                rec["status"] = status
                rec["officer"] = text(d, "officer", 0, 150)
                rec["unit"] = text(d, "unit", 0, 150)
                rec["events"].append(self.event(status, "Registry update", "Registry", note))
                rec["updatedAt"] = rec["events"][-1]["at"]
                c.execute("UPDATE records SET data=? WHERE id=?", (json.dumps(rec), ref))
            elif path == "/api/admin/case":
                row = c.execute("SELECT data FROM cases WHERE id=?", (ref,)).fetchone()
                if not row:
                    raise Rejected(404, "not_found")
                rec = json.loads(row["data"])
                status = text(d, "status", 1, 20)
                if status not in {"open", "closed"}:
                    raise Rejected(400, "invalid_status")
                rec["status"] = status
                rec["replies"].append({"at": int(time.time()), "message": note})
                c.execute("UPDATE cases SET data=? WHERE id=?", (json.dumps(rec), ref))
            else:
                raise Rejected(404, "not_found")
            self.audit(c, actor, path.rsplit("/", 1)[-1] + "_updated", ref)
        return {"ok": True}


class Handler(SimpleHTTPRequestHandler):
    server_version = "DocumentPortal"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT / "public"), **kwargs)

    @property
    def portal(self):
        return self.server.portal

    def log_message(self, *_args):
        pass

    def setup(self):
        super().setup()
        self.connection.settimeout(30)

    def end_headers(self):
        for key, value in {
            "X-Content-Type-Options": "nosniff", "X-Frame-Options": "DENY",
            "Referrer-Policy": "no-referrer", "Cache-Control": "no-store",
            "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
            "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline'; "
                "style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; "
                "connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'",
        }.items():
            self.send_header(key, value)
        super().end_headers()

    def out(self, status, data):
        body = json.dumps(data, separators=(",", ":")).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def list_directory(self, _path):
        self.send_error(404)
        return None

    def do_HEAD(self):
        self.do_GET(head=True)

    def do_GET(self, head=False):
        path = urlparse(self.path).path
        if path == "/healthz":
            with self.portal.connect() as c:
                c.execute("SELECT count(*) FROM records").fetchone()
            if head:
                self.send_response(200)
                self.end_headers()
                return
            return self.out(200, {"status": "ok", "testMode": self.portal.testing})
        if path.startswith("/api/"):
            return self.out(404, {"error": "not_found"})
        return super().do_HEAD() if head else super().do_GET()

    def guard(self, binary=False):
        origin = self.headers.get("Origin")
        if origin and origin != self.portal.origin:
            raise Rejected(403, "origin_denied")
        if self.headers.get("Sec-Fetch-Site") == "cross-site":
            raise Rejected(403, "origin_denied")
        if self.headers.get("Transfer-Encoding"):
            raise Rejected(400, "invalid_length")
        try:
            length = int(self.headers.get("Content-Length", "-1"))
        except ValueError:
            raise Rejected(400, "invalid_length")
        if not 0 <= length <= (MAX_FILE if binary else 65536):
            raise Rejected(413, "request_too_large")
        if not binary and self.headers.get_content_type() != "application/json":
            raise Rejected(415, "json_required")
        self.portal.limit("ip:" + self.client_address[0], 120, 60)
        return length

    def do_POST(self):
        try:
            length = self.guard()
            d = json.loads(self.rfile.read(length))
            if not isinstance(d, dict):
                raise Rejected(400, "invalid_request")
            path = urlparse(self.path).path
            if path == "/api/files":
                return self.download(d)
            routes = {
                "/api/verify": self.portal.verify, "/api/verify/confirm": self.portal.confirm,
                "/api/submissions": self.portal.submit, "/api/status": self.portal.status,
                "/api/submissions/complete": self.portal.finalize, "/api/writeback": self.portal.writeback,
                "/api/support": self.portal.support, "/api/support/status": self.portal.cases,
                "/api/logout": self.portal.logout,
                "/api/feedback": partial(self.portal.support, feedback=True),
            }
            if path.startswith("/api/admin/"):
                result = self.portal.admin(path, d)
            elif path in routes:
                result = routes[path](d)
            else:
                raise Rejected(404, "not_found")
            self.out(200, result)
        except Rejected as exc:
            self.close_connection = True
            self.out(exc.status, {"error": exc.error})
        except (ValueError, UnicodeError):
            self.out(400, {"error": "invalid_request"})
        except Exception:
            logging.exception("Portal request failed")
            self.out(500, {"error": "server_error"})

    def do_PUT(self):
        try:
            length = self.guard(binary=True)
            if urlparse(self.path).path != "/api/uploads":
                raise Rejected(404, "not_found")
            ticket = self.headers.get("X-Upload-Ticket", "")
            body = self.rfile.read(length)
            with self.portal.connect() as c:
                c.execute("BEGIN IMMEDIATE")
                row = c.execute("SELECT * FROM tickets WHERE digest=?", (self.portal.digest(ticket),)).fetchone()
                if not row or row["used"] or row["expires"] <= time.time():
                    raise Rejected(403, "invalid_ticket")
                if len(body) != row["size"] or length != row["size"]:
                    raise Rejected(400, "size_mismatch")
                if not hmac.compare_digest(hashlib.sha256(body).hexdigest(), row["sha"]):
                    raise Rejected(400, "digest_mismatch")
                # Storage names contain no user-supplied path components.
                filename = hashlib.sha256((row["ref"] + ":" + str(row["idx"])).encode()).hexdigest()
                temp = self.portal.files / (filename + ".tmp")
                with temp.open("wb") as f:
                    f.write(body)
                temp.chmod(0o600)
                temp.replace(self.portal.files / filename)
                rec = json.loads(c.execute("SELECT data FROM records WHERE id=?", (row["ref"],)).fetchone()["data"])
                rec["files"].append({"name": row["name"], "size": length, "sha256": row["sha"], "index": row["idx"]})
                c.execute("UPDATE records SET data=? WHERE id=?", (json.dumps(rec), row["ref"]))
                c.execute("UPDATE tickets SET used=1 WHERE digest=?", (row["digest"],))
                self.portal.audit(c, "upload-ticket", "file_stored", row["ref"])
            self.out(200, {"stored": True})
        except Rejected as exc:
            self.close_connection = True
            self.out(exc.status, {"stored": False, "reason": exc.error})
        except Exception:
            logging.exception("Upload failed")
            self.out(500, {"stored": False, "reason": "server_error"})

    def download(self, d):
        actor = self.portal.identity(d)
        ref = text(d, "referenceId", 1, 100)
        index = d.get("index")
        if type(index) is not int or not 0 <= index < 5:
            raise Rejected(400, "invalid_index")
        with self.portal.connect() as c:
            owner = c.execute("SELECT email FROM records WHERE id=?", (ref,)).fetchone()
            if not owner or (owner["email"] != actor and actor not in self.portal.admins):
                raise Rejected(404, "not_found")
            row = c.execute("SELECT * FROM tickets WHERE ref=? AND idx=? AND used=1", (ref, index)).fetchone()
        if not row:
            raise Rejected(404, "not_found")
        filename = hashlib.sha256((ref + ":" + str(index)).encode()).hexdigest()
        with (self.portal.files / filename).open("rb") as f:
            body = f.read()
        self.send_response(200)
        self.send_header("Content-Type", "application/octet-stream")
        self.send_header("Content-Disposition", f'attachment; filename="document-{index}{Path(row["name"]).suffix.lower()}"')
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


def make_server(environ=None, address=None):
    portal = Portal(environ)
    host = portal.env.get("HOST", "127.0.0.1")
    if portal.testing and host not in {"127.0.0.1", "::1", "localhost"}:
        raise RuntimeError("Test mode may bind only to loopback")
    server = ThreadingHTTPServer(address or (host, int(portal.env.get("PORT", "8080"))), Handler)
    server.portal = portal
    return server


if __name__ == "__main__":
    make_server().serve_forever()
