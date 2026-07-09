---
title: "arc42 method"
layout: splash
permalink: /method/
excerpt: "How to work with arc42: iterative, feedback-driven and process-agnostic — the recurring tasks of practical architecture work."
---

<section class="dl-hero">
  <div class="dl-hero__inner">
    <p class="dl-hero__kicker">Iterative &middot; feedback-driven &middot; process-agnostic</p>
    <h1 class="dl-hero__title">The arc42 method</h1>
    <p class="dl-hero__sub">The <a href="/overview/">template</a> tells you <strong>where</strong> architecture information belongs. The method is about <strong>how you work</strong>: a small set of recurring tasks that keep your architecture, your code and your stakeholders in sync — in agile, lean or formal projects alike.</p>
  </div>
</section>

Architecture work should always be *iterative*: complement analytical and constructive tasks with systematic *feedback*. The following tasks recur throughout the life of every system — none of them is ever "finished".

## Learn constantly

IT is a dynamic industry: new technologies, methods, libraries and frameworks appear all the time. To design, implement and operate systems responsibly, you need to assess the impact of such innovations on your current system — which only works if *independent learning* becomes a fundamental habit.

## Clarify requirements

Development teams need a robust foundation of goals, requirements and constraints to make targeted decisions. Software architects contribute decisively here: by questioning quality requirements, categorizing functional requirements, and identifying technical risks.

## Design structures

Building a system out of smaller parts is one of the fundamental tasks of architecture and development — arc42 calls these parts *building blocks*, deliberately technology-neutral. This task produces the static [Building Block View](https://docs.arc42.org/section-5/), its dynamic counterpart, the [Runtime View](https://docs.arc42.org/section-6/), and the *interfaces* that connect building blocks with each other and with the outside world.

## Design cross-cutting concepts

Some decisions affect single building blocks; others cut across the whole system: the choice of base technology and infrastructure, the frameworks and libraries in use, recurring architecture or design patterns, or the approach to build, deployment, test and release. arc42 calls these [cross-cutting concepts](https://docs.arc42.org/section-8/). A small sample of questions such concepts answer:

* How is the user interface structured and implemented — with which libraries or patterns?
* How and where is persistent data stored, distributed and read — with which databases?
* How are business, validation and plausibility rules implemented?
* How do the system and its building blocks handle errors and exceptions?
* How does the system handle logging and monitoring?

## Communicate and document

Coordinate architecture and design decisions with the relevant stakeholders, solicit their feedback, and incorporate it where appropriate. Communicate intensively in person, especially with and within the development team — and put decisions in writing as sparingly as possible, because written documentation creates maintenance effort for every future change. How much you write down depends on your industry, the type of system, its criticality and risk. The arc42 template supports both extremes: very sparse and very thorough documentation.

## Accompany the implementation

Good design discussions are not enough: deviations from agreed (or even documented) decisions can creep into the source code, on purpose or by accident. Work with your team to ensure the code implements the intended structures and concepts — which means actually looking into the source code (*code reviews*) and comparing the implementation against the target.

This works in both directions. Sometimes individual developers have better ideas than the original design — find these *gold pieces* and make them part of the architecture. In other cases, developers misunderstand a decision or concept; then coach, explain, or help with the implementation. In larger teams nobody can review all code — tools can help, but for critical parts of the system, people should review, since only they can ask for reasons and judge them in context. Inspecting small, well-chosen parts of the code usually keeps the effort reasonable.

## Analyze and evaluate

Ask yourself at regular intervals whether your decisions and concepts still achieve the desired effect from today's perspective. This simple feedback loop is the basis of every iterative process — deciding and acting without reflection easily leads to missed goals and actionism. A methodical look in the *rear-view mirror* either confirms your decisions (great — move on!) or reveals weaknesses and risks early enough to plan appropriate improvements.

## Put the method to work

<p>
  <a href="/download/" class="btn btn--arc42"><span aria-hidden="true">&#8595;</span> Download arc42</a>
  <a href="/overview/" class="btn btn--arc42-outline">Explore the template</a>
</p>
