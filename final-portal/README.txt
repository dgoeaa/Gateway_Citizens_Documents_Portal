FINAL PORTAL — PRE-PRODUCTION PACKAGE

This is the only definitive runtime package produced by this consolidation.
The original top-level variants remain unchanged archival inputs. Do not serve
the repository root, combine their files into this web root, or use their old
completion reports as current release evidence.

Repository:
/home/runner/work/Gateway_Citizens_Documents_Portal/Gateway_Citizens_Documents_Portal
Package:
/home/runner/work/Gateway_Citizens_Documents_Portal/Gateway_Citizens_Documents_Portal/final-portal

Read RELEASE.txt for selection, scope, enhancement decisions, exclusions and
verification limitations. source-inventory.json records local source hashes.
No internet searches, package downloads or external runtime libraries are needed.

RUNTIME
Python 3.11+ standard library, SQLite, and a modern JavaScript-enabled browser.
There is no npm install, build step, container pull, CDN or dependency installer.
The server serves ONLY its own public directory; database/files are private.

LOCAL CHECK
  python -m unittest discover -s /home/runner/work/Gateway_Citizens_Documents_Portal/Gateway_Citizens_Documents_Portal/final-portal/tests -v
  find /home/runner/work/Gateway_Citizens_Documents_Portal/Gateway_Citizens_Documents_Portal/final-portal/public -name '*.js' -print0 | xargs -0 -n1 node --check

LOCAL DEMONSTRATION WITH SYNTHETIC DATA ONLY
  export PORTAL_TEST_MODE=1
  export HOST=127.0.0.1 PORT=8080
  export PORTAL_ORIGIN=http://127.0.0.1:8080
  export PORTAL_DATA=/tmp/portal-local-data
  export PORTAL_ADMINS=operator@example.invalid
  python /home/runner/work/Gateway_Citizens_Documents_Portal/Gateway_Citizens_Documents_Portal/final-portal/app/server.py

Open http://127.0.0.1:8080/; staff use /admin.html. The explicit test transport
writes the latest recipient and code to /tmp/portal-local-data/last_otp.txt.
It does NOT send email. Read it only as a local test operator, never expose it
through a web root, and delete the isolated test data after testing.
The UI labels this transport. Test mode refuses non-loopback HOST bindings.
Do not put a test-mode process behind a public reverse proxy.

DEPLOYMENT CONFIGURATION (NOT AN APPROVAL TO GO LIVE)
Copy .env.example to an operator-owned file OUTSIDE public, supply real values,
and export them in the process environment. The server does not load .env files.
Never commit the completed values. Required outside explicit test mode:
  PORTAL_SECRET   persistent random value, at least 32 characters
  PORTAL_ORIGIN   exact externally visible HTTPS origin, no path
  PORTAL_ADMINS   comma-separated authorized staff email addresses
  SMTP_HOST      operator SMTP server with STARTTLS support
  SMTP_FROM      authorized sender address
Optional:
  SMTP_PORT      default 587
  SMTP_USER      authenticate if supplied
  SMTP_PASSWORD  SMTP authentication secret
  PORTAL_DATA    private persistent directory; default package/data
  HOST, PORT     default 127.0.0.1:8080; keep private behind TLS termination
Missing mandatory configuration fails startup; delivery errors are HTTP 503,
not successful mail claims. SMTP acceptance is not proof of inbox delivery.
Production startup has not been tested with an actual SMTP provider.

Use a least-privileged OS account and a dedicated origin. Do not expose the
Python server directly to the internet. The supplied reverse-proxy example
requires the operator's real DNS and certificate/key files. Do not enable broad
CORS or trust caller-controlled forwarded-IP headers. Rate limits use the
socket peer; a single proxy shares that limit. Load, trusted proxy addressing
and distributed deployment require further engineering and validation.

DATA AND WORKFLOW CONTRACT
All APIs are same-origin POST JSON except raw PUT /api/uploads and GET /healthz.
One shared email-code exchange: /api/verify -> /api/verify/confirm.
Codes expire in 10 minutes, allow five incorrect attempts and are single-use.
Resend cooldown: 30 seconds; address limit: five issuance attempts/hour.
Proofs are email-bound reusable bearer credentials for 30 minutes, held only
in page memory in the UI. They are NOT single-use action proofs. Staff rights
come solely from the server allowlist on every privileged call.
POST /api/logout revokes that proof. Changing PORTAL_SECRET invalidates existing
OTP/proof digests; keep it stable across ordinary restarts.

Submit metadata with localId, senderEmail, sender (name/organisation), subject,
category, description and 1–5 attachments (name, positive size <=10 MiB, sha256).
The response issues NITDA-YYYY-sequence and name/ticket objects. Upload every
declared file using X-Upload-Ticket. Tickets expire after 15 minutes and are
single-use. Server checks filename extension, length and SHA-256, not malware
or the actual document's claimed MIME semantics.
POST /api/submissions/complete requires owner proof and every attachment.
Only this step confirms receipt. A lost reply is not evidence of failure or
success: resume the saved draft with the SAME attempt ID and original files.
Already stored files are not uploaded twice; unspent tickets are renewed.
Changed payloads under an existing attempt are rejected with HTTP 409.
Discarding the draft starts a separate attempt, not recovery of the old one.

POST /api/status and /api/writeback require owner proof. Unknown references and
other owners' references return the same 404 after the proof boundary.
Notes and responses append actual timeline events; withdrawal is terminal.
Admin can assign unit/officer and update nonterminal complete records.
No decision or acknowledgement email is sent by this package.

Support and feedback also require proof, matching email and a requestKey.
Support may quote an unknown reference without disclosing a record; feedback
linked to a reference requires ownership. Feedback includes integer rating 1–5.
Identical requestKey retries return the original reference; changed content
returns HTTP 409. Reset the form only to deliberately start a separate case.
Read replies through verified case refresh, including older pages.
Admin supports queue paging, exact reference, case replies, feedback, audit,
private unscanned downloads and export of the displayed snapshot.
This is a small registry workspace, NOT DGO's entire enterprise platform.

OPERATIONS AND OPEN RELEASE GATES
Back up BOTH database and private files under a controlled write/maintenance
window. Use SQLite's online backup API or stop the service before copying;
copying portal.db alone while WAL writes are active is not a consistent backup.
Test restoration to isolated storage before relying on it.
No automatic retention/deletion, malware scanner, at-rest encryption, immutable
audit sink, tenant provisioning or directorate-level authorization is supplied.
Database audit entries are transactionally stored, not tamper-proof.
Review contacts, legal basis, retention, operator permissions, supported devices,
SMTP delivery, TLS, accessibility, backups and capacity before real data.
Never infer that a configured endpoint or healthy local database proves SMTP,
external registry services or an organizational workflow is available.

The public service worker caches only an allowlisted public shell. API/staff
responses are never cached. Bump its cache identifier on each new release.
Drafts, preparation history and cached cases remain in browser localStorage;
clear site data on shared devices. They are not authoritative or encrypted.
No stale browser proof/outbox is resent automatically. Offline record copies
are labelled read-only. Reattach files when restoring a draft.
