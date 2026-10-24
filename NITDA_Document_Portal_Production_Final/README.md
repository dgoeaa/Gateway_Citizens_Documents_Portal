# NITDA Document Portal — deployable package (v3.0)

The **external** intake channel for documents and correspondence addressed to NITDA:
submission, tracking and helpdesk. It carries **no staff-facing function** — registry triage,
decisions, audit and analytics live in the Agency's internal operations platform, which is the
system of record. Built on the NITDA Design System v2.1.

Static files only: no build step, no framework, no CDN dependency beyond the Outfit webfont.
Copy the folder to any web root (Apache, Nginx, IIS, S3 + CloudFront, any static host) and it runs.

```
index.html              The portal (Home / Submit / Track / Support, one document)
support.js              Component runtime
config.local.js         Endpoint configuration — THE ONLY FILE YOU EDIT TO GO LIVE
config.example.js       Template for the above
_ds/                    NITDA Design System v2.1 — tokens, reset, base, fonts
assets/                 Endorsed NITDA logotypes
sw.js                   Offline shell (cache-first assets, network-first navigations)
manifest.webmanifest    PWA install manifest
404.html favicon.svg robots.txt sitemap.xml
```

## Going live

1. Copy the folder contents to the web root (or a subdirectory — all paths are relative).
2. Serve over **HTTPS**. The service worker, the clipboard and `crypto.subtle` (used to digest
   attachments) all require a secure context. Without it the portal still runs; digests report
   as unavailable.
3. Fill in `config.local.js` and confirm each flow allows this origin (CORS).
4. Point `sitemap.xml` and `robots.txt` at the live host.
5. `Cache-Control: no-cache` on `sw.js` and `config.local.js`; long-lived caching on `_ds/`
   and `assets/`.
6. Bump `CACHE` in `sw.js` on every release.

## Endpoint configuration

Nothing is hardcoded and **no URL is committed to this repository**. Every endpoint arrives at
deploy time through `config.local.js` (or by setting `window.PF_CONFIG` before it loads —
values already set win, so CI injection is supported).

Leaving `SUBMISSION` empty puts the portal in **standalone mode**: everything stays on the
device and nothing is transmitted. That is the safe failure for a public channel. Any other key
left empty disables exactly the feature it serves; the Support page reports each service by what
it is actually configured to do.

> ### ⚠ These URLs are public
> A SAS-signed Power Automate URL **is a bearer credential**. Every URL in `config.local.js` is
> delivered to every visitor's browser. Nothing stands between a stranger and the flow, so
> **each flow is the only place any control can exist.** Configure nothing here that the public
> may not do. Rotate signatures on a schedule — regenerating the signature is the only way to
> revoke one.

### The contract each flow must satisfy

| Endpoint | Method | Request | Response | What the flow must enforce |
| --- | --- | --- | --- | --- |
| `SUBMISSION` | POST | Submission record, plus `verification` when the wizard holds a proof | `{ referenceId, uploads: [ticket, …] }` | Validate every field; restrict `category` to the public subset; apply the Universal Filename Policy to each declared attachment, keeping what the submitter sent as `originalName`; mint the registry reference; issue one short-lived upload ticket per declared attachment; rate-limit by source. Answer `403 {"error":"verification_required"}` to demand email verification |
| `UPLOAD` | PUT | Raw file bytes, ticket in `X-Upload-Ticket` | `{ stored, attachmentLink, reason }` | Redeem the ticket once and only once; check the bytes against the size and SHA-256 the submission declared; refuse anything oversize or unmatched. Bytes never travel base64 inside JSON |
| `SUPPORT` | POST | The helpdesk case | `{ caseRef }` | Validate and rate-limit. A `CASE-` reference; never enters the registry |
| `VERIFY` | POST | `{ email }` | `{ sent, expiresAt }` | Mail a one-time code; rate-limit per address and per source. Report `sent:false` honestly when the mail could not be delivered |
| `VERIFY_CONFIRM` | POST | `{ email, code }` | `{ verification, expiresAt }` | Compare in constant time; expire and single-use the code; return a proof the other flows accept |
| `STATUS` | POST | `{ referenceId, verification }`, or `{ referenceId, email }` where no proof is held | `{ record }` | See below |
| `WRITEBACK` | POST | `{ referenceId, action, body, verification }` | `200` | `action` is `respond`, `note` or `withdraw`. Resolve the submitter from the proof; append to the timeline; never let a write change status other than to `withdrawn`; rate-limit |

**Reference format.** Every reference `SUBMISSION` issues must have the registry shape
`NITDA-YYYY-<sequence>` — agency prefix, four-digit year, and a sequence the flow holds and
never restarts within a year. **Not zero-padded**: `NITDA-2026-217`, never `NITDA-2026-000217`.
The portal mints provisional references in the same shape. A flow that issues any other shape
leaves the registry holding two key formats at once — defect **F-031**.

**Filenames.** The Universal Filename Policy applies to every file entering the registry. The
flow must **normalise, never reject** — a citizen must not be turned away because their phone
named the scan `IMG_20260101(1).jpg` — and must keep what they sent as `originalName`. The
portal applies the same normalisation client-side and displays both; the two must not drift.

**Status read-back.** Unknown reference, wrong address, expired proof and replayed proof must
all return a **byte-identical 404**. Telling a caller which it was answers "does this reference
exist?" for anybody who asks. Adding a distinct `proof_expired` is the natural thing to do for
usability and it reintroduces the oracle — expiry is reported by `VERIFY_CONFIRM`, never by
`STATUS`. The response must be an allow-listed projection carrying status, dates, public
timeline and attachment metadata only — never the description, the assigned officer or the
handling unit's internal notes.

**Unavailable is not denied.** A registry that cannot be reached surfaces as `unavailable`, so
the page says "status is unavailable right now" rather than "no request matches". An outage is
not evidence a submission was never received. Where this browser holds its own copy the portal
shows it **clearly labelled as device data**, never as the registry's answer.

**Verified read-back — the client half is implemented and live.** `STATUS` authorised on
`{ referenceId, email }` is authorised by a pair the submitter's own correspondent may hold: both
are printed inside the record the call returns. The portal **already sends a proof when the flow
asks for one** — a `403 verification_required` triggers the same code round-trip the submission
wizard runs, and the lookup retries with the proof. A flow that does not ask is unaffected, which
is why turning this on is a flow-side configuration event rather than a development one. Three
properties the flow must keep:

1. **The email leaves the request body.** Resolve the address from the proof and reject a body
   that carries an `email` field at all — otherwise the old path survives.
2. **One denial, still.** See above.
3. **Unavailable is still not denied.** See above.

## Role and permission model (the flows' obligation)

The portal is anonymous by design and holds no accounts — `PF.STAFF` with `admin/password` in a
public JavaScript file was deleted at **F-029** and is not reinstated. Authorisation for
everything below the flow boundary is the internal platform's, enforced server-side against
directory identity. This is the matrix the flows must implement; it is documented here so the
public channel and the internal platform cannot drift.

| Role | Read registry record | Log / route | Request information | Decide (approve / decline) | Reassign unit | Export | Audit trail |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Anonymous submitter | Own record only, via proof of the address it was submitted under | — | — | — | — | — | — |
| Registry Officer | All, intake projection | ✓ | ✓ | — | ✓ within directorate | — | Append only |
| Reviewing Officer | Assigned records | — | ✓ | Recommend | — | — | Append only |
| Unit Head | Unit records | — | ✓ | ✓ | ✓ within unit | Unit scope | Append only |
| Compliance | All, read-only | — | — | — | — | ✓ | Read |
| Administrator | Configuration only, **not** record content | — | — | — | — | ✓ | Read |

Least privilege throughout: no role both decides and exports without a second identity in the
trail, no role can amend or delete an audit entry, and Administrator deliberately cannot read
correspondence content — configuration authority is not case authority.

## Built in

- Four screens in one document: Home, Submit, Track, Support.
- Guided four-step submission with autosaved draft, drag-and-drop attachments, client-side
  format/size/duplicate validation, SHA-256 digest per file, and a printable A4 receipt.
- Email-verified tracking: six-digit code, ten-minute expiry, thirty-second resend cooldown,
  five-attempt ceiling, proof carried on the retry.
- Working-day acknowledgement clock (3 working days, weekends and gazetted holidays excluded)
  with overdue detection and a meter on every record.
- Citizen write-back: respond, add a note, withdraw — delivered where `WRITEBACK` is configured,
  held in an outbox and delivered automatically when the registry returns, and honestly labelled
  as device-local where it is not configured.
- Notifications centre: decisions, requests for information, overdue acknowledgements and queued
  items, with persisted read state.
- Document viewer: in-browser preview for images and PDFs attached in this session, digest and
  filed-name metadata for registry-held documents, and an explicit explanation rather than a
  broken frame where bytes are not held.
- Command palette on `Ctrl/⌘ K` or `/`; three themes (light, dark, high contrast), persisted.
- Print stylesheets for the receipt and the record.
- Accessibility: labelled fields with inline errors, `aria-live` status region, keyboard-operable
  palette and drawer, 44 px minimum targets, visible focus rings, reduced-motion support.
- Offline shell via service worker; installable as a PWA.
