/* Download builder (/download/): language + format picker, rendered from _data/downloads.yml.
   Markup contract: .dlb[data-prefix], .dlb__lang / .dlb__fmt toggle buttons
   with data-lang/full/version/date resp. data-fmt/label, result pane ids
   dlb-combo, dlb-meta, dlb-plain, dlb-help. */
(function () {
  var root = document.querySelector('.dlb');
  if (!root) { return; }
  var PREFIX = root.getAttribute('data-prefix');
  // initial state: the buttons marked active in the markup (the first language and format)
  var l0 = root.querySelector('.dlb__lang.is-active'), f0 = root.querySelector('.dlb__fmt.is-active');
  var lang = l0.getAttribute('data-lang'), full = l0.getAttribute('data-full');
  var version = l0.getAttribute('data-version'), vdate = l0.getAttribute('data-date');
  var fmt = f0.getAttribute('data-fmt'), label = f0.getAttribute('data-label');
  var combo = document.getElementById('dlb-combo');
  var meta = document.getElementById('dlb-meta');
  var plain = document.getElementById('dlb-plain');
  var help = document.getElementById('dlb-help');

  function refresh() {
    combo.textContent = 'arc42 · ' + full + ' · ' + label;
    meta.textContent = 'Version ' + version + ' (' + vdate + ') · free & open source';
    plain.setAttribute('href', PREFIX + lang + '-plain-' + fmt + '.zip');
    help.setAttribute('href', PREFIX + lang + '-withhelp-' + fmt + '.zip');
  }

  function activate(group, btn) {
    root.querySelectorAll(group).forEach(function (b) {
      var on = b === btn;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  root.querySelectorAll('.dlb__lang').forEach(function (b) {
    b.addEventListener('click', function () {
      lang = b.getAttribute('data-lang'); full = b.getAttribute('data-full');
      version = b.getAttribute('data-version'); vdate = b.getAttribute('data-date');
      activate('.dlb__lang', b); refresh();
    });
  });

  root.querySelectorAll('.dlb__fmt').forEach(function (b) {
    b.addEventListener('click', function () {
      fmt = b.getAttribute('data-fmt'); label = b.getAttribute('data-label');
      activate('.dlb__fmt', b); refresh();
    });
  });
})();
