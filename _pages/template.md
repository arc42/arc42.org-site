---
title: "The arc42 Template"
layout: splash
permalink: /template/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/arc42-splash-landingpage.jpg
  caption: "Photo credit: [**baranco1**](https://www.flickr.com/photos/59159233@N04/)"
excerpt: "arc42 is a template for architecture communication and documentation."


feature_row1:
  - image_path: /assets/images/template/01-intro-and-goals.png
    alt: "intro-image"
    title: "1. Introduction and Goals"
    excerpt: 'Short description of the **requirements**, driving forces,
extract (or abstract) of requirements. Top three (max five) **quality goals** for the architecture whose
fulfillment is of highest importance to the major stakeholders.
A table of important **stakeholders** with their expectation regarding architecture.'
    url: "http://docs.arc42.org/section-1/"
    btn_label: "Read More"
    btn_class: "btn--inverse"
feature_row2:
  - image_path: /assets/images/unsplash-gallery-image-2-th.jpg
    alt: "constraints-image"
    title: "2. Constraints"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Right aligned with `type="right"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--inverse"
feature_row3:
  - image_path: /assets/images/template/03-context-overview.png
    alt: "context overview"
    title: "3. Context and Scope"
    excerpt: 'System scope and context - as the name suggests - delimits your system
(i.e. your scope) from all its communication partners (neighboring
systems and users, i.e. the context of your system). It thereby
specifies the **external interfaces**.

If necessary, differentiate the business context (domain specific inputs
and outputs) from the technical context (channels, protocols, hardware).'
    url: "#test-link"
---

arc42 answers the following two questions in a pragmatic way, but can be tailored to your specific needs:

* _What_ should we document/communicate about our architecture?
* _How_ should we document/communicate?


{% include feature_row id="feature_row1" type="left" %}

{% include feature_row id="feature_row2" type="right" %}

{% include feature_row id="feature_row3" type="left" %}
