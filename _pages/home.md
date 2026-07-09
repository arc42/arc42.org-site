---
title: "arc42"
layout: splash
permalink: /
excerpt: "All you need to construct, communicate and document your software architecture. Proven, practical, pragmatic — free and open source."

starter:
  - title: "Template"
    excerpt: "![Drawers of a cabinet](/images/home/template.webp)<br>
    The arc42 skeleton for architecture docs — you fill it with your decisions."
    url: "/overview/"
    btn_label: "Explore the template"
    btn_class: "btn--arc42-outline"
  - title: "Training"
    excerpt: "![Participants in an arc42 training workshop](/images/home/Training.webp)<br>
    Mastering Software Architectures — prepares for the iSAQB Foundation certification."
    url: "/learn/"
    btn_label: "Explore training"
    btn_class: "btn--arc42-outline"
  - title: "The method"
    excerpt: "![To-do, doing, done slips of paper](/images/home/method.webp)<br>
    Systematic but flexible — suits large and small teams, agile or not."
    url: "/method/"
    btn_label: "See the method"
    btn_class: "btn--arc42-outline"
---

{% assign PREFIX = "https://github.com/arc42/arc42-template/raw/master/dist/arc42-template-" %}

<div class="ua-strip">
  <span class="ua-strip__flag" aria-hidden="true"><i></i><i></i></span>
  <span>We stand with Ukraine — please support the <a href="https://www.icrc.org/en">ICRC</a>'s humanitarian effort.</span>
</div>

<section class="home-hero">
  <div class="home-hero__inner">
    <div class="home-hero__intro">
      <p class="home-hero__kicker">Open source · 12 languages · since 2005</p>
      <h1 class="home-hero__title">Document your architecture — painlessly.</h1>
      <p class="home-hero__sub">The proven, pragmatic template to <strong>construct, communicate and document</strong> software architecture. Free and open source.</p>
      <p class="home-hero__actions">
        <a class="btn btn--arc42 btn--large" href="/download/"><span aria-hidden="true">&#8595;</span> Download the templates</a>
        <a class="btn btn--arc42-outline btn--large" href="/method/">Explore the method</a>
      </p>
    </div>

    <aside class="quick-dl" aria-label="Quick download">
      <div class="quick-dl__head">
        <span class="quick-dl__title">Quick download</span>
        <span class="quick-dl__langs" role="group" aria-label="Language">
          <button type="button" class="quick-dl__lang is-active" data-lang="EN">EN</button>
          <button type="button" class="quick-dl__lang" data-lang="DE">DE</button>
        </span>
      </div>
      <a class="quick-dl__row" data-fmt="asciidoc" href="{{ PREFIX }}EN-plain-asciidoc.zip">
        <span class="quick-dl__label"><span class="quick-dl__fmt">AsciiDoc</span><span class="quick-dl__meta">recommended</span></span>
        <span class="quick-dl__arrow" aria-hidden="true">&#8595;</span>
      </a>
      <a class="quick-dl__row" data-fmt="docx" href="{{ PREFIX }}EN-plain-docx.zip">
        <span class="quick-dl__label"><span class="quick-dl__fmt">Word (.docx)</span><span class="quick-dl__meta">plain &middot; with help</span></span>
        <span class="quick-dl__arrow" aria-hidden="true">&#8595;</span>
      </a>
      <a class="quick-dl__row" data-fmt="markdown" href="{{ PREFIX }}EN-plain-markdown.zip">
        <span class="quick-dl__label"><span class="quick-dl__fmt">Markdown</span><span class="quick-dl__meta">single &middot; multi-page</span></span>
        <span class="quick-dl__arrow" aria-hidden="true">&#8595;</span>
      </a>
      <a class="quick-dl__all" href="/download/">All 12 formats &#8594;</a>
    </aside>
  </div>
</section>

{% include feature_row id="starter" %}

<div class="training-section" markdown="1">

## Architecture trainings

Learn arc42 and modern software architecture straight from its creators — iSAQB-certified Foundation trainings, on-site and remote. Upcoming dates:

{% include subtle-ads/subtle-ads.html %}

<p class="training-section__actions">
  <a class="btn btn--arc42 btn--large" href="https://trainings.arc42.org" rel="noopener">See all dates &amp; register &#8594;</a>
  <a class="btn btn--arc42-outline btn--large" href="/learn/">Training details</a>
</p>

</div>

## What is arc42?

arc42 is based on practical experience with many systems across domains — information and web systems, real-time and embedded, business intelligence and data warehouses. It gives you a template for the **documentation and communication** of software and system architecture.

- Supports arbitrary technologies and tools — nothing to install.
- Process-agnostic, and especially well-suited to lean and agile teams.
- Open source and free of charge, in commercial and private settings — see the [license](/license/).

There's plenty to read about arc42, too — [browse our books, articles, talks and videos &#8594;](/more/).

<div class="home-news" markdown="1">

## Latest

- The **Hungarian** translation of arc42 is now available — thanks to László Séra!
- Our [merchandising shop](https://arc42.myspreadshop.de) is online: T-shirts, hoodies and other arc42-branded goodies.
- [Software Architecture Foundation](/books#software-architecture-foundation-cpsa-f-exam-preparation) — ideal preparation for the iSAQB certification.
- Even more worked examples in [arc42 by Example, Vol 2 — Embedded Systems &amp; IoT](/books#arc42-by-example-vol2).

</div>

<script>
  (function () {
    var PREFIX = "https://github.com/arc42/arc42-template/raw/master/dist/arc42-template-";
    var panel = document.querySelector('.quick-dl');
    if (!panel) { return; }
    var lang = "EN";
    function apply() {
      panel.querySelectorAll('.quick-dl__row').forEach(function (row) {
        row.setAttribute('href', PREFIX + lang + '-plain-' + row.getAttribute('data-fmt') + '.zip');
      });
      panel.querySelectorAll('.quick-dl__lang').forEach(function (b) {
        b.classList.toggle('is-active', b.getAttribute('data-lang') === lang);
      });
    }
    panel.querySelectorAll('.quick-dl__lang').forEach(function (b) {
      b.addEventListener('click', function () { lang = b.getAttribute('data-lang'); apply(); });
    });
  })();
</script>
