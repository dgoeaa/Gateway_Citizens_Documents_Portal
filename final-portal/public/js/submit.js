/* Submission wizard — correspondence type -> submitter -> document -> review -> receipt.
   This is an intake channel for documents and correspondence addressed to NITDA,
   not a service-request desk: the registry classifies and routes what arrives, and
   the only commitment made up front is acknowledgement of receipt. */
PF.page = function () {
  var DRAFT_NOTE = 'Attachments are never stored in the draft — re-attach them before you submit.';
  var MAXF = 5, MAXSIZE = 10 * 1024 * 1024, CAP = 50 * 1024 * 1024;
  var OK_EXT = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'png', 'jpg', 'jpeg'];

  var step = 1, files = [], submitting = false, booted = false;
  var form = PF.$('#wizard');

  /* ---------- populate selects and the correspondence-type list ---------- */
  PF.$('#orgType').innerHTML = '<option value="">Select…</option>' + PF.ORG_TYPES.map(function (o) { return '<option>' + PF.esc(o) + '</option>'; }).join('');
  PF.$('#state').innerHTML = '<option value="">Select…</option>' + PF.STATES.map(function (o) { return '<option>' + PF.esc(o) + '</option>'; }).join('');

  PF.$('#serviceList').innerHTML = PF.CORRESPONDENCE_TYPES.map(function (s) {
    return '<label class="pf-choice"><input type="radio" name="service" value="' + s.key + '">' +
      '<span style="flex:1"><span class="pf-choice__t">' + PF.esc(s.label) + '</span>' +
      '<span class="pf-choice__b">' + PF.esc(s.blurb) + '</span></span>' +
      '<span class="pf-mono" style="font-size:11px;color:var(--dgo-color-fg-muted);white-space:nowrap">' + PF.esc(s.category) + '</span></label>';
  }).join('');

  function renderRequirements() {
    var key = val('service');
    var box = PF.$('#serviceReq');
    if (!key) { box.innerHTML = ''; return; }
    var s = PF.correspondenceType(key);
    var due = PF.addWorkingDays(new Date().toISOString(), PF.ACK_TARGET_DAYS);
    box.innerHTML = '<div class="dgo-alert dgo-alert--success" style="align-items:flex-start">' +
      '<span class="dgo-alert__icon"><svg class="icon-sm" aria-hidden="true"><use href="#i-check-circle"></use></svg></span>' +
      '<div class="dgo-alert__body" style="flex:1">' +
      '<div class="dgo-alert__title">' + PF.esc(s.label) + ' · ' + PF.esc(s.category) + '</div>' +
      '<p style="margin:0 0 8px;font-size:13.5px">Submitted today, the registry acknowledges receipt by <b>' + PF.date(due) + '</b> (' + PF.ACK_TARGET_DAYS + ' working days). The outcome follows the registry workflow and is reported through tracking.</p>' +
      '<p style="margin:0 0 4px;font-size:12.5px;font-weight:600">Have these ready</p>' +
      '<ul style="margin:0;padding-left:18px;font-size:13px;line-height:1.7">' + s.needs.map(function (n) { return '<li>' + PF.esc(n) + '</li>'; }).join('') + '</ul>' +
      '</div></div>';
  }

  /* ---------- helpers ---------- */
  function val(name) {
    var n = form.elements[name];
    if (!n) return '';
    if (n.length && n[0] && n[0].type === 'radio') {
      for (var i = 0; i < n.length; i++) if (n[i].checked) return n[i].value;
      return '';
    }
    return (n.value || '').trim();
  }
  function setVal(name, v) {
    var n = form.elements[name];
    if (!n || v == null) return;
    if (n.length && n[0] && n[0].type === 'radio') {
      for (var i = 0; i < n.length; i++) n[i].checked = (n[i].value === v);
    } else n.value = v;
  }
  function err(id, msg, fieldId) {
    /* fieldId is separate from id because a radio group has no element carrying the group
       name: the choices are radios named "service" inside #serviceList. Resolving both
       from one id meant step 1 wrote its message but flagged nothing — no aria-invalid,
       and nothing for focus to land on (P-03, V-07). */
    var p = PF.$('#' + id + '-err'), f = PF.$('#' + (fieldId || id));
    if (!p) return;
    if (msg) { p.textContent = msg; p.hidden = false; if (f) f.setAttribute('aria-invalid', 'true'); }
    else { p.hidden = true; p.textContent = ''; if (f) f.removeAttribute('aria-invalid'); }
  }
  function clearErrors() { PF.$$('.dgo-field__error', form).forEach(function (p) { p.hidden = true; }); PF.$$('[aria-invalid]', form).forEach(function (n) { n.removeAttribute('aria-invalid'); }); }

  var EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

  function validate(n) {
    clearErrors();
    var bad = [];
    if (n === 1) {
      if (!val('service')) { err('service', 'Choose the kind of correspondence you are submitting.', 'serviceList'); bad.push('serviceList'); }
    }
    if (n === 2) {
      if (val('name').length < 2) { err('name', 'Enter the full name of the person submitting.'); bad.push('name'); }
      if (!EMAIL.test(val('email'))) { err('email', 'Enter an email address you control — verification is required.'); bad.push('email'); }
      var ph = val('phone');
      if (ph && ph.replace(/[^0-9]/g, '').length < 7) { err('phone', 'That telephone number looks too short.'); bad.push('phone'); }
      if (val('org').length < 2) { err('org', 'Enter the organisation this submission is for.'); bad.push('org'); }
      if (!val('orgType')) { err('orgType', 'Select an organisation type.'); bad.push('orgType'); }
      if (!val('state')) { err('state', 'Select a state.'); bad.push('state'); }
    }
    if (n === 3) {
      if (val('title').length < 6) { err('title', 'Give the submission a subject of at least six characters.'); bad.push('title'); }
      if (val('description').length < 20) { err('description', 'Describe the purpose in at least twenty characters.'); bad.push('description'); }
      if (!files.length) { err('files', 'Attach at least one document.'); bad.push('drop'); }
      else if (files.some(function (f) { return !f.file; })) { err('files', 'Reattach every original file restored from the draft.'); bad.push('drop'); }
      if (!PF.$('#declare').checked) { err('declare', 'Confirm the declaration before continuing.'); bad.push('declare'); }
    }
    if (bad.length) {
      var first = PF.$('#' + bad[0]);
      if (first && first.focus) first.focus();
      PF.toast('error', 'Check the highlighted fields', bad.length + (bad.length === 1 ? ' field needs attention.' : ' fields need attention.'));
      return false;
    }
    return true;
  }

  /* ---------- step machine ---------- */
  var TITLES = { 1: 'Kind of correspondence', 2: 'Who is submitting', 3: 'The document', 4: 'Review and submit' };
  function show(n) {
    step = n;
    PF.$$('[data-step]', form).forEach(function (fs) { fs.hidden = (+fs.getAttribute('data-step') !== n); });
    PF.$$('#stepper .dgo-stepper__step').forEach(function (li) {
      var i = +li.getAttribute('data-step');
      li.setAttribute('data-state', i < n ? 'done' : (i === n ? 'current' : 'todo'));
      li.style.cursor = i < n ? 'pointer' : 'default';
    });
    PF.$('#stepTitle').textContent = TITLES[n];
    PF.$('#stepCount').textContent = 'STEP ' + n + ' OF 4';
    PF.$('#backBtn').hidden = n === 1;
    var next = PF.$('#nextBtn');
    next.innerHTML = n === 4
      ? 'Submit to the registry<svg class="icon-sm" aria-hidden="true"><use href="#i-send"></use></svg>'
      : 'Continue<svg class="icon-sm" aria-hidden="true"><use href="#i-chevron-right"></use></svg>';
    if (n === 4) renderReview();
    if (booted) window.scrollTo({ top: Math.max(0, PF.$('#wizard').offsetTop - 90), behavior: 'smooth' });
  }

  PF.$('#stepper').addEventListener('click', function (e) {
    var li = e.target.closest('.dgo-stepper__step');
    if (!li) return;
    var i = +li.getAttribute('data-step');
    if (i < step) show(i);
  });

  PF.$('#backBtn').addEventListener('click', function () { if (step > 1) show(step - 1); });
  PF.$('#nextBtn').addEventListener('click', function () {
    if (submitting) return;
    if (!validate(step)) return;
    if (step < 4) { saveDraft(); show(step + 1); }
    else confirmSubmit();
  });

  /* ---------- review ---------- */
  function renderReview() {
    var s = PF.correspondenceType(val('service'));
    var rows = [
      ['Correspondence type', PF.esc(s.label) + ' <span class="pf-mono" style="color:var(--dgo-color-fg-muted)">(' + PF.esc(s.category) + ')</span>'],
      ['Registry unit', 'Registry &amp; Correspondence'],
      ['Planning target only', PF.ACK_TARGET_DAYS + ' working days; not a live service guarantee'],
      ['Priority', val('priority') === 'expedited' ? 'Expedited' : 'Standard'],
      ['Submitted by', PF.esc(val('name')) + '<br><span style="color:var(--dgo-color-fg-muted)">' + PF.esc(val('email')) + (val('phone') ? ' · ' + PF.esc(val('phone')) : '') + '</span>'],
      ['Organisation', PF.esc(val('org')) + '<br><span style="color:var(--dgo-color-fg-muted)">' + PF.esc(val('orgType')) + ' · ' + PF.esc(val('state')) + '</span>'],
      ['Subject', PF.esc(val('title'))],
      ['Purpose', PF.esc(val('description')).replace(/\n/g, '<br>')],
      ['Attachments', files.map(function (f) { return PF.esc(f.name) + ' <span class="pf-mono" style="color:var(--dgo-color-fg-muted)">' + PF.bytes(f.size) + '</span>'; }).join('<br>')]
    ];
    PF.$('#reviewBody').innerHTML = '<dl class="pf-kv">' + rows.map(function (r) {
      return '<dt>' + r[0] + '</dt><dd>' + r[1] + '</dd>';
    }).join('') + '</dl>';
  }

  /* ---------- attachments ---------- */
  var input = PF.$('#files'), drop = PF.$('#drop');
  drop.addEventListener('click', function () { input.click(); });
  drop.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); } });
  ['dragenter', 'dragover'].forEach(function (t) {
    drop.addEventListener(t, function (e) { e.preventDefault(); drop.setAttribute('data-drag', 'true'); });
  });
  ['dragleave', 'drop'].forEach(function (t) {
    drop.addEventListener(t, function (e) { e.preventDefault(); drop.removeAttribute('data-drag'); });
  });
  drop.addEventListener('drop', function (e) { if (e.dataTransfer && e.dataTransfer.files) accept(e.dataTransfer.files); });
  input.addEventListener('change', function () { accept(input.files); input.value = ''; });

  function accept(list) {
    var added = 0, rejected = [];
    Array.prototype.forEach.call(list, function (f) {
      var ext = (f.name.split('.').pop() || '').toLowerCase();
      if (OK_EXT.indexOf(ext) === -1) { rejected.push(f.name + ' — .' + ext + ' is not accepted'); return; }
      if (!f.size || f.size > MAXSIZE) { rejected.push(f.name + ' — must be nonempty and at most 10 MiB'); return; }
      var existing = files.find(function (x) { return x.name === f.name && x.size === f.size; });
      if (existing && existing.restored) {
        existing.file = f; existing.type = f.type; existing.restored = false; added++;
        return;
      }
      if (existing) { rejected.push(f.name + ' — already attached'); return; }
      if (files.length >= MAXF) { rejected.push(f.name + ' — limit of ' + MAXF + ' files'); return; }
      files.push({ name: f.name, size: f.size, type: f.type, file: f });
      added++;
    });
    renderFiles();
    saveDraft();
    if (added) { err('files', ''); PF.toast('success', added + (added === 1 ? ' file attached' : ' files attached'), files.map(function (f) { return f.name; }).join(', ')); }
    if (rejected.length) PF.toast('error', 'Some files were not accepted', rejected.join(' · '), 8000);
  }

  function renderFiles() {
    PF.$('#fileList').innerHTML = files.map(function (f, i) {
      return '<li class="pf-file"><span class="pf-file__ic"><svg class="icon" aria-hidden="true"><use href="#i-file"></use></svg></span>' +
        '<span style="flex:1;min-width:0"><span class="pf-file__n">' + PF.esc(f.name) + '</span><br><span class="pf-file__s">' + PF.bytes(f.size) + (f.restored ? ' · re-attach required' : '') + '</span></span>' +
        '<button type="button" class="dgo-btn dgo-btn--ghost dgo-btn--sm dgo-btn--icon" data-rm="' + i + '" aria-label="Remove ' + PF.esc(f.name) + '"><svg class="icon-sm" aria-hidden="true"><use href="#i-trash"></use></svg></button></li>';
    }).join('');
    var total = files.reduce(function (a, f) { return a + f.size; }, 0);
    PF.$('#fileTotal').textContent = files.length ? files.length + (files.length === 1 ? ' file attached' : ' files attached') : 'No files attached';
    PF.$('#fileCap').textContent = PF.bytes(total) + ' / 50 MB';
    var meter = PF.$('#fileMeter');
    meter.firstElementChild.style.width = Math.min(100, (total / CAP) * 100) + '%';
    meter.setAttribute('data-over', String(total > CAP));
  }

  PF.$('#fileList').addEventListener('click', function (e) {
    var b = e.target.closest('[data-rm]');
    if (!b) return;
    var f = files.splice(+b.getAttribute('data-rm'), 1)[0];
    renderFiles();
    PF.toast('info', 'Removed', f.name);
  });

  /* ---------- counters ---------- */
  function counter(id, out, max) {
    var n = PF.$('#' + id), o = PF.$('#' + out);
    var upd = function () { o.textContent = n.value.length + '/' + max; };
    n.addEventListener('input', upd); upd();
  }
  counter('title', 'titleCount', 120);
  counter('description', 'descCount', 1200);

  /* ---------- draft ---------- */
  var attemptId = null;
  var storageWarning = false;
  var FIELDS = ['service', 'priority', 'name', 'email', 'phone', 'org', 'orgType', 'state', 'title', 'description'];
  function snapshot() {
    var d = { at: new Date().toISOString(), attemptId: attemptId, step: step, declare: PF.$('#declare').checked, files: files.map(function (f) { return { name: f.name, size: f.size }; }) };
    FIELDS.forEach(function (k) { d[k] = val(k); });
    return d;
  }
  function saveDraft() {
    var d = snapshot();
    var any = FIELDS.some(function (k) { return k !== 'priority' && d[k]; });
    if (any && !PF.store.draft.set(d) && !storageWarning) {
      storageWarning = true;
      PF.toast('warning', 'Draft could not be saved', 'Browser storage is unavailable. Keep this page open and keep your original files; do not rely on resuming.', 10000);
    }
  }
  form.addEventListener('input', function () { saveDraft(); });
  form.addEventListener('change', function (e) {
    if (e.target.name === 'service') renderRequirements();
    saveDraft();
  });

  function applyDraft(d) {
    attemptId = d.attemptId || null;
    FIELDS.forEach(function (k) { setVal(k, d[k]); });
    PF.$('#declare').checked = !!d.declare;
    files = (d.files || []).map(function (f) { return { name: f.name, size: f.size, restored: true }; });
    renderFiles();
    renderRequirements();
    counterRefresh();
    show(Math.min(d.step || 1, 3));
  }
  function counterRefresh() {
    PF.$('#titleCount').textContent = PF.$('#title').value.length + '/120';
    PF.$('#descCount').textContent = PF.$('#description').value.length + '/1200';
  }

  var draft = PF.store.draft.get();
  if (draft) {
    PF.$('#draftBar').innerHTML =
      '<div class="dgo-alert dgo-alert--warning"><span class="dgo-alert__icon"><svg class="icon-sm" aria-hidden="true"><use href="#i-refresh"></use></svg></span>' +
      '<div class="dgo-alert__body" style="flex:1"><div class="dgo-alert__title">You have an unfinished submission</div>' +
      'Saved ' + PF.rel(draft.at) + '. ' + DRAFT_NOTE + '</div>' +
      '<span class="dgo-cluster dgo-cluster--2"><button class="dgo-btn dgo-btn--primary dgo-btn--sm" id="draftResume">Resume</button>' +
      '<button class="dgo-btn dgo-btn--ghost dgo-btn--sm" id="draftDrop">Discard</button></span></div>';
    PF.$('#draftResume').addEventListener('click', function () {
      applyDraft(draft);
      PF.$('#draftBar').innerHTML = '';
      PF.toast('success', 'Draft restored', files.length ? 'Re-attach your files before submitting.' : '');
    });
    PF.$('#draftDrop').addEventListener('click', function () {
      attemptId = null;
      PF.store.draft.clear();
      PF.$('#draftBar').innerHTML = '';
      PF.toast('info', 'Draft discarded', '');
    });
  }

  PF.$('#clearBtn').addEventListener('click', function () {
    PF.dialog({ title: 'Clear this form?', sub: 'Everything you have typed and attached is removed.', okLabel: 'Clear it', tone: 'danger', body: '<p class="pf-note">The saved draft on this device is deleted too. Submitted requests are not affected.</p>' })
      .then(function (ok) {
        if (!ok) return;
        form.reset();
        attemptId = null;
        files = []; renderFiles(); renderRequirements(); counterRefresh(); clearErrors();
        PF.store.draft.clear();
        PF.$('#draftBar').innerHTML = '';
        show(1);
        PF.toast('info', 'Form cleared', 'Start again whenever you are ready.');
      });
  });

  /* ---------- submit ---------- */
  function confirmSubmit() {
    var s = PF.correspondenceType(val('service'));
    if (files.some(function (f) { return f.restored; })) {
      err('files', 'Re-attach the files from your restored draft before submitting.');
      show(3);
      PF.toast('error', 'Attachments missing', DRAFT_NOTE);
      return;
    }
    PF.dialog({
      title: 'Submit to the registry?',
      sub: s.label + ' · ' + files.length + (files.length === 1 ? ' attachment' : ' attachments'),
      okLabel: 'Confirm and submit',
      body: '<dl class="pf-kv">' +
        '<dt>Subject</dt><dd>' + PF.esc(val('title')) + '</dd>' +
        '<dt>From</dt><dd>' + PF.esc(val('name')) + ' · ' + PF.esc(val('org')) + '</dd>' +
        '<dt>Notifications to</dt><dd>' + PF.esc(val('email')) + '</dd>' +
        /* V-02 — the ID is minted locally, before the registry has seen anything. Saying
           otherwise set the expectation the old receipt then confirmed falsely. */
        '</dl><p class="pf-note" style="margin-top:12px">A registry reference identifies this intake. Only verified storage of all declared files and the completion step produces a received receipt.</p>'
    }).then(function (ok) { if (ok) doSubmit(); });
  }

  function doSubmit() {
    submitting = true;
    var next = PF.$('#nextBtn'), back = PF.$('#backBtn'), clear = PF.$('#clearBtn');
    next.setAttribute('data-loading', 'true'); next.disabled = true; back.disabled = true; clear.disabled = true;

    finish();
  }

  /* Hands the submission to the registry by calling the configured intake flow directly.

     TWO PHASES (TARGET_ARCHITECTURE.md §3.3):
       1. POST to the SUBMISSION endpoint — metadata only. The flow validates it, mints a
          reference and returns one short-lived upload ticket per declared attachment.
       2. PUT to the UPLOAD endpoint per ticket — the raw file.

     What this replaced, and why it matters: attachments used to be base64-encoded into a
     JSON workflow payload. Base64 inflates by a third, so a transport limit became a
     silent data-loss bug — only files[0] was sent, and an empty payload was substituted
     above 4 MB while the submission still reported success (F-028). Bytes no longer
     travel inside the payload, so neither limit exists.

     Nothing here is a credential and nothing is hardcoded: both endpoints are supplied
     at deploy time through PF.CONFIG.endpoints, and both flows are responsible for
     validating and authorising their own callers. */

  function digestOf(file) {
    if (!(window.crypto && crypto.subtle && file)) return Promise.resolve('');
    return file.arrayBuffer()
      .then(function (buf) { return crypto.subtle.digest('SHA-256', buf); })
      .then(function (h) {
        return Array.prototype.map.call(new Uint8Array(h), function (b) {
          return b.toString(16).padStart(2, '0');
        }).join('');
      })
      .catch(function () { return ''; });
  }

  /* Returns a promise for the delivery state — 'delivered', 'queued' or 'held' — because the
     receipt is not entitled to claim an outcome it has not observed (V-02). It used to
     return nothing, and the caller told the citizen "Submission received" either way. */
  /* Mirrors track.js's requireVerification — same round-trip, same client-half-only posture
     (README.md, D4): the flow decides whether a proof is required, the client is only ever
     capable of running the exchange when asked. A submission the flow refuses without proof
     of the address is not a failure to queue — the outbox has no way to run an interactive
     code exchange, so retrying it there would only repeat the 403 forever against a control
     that is working as intended. The submitter is standing here, so it runs once, now. */
  function requireVerification(email) {
    return PF.verifyEmail(email);
  }

  function dispatchToWorkflow(rec) {
    if (!PF.backendConfigured()) {
      PF.store.log('integration', rec.id, 'No registry endpoint configured — submission held locally');
      return Promise.resolve('held');
    }

    /* The local gateway enforces each declared SHA-256 and length before storing bytes.
       Restored drafts must have their original files reattached before dispatch. */
    var withBytes = files.filter(function (f) { return f && f.file; });
    return Promise.all(withBytes.map(function (f) { return digestOf(f.file); }))
      .then(function (digests) {
        var declared = withBytes.map(function (f, i) {
          return { name: f.name, size: f.size, sha256: digests[i] || '' };
        });
        var missing = files.filter(function (f) { return !f || !f.file; });
        var payload = {
          localId: rec.id,
          channel: 'Portal',
          correspondenceType: 'Incoming',
          subject: rec.title,
          category: rec.category,
          sender: { name: rec.name, organisation: rec.org, organisationType: rec.orgType },
          senderEmail: rec.email,
          senderPhone: rec.phone,
          state: rec.state,
          priority: rec.priority,
          eventDate: rec.eventDate || '',
          description: rec.description,
          attachments: declared,
          submittedAt: rec.submittedAt
        };

        function attempt(verification) {
          return PF.intake.submit(payload, { verification: verification, queue: false }).then(function (res) {
            if (!res.delivered) {
              if (res.reason === 'verification-required' && !verification) {
                return requireVerification(rec.email).then(function (proof) {
                  return proof ? attempt(proof) : 'queued';
                });
              }
              if (res.status >= 400 && res.status < 500) return 'rejected';
              return 'queued';
            }

            /* The registry reference supersedes the local id. Recording it is what makes a
               later status lookup possible at all — a local id means nothing to the registry. */
            if (res.referenceId) {
              rec.referenceId = res.referenceId;
              PF.store.setReference(rec.id, res.referenceId);
            }
            if (missing.length) {
              PF.store.log('integration', res.referenceId || rec.id,
                missing.length + ' attachment(s) could not be sent — bytes were not available after a draft restore');
            }
            return Promise.resolve(uploadAll(res.uploads || [], withBytes, res.referenceId))
              .then(function (stored) {
                if (!stored || missing.length) return 'incomplete';
                return PF.api('/api/submissions/complete', {
                  referenceId: res.referenceId, verification: verification
                }).then(function () { return 'delivered'; }, function () { return 'incomplete'; });
              });
          });
        }
        return attempt(null);
      })
      .catch(function () {
        PF.store.log('integration', rec.id, 'Submission could not be prepared — queued for delivery');
        return 'queued';
      });
  }

  /* Redeem tickets one at a time. Sequential rather than parallel: a citizen on a slow
     connection uploading five documents at once is how uploads fail, and nothing here is
     time-critical enough to justify it.

     Returns the whole chain. It used to return nothing, so dispatch reported 'delivered' the
     moment the first PUT started, the receipt said "Submission received" and offered "Track
     this request", and leaving the page cancelled the upload: NITDA-2026-00011 (2026-09-29)
     has its ticket issued at 02:05:30Z, never redeemed, and no UPLOAD run at all.

     Each ticket is paired with the file of the same name, not by position: the flow lists
     tickets in its own order. */
  function uploadAll(tickets, withBytes, ref) {
    var failed = [];
    var used = [];
    var i = 0;
    var note = PF.$('#deliveryState');
    function fileFor(t) {
      var index = t && t.index;
      if (!Number.isInteger(index) || index < 0 || index >= withBytes.length || used.indexOf(index) >= 0) return null;
      used.push(index);
      return withBytes[index];
    }
    function next() {
      if (i >= tickets.length) {
        if (!failed.length) {
          PF.store.log('integration', ref, tickets.length + ' attachment(s) delivered to the registry');
          return true;
        }
        PF.store.log('integration', ref, failed.length + ' attachment(s) not yet delivered: ' + failed.join(', '));
        PF.toast('warn', 'Some attachments were not delivered',
          failed.join(', ') + ' did not reach the registry. Your reference is recorded — contact the ' +
          'helpdesk quoting it rather than resubmitting.', 9000);
        return false;
      }
      var t = tickets[i];
      var f = fileFor(t);
      i++;
      if (!t || !f || !f.file) { failed.push(t ? t.name : 'attachment ' + i); return next(); }
      if (note) note.textContent = 'Uploading attachment ' + i + ' of ' + tickets.length + ' (' + f.name + ') — keep this page open…';
      return PF.intake.upload(t.ticket, f.file).then(function (r) {
        // `stored:false` is the upload flow saying it accepted the PUT but did not keep the
        // bytes — a digest mismatch or an oversize file, per PF.intake.upload's contract.
        // Reading only `r.ok` reported that as delivered.
        if (!r.ok || !r.stored) failed.push(f.name);
        return next();
      });
    }
    return Promise.resolve(next());
  }


  function finish() {
    var s = PF.correspondenceType(val('service'));
    var now = new Date().toISOString();
    attemptId = attemptId || PF.uid();
    saveDraft();
    var rec = {
      id: attemptId, type: s.key, typeLabel: s.label, category: s.category,
      correspondenceType: 'Incoming', unit: 'Registry & Correspondence',
      title: val('title'), description: val('description'),
      name: val('name'), email: val('email'), phone: val('phone'),
      org: val('org'), orgType: val('orgType'), state: val('state'),
      priority: val('priority'), status: 'received',
      officer: 'Not yet assigned', channel: 'Portal',
      files: files.map(function (f) { return { name: f.name, size: f.size }; }),
      submittedAt: now, updatedAt: now, ackDueAt: PF.addWorkingDays(now, PF.ACK_TARGET_DAYS),
      events: [{ at: now, status: 'received', label: 'Local preparation only — receipt pending registry confirmation.', note: '', actor: 'This device' }]
    };
    var prior = PF.store.get(rec.id);
    if (prior) {
      rec.referenceId = prior.referenceId;
      PF.store.update(rec.id, rec);
    } else PF.store.add(rec);
    var delivery = dispatchToWorkflow(rec);

    PF.$('#uploadPanel').hidden = true;
    form.hidden = true;
    PF.$('#helpPanel').classList.add('pf-no-print');
    PF.$$('.dgo-crumbs, .pf-steps, #draftBar').forEach(function (n) { n.classList.add('pf-no-print'); });
    PF.$('#main').querySelector('.dgo-stack--3').classList.add('pf-no-print');

    var due = PF.date(rec.ackDueAt);
    PF.$('#result').hidden = false;
    PF.$('#result').innerHTML =
      '<div class="pf-print-head" style="margin-bottom:18px"><img src="ds/logo/nitda-lockup.png" alt="National Information Technology Development Agency" style="height:56px"><p style="margin:10px 0 0;font-size:12px">Submission receipt · generated ' + PF.dateTime(rec.submittedAt) + '</p></div>' +
      '<div class="pf-result">' +
        '<div class="pf-result__head"><span class="pf-result__ic"><svg class="icon" aria-hidden="true"><use href="#i-check"></use></svg></span>' +
        '<div><h2 style="margin:0;font-family:var(--dgo-family-display);font-size:24px;line-height:1.15" id="resultTitle">Submission recorded</h2>' +
        '<p style="margin:6px 0 0;font-size:14px;color:rgba(255,255,255,.78);max-width:52ch" id="deliveryState">' + PF.esc(rec.typeLabel) + ' is being sent to the registry…</p></div></div>' +
        '<div style="padding:22px;display:grid;gap:20px;background:var(--dgo-color-surface-raised)">' +
          '<div class="pf-idplate"><div style="flex:1"><div style="font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--dgo-color-fg-muted);margin-bottom:6px">Your tracking ID</div><code id="trackingId">' + rec.id + '</code></div>' +
          '<button class="dgo-btn dgo-btn--secondary dgo-btn--sm pf-no-print" id="copyId"><svg class="icon-sm" aria-hidden="true"><use href="#i-id"></use></svg>Copy</button></div>' +
          '<dl class="pf-kv">' +
            '<dt>Type</dt><dd>' + PF.esc(rec.typeLabel) + ' <span class="pf-mono" style="color:var(--dgo-color-fg-muted)">(' + PF.esc(rec.category) + ')</span></dd>' +
            '<dt>Subject</dt><dd>' + PF.esc(rec.title) + '</dd>' +
            '<dt>Submitted by</dt><dd>' + PF.esc(rec.name) + ' · ' + PF.esc(rec.org) + '</dd>' +
            '<dt>Notifications</dt><dd>' + PF.esc(rec.email) + '</dd>' +
            '<dt>Received</dt><dd>' + PF.dateTime(rec.submittedAt) + '</dd>' +
            '<dt>Planning target only</dt><dd><b>' + due + '</b> · ' + PF.ACK_TARGET_DAYS + ' working days; not a service guarantee</dd>' +
            '<dt>Handling</dt><dd>' + (rec.priority === 'expedited' ? 'Expedited' : 'Standard') + ' · ' + PF.esc(rec.officer) + '</dd>' +
            '<dt>Attachments</dt><dd>' + rec.files.map(function (f) { return PF.esc(f.name) + ' <span class="pf-mono" style="color:var(--dgo-color-fg-muted)">' + PF.bytes(f.size) + '</span>'; }).join('<br>') + '</dd>' +
          '</dl>' +
          '<div class="dgo-cluster dgo-cluster--2 pf-no-print">' +
            '<a class="dgo-btn dgo-btn--primary" id="trackLink" href="track.html?id=' + encodeURIComponent(rec.id) + '&email=' + encodeURIComponent(rec.email) + '"><svg class="icon-sm" aria-hidden="true"><use href="#i-search"></use></svg>Track this request</a>' +
            '<button class="dgo-btn dgo-btn--secondary" id="printBtn"><svg class="icon-sm" aria-hidden="true"><use href="#i-download"></use></svg>Save receipt as PDF</button>' +
            '<a class="dgo-btn dgo-btn--ghost" href="submit.html">Submit another document</a>' +
          '</div>' +
          '<div id="verifyPanel" class="pf-no-print" style="display:none"></div>' +
          '<p class="pf-note">Keep this ID. It is the only key to your record — the registry cannot look up a submission without it.</p>' +
        '</div>' +
      '</div>';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    var trackingId = rec.id;

    /* Until dispatch settles — the registry reply AND every attachment upload — leaving the
       page cancels the upload, so the page holds the visitor: the track link waits and the
       browser asks before unloading. */
    var sending = true;
    function holdPage(e) { if (!sending) return; e.preventDefault(); e.returnValue = ''; return ''; }
    window.addEventListener('beforeunload', holdPage);
    PF.$('#trackLink').addEventListener('click', function (e) {
      if (!sending) return;
      e.preventDefault();
      PF.toast('warn', 'Still sending', 'Your submission and its attachments are still being sent. Keep this page open until the receipt says so.', 6000);
    });
    PF.$('#copyId').addEventListener('click', function () { PF.copy(trackingId, 'Tracking ID ' + trackingId + ' copied.'); });
    PF.$('#printBtn').addEventListener('click', function () { window.print(); });

    /* V-02 — the receipt states what actually happened. It used to say "Submission
       received" and fire a success toast on the local write alone, so a citizen whose
       document never left the browser was told the registry had it, given a tracking ID,
       and sent to a tracking page that resolved that ID against the local store. The
       outcome is now reported only once dispatch has been observed, and each state names
       the next action rather than an internal cause. */
    var OUTCOME = {
      delivered: {
        title: 'Submission received',
        note: PF.esc(rec.typeLabel) + ' and all declared attachments have been stored by this registry. Keep this receipt; it is not emailed.',
        toast: ['success', 'Submission received', 'Tracking ID ' + rec.id]
      },
      queued: {
        title: 'Receipt not confirmed',
        note: 'The registry has not confirmed receipt. This is a local preparation ID, not a registry reference. Nothing will be resent automatically. Keep your original files and retry from the submission form.',
        toast: ['warn', 'Receipt not confirmed', 'No registry receipt was confirmed. Keep your original files.']
      },
      held: {
        title: 'Saved on this device only',
        note: 'This portal is not connected to the registry, so your submission has not been sent. '
            + 'It is saved in this browser only. Contact the helpdesk quoting the date and time above, or use the walk-in registry.',
        toast: ['error', 'Not sent to the registry', 'This portal is not connected. Your answers are saved on this device.']
      },
      incomplete: {
        title: 'Receipt not confirmed',
        note: 'One or more uploads or the completion reply failed. Receipt is NOT CONFIRMED. Resume the saved draft and reattach the same files to retry this intake; do not discard it. You can also verify its current state on tracking.',
        toast: ['error', 'Receipt not confirmed', 'Do not treat this as a confirmed submission. Verify its current state or resume the draft.']
      },
      rejected: {
        title: 'Registry refused this attempt',
        note: 'No new receipt was confirmed. Resume the saved draft unchanged to retry an earlier intake. Changed content conflicts with an existing attempt: discard the draft only if you intend to create a separate submission. Keep original files and any earlier registry reference.',
        toast: ['error', 'Registry refused this attempt', 'Your draft is retained. Nothing is resent automatically.']
      }
    };
    Promise.resolve(delivery).catch(function () { return 'queued'; }).then(function (state) {
      sending = false;
      window.removeEventListener('beforeunload', holdPage);
      /* Once the registry has issued its reference, that is the tracking ID: it is what the
         registry indexes and what its emails quote. The receipt showed only the portal ID. */
      var issued = rec.referenceId || (PF.store.get(rec.id) || {}).referenceId;
      if (issued) {
        trackingId = issued;
        var code = PF.$('#trackingId'), link = PF.$('#trackLink');
        if (code) code.textContent = issued;
        if (link) link.href = 'track.html?id=' + encodeURIComponent(issued) + '&email=' + encodeURIComponent(rec.email);
        OUTCOME.delivered.toast[2] = 'Tracking ID ' + issued;
      }
      var o = OUTCOME[state] || OUTCOME.queued;
      if (!issued) PF.$('#trackLink').hidden = true;
      if (state !== 'delivered') {
        var retry = document.createElement('a');
        retry.href = 'submit.html';
        retry.className = 'dgo-btn dgo-btn--secondary';
        retry.textContent = 'Return to submission form';
        PF.$('#result').appendChild(retry);
      } else {
        PF.store.draft.clear();
      }
      var title = PF.$('#resultTitle'), note = PF.$('#deliveryState');
      if (title) title.textContent = o.title;
      if (note) note.innerHTML = o.note;
      PF.toast(o.toast[0], o.toast[1], o.toast[2], 9000);
    });
  }

  /* ---------- boot ---------- */
  var q0 = new URLSearchParams(location.search);
  var pre = q0.get('type') || q0.get('service');
  if (pre && PF.CORRESPONDENCE_TYPES.some(function (s) { return s.key === pre; })) {
    setVal('service', pre);
    renderRequirements();
  }
  renderFiles();
  show(1);
  booted = true;
};
