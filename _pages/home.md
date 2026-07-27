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
      <h1 class="home-hero__title">All you ever need for your <strong>software architecture</strong>.</h1>
      <p class="home-hero__sub">Construct, communicate and document. Proven and pragmatic. <strong>Takes the pain out of documentation</strong>.</p>
      <p class="home-hero__actions">
        <a class="btn btn--arc42 btn--large" href="/overview/">Overview &#8594;</a>
      </p>
    </div>
  </div>
</section>

<div class="dl-strip">
  <div class="dl-strip__inner">
    <span class="dl-strip__label">Quick download, English:</span>
    <a class="dl-strip__fmt" href="{{ PREFIX }}EN-plain-asciidoc.zip">AsciiDoc</a>
    <a class="dl-strip__fmt" href="{{ PREFIX }}EN-plain-markdown.zip">Markdown</a>
    <a class="dl-strip__fmt" href="{{ PREFIX }}EN-plain-docx.zip">Word (.docx)</a>
    <a class="dl-strip__all" href="/download/">All languages and formats &#8594;</a>
  </div>
</div>

{% include feature_row id="starter" %}

## What is arc42?

arc42 is based on practical experience with many systems across domains — information and web systems, real-time and embedded, business intelligence and data warehouses. It gives you a template for the **documentation and communication** of software and system architecture.

- Supports arbitrary technologies and tools — nothing to install.
- Process-agnostic, and especially well-suited to lean and agile teams.
- Open source and free of charge, in commercial and private settings — see the [license](/license/).

There is plenty to learn from, too: [browse our books, articles, talks and videos &#8594;](/resources/).

<div class="training-section" markdown="1">

## Architecture trainings

Learn arc42 and modern software architecture straight from its creators — iSAQB-certified Foundation trainings, on-site and remote. Upcoming dates:

{% include subtle-ads/subtle-ads.html %}

<p class="training-section__actions">
  <a class="btn btn--arc42" href="https://trainings.arc42.org" rel="noopener">See all dates &amp; register &#8594;</a>
  <a class="btn btn--arc42-outline" href="/learn/">Training details</a>
</p>

</div>

<div class="home-news" markdown="1">

## Latest

- The **Hungarian** translation of arc42 is now available — thanks to László Séra!
- Our [merchandising shop](https://arc42.myspreadshop.de) is online: T-shirts, hoodies and other arc42-branded goodies.
- [Software Architecture Foundation](/resources/?type=book) is ideal preparation for the iSAQB certification.
- Even more worked examples in [arc42 by Example, Volume 2: Embedded Systems &amp; IoT](/resources/?type=book#arc42-by-example-vol2).

</div>
