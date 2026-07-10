# Impeccable Critique Findings - 2026-07-07

**Target**: `_pages/home.md` (Slug: `pages-home-md`)
**Method**: dual-agent (A: 4f89c920-44ae-47de-9017-d2952c5d215e · B: cf185458-5d39-4312-acc5-2ae858159f53)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Button hover state contrast is low (3.6:1), and color changes on hover feel unstable. |
| 2 | Match System / Real World | 3 | High domain relevance but repetitive, non-standard "read more..." buttons. |
| 3 | User Control and Freedom | 3 | Easy navigation back/forth, but lacks direct landing path to primary action (downloads). |
| 4 | Consistency and Standards | 2 | Inconsistent button classes, unbalanced grid row layout, and invalid nested elements. |
| 5 | Error Prevention | 3 | Low input count reduces error vectors, but nested elements break keyboard nav. |
| 6 | Recognition Rather Than Recall | 2 | Repetitive button labels force users to rely on visual proximity rather than clear intent. |
| 7 | Flexibility and Efficiency | 2 | No direct shortcuts or direct download path on the homepage. |
| 8 | Aesthetic and Minimalist Design | 2 | Excessive bolding, unaligned cards in grid rows, custom non-system background colors, and distracting heartbeat animation. |
| 9 | Error Recovery | 3 | No forms/interactive flows to cause user errors. |
| 10 | Help and Documentation | 3 | Documentation is linked, though navigation hierarchy is cluttered. |
| **Total** | | **25/40** | **Acceptable** |

---

## Anti-Patterns Verdict

*   **LLM Assessment**:
    *   The page does not present standard modern "AI-slop" characteristics (like neon purple gradients or excessive glassmorphism). Instead, it displays legacy design debt and manual layout/semantic inconsistencies.
    *   Repetitive, generic "read more..." button labels are present on multiple columns.
    *   The first grid row is asymmetrical because the "News" column has bullet points, no image, and no button, violating visual symmetry.
    *   Bolding is heavily overused across both the hero excerpt and the bottom paragraphs, causing high visual noise.
    *   Direct inline styling patterns (such as custom background colors like `#e7ddd8` in [ukraine.css](file:///Users/gernotstarke/projects/arc42/arc42.org-site/assets/css/ukraine.css#L20) that don't match the design system) are used.
*   **Deterministic Scan**:
    *   The automated regex scanner returned 0 findings. This is because [home.md](file:///Users/gernotstarke/projects/arc42/arc42.org-site/_pages/home.md) is a Markdown file containing frontmatter configuration rather than raw HTML or CSS structures. It lacks the typical tags and class patterns targeted by the linter's regex matches.
*   **Visual Overlays**:
    *   No visual overlays are available because browser automation and injection were bypassed in this local scan.

---

## Overall Impression
The page is functional and speaks the right technical language for its audience, but suffers from significant usability, layout asymmetry, and accessibility issues. The lack of a clear, direct "Download" call-to-action on the primary landing page fails the core product purpose.

---

## What's Working
1.  **Clear Domain Relevance**: Terminology like "Jekyll", "AsciiDoc", and "iSAQB certification" is highly tailored and appropriate for software architects and developers.
2.  **Comprehensive Links**: Links to books, canvas, method, and trainings are present, ensuring resources are discoverable.

---

## Priority Issues

*   **[P1] Missing Primary Call-to-Action (Download Button)**
    *   **Why it matters**: The primary purpose of the site (per [PRODUCT.md](file:///Users/gernotstarke/projects/arc42/arc42.org-site/PRODUCT.md)) is to download the arc42 templates. [home.md](file:///Users/gernotstarke/projects/arc42/arc42.org-site/_pages/home.md) has no direct download button. Users must navigate through "Overview" or "Template" (using "read more...") to find downloads. This increases friction and user abandonment.
    *   **Fix**: Add a prominent primary call-to-action button (e.g., "Download arc42 Templates") in the hero header section, styled as a primary navy button with proper hover states.
    *   **Suggested command**: `$impeccable layout`
*   **[P1] Invalid HTML Nesting**
    *   **Why it matters**: The bottom CTA in [home.md](file:///Users/gernotstarke/projects/arc42/arc42.org-site/_pages/home.md#L110) uses `<a href="..."><button class="...">Training site</button></a>`. This is invalid HTML. Having a focusable `<button>` inside an `<a>` anchor tag breaks screen readers and keyboard navigation, causing poor accessibility.
    *   **Fix**: Replace the `<button>` element with a standard link styled as a button using Jekyll classes: `<a href="https://arc42.de/schulungen" class="btn btn--primary buttonGreen">Training site</a>`.
    *   **Suggested command**: `$impeccable polish`
*   **[P1] Low Color Contrast on Ukraine Banner and Button Hover States**
    *   **Why it matters**: The yellow text/icon `#fed401` on the beige background `#e7ddd8` (in [ukraine.css](file:///Users/gernotstarke/projects/arc42/arc42.org-site/assets/css/ukraine.css#L12)) has a contrast ratio of ~1.03:1, which is completely illegible. Additionally, button hover states use `#EEE8AA` (PaleGoldenrod) text on a `#4b7ba3` (Steel Blue) background (3.6:1 contrast), violating WCAG AA minimum contrast of 4.5:1.
    *   **Fix**:
        1.  Adjust the Ukraine banner colors to use the design system's background or high-contrast tones (e.g., Navy background or clear dark gray text/icon).
        2.  Adjust the button hover text color from `#EEE8AA` to `#ffffff` (white) or another high-contrast color.
    *   **Suggested command**: `$impeccable colorize`
*   **[P2] Generic "read more..." Links (Accessibility)**
    *   **Why it matters**: The page uses five identical "read more..." buttons. Screen reader users navigating by links will hear "read more... link" repeatedly, with no context on what they are reading more about.
    *   **Fix**: Use descriptive link text for buttons, e.g., "Get the Template", "See Trainings", "Explore the Method", "Browse Reading Material", "View Canvas".
    *   **Suggested command**: `$impeccable clarify`
*   **[P2] Unbalanced Grid Alignment and Missing Hierarchy**
    *   **Why it matters**: The `template_training_news` grid row is visually unbalanced. Columns 1 and 2 contain images and buttons, whereas Column 3 (News) has text bullets with no image or button. This disrupts the visual rhythm. Additionally, the bottom 5 paragraphs explaining arc42 lack a heading, and the `# Learn more!` heading creates a second H1, violating SEO best practices.
    *   **Fix**:
        1.  Balance the news column (e.g., move it to a separate section, or add a consistent image/button structure to it).
        2.  Group the bottom paragraphs under a clear `## What is arc42?` or similar H2 heading, and reduce the excessive bolding.
        3.  Change `# Learn more!` to `## Learn more!`.
    *   **Suggested command**: `$impeccable layout`

---

## Persona Red Flags

*   **Jordan (First-Timer)**: Wants to download the template but finds no "Download" button on the homepage. Confused by five identical "read more..." buttons. The heartbeat animation and the raw HTML elements look unstable and reduce trust.
*   **Sam (Accessibility-Dependent User)**: Relies on screen reader and keyboard navigation. The nested `<a href="..."><button>` element breaks screen readers. The yellow text on beige background is invisible. The "read more..." buttons provide no context, leading to a frustrating experience.
*   **Alex (Power User)**: Expects quick, direct navigation to templates and documentation. Frustrated by the lack of keyboard shortcuts and the multi-click flow required to reach downloads.

---

## Minor Observations
*   The heartbeat animation (`heart beat children`) is quite loud/distracting on an otherwise static and professional landing page.
*   The use of raw HTML `<button>` tags with custom classes like `margin-top` overrides standard theme spacing.
*   The stylesheet contains a link to `w3schools` in the credits, which looks non-professional.

---

## Questions to Consider
*   What if we replaced the static splash layout hero with a dedicated split layout showcasing the template download options immediately?
*   Does the homepage really need to show news bullets in the main feature row, or could news be grouped in a simpler secondary list below the fold?
*   What would a confident, print-inspired version of the arc42 homepage look like if it strictly adhered to "The Architect's Blueprint"?
