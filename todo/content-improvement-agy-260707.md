# Content Improvement Verdict (2026-07-07)

This document contains a comprehensive analysis and actionable proposals to improve the content, clarity, layout, and maintenance of the top-level navigation pages of the **arc42.org** website. 

The site is built with Jekyll, rendering Markdown files located in the `_pages/` directory.

---

## Executive Summary & Quick Wins

1. **Reduce Extreme Verbosity & Scrolling Fatigue**: 
   * **[Overview Page](file:///Users/gernotstarke/projects/arc42/arc42.org-site/_pages/overview.md)** is excessively long because it duplicates all 12 template sections: once in a graphical grid and once as 12 large lazy-loading feature rows. 
   * **[Download Page](file:///Users/gernotstarke/projects/arc42/arc42.org-site/_pages/download.md)** is cluttered with very detailed manuals/troubleshooting for commercial/legacy modeling tools (Enterprise Architect, IBM Rhapsody, Confluence v4/v5).
2. **Expand Sparse Pages**: 
   * **[Docs Page](file:///Users/gernotstarke/projects/arc42/arc42.org-site/_pages/documentation.md)** is currently an empty portal. It should be enriched to explain the "Docs-as-code" philosophy (using AsciiDoc, docToolchain, Markdown).
   * **[Examples Page](file:///Users/gernotstarke/projects/arc42/arc42.org-site/_pages/examples.md)** lists only 4 online examples (half of which are in German). It needs more diverse, tagged, and modern examples.
3. **Eliminate Redundancy and Outdated Content**:
   * "Painless documentation" text is verbatim duplicated on both **[Docs Page](file:///Users/gernotstarke/projects/arc42/arc42.org-site/_pages/documentation.md)** and **[Why Page](file:///Users/gernotstarke/projects/arc42/arc42.org-site/_pages/why.md)**.
   * Books advertised on **[Home Page](file:///Users/gernotstarke/projects/arc42/arc42.org-site/_pages/home.md)** and **[Examples Page](file:///Users/gernotstarke/projects/arc42/arc42.org-site/_pages/examples.md)** display outdated editions (e.g., highlighting Vol 2 from 2021 or 2nd edition instead of the 3rd edition from 2023 or the 20th Anniversary Edition).
   * Free anniversary book offer references "free of charge until September 2025," which is now in the past (current date is July 2026).
4. **Professionalize Copy & UX Terminology**:
   * Change navigation item `More...` to a descriptive term like `Publications` or `Resources`.
   * Eliminate distracting, oversized emojis (`80px` winking face in `more.md`) and meta-developer comments (e.g., the logo comment in `about.md`).

---

## Detailed Page-by-Page Analysis & Proposals

### 1. Home / Landing Page (`/` $\rightarrow$ [home.md](file:///Users/gernotstarke/projects/arc42/arc42.org-site/_pages/home.md))

* **Verbosity & Suitability**:
  * Good length and structure, but overuses **bolding** inside paragraphs, which increases visual noise and reduces readability.
  * The "News" column in the top feature row is asymmetric compared to the "Template" and "Trainings" columns (it lacks an image and standard button).
* **Outdated & Missing Details**:
  * **No Direct Download CTA**: The primary business goal of the site is to let users download the templates (as specified in [PRODUCT.md](file:///Users/gernotstarke/projects/arc42/arc42.org-site/PRODUCT.md)). There is no direct "Download arc42" button on the homepage; users must click through multiple links.
  * **Outdated News**: The news section highlights *arc42 by Example Vol. 2* (from 2021) and the *Software Architecture Foundation* book (from 2021), completely ignoring the 3rd Edition (2023) and the 20th Anniversary Edition (2025).
* **Actionable Proposals**:
  1. Add a high-visibility, primary call-to-action button in the hero header: `Download arc42 Template`.
  2. Update the "News" section to highlight the latest publications (3rd Edition / Anniversary Edition) and remove or label 2021 releases as older resources.
  3. Replace the generic `read more...` link text on columns with descriptive text like `Explore Template`, `See Training Details`, `View Canvas Layout`.
  4. Change H1 `# Learn more!` to H2 `## Learn more!` for better SEO structure, and replace the invalid HTML nesting of `<button>` inside `<a>` at the bottom of the page.

---

### 2. Overview Page (`/overview/` $\rightarrow$ [overview.md](file:///Users/gernotstarke/projects/arc42/arc42.org-site/_pages/overview.md))

* **Verbosity & Suitability**:
  * **Extremely Overly Detailed**: The page has all 12 sections defined twice. First, in a nice compact interactive grid, and then in 12 huge alternating blocks with large images and text paragraphs.
  * Users experience severe scrolling fatigue. The page is billed as a "One Minute Overview," but takes 5+ minutes to scroll and digest.
* **UX/Click-Maze issues**:
  * Clicking on a grid cell scrolls down the page to a feature row, which then contains a button pointing to an external site (`docs.arc42.org/section-X/`). This extra hop is frustrating.
* **Actionable Proposals**:
  1. Keep the excellent grid layout at the top.
  2. Eliminate the 12 large alternating feature rows below the grid.
  3. Make the grid cells **directly link** to the respective sections on the official documentation site `docs.arc42.org/section-X/`.
  4. If detailed descriptions must be kept on this page, combine them into a single-column, clean, tight vertical list without large images, or put them in tabs/accordions.
  5. Remove the Flaticon attribution under Section 11 or move all attributions to a single, unobtrusive footer note.

---

### 3. Docs Page (`/documentation/` $\rightarrow$ [documentation.md](file:///Users/gernotstarke/projects/arc42/arc42.org-site/_pages/documentation.md))

* **Verbosity & Suitability**:
  * **Too Sparse**: The page is just an empty navigation hub containing links to `/why/`, `/overview/`, `docs.arc42.org`, and `faq.arc42.org`.
  * It does not provide any unique context or content of its own.
* **Unhelpful Duplication**:
  * The entire "Painless documentation" section is a verbatim duplicate of the text in `why.md`.
* **Actionable Proposals**:
  1. Remove the duplicated "Painless documentation" section.
  2. Enrich the page by adding a brief guide on the **Docs-as-Code** philosophy (using AsciiDoc, Markdown, git, and docToolchain), which is a key selling point of the arc42 ecosystem.
  3. Clearly distinguish between "Template Structure (Overview)" and "Usage Guides & FAQs."

---

### 4. More Page (`/more/` $\rightarrow$ [more.md](file:///Users/gernotstarke/projects/arc42/arc42.org-site/_pages/more.md))

* **Verbosity & Suitability**:
  * **Vague Title**: "More..." is a non-descriptive menu item. Visitors do not know they will find books, articles, talks, and videos here.
  * The winking emoji in the excerpt is rendered at `font-size: 80px`, which is visually distracting and unprofessional.
  * The page is too long due to 6 alternating feature rows with giant images.
* **Actionable Proposals**:
  1. Rename the page and navigation label to `Publications` or `Resources`.
  2. Remove the oversized winking emoji.
  3. Re-layout the page as a clean grid of cards (e.g., a card for Books, a card for Articles, a card for Videos, etc.) instead of long alternating bands.

---

### 5. Examples Page (`/examples/` $\rightarrow$ [examples.md](file:///Users/gernotstarke/projects/arc42/arc42.org-site/_pages/examples.md))

* **Verbosity & Suitability**:
  * **Too Sparse & Outdated**: Only 4 online examples are listed, and 2 of them are in German.
  * The featured book section at the top advertises the *2nd edition* of the book with an old cover image, rather than the 3rd edition (2023) or the Anniversary Edition (2025).
* **Missing Details**:
  * The online examples lack metadata. Users cannot tell what formats they are written in (e.g. PDF, AsciiDoc, Confluence, Markdown) or if their source code repository is public.
* **Actionable Proposals**:
  1. Update the featured book cover to the **3rd edition** or the **Anniversary Edition**.
  2. Add new real-world examples (for instance, linking to modern public GitHub repos using arc42).
  3. Add metadata badges/tags to each example, such as: `Language: [EN / DE]`, `Format: [AsciiDoc / Markdown / Confluence]`, `Tech Stack: [Java / Gradle / TS]`.

---

### 6. Training Page (`/learn/` $\rightarrow$ [learn.md](file:///Users/gernotstarke/projects/arc42/arc42.org-site/_pages/learn.md))

* **Verbosity & Suitability**:
  * **Title Inconsistency**: The page heading is "Learn architecture", but the navigation title is "Training".
  * The content is heavily focused on Peter and Gernot's commercial iSAQB Foundation training courses in Munich, Frankfurt, and Vienna. It lacks general information on how to learn arc42 on your own.
  * The button "Get some impressions" at the top leads to a gallery of classroom photos, which feels random for a developer wanting to learn.
* **Actionable Proposals**:
  1. Rename the navigation title to `Training` or `Training & Certification` and align the H1 title.
  2. Split the page into two clear sections:
     * **Self-Study**: Guide readers to books, free resources, videos, and documentation.
     * **Instructor-Led Seminars**: Promote the iSAQB certified training, highlighting the "dual-trainer" mode and linking to the dates.
  3. Rename "Get some impressions" to "View Training Gallery" and move it lower, near the training details.

---

### 7. Download Page (`/download/` $\rightarrow$ [download.md](file:///Users/gernotstarke/projects/arc42/arc42.org-site/_pages/download.md))

* **Verbosity & Suitability**:
  * **Overly Detailed & Cluttered**: The page contains extensive manual instructions and troubleshooting guides for modeling tools like Enterprise Architect and IBM Rhapsody. These detail-heavy blocks hijack the page's primary role as a simple download site.
  * The main "File-based formats" table has 13 columns. This is **not mobile-responsive** and breaks layouts on small devices.
* **Outdated Elements**:
  * The section for Confluence v4/v5 legacy templates (released over a decade ago) is unnecessary clutter.
  * The Confluence warnings sound overly negative ("Unfortunately, we cannot generate... you're on your own...").
* **Actionable Proposals**:
  1. **Redesign the Table**: Use a responsive selector (e.g., a dropdown or tab buttons for languages: "English", "Deutsch", etc.) showing only the download formats for that language. This avoids the massive 13-column desktop grid.
  2. **Relocate Heavy Manuals**: Move the detailed walkthroughs and configurations for Enterprise Architect and IBM Rhapsody to separate subpages (e.g., `/download/enterprise-architect/`) or to the main documentation wiki (`docs.arc42.org`), leaving clean download buttons on the main page.
  3. Archive the Confluence v4/v5 legacy downloads.
  4. Rephrase Confluence warnings constructively (e.g., "For Confluence integration, we recommend using AsciiDoc and running the `asciidoc2confluence` script to automate synchronization...").

---

### 8. About Page (`/about/` $\rightarrow$ [about.md](file:///Users/gernotstarke/projects/arc42/arc42.org-site/_pages/about.md))

* **Verbosity & Suitability**:
  * Introduces the primary contributors well, but neglects the international translation community.
  * Has a strange developer-meta comment at the bottom: `### Our Logo (to have a URL for this logo, e.g. for demo applications)`.
* **Actionable Proposals**:
  1. Remove the developer comment about the logo. If a stable URL is needed, list the image asset in a developer resources section or keep it hidden in comment tags.
  2. Add a **Translators & Contributors** credit section to recognize the people who translated arc42 into Czech, Chinese, Ukrainian, Portuguese, Hungarian, etc. (names are currently scattered in the download page or not mentioned at all).

---

### 9. Search Page (`/search/` $\rightarrow$ [search.html](file:///Users/gernotstarke/projects/arc42/arc42.org-site/_pages/search.html))

* **Verbosity & Suitability**:
  * Empty skeleton. A user landing on it only sees a text input.
* **Actionable Proposals**:
  1. Add a brief heading and description, e.g., "Search arc42 Site" and "Find books, articles, examples, templates, and documentation sections."
