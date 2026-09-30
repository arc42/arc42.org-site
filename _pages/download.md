---
title: "Download arc42"
layout: splash
permalink: /download/
excerpt: "Version 9 — the most practical and effective arc42 ever. Every format, 13 languages, free and open source."
---

<div class="ua-strip">
  <span class="ua-strip__flag" aria-hidden="true"><i></i><i></i></span>
  <span>We stand with Ukraine — please support the <a href="https://www.icrc.org/en">ICRC</a>'s humanitarian effort.</span>
</div>

<section class="dl-hero">
  <div class="dl-hero__inner">
    <p class="dl-hero__kicker">{{ site.data.downloads.languages.size }} languages · every format</p>
    <h1 class="dl-hero__title">Download arc42</h1>
    <p class="dl-hero__sub">Build your download — pick a language and a format, <strong>plain</strong> or <strong>with help</strong>. {{ site.data.downloads.languages.size }} languages, every common format, free and open source.</p>
  </div>
</section>

{% comment %} Files are served through the site's own URLs: netlify.toml redirects /dl/<file> to the
   latest arc42-template release on GitHub and /dl/tools/<file> to the tools release. Languages and
   formats come from _data/downloads.yml, generated from the release's manifest.json: make sync-downloads {% endcomment %}
{% assign PREFIX = "/dl/arc42-template-" %}
{% assign TOOLS = "/dl/tools/" %}
{% assign dl = site.data.downloads %}
{% assign first_lang = dl.languages | first %}
{% assign first_fmt = dl.formats | first %}

<div class="dlb" data-prefix="{{ PREFIX }}">
  <div class="dlb__pane dlb__pane--choose">
    <p class="dlb__step">1 &middot; Choose language</p>
    <div class="dlb__langs" role="group" aria-label="Language">
      {% for l in dl.languages %}<button type="button" class="dlb__lang{% if forloop.first %} is-active{% endif %}" aria-pressed="{% if forloop.first %}true{% else %}false{% endif %}" data-lang="{{ l.code }}" data-full="{{ l.name }}" data-version="{{ l.version }}" data-date="{{ l.date }}">{{ l.code }}</button>{% endfor %}
    </div>
    <p class="dlb__step">2 &middot; Choose format</p>
    <div class="dlb__fmts" role="group" aria-label="Format">
      {% for f in dl.formats %}<button type="button" class="dlb__fmt{% if forloop.first %} is-active{% endif %}" aria-pressed="{% if forloop.first %}true{% else %}false{% endif %}" data-fmt="{{ f.id }}" data-label="{{ f.label }}">{{ f.label }}</button>{% endfor %}
    </div>
  </div>

  <div class="dlb__pane dlb__result" aria-live="polite">
    <p class="dlb__rlabel">Your download</p>
    <p class="dlb__combo" id="dlb-combo">arc42 &middot; {{ first_lang.name }} &middot; {{ first_fmt.label }}</p>
    <p class="dlb__meta" id="dlb-meta">Version {{ first_lang.version }} ({{ first_lang.date }}) · free &amp; open source</p>
    <p class="dlb__buttons">
      <a class="btn btn--arc42 btn--large" id="dlb-plain" href="{{ PREFIX }}{{ first_lang.code }}-plain-{{ first_fmt.id }}.zip"><span aria-hidden="true">&#8595;</span> Plain .zip</a>
      <a class="btn btn--arc42-outline btn--large" id="dlb-help" href="{{ PREFIX }}{{ first_lang.code }}-withhelp-{{ first_fmt.id }}.zip"><span aria-hidden="true">&#8595;</span> With help .zip</a>
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
| DE | [.zip]({{TOOLS}}arc42-template-DE-withhelp-confluenceFlat.zip) | [.zip]({{TOOLS}}arc42-template-DE-withhelp-confluenceStructured.zip) |
| EN | [.zip]({{TOOLS}}arc42-template-EN-withhelp-confluenceFlat.zip) | [.zip]({{TOOLS}}arc42-template-EN-withhelp-confluenceStructured.zip) |

These are based on an older template version — generating Confluence from AsciiDoc for the latest versions is technically difficult. For an up-to-date workflow we recommend authoring in **AsciiDoc** and syncing to Confluence with the [asciidoc2confluence](https://github.com/rdmueller/asciidoc2confluence) script. (We no longer run a public Confluence instance, and the former Atlassian Marketplace plugin has been discontinued by Atlassian.)

**Legacy versions (arc42 v6) for Confluence 4/5.** Provided by arc42 users; we can't support these ourselves.
{: .small}

| Confluence version | Language | With Help |
|--------|-----------|-----------|
| 5.x | EN | [.zip]({{TOOLS}}templateEN-V6-confluence-53.xml.zip) |
| >4.3 | EN | [.zip]({{TOOLS}}templateEN-V6-confluence-43.xml.zip) |
| 5.x | DE | [.zip]({{TOOLS}}templateDE-V6-confluence-53.xml.zip) |
| >4.3 | DE | [.zip]({{TOOLS}}templateDE-V6-confluence-43.xml.zip) |

</details>

<details class="dl-details" markdown="1">
<summary>Doxygen</summary>

Doxygen is the de-facto standard for generating documentation from annotated C++ sources (and C, Objective-C, C#, PHP, Java, Python, IDL, Fortran, VHDL and more) — see [doxygen.nl](https://www.doxygen.nl/).

| Doxygen |
|--------------------------|
| arc42 Doxygen template: [arc42_doxygen_template.zip]({{TOOLS}}arc42_doxygen_template.zip) |

Available in EN only. Contributed by Stephan Lessing, February 2023.
{: .small}

</details>

<details class="dl-details" markdown="1">
<summary>Enterprise Architect&copy;</summary>

[Enterprise Architect](https://sparxsystems.com/)&copy; is a commercial UML modelling tool by SparxSystems. This template covers the complete arc42 structure (based on version 8.2) using UML diagrams and text, with the official arc42 explanations included as notes in the diagrams. It uses only Professional-Edition features, so it works across all editions. Updated versions contributed by [Raphael Dumhart](https://github.com/raphael-dumhart), May 2024.

| Language / version | Download |
|--------------------|----------|
| DE — with help, EAPX (EA < 16.x) | [.eapx]({{TOOLS}}arc42-template-DE-withhelp-ea.eapx) |
| DE — with help, QEA (EA ≥ 16.x) | [.qea]({{TOOLS}}arc42-template-DE-withhelp-ea.qea) |
| EN — with help, EAPX (EA < 16.x) | [.eapx]({{TOOLS}}arc42-template-EN-withhelp-ea.eapx) |
| EN — with help, QEA (EA ≥ 16.x) | [.qea]({{TOOLS}}arc42-template-EN-withhelp-ea.qea) |
| Legacy short v6 | [.eap.zip]({{TOOLS}}arc42-V6-short.eap.zip) |

**File formats.** QEA (introduced in EA 16, SQLite3-based) or EAPX (older default, JET 4). For EA 15 and below use EAPX; before EA 14, rename the extension to `.eap`. To only view a model, the free [EA Lite edition](https://www.sparxsystems.eu/enterprise-architect/ea-lite-edition) is enough.

</details>

<details class="dl-details" markdown="1">
<summary>IBM Rhapsody&copy;</summary>

[Rhapsody](https://www-03.ibm.com/software/products/en/ratirhap)&copy; is a commercial IBM modelling tool, primarily for embedded systems. This version contains the complete arc42 structure with minimal help text, modelled in UML/SysML, and includes the profile, an RPE report-generation template, and a worked example. Created and tested with Rhapsody 8.2.1, EN only.

| IBM Rhapsody arc42 template |
|--------------------------|
| [arc42-v1-rhapsody.zip]({{TOOLS}}arc42-v1-rhapsody.zip) |

Contributed by Niranjan SK (Robert Bosch GmbH) — thank you!
{: .small}

</details>

<details class="dl-details" markdown="1">
<summary>Other modelling tools</summary>

We don't support additional modelling tools yet, but we'd love to. If you use arc42 with one, please consider [contributing](/about/#contact)!

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

**docbook**
: [DocBook](https://docbook.org/) XML — the intermediate format most other formats are generated from, useful for your own tool chains.

**epub**
: E-book format, for _reading_ the template on e-readers and tablets.

**pdf**
: For _reading_ or printing the template, not for working with it.

**textile**
: Another simple markup language, documented at [textile-lang.com](https://textile-lang.com/).

**html**
: For _viewing_ the template only, not for working with it.

**Confluence**
: The commercial wiki by [Atlassian](https://confluence.atlassian.com/alldoc/atlassian-documentation-32243719.html).

<details class="dl-details" markdown="1">
<summary>Version history &amp; translation credits</summary>

**Version 9** adds a Simplified Chinese (ZH) translation — thanks to Chris (Gentle) Y杨 and DannyGe — Hungarian (May 2026) by László Séra, and Traditional Chinese (ZH-TW, September 2026) by Nien-chun Yin. German is currently at 9.1 (December 2025).

**Version 8** was released February 2022; UA August 2022, CZ October 2022, FR June 2023, PT October 2024.

{: .notice}
Nous sommes heureux d'annoncer la disponibilité de la version française d'arc42 — merci beaucoup à Damien Lucas. Bon travail !

{: .notice}
We are so happy to announce the Czech version of arc42 — thanks to Jakub RC. You rock!

{: .notice}
We are incredibly happy to announce the Ukrainian version of arc42 — thanks to an anonymous author, supported by [Larysa Visengeriyeva](https://twitter.com/visenger).

{: .notice}
Thanks to Guilherme Weizenmann for the Portuguese translation, and to Pedro Mattiollo for the constructive review. Você é incrível!

</details>

<div class="training-section" markdown="1">

## Training on arc42

Want to go deeper? The creators of arc42 run iSAQB-certified architecture trainings, on-site and remote. Upcoming dates:

{% include subtle-ads/subtle-ads.html %}

<p class="training-section__actions">
  <a class="btn btn--arc42" href="https://trainings.arc42.org" rel="noopener">See all dates &amp; register &#8594;</a>
  <a class="btn btn--arc42-outline" href="/learn/">Training details</a>
</p>

</div>

<script src="/assets/js/download-builder.js" defer></script>
