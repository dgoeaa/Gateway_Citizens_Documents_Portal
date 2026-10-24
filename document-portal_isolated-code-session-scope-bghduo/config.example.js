/* NITDA DGO — public document portal endpoint configuration.
 *
 * Copy to  document-portal/config.local.js  and paste one rotated trigger URL per line.
 * A filled value looks like  https://<env>.environment.api.powerplatform.com/powerautomate/
 * automations/direct/workflows/<workflowId>/triggers/manual/paths/invoke?...&sig=<signature>
 * config.local.js is git-ignored. Never commit one.
 *
 * ⚠  THIS IS A PUBLIC SITE. Every URL below is delivered to every visitor's browser and can
 * be read by anyone who fetches this file. Configure ONLY endpoints whose flows are built to
 * be invoked by an anonymous stranger — each validates its own input, rate-limits its own
 * callers (20 per source IP per rolling hour), returns only what the caller is entitled to
 * see, and must be rotated on a schedule. Never point one of these at a flow that does
 * something the public may not do.
 *
 * ROTATION ORDER — the old signature is revoked LAST
 *   1. Regenerate the trigger URL on the flow named below.
 *   2. Paste it here and reload the portal.
 *   3. Confirm the endpoint answers.
 *   4. Only then revoke the old signature.
 *
 * Generated from docs/reference/portal-endpoint-workflow-ids.json.
 * Workflow ids only; no URL has ever been recorded in this repository.
 */
window.PF_CONFIG = {
  endpoints: {
    /* CG_Submission_Endpoint — workflow id UNRESOLVED — read it from the flow itself
       POST · Registers correspondence. Returns a reference plus one upload ticket per attachment.
       Leave this blank and the WHOLE PORTAL stays in demo mode — nothing is transmitted.
    */
    SUBMISSION:       "",

    /* CG_Upload_Endpoint — workflow id UNRESOLVED — read it from the flow itself
       PUT · Redeems one ticket with the raw bytes of one attachment.
       Not JSON: octet-stream body, ticket in the X-Upload-Ticket header.
    */
    UPLOAD:           "",

    /* CG_Support_Endpoint — workflow id UNRESOLVED — read it from the flow itself
       POST · Raises a helpdesk case. Returns a CASE- reference; never enters the registry.
    */
    SUPPORT:          "",

    /* CG_Verification_Endpoint — workflow ee627334d2e34ba7ac1b899bdb3ff2d0
       POST · Mails a one-time code to a submitter's address.
    */
    VERIFY:           "",

    /* CG_Verification_Confirmation_Endpoint — workflow 2569134db3514e838594319ea8e2a4a9
       POST · Exchanges that code for the single-use proof SUBMISSION accepts.
    */
    VERIFY_CONFIRM:   "",

    /* CG_Status_Check_Endpoint — workflow cf1e66eb8ac2460794b7f683d9aa8ac0
       POST · Reads a submission back for a reference + email pair, or a proof.
    */
    STATUS:           "",

    /* CG_Writeback_Endpoint — workflow 91292a0347d443619316b3d0118462f2
       POST · A verified citizen responds, adds a note, or withdraws.
       Requires a proof from VERIFY_CONFIRM on EVERY call.
    */
    WRITEBACK:        "",
  }
};
