# DGO Document Portal Operations

## Start
`docker compose up -d --build`

## Verify
`curl -fsS http://localhost:8080/healthz` then open `http://localhost:8080`.

## Controls
Same-origin API, SQLite persistence, 20 MB request cap, CSP and browser security headers, non-root container, read-only root filesystem, persistent data volume, health check, audit event ledger and SHA-256 scan receipts are active. OTP codes are never returned unless `DGO_OTP_DEBUG=1`; production delivery requires an approved mail/SMS relay adapter.
