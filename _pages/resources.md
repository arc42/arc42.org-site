---
title: "Resources"
layout: splash
permalink: /resources/
excerpt: "Books, articles, talks and videos from the people behind arc42, collected in one searchable library."
---

<section class="dl-hero resource-hero">
  <div class="dl-hero__inner">
    <p class="dl-hero__kicker">Books &middot; articles &middot; talks &middot; videos</p>
    <h1 class="dl-hero__title">Resources</h1>
    <p class="dl-hero__sub">A compact library of what we have written, presented and recorded about arc42 and software architecture. Browse the whole collection, or filter it to your favorite format.</p>
  </div>
</section>

{% assign dated = site.resources | where_exp: "r", "r.year" | sort: "year" | reverse %}
{% assign undated = site.resources | where_exp: "r", "r.year == nil" %}
{% assign resources = dated | concat: undated %}
{% assign books = site.resources | where: "type", "book" | size %}
{% assign articles = site.resources | where: "type", "article" | size %}
{% assign talks = site.resources | where: "type", "talk" | size %}
{% assign videos = site.resources | where: "type", "video" | size %}

<div class="resource-browser" data-resource-browser>
  <div class="resource-controls" aria-label="Filter resources">
    <fieldset class="resource-types">
      <legend>Type</legend>
      <div class="resource-types__options">
        <button type="button" class="resource-filter is-active" data-resource-type="all" aria-pressed="true">All <span data-type-count="all">{{ site.resources | size }}</span></button>
        <button type="button" class="resource-filter" data-resource-type="book" aria-pressed="false">Books <span data-type-count="book">{{ books }}</span></button>
        <button type="button" class="resource-filter" data-resource-type="article" aria-pressed="false">Articles <span data-type-count="article">{{ articles }}</span></button>
        <button type="button" class="resource-filter" data-resource-type="talk" aria-pressed="false">Talks <span data-type-count="talk">{{ talks }}</span></button>
        <button type="button" class="resource-filter" data-resource-type="video" aria-pressed="false">Videos <span data-type-count="video">{{ videos }}</span></button>
      </div>
    </fieldset>

    <div class="resource-controls__secondary">
      <label class="resource-field">
        <span>Language</span>
        <select data-resource-language>
          <option value="all">All languages</option>
          <option value="en">English</option>
          <option value="de">German</option>
        </select>
      </label>
      <label class="resource-field resource-field--search">
        <span>Search</span>
        <input type="search" data-resource-search placeholder="Title, author or topic" autocomplete="off">
      </label>
      <button type="button" class="resource-reset" data-resource-reset>Reset</button>
    </div>
  </div>

  <div class="resource-summary" aria-live="polite">
    <p><strong data-resource-count>{{ site.resources | size }} resources</strong><span data-resource-context> across all types</span></p>
  </div>

  <div class="resource-list" data-resource-list>
    {% for resource in resources %}{% include resource-item.html resource=resource %}
    {% endfor %}
  </div>

  <div class="resource-empty" data-resource-empty hidden>
    <h2>No matching resources</h2>
    <p>Try another type, language or search term.</p>
    <button type="button" class="btn btn--arc42-outline" data-resource-reset>Reset filters</button>
  </div>
</div>

<div class="resource-footnote">
  <p><strong>Looking for more recordings?</strong> Visit the <a href="https://youtube.com/arc42-video" rel="noopener">arc42 YouTube channel</a> or <a href="https://speakerdeck.com/gernotstarke" rel="noopener">Gernot's Speaker Deck profile</a>.</p>
</div>

<script src="/assets/js/resources-filter.js" defer></script>
