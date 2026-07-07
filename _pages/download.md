---
title: "Download arc42"
layout: single
permalink: /download/
classes: wide

header:
  overlay_filter: rgba(27, 44, 68, 0.55)
  overlay_image: /images/splash/download-landingpage.webp
  caption: "Photo credit: [**Ellery Sterling**](https://unsplash.com/photos/dPu5FIT1bGU)"

excerpt: "Version 9 — the most practical and effective arc42 ever. Every format, 12 languages, free and open source."
---

<div class="ua-background" markdown="1">

>### We stand with the people of Ukraine <span class="parent"><span class="ua-text"><i class="fa fa-solid fa-heart children"></i></span><span class="ua-size children"><i class="fa fa-solid fa-heart heart beat children"></i></span></span>
>
>Please assist humanitarian efforts for the Ukrainian people and those affected by the military invasion of Ukraine by supporting international aid organizations, including the [International Committee of the Red Cross](https://www.icrc.org/en).

</div>

**Version 9.0.0** (October 2025) is available in English, German, French, Czech and Chinese, with a Hungarian translation added in July 2026. All other languages are at version 8.2.1 (October 2024).

## Downloads
{: #downloads}

Pick your language, then choose a format. Every template comes **plain** (structure only) or **with help** (the official arc42 explanations embedded in each section — ideal if you're new to the template).

{% assign PREFIX = "https://github.com/arc42/arc42-template/raw/master/dist/arc42-template-" %}
{% assign GITHUBDIR = "https://github.com/arc42/arc42-template/raw/master/dist/" %}
{% assign formats = "asciidoc|markdown|docx|markdownMP|markdownStrict|markdownMPStrict|gitHubMarkdown|gitHubMarkdownMP|latex|html|rst|textile" | split: "|" %}
{% assign formats_label = "AsciiDoc|Markdown|Word · docx|Markdown · multi-page|Markdown · strict|Markdown MP · strict|GitHub Markdown|GitHub Markdown · MP|LaTeX|HTML|reStructuredText|Textile" | split: "|" %}
{% assign languages = "EN|DE|FR|CZ|ZH|HU|ES|IT|NL|PT|RU|UKR" | split: "|" %}
{% assign languages_full = "English|Deutsch|Français|Čeština|简体中文|Magyar|Español|Italiano|Nederlands|Português|Русский|Українська" | split: "|" %}

<div class="dl-finder">
  <label class="dl-finder__label" for="dl-lang">Language</label>
  <select class="dl-finder__select" id="dl-lang">
    {% for lang in languages %}<option value="{{ lang }}">{{ languages_full[forloop.index0] }} ({{ lang }})</option>{% endfor %}
  </select>
</div>

{% for lang in languages %}
<div class="dl-lang" data-lang="{{ lang }}"{% unless forloop.first %} hidden{% endunless %}>
  <div class="dl-grid">
    {% for fmt in formats %}
    <div class="dl-card{% if forloop.index0 < 3 %} dl-card--popular{% endif %}">
      <span class="dl-card__fmt">{{ formats_label[forloop.index0] }}{% if forloop.index0 < 3 %} <span class="dl-badge">popular</span>{% endif %}</span>
      <span class="dl-card__links"><a href="{{ PREFIX }}{{ lang }}-plain-{{ fmt }}.zip">plain</a><a href="{{ PREFIX }}{{ lang }}-withhelp-{{ fmt }}.zip">with&nbsp;help</a></span>
    </div>
    {% endfor %}
  </div>
</div>
{% endfor %}

These formats are generated from their AsciiDoc sources in the [GitHub repository](https://github.com/arc42/arc42-template). Not sure which format to pick? See the [format overview](#format-overview) below.

## More tools &amp; formats

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
: Widespread, simple markup — [documented here](https://daringfireball.net/projects/markdown/syntax) by its inventor.

**markdown (strict)**
: A restricted Markdown, [documented here](https://daringfireball.net/projects/markdown/syntax).

**markdownMP**
: As **markdown** above, but every chapter lives in its own file.

**gitHubMarkdown**
: GitHub Flavored Markdown, used on GitHub.com and GitHub Enterprise — see the [guide](https://docs.github.com/en/get-started/writing-on-github).

**gitHubMarkdownMP**
: As **gitHubMarkdown** above, but every chapter in its own file.

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

**Version 9** adds a Chinese (ZH) translation — thanks to Chris (Gentle) Y杨 and DannyGe — and Hungarian (July 2026) by László Séra.

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
    var sel = document.getElementById('dl-lang');
    if (!sel) { return; }
    var panels = document.querySelectorAll('.dl-lang');
    sel.addEventListener('change', function () {
      panels.forEach(function (p) {
        if (p.getAttribute('data-lang') === sel.value) { p.removeAttribute('hidden'); }
        else { p.setAttribute('hidden', ''); }
      });
    });
  })();
</script>
