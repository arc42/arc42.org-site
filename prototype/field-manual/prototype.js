(function () {
  "use strict";

  const menuToggle = document.querySelector("[data-menu-toggle]");
  const siteNav = document.querySelector("[data-site-nav]");

  function setMenu(open) {
    if (!menuToggle || !siteNav) return;
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    siteNav.dataset.open = String(open);
  }

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", function () {
      setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setMenu(false);
        menuToggle.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (!siteNav.contains(event.target) && !menuToggle.contains(event.target)) {
        setMenu(false);
      }
    });
  }

  const workflowChoices = Array.from(document.querySelectorAll("[data-workflow]"));
  const languageChoices = Array.from(document.querySelectorAll("[data-language]"));
  const guidanceChoices = Array.from(document.querySelectorAll("[data-guidance]"));
  const resultFormat = document.querySelector("[data-result-format]");
  const resultLanguage = document.querySelector("[data-result-language]");
  const resultGuidance = document.querySelector("[data-result-guidance]");
  const resultVersion = document.querySelector("[data-result-version]");
  const downloadButton = document.querySelector("[data-download-button]");
  const downloadStatus = document.querySelector("[data-download-status]");

  const downloadState = {
    workflow: "Docs as code",
    format: "AsciiDoc",
    language: "English",
    guidance: "With help",
    version: "9.0 · July 2025 · Current"
  };

  function pressOne(group, selected) {
    group.forEach(function (button) {
      button.setAttribute("aria-pressed", String(button === selected));
    });
  }

  function updateResult() {
    if (resultFormat) resultFormat.textContent = downloadState.format;
    if (resultLanguage) resultLanguage.textContent = downloadState.language;
    if (resultGuidance) resultGuidance.textContent = downloadState.guidance;
    if (resultVersion) resultVersion.textContent = downloadState.version;
    if (downloadStatus) downloadStatus.hidden = true;
  }

  workflowChoices.forEach(function (button) {
    button.addEventListener("click", function () {
      pressOne(workflowChoices, button);
      downloadState.workflow = button.dataset.workflow;
      downloadState.format = button.dataset.format;
      updateResult();
    });
  });

  languageChoices.forEach(function (button) {
    button.addEventListener("click", function () {
      pressOne(languageChoices, button);
      downloadState.language = button.dataset.language;
      downloadState.version = button.dataset.version;
      updateResult();
    });
  });

  guidanceChoices.forEach(function (button) {
    button.addEventListener("click", function () {
      pressOne(guidanceChoices, button);
      downloadState.guidance = button.dataset.guidance;
      updateResult();
    });
  });

  if (downloadButton && downloadStatus) {
    downloadButton.addEventListener("click", function () {
      downloadButton.disabled = true;
      downloadButton.textContent = "Preparing…";
      downloadStatus.hidden = true;

      window.setTimeout(function () {
        downloadButton.disabled = false;
        downloadButton.textContent = "Download ZIP";
        downloadStatus.hidden = false;
        downloadStatus.innerHTML = "<strong>Prototype handoff complete.</strong><br>This preview simulates the download. In production, the ZIP would start now.";
        downloadStatus.focus();
      }, 450);
    });
  }

  const resourceRows = Array.from(document.querySelectorAll("[data-resource]"));
  const resourceFilters = Array.from(document.querySelectorAll("[data-filter]"));
  const resourceCount = document.querySelector("[data-resource-count]");
  const emptyState = document.querySelector("[data-empty-state]");
  const clearFilters = Array.from(document.querySelectorAll("[data-clear-filters]"));

  function filterResources() {
    if (!resourceRows.length) return;
    const values = {};
    resourceFilters.forEach(function (field) {
      values[field.dataset.filter] = field.value.toLowerCase();
    });

    let visible = 0;
    resourceRows.forEach(function (row) {
      const matches = Object.keys(values).every(function (key) {
        const expected = values[key];
        if (!expected || expected === "all") return true;
        return (row.dataset[key] || "").toLowerCase().includes(expected);
      });
      row.hidden = !matches;
      if (matches) visible += 1;
    });

    if (resourceCount) {
      resourceCount.textContent = visible + (visible === 1 ? " resource" : " resources");
    }
    if (emptyState) emptyState.hidden = visible !== 0;
  }

  resourceFilters.forEach(function (field) {
    field.addEventListener("input", filterResources);
    field.addEventListener("change", filterResources);
  });

  clearFilters.forEach(function (button) {
    button.addEventListener("click", function () {
      resourceFilters.forEach(function (field) {
        field.value = field.tagName === "SELECT" ? "all" : "";
      });
      filterResources();
    });
  });
})();
