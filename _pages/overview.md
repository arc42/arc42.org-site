---
title: "arc42 Template Overview"
layout: splash
permalink: /overview
header:
  overlay_color: "#000"
  overlay_filter: "0.2"
  overlay_image: /images/splash/unsplash-bridge-tom-van-hoogstraten.webp
  caption: "Photo credit: [**unsplash**](https://unsplash.com/@grafish/)"

excerpt: "arc42 is a template for architecture communication and documentation."


feature_row1:
  - image_path: /images/template/01-intro-and-goals.png
    alt: "intro and goals"
    title: "1. Introduction and Goals"
    excerpt: 'Short description of the **requirements**, driving forces,
extract (or abstract) of requirements. Top three (max five) **quality goals** for the architecture which have highest priority for the major stakeholders.
A table of important **stakeholders** with their expectation regarding architecture.'
    url: "https://docs.arc42.org/section-1/"
    btn_label: "Read More"
    btn_class: "btn--inverse"

feature_row2:
  - image_path: /images/template/02-constraints-overview.png
    alt: "constraints"
    title: "2. Constraints"
    excerpt: 'Anything that constrains teams in design and implementation decisions or decision about related processes. Can sometimes go beyond individual systems and are valid for whole organizations and companies.'
    url: "https://docs.arc42.org/section-2/"
    btn_label: "Read More"
    btn_class: "btn--inverse"    

feature_row3:
  - image_path: /images/template/03-context-overview.png
    alt: "scope and context overview"
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
  alt: "architectural decisions"
  title: "9. Architectural Decisions"
  excerpt: 'Important, expensive, critical, large scale or risky architecture decisions
including rationales.'
  url: "https://docs.arc42.org/section-9/"
  btn_label: "Read More"
  btn_class: "btn--inverse"    


feature_row10:
- image_path: /images/template/10-q-scenario-overview.png
  alt: "quality requirements"
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
  excerpt: 'Known technical risks or technical debt. What potential problems exist within or around the system? What does the development team feel miserable about?<br><small>Icon from Flaticon.com</small>'
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

<div class="ua-background" markdown="1">

>### We stand with the people of Ukraine <span class="parent"><span class="ua-text"><i class="fas fa-heart children"></i></span><span class="ua-size children"><i class="fas fa-heart beat heart children"></i></span></span>
>
>Please assist humanitarian efforts for the Ukrainian people and those affected by the military invasion of Ukraine by supporting international aid organizations, including the [International Committee of the Red Cross](https://www.icrc.org/en).

</div>

<hr>


arc42 answers the following two questions in a pragmatic way and can be tailored to your specific needs:

* _What_ should you document/communicate about your architecture?
* _How_ should you document/communicate?






<div class="grid-container arc42-architecture">

  <a href="#introduction-goals" class="part introduction-goals">
    <div class="flex row space-between">
      <div class="flex column">
        <strong>1. Introduction & Goals</strong><br>
        <small>Fundamental requirements, esp. quality goals</small>
      </div>
    </div>
  </a>

  <a href="#constraints" class="part constraints">
    <div class="flex row space-between">
      <div class="flex column">
        <strong>2. Constraints</strong><br>
        <small>Regulations and external constraints</small>
      </div>
    </div>
  </a>

  <a href="#context-scope" class="part context-scope">
    <div class="flex row space-between">
      <div class="flex column">
        <strong>3. Context & Scope</strong><br>
        <small>External systems & interfaces</small>
      </div>
    </div>
  </a>

  <a href="#solution-strategy" class="part solution-strategy">
    <div class="flex row space-between">
      <div class="flex column">
        <strong>4. Solution Strategy</strong><br>
        <small>Core ideas and solution approaches</small>
      </div>
    </div>
  </a>

  <a href="#building-block-view" class="part building-block-view larger-cell">
    <div class="flex row space-between">
      <div class="flex column">
        <strong>5. Building Block View</strong><br>
        <small>Structure of source code, modularization (hierarchical)</small>
      </div>
    </div>
  </a>

  <a href="#runtime-view" class="part runtime-view">
    <div class="flex row space-between">
      <div class="flex column">
        <strong>6. Runtime View</strong><br>
        <small>Important runtime scenarios</small>
      </div>
    </div>
  </a>

  <a href="#deployment-view" class="part deployment-view">
    <div class="flex row space-between">
      <div class="flex column">
        <strong>7. Deployment View</strong><br>
        <small>Hardware, infrastructure & deployment</small>
      </div>
    </div>
  </a>

  <a href="#crosscutting-concepts" class="part crosscutting-concepts larger-cell">
    <div class="flex row space-between">
      <div class="flex column">
        <strong>8. Crosscutting Concepts</strong><br>
        <small>Cross-cutting topics, often very technical and detailed</small>
      </div>
    </div>
  </a>

  <a href="#architectural-decisions" class="part architectural-decisions">
    <div class="flex row space-between">
      <div class="flex column">
        <strong>9. Architectural Decisions</strong><br>
        <small>Important decisions (not described elsewhere)</small>
      </div>
    </div>
  </a>

  <a href="#quality-requirements" class="part quality-requirements">
    <div class="flex row space-between">
      <div class="flex column">
        <strong>10. Quality Requirements</strong><br>
        <small>Quality tree, quality scenarios</small>
      </div>
    </div>
  </a>

  <a href="#risks-technical-debt" class="part risks-technical-debt">
    <div class="flex row space-between">
      <div class="flex column">
        <strong>11. Risks & Technical Debt</strong><br>
        <small>Known problems and risks</small>
      </div>
    </div>
  </a>

  <a href="#glossary" class="part glossary">
    <div class="flex row space-between">
      <div class="flex column">
        <strong>12. Glossary</strong><br>
        <small>Important and specific terms ("ubiquitous language")</small>
      </div>
    </div>
  </a>

</div>








<hr>

# More details

<div id="introduction-goals">
  {% include lazyloading_feature_row id="feature_row1" type="left" %}
</div>

<div id="constraints">
  {% include lazyloading_feature_row id="feature_row2" type="right" %}
</div>

<div id="context-scope">
  {% include lazyloading_feature_row id="feature_row3" type="left" %}
</div>

<div id="solution-strategy">
  {% include lazyloading_feature_row id="feature_row4" type="right" %}
</div>

<div id="building-block-view">
  {% include lazyloading_feature_row id="feature_row5" type="left" %}
</div>

<div id="runtime-view">
  {% include lazyloading_feature_row id="feature_row6" type="right" %}
</div>

<div id="deployment-view">
  {% include lazyloading_feature_row id="feature_row7" type="left" %}
</div>

<div id="crosscutting-concepts">
  {% include lazyloading_feature_row id="feature_row8" type="right" %}
</div>

<div id="architectural-decisions">
  {% include lazyloading_feature_row id="feature_row9" type="left" %}
</div>

<div id="quality-requirements">
  {% include lazyloading_feature_row id="feature_row10" type="right" %}
</div>

<div id="risks-technical-debt">
  {% include lazyloading_feature_row id="feature_row11" type="left" %}
</div>

<div id="glossary">
  {% include lazyloading_feature_row id="feature_row12" type="right" %}
</div>


<hr>

# Further information

Now that you know about the template sections, you can dive deeper. Have a look at our extensive documentation:

* Real-world [examples](/examples)
* FAQ - [Frequently asked questions](https://faq.arc42.org)
* Our extensive [template documentation](https://docs.arc42.org), organized by template section.
* Our (sketchy) [collection of software patterns](https://patterns.arc42.org).
* Our (new) site on our [Quality Model](https://quality.arc42.org), collecting quality properties/attributes.

<a href="/documentation"><button class="button buttonGreen">Show more documentation</button></a>


# Learn more!

{% include subtle-ads/subtle-ads.html %}

<a href="https://arc42.de/schulungen"><button class="margin-top button buttonGreen">Training site</button></a>
