/* Folio Portal premium interaction layer. Progressive enhancement only. */
(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function init() {
    var top = document.querySelector('.pf-top');
    var progress = document.createElement('div');
    progress.className = 'pf-progress';
    progress.setAttribute('aria-hidden', 'true');
    document.body.appendChild(progress);

    var ticking = false;
    function updateScroll() {
      ticking = false;
      var max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
      progress.style.setProperty('--pf-progress', Math.min(1, scrollY / max).toFixed(4));
      if (top) top.setAttribute('data-scrolled', scrollY > 18 ? 'true' : 'false');
    }
    addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(updateScroll); }
    }, { passive: true });
    updateScroll();

    var reveal = Array.prototype.slice.call(document.querySelectorAll(
      '.pf-rail__item, .pf-flow__step'
    ));
    reveal.forEach(function (node, index) {
      node.setAttribute('data-pf-reveal', '');
    });
    if (reduce || !('IntersectionObserver' in window)) {
      reveal.forEach(function (node) { node.classList.add('is-visible'); });
    } else {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
      reveal.forEach(function (node) { observer.observe(node); });
    }


    var input = document.getElementById('serviceSearch');
    var catalogue = document.getElementById('catalogue');
    var count = document.getElementById('serviceCount');
    if (input && catalogue) {
      var empty = document.createElement('div');
      empty.className = 'pf-cat-empty';
      empty.textContent = 'No matching correspondence type. Try a broader term, or open the submission form to browse every option.';
      empty.hidden = true;
      catalogue.appendChild(empty);
      function filter() {
        var query = input.value.trim().toLowerCase();
        var cards = Array.prototype.slice.call(catalogue.querySelectorAll('.pf-cat__i'));
        var shown = 0;
        cards.forEach(function (card) {
          var match = !query || card.textContent.toLowerCase().indexOf(query) !== -1;
          card.hidden = !match; if (match) shown++;
        });
        empty.hidden = shown !== 0;
        if (count) count.textContent = shown + (shown === 1 ? ' type' : ' types');
      }
      input.addEventListener('input', filter);
      new MutationObserver(filter).observe(catalogue, { childList: true });
      filter();
    }

    document.querySelectorAll('.pf-faq').forEach(function (group) {
      group.addEventListener('toggle', function (event) {
        if (!event.target.open) return;
        group.querySelectorAll('details[open]').forEach(function (item) {
          if (item !== event.target) item.open = false;
        });
      }, true);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
