# NITDA Document Portal Production Package v3.1

Self-contained public portal and server-side registry gateway. It retains the reviewed v3.0 user experience and replaces empty endpoints, local demo registry behavior, mock records, hardcoded staff credentials and exposed bearer URLs with same-origin APIs, SQLite WAL persistence, expiring OTP proofs, single-use upload tickets, SHA-256 enforcement, rate limits, audit logging, security headers and health checks.

## Start

```bash
export PORTAL_SECRET=$(python -c "import secrets;print(secrets.token_hex(32))")
export SMTP_HOST=smtp.example.gov.ng SMTP_FROM=portal@example.gov.ng
python app/server.py
```

Open `http://localhost:8080`. For live deployment, place it behind the supplied TLS reverse-proxy configuration and use persistent storage. SMTP is deliberately mandatory outside test mode because verification must actually reach the submitter.

## Operations

Back up `data/portal.db` and `data/files/`; monitor `/healthz`; rotate `PORTAL_SECRET` only with an OTP-proof invalidation window; set `Cache-Control: no-cache` for `config.local.js` and `sw.js`; bump the service-worker cache identifier on each release.
