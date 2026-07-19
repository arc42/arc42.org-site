# arc42 Field Manual 42 prototype brief

## Purpose of this document

This brief instructs an experienced product and brand designer to create a high-fidelity prototype for a new arc42.org visual system.

The prototype must prove that arc42 can look modern, distinctive, authoritative, and highly functional without resembling a generic developer portal, SaaS landing page, editorial magazine, or retro technical costume.

The working name for the direction is **Field Manual 42**.

The prototype is a design exploration, not yet a full-site migration. It must be detailed enough to:

- Evaluate the visual identity in realistic content conditions.
- Validate the most important user journeys.
- Test whether one system can support new utility pages and legacy long-form content.
- Establish reusable design rules for a later implementation.
- Identify any necessary changes to the existing `DESIGN.md`.

## Required prototype pages

Create high-fidelity desktop and mobile designs for these three pages:

1. **Homepage**: proves the identity, navigation, hierarchy, and primary value proposition.
2. **Download**: proves interaction design, decision support, status communication, and responsive controls.
3. **Books or Articles archive**: proves that the system can absorb long, mixed-language, metadata-rich legacy content without becoming a wall of cards.

Also create a compact component sheet showing the shared system used by all three pages.

## Product context

arc42 is the definitive home of the arc42 software architecture documentation template. Its users include:

- Software architects.
- Senior software developers.
- Technical leaders.
- System engineers.
- Teams adopting docs-as-code practices.
- People preparing for iSAQB certification.

These users are usually working, not browsing recreationally. They want an authoritative answer, a suitable template, a comparable example, licensing certainty, or a training resource. They value structure, clarity, pragmatism, and evidence over marketing language.

The primary jobs of the site are:

1. Help a visitor choose and download the appropriate arc42 template quickly.
2. Explain what arc42 is and how its twelve sections work.
3. Provide practical examples and learning resources.
4. Establish arc42 as current, trustworthy, and maintained.
5. Promote training without turning the site into a sales funnel.

## Experience scene

Design for this concrete physical situation:

> A software architect uses the site on a large monitor during a working session. They are comparing formats, checking whether a resource is current, and trying to make a decision without leaving their technical context.

The interface should feel comfortable in bright office light, suitable for long reading sessions, fast to scan, and credible when projected during a team discussion.

## Brand character

Use these three voice words as the design test:

- **Exacting**: precise, consistent, and explicit about status and versions.
- **Approachable**: readable, practical, and free of institutional stiffness.
- **Field-tested**: visibly informed by real software projects rather than abstract theory.

The site should feel like an exceptionally well-designed engineering field manual that has been refined through use.

It must not feel:

- Academic or bureaucratic.
- Cold, futuristic, or cyber-themed.
- Like a SaaS template.
- Like an online magazine.
- Brutalist for its own sake.
- Nostalgic or artificially distressed.
- Like a literal blueprint with decorative grid paper.

## Core design idea

arc42 is a structured method. The design identity should therefore come from structure itself:

- Stable numbering.
- Clear indices.
- Ruled sections.
- Explicit metadata.
- Version and status labels.
- Marginal annotations.
- Real documentation artifacts.
- Strong reading hierarchy.

Do not add decorative engineering symbols that have no meaning. Every line, number, label, and marker must communicate structure, status, relationship, or action.

## What should change from the current design

Replace these current tendencies:

| Current tendency | New direction |
|---|---|
| Pale-blue gradients | Flat, tinted-paper surfaces |
| Floating white cards | Ruled sections, indexed lists, and structured panes |
| Generic system typography | Distinctive technical headings and highly legible body text |
| Repeated equal-sized card grids | Layouts selected according to content type |
| Pills used as general decoration | Segmented controls only for real selection |
| Generic stock imagery | Real arc42 documents, diagrams, workshops, and annotations |
| Weak resource metadata | Consistent language, date, version, medium, and lifecycle labels |
| Legacy and new page shells | One coherent page-header, navigation, content, and footer system |

## Typography

### Proposed pairing

Use the following as the primary prototype direction:

- **Saira Semi Condensed** for display headings, navigation, resource titles, section numbers, and short technical labels.
- **Atkinson Hyperlegible Next** for body copy, forms, controls, annotations, long-form reading, and metadata.

Reference sources:

- Saira family: <https://googlefonts.github.io/omnibus/>
- Atkinson Hyperlegible Next: <https://www.brailleinstitute.org/freefont/>

Atkinson Hyperlegible Next is especially appropriate because arc42 is multilingual and has explicit accessibility goals.

Do not use monospace as the default signal for technical content. Reserve monospace for actual code, filenames, command examples, and machine-readable identifiers.

### Typographic character

The pairing should feel like technical labeling combined with an unusually readable handbook. It must not look like terminal software or an editorial magazine.

Suggested starting hierarchy for desktop:

| Role | Typeface | Suggested size | Weight | Line height |
|---|---|---:|---:|---:|
| Display hero | Saira Semi Condensed | `clamp(3.25rem, 6vw, 5.5rem)` | 700 | 0.96 to 1.02 |
| Page title | Saira Semi Condensed | `clamp(2.5rem, 4.5vw, 4rem)` | 700 | 1.00 to 1.08 |
| Section title | Saira Semi Condensed | `clamp(1.75rem, 3vw, 2.5rem)` | 650 to 700 | 1.10 |
| Subsection title | Saira Semi Condensed | `1.35rem` to `1.6rem` | 650 | 1.15 |
| Intro copy | Atkinson Hyperlegible Next | `1.2rem` to `1.35rem` | 400 | 1.45 |
| Body copy | Atkinson Hyperlegible Next | `1rem` to `1.075rem` | 400 | 1.55 to 1.65 |
| UI label | Atkinson Hyperlegible Next | `0.875rem` to `0.95rem` | 600 | 1.3 |
| Metadata | Atkinson Hyperlegible Next | `0.8rem` to `0.875rem` | 500 to 600 | 1.3 |

Requirements:

- Keep body reading width between 65 and 75 characters.
- Apply balanced wrapping to H1 through H3.
- Avoid all-caps body copy.
- Uppercase may be used for short, infrequent status labels.
- Do not repeat a tiny tracked uppercase kicker above every heading.
- Use weight, size, spacing, and rules to create hierarchy.
- Ensure the mobile scale remains decisive rather than collapsing into nearly equal sizes.

## Color system

Use OKLCH values in the final token proposal. Start with this direction:

```css
:root {
  --fm-paper: oklch(97% 0.008 240);
  --fm-paper-blue: oklch(92% 0.030 245);
  --fm-paper-deep: oklch(87% 0.045 245);
  --fm-ink: oklch(24% 0.030 255);
  --fm-ink-muted: oklch(48% 0.025 250);
  --fm-blueprint: oklch(48% 0.135 250);
  --fm-blueprint-hover: oklch(42% 0.145 250);
  --fm-signal: oklch(83% 0.155 86);
  --fm-rule: oklch(84% 0.018 245);
  --fm-rule-strong: oklch(68% 0.025 245);
  --fm-success: oklch(62% 0.120 150);
  --fm-danger: oklch(57% 0.180 28);
}
```

These are starting values, not approved final values. The designer must test and adjust them for WCAG AA contrast.

### Color roles

- **Paper** is the main reading surface. It should be slightly tinted, never pure white.
- **Paper blue** distinguishes structured utility regions, selection panes, and section introductions.
- **Ink** is the default text and heading color. Never use pure black.
- **Blueprint blue** marks links, primary actions, selections, and current navigation.
- **Signal yellow** is rare. Use it for recommended choices, significant release information, or a single high-priority notice.
- **Success and danger** are functional states only. Never use them decoratively.

Do not use:

- Gradients.
- Gradient text.
- Decorative glows.
- Transparent glass panels.
- Large decorative color blobs.
- Low-contrast gray text.
- Color as the only status indicator.

## Surface and elevation

The system should be flat and materially quiet.

- Use one-pixel rules to organize content.
- Use spacing and background shifts before adding containers.
- Use borders around controls and genuinely grouped utilities.
- Avoid cards when a row, list, table, or open layout is clearer.
- Do not nest cards.
- Do not use shadows at rest.
- A subtle shadow may appear during hover or drag feedback, but it should not be the primary affordance.
- Use small corner radii, generally 2 to 6 pixels.
- Buttons may use up to 6 pixels. Avoid soft 12 to 20 pixel SaaS rounding.

## Signature design devices

The following devices should make the site recognizable even when the logo is removed.

### 1. Stable section indexing

Use stable numbers for primary site concepts and major page sections.

Example:

```text
01  Template
02  Method
03  Examples
04  Learn
05  Resources
```

The numbering must improve orientation. It is not decorative pagination and must not imply false sequence where none exists.

For the twelve arc42 sections, preserve the canonical 01 to 12 numbering everywhere.

### 2. Ruled content structure

Use aligned labels, strong baselines, and horizontal rules to organize lists and resources. Avoid turning every resource into a rounded rectangle.

Rules can express:

- Group boundaries.
- Selected versus available options.
- Parent and child relationships.
- Metadata alignment.
- Reading progression.

Do not use thick colored side stripes.

### 3. Margin annotations

Allow concise expert guidance beside the main content column.

Examples:

```text
RECOMMENDED
Start here if this is your first architecture document.
```

```text
CURRENT
Version 9.1 is the maintained German template.
```

On narrow screens, margin annotations become inline callouts placed immediately before the content they explain.

Annotations must be infrequent and useful. Do not create a repeated eyebrow-label pattern.

### 4. Resource and version stamps

Every downloadable or time-sensitive resource should expose consistent metadata.

Examples:

```text
V9.0 · EN · JUL 2025 · CURRENT
V8.2 · ES · JAN 2023 · MAINTENANCE
ARTICLE · EN · 12 MIN · UPDATED FEB 2025
VIDEO · DE · 34 MIN · TRANSCRIPT AVAILABLE
```

Status must be expressed through text and, optionally, color.

Define at least these lifecycle states:

- Current.
- Maintenance.
- Legacy.
- External.
- Archived.

### 5. Real documentation imagery

The visual identity should show arc42 in use.

Preferred imagery:

- Annotated arc42 template pages.
- Real architecture diagrams.
- Printed workshop material with handwriting.
- Documentation shown on a developer workstation.
- Workshop participants actively discussing diagrams.
- Close details of tabs, dividers, pages, or physical organization.
- Screenshots of high-quality architecture documentation.

Avoid:

- Generic people pointing at glass walls.
- Abstract blue technology imagery.
- Decorative AI-generated diagrams that imply meaning but contain none.
- Generic laptops floating in empty space.
- Repeated Unsplash hero photography without a content relationship.

If suitable real assets do not exist, propose a small, repeatable photography or illustration art direction rather than filling the prototype with placeholders.

## Global page frame

Design one global frame that works on utility, archive, and long-form pages.

### Masthead

Requirements:

- Preserve the arc42 logo.
- Make Download the single persistent primary action.
- Reduce the number of equally weighted top-level choices.
- Use task-oriented grouping.
- Avoid a control named More if a content destination also uses that concept.
- Show the current section clearly.
- Support keyboard navigation, visible focus, Escape close, and outside-click dismissal.
- Provide a usable mobile menu with a text label or an unambiguous accessible name.

Explore this task-oriented structure:

```text
Understand
Use arc42
Examples
Learn
Resources
[Download]
```

The designer should show one expanded navigation state on desktop and mobile.

### Page header

Create one adaptable page-header component with:

- Stable section number or category.
- H1.
- Concise purpose statement.
- Optional primary and secondary actions.
- Optional status or updated date.
- Optional relevant document imagery.

The header should not always be a full-bleed colored hero. It should have compact, standard, and feature variants derived from one system.

### Footer

Treat the footer as a colophon rather than a generic social-link strip.

Include:

- Maintainers and organizational support.
- License.
- Source repository.
- Status page.
- Contact.
- Last site update or release information if maintainable.
- Social destinations as secondary information.

The footer must remain legible on mobile and must not reduce links to tiny inline targets.

## Homepage prototype

### Primary goal

A first-time visitor should understand what arc42 is and reach an appropriate template or explanation within seconds.

### Required homepage structure

#### 1. Masthead

Show the final navigation direction and one expanded state.

#### 2. Hero

Use this content direction:

```text
01 / ARC42 TEMPLATE

Document architecture
without ceremony.

The proven structure for constructing, communicating,
and documenting software architecture.

[Get the template]  [See how arc42 works]
```

The final wording may be refined, but retain the directness and absence of generic marketing language.

Do not place a floating quick-download card beside the hero. Integrate the recommended download into the document structure below the primary message.

#### 3. Recommended start

Present one clear recommendation and two or three alternative workflows.

Example:

```text
RECOMMENDED START

AsciiDoc · English · Version 9.0 · Current       [Download]

Choose another workflow:
[Office document] [Docs as code] [Modeling tool]
```

Explain why the recommended option is recommended. Do not use popularity as unexplained proof.

#### 4. What arc42 helps users do

Avoid three identical feature cards. Use a numbered sequence or structured list:

```text
01  Structure architecture knowledge
02  Communicate decisions
03  Keep documentation maintainable
```

Each item may include one concise explanation and a relevant artifact detail.

#### 5. Twelve-section preview

Provide a compact preview of the twelve canonical sections. The homepage preview should explain the system without exposing twelve equal-weight calls to action.

Possible treatments:

- A partial indexed list with an explicit View all twelve sections action.
- A focused diagram with three visible examples and progressive disclosure.
- An annotated real template page.

#### 6. Evidence

Use credible evidence rather than hero metrics.

Suitable evidence:

- Selected real-world examples.
- The age and open-source status of the project as metadata.
- Maintainer names and community contributions.
- A concrete quote from an identified practitioner, if one is available.

Do not create a large-number statistics strip.

#### 7. Learning and training

Separate self-guided learning from instructor-led training. Training must be clearly available but not compete with Download as the primary site action.

#### 8. Latest and maintenance status

Replace an undifferentiated news list with a small release and maintenance log. Show dates and affected languages or formats.

### Homepage responsive requirements

- At 390 pixels, the hero must preserve strong hierarchy without isolated single-word lines.
- The persistent Download action and mobile menu must fit without crowding the logo.
- Recommended download content must remain above less important promotional material.
- All actions must meet a minimum 44 by 44 pixel target.
- No horizontal scrolling is acceptable.
- Ensure annotations move into the reading order correctly.

## Download prototype

### Primary goal

A visitor should obtain an appropriate template without first understanding the complete repository structure.

### Required interaction model

Lead with workflows rather than raw formats.

#### Step 1: Choose a workflow

Show three recommended pathways:

1. **Docs as code**: AsciiDoc or Markdown, version-controlled, automation-friendly.
2. **Office document**: Word-based authoring and collaboration.
3. **Modeling tool**: Enterprise Architect and other specialist integrations.

Each pathway should include:

- Who it is for.
- The recommended format.
- The main tradeoff.
- Whether it is current, maintenance, or legacy.

Provide an explicit All formats option for experts.

#### Step 2: Choose language

- Show full language names where space allows.
- Language codes may be secondary labels.
- Show version and last update beside each language.
- Make unavailable combinations clear before selection.
- Do not depend on color alone.

#### Step 3: Choose guidance level

Explain the choice at the point of selection:

- **With help** includes official explanations inside each section and is recommended for first-time users.
- **Plain** contains only the structure and is suitable for experienced users.

Avoid jargon such as MP or strict without an adjacent explanation.

#### Result pane

Keep the current configuration and resulting artifact visible.

Required content:

```text
YOUR TEMPLATE

AsciiDoc
English
With help
Version 9.0 · July 2025 · Current

[Download ZIP]

Includes: template files, embedded help, README
```

The result should update inline. Do not use a modal.

#### Download feedback and completion

Design the following states:

- Default recommendation.
- Valid customized selection.
- Unavailable combination.
- Preparing download.
- Download started.
- Download failed.

After a successful download, provide a useful next step:

- Open the getting-started guide.
- See a matching example.
- Understand the twelve sections.

Do not trap the user in a celebratory overlay.

#### Advanced and legacy formats

Place specialist formats in progressive disclosure. Every legacy resource must show:

- Template version.
- Last update.
- Compatibility.
- Maintainer or contributor when relevant.
- Recommended modern alternative.

### Download responsive requirements

- Do not compress language and format choices into tiny pills.
- Controls must remain at least 44 pixels high.
- Preserve the workflow, language, guidance, result sequence in reading order.
- Consider a sticky summary near the bottom of the viewport only if it does not obscure content.
- Avoid horizontal matrices on small screens.
- Announce result changes and errors to assistive technology.

## Books or Articles archive prototype

### Primary goal

Prove that the new system handles long-lived, multilingual resources without a wall of cards or an unstructured chronological document.

### Required archive features

#### Archive header

Include:

- Clear title.
- One-sentence purpose.
- Total resource count if accurate and maintainable.
- Last editorial review date.

#### Filters

Design filters for:

- Language.
- Medium.
- Topic.
- Year or recency.
- Availability, such as free, commercial, online, or print.

Filters must:

- Work on mobile without a modal as the first solution.
- Show active filters.
- Provide Clear all.
- Update the result count.
- Preserve a useful default view without requiring filtering.

#### Resource rows

Use structured rows or varied editorial groups, not an identical card grid.

Example:

```text
2025

arc42 by Example, Anniversary Edition
BOOK · EN · FREE · 9 SYSTEMS · CURRENT               [Details]
Nine real systems documented with arc42.

20 Years of arc42
ARTICLE · EN · 12 MIN · FEB 2025                     [Read]
A concise history of the template and its ecosystem.
```

For books, show the cover as supporting information. Do not float alternating covers through long prose.

Each resource must support:

- Descriptive title.
- Brief value statement.
- Language.
- Date.
- Medium.
- Availability.
- Relevant status.
- Specific action label, such as Read article, View book, Watch talk, or Download PDF.

Avoid vague labels such as Read here and More.

#### Mixed-language behavior

The English site may include German resources, but the language must be explicit before the user opens the resource. Show how a German resource appears in the default archive and in a filtered state.

#### Empty and error states

Design:

- No results after filtering.
- Resource data unavailable.
- External destination unavailable, if the system can detect it.

No-results guidance should name the active constraints and provide one-click recovery.

### Archive responsive requirements

- Resource metadata may wrap into two deliberate rows, but must not become an unreadable badge cloud.
- Covers should not force excessive first-screen scrolling.
- Filters must remain discoverable and reversible.
- Action labels must stay specific.
- All rows and controls must be keyboard accessible.

## Component sheet

Create a component sheet showing the system in realistic states.

Required components:

### Navigation

- Desktop masthead.
- Desktop expanded menu.
- Mobile masthead.
- Mobile expanded menu.
- Current section state.
- Keyboard focus state.

### Buttons and links

- Primary action.
- Secondary action.
- Text action.
- Destructive or dangerous action, if needed.
- Disabled state.
- Loading state.
- Visible keyboard focus.
- External link treatment.

### Selection controls

- Workflow choice.
- Language choice.
- Guidance-level choice.
- Selected, unselected, unavailable, hover, focus, and error states.

### Metadata and status

- Resource metadata line.
- Version stamp.
- Current, maintenance, legacy, archived, and external states.
- Recommended marker.
- Updated date.

### Content structure

- Standard page header.
- Compact page header.
- Feature page header.
- Indexed section heading.
- Resource row.
- Margin annotation.
- Inline callout.
- Long-form figure and caption.
- Collapsible table of contents.
- Empty state.
- Error state.

### Forms and search

- Text input.
- Search input with result count.
- Select or combobox.
- Inline validation.
- No-results state.
- Loading and failure states.

## Layout system

Create a layout system that can support utility and long-form pages.

Suggested desktop structure:

- Maximum site width around 1280 to 1360 pixels.
- Twelve-column underlying grid.
- Main reading column capped at 65 to 75 characters.
- Optional annotation rail.
- Optional local navigation or TOC rail.
- Full-width ruled sections when the content benefits from comparison or browsing.

Suggested responsive behavior:

- Wide desktop: reading column plus annotation or local navigation rail.
- Standard desktop and tablet: reduced side rails, preserved reading width.
- Mobile: single reading column, annotations inserted in document order, no horizontal overflow.

Spacing must create rhythm rather than applying the same padding everywhere. Use tight spacing inside a concept, moderate spacing between related concepts, and generous spacing between major sections.

## Motion and interaction

Motion should be nearly invisible and always functional.

Allowed:

- Short color and opacity transitions for hover and focus.
- A restrained menu opening transition.
- Smooth inline result updates.
- Collapsible sections that animate without changing layout properties such as height directly.

Avoid:

- Scroll-triggered entrances for normal content.
- Parallax.
- Bouncing or elastic motion.
- Long page-load choreography.
- Animation on every card or resource row.

Use an exponential ease-out curve. Respect `prefers-reduced-motion`.

## Accessibility requirements

The prototype must visibly demonstrate accessibility rather than mentioning it only in notes.

Minimum requirements:

- WCAG AA contrast for text and controls.
- Body text contrast of at least 4.5:1.
- Keyboard-visible focus on every interactive element.
- Minimum 44 by 44 pixel touch targets.
- No color-only meaning.
- One H1 per page.
- Logical heading order.
- Meaningful image alternatives planned in the content specification.
- Dynamic download and search changes announced through an appropriate live region.
- Error messages placed beside the cause and containing recovery guidance.
- Zoom to 200 percent without loss of content or function.
- No horizontal viewport scrolling at 320, 375, 390, 768, 1024, and 1280 pixel widths.
- Reduced-motion behavior documented.
- Reading order documented for desktop layouts that visually use side rails.

Show visible focus states in the component sheet and at least one page design.

## Content and copy guidance

The voice should be direct, experienced, and concrete.

Use:

- Short declarative sentences.
- Specific action labels.
- Domain vocabulary when the audience understands it.
- Brief explanations at decision points.
- Explicit dates and versions.
- Honest status labels.
- Occasional dry confidence or restrained humor when it is authentically arc42.

Avoid:

- Generic marketing phrases such as unlock, transform, supercharge, seamless, and next-generation.
- Restating a heading in the first sentence below it.
- Exclamation marks as a substitute for confidence.
- Vague actions such as Learn more, More, Read here, or Click here.
- Unexplained abbreviations.
- Em dashes.
- Expired promotional copy.

## Explicit anti-patterns

The prototype will be rejected if it relies on any of these:

- A generic centered hero followed by three equal cards.
- Pale-blue or purple gradients.
- Gradient text.
- Glassmorphism.
- Decorative technical grids.
- Dark mode merely because the audience is technical.
- Monospace used throughout as a developer costume.
- Large rounded icons above every feature heading.
- Repeated tiny uppercase kickers.
- Identical card grids for every content type.
- Large metric numbers as the primary evidence pattern.
- Thick colored side stripes on callouts or cards.
- Shadows on all surfaces.
- Excessively rounded controls.
- Modal dialogs as the first solution for filtering or selection.
- Generic AI-generated architecture diagrams.
- A magazine-style serif and italic editorial treatment.

## Prototype deliverables

Provide:

1. Desktop homepage at 1440 pixels wide.
2. Mobile homepage at 390 pixels wide.
3. Desktop Download page at 1440 pixels wide.
4. Mobile Download page at 390 pixels wide.
5. Desktop Books or Articles archive at 1440 pixels wide.
6. Mobile archive at 390 pixels wide.
7. Desktop and mobile expanded-navigation states.
8. Download default, customized, unavailable, loading, success, and failure states.
9. Archive default, filtered, no-results, and failure states.
10. Component and token sheet.
11. Typography specimen containing English, German, French, Ukrainian, and Chinese sample text.
12. Color contrast annotations for all text and control combinations.
13. Responsive behavior notes for 320, 375, 390, 768, 1024, 1280, and 1440 pixels.
14. Asset and imagery recommendations, including which existing images can be reused and what new assets are needed.
15. A short rationale explaining how the result avoids generic developer-portal aesthetics.

If created in Figma, use components, variants, auto layout, variables, and semantic token names. Do not deliver a set of disconnected artboards.

## Expected design-system output

The prototype should propose semantic tokens for:

- Color.
- Typography.
- Spacing.
- Rules and borders.
- Corner radii.
- Motion duration and easing.
- Layout widths.
- Focus treatment.
- Status states.

The token proposal must distinguish design decisions from implementation aliases. For example, use `color-action-primary` rather than `blue-500` in component specifications.

## Review criteria

The prototype succeeds only if all of these are true:

### Identity

- It remains recognizable as arc42 without the logo.
- The identity comes from meaningful structure, not decoration.
- It does not resemble a generic SaaS or developer-tool template.
- It feels current without depending on short-lived visual trends.

### Function

- A first-time user can identify the recommended download quickly.
- An expert can reach all formats without being slowed down.
- Language, version, status, and compatibility are visible before downloading.
- Archive resources can be scanned and filtered efficiently.
- Legacy content can adopt the system without being rewritten from scratch.

### Consistency

- Homepage, Download, and archive feel like one site.
- The same metadata and status grammar works across templates, books, articles, talks, and videos.
- Page headers and navigation share one predictable structure.
- Mobile is a deliberate version of the system, not merely stacked desktop content.

### Accessibility

- Contrast, focus, touch targets, reading order, and dynamic feedback are demonstrated.
- No prototype frame has horizontal overflow.
- Long content remains comfortable to read.

### Restraint

- Every visual device has a functional role.
- Cards are used only when they are the best affordance.
- Accent color remains rare and meaningful.
- Motion does not delay access to information.

## Existing project references

The designer should review these sources before starting:

- `PRODUCT.md`
- `DESIGN.md`
- `_pages/home.md`
- `_pages/download.md`
- `_pages/overview.md`
- `_pages/documentation.md`
- `_pages/books.md`
- `_pages/articles.md`
- `_data/navigation.yml`
- `assets/css/arc42-org.css`
- `assets/css/nav-2026.css`
- `.impeccable/critique/2026-07-11T16-23-02Z__pages.md`

The current site should be treated as content and interaction evidence, not as a visual constraint. Preserve what already works, especially direct download access, the twelve-section mental model, skip links, current-page navigation, keyboard menu behavior, and the pragmatic voice.

## Recommended design process

### Phase 1: Content and structure

1. Inventory the exact content required on the three prototype pages.
2. Define the primary action and supporting decisions on each page.
3. Map content to page regions before styling.
4. Define metadata and lifecycle vocabulary.
5. Resolve the navigation taxonomy used in the prototype.

### Phase 2: Identity exploration

Create two or three tightly related explorations inside the Field Manual 42 direction. Vary:

- Typographic emphasis.
- Density.
- Use of rules.
- Relationship between paper and paper-blue surfaces.
- Imagery placement.

Do not create unrelated mood-board directions. The purpose is to tune one strong concept, not choose between generic themes.

### Phase 3: System and pages

1. Select the strongest exploration.
2. Build semantic tokens and core components.
3. Design the homepage.
4. Design Download with all required states.
5. Design the archive and filter states.
6. Adapt all three to mobile.
7. Test realistic long titles, missing images, German text, and dense metadata.

### Phase 4: Validation

Run scenario reviews with these perspectives:

- A first-time architect who wants a recommended template.
- An experienced docs-as-code user who wants a specific format immediately.
- A mobile visitor looking for a book or article.
- A keyboard-only user.
- A maintainer adding an older German resource with incomplete metadata.

Document remaining risks and any system rule that failed under realistic content.

## Final question the prototype must answer

> Can arc42 look unmistakably modern and ownable because it behaves like a clear, field-tested architecture manual, rather than because it borrows the visual language of contemporary developer tools?

If the answer is not clearly yes, revise the visual system before proposing a full-site migration.
