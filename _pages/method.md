---
title: "arc42 method"
layout: splash
permalink: /method
header:
  overlay_color: "#000"
  overlay_filter: "0.2"
  overlay_image: /images/splash/method-splash.webp
  caption: "Photo credit: [**Jamie Templeton**](https://unsplash.com/@jamietempleton)"
excerpt: "Systematic and process-agnostic to appropriate solutions."


feature_row1:
  - image_path: /images/template/01-intro-and-goals.png
    alt: "Introduction and goals - lists for: Quality Goals and Stakeholder"
    title: "Clarify requirements"
    excerpt: 'Development teams need a robust and sustainable foundation of goals, requirements and constraints, 
    in order to be able to make targeted decisions and develop.
    '
    


---

arc42 provides practical answers to the following two questions, and can be easily customized to meet your specific needs:

* **_What_** should we communicate/document about our architecture?
* **_How_** should we communicate/document?

Methodical procedures in architecture and development should always be _iterative_: Always (!) complement and accompany analytical and constructive tasks with systematic _feedback_.


## Constant learning

Let's start with a fundamental and omnipresent task:
We (more precisely: all people working in IT development) are dealing with a very dynamic industry, constantly new technologies, methods, libraries, frameworks and approaches.
We have to take these innovations into account when designing, implementing and operating IT systems - or at least be able to assess their impact on our current system.

From our point of view, we can only do this if we make _learning independently_ a fundamental behavior.
Thanks to the Internet and omnipresent access to information, we have the opportunity to do this; we just have to use it appropriately for ourselves.


<hr>

{% include feature_row id="feature_row1" type="left" %}

Software architects can make a decisive contribution to clarifying requirements by, for example, questioning quality requirements, categorizing functional requirements and identifying technical risks.

<hr>

## Design structures

Building a system out of smaller parts (arc42 uses the term _bricks_ for this because it is technology neutral) is one of the fundamental tasks in architecture and development.

The (static) _Building Block View_ and its (dynamic) counterpart _Runtime View_ fall within the scope of this task.
Also included are _interfaces_, the connection between building blocks or our system and the outside world (_external interfaces_).

<hr>

## Design cross-sectional concepts

Overarching decisions, such as the selection of the basic technology for development or operation, the choice of infrastructure, or even the frameworks or libraries used - these are what arc42 understands as _cross-cutting concepts_.
Such concepts can have a direct impact on single or all building blocks.
They can be architecture or design patterns that are used multiple times or across the board.
Concepts may also relate to other topics, such as techniques and methodology for build, deployment, test and/or release of the system.

arc42 suggests a whole zoo of topics that you could (but don't have to) solve _across_ architecture - here's a small sample:

* How is the (graphical) user interface structured and implemented? Which libraries or patterns are used?
* How, where and with what persistent data is stored, distributed and read again? Which databases are used?
* How are business, validation or plausibility rules implemented?
* How does the system and its building blocks handle error or exception situations?
* How does the system handle logging and monitoring?

More details can be found in section 8 of the arc42 template...

<hr>

## Communicate and document architecture

You should coordinate your architecture and design decisions with relevant stakeholders, solicit their feedback, and incorporate it as appropriate.
You should put some decisions in writing:
Depending on the industry, type of system, criticality, risk and/or process model sometimes more, sometimes less.

In general, we recommend communicating intensively verbally about architecture decisions, especially with and within the development team.
For this, you should document in writing as sparingly as possible:
The written form creates maintenance overhead for future changes, which many teams understandably shy away from.

The arc42 template is suitable for both very sparse and very detailed and thorough documentation.
<hr>

## Accompany implementation

During the development iterations, you have discussed a lot with your team and coordinated thoroughly.
You have (hopefully together) designed building blocks, interfaces and concepts - in short:
You did everything right.

Unfortunately, such good communication is not enough:
It could be that deviations from the discussed, discussed or even documented decisions creep into the implementation, i.e. into the source code:

Whether this happens on purpose or by accident, you should always work with your team to ensure that the source code implements the structures and concepts as intended.
Check that decisions are being implemented appropriately or are having the effects you want.

By the way, it sometimes even happens that individual developers have much better ideas than the architecture group - you could find such _gold pieces_ of the implementation by systematically accompanying the implementation and make them part of the architecture!

On the other hand, developers may also misunderstand design decisions or concepts or implement them poorly.
In such cases, you should coach and explain the decisions or concepts to those affected, or help them implement them.

In any case, you should look into the source code of your systems (= _code reviews_) and compare the actual implementation with the desired target.
Only through this (detailed) work can you really see whether and how architecture decisions will ultimately be implemented.

Especially in larger teams, a single person can no longer review all the source code that has been created or changed.
Code analysis tools can help, but in essential cases (critical or important parts of the system) people should perform such reviews (only they can ask for reasons and assess them situationally).
Often it is also sufficient to inspect small parts of the source code to keep the effort of this task within reasonable limits.

<hr>

## Analyze and evaluate architecture

Ask yourself as a software architect at regular intervals whether your decisions and concepts achieve the desired effect or still seem appropriate from today's perspective.
This simple feedback loop forms the basis of iterative (nowadays called: _agile_) processes.
The Plan-Do-Check-Act cycle (PDCA or Deming circle) has elevated the systematic review (the check phase) to a system, for good reason:
Just acting and deciding without reflection, without looking back, easily leads to missed goals and actionism.
So look into a _methodical rear-view mirror_ and subject your system, your architecture and design decisions, your concepts etc to a methodical review from time to time.

In the best case, you (or development team and other affected stakeholders) still find all decisions super - then move on!
In other cases, the analysis and evaluation allows you to identify possible weaknesses or risks at an early stage and to plan and initiate appropriate improvement measures.

<hr>


