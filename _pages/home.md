---
title: "arc42"
layout: splash
permalink: /home/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/arc42-splash-landingpage.jpg
  cta_label: "Download"
  cta_url: "https://github.com/mmistakes/minimal-mistakes/"
  caption: "Photo credit: [**baranco1**](https://www.flickr.com/photos/59159233@N04/)"
excerpt: "All you ever need to construct, **communicate and document your software architecture**. Proven, **practical and pragmatic**.
Free and open source, **takes the pain out of documentation**."
intro:
  - excerpt: "&bull; ensures better software architectures.<br>
    	&bull; based on practical experience of many systems.<br>
      &bull;proven template for documentation and communication. <br>
      &bull;supports arbitrary technologies and tools."
feature_row:
  - title: "Communicate"
    image_path: assets/images/communicate-icon.svg
    alt: "communicate-icon"
    excerpt: "Effectively communicate architectures. Pragmatic views and crosscutting concepts, compatible to IEEE 1471."
    url: "#communicate"
    btn_label: "Read More"
    btn_class: "btn--inverse"

  - image_path: assets/images/develop-icon.svg
    alt: "develop-icon"
    title: "Develop"
    excerpt: "Build better systems. High quality, lean and lightweight."
    url: "#develop"
    btn_label: "Read More"
    btn_class: "btn--inverse"

  - image_path: assets/images/workshop-icon.svg
    alt: "workshop-icon"
    title: "Learn"
    excerpt: "We've successfully trained hundreds of developers in our
    **Mastering Software Architectures** workshops. Highly practical.
    iSAQB Certification."
    url: "#learn"
    btn_label: "Read More"
    btn_class: "btn--inverse"

feature_row2:
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Left Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Left aligned with `type="left"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--inverse"
feature_row3:
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Right Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Right aligned with `type="right"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--inverse"
feature_row4:
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Center Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Centered with `type="center"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--inverse"
---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}

{% include feature_row id="feature_row2" type="left" %}

{% include feature_row id="feature_row3" type="right" %}

{% include feature_row id="feature_row4" type="center" %}
