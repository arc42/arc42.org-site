---
title: "arc42 Documentation"
layout: splash
permalink: /documentation/
excerpt: "How arc42 is structured and how to work with it — template documentation, practical tips, guides, FAQ, and docs-as-code tooling."
---

<section class="dl-hero">
  <div class="dl-hero__inner">
    <p class="dl-hero__kicker">Guides &middot; practical tips &middot; FAQ</p>
    <h1 class="dl-hero__title">Documentation</h1>
    <p class="dl-hero__sub">Everything about working with arc42 — the structure of the template, more than a hundred practical tips, and answers to frequently asked questions.</p>
  </div>
</section>

## Why arc42? {#why}

Real-life systems have well-written code, motivated teams and productive operations, yet the knowledge about their architecture is locked in a few brains, scattered across the code, or simply lost. Architecture documentation tends to fail in four familiar ways:

* **Not existing, or outdated** — a historical artifact nobody trusts or maintains.
* **Chaotic** — created without a clear purpose, by various people, without coordination.
* **Too much** — piles of documents in which nobody can *find* or *update* anything.
* **Painful** — formalities, wrong tools, unclear instructions; not why people became developers.

arc42 gives every kind of architecture information a clear place, twelve well-defined sections optimized for understandability and adequacy. That fixes *chaotic* and *too much*, and it makes documentation **painless**: you only describe what stakeholders really need, only explain what is necessary to understand the system, and only record the decisions you had to make anyway. Low-effort documentation is documentation that stays up to date, which takes care of *outdated*, too.

## The template structure

![drawers of a cabinet](/images/cabinet-sanwal-deen-300px.jpg){: .align-left}
Think of the arc42 sections as the *drawers* of a cabinet: twelve of them, each specialized to hold one specific kind of information about the architecture of a system. arc42 is optimized for understandability and adequacy, and supports your style of working, your domain and your technology — in agile, lean or formal projects.

* The [one-minute overview](/overview/) shows all twelve sections on a single page.
* [docs.arc42.org](https://docs.arc42.org) documents every section in detail — purpose, contents, practical tips, and many examples.
* Need something lighter? A [canvas](/canvas/) captures a whole system on a single page.

## Guides &amp; FAQ

* The [FAQ](https://faq.arc42.org) answers hundreds of questions on methodical approaches, template sections, agility and tools.
* The [quality model](https://quality.arc42.org) collects quality properties and attributes, and our [pattern collection](https://patterns.arc42.org) covers recurring software patterns.

## Docs-as-Code

arc42 works particularly well as *docs-as-code*: treat your architecture documentation like source code.

* Get the template in [AsciiDoc or Markdown](/download/) — plain-text formats that diff cleanly.
* Keep it in git, right next to your code, and review changes through pull requests.
* Build and publish it with [docToolchain](https://doctoolchain.org), an open-source toolchain with first-class arc42 support — or with any static-site generator of your choice.

## Get the template

<a href="/download/" class="btn btn--arc42"><span aria-hidden="true">&#8595;</span> Download arc42</a>

<div class="training-section" markdown="1">

## Learn arc42 in a training

We teach arc42 and modern software architecture in iSAQB-certified Foundation trainings — on-site and remote. Upcoming dates:

{% include subtle-ads/subtle-ads.html %}

<p class="training-section__actions">
  <a class="btn btn--arc42" href="https://trainings.arc42.org" rel="noopener">See all dates &amp; register &#8594;</a>
  <a class="btn btn--arc42-outline" href="/learn/">Training details</a>
</p>

</div>
