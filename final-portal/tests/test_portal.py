"""Local HTTP integration checks using only Python's standard library."""
import concurrent.futures
import hashlib
import importlib.util
import json
from html.parser import HTMLParser
from pathlib import Path
import secrets
import tempfile
import threading
import re
import unittest
from unittest.mock import patch
from urllib.error import HTTPError
from urllib.request import Request, urlopen
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("portal_server", ROOT / "app/server.py")
server_module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(server_module)


class PortalTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(prefix="portal-test-")
        self.env = {
            "PORTAL_TEST_MODE": "1", "PORTAL_SECRET": secrets.token_hex(32),
            "PORTAL_DATA": self.temp.name, "PORTAL_ADMINS": "operator@example.invalid",
        }
        self.server = server_module.make_server(self.env, ("127.0.0.1", 0))
        self.base = "http://127.0.0.1:" + str(self.server.server_port)
        self.server.portal.origin = self.base
        self.thread = threading.Thread(target=self.server.serve_forever, daemon=True)
        self.thread.start()
        self.body = b"%PDF-1.4\nLocal synthetic integration fixture, not a citizen document.\n"

    def tearDown(self):
        self.server.shutdown()
        self.server.server_close()
        self.thread.join()
        self.temp.cleanup()

    def call(self, path, data=None, method="POST", headers=None, binary=False):
        raw = data if isinstance(data, bytes) else json.dumps(data or {}).encode()
        req = Request(self.base + path, data=None if method in {"GET", "HEAD"} else raw,
                      method=method, headers=headers or {"Content-Type": "application/json"})
        try:
            response = urlopen(req, timeout=5)
        except HTTPError as error:
            response = error
        with response:
            body = response.read()
            return response.status, body if binary else json.loads(body)

    def proof(self, address="citizen@example.invalid"):
        status, result = self.call("/api/verify", {"email": address})
        self.assertEqual(status, 200)
        self.assertTrue(result["testMode"])
        code = (Path(self.temp.name) / "last_otp.txt").read_text().split()[-1]
        status, result = self.call("/api/verify/confirm", {"email": address, "code": code})
        self.assertEqual(status, 200)
        return result["verification"]

    def payload(self, proof):
        return {
            "verification": proof, "localId": secrets.token_hex(16),
            "senderEmail": proof["subject"], "subject": "Integration fixture",
            "description": "A synthetic local test submission.",
            "category": "General Correspondence", "priority": "standard",
            "sender": {"name": "Test submitter", "organisation": "Test organization"},
            "attachments": [{"name": "test.pdf", "size": len(self.body),
                             "sha256": hashlib.sha256(self.body).hexdigest()}],
        }

    def submit(self, proof=None, complete=True):
        proof = proof or self.proof()
        payload = self.payload(proof)
        status, result = self.call("/api/submissions", payload)
        self.assertEqual(status, 200)
        ref = result["referenceId"]
        ticket = result["uploads"][0]["ticket"]
        if complete:
            self.assertEqual(self.upload(ticket)[0], 200)
            status, result = self.call("/api/submissions/complete", {"referenceId": ref, "verification": proof})
            self.assertEqual(status, 200)
            self.assertTrue(result["intakeComplete"])
        return ref, proof, ticket, payload

    def upload(self, ticket, body=None):
        return self.call("/api/uploads", self.body if body is None else body, method="PUT",
                         headers={"Content-Type": "application/octet-stream", "X-Upload-Ticket": ticket})

    def test_complete_submission_tracking_download_and_restart(self):
        ref, proof, _, payload = self.submit()
        self.assertRegex(ref, r"^NITDA-\d{4}-[1-9]\d*$")
        query = {"referenceId": ref, "verification": proof}
        status, result = self.call("/api/status", query)
        self.assertEqual(status, 200)
        self.assertTrue(result["record"]["intakeComplete"])
        self.assertEqual(len(result["record"]["files"]), 1)
        status, body = self.call("/api/files", dict(query, index=0), binary=True)
        self.assertEqual((status, body), (200, self.body))
        # A second application instance reads persisted state without reseeding.
        reopened = server_module.Portal(self.env)
        self.assertEqual(reopened.status(query)["record"]["id"], ref)
        status, retry = self.call("/api/submissions", payload)
        self.assertEqual((status, retry["referenceId"], retry["uploads"]), (200, ref, []))

    def test_authentication_and_uniform_owner_denial(self):
        ref, owner, _, _ = self.submit()
        other = self.proof("other@example.invalid")
        self.assertEqual(self.call("/api/status", {"referenceId": ref})[0], 403)
        wrong = self.call("/api/status", {"referenceId": ref, "verification": other})
        missing = self.call("/api/status", {"referenceId": "NITDA-2000-999", "verification": other})
        self.assertEqual(wrong, missing)
        self.assertEqual(wrong[0], 404)
        self.assertEqual(self.call("/api/files", {"referenceId": ref, "verification": other, "index": 0})[0], 404)
        forged = dict(owner, subject=other["subject"], token="not-a-proof")
        self.assertEqual(self.call("/api/admin/list", {"verification": forged})[0], 403)
        self.assertEqual(self.call("/api/admin/list", {"verification": owner})[0], 403)

    def test_partial_upload_and_replay_are_not_success(self):
        ref, proof, ticket, _ = self.submit(complete=False)
        query = {"referenceId": ref, "verification": proof}
        self.assertFalse(self.call("/api/status", query)[1]["record"]["intakeComplete"])
        self.assertEqual(self.call("/api/submissions/complete", query)[0], 409)
        self.assertEqual(self.call("/api/writeback", dict(query, action="withdraw"))[0], 409)
        self.assertEqual(self.upload(ticket, b"x" * len(self.body))[0], 400)
        self.assertEqual(self.upload(ticket, b"x")[0], 400)
        self.assertEqual(self.upload(ticket)[0], 200)
        self.assertEqual(self.upload(ticket)[0], 403)
        self.assertEqual(self.call("/api/submissions/complete", query)[0], 200)
        self.assertEqual(self.call("/api/submissions/complete", query)[0], 200)

    def test_concurrent_upload_ticket_is_single_use(self):
        ref, proof, ticket, _ = self.submit(complete=False)
        with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
            statuses = list(pool.map(lambda _: self.upload(ticket)[0], range(2)))
        self.assertEqual(sorted(statuses), [200, 403])
        record = self.call("/api/status", {"referenceId": ref, "verification": proof})[1]["record"]
        self.assertEqual(len(record["files"]), 1)

    def test_resumed_tickets_keep_original_attachment_indexes(self):
        proof = self.proof()
        payload = self.payload(proof)
        second = self.body + b"second test attachment"
        payload["attachments"].append({"name": "test.pdf", "size": len(second),
                                       "sha256": hashlib.sha256(second).hexdigest()})
        status, result = self.call("/api/submissions", payload)
        self.assertEqual(status, 200)
        self.assertEqual([t["index"] for t in result["uploads"]], [0, 1])
        self.assertEqual(self.upload(result["uploads"][0]["ticket"])[0], 200)
        status, retry = self.call("/api/submissions", payload)
        self.assertEqual(status, 200)
        self.assertEqual([t["index"] for t in retry["uploads"]], [1])
        self.assertEqual(self.upload(retry["uploads"][0]["ticket"], second)[0], 200)
        self.assertEqual(self.call("/api/submissions/complete",
                                  {"referenceId": result["referenceId"], "verification": proof})[0], 200)

    def test_otp_attempt_ceiling_cooldown_expiry_and_single_use(self):
        address = "attempts@example.invalid"
        self.assertEqual(self.call("/api/verify", {"email": address})[0], 200)
        code = (Path(self.temp.name) / "last_otp.txt").read_text().split()[-1]
        self.assertEqual(self.call("/api/verify", {"email": address})[0], 429)
        wrong = "000000" if code != "000000" else "111111"
        for _ in range(5):
            self.assertEqual(self.call("/api/verify/confirm", {"email": address, "code": wrong})[0], 400)
        self.assertEqual(self.call("/api/verify/confirm", {"email": address, "code": code})[0], 400)
        proof = self.proof("single@example.invalid")
        self.assertEqual(self.call("/api/verify/confirm", {"email": proof["subject"], "code": code})[0], 400)
        with self.server.portal.connect() as c:
            c.execute("UPDATE proofs SET expires=0")
        self.assertEqual(self.call("/api/admin/list", {"verification": proof})[0], 403)
        expired = "expired@example.invalid"
        self.call("/api/verify", {"email": expired})
        code = (Path(self.temp.name) / "last_otp.txt").read_text().split()[-1]
        with self.server.portal.connect() as c:
            c.execute("UPDATE otp SET expires=0 WHERE email=?", (expired,))
        self.assertEqual(self.call("/api/verify/confirm", {"email": expired, "code": code})[0], 400)

    def test_mail_failure_is_not_reported_as_sent(self):
        with patch.object(self.server.portal, "sendmail", side_effect=OSError("local transport failure")):
            status, body = self.call("/api/verify", {"email": "failure@example.invalid"})
        self.assertEqual((status, body), (503, {"error": "mail_unavailable"}))
        with self.server.portal.connect() as c:
            self.assertIsNone(c.execute("SELECT * FROM otp WHERE email='failure@example.invalid'").fetchone())

    def test_validation_limits_and_idempotency(self):
        proof = self.proof()
        payload = self.payload(proof)
        for key, invalid in (("subject", ""), ("description", ""), ("attachments", []), ("sender", [])):
            self.assertEqual(self.call("/api/submissions", dict(payload, **{key: invalid}))[0], 400)
        for name in ("../test.pdf", "test.exe", "test\n.pdf"):
            bad = dict(payload, attachments=[dict(payload["attachments"][0], name=name)])
            self.assertEqual(self.call("/api/submissions", bad)[0], 400)
        for size in (-1, True, 0, server_module.MAX_FILE + 1):
            bad = dict(payload, attachments=[dict(payload["attachments"][0], size=size)])
            self.assertEqual(self.call("/api/submissions", bad)[0], 400)
        status, result = self.call("/api/submissions", payload)
        self.assertEqual(status, 200)
        status, duplicate = self.call("/api/submissions", payload)
        self.assertEqual(result["referenceId"], duplicate["referenceId"])
        self.assertEqual(status, 200)
        self.assertEqual(self.call("/api/submissions", dict(payload, subject="Changed content"))[0], 409)
        changed_sender = dict(payload, sender=dict(payload["sender"], name="Changed sender"))
        self.assertEqual(self.call("/api/submissions", changed_sender)[0], 409)
        self.assertEqual(self.call("/api/submissions", dict(payload, senderEmail="other@example.invalid"))[0], 403)

    def test_admin_workflow_support_feedback_and_audit(self):
        ref, owner, _, _ = self.submit()
        admin = self.proof("operator@example.invalid")
        query = {"verification": admin}
        data = dict(query, referenceId=ref, status="action-required", unit="Registry", officer="Test operator", body="Please clarify the test request.")
        self.assertEqual(self.call("/api/admin/record", data)[0], 200)
        self.assertEqual(self.call("/api/writeback", {"verification": owner, "referenceId": ref,
                                                    "action": "respond", "body": "Test clarification provided."})[0], 200)
        state = self.call("/api/status", {"referenceId": ref, "verification": owner})[1]["record"]
        self.assertEqual(state["status"], "review")
        case = {"verification": owner, "name": "Test submitter", "email": owner["subject"],
                "topic": "Tracking", "message": "Please review this synthetic test case.",
                "aboutReference": ref, "requestKey": secrets.token_hex(16)}
        status, result = self.call("/api/support", case)
        self.assertEqual(status, 200)
        case_ref = result["caseRef"]
        self.assertEqual(self.call("/api/support", case)[1]["caseRef"], case_ref)
        self.assertEqual(self.call("/api/support", dict(case, message="Changed message with the same request key."))[0], 409)
        self.assertEqual(self.call("/api/admin/case", dict(query, referenceId=case_ref, status="closed",
                                                         body="The local test case has been reviewed."))[0], 200)
        status, cases = self.call("/api/support/status", {"verification": owner})
        self.assertEqual(status, 200)
        self.assertEqual(len(cases["items"]), 1)
        self.assertEqual(cases["items"][0]["status"], "closed")
        self.assertEqual(len(cases["items"][0]["replies"]), 1)
        self.assertEqual(self.call("/api/feedback", dict(case, rating=5))[0], 200)
        self.assertEqual(self.call("/api/feedback", dict(case, rating=6))[0], 400)
        self.assertEqual(self.call("/api/feedback", dict(case, rating=4))[0], 409)
        status, overview = self.call("/api/admin/list", query)
        self.assertEqual(status, 200)
        self.assertEqual([len(overview[k]) for k in ("records", "cases", "feedback")], [1, 1, 1])
        self.assertTrue(any(e["event"] == "record_updated" for e in overview["audit"]))
        self.assertEqual(self.call("/api/logout", query)[0], 200)
        self.assertEqual(self.call("/api/admin/list", query)[0], 403)

    def test_paging_and_exact_reference_keep_older_work_accessible(self):
        owner = self.proof()
        admin = self.proof("operator@example.invalid")
        with self.server.portal.connect() as c:
            for i in range(205):
                item = {"ref": f"CASE-2000-{i + 1}", "email": owner["subject"], "message": "Synthetic paging fixture.",
                        "status": "open", "replies": []}
                c.execute("INSERT INTO cases VALUES(?,?,?)", (item["ref"], owner["subject"], json.dumps(item)))
        query = {"verification": admin}
        first = self.call("/api/admin/list", query)[1]
        self.assertEqual(len(first["cases"]), 100)
        self.assertTrue(first["pagination"]["more"])
        older = self.call("/api/admin/list", dict(query, offset=200))[1]
        self.assertEqual(len(older["cases"]), 5)
        exact = self.call("/api/admin/list", dict(query, referenceId="CASE-2000-1"))[1]
        self.assertEqual(exact["cases"][0]["ref"], "CASE-2000-1")
        citizen = self.call("/api/support/status", {"verification": owner, "offset": 200})[1]
        self.assertEqual(len(citizen["items"]), 5)
        self.assertEqual(self.call("/api/admin/list", dict(query, offset=-1))[0], 400)

    def test_support_accepts_unknown_reference_without_exposing_records(self):
        owner = self.proof()
        case = {"verification": owner, "email": owner["subject"], "name": "Test submitter",
                "topic": "Tracking ID not found", "message": "Please help locate this unknown test reference.",
                "aboutReference": "NITDA-2000-999999", "requestKey": secrets.token_hex(16)}
        self.assertEqual(self.call("/api/support", case)[0], 200)
        self.assertEqual(self.call("/api/feedback", dict(case, rating=5))[0], 404)

    def test_withdrawal_and_terminal_record_protection(self):
        ref, owner, _, _ = self.submit()
        query = {"verification": owner, "referenceId": ref}
        self.assertEqual(self.call("/api/writeback", dict(query, action="nonsense"))[0], 400)
        self.assertEqual(self.call("/api/writeback", dict(query, action="withdraw"))[0], 200)
        self.assertEqual(self.call("/api/writeback", dict(query, action="note", body="A later test note"))[0], 409)
        admin = self.proof("operator@example.invalid")
        self.assertEqual(self.call("/api/admin/record", dict(query, verification=admin, status="review",
                                                         body="Try to reopen closed record"))[0], 409)

    def test_http_boundary_and_private_storage(self):
        self.assertEqual(self.call("/healthz", method="GET")[1]["testMode"], True)
        self.assertEqual(self.call("/api/unknown", {})[0], 404)
        self.assertEqual(self.call("/api/verify", b"[]")[0], 400)
        self.assertEqual(self.call("/api/verify", b"{")[0], 400)
        self.assertEqual(self.call("/api/verify", b"{}", headers={"Content-Type": "text/plain"})[0], 415)
        self.assertEqual(self.call("/api/verify", {}, headers={"Content-Type": "application/json", "Origin": "https://invalid.example"})[0], 403)
        self.assertEqual(self.call("/api/verify", b"x" * 65537)[0], 413)
        for path in ("/data/portal.db", "/app/server.py", "/../app/server.py", "/ds/"):
            status, _ = self.call(path, method="GET", binary=True)
            self.assertEqual(status, 404)
        self.assertEqual(self.call("/index.html", method="GET", binary=True)[0], 200)

    def test_configuration_fails_closed(self):
        base = dict(self.env)
        base.pop("PORTAL_TEST_MODE")
        with self.assertRaises(RuntimeError):
            server_module.Portal(base)
        base.update(SMTP_HOST="unused.invalid", SMTP_FROM="portal@example.invalid", PORTAL_ORIGIN="https://portal.example.invalid")
        server_module.Portal(base)
        for key in ("PORTAL_SECRET", "PORTAL_ORIGIN", "SMTP_HOST", "PORTAL_ADMINS"):
            invalid = dict(base)
            invalid.pop(key)
            with self.assertRaises(RuntimeError, msg=key):
                server_module.Portal(invalid)
        with self.assertRaises(RuntimeError):
            server_module.Portal(dict(self.env, PORTAL_DATA=str(ROOT / "public" / "data")))
        with self.assertRaises(RuntimeError):
            server_module.make_server(dict(self.env, HOST="0.0.0.0"))


class PackageIntegrityTests(unittest.TestCase):
    def test_local_page_assets_and_navigation_exist(self):
        class References(HTMLParser):
            def __init__(self):
                super().__init__()
                self.refs = []
                self.scripts = []

            def handle_starttag(self, tag, attrs):
                attrs = dict(attrs)
                for key in ("src", "href"):
                    if attrs.get(key):
                        self.refs.append(attrs[key])
                if tag == "script" and attrs.get("src"):
                    self.scripts.append(attrs["src"])

        public = ROOT / "public"
        for path in public.glob("*.html"):
            parser = References()
            parser.feed(path.read_text())
            for ref in parser.refs:
                parsed = urlparse(ref)
                if parsed.scheme or parsed.netloc or not parsed.path:
                    continue
                target = ((public / parsed.path.lstrip("/")) if parsed.path.startswith("/")
                          else (path.parent / parsed.path)).resolve()
                if target.is_dir():
                    target = target / "index.html"
                self.assertTrue(target.is_file(), f"{path.name}: missing {ref}")
            for script in parser.scripts:
                self.assertFalse(urlparse(script).netloc, f"{path.name}: external script {script}")

    def test_service_worker_contains_only_existing_public_shell_assets(self):
        source = (ROOT / "public/sw.js").read_text()
        shell = re.search(r"const SHELL = \[(.*?)\];", source, re.S).group(1)
        for asset in re.findall(r"'([^']+)'", shell):
            self.assertNotIn("api/", asset)
            self.assertNotIn("admin", asset)
            self.assertTrue((ROOT / "public" / asset).exists(), asset)
        self.assertIn("!PUBLIC_URLS.has(url.href)", source)


if __name__ == "__main__":
    unittest.main()
