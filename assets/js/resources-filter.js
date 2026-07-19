(function () {
  "use strict";

  var browser = document.querySelector("[data-resource-browser]");
  if (!browser) { return; }

  var items = Array.prototype.slice.call(browser.querySelectorAll("[data-resource]"));
  var typeButtons = Array.prototype.slice.call(browser.querySelectorAll("[data-resource-type]"));
  var language = browser.querySelector("[data-resource-language]");
  var search = browser.querySelector("[data-resource-search]");
  var count = browser.querySelector("[data-resource-count]");
  var context = browser.querySelector("[data-resource-context]");
  var empty = browser.querySelector("[data-resource-empty]");
  var resetButtons = Array.prototype.slice.call(browser.querySelectorAll("[data-resource-reset]"));
  var selectedType = "all";

  function normalize(value) {
    return (value || "").toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function update() {
    var selectedLanguage = language ? language.value : "all";
    var query = normalize(search ? search.value.trim() : "");
    var visible = 0;

    items.forEach(function (item) {
      var matchesType = selectedType === "all" || item.dataset.type === selectedType;
      var matchesLanguage = selectedLanguage === "all" || item.dataset.language === selectedLanguage;
      var matchesSearch = !query || normalize(item.dataset.search + " " + item.textContent).indexOf(query) !== -1;
      var matches = matchesType && matchesLanguage && matchesSearch;
      item.hidden = !matches;
      if (matches) { visible += 1; }
    });

    count.textContent = visible + (visible === 1 ? " resource" : " resources");
    context.textContent = selectedType === "all" ? " across all types" : " in " + selectedType + "s";
    empty.hidden = visible !== 0;
  }

  function selectType(button, updateAddress) {
    selectedType = button.dataset.resourceType;
    typeButtons.forEach(function (candidate) {
      var active = candidate === button;
      candidate.classList.toggle("is-active", active);
      candidate.setAttribute("aria-pressed", active ? "true" : "false");
    });
    if (updateAddress && window.history && window.history.replaceState) {
      var address = new URL(window.location.href);
      if (selectedType === "all") {
        address.searchParams.delete("type");
      } else {
        address.searchParams.set("type", selectedType);
      }
      window.history.replaceState({}, "", address.pathname + address.search + address.hash);
    }
    update();
  }

  typeButtons.forEach(function (button) {
    button.addEventListener("click", function () { selectType(button, true); });
  });
  if (language) { language.addEventListener("change", update); }
  if (search) { search.addEventListener("input", update); }

  resetButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (language) { language.value = "all"; }
      if (search) { search.value = ""; }
      selectType(typeButtons[0], true);
      if (search) { search.focus(); }
    });
  });

  var totals = { all: items.length };
  items.forEach(function (item) { totals[item.dataset.type] = (totals[item.dataset.type] || 0) + 1; });
  Object.keys(totals).forEach(function (type) {
    var target = browser.querySelector('[data-type-count="' + type + '"]');
    if (target) { target.textContent = totals[type]; }
  });

  var requestedType = new URLSearchParams(window.location.search).get("type");
  var requestedButton = typeButtons.filter(function (button) {
    return button.dataset.resourceType === requestedType;
  })[0];

  browser.classList.add("is-ready");
  if (requestedButton) {
    selectType(requestedButton, false);
  } else {
    update();
  }
}());
