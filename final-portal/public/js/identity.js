/* One email-code exchange for submission, tracking, support, feedback and staff. */
(function () {
  'use strict';
  var sessions = {};
  PF.clearIdentity = function () { sessions = {}; };
  PF.verifyEmail = function (address) {
    address = String(address || '').trim().toLowerCase();
    var cached = sessions[address];
    if (cached && cached.expiresAt > Date.now() / 1000) return Promise.resolve(cached.verification);
    return new Promise(function (resolve) {
      var previous = document.activeElement;
      var dialog = document.createElement('dialog');
      dialog.className = 'pf-panel';
      dialog.style.cssText = 'max-width: min(94vw, 480px);padding:24px;color:var(--dgo-color-fg-default);background:var(--dgo-color-surface-raised)';
      dialog.setAttribute('aria-labelledby', 'identityTitle');
      dialog.innerHTML = '<h2 id="identityTitle">Verify your email</h2>' +
        '<p>A six-digit code verifies <strong>' + PF.esc(address) + '</strong>. No account is created.</p>' +
        '<p role="status" aria-live="polite" id="identityStatus"></p>' +
        '<form><label class="dgo-field"><span class="dgo-field__label">Verification code</span>' +
        '<input class="dgo-input" name="code" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6}" maxlength="6" required></label>' +
        '<div class="dgo-cluster" style="margin-top:16px"><button type="button" class="dgo-btn dgo-btn--secondary" id="identitySend">Send code</button>' +
        '<button type="submit" class="dgo-btn dgo-btn--primary">Verify</button>' +
        '<button type="button" class="dgo-btn dgo-btn--ghost" id="identityCancel">Cancel</button></div></form>';
      document.body.appendChild(dialog);
      var status = dialog.querySelector('#identityStatus');
      var form = dialog.querySelector('form');
      var send = dialog.querySelector('#identitySend');
      var done = false;
      function finish(proof) {
        if (done) return;
        done = true;
        dialog.close();
        dialog.remove();
        if (previous && previous.isConnected) previous.focus();
        resolve(proof);
      }
      send.addEventListener('click', function () {
        send.disabled = true;
        status.textContent = 'Requesting a code…';
        PF.intake.verifyRequest(address).then(function (r) {
          send.disabled = false;
          if (!r.ok || !r.sent) {
            status.textContent = 'Code delivery failed or is rate-limited. Wait at least 30 seconds before retrying. Nothing has been submitted.';
            return;
          }
          status.textContent = r.testMode
            ? 'LOCAL TEST MODE: no email was sent. The test operator must read the private test transport.'
            : 'The mail server accepted the code for delivery. Check your inbox. It expires in 10 minutes.';
          form.elements.code.focus();
        });
      });
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var button = form.querySelector('[type=submit]');
        button.disabled = true;
        PF.intake.verifyConfirm(address, form.elements.code.value).then(function (r) {
          button.disabled = false;
          if (!r.ok || !r.verification) {
            status.textContent = 'Code invalid, expired or unavailable. Five failed attempts require a new code.';
            return;
          }
          sessions[address] = r;
          finish(r.verification);
        });
      });
      dialog.querySelector('#identityCancel').addEventListener('click', function () { finish(null); });
      dialog.addEventListener('cancel', function (event) { event.preventDefault(); finish(null); });
      dialog.addEventListener('close', function () { finish(null); });
      dialog.showModal();
      send.focus();
    });
  };
  PF.api = function (path, data) {
    return fetch(path, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
    }).then(function (r) {
      return r.json().then(function (body) {
        if (!r.ok) throw new Error(body.error || 'request_failed');
        return body;
      });
    });
  };
})();
