---
name: arc42 Design System
description: Visual guidelines for the arc42 architecture template portal.
colors:
  primary: "#374769"
  primary-hover: "#4b7ba3"
  neutral-bg: "#ffffff"
  neutral-text: "#3d4144"
  neutral-border: "#f2f3f3"
  neutral-border-strong: "#dddddd"
  slate: "#6f777d"
  masthead: "#2b3a57"
  on-masthead: "#ffffff"
  amber: "#ffc95c"
  amber-ink: "#4a3a0a"
  coral: "#ff5c7c"
  coral-deep: "#c22b47"
  emerald: "#2e9e67"
  green-wash: "#d9f7d3"
  green-ink: "#1b5e20"
typography:
  display:
    fontFamily: "'Libre Caslon Text', Georgia, serif"
    fontSize: "2.441rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "4px"
  md: "8px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.md}"
    padding: "10px 22px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
---

# Design System: arc42 Design System

## 0. Family

arc42.org is the flagship of a family of sites, and it is meant to be
recognisable as such. Three things are shared verbatim across every arc42 site
and are **not** per-site decisions:

1. **The type pair** — Libre Caslon Text (headings) over Atkinson Hyperlegible
   Next (body and UI), self-hosted, never from a font CDN.
2. **The masthead band** — one solid, saturated fill in the site's signature
   hue, with light text and a white logo. One hue per site; the band is the
   handshake that says "same family, different room".
3. **The accent tokens** — amber `#ffc95c`, coral `#ff5c7c`, emerald `#2e9e67`,
   identical hex on every site.

Everything else — layout, components, semantics — is per-site. The signature
hue for arc42.org is Navy; siblings use Signal Blue (docs) and violet
(quality).

Sibling design systems, kept in sync by hand:
`docs.arc42.org-site/DESIGN.md`, `quality.arc42.org-site/DESIGN.md`.

## 1. Overview

**Creative North Star: "The Architect's Blueprint"**

The arc42 visual design system is built to convey precision, structured clarity, and developer-oriented utility. Mirroring the logical layout of the arc42 documentation template itself, the site uses clean layout lines, a structured typographic grid, and highly visible primary actions to make template downloads and resources immediately accessible. 

This system rejects visual clutter, excessive animations, low-contrast text blocks, and floating glassmorphism shapes. Instead, it relies on solid borders, high contrast, and highly functional color roles to establish authority and trust.

**Key Characteristics:**
* **Structured & Modular**: Layout elements are organized in a clean, predictable grid.
* **High Contrast**: Dark slate and navy ink on clean white background ensures maximum legibility.
* **Frictionless Action**: Primary interactive elements like buttons stand out boldly to drive downloads and workshop registrations.

## 2. Colors

The color palette uses deep navy and slate grey to project professional engineering authority, with targeted functional accents.

### Primary
* **Navy Ink** (#374769): The core brand color, used for primary action buttons, headers, and major structural boundaries.
* **Steel Blue** (#4b7ba3): The hover state color for primary actions, providing a clear tactile highlight.

### Neutral
* **White Background** (#ffffff): Clean canvas background to ensure maximum legibility and lightness.
* **Dark Charcoal Text** (#3d4144): High-contrast text color for body paragraphs (contrast ratio > 4.5:1 against white).
* **Light Grey Border** (#f2f3f3): Thin, subtle borders to separate blocks of content and grid columns.
* **Slate Grey Theme** (#6f777d): Secondary neutral used for secondary text, sidebars, and subheadings.

### Masthead band
* **Masthead Navy** (#2b3a57): The header band, deepened from Navy Ink so the
  bar reads as its own surface rather than a large primary button. The Ukraine
  strip on the home page continues the same fill — two near-identical dark
  navies stacked would read as a seam.
* **On Masthead** (#ffffff): Logo, hover and current-page links.
* **On Masthead Muted** (rgba(255,255,255,.78)): Resting nav links, language
  pills, hamburger. 7.4:1 on the band.
* **Focus on the band**: a navy ring vanishes on navy, so header controls use a
  two-tone ring — `0 0 0 2px #fff, 0 0 0 4px var(--arc42-masthead)`.

### Accents — family tokens, shared verbatim with docs and quality
* **Amber** (#ffc95c) with **Amber Ink** (#4a3a0a): Highlights, tips, and the
  Download CTA on the masthead band. 7.2:1. Replaces the former #f5b700 gold.
* **Coral** (#ff5c7c): A warm spark for small accents and text-on-dark **only**.
  It measures 2.97:1 on white, so it must never carry body text or sit under
  white text.
* **Coral Deep** (#c22b47): The text- and fill-safe coral. 5.6:1 with white.
  Replaces the former Tomato #ff6347.
* **Emerald** (#2e9e67): Success and status marks. 3.4:1 on white — a mark or a
  large-text colour, not a body-text colour.
* **Green Wash** (#d9f7d3) with **Green Ink** (#1b5e20): Soft background green
  for training/certification callouts. 6.8:1. Replaces the former PaleGreen.

**The Rarity Rule.** Saturated accent colors are reserved exclusively for
specific functional triggers and highlights. They must make up less than 10% of
any given screen area — the masthead band is the deliberate exception, since it
is structure rather than accent.

## 3. Typography

**Display Font:** Libre Caslon Text, Georgia, serif — headings only
**Body Font:** Atkinson Hyperlegible Next, Atkinson Hyperlegible, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
**Label/Mono Font:** Monaco, Consolas, "Lucida Console", monospace

**Character:** The family pair. A high-contrast transitional serif carries the
headings and gives the site its voice; Atkinson Hyperlegible Next — designed
for low-vision readability, with letterforms that stay distinct at small sizes —
carries everything a reader actually has to work through.

**Self-hosted, always.** Both families ship from `assets/fonts/` (six woff2,
~107 KB, latin + latin-ext subsets) and are declared in `_sass/arc42-fonts.scss`.
No font CDN: a third-party font hop is a render-blocking dependency and a
privacy liability on a site that carries an imprint. Both are SIL OFL 1.1 and
the licences ship alongside them as `assets/fonts/OFL-*.txt`.

**The fallback-order rule.** Plain *Atkinson Hyperlegible* is a different family
with different metrics, so it stays second in the stack — the stack degrades to
the right letterforms before it reaches the system sans.

**The Two Voices Rule.** Serif is a display voice only: h1–h4 and card titles.
h5/h6, body copy, buttons, nav, chips, captions and every other label stay in
the sans. Headings that are really UI labels — drawer group titles, sidebar nav
titles, the theme's small-caps meta/share/related labels — are explicitly
excluded from the serif in `assets/css/main.scss`.

**The cascade note.** `assets/css/*.css` are served as separate stylesheets via
`@import url(...)`, which Sass hoists **above** the theme CSS. Any rule that has
to beat a theme rule at equal specificity — the heading faces, the masthead band
— must live in `main.scss` after the theme import, not in those files. They also
never see Sass variables, which is what `--arc42-font-sans` / `--arc42-font-serif`
are for.

### Hierarchy
* **Display** (Bold, 2.441rem, 1.2): Used for hero headers and main landing titles.
* **Headline (H1)** (Bold, 1.953rem, 1.25): Major page titles and section headers.
* **Title (H2/H3)** (Bold, 1.563rem / 1.25rem, 1.3): Subsections and sidebar headers.
* **Body** (Regular, 1rem, 1.5): Standard page content and reading blocks.
* **Label/Mono** (Regular, 0.75rem / 0.875rem, normal): Code snippets, inline technical terms, and metadata.

**The Balanced Line Rule.** Headings H1 through H3 must use `text-wrap: balance` to prevent awkward single-word wraps. Long body prose should target a line length of 65–75 characters (`max-width: 75ch`).

## 4. Elevation

The elevation style is strictly Flat & Sharp. Surfaces are clean and sit directly on the background canvas, divided by light borders rather than soft dimensional drop-shadows. Shadows are prohibited at rest to maintain a clean blueprint aesthetic.

**The Hover Feedback Rule.** Dimensional shadows are only permitted as an interactive response on button or card hover states to provide physical feedback.

## 5. Components

### Buttons
* **Shape**: Rounded corners with a 8px radius.
* **Primary (Navy)**: Background `#374769`, text `white`, bold weight, padded (`10px 22px`).
* **Hover State**: Shifts to `#4b7ba3` with a deep tactile drop-shadow: `0 12px 16px 0 rgba(0,0,0,0.24)`.
* **Accent Buttons**: Specialty buttons draw their fills from the family accent
  tokens — `.buttonGreen`/`.buttonImprove` (Green Wash with Green Ink),
  `.buttonReq4Arc` (Amber with Amber Ink), `.buttonRed`/`.buttonAnmeldung`
  (Coral Deep with white). Every pair clears 4.5:1.

### Cards / Containers
* **Corner Style**: 4px border-radius (`sm`) for legend containers and small callouts.
* **Background**: Light `#fafafa` or white, divided by a `#ddd` or `#f2f3f3` 1px border.
* **Border**: 1px solid, never double or thick accent borders.

### Navigation
* **Style**: A solid Masthead Navy band. Links rest at On Masthead Muted and
  resolve to solid white on hover and for the current page; the current page
  also carries a 2px underline at a 6px offset.
* **The CTA inverts**: Download is Amber with Amber Ink, not navy — a navy
  button on the navy band would disappear, and Download deserves to be the
  loudest element in the header. The drawer copy keeps the same fill: one CTA,
  one colour, wherever it appears.
* **The drawer stays light**: only the bar is banded. A full-height dark panel
  turns a menu into a second page.

## 6. Do's and Don'ts

### Do:
* **Do** use exact high-contrast body text colors (`#3d4144`) to guarantee readability.
* **Do** keep card borders clean and thin (1px solid `#f2f3f3` or `#ddd`).
* **Do** use `text-wrap: balance` on display headers to keep line lengths visually balanced.

### Don't:
* **Don't** load fonts from a third-party CDN (Google Fonts, Bunny, any other).
* **Don't** set the serif on buttons, nav, chips, captions or labels.
* **Don't** put white text on bright Coral `#ff5c7c` — use Coral Deep.
* **Don't** use low-contrast light gray text on tinted white backgrounds.
* **Don't** add colored accent side-stripe borders (e.g. `border-left: 4px solid ...` on cards or alerts).
* **Don't** use gradient text effects. Use solid Navy or slate for emphasis.
* **Don't** use decorative grid backgrounds or sketchy path diagrams.
* **Don't** apply global static drop-shadows to cards or panels at rest.
