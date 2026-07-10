# 2026 Layout Migration — Session Summary (2026-07-08 → 07-10)

Branch: `layout-update-2026`. This session took the migration from "home + download done"
to **site-wide complete, critiqued, and hardened**.

## What happened, in order

1. **Phases 2–4 — all content pages migrated** (committed by GS as `1be5ecf`):
   - **Overview**: 24 duplicate feature-rows deleted; grid tiles link straight to `docs.arc42.org/section-X/`.
   - **Training**: H1 aligned with nav; split Self-study vs Instructor-led; `.training-section` dates.
   - **Publications** (`/more/`): renamed from "More…", 6 feature bands → 4-card grid.
   - **Docs**: de-duplicated from `/why/`; new Docs-as-Code section (AsciiDoc/Markdown, git, docToolchain).
   - **Examples**: 3rd-edition cover; example cards with language/format/tech tags.
   - **Method / Canvas / Why**: gradient heroes, copy tightened, redundancy removed
     ("template = where, method = how").
2. **Visual QA** (headless Firefox) surfaced two global bugs, fixed in `main.scss`/CSS:
   the theme's 0.3s `intro` fade-in (violated the no-load-animation rule; hid pages from
   pre-paint renderers) and floated images bleeding across sections on `/why/`.
3. **`/impeccable critique`** scored the redesign **24/40** (full report: `todo/critique-fable.md`).
4. **Critique follow-up + user decisions**, in separate commits:

| Commit | Change |
|---|---|
| `9f10468` | chore(make): clean wipes Docker cache volumes |
| `738e3c9` | Ukraine strip only on home/download; naming: Gallery / Publications / Training |
| `44c2258` | Download builder version honesty (v9 vs v8.2 rows; data from `version.properties`; all 288 dist zips verified) |
| `af0edc1` | Mobile Download CTA; `aria-current` page markers (needed plain `{% include %}`, not `include_cached`); "Menu" name for icon-only toggle |
| `c431172` | Kicker dial-back: sentence-case slate hero intros; card kickers folded into titles (PRODUCT.md anti-reference honored) |
| `84aed6b` | Tier-2 sweep: 12 secondary pages lose 2015 photo-overlay headers; navy `.page__title` |
| `d152d1d` | Home reflow: "What is arc42?" before the training ads; date list bounded |
| `b4baa89` | Overview grid: mobile single-column 1–12 order; flat system tiles |
| `64ccfb6` | Footer: valid markup, palette icons, readable copyright |
| `853920c` | Inline JS → `assets/js/download-builder.js` + `quick-download.js` (defer, CSP-friendly, `aria-pressed`) |
| `6f2130f` | Palette → `--arc42-*` CSS design tokens at `:root` |
| `f350d8d` | Full-bleed via `100cqw` container-query units (scrollbar-safe; vw+clip fallback) |
| `f192fce` | New ARC42 wordmark (`assets/ARC42_black.svg`) in the masthead |

## Design system state

- Two-tier headers: full gradient hero (landing pages) vs clean navy title (library/utility pages).
- Tokens: `--arc42-primary/-hover/-slate/-ink/-ink-strong/-text-muted/-border/-border-light`
  in `arc42-org.css`, used across `nav-2026.css` and `grid.css`.
- Reusable blocks: `.dl-hero`, `.training-section`, `.card-grid`/`.res-card`/`.res-tag`,
  `.dl-details`, `.dlb` builder.

## Gotchas worth remembering

- `include_cached` freezes one page's render site-wide — no per-page attributes in cached includes.
- Sass hoists plain `@import url()` above theme CSS: theme-overriding rules must live in `main.scss`;
  the custom CSS files are served separately, not inlined.
- Headless-Firefox screenshots need a fresh `--profile` per CSS change (aggressive caching).

## Verification

Every commit: `make site` + `make check-links`. Baseline improved **52 → 50** pre-existing
html-proofer failures. Desktop (1366px) + mobile (390px) screenshots at each step.

## Still open

- subtle-ads **backend** (separate repo): cap date output, strip the internal "gs@CGN" stamp.
- Open decisions: `_data/trainings.yml` vs live backend, home news refresh, EA/Rhapsody subpages.
- Re-run `/impeccable critique` to measure against the 24/40 snapshot.
