/* Taxonomy and vocabulary retained from the supplied citizen portal.
   No seeded records, sample staff or browser-issued authoritative identities. */
window.PF = window.PF || {};
PF.ORG = {
  name: 'NITDA Document Portal', agency: 'National Information Technology Development Agency',
  short: 'NITDA', tagline: 'Document submission, tracking and support',
  email: 'portal@nitda.gov.ng', phone: '', address: '', hours: 'Not confirmed for this deployment'
};
PF.CONFIG = window.PF_CONFIG || { endpoints: {} };
PF.STATUS = {
  received: { label: 'Received', pill: 'pending', stage: 1, blurb: 'Logged in the registry.' },
  validation: { label: 'Validation', pill: 'routed', stage: 2, blurb: 'Documents are being checked for completeness.' },
  review: { label: 'Under review', pill: 'routed', stage: 3, blurb: 'With the reviewing unit.' },
  'action-required': { label: 'Action required', pill: 'action', stage: 3, blurb: 'Read the registry note and respond.' },
  approved: { label: 'Approved', pill: 'success', stage: 4, blurb: 'Decision recorded. Read the timeline for details.' },
  declined: { label: 'Declined', pill: 'danger', stage: 4, blurb: 'Decision recorded. Read the timeline for reasons.' },
  withdrawn: { label: 'Withdrawn', pill: 'archived', stage: 4, blurb: 'Closed at the request of the submitter.' }
};
PF.STAGES = ['Received', 'Validated', 'Under review', 'Decision'];
/* A supplied planning target, not a verified operational commitment. */
PF.ACK_TARGET_DAYS = 3;
PF.CORRESPONDENCE_TYPES = [
  { key: 'letter', label: 'Official letter', category: 'General Correspondence',
    blurb: 'A formal letter addressed to the Director-General or to a directorate.',
    needs: ['The signed letter, as a PDF or scan'] },
  { key: 'application', label: 'Application or formal request', category: 'Application',
    blurb: 'A request for clearance, accreditation, licensing, labelling or approval.',
    needs: ['Covering letter stating what is requested', 'Supporting documents named in the letter'] },
  { key: 'proposal', label: 'Proposal or expression of interest', category: 'Proposal',
    blurb: 'A proposal, partnership concept or expression of interest.',
    needs: ['Concept note or proposal', 'Organisation profile'] },
  { key: 'report', label: 'Report or periodic return', category: 'Report',
    blurb: 'A report or return under an existing engagement.',
    needs: ['The report document', 'Reference of the engagement it relates to'] },
  { key: 'compliance', label: 'Regulatory or compliance filing', category: 'Compliance Filing',
    blurb: 'A filing under a regulation, standard or statutory instrument.',
    needs: ['The filing itself', 'Evidence of any fee paid'] },
  { key: 'policy', label: 'Policy or strategy document', category: 'Policy Submission',
    blurb: 'A policy, standard, strategy or regulatory instrument submitted for review.',
    needs: ['The document', 'Any consultation or endorsement evidence'] },
  { key: 'invitation', label: 'Invitation or event notice', category: 'Event Invitation',
    blurb: 'An invitation to an event or a request for representation.',
    needs: ['Invitation letter', 'Programme or agenda, if available'] },
  { key: 'other', label: 'Other correspondence', category: 'General Correspondence',
    blurb: 'Other correspondence for registry classification.', needs: ['Whatever document you are submitting'] }
];
PF.ORG_TYPES = ['Ministry, Department or Agency', 'State Government', 'Private company',
  'Non-governmental organisation', 'Academic institution', 'Individual / Sole proprietor', 'International organisation'];
PF.STATES = ['Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River',
  'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT — Abuja', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano',
  'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo',
  'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'];
PF.OFFICERS = [];
PF.CHANNELS = [
  { icon: 'chat', label: 'Verified case desk', value: 'Use the support form below', href: '',
    note: 'Cases and replies are stored in this deployment. No response-time guarantee is claimed.' },
  { icon: 'mail', label: 'Supplied helpdesk address — not live-validated', value: 'portal@nitda.gov.ng',
    href: 'mailto:portal@nitda.gov.ng', note: 'Confirm organizational contact details before release.' }
];
PF.SUPPORT_TOPICS = [
  { key: 'submission', label: 'Problem with a submission' }, { key: 'tracking', label: 'Tracking ID not found' },
  { key: 'upload', label: 'File upload or format issue' }, { key: 'status', label: 'Question about a decision' },
  { key: 'account', label: 'Access or verification issue' }, { key: 'other', label: 'Something else' }
];
PF.FAQ = [
  { q: 'How long does a submission take?', a: 'Only a completed upload is reported as received. The supplied three-working-day acknowledgement target is a planning target, not a validated service guarantee. Track the registry timeline for actual progress.' },
  { q: 'I have lost my tracking ID. What can I do?', a: 'Keep the receipt or check this device’s history. If neither is available, raise a verified support case. Submission receipts are not emailed by this package.' },
  { q: 'Which file formats are accepted?', a: 'PDF, DOC, DOCX, XLS, XLSX, PNG and JPG. Each file may be up to 10 MiB; submit up to five attachments. File-type names and SHA-256 integrity are checked; malware scanning is not supplied.' },
  { q: 'My request says “Action required”. What happens next?', a: 'Read the note on the tracking timeline and use the response action. To replace an incorrect document, withdraw and submit a corrected request.' },
  { q: 'Is my data protected?', a: 'Email verification gates access to records. Staff access requires an operator allowlist. Deployment owners must configure HTTPS, retention, backups and their privacy policy before live use.' },
  { q: 'Can somebody else submit on my behalf?', a: 'Provide the sender and organisation details, and verify an email address you control. That verified address controls access to this record.' },
  { q: 'Are there fees, and can I pay in the portal?', a: 'This package does not accept payments. Confirm any fee and payment instructions with the organization.' },
  { q: 'Can a request be expedited?', a: 'You can request expedited handling and give a justification. The registry decides how to handle it; no decision deadline is guaranteed.' },
  { q: 'How do I correct something after submitting?', a: 'Add a verified note from tracking. A withdrawn request cannot be reopened; submit corrected documents as a new request.' }
];
PF.SUPPORT_SEEDS = [];
PF.SEEDS = [];
