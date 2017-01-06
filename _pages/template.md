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
extract (or abstract) of requirements. Top three (max five) **quality goals** for the architecture which have highest priority for the major stakeholders.
A table of important **stakeholders** with their expectation regarding architecture.'
    url: "http://docs.arc42.org/section-1/"
    btn_label: "Read More"
    btn_class: "btn--inverse"
feature_row2:
  - image_path: /assets/images/template/02-constraints-overview.png
    alt: "constraints-image"
    title: "2. Constraints"
    excerpt: 'Anything that constrains teams in design and implementation decisions or decision about related processes. These constraints sometimes go beyond individual systems and are valid for whole organizations and companies.'
    url: "http://docs.arc42.org/section-2/"
    btn_label: "Read More"
    btn_class: "btn--inverse"    

feature_row3:
  - image_path: /assets/images/template/03-context-overview.png
    alt: "solution strategy overview"
    title: "3. Context and Scope"
    excerpt: ''
    url: "http://docs.arc42.org/section-4/"
    btn_label: "Read More"
    btn_class: "btn--inverse"    


feature_row4:
  - image_path: /assets/images/template/04-solution-strategy-overview.png
    alt: "solution strategy overview"
    title: "4. Solution Strategy"
    excerpt: 'Summary of the fundamental decisions and
    solution strategies that shape the architecture. Can include technology,
    top-level decomposition, approaches to achieve top quality goals
    and relevant organizational decisions.'
    url: "http://docs.arc42.org/section-4/"
    btn_label: "Read More"
    btn_class: "btn--inverse"    


feature_row5:
- image_path: /assets/images/template/05-building-block-overview.png
  alt: "building block view"
  title: "5. Building Block View"
  excerpt: 'Static decomposition of the system, abstractions of source-code, shown as hierarchy of white boxes (containing black boxes), up to the appropriate level of detail.'
  url: "http://docs.arc42.org/section-5/"
  btn_label: "Read More"
  btn_class: "btn--inverse"    

feature_row6:
- image_path: /assets/images/template/06-runtime-overview.png
  alt: "runtime view"
  title: "6. Runtime View"
  excerpt: ''
  url: "http://docs.arc42.org/section-6/"
  btn_label: "Read More"
  btn_class: "btn--inverse"    

feature_row7:
- image_path: /assets/images/template/07-deployment-overview.png
  alt: "deployment view"
  title: "7. Deployment View "
  excerpt: ''
  url: "http://docs.arc42.org/section-7/"
  btn_label: "Read More"
  btn_class: "btn--inverse"    

---

arc42 answers the following two questions in a pragmatic way, but can be tailored to your specific needs:

* _What_ should we document/communicate about our architecture?
* _How_ should we document/communicate?

<hr>

{% include feature_row id="feature_row1" type="left" %}

{% include feature_row id="feature_row2" type="right" %}

{% include feature_row id="feature_row3" type="left" %}

{% include feature_row id="feature_row4" type="right" %}

{% include feature_row id="feature_row5" type="left" %}

{% include feature_row id="feature_row6" type="right" %}

{% include feature_row id="feature_row7" type="left" %}

{% include feature_row id="feature_row8" type="right" %}

{% include feature_row id="feature_row9" type="left" %}

{% include feature_row id="feature_row10" type="right" %}
