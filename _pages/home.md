---
title: "arc42"
layout: splash
permalink: /
excerpt: "All you need to construct, communicate and document your software architecture. Proven, practical, pragmatic — free and open source."
tagline: "Construct, communicate and document. Proven and pragmatic. **Takes the pain out of documentation**."
ua_strip_top: true
header:
  overlay_color: "#d7ecf8"
  overlay_filter: rgba(15, 80, 180, 0.6)
  # Same photo as the arc42.de hero (Reichstag dome).
  overlay_image: /images/splash/home-hero-reichstag.webp
  # Link previews need JPEG (LinkedIn/WhatsApp render no WebP), and
  # _includes/seo.html reads overlay_image before site.og_image - so keep
  # the previous site-wide preview image explicitly.
  og_image: /images/splash/arc42-splash-landingpage.jpg
  image_description: "arc42 — software architecture documentation"
  kicker: "Open source · %LANGUAGES% languages · since 2005"
  title: "All you ever need for your **software architecture**."
  actions:
    - label: "Overview &#8594;"
      url: /overview/

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
    btn2_url: "https://trainings.arc42.org"
    btn2_label: "Dates"
    btn2_class: "btn--arc42"
  - title: "The method"
    excerpt: "![To-do, doing, done slips of paper](/images/home/method.webp)<br>
    Systematic but flexible — suits large and small teams, agile or not."
    url: "/method/"
    btn_label: "See the method"
    btn_class: "btn--arc42-outline"
---

{% comment %} /dl/ redirects to the latest arc42-template release (netlify.toml) {% endcomment %}
{% assign PREFIX = "/dl/arc42-template-" %}

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
- Even more worked examples in [arc42 by Example, Volume 2: Embedded Systems &amp; IoT](https://leanpub.com/arc42byexample-volume2).

</div>
