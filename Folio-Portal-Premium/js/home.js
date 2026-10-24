/* Home — public service catalogue and common questions. No registry counts are published. */
PF.page = function () {
  var catalogue = PF.$('#catalogue');
  if (catalogue) catalogue.innerHTML = PF.CORRESPONDENCE_TYPES.map(function (s) {
    return '<a class="pf-cat__i" href="submit.html?type=' + encodeURIComponent(s.key) + '">' +
      '<span class="pf-cat__sla">' + PF.esc(s.category) + '</span>' +
      '<span class="pf-cat__t">' + PF.esc(s.label) + '</span>' +
      '<p class="pf-cat__b">' + PF.esc(s.blurb) + '</p>' +
      '<span class="pf-cat__go">Start <svg class="icon-sm" aria-hidden="true"><use href="#i-arrow-right"></use></svg></span></a>';
  }).join('');
  var faq = PF.$('#faqPreview');
  if (faq) faq.innerHTML = PF.FAQ.slice(0, 4).map(function (f, i) {
    return '<details' + (i === 0 ? ' open' : '') + '><summary>' + PF.esc(f.q) + '<svg class="icon-sm" aria-hidden="true"><use href="#i-chevron-down"></use></svg></summary>' +
      '<div class="pf-faq__a"><p>' + PF.esc(f.a) + '</p></div></details>';
  }).join('');
};
