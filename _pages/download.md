---
title: "Download arc42"
layout: splash
permalink: /download/
excerpt: "Version 9 — the most practical and effective arc42 ever. Every format, 12 languages, free and open source."
---

<div class="ua-strip">
  <span class="ua-strip__flag" aria-hidden="true"><i></i><i></i></span>
  <span>We stand with Ukraine — please support the <a href="https://www.icrc.org/en">ICRC</a>'s humanitarian effort.</span>
</div>

<section class="dl-hero">
  <div class="dl-hero__inner">
    <p class="dl-hero__kicker">Template version 9 · 12 languages</p>
    <h1 class="dl-hero__title">Download arc42</h1>
    <p class="dl-hero__sub">Build your download — pick a language and a format, <strong>plain</strong> or <strong>with help</strong>. Version 9 covers English, German, French, Czech, Chinese and Hungarian; six more languages are available at version 8.2. Free and open source.</p>
  </div>
</section>

{% assign PREFIX = "https://github.com/arc42/arc42-template/raw/master/dist/arc42-template-" %}
{% assign GITHUBDIR = "https://github.com/arc42/arc42-template/raw/master/dist/" %}
{% comment %} lang code, full name, template version, release date — per language
   (source of truth: <lang>/version.properties in the arc42-template repo) {% endcomment %}
{% assign lang_data_v9 = "EN,English,9.0,Jul 2025|DE,Deutsch,9.1,Dec 2025|FR,Français,9.0,Apr 2025|CZ,Čeština,9.0,Jan 2025|ZH,简体中文,9.0,Jul 2025|HU,Magyar,9.0,May 2026" | split: "|" %}
{% assign lang_data_v82 = "ES,Español,8.2,Jan 2023|IT,Italiano,8.2,Mar 2023|NL,Nederlands,8.2,Mar 2023|PT,Português,8.2,Sep 2024|RU,Русский,8.2,Jan 2023|UKR,Українська,8.2,Jan 2023" | split: "|" %}
{% assign fmt_ids = "asciidoc|markdown|docx|markdownMP|gitHubMarkdown|latex|rst|textile|html|markdownStrict|markdownMPStrict|gitHubMarkdownMP" | split: "|" %}
{% assign fmt_labels = "AsciiDoc|Markdown|Word (.docx)|Markdown · multi-page|GitHub Markdown|LaTeX|reStructuredText|Textile|HTML|Markdown · strict|Markdown MP · strict|GitHub Markdown · MP" | split: "|" %}

<div class="dlb" data-prefix="{{ PREFIX }}">
  <div class="dlb__pane dlb__pane--choose">
    <p class="dlb__step">1 &middot; Choose language</p>
    <div class="dlb__langs" role="group" aria-label="Language">
      <div class="dlb__verrow">
        <span class="dlb__verlabel">Version 9</span>
        {% for item in lang_data_v9 %}{% assign p = item | split: "," %}<button type="button" class="dlb__lang{% if forloop.first %} is-active{% endif %}" aria-pressed="{% if forloop.first %}true{% else %}false{% endif %}" data-lang="{{ p[0] }}" data-full="{{ p[1] }}" data-version="{{ p[2] }}" data-date="{{ p[3] }}">{{ p[0] }}</button>{% endfor %}
      </div>
      <div class="dlb__verrow">
        <span class="dlb__verlabel">Version 8.2</span>
        {% for item in lang_data_v82 %}{% assign p = item | split: "," %}<button type="button" class="dlb__lang" aria-pressed="false" data-lang="{{ p[0] }}" data-full="{{ p[1] }}" data-version="{{ p[2] }}" data-date="{{ p[3] }}">{{ p[0] }}</button>{% endfor %}
      </div>
    </div>
    <p class="dlb__step">2 &middot; Choose format</p>
    <div class="dlb__fmts" role="group" aria-label="Format">
      {% for f in fmt_ids %}<button type="button" class="dlb__fmt{% if forloop.first %} is-active{% endif %}" aria-pressed="{% if forloop.first %}true{% else %}false{% endif %}" data-fmt="{{ f }}" data-label="{{ fmt_labels[forloop.index0] }}">{{ fmt_labels[forloop.index0] }}</button>{% endfor %}
    </div>
  </div>

  <div class="dlb__pane dlb__result" aria-live="polite">
    <p class="dlb__rlabel">Your download</p>
    <p class="dlb__combo" id="dlb-combo">arc42 &middot; English &middot; AsciiDoc</p>
    <p class="dlb__meta" id="dlb-meta">Version 9.0 (Jul 2025) · free &amp; open source</p>
    <p class="dlb__buttons">
      <a class="btn btn--arc42 btn--large" id="dlb-plain" href="{{ PREFIX }}EN-plain-asciidoc.zip"><span aria-hidden="true">&#8595;</span> Plain .zip</a>
      <a class="btn btn--arc42-outline btn--large" id="dlb-help" href="{{ PREFIX }}EN-withhelp-asciidoc.zip">With help .zip</a>
    </p>
    <p class="dlb__hint"><strong>With help</strong> embeds the official arc42 explanations in every section — ideal when you're new to the template. <strong>Plain</strong> gives you the bare structure.</p>
  </div>
</div>

These formats are generated from their AsciiDoc sources in the [GitHub repository](https://github.com/arc42/arc42-template). Not sure which to pick? See the [format overview](#format-overview) below.

## Specialised &amp; tool formats

<details class="dl-details" markdown="1">
<summary>Confluence</summary>

Confluence versions are generated **with help** and come in two flavours:

* **flat** — all sections on a single page
* **structured** — one Confluence page per arc42 section

| Language | flat | structured |
|----------|------|------------|
| DE | [.zip]({{PREFIX}}DE-withhelp-confluenceFlat.zip) | [.zip]({{PREFIX}}DE-withhelp-confluenceStructured.zip) |
| EN | [.zip]({{PREFIX}}EN-withhelp-confluenceFlat.zip) | [.zip]({{PREFIX}}EN-withhelp-confluenceStructured.zip) |

These are based on an older template version — generating Confluence from AsciiDoc for the latest versions is technically difficult. For an up-to-date workflow we recommend authoring in **AsciiDoc** and syncing to Confluence with the [asciidoc2confluence](https://github.com/rdmueller/asciidoc2confluence) script. (We no longer run a public Confluence instance, and the former Atlassian Marketplace plugin has been discontinued by Atlassian.)

**Legacy versions (arc42 v6) for Confluence 4/5.** Provided by arc42 users; we can't support these ourselves.
{: .small}

| Confluence version | Language | With Help |
|--------|-----------|-----------|
| 5.x | EN | [.zip]({{GITHUBDIR}}legacy/templateEN-V6-confluence-53.xml.zip) |
| >4.3 | EN | [.zip]({{GITHUBDIR}}legacy/templateEN-V6-confluence-43.xml.zip) |
| 5.x | DE | [.zip]({{GITHUBDIR}}legacy/templateDE-V6-confluence-53.xml.zip) |
| >4.3 | DE | [.zip]({{GITHUBDIR}}legacy/templateDE-V6-confluence-43.xml.zip) |

</details>

<details class="dl-details" markdown="1">
<summary>Doxygen</summary>

Doxygen is the de-facto standard for generating documentation from annotated C++ sources (and C, Objective-C, C#, PHP, Java, Python, IDL, Fortran, VHDL and more) — see [doxygen.nl](https://www.doxygen.nl/).

| Doxygen |
|--------------------------|
| arc42 Doxygen template: [arc42_doxygen_template.zip]({{GITHUBDIR}}doxygen/arc42_doxygen_template.zip) |

Available in EN only. Contributed by Stephan Lessing, February 2023.
{: .small}

</details>

<details class="dl-details" markdown="1">
<summary>Enterprise Architect&copy;</summary>

[Enterprise Architect](https://sparxsystems.com/)&copy; is a commercial UML modelling tool by SparxSystems. This template covers the complete arc42 structure (based on version 8.2) using UML diagrams and text, with the official arc42 explanations included as notes in the diagrams. It uses only Professional-Edition features, so it works across all editions. Updated versions contributed by [Raphael Dumhart](https://github.com/raphael-dumhart), May 2024.

| Language / version | Download |
|--------------------|----------|
| DE — with help, EAPX (EA < 16.x) | [.eapx]({{GITHUBDIR}}eap/arc42-template-DE-withhelp-ea.eapx) |
| DE — with help, QEA (EA ≥ 16.x) | [.qea]({{GITHUBDIR}}eap/arc42-template-DE-withhelp-ea.qea) |
| EN — with help, EAPX (EA < 16.x) | [.eapx]({{GITHUBDIR}}eap/arc42-template-EN-withhelp-ea.eapx) |
| EN — with help, QEA (EA ≥ 16.x) | [.qea]({{GITHUBDIR}}eap/arc42-template-EN-withhelp-ea.qea) |
| Legacy short v6 | [.eap.zip]({{GITHUBDIR}}eap/arc42-V6-short.eap.zip) |

**File formats.** QEA (introduced in EA 16, SQLite3-based) or EAPX (older default, JET 4). For EA 15 and below use EAPX; before EA 14, rename the extension to `.eap`. To only view a model, the free [EA Lite edition](https://www.sparxsystems.eu/enterprise-architect/ea-lite-edition) is enough.

</details>

<details class="dl-details" markdown="1">
<summary>IBM Rhapsody&copy;</summary>

[Rhapsody](https://www-03.ibm.com/software/products/en/ratirhap)&copy; is a commercial IBM modelling tool, primarily for embedded systems. This version contains the complete arc42 structure with minimal help text, modelled in UML/SysML, and includes the profile, an RPE report-generation template, and a worked example. Created and tested with Rhapsody 8.2.1, EN only.

| IBM Rhapsody arc42 template |
|--------------------------|
| [arc42-v1-rhapsody.zip]({{GITHUBDIR}}rhapsody/arc42-v1-rhapsody.zip) |

Contributed by Niranjan SK (Robert Bosch GmbH) — thank you!
{: .small}

</details>

<details class="dl-details" markdown="1">
<summary>Other modelling tools</summary>

We don't support additional modelling tools yet — but we'd love to. If you use arc42 with one, please consider [contributing](/contact/)!

</details>

## Format overview

**docx**
: Microsoft Word, also usable with LibreOffice or OpenOffice.

**asciidoc**
: Powerful yet simple markup, used by arc42 itself — ideally suited to architecture documentation. See [docToolchain](https://doctoolchain.github.io/docToolchain/) or the [AsciiDoc quick reference](https://asciidoctor.org/docs/asciidoc-syntax-quick-reference/).

**markdown**
: Widespread, simple markup — [documented here](https://daringfireball.net/projects/markdown/syntax) by its inventor. The **strict** variants restrict it further; the **multi-page (MP)** variants split every chapter into its own file.

**gitHubMarkdown**
: GitHub Flavored Markdown, used on GitHub.com and GitHub Enterprise — see the [guide](https://docs.github.com/en/get-started/writing-on-github).

**latex**
: The [document preparation system](https://www.latex-project.org/) — for those who need beauty and are willing to invest some effort.

**rst**
: [reStructuredText](https://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html), heavily used by [Read the Docs](https://readthedocs.org/) and in the Python world.

**textile**
: Another simple markup language, documented at [textile-lang.com](https://textile-lang.com/).

**html**
: For _viewing_ the template only, not for working with it.

**Confluence**
: The commercial wiki by [Atlassian](https://confluence.atlassian.com/alldoc/atlassian-documentation-32243719.html).

<details class="dl-details" markdown="1">
<summary>Version history &amp; translation credits</summary>

**Version 9** adds a Chinese (ZH) translation — thanks to Chris (Gentle) Y杨 and DannyGe — and Hungarian (May 2026) by László Séra. German is currently at 9.1 (December 2025).

**Version 8** was released February 2022; UA August 2022, CZ October 2022, FR June 2023, PT October 2024.

{: .notice}
Nous sommes heureux d'annoncer la disponibilité de la version française d'arc42 — merci beaucoup à Damien Lucas. Bon travail !

{: .notice}
We are so happy to announce the Czech version of arc42 — thanks to Jakub RC. You rock!

{: .notice}
We are incredibly happy to announce the Ukrainian version of arc42 — thanks to Ivan Bulyk and support from [Larysa Visengeriyeva](https://twitter.com/visenger).

{: .notice}
Thanks to Guilherme Weizenmann for the Portuguese translation, and to Pedro Mattiollo for the constructive review. Você é incrível!

</details>

<div class="training-section" markdown="1">

## Training on arc42

Want to go deeper? The creators of arc42 run iSAQB-certified architecture trainings, on-site and remote. Upcoming dates:

{% include subtle-ads/subtle-ads.html %}

<p class="training-section__actions">
  <a class="btn btn--arc42 btn--large" href="https://trainings.arc42.org" rel="noopener">See all dates &amp; register &#8594;</a>
  <a class="btn btn--arc42-outline btn--large" href="/learn/">Training details</a>
</p>

</div>

<script>
  (function () {
    var root = document.querySelector('.dlb');
    if (!root) { return; }
    var PREFIX = root.getAttribute('data-prefix');
    var lang = 'EN', full = 'English', fmt = 'asciidoc', label = 'AsciiDoc';
    var version = '9.0', vdate = 'Jul 2025';
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
</script>
