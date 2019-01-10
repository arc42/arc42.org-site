---
title: "arc42 Template Overview"
layout: splash
permalink: /overview/
header:
  overlay_color: "#000"
  overlay_filter: "0.2"
  overlay_image: /images/splash/unsplash-bridge-tom-van-hoogstraten.jpg
  caption: "Photo credit: [**unsplash**](https://unsplash.com/@grafish/)"
excerpt: "arc42 is a template for architecture communication and documentation."


feature_row1:
  - image_path: /images/template/01-intro-and-goals.png
    alt: "intro-image"
    title: "1. Introduction and Goals"
    excerpt: 'Short description of the **requirements**, driving forces,
extract (or abstract) of requirements. Top three (max five) **quality goals** for the architecture which have highest priority for the major stakeholders.
A table of important **stakeholders** with their expectation regarding architecture.'
    url: "https://docs.arc42.org/section-1/"
    btn_label: "Read More"
    btn_class: "btn--inverse"

feature_row2:
  - image_path: /images/template/02-constraints-overview.png
    alt: "constraints-image"
    title: "2. Constraints"
    excerpt: 'Anything that constrains teams in design and implementation decisions or decision about related processes. Can sometimes go beyond individual systems and are valid for whole organizations and companies.'
    url: "https://docs.arc42.org/section-2/"
    btn_label: "Read More"
    btn_class: "btn--inverse"    

feature_row3:
  - image_path: /images/template/03-context-overview.png
    alt: "solution strategy overview"
    title: "3. Context and Scope"
    excerpt: 'Delimits your system from its (external) communication partners (neighboring systems and users). Specifies the external interfaces. Shown from a business/domain perspective (always) or a technical perspective (optional)'
    url: "https://docs.arc42.org/section-3/"
    btn_label: "Read More"
    btn_class: "btn--inverse"    


feature_row4:
  - image_path: /images/template/04-solution-strategy-overview.svg
    alt: "solution strategy overview"
    title: "4. Solution Strategy"
    excerpt: 'Summary of the fundamental decisions and
    solution strategies that shape the architecture. Can include technology,
    top-level decomposition, approaches to achieve top quality goals
    and relevant organizational decisions.'
    url: "https://docs.arc42.org/section-4/"
    btn_label: "Read More"
    btn_class: "btn--inverse"    


feature_row5:
- image_path: /images/template/05-building-block-overview.png
  alt: "building block view"
  title: "5. Building Block View"
  excerpt: 'Static decomposition of the system, abstractions of source-code, shown as hierarchy of white boxes (containing black boxes), up to the appropriate level of detail.'
  url: "https://docs.arc42.org/section-5/"
  btn_label: "Read More"
  btn_class: "btn--inverse"    

feature_row6:
- image_path: /images/template/06-runtime-overview.png
  alt: "runtime view"
  title: "6. Runtime View"
  excerpt: 'Behavior of building blocks as scenarios, covering important use cases or features, interactions at critical external interfaces, operation and administration plus error and exception behavior.'
  url: "https://docs.arc42.org/section-6/"
  btn_label: "Read More"
  btn_class: "btn--inverse"    

feature_row7:
- image_path: /images/template/07-deployment-overview.png
  alt: "deployment view"
  title: "7. Deployment View "
  excerpt: 'Technical infrastructure with environments, computers, processors, topologies. Mapping of (software) building blocks to infrastructure elements.'
  url: "https://docs.arc42.org/section-7/"
  btn_label: "Read More"
  btn_class: "btn--inverse"    

feature_row8:
- image_path: /images/template/08-concepts-overview.png
  alt: "crosscutting concepts"
  title: "8. Crosscutting Concepts"
  excerpt: 'Overall, principal regulations and solution approaches relevant in multiple parts (→ cross-cutting) of the system. Concepts are often related to **multiple building blocks**. Include different topics like domain models,  architecture patterns and -styles, rules for using specific technology and implementation rules.'
  url: "https://docs.arc42.org/section-8/"
  btn_label: "Read More"
  btn_class: "btn--inverse"    

feature_row9:
- image_path: /images/template/09-decision-overview.png
  alt: "risks and technical decisions"
  title: "9. Architectural Decisions"
  excerpt: 'Important, expensive, critical, large scale or risky architecture decisions
including rationales.'
  url: "https://docs.arc42.org/section-9/"
  btn_label: "Read More"
  btn_class: "btn--inverse"    


feature_row10:
- image_path: /images/template/10-q-scenario-overview.png
  alt: "quality"
  title: "10. Quality Requirements"
  excerpt: 'Quality requirements as scenarios, with quality tree to provide high-level overview. The most important quality goals should have been described in
section 1.2. (quality goals).'
  url: "https://docs.arc42.org/section-10/"
  btn_label: "Read More"
  btn_class: "btn--inverse"    

feature_row11:
- image_path: /images/template/11-risk-overview.png
  alt: "risk"
  title: "11. Risks and Technical Debt"
  excerpt: 'Known technical risks or technical debt. What potential problems exist within or around the system? What does the development team feel miserable about?'
  url: "https://docs.arc42.org/section-11/"
  btn_label: "Read More"
  btn_class: "btn--danger"    

feature_row12:
- image_path: /images/template/12-glossary-overview.png
  alt: "glossary"
  title: "12. Glossary"
  excerpt: 'Important domain and technical terms that stakeholders use when discussing the system. Also: translation reference if you work in a multi-language environment.'
  url: "https://docs.arc42.org/section-12/"
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

{% include feature_row id="feature_row11" type="left" %}

{% include feature_row id="feature_row12" type="right" %}

<hr>

# Further information

Now that you know about the template sections, you can dive deeper. Have a look at our extensive documentation:

* Real-world [examples](/examples)
* FAQ - [Frequently asked questions](https://faq.arc42.org)
* Our extensive [template documentation](https://docs.arc42.org), organized by template section.
* Our (sketchy) [collection of software patterns](http://patterns.arc42.org).

<a href="/documentation" class="btn btn--success">show more documentation.</a>


# Learn more!

{% include subtle-ads/subtle-ads.html %}

<a href="https://arc42.de" class="btn btn--success">Training site</a>
