/* Quick-download panel (home hero): EN/DE toggle rewrites the three
   format rows. Markup contract: .quick-dl[data-prefix], .quick-dl__lang
   toggle buttons with data-lang, .quick-dl__row links with data-fmt. */
(function () {
  var panel = document.querySelector('.quick-dl');
  if (!panel) { return; }
  var PREFIX = panel.getAttribute('data-prefix');
  var lang = 'EN';

  function apply() {
    panel.querySelectorAll('.quick-dl__row').forEach(function (row) {
      row.setAttribute('href', PREFIX + lang + '-plain-' + row.getAttribute('data-fmt') + '.zip');
    });
    panel.querySelectorAll('.quick-dl__lang').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  panel.querySelectorAll('.quick-dl__lang').forEach(function (b) {
    b.addEventListener('click', function () { lang = b.getAttribute('data-lang'); apply(); });
  });
})();
