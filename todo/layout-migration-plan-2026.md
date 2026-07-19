# arc42.org — Layout Migration Plan 2026

Branch: `layout-update-2026`. Design basis: [`DESIGN.md`](../DESIGN.md) ("Architect's Blueprint"),
[`PRODUCT.md`](../PRODUCT.md), the Impeccable review ([`impeccable-criticy-agy.md`](impeccable-criticy-agy.md)),
and the content audit ([`content-improvement-agy-260707.md`](content-improvement-agy-260707.md)).

## Status

| Area | State |
|------|-------|
| Global navigation (priority links + "More…" hamburger drawer) | ✅ done |
| Homepage — **Rev A** (download CTA, 3 balanced cards, training dates section, single H1) | ✅ done |
| Download — **Rev A** (language finder, tool accordions, version-history disclosure) | ✅ done |
| Global contrast fixes (button-hover, Ukraine banner) | ✅ done |
| Overview — grid links to docs.arc42.org, 24 feature-rows deleted, gradient hero | ✅ done |
| Training — self-study vs instructor-led split, gradient hero, `.training-section` dates | ✅ done |
| Footer INNOQ logo `alt` (cleared 26 html-proofer failures site-wide) | ✅ done |
| Remaining pages | ⬜ this plan |

## Reusable building blocks now available

These were introduced for Home/Download and should be reused everywhere:

- **`.btn--arc42`** (solid navy CTA) and **`.btn--arc42-outline`** (secondary) — `assets/css/arc42-org.css`.
- **`.training-section`** — the faint success-green training callout wrapping the live `subtle-ads` dates + a `trainings.arc42.org` register button. Drop into any page that should surface trainings.
- **`.dl-details`** — accessible `<details>` accordion styling for collapsing long/secondary content.
- **Per-action hero button class** — `_includes/page__hero.html` now honours `header.actions[].class` (default `btn--light-outline`), so any splash/overlay hero can get a navy primary action.
- **Navy/steel/slate palette + flat-and-sharp rules** from `DESIGN.md`.

## Cross-cutting tasks (do once, affects many pages)

1. ✅ **Done (Phase 1).** Fixed the invalid `<a><button>…</button></a>` nesting site-wide — 9 buttons
   across `overview.md`, `examples.md`, `learn.md`, `canvas.md`, `why.md`, `documentation.md` unwrapped to
   valid links (styling preserved; full restyle to come with each page's migration). Clears the Impeccable
   **P1 accessibility** finding.
2. **`layout: splash` audit** — splash is meant for landing pages, yet it's used on content pages
   (overview, more, examples, learn, canvas, method, gallery). Content pages generally read better as
   `layout: single` (with `toc: true` where long). Decide per page below.
3. **Offline-build risk** — `subtle-ads` pulls htmx from `unpkg` + a Vercel backend. It degrades to a
   `trainings.arc42.org` link, but for the vendored/offline build goal consider vendoring htmx or making
   the fallback the default. (Tracked separately; not blocking.)
4. **Descriptive links & single H1 & reduced bolding** — apply the Home/Download treatment generally.

## Per-page migration (priority order)

| # | Page | Layout / size | Priority | Core work | Effort |
|---|------|---------------|----------|-----------|--------|
| 1 | **Overview** `/overview/` | splash · 348 ln · **24 feature_rows** | ✅ done | Grid kept, cells link to `docs.arc42.org/section-X/`; feature-rows deleted; gradient hero + ua-strip + `.training-section` (kept `layout: splash` for consistency with Home/Download instead of switching to `single`). | L |
| 2 | **Training** `/learn/` | splash · 63 ln | ✅ done | H1 = "Training"; **Self-study** vs **Instructor-led** split; `.training-section` dates; gallery link moved to bottom as "View training gallery"; links now point to `trainings.arc42.org`. | M |
| 3 | **Publications** `/more/` | splash · 113 ln · 6 rows | ✅ done | Title **Publications**; emoji removed; 6 feature bands → 4-card `.card-grid` (Books/Articles/Videos/Talks) + "Looking for documentation?" pointer to docs/FAQ; gradient hero. | M |
| 4 | **Docs** `/documentation/` | splash · 80 ln (sparse) | ✅ done | "Painless documentation" duplicate removed; **Docs-as-Code** section added (AsciiDoc/Markdown, git, docToolchain); split "Template structure" vs "Guides & FAQ"; `.btn--arc42` download CTA; gradient hero + `.training-section`. | M |
| 5 | **Examples** `/examples/` | splash · 68 ln (sparse) | ✅ done | Featured cover → **3rd edition** (`arc42-by-example-3rd.webp`) + Vol 2 (embedded/IoT) pointer; 4 online examples as `.res-card`s with `.res-tag` metadata chips (language/format/tech); gradient hero + `.training-section`. | M |
| 6 | **About** `/about/` | single · 61 ln | ✅ done | Removed the dev logo comment (now a clean "Logo" section); expanded contributors into a **Translators & contributors** credit list. | S |
| 7 | **Search** `/search/` | single · 21 ln | ✅ done | Added an H1 title, a one-line description, and an accessible label for the input. | S |
| 8 | **Method** `/method/` | splash · 131 ln · 2 rows | ✅ done | Gradient hero; "template = where, method = how" intro (kills the What/How duplication with Overview); feature-row remnant folded into a "Clarify requirements" section; copy tightened ("cross-sectional"→cross-cutting, rambling paragraphs condensed); docs.arc42.org section links; closing CTA pair. | S |
| 9 | **Canvas / Why** | splash / single | ✅ done | Canvas: 3 canvases as `.res-card`s with descriptive links (no more "here"), navy CTA, examples kept. Why: gradient hero (H1 kept provocative), 4 problem sections copy-edited, the 3 overlapping "effective/painless/lean" sections merged into one "How arc42 fixes this", CTA pair. Both now `layout: splash` + ua-strip. | S |
| — | Books, Articles, Videos, Talks, Contact, License, Gallery | single | ✅ done (light) | Spot-fixes applied: articles.md "here"-links made descriptive + ADOC workshop note now points to `/learn/` + trainings.arc42.org; the four vague publication hero excerpts ("we can't stop 😜" etc.) rewritten as informative one-liners. Photo headers kept (single layout). | S |

Effort: **S** ≈ <30 min, **M** ≈ 1–2 h, **L** ≈ half-day (mostly content decisions, not code).

## Detail on the two high-priority pages

### 1. Overview (`/overview/`) — the big one
The page defines all 12 arc42 sections **twice**: a compact interactive grid at the top, then 24
feature-row blocks (12 sections × image+text) below → "One-Minute Overview" that scrolls for minutes.
- **Keep** the grid.
- **Delete** the 24 feature-row blocks and their data.
- **Link** each grid cell straight to `docs.arc42.org/section-X/` (removes the extra in-page hop).
- If per-section blurbs must stay, use a single tight list or `.dl-details` accordions — no giant images.
- Switch `layout: splash` → `single` (`classes: wide`), fix the button.

### 2. Training (`/learn/`)
- Rename the H1 from "Learn architecture" to **Training** (matches nav).
- Two clear sections: **Self-study** (books, videos, free docs) and **Instructor-led seminars**
  (iSAQB-certified, dual-trainer mode) with the `.training-section` dates block.
- Move "Get some impressions" gallery link lower and rename to "View training gallery".

## Suggested phasing

- ✅ **Phase 1 (quick, high-trust) — done:** cross-cutting button fix on all 6 pages + About/Search tidy-ups.
- ✅ **Phase 2 (highest value) — done:** Overview trim, Training restructure (+ footer logo `alt` fix).
- ✅ **Phase 3 — done:** Publications rename/re-layout, Docs enrichment, Examples refresh. New reusable blocks: `.card-grid`/`.res-card` (linked resource cards) + `.res-tag` (metadata chips) in `arc42-org.css`.
- ✅ **Phase 4 — done:** Method/Canvas/Why migrated (gradient hero + copy/redundancy pass), secondary pages spot-fixed (descriptive links, informative excerpts). All four phases complete — site-wide migration finished; remaining items live under "Open decisions".
- ✅ **Critique follow-up (2026-07-09, committed separately):** the three P1s from `todo/critique-fable.md` — download-builder version honesty (per-chip versions from `<lang>/version.properties`, grouped v9/v8.2 rows, all 288 dist zips verified to exist), mobile nav (Download CTA beside the hamburger, `aria-current` page markers — required plain `{% include masthead %}` instead of `include_cached`, sr-only "Menu" name), kicker dial-back (sentence-case slate hero intros, card kickers folded into titles/text). Plus: Ukraine strip restricted to home/download, naming fixes (Gallery/Publications/Training), and the **tier-2 sweep** (12 secondary pages lose their 2015 photo-overlay headers; `.page__title` aligned with hero titles). html-proofer baseline improved 52 → 50.
- ✅ **Critique P2s + minors + tech-debt (2026-07-09, 7 commits):** home reflow (explanation before ads; date list bounded at 320px pending a backend cap), overview grid (mobile 1–12 order, flat bordered tiles, reduced-motion-gated), footer cleanup, inline JS → `assets/js/{download-builder,quick-download}.js` (defer/CSP-friendly, `aria-pressed` everywhere), palette → `--arc42-*` design tokens at `:root`, full-bleed via `100cqw` container-query units (scrollbar-safe; vw+clip fallback). Still external: subtle-ads backend should cap dates + strip the "gs@CGN" stamp. New logo SVGs landed (`assets/ARC42_black.svg`/`_white.svg`) — masthead swap now possible.
- ✅ **Visual QA (headless Firefox, all 8 migrated pages):** found + fixed two global issues. (1) The theme's 0.3s `intro` fade-in (opacity 0→1 on masthead/main/footer) violates the Blueprint no-load-animation rule and leaves pages invisible to pre-paint renderers — disabled via `animation: none` **in `main.scss` after the theme import** (must live there: Sass hoists the plain `@import url(...)` lines above the theme CSS, so overrides inside arc42-org.css lose the cascade for theme-set properties). (2) `.page__content h2 { clear: both }` so floated images (e.g. /why/) can't bleed into the next section.

## Open decisions (need your input)

- **New logo** asset → `/images/arc42-logo-2026.svg` (or tell me the filename).
- **Training data source**: keep the live `subtle-ads` backend, or move to a maintainable `_data/trainings.yml`?
- **News refresh** (home): titles/links for the Anniversary / 3rd-edition books.
- **Overview**: OK to delete the 12 duplicate section blocks and link cells to `docs.arc42.org`?
- **Heavy tool manuals** (EA/Rhapsody) are currently accordioned on Download — move to dedicated
  subpages (`/download/enterprise-architect/`) later, or leave collapsed?
