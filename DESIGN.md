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
  accent-gold: "#f5b700"
  accent-green: "#98fb98"
  accent-red: "#ff6347"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', Arial, sans-serif"
    fontSize: "2.441rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', Arial, sans-serif"
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

### Accents
* **Amber Gold** (#f5b700): Highlight color for warnings, architecture request buttons, or high-priority news tags.
* **Success Green** (#98fb98): Soft background green for training/certification callouts and success alerts.
* **Tomato Red** (#ff6347): Urgent alert background color (e.g. support banner highlights).

**The Rarity Rule.** Saturated accent colors (gold, green, red) are reserved exclusively for specific functional triggers and highlights. They must make up less than 10% of any given screen area.

## 3. Typography

**Display Font:** System Sans-Serif (-apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial, sans-serif)
**Body Font:** System Sans-Serif (-apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial, sans-serif)
**Label/Mono Font:** Monaco, Consolas, "Lucida Console", monospace

**Character:** A highly readable system-sans pairing that provides visual speed, immediate rendering, and clean modern readability across all devices.

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
* **Accent Buttons**: Specialty buttons like `.buttonGreen` (Pale Green with black text) and `.buttonReq4Arc` (Amber Gold with black text) are used for specific actions (trainings, architecture specs).

### Cards / Containers
* **Corner Style**: 4px border-radius (`sm`) for legend containers and small callouts.
* **Background**: Light `#fafafa` or white, divided by a `#ddd` or `#f2f3f3` 1px border.
* **Border**: 1px solid, never double or thick accent borders.

### Navigation
* **Style**: Minimal top masthead links using `#6f777d` (Slate Grey), changing to a darker tone on hover.

## 6. Do's and Don'ts

### Do:
* **Do** use exact high-contrast body text colors (`#3d4144`) to guarantee readability.
* **Do** keep card borders clean and thin (1px solid `#f2f3f3` or `#ddd`).
* **Do** use `text-wrap: balance` on display headers to keep line lengths visually balanced.

### Don't:
* **Don't** use low-contrast light gray text on tinted white backgrounds.
* **Don't** add colored accent side-stripe borders (e.g. `border-left: 4px solid ...` on cards or alerts).
* **Don't** use gradient text effects. Use solid Navy or slate for emphasis.
* **Don't** use decorative grid backgrounds or sketchy path diagrams.
* **Don't** apply global static drop-shadows to cards or panels at rest.
