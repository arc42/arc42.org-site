---
title: Principles of technical documentation
layout: single


toc: right
toc_label: "Content"

permalink: /principles-of-technical-documentation
header:
  overlay_filter: rgba(15, 80, 180, 0.5)
  overlay_image: /images/principles-of-tech-doc/header-retrosupply-jLwVAUtLOAQ-unsplash.jpg
  caption: "Photo: [**Retrosupply**](https://unsplash.com/photos/jLwVAUtLOAQ)"


---

## TL;DR
The content of technical documentation needs to be correct, current, understandable and relevant.
It needs to be maintainable, referenceable and use proper language.
Furthermore, the whole documentation and its content need to be easy to find.
To create and maintain such documentation, you should put everything under version control, prefer established tools and automate certain parts.
Finally, you should document incrementally and continuously - and _not_ defer documentation to a _later stage of development_.

To help you achieve these goals, the article summarizes more than 30 simple practices that will facilitate your documentation task. 


### 0. Introduction

During several years of consulting work, I have noticed that different development teams across organizations in various domains repeated the same documentation mistakes over and over again.
Therefore I decided to summarize some fundamental _requirements_ for technical documentation 

>I deliberately mention modeling and diagramming only briefly as these will be subject of another post.

#### A counterexample
Imagine you are planning a trip to Scotland with your family.
You want to visit the famous castles and legendary landscapes, and walk in the footsteps of the brave Scottish knights.

To best prepare for this wonderful trip, you visit your local bookstore and ask for a suitable guidebook. 
The clerk proposes the "Adventure Travel Guide to Scotland".

![Fig 0.1: Your map of Scotland]({{ site.imageurl }}/principles-of-tech-doc/fig-0-1-La_Feuille_Map_of_Scotland-Geographicus.jpg)


Back home, you treat yourself to a decent cup of tea, recline in your favorite chair and start reading. After a couple of pages, you start to wonder if you got the right book (aka documentation):

* To your disappointment the documentation is not useful, as the authors start in Scotland, but quickly deviate to a lengthy coverage of the Spanish island of Fuerteventura
* Next thing, parts of the documentation seem quite outdated to you. The only map you can find in your new book, despite being visually appealing, was printed[^1] in 1747, more than 250 years ago (see Fig 0.1). Where the heck are the airports and highways?
* It contains some serious mistakes - the city of Edinburgh is misspelled _Edembourg_[^2]

[^1]: Map from Wikimedia Commons, provided to Wikimedia by Geographicus Rare Antique Maps, a specialist dealer in rare maps and other cartography. It was first drawn by Daniel de la Feuille in 1706.

[^2]: Edembourg actually _was_ the correct spelling back in the 18th century... 

Hopefully, your technical documentation better fits its title and is less than 250 years behind the current "version" of the system.
But maybe you get the analogy: Documentation should be there to help, not hinder.


#### Overview of documentation requirements


Let's start with an overview of documentation requirements, so you know what to expect.
The main part of this article covers both requirements and solution approaches in detail.

![Fig. 0.2 Categories of documentation requirements]({{ site.imageurl }}/principles-of-tech-doc/fig-0-2-categories-of-requirements.png)

The most important of these categories cover the _content_ of documentation:

| Requirement | Explanation |
|:------|:------------|
| [Req-1: Correct](#sect-correct)    | Documentation needs to be accurate and free from errors. Wrong documentation is often worse than no documentation. |
| [Req-2: Current](#sect-current)     | Documentation needs to be correct over time, reflecting changes performed upon code, infrastructure or interfaces of the system.  |
| [Req-3: Understandable](#sect-understandable) | Documentation needs to be understood by the target audience.  | 
| [Req-4: Relevant](#sect-relevant) | With respect to structure, form and content, documentation shall be relevant for the tasks of its audience. |

A few of these requirements are covered in the fundamental book[^hargisDevelopingQualityTechnical2004].

![Fig. 0.3 Content requirements]({{ site.imageurl }}/principles-of-tech-doc/fig-0-3-content-requirements.png)

In addition, you should consider a few _formal_ requirements, independent of documentation content:

| Requirement | Explanation |
|:------|:------------|
| [Req-5: Referenceable](#sect-referenceable) | Use a consistent numbering schema for headings, diagrams and tables. |
| [Req-6: Proper language](#sect-proper-language)  | Use proper language, correct spelling and grammar, active voice, positive statements and short sentences. | 
| [Req-7: Maintainable](#sect-maintainable) | Maintainability is key to keeping documentation current. |


![Fig. 0.4 Formal and content requirements]({{ site.imageurl }}/principles-of-tech-doc/fig-0-4-formal-requirements.png)

Finally, a few requirements concern your documentation process and tooling:

| Requirement | Explanation |
|:------|:------------|
| [Req-8: Easy to find](#sect-easy-to-find) | Documentation itself should be easy to find whenever needed. Its content should be easily navigable and searchable.  |
| [Req-9: Version controlled](#sect-version-controlled) | As the system evolves, so will your documentation, without losing its history  |
| [Req-10: Appropriate tools](#sect-tools) | Focus on content, reduce time needed for tool-setup |
| [Req-11: Continuously updated](#sect-continuously) | Make it a habit to maintain and expand the documentation with every relevant change in your system. |

That leaves us with the following overview of documentation requirements:

![Fig. 0.5 All documentation requirements]({{ site.imageurl }}/principles-of-tech-doc/fig-0-5-all-requirements.png)

In the upcoming sections I will consider these requirements one-by-one.
You will find several tips and proposals on how to achieve them.


<h3 id="sect-correct">Req-1: Correct</h3>

> Technical documentation absolutely needs to be correct, “free of
> mistakes or errors and strictly adhere to fact and truth” ([\[1, p.
> 3\]](#ref-hargisDevelopingQualityTechnical2004)).

Some examples:

-   When a diagram shows relationships between certain elements, those
    relationships have to exist in reality.
-   On the other hand, if is no relationship between those two elements,
    there shouldn’t exist one in the underlying code!
-   If a specific version of any product or framework is mentioned,
    exactly this version shall be used in reality.

This requirement seems trivial, but *correctness* has to be achieved
even in situations where development teams are constantly working to
improve or enhance the system. They change code, update interfaces,
frameworks or underlying technology. Important stakeholders will change
requirements or constraints.

The issue with constantly changing systems leads to another requirement
(“[current](#sect-current)”), which will be subject of a larger section.
Before we dive into this subject, let’s look at some options you have to
get your documentation correct.

#### How to achieve correctness

-   Have the right people create and maintain the documentation.

    1.  The exact same people who design and implement specific parts
        of the system also document these parts. The advantage: No
        information is lost at some potential interpersonal
        communication barrier. The disadvantage: These people might not
        be capble of producing high quality technical documentation,
        they might not have appropriate tools, motivation or time.
    2.  Have the architect(s) create that documentation. On one hand
        they will be able to extract the required knowledge from the
        responsible stakeholder. On the other hand, they should know the
        basics of quality technical documentation.

-   Have all parts of your documentation reviewed by the people who
    built, decided or implemented that exact thing - as they know the
    truth. 

-   Prefer abstract information over detailed: *Abstract* information is
    still correct, it’s just leaving out some detail.

    Leaving out details reduces the chance for errors and the need for
    constant updates. Have the courage to leave things undocumented
    (*better no documentation than wrong documentation*). The next
    section on current documentation will dive deeper into that subject.


<h3 id="sect-current">Req-2: Current</h3>

Change is normal: Development teams have to implement new features or optimize/fix/change existing ones.
They have to adjust the system to cope with changes in infrastructure, updates in frameworks or 3rd-party products.
Teams have to update their systems to reflect changes in external infrastructure, data formats or a plethora of other aspects that might change during the lifetime of any software system.

Despite all those changes, the documentation has to fulfill the _[correctness requirement](#sect-correct)_.
Teams must constantly adapt (_maintain_) their documentation, so it remains correct.


#### How to keep documentation current

* Regularly review your documentation, especially those parts that relate to recently-changed elements of the system.
* Leave out the _obvious_. Focus on important and specific aspects, elements or decisions in your system.
* Document only those parts or aspects of your system and its architecture that are definitely required by stakeholders.
* From time to time you should iterate over all parts of the documentation and:
  * question whether this part is still required by somebody and 
  * you are still willing to maintain this part of the documentation in the future.
  * If the answer to one of these questions is "no", then remove the corresponding part of the documentation. As everything is [version controlled](#sect-version-controlled), it would be available if needed later on.
* Optimize your documentation (not only your system!) for maintainability.
The section on [Easy to find](#sect-maintainable) contains numerous approaches that help to optimize maintainability.
* [Automate the generation of certain parts](#sect-automate-certain-parts) of your documentation..


<h3 id="sect-understandable">Req-3: Understandable</h3>

Although *understandability* seems like a trivial and basic requirement
for technical documentation, it is pretty hard to achieve and really
easy to get wrong. Let’s dig into some details of what makes
documentation understandable:

-   Terms and symbols need to be clear and unambiguous.
-   Use abbreviations only after they have been written in full once.
-   The overall organization (aka *structure*) of the documentation
    shall be optimized for consuming/reading
-   People tend to *comprehend* things better if they understand the
    reasons
-   Form, structure, language, tone and symbols should be adequate for
    the audience.

#### How to improve understandability

<h5 id="sect-know-target-audience">Know your target audience</h5>

> Understandability depends on the target audience.

What people understand depends on their knowledge, experience, language
skills, culture etc. A specific part of your documentation might be
fully understandable by certain people, and completely alien to others.
Different stakeholders will have different requirements concerning
documentation.

The more you know about your stakeholders, the better you will be
prepared to meet their demands. This is closely related to
[Relevance](#sect-relevant).

Follow these steps:

-   Identify all stakeholders: Identify all roles or people that might
    have an interest in or need for your technical documentation
-   Identify what your target audience really needs, what are acceptable
    forms or formats for documentation
-   Create and maintain a stakeholder table containing that information.

This information about your stakeholders will also be important to
improve the [relevance](#sect-relevant) of your documentation.

##### Document unambiguously

Ensure your documentation is clear, precise and presented in a way that
the target audience can understand. Most diagrams leave room for
interpretation, especially if naming and/or semantics of elements isn’t
exactly clear. Make sure that all symbols in diagrams and all specific
term have a defined meaning. 
Add a legend to clarify visual elements if you are not using a standardized notation.

-   See also [Explain your notation](#sect-explain-notation)
-   See also [Combine diagrams with text](#sect-diagrams-with-text)

<h5 id="sect-place-details-into-context">Place details into context</h5>

Your audience shall be able to start with an overview and then “dive in”
when they need more information. 
Therefore, organize your documentation top-down.

Technical documentation will contain technical details that are
prerequisite to understanding some decisions or concepts. Ensure people
can understand the *context* of such a detail. Add references to
external documents for readers who might not meet your knowledge
prerequisites.

![Fig. 3.1: Details with context]({{ site.imageurl }}/principles-of-tech-doc/fig-3-1-docu-place-details-into-context.drawio.png)

##### Explain specific terms

In case you use specific terms with a special or uncommon meaning or
semantics, you should define or explain these. Especially if the
semantics of your terms slightly deviate from common or standard
definitions.

Provide a glossary of such terms.

##### Explain reasons

Many decisions taken during development of a system are reflected in its
source code. What’s missing though, are the explanations or reasons for
these decisions.

Therefore, consider documenting the reasons and explain why the
development team took a particular path. Start with explaining the
requirements and constraints for a specific decision, then explain the
reasons for the decision.

<h5 id="sect-use-diagrams">Use diagrams to explain structures</h5>


>**Structure**: the way that something is built, arranged, or organized.<br>
><https://www.merriam-webster.com/dictionary/structure>

Diagrams or graphical models are well-suited to convey structural
information, like building-blocks (aka components) and their
dependencies, hardware elements and their relationships or even dynamic
structures like processes.

Use them with care - as changing or updating diagrams is harder than
updating a short textual description. On the other hand, structural
information is traditionally conveyed via diagrams.

Restrict diagrams to higher abstraction levels. Prefer to [omit
details](#omit-some-details) from your diagrams, instead of
trying to explain low-level structures in diagrams. Stick to a single
topic per diagram.


<h5 id="sect-explain-notation">Explain your notation (or use a standard)</h5>

Graphical models or diagrams are an elegant way to convey structural
information, they can improve visual effectiveness.

> Visual effectiveness is a measure of how the appearance of information
> and the use of visual elements within it affect the ease with which
> users can find, understand, and use the information.
> [^hargisDevelopingQualityTechnical2004], p. 277

Every symbol in a diagram should have a clear semantic or meaning. That
makes the diagram unambiguous.

Either you provide a legend which explains the meaning of every symbol
type, or you rely on a standard graphical notation, like 
UML[^UMLDiagramsOverview],
C4[^brownC4ModelVisualising],
ArchiMate[^ArchiMateQuickGuide];[^vanharenpublishingARCHIMATESPECIFICATION2019]. 
If you rely on a standard, reference it in addition to the legend.

<h5 id="sect-diagrams-with-text">Combine diagrams with text</h5>


A diagram itself might leave room for interpretation, unless amended by
textual or tabular clarification. See the following example, where
component names give hints on their actual responsibility, but terms
might be misleading. What is a “Reporter”? A journalist? A component
creating a report, or delivering it?



![Fig. 3.2: An example diagram that needs explanation]({{ site.imageurl }}/principles-of-tech-doc/fig-3-2-docu-diagram-with-text.drawio.png)

A table explaining important elements from a diagram can help to remove
such ambiguities - see for yourself:

| Element     | Responsibility / Meaning                                                               | Details            |
|:------------|:---------------------------------------------------------------------------------------|:-------------------|
| `Checker`   | performs the actual checking, relies on the status- and error messages of the `Parser` | org.aim42.hsc.core |
| `Parser`    | open-source library to parse HTML files                                                | org.jsoup          |
| `Suggester` | suggests solutions to problems found during checking                                   | org.aim42.hsc.core |
| `Reporter`  | creates a hicely formatted html report of all problems found during checking           | org.aim42.hsc.core |

<h5 id="sect-helpful-structure">Use helpful structure</h5>

The structure of technical documentation should be organized top-down, beginning with an overview, and gradually adding details.

Approaches like [arc42](https://arc42.org) [^DocsArc42Org] or C4 [^brownC4ModelVisualising] propose structures that are highly practical, established and free to use. 

<h3 id="sect-relevant">Req-4: Relevant (aka *task oriented*)</h3>

Documentation shall serve the purposes of its target audience, see [Know
your target audience](#sect-know-target-audience) above. They have
specific goals or tasks that can be enabled or supported by technical
documentation.

> Relevance depends on the goals and tasks of the target audience.

Let’s look at some potential stakeholders, their goals and documentation
needs:

| Stakeholder       | Task/Goal                        | Documentation                                                                                                    |
|:------------------|:---------------------------------|:-----------------------------------------------------------------------------------------------------------------|
| New developer     | Efficient onboarding             | Overview of requirements, solution approaches, building block structure, technical concepts, important decisions |
| Development team  | Guide implementation             | technical concepts, decisions, building block structure, some runtime scenarios                                  |
| —“—               | Take decision                    | e.g. quality requirements                                                                                        |
| Tester            | Test parts of the system         | some internal interfaces, technology overview                                                                    |
| Neighbour system  | Use external interface, e.g. API | context, technology overview, API details                                                                        |
| Management        | Budget decisions                 | context, technical decisions, used 3rd party frameworks                                                          |
| Auditor           | Check compliance                 | often: deployment view, technical decisions, high-level building blocks                                          |
| External reviewer | Due diligence                    | solution approaches, high-level structure, technical concepts                                                    |

#### How to improve relevance

##### Identify tasks of target audience

You need to know what information the target audience needs from the
documentation, (see [above](#sect-know-target-audience)). Create a
stakeholder table to contain information about each stakeholders’ tasks
and/or goals, so you can better estimate their documentation
requirements.

##### Show examples of existing documentation

It is highly effective to show each stakeholder examples of
existing documentation: Based upon specific examples, stakeholders can
point out what they need in addition, or what parts they are not
interested in.

> Beware of the “I need everything” trap: When stakeholders see detailed
> and well-organized documentation, they might want “everything” - even
> though they don’t need parts. Therefore, it might be more efficient if
> you show only those parts which you estimate people will really need!


<h3 id="sect-referenceable">Req-5: Referenceable</h3>

Referenceable elements can be uniquely identified in the context of your
documentation. Instead of writing “see the diagram below” or “the table
above”, you should strive for “see diagram 5.2” or “the table 3.1”. You
can chose any numbering or referencing scheme you like, but you should
use it consistently.

#### How to make documentation referenceable

-   Number every section and heading of technical documentation, at
    least to heading level 2.
-   Number every diagram or image. Prefix diagram numbers by the
    number/id of the appropriate section. For example, the first diagram
    in section 3 shall be labelled “Fig. 3.1”.
-   Number every table, again prefixed by section-id/number.
-   Provide a table of contents (toc). Electronic or online versions of
    your documentation should contain hyperlinks within the toc. For
    paper or printed versions, use page numbers.

You should [use appropriate tools](#sect-tools) to facilitate
referencing.

<h3 id="sect-proper-language">Req-6: Proper language</h3>

Your target audience shall have no reason to complain about spelling or
grammar mistakes, but shall instead focus on content. Proper language
will also improve readability and understandability.

#### How to improve documentation language

Language, wording and style of your documentation should be adequate for
your target audience. Sentences should be grammatically correct. Text
should be formulated in a factual way and avoid emotional or offensive
language.

Some specific advice:

-   Use positive statements, aka *avoid negation*. The human brain needs
    significantly longer to understand negation [^shermanBoundBeEasier1973].
-   Write concisely, aim for brevity. The average length of a sentence
    should be 15-20 words.
-   Use the active voice, as it makes it easier for our brain to
    comprehend and remember.
-   Aim for correct spelling and grammar.

[^hibbardSixPrinciplesTechnical] contains several examples
and explanations of "proper language".


<h3 id="sect-maintainable">Req-7: Maintainable</h3>

> The structure and organization of technical documentation should be
> optimized for *maintainability* - so that keeping the documentation
> current despite frequent changes becomes as easy as possible.

As already mentioned above, many aspects of systems change -
requirements, source code, configuration, deployment, operations,
external interfaces, etc. These changes shall be easy to incorporate
into the technical documentation, therefore *maintainability* is an
important requirement.

> Please note: We refer to *maintainability* of the documentation, *not*
> of the system itself.

#### How to improve maintainability

<h5 id="sect-omit-some-details">Abstract: Omit (some) details</h5>

-   Leave out certain facts: Explicitly decide to *not* document
    irrelevant or overly detailed facts. Leaving out some facts reduces
    the amount of content you have to keep up-to-date in the future.
    Only document facts that:
    -   you or your team can promise to maintain in the future.
    -   important stakeholders need to know to do their work
-   Document abstractions instead of details. That is a special case of
    not documenting certain facts, namely the details. But what kind of
    details could be left out of documentation? Please note that I wrote
    *could* be left out, not *shall* be left out. In some cases you will
    want or need to document details!

| instead of…                                   | try this…                                                                   |
|:----------------------------------------------|:----------------------------------------------------------------------------|
| trying to name/show **all** elements          | aggregate elements, especially when you can give explicit cohesion criteria |
| giving a specific version number              | omit that version number or specify a range like “version \>2.1”            |
| showing all children of an element            | omit children, point to parent                                              |
| showing all dependencies between two elements | show just one (aggregate) dependency (see below for an example)             |
| explaining interface details like parameters  | just name the interface, omit details                                       |

You see the underlying principle: Leaving out details facilitates change
and will make your documentation more robust against (at least some)
changes in requirements, code or infrastructure.

###### Examples of *omitting details*


![Fig 7.1 Example: Abstractions instead of details]({{ site.imageurl }}/principles-of-tech-doc/fig-7-1-omit-details-1.drawio.png)

In the first example, we condense three building blocks (A,B,C) into a
single one. At the same time, we reduce the details of explicit
dependencies between `foo` and A,B,C from 9 different to one. As this
single dependency carries several responsibilities (remember, it serves
as an abstraction for nine detailed relationships), it’s a good practice
to give such dependencies a name and explain some of the details in text
or a table.

![Fig 7.2 Example: Abstraction in runtime view]({{ site.imageurl }}/principles-of-tech-doc/fig-7-2-omit-details-runtime.drawio.png)

The second example shows a detailed sequence diagram containing three
participants (b1, b2 and b3), having some interactions among themselves
and a few with the rest of the system (a and c). In the abstraction I
made use of an *interaction reference* to hide details, see
[^SequenceDiagramReferences] or
[^UMLSequenceDiagrams].

##### Keep the source of every diagram

Diagrams are created using [appropriate tools](#sect-tools). Often
diagramming or modeling tools use proprietary binary data formats, which
are converted and exported to a format like png, jpg, svg or pdf.

To be able to later modify diagrams, you need the original (source)
representation.

At best, the source of diagrams is [versioned](#sect-version-controlled)
and referenced from the diagram.

##### Regularly delete outdated parts

If something has become common knowledge, you may delete it from your
written documentation.

> In one of my projects, I tagged such parts as “to-be-deleted”. In case
> nobody from the team objected within a week or so, that content would
> be removed from the active documentation and moved to an archive
> instead. Such tagging works great in some wikis.

##### Automation won’t improve your content

You can (and should) automate data collection, transformation, or even
some visualization, which we will discuss in the section on
[tools](#sect-tools) later on.

But: The intellectual process of creating valuable content for technical
documentation cannot currently be automated.

Documentation generated from source code will be restricted to
high-level abstractions of this source code. It cannot give reasons or
explain things, therefore it will always miss critical information.

See [^martraireLivingDocumentationContinuous2019] for a
coverage of automated (*living*) documentation.

<h3 id="sect-easy-to-find">Req-8: Easy to find</h3>

> Finding information is essential. The organization, retrievability,
> and visual effectiveness of information contribute most to whether
> users can find the information that they need.
> [^hargisDevelopingQualityTechnical2004], p.213

This requirements relates to both the content of the documentation and
to the documentation itself. In reality, documentation is often located
in access-controlled areas that are not covered by any search engine:
That means you have to know where to look for the documentation.

#### How to make information easier to find

-   Ensure the documentation itself can be easily found, for example by
    providing entry points at well-know locations (i.e. the start- or
    homepage of the product or team wiki).
-   Use a template, like [arc42](https://arc42.org)
    [^DocsArc42Org]
-   Organize your documentation top-down, see [place details into
    context](#sect-place-details-into-context) above
-   Use cross-references and hyperlinks where possible, so readers can
    *jump* within your structure
-   Provide a document overview that explains the structure of your
    documentation. For standards, like arc42, such overviews already
    exist.
-   Facilitate navigation and search, see [Req-9: Easy to
    find](#sect-easy-to-find)

Finally, you should accept some repetition in documentation to make it
more comfortable for stakeholders (See
[^DocumentationPrinciplesWrite], ARID).

<h3 id="sect-version-controlled">Req-9: Version controlled</h3>

As there will be several people actively contributing to technical
documentation, you should version-control its artifacts similar to
source code:

-   It shall be possible to rollback certain documentation changes.
-   The ability to work on different versions of the documentation
    (e.g. in different branches of a version management system) will be
    useful, especially in larger or distributed development teams.
-   Documentation shall closely correspond to the identified versions or
    releases of the system. In case somebody needs to *go back in time*,
    for example to fix a bug in an older release of the system, the
    documentation of that older release shall be available without much
    effort.

#### How to version-control documentation

Obviously the straightforward approach is using version control systems
(VCS), like `git`, `subversion` or similar tools.

But in reality that’s not always as simple as it sounds:

-   Organizations might prefer proprietary systems for documentation,
    for example wikis (e.g. Confluence™).
-   Documentation authors, especially from non-technical roles, might
    not be able (or refuse to) use a VCS.

Therefore I propose the following strategy:

-   Ideally, add all documentation artifacts to a VCS, like `git`. Your
    VCS should facilitate branching and merging artifacts. Additionally,
    it should allow for versioning of binary artifacts.
-   In case your documentation tools produce binary or proprietary
    artifacts, which cannot easily be added to your VCS, take the
    following path:
    -   Export all *release* versions of your documentation (those you
        need to keep) to PDF. Ideally, the result is a single PDF file
        containing the complete documentation to a specific release or
        version.
    -   Add the resulting PDF to version control.
    -   Automate the preceding two steps (creating and adding the PDF).
        See [automate certain parts](#sect-automate-certain-parts).

<h3 id="sect-tools">Req-10: Use appropriate tools</h3>

You need a toolchain that satisfies a number of requirements. Let’s
start with text processing:

-   structured text, with different heading levels
-   lists (numbered and/or bulleted)
-   cross-references
-   include images/diagrams created by other tools (at least png/jpg,
    svg/pdf recommended)
-   tables
-   split documents into several parts
-   support reviews by others than the author(s) with review comments
    and suggestions
-   the ability to generate numbers/ids for diagrams, tables and
    sections/headings

As you should create diagrams or models (see [Use
diagrams](#sect-use-diagrams)), your diagramming tool shall support:

-   static structures, like components, building-blocks or technical
    infrastructure
-   dynamic structures, like activities or processes
-   any standard notation like UML [^UMLDiagramsOverview], C4
    [^brownC4ModelVisualising] or ArchiMate
    [^vanharenpublishingARCHIMATESPECIFICATION2019]
-   legends in diagrams, to enable [Explain
    notation](#sect-explain-notation)
-   flexible layout, so you can improve visual effectiveness of diagrams
    (e.g. place important elements in the center, leave appropriate
    whitespace around elements, use fonts or color to emphasize aspects)
-   links or cross-references to related diagrams

#### Prefer established tools

For development teams it might be fun to use the latest and greatest
toolchain, with this and that plugin to spice up the otherwise boring
task of documenting the architecture.

But: Any toolchain needs a certain amount of maintenance: Updates,
backups, user support, and other mundane activities will require
somebody’s attention. If you install and operate your own tooling, it
might be you who needs to invest this time. If you rely on established
tools, your company or organization will provide this support.


> I’m a documentation tooling fanboy. I often install and test new
> tools, so I can develop my opinion and give better advice to my
> clients. This advice is, more often than not, directed towards the
> *boring* toolchains that already exist, where maintenance, backup and
> support are already sorted out.


#### In exceptional cases…

If (and only then!) there is no appropriate and usable toolchain
available for documentation - you need to introduce one. Such a
toolchain requires documentation, maintenance and support effort.

<h4 id="sect-automate-certain-parts">Automate certain parts</h4>

You should try to automate certain parts of maintaining your
documentation, to keep it current.

Some candidates for automation are the following:

-   creating platform-neutral representations (like PDF) of the complete
    documentation
-   publishing the documentation, e.g. in a browseable format
-   testing the sanity or consistency of your documentation, e.g. by
    checking hyperlinks

For the generation and publishing part, have a look at docToolchain
[^mullerDocToolchain], a lightweight, open-source approach
to create and maintain technical documentation. It can read several data
formats (AsciiDoc, PowerPoint®, Excel®, a variety of image formats etc)
and generate numerous output formats, including static websites.

<h3 id="sect-continuously">Req-11: Continuously updated</h3>

Deferring documentation to *later* is like procrastination, or saying
“I’ll start healthy living next week.” Start right now, in small chunks.
You decided to upgrade that persistence framework? Create an ADR for
this decision. The team decided to split that module in two separate
parts? Make an appropriate note in the building block view explaining
the reason for the split.

#### How to enable or facilitate continuous documentation

##### Include documentation task in your Definition-of-Done (DoD)

For many agile teams that work in iterations, the Definition-of-Done
“ensures everyone on the team knows exactly what is expected of
everything the team delivers” (quoted from
[^sutherlandDefinitionDone2014]).

If something is not contained in the DoD, it won’t be done. Therefore
you need to make sure that technical documentation *is* contained in
your DoD.

##### Reserve small timeboxes for documentation

Invest a few minutes per day, or 15min every Friday to create, maintain
or improve your documentation.

##### Document incrementally

-   Start with an overview, a birds’ eye perspective. Drill down into
    details only if somebody is willing to maintain these details.
-   Start small and add facts when they have gotten robust enough. If
    certain aspects or elements are still under discussion or
    investigation, don’t include those in your documentation.
-   If your team is experimenting with a certain technology, framework,
    structure or concept, defer the details to a later point in time.
-   Maintain a documentation backlog, where you collect open issues for
    your documentation.

### Summary

Instead of adding even more text, I provide a graphical summary:

![Fig 12.1: Pattern map for technical documentation]({{ site.imageurl }}/principles-of-tech-doc/fig-12-1-principles-pattern-map.png)

You can download a [high-res pdf version](https://arc42.org/downloads/principles-pattern-map.pdf) from arc42.

### Acknowledgements

Thanks and praise to my knowledgeable and articulate reviewers Ralf D.
Müller, Joachim Praetorius, Marco Stroppel and Peter Hruschka. Header image by [RetroSupply from Unsplash](https://unsplash.com/photos/jLwVAUtLOAQ)

### References

[^hargisDevelopingQualityTechnical2004]: G. Hargis, Ed., *Developing quality technical information: A handbook for writers and editors*. Upper Saddle River, N.J: Prentice Hall Professional Technical Reference, 2004. 

[^UMLDiagramsOverview]: "UML 2.5 Diagrams Overview." \[Online\]. https://www.uml-diagrams.org/uml-25-diagrams.html

[^brownC4ModelVisualising]: S. Brown, "The C4 model for visualising software architecture." https://c4model.com.

[^ArchiMateQuickGuide]: "ArchiMate Quick Guide." \[Online\]. Available: https://archimatetool.gitbook.io/project. 

[^vanharenpublishingARCHIMATESPECIFICATION2019]: VAN HAREN PUBLISHING, *ARCHIMATE(R) 3.1 SPECIFICATION.* S.l.: VAN HAREN PUBLISHING, 2019.

[^shermanBoundBeEasier1973]: M. A. Sherman, "Bound to be easier? The negative prefix and sentence comprehension," *Journal of Verbal Learning and Verbal Behavior*, vol. 12, no. 1, pp. 76–84, Feb. 1973.

[^hibbardSixPrinciplesTechnical]: C. Hibbard, "Six Principles of Technical Writing."

[^SequenceDiagramReferences]: "Sequence Diagram with References." https://sparxsystems.com/resources/gallery/diagrams/software/sw-sequence_diagram_with_references.html.

[^UMLSequenceDiagrams]: "UML Sequence Diagrams - Graphical Notation Reference." https://www.uml-diagrams.org/sequence-diagrams-reference.html.

[^martraireLivingDocumentationContinuous2019]: C. Martraire, *Living documentation: Continuous knowledge sharing by design*, 1st edition. Boston, MA: Pearson Education, Inc, 2019.

[^DocsArc42Org]: "Docs.Arc42.org." https://docs.arc42.org/home/.

[^DocumentationPrinciplesWrite]: "Documentation Principles — Write the Docs.” https://www.writethedocs.org/guide/writing/docs-principles/.

[^mullerDocToolchain]: R. D. Müller, "docToolchain."  http://doctoolchain.org/docToolchain/v2.0.x/.

[^sutherlandDefinitionDone2014]: J. Sutherland, "Definition of Done," 07-Aug-2014. https://www.scruminc.com/definition-of done.