---
title: 20 Years and our Ecosystem
layout: anniversary-blogpost
classes: wide

permalink: /20yrs-ecosystem
header:
  overlay_filter: rgba(108, 148, 139, 0.5)
  overlay_image: /images/blog/20-year-jubilee-header-martin-reisch.webp
  caption: "Photo: [**Martin Reisch/unsplash**](https://unsplash.com/de/fotos/mann-liegt-auf-30-metern-auf-fussballfeld-y6fTK4k2J6c)"


---

February 2025 marks the 20th anniversary of the pragmatic architecture template arc42. 
Reason enough to take a brief look back at its achievements and its ecosystem.

## How it all began
We (Peter and Gernot) have been involved in consulting software development projects for many years. 
Gernot focused primarily on commercial IT and information systems; Peter preferred embedded systems. 
Despite the differences in application domains, we discovered a common pattern: 
Development teams lacked adequate technical documentation for their systems. 
In addition, teams often got lost in _bike-shedding_: their discussions revolved more around tooling and possible structure of such documentation, instead of creating the documentation itself. 

<!-- the fancy, css-based orbital animation -->    
{% include orbit-animation.html %}

### Free and Open-Source
We decided to provide a suitable architecture documentation schema as an open-source product for free and ask the development teams to _focus on their content_ instead of quarrelling about structure or formats. 

That was the birth of arc42. 
In February 2005, we first published the arc42 template in German, and shortly afterwards also in English. 
The requirements schema VOLERE by Peter's colleagues Suzanne and James Robertson served as a model. 
We decided to provide a similar “drawer model” for architects and developers. 

View-based documentation was already established. 
Therefore, the 3 views “building block view, runtime view and deployment view” form the core of the template to describe the key _structural decisions_ of the solution, and the chapter “cross-cutting concepts” contains many of the _technology decisions_ of the solution.
    
<!-- arc42 structure as div -->    
{% include template-structure.html 
   color_scheme="red" 
   view_bg="#ffebeb" %}

<!-- Add the legend separately -->
{% include arc42-legend.html 
   color="#ffebeb" 
   text="Core architectural information" %}

#### The template is strictly process agnostic:

* You can work agile, iterative or in any other mode your organization proposes.
* It does not matter which chapter is filled earlier or later: the “drawers are always available.

#### The template is also tool neutral:

* You can develop your documentation in Markdown, or AsciiDoc, or Word, or a wiki, or in modeling tools.
* You can use every modeling or graphical notation you prefer: UML or SysML? Works nicely with arc42. Or the pragmatic C4 notation? Perfect synergy. Even free-form diagrams fit with arc42.


## Fast forward: arc42 today

In 2023 we released  version 8 of the template. 
Over the years it became even slimmer, because we have removed everything that architects have considered too much burden. 
Since version 5, i.e. since more than 10 years, the structure of the template has remained unchanged.
It now exists in eight other languages in addition to English and German. 
[Downloads](https://arc42.org/download) are available for a dozen file-based formats (Markdown, Asciidoc,docx etc), for Confluence, for Doxygen and for modeling tools such as Enterprise Architect or Rhapsody.
Many of these versions have been provided by our users that wanted another language or another technology (we focus on English and German plus the formats based upon the original AsciiDoc source).


We provide and support architecture trainings in many countries of the world, a lot of these are conducted in English. 
More than 700 people participate each year and learn (among other useful things) to create useful architecture documentation based upon arc42.

That makes several thousand people that we know of. 
Many more surprise us by showing up sooner or later with some questions. 

## The Ecosystem

An ecosystem has developed around the template that offers users assistance in many different areas (of course, everything is open-source and completely free to use, even in commercial settings):

* The extensive [documentation site](https://docs.arc42.org) offers more than 140 practical tips and real examples for the individual template sections.
*	The [FAQ-site](https://faq.arc42.org) answers over 130 frequently asked questions, about the template, architecture methodology, tools, customization and management.

Two of the latest elements of this architecture-centric ecosystem are currently proving particularly popular:

* The open-source catalog of [quality requirements](https://quality.arc42.org) and corresponding terminology collects more than 150 quality properties with concretely formulated quality scenarios. It helps teams to close the (usual) gap in quality requirements, which after all have a significant influence on architecture decisions.
*	The [one-pager (aka: canvas)](https://canvas.arc42.org) supports highly stressed teams: useful architecture documentation on a single page!

In addition to our websites, we have published a lot about arc42 over the last 20 years. 

### The Examples

Since copying from existing solutions is always easier than inventing new ones, we are especially proud about two books focussing on practical examples: 

* arc42 by Example - Vol 1: Examples from the commercial world, XXX
   
* arc42 by Example - Vol 2 with examples from the embedded and IOT world. 

A complete lists of books, articles, videos and more can be found at (arc42.org/more) or (arc42.de/more).

## Where do we go from here…
So, here’s to the next 20 years (and beyond!) of fuss-free, content-first architectural documentation. We’ll keep making arc42 slimmer, friendlier, and every bit as flexible, so that you can focus on the important stuff—like actually building and maintaining great software. We’ll keep championing open-source sharing, busting myths about documentation (yes, it really can be fun!), and surprising folks with new and practical additions to the arc42 family. Thank you for being part of this journey—together, we’ll continue to keep architecture clear, simple, and downright enjoyable!



