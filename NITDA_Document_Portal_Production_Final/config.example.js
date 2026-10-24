/* NITDA Document Portal — endpoint configuration (template — copy to config.local.js).
 *
 * ⚠ THIS IS THE PUBLIC PORTAL. Every URL below is delivered to every visitor's
 * browser and is readable by anyone who fetches this file. A SAS-signed Power
 * Automate URL IS a bearer credential: configure only flows that are built to be
 * invoked by an anonymous stranger — each must validate its own input, rate-limit
 * its own callers, return only what that caller is entitled to see, and be
 * rotatable on a schedule. Regenerating the signature is the only way to revoke.
 *
 * MERGED, NOT ASSIGNED — setting window.PF_CONFIG before this file loads is a
 * supported way to supply endpoints (CI injection, host-level config), so
 * anything already set must win.
 *
 * Leaving SUBMISSION empty puts the portal in STANDALONE mode: everything stays
 * on the device and nothing is transmitted. That is the safe failure for a public
 * channel. Any other key left empty disables exactly the feature it serves, and
 * the portal reports that service as unconfigured on the Support page rather than
 * pretending the call succeeded.
 *
 * NO URL IS COMMITTED TO THIS REPOSITORY. Fill these in at deploy time.
 */
window.PF_CONFIG = window.PF_CONFIG || {};
window.PF_CONFIG.endpoints = Object.assign({
  SUBMISSION:     "", // e.g. https://<env>.api.powerplatform.com/powerautomate/.../invoke?...&sig=...
  UPLOAD:         "",
  SUPPORT:        "",
  VERIFY:         "",
  VERIFY_CONFIRM: "",
  STATUS:         "",
  WRITEBACK:      ""
}, window.PF_CONFIG.endpoints || {});
