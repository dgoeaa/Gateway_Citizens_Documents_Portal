PF.page = function () {
  'use strict';
  var proof = null;
  var snapshot = null;
  var offset = 0, reference = '';
  var status = PF.$('#staffStatus');
  var workspace = PF.$('#staffWorkspace');
  function message(value) { status.textContent = value; }
  function request(path, data) {
    return PF.api(path, Object.assign({}, data, { verification: proof }));
  }
  function saveBlob(blob, filename) {
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url; link.download = filename; link.click();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }
  function input(label, value, name) {
    return '<label>' + label + '<input class="dgo-input" name="' + name + '" value="' + PF.esc(value) + '" maxlength="150"></label>';
  }
  function render() {
    PF.$('#staffPrevious').disabled = offset === 0 || !!reference;
    PF.$('#staffNext').disabled = !snapshot.pagination.more || !!reference;
    PF.$('#staffPage').textContent = reference ? 'Exact reference' : 'Page ' + (offset / 100 + 1);
    PF.$('#staffRecords').innerHTML = snapshot.records.map(function (r) {
      return '<article class="pf-panel staff-card"><h3>' + PF.esc(r.id + ' · ' + r.title) + '</h3>' +
        '<p>' + PF.esc(r.email + ' · ' + r.org) + '</p><p>' +
        (r.intakeComplete ? 'All declared attachments stored.' : 'INCOMPLETE — not received.') + '</p>' +
        '<p>' + PF.esc(r.description) + '</p><form data-record="' + PF.esc(r.id) + '">' +
        '<label>Status<select class="dgo-select" name="status">' +
        Object.keys(PF.STATUS).map(function (key) {
          return '<option value="' + key + '"' + (r.status === key ? ' selected' : '') + '>' + PF.esc(PF.STATUS[key].label) + '</option>';
        }).join('') + '</select></label>' + input('Handling unit', r.unit, 'unit') + input('Officer', r.officer, 'officer') +
        '<label>Public timeline note<textarea class="dgo-textarea" name="body" minlength="5" maxlength="1200" required></textarea></label>' +
        '<button class="dgo-btn dgo-btn--primary" type="submit"' +
        (!r.intakeComplete || ['approved', 'declined', 'withdrawn'].includes(r.status) ? ' disabled' : '') + '>Record update</button></form>' +
        (r.files || []).map(function (f) {
          return '<button class="dgo-btn dgo-btn--secondary" data-download="' + PF.esc(r.id) + '" data-index="' + f.index + '">' +
            'Download unscanned attachment: ' + PF.esc(f.name) + '</button>';
        }).join('') + '<details><summary>Timeline</summary><pre>' + PF.esc(JSON.stringify(r.events, null, 2)) + '</pre></details></article>';
    }).join('') || '<p>No records.</p>';
    PF.$('#staffCases').innerHTML = snapshot.cases.map(function (c) {
      return '<article class="pf-panel staff-card"><h3>' + PF.esc(c.ref + ' · ' + c.topic) + '</h3>' +
        '<p>' + PF.esc(c.email + ' · ' + c.message) + '</p><pre>' + PF.esc(JSON.stringify(c.replies, null, 2)) + '</pre>' +
        '<form data-case="' + PF.esc(c.ref) + '"><label>Status<select class="dgo-select" name="status">' +
        '<option value="open">Open</option><option value="closed"' + (c.status === 'closed' ? ' selected' : '') + '>Closed</option></select></label>' +
        '<label>Reply (visible through verified case refresh)<textarea class="dgo-textarea" name="body" minlength="5" maxlength="1200" required></textarea></label>' +
        '<button class="dgo-btn dgo-btn--primary" type="submit">Store reply</button></form></article>';
    }).join('') || '<p>No cases.</p>';
    PF.$('#staffFeedback').innerHTML = snapshot.feedback.map(function (f) {
      return '<article class="pf-panel staff-card"><h3>' + PF.esc(f.ref) + ' · ' + f.rating + '/5</h3><p>' +
        PF.esc(f.email + ' · ' + f.message) + '</p></article>';
    }).join('') || '<p>No feedback.</p>';
    PF.$('#staffAudit').textContent = JSON.stringify(snapshot.audit, null, 2);
  }
  function load() {
    return request('/api/admin/list', { offset: offset, referenceId: reference }).then(function (data) {
      snapshot = data; render(); workspace.hidden = false; message('Registry read from this server.');
    });
  }
  function refresh() { load().catch(function (error) { message('Registry read failed: ' + error.message); }); }
  PF.$('#staffFilter').addEventListener('submit', function (event) {
    event.preventDefault(); offset = 0;
    reference = event.target.elements.referenceId.value.trim().toUpperCase();
    refresh();
  });
  PF.$('#staffPrevious').addEventListener('click', function () { offset = Math.max(0, offset - 100); refresh(); });
  PF.$('#staffNext').addEventListener('click', function () { offset += 100; refresh(); });
  PF.$('#staffLogin').addEventListener('submit', function (event) {
    event.preventDefault();
    workspace.hidden = true;
    PF.verifyEmail(PF.$('#staffEmail').value).then(function (verified) {
      if (!verified) { message('Verification cancelled.'); return; }
      proof = verified;
      return load();
    }).catch(function (error) { message('Access or service failed: ' + error.message); });
  });
  PF.$('#staffLogout').addEventListener('click', function () {
    var revoke = proof ? request('/api/logout', {}) : Promise.resolve();
    proof = null; snapshot = null; PF.clearIdentity();
    workspace.hidden = true;
    ['staffRecords', 'staffCases', 'staffFeedback', 'staffAudit'].forEach(function (id) { PF.$('#' + id).textContent = ''; });
    revoke.then(function () { message('Session cleared and server proof revoked.'); })
      .catch(function () { message('Local session cleared; server revocation failed. Proof expires after 30 minutes.'); });
  });
  workspace.addEventListener('submit', function (event) {
    if (event.target.id === 'staffFilter') return;
    event.preventDefault();
    var form = event.target;
    var isRecord = form.hasAttribute('data-record');
    var data = Object.fromEntries(new FormData(form));
    data.referenceId = form.getAttribute(isRecord ? 'data-record' : 'data-case');
    var button = form.querySelector('button[type=submit]');
    button.disabled = true;
    request(isRecord ? '/api/admin/record' : '/api/admin/case', data)
      .then(load).then(function () { message('Update committed to the registry. No email was claimed or sent.'); })
      .catch(function (error) { button.disabled = false; message('Update not confirmed: ' + error.message); });
  });
  workspace.addEventListener('click', function (event) {
    var button = event.target.closest('[data-download]');
    if (!button) return;
    fetch('/api/files', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ referenceId: button.dataset.download, index: Number(button.dataset.index), verification: proof })
    }).then(function (r) {
      if (!r.ok) throw new Error('Download refused');
      return r.blob();
    }).then(function (blob) { saveBlob(blob, 'attachment.bin'); })
      .catch(function (error) { message(error.message); });
  });
  PF.$('#staffExport').addEventListener('click', function () {
    if (snapshot) saveBlob(new Blob([JSON.stringify(snapshot, null, 2)], { type: 'application/json' }), 'registry-export.json');
  });
};
