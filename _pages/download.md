---
title: "Download arc42"
layout: single
permalink: /download
classes: wide

header:
  overlay_filter: linear-gradient(rgba(255, 0, 0, 0.7), rgba(0, 0, 255, 0.7))
  overlay_image: /images/splash/download-landingpage.webp
  caption: "Photo credit: [**Ellery Sterling**](https://unsplash.com/photos/dPu5FIT1bGU)"



excerpt: "Version 8 - the most practical and effective arc42 ever."
intro:
  - excerpt: "Version 8.2.1, released October 2024."

---

<div class="ua-background" markdown="1">

>### We stand with the people of Ukraine <span class="parent"><span class="ua-text"><i class="fas fa-heart children"></i></span><span class="ua-size children"><i class="fas fa-heart beat heart children"></i></span></span>
>
>Please assist humanitarian efforts for the Ukrainian people and those affected by the military invasion of Ukraine by supporting international aid organizations, including the [International Committee of the Red Cross](https://www.icrc.org/en).

</div>

<hr>


<aside class="sidebar__right ">
            <nav class="toc">
              <header><h4 class="nav__title"><i class="fas fa-file-alt"></i> On this page</h4></header>
              <ul class="toc__menu"><li><a href="#file-based-formats">File-based formats</a></li><li><a href="#confluence-format">Confluence format</a><ul><li><a href="#legacy-version-arc42-v6-for-confluence">Legacy Version (arc42 v6) for Confluence</a></li></ul></li><li><a href="#doxygen-format">Doxygen format</a></li><li><a href="#enterprise-architect-format">Enterprise Architect© format</a></li><li><a href="#ibm-rhapsody-format">IBM Rhapsody© format</a></li><li><a href="#formats-for-other-modeling-tools">Formats for other modeling tools</a></li><li><a href="#format-overview">Format overview</a></li><li><a href="#learn-more">Learn more!</a></li></ul>

            </nav>
          </aside>


Version 8, released February 2022, UA version August 2022, CZ version October 2022, FR version June 2023, PT version October 2024.

{: .notice}
Nous sommes heureux d'annoncer la disponibilité de la version française d'arc42 - merci beaucoup à Damien Lucas. Bon travail!

{: .notice}
We are so happy to announce the availability of the Czech version of arc42 - thanx to Jakub RC. You rock!

{: .notice}
We are incredibly happy to announce the availability of the Ukrainian version of arc42 - thanx to Ivan Bulyk and support from [Larysa Visengeriyeva](https://twitter.com/visenger).

{: .notice}
Thanx to Guilherme Weizenmann for the Portugese translation, and the constructive review by Pedro Mattiollo. Você é incrível!



On this page you find all available arc42 template downloads,
various [formats]({{page.url}}#format-overview) for various tools. For an overview of these formats, see [below]({{page.url}}#format-overview).

{% assign GITHUBDIR = "https://github.com/arc42/arc42-template/raw/master/dist/" %}
{% assign PREFIX = "https://github.com/arc42/arc42-template/raw/master/dist/arc42-template-" %}

# File-based formats

These formats are generated based upon their AsciiDoc sources from the [Github repository](https://github.com/arc42/arc42-template).

{% assign formats = "docx|asciidoc|markdown|markdownMP|markdownStrict|markdownMPStrict|gitHubMarkdown|gitHubMarkdownMP|latex|html|rst|textile" | split: "|"  %}  
{% assign types = "plain|withhelp" | split: "|"  %}  

| Format | Language | Plain <br> (without explanation) | With Help <br>(contains explanations for every section) |
|--------|----------|-------|-----------| 
{% for format in formats %}| {{ format }} | EN | {% for type in types %} [.zip]({{PREFIX}}EN-{{type}}-{{format}}.zip) |{% endfor %}
|  | CZ | {% for type in types %} [.zip]({{PREFIX}}CZ-{{type}}-{{format}}.zip) |{% endfor %}
|  | DE | {% for type in types %} [.zip]({{PREFIX}}DE-{{type}}-{{format}}.zip) |{% endfor %}
|  | ES | {% for type in types %} [.zip]({{PREFIX}}ES-{{type}}-{{format}}.zip) |{% endfor %}
|  | IT | {% for type in types %} [.zip]({{PREFIX}}IT-{{type}}-{{format}}.zip) |{% endfor %}
|  | FR | {% for type in types %} [.zip]({{PREFIX}}FR-{{type}}-{{format}}.zip) |{% endfor %}
|  | NL | {% for type in types %} [.zip]({{PREFIX}}NL-{{type}}-{{format}}.zip) |{% endfor %}
|  | PT | {% for type in types %} [.zip]({{PREFIX}}PT-{{type}}-{{format}}.zip) |{% endfor %}
|  | RU | {% for type in types %} [.zip]({{PREFIX}}RU-{{type}}-{{format}}.zip) |{% endfor %}
|  | UA | {% for type in types %} [.zip]({{PREFIX}}UA-{{type}}-{{format}}.zip) |{% endfor %}
{% endfor %}

# Confluence format
Confluence versions are generated _with help_ and come in
two flavors:

* flat: all sections on a single page
* structured: one Confluence page per arc42-section


| Language | flat | structured |
|----------|------|------------|
| DE | [.zip]({{PREFIX}}DE-withhelp-confluenceFlat.zip) | [.zip]({{PREFIX}}DE-withhelp-confluenceStructured.zip) |
| EN | [.zip]({{PREFIX}}EN-withhelp-confluenceFlat.zip) | [.zip]({{PREFIX}}EN-withhelp-confluenceStructured.zip) |


Unfortunately, we cannot generate for the latest versions confluence.
It is based upon an older version of the template - due to technical difficulties in generating confluence from asciidoc.


**Notes for Confluence users**

* We stopped operating a public confluence instance.

* If you consider to use confluence, the [asciidoc2confluence](https://github.com/rdmueller/asciidoc2confluence) script might be helpful.

* There is also a [confluence plugin available from the atlassian market place](https://marketplace.atlassian.com/plugins/com.networkedassets.plugins.space-blueprint/server/overview).

## Legacy Version (arc42 v6) for Confluence  

If you still use confluence version 4 or 5, these legacy downloads might help you

| Confluence version | Language  | With Help |
|--------|-----------|-----------|
|5.x | EN |  [.zip]({{GITHUBDIR}}legacy/templateEN-V6-confluence-53.xml.zip)|
|>4.3 | EN | [.zip]({{GITHUBDIR}}legacy/templateEN-V6-confluence-43.xml.zip)|
|5.x | DE | [.zip]({{GITHUBDIR}}legacy/templateDE-V6-confluence-53.xml.zip)|
|>4.3 | DE | [.zip]({{GITHUBDIR}}legacy/templateDE-V6-confluence-43.xml.zip) |

These legacy versions have been provided (thanx!) by arc42 users - and can
not be supported by us (as we don't have access to these legacy Confluence versions).
{: .small}

# Doxygen format

>Doxygen is the de facto standard tool for generating documentation from annotated C++ sources, but it also supports other popular programming languages such as C, Objective-C, C#, PHP, Java, Python, IDL (Corba, Microsoft, and UNO/OpenOffice flavors), Fortran, and to some extent D. 
>Doxygen also supports the hardware description language VHDL.
>
>[doxygen.nl](https://www.doxygen.nl/)

| doxygen |
|--------------------------|
| doxygen arc42 template: [arc42_doxygen_template.zip]({{GITHUBDIR}}doxygen/arc42_doxygen_template.zip)|


This template is available in EN only. Contributed by Stephan Lessing, February 2023.

# Enterprise Architect&copy; format
Enterprise Architect;copy; is a commercial UML modeling tool by [SparxSystems](https://sparxsystems.com/).
Updated versions contributed by [Raphael Dumhart](https://github.com/raphael-dumhart), May 2024.

This template includes the complete arc42 structure, based on version 8.2 from January 2023. 
It uses only functions from the Professional Edition to support all editions of Enterprise Architect. 
The template implementation uses UML diagrams and text documents, where diagrams are not suitable. 
Some parts, like the glossary and risks use extended UML.

## Note on Enterprise Architect Versions
The template is provided in a QEA and EAPX file format. QEA was introduced in EA 16 and is based on SQlite3. EAPX is the older default file format, which uses JET 4 as the repository database. 
This format should be supported with EA 15 and below. 

If you are using a version earlier than EA 14, you want to rename the EAPX extension to EAP. 
Pre EA 14 you could use JET 3.5 or JET 4 in EAP files. 
In version 14, this was made explicit by introducing EPAX for JET 4 and using EAP for JET 3.5.

If you only want to view a model, have a look at EA Lite edition, which is offered free of charge and can be downloaded [here](https://www.sparxsystems.eu/enterprise-architect/ea-lite-edition)

## How to use

1. Download the QAE or EAPX file in the language of your choice (DE or EN).
2. Copy the template to your target location and rename it.
3. Optional (see "Note on Enterprise Architect Version): Rename the file extension from EAPX to EAP.
4. Open the file.
5. Edit all the files according to your needs. You will find the official arc42 explanation provided as notes directly in the corresponding diagrams. Where needed, I added some additional help.
6. You can delete the "Info" package if you want. It only contains meta information to the arc42 template.


| Enterprise Architect EAP |
|--------------------------|
| EA template: [arc42 V8 (DE) with help, eapx-Version (EA V. <16.x)]({{GITHUBDIR}}eap/arc42-template-DE-withhelp-ea.eapx)|
| EA template: [arc42 V8 (DE) with help, qea-Version (EA V. >=16.x)]({{GITHUBDIR}}eap/arc42-template-DE-withhelp-ea.qea)|
| EA template: [arc42 V8 (EN) with help, eapx-Version (EA V. <16.x)]({{GITHUBDIR}}eap/arc42-template-EN-withhelp-ea.eapx)|
| EA template: [arc42 V8 (EN) with help, qea-Version (EA V. >=16.x)]({{GITHUBDIR}}eap/arc42-template-EN-withhelp-ea.qea)|
| EA template (outdated and short version v6): [arc42-V6-short.eap.zip]({{GITHUBDIR}}eap/arc42-V6-short.eap.zip)|


# IBM Rhapsody&copy; format
[Rhapsody](https://www-03.ibm.com/software/products/en/ratirhap)&copy;
is a commercial modeling tool by IBM, primarily suited
for embedded systems.

The Rhapsody version of arc42 contains the complete parts of the arc42 structure with minimum help text. 
It’s available in EN only. 
This rhapsody arc42 profile includes the complete arc42 structure within Rhapsody using UML/SysML.

This version has been created and tested with Rhapsody version 8.2.1.

It contains following items in the zip archive:

1.	rhapsody_arc42_profile Rhapsody project. In this Rhapsody project following model is contained:
    *	rhapsody_arc42_profile which comprises of stereotypes required for establishing arc42 structure
    *	place holder to start adding your project

2.	rhapsody_arc42_report_generation folder for Report generation which contains IBM RPE template required to generate Report out of the Rhapsody model.

3.	rhapsody_example_arc42_for_arc42 example Rhapsody project called. In this Rhapsody project following model is incorporated
    *	example_arc42_for_arc42 a small example where all the chapters are explained on why arc42 with arc42 structure
    *	usage of rhapsody_arc42_profile within

4.	rhapsody_arc42_getting_started_guide.docx which explains the usage of rhapsody arc42 profile



We appreciate the contribution of user `@nrnjnsk83` (Niranjan SK, Robert Bosch GmbH), who produced and contributed the Rhapsody version for arc42!
{: .small}

| IBM Rhapsody arc42 Template |
|--------------------------|
| [arc42-v1-rhapsody.zip]({{GITHUBDIR}}rhapsody/arc42-v1-rhapsody.zip)|



# Formats for other modeling tools
We currently don't support additional modeling tools - but would love to...
In case you use arc42 with such a tool, please think about contributing :-)

Please [contact us!](/contact)



# Format overview

**docx**
: Microsoft Word, usable with LibreOffice or OpenOffice

**asciidoc**
: Powerful yet simple markup language, used by arc42 itself. Ideally suited for architecture documentation. See
[docToolchain](https://rdmueller.github.io/docToolchain/) or the [original source](https://asciidoctor.org/docs/asciidoc-syntax-quick-reference/).

**markdown**
: Widespread and simple markup language, [documented here](https://daringfireball.net/projects/markdown/syntax) by its inventor.

**markdown (strict)**
: A restricted markup, [documented here](https://daringfireball.net/projects/markdown/syntax) by its inventor.

**markdownMP**
: Same format as **markdown** above but every chapter is located in its own file.

**gitHubMarkdown**
: GitHub Flavored Markdown is a dialect of Markdown that is used on GitHub.com and GitHub Enterprise. See the [article here](https://docs.github.com/en/get-started/writing-on-github) .

**gitHubMarkdownMP**
: Same format as **gitHubMarkdown** above but every chapter is located in its own file.

**latex**
: No, not the rubber stuff, but the mother (despite TeX)
of all markup languages, a full-blown [document preparation system](https://www.latex-project.org/). For those who need beauty and are willing
to invest some effort...

**rst**
: [ReStructuredText](https://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html),  markup language, heavily used by [ReadTheDocs](https://readthedocs.org/) and in the Python world.

**textile**
: Another simple markup language, documented on [textile-lang.com](https://textile-lang.com/)/). 

**html**
: Used only to _view_ the template, not to work with it.

**Confluence**
: A commercial wiki system (by [Atlassian Inc.](https://confluence.atlassian.com/alldoc/atlassian-documentation-32243719.html)).



# Learn more!


{% include subtle-ads/subtle-ads.html %}

<a href="https://arc42.de/schulungen"><button class="margin-top button buttonGreen">Training site</button></a>
