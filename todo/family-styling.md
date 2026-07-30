# arc42.org — Family Styling Implementation

Status: proposal, ready to implement · 2026-07-30
Scope: arc42.org-site only. Goal: make arc42.org read as the flagship of the
arc42 site family, visually rhyming with docs.arc42.org and quality.arc42.org.

## Background — the family grammar

quality.arc42.org (violet `#682d63`) and docs.arc42.org (Signal Blue `#1675b9`,
Deep Blue `#0e4f80` masthead) were both redesigned in 2026 and already share a
deliberate grammar — see `docs.arc42.org-site/DESIGN.md` ("family-aware") and
`quality.arc42.org-site/DESIGN.md`:

1. **Typography pair**: Libre Caslon Text (headings, 700) over
   Atkinson Hyperlegible Next (body/UI), both self-hosted (SIL OFL).
2. **Masthead band**: a solid, saturated fill in the site's *signature hue*
   with light text/logo. One hue per site; the band is the family handshake.
3. **Surface language**: flat paper, hairline borders, colour as washes and
   rails, never saturated fills behind running prose. Light-only. WCAG 2.2 AA.
4. **Shared accent tokens** (same hex on every site):
   amber `#ffc95c`, coral `#ff5c7c`, emerald `#2e9e67`.

arc42.org currently violates 1, 2, and 4: system sans everywhere, a white
masthead with slate links, and one-off accents (`#f5b700` gold, `PaleGreen`,
Tomato `#ff6347`). This spec closes those gaps in three independent steps.

## Baseline and the petrol-apricot fork

- **`main`** is the navy/gold baseline: tokens in
  `assets/css/arc42-org.css` (`--arc42-primary: #374769` etc.), no CDN fonts.
- **Branch `petrol-abricot-layout`** carries a token-level skin experiment:
  `assets/css/petrol-apricot.css` remaps all `--arc42-*` tokens
  (petrol `#1e4550` / apricot `#f0a35c`) and `_includes/head/custom.html`
  loads Zilla Slab + Hanken Grotesk from Bunny Fonts.

**This spec is hue-independent by design.** Steps 1–3 restructure everything
around tokens, so the signature hue remains a one-line decision:

- Navy (`main` default): `--arc42-hue: #374769`, masthead `#2b3a57`.
- Petrol (if the experiment wins): `--arc42-hue: #1e4550`, masthead `#16363f`.

Two hard constraints apply *regardless* of which hue wins:

- The **fonts are not negotiable per-site**: the family pairing is
  Caslon/Atkinson. If petrol wins, keep the petrol *hue tokens* but drop the
  Zilla/Hanken section of `petrol-apricot.css` and the Bunny Fonts `<link>`.
  No third-party font CDN — same privacy/imprint reasoning as documented at
  the top of `docs.arc42.org-site/_sass/_fonts.scss`.
- The **shared accents** (amber/coral/emerald, Step 1) are family tokens and
  override the apricot/butter accents in either skin.

## Step 1 — Align accent tokens (small, do first)

Extend the `:root` block in `assets/css/arc42-org.css`:

```css
:root {
  /* … existing --arc42-* tokens … */

  /* arc42 family accents — shared hex across all arc42 sites, do not tune */
  --arc42-amber: #ffc95c;        /* highlights, tips     (was #f5b700)   */
  --arc42-amber-ink: #4a3a0a;    /* text on amber */
  --arc42-coral: #ff5c7c;        /* warm spark, accents  (was #ff6347)   */
  --arc42-coral-deep: #c22b47;   /* coral for button fills, AA with white */
  --arc42-emerald: #2e9e67;      /* success/status */
  --arc42-green-wash: #d9f7d3;   /* soft green surface   (was PaleGreen) */
  --arc42-green-ink: #1b5e20;    /* text on green wash */
}
```

Then replace the hardcoded one-offs with tokens:

| Location | Current | New |
|---|---|---|
| `assets/css/button.css:27` `.buttonRed` | `#FF6347` | `var(--arc42-coral-deep)`, white text |
| `assets/css/button.css:31` `.buttonGreen` | `PaleGreen` bg, black text | `var(--arc42-green-wash)` bg, `var(--arc42-green-ink)` text |
| `assets/css/button.css:33` `.buttonAnmeldung` | `#FF6347` | `var(--arc42-coral-deep)`, white text |
| `assets/css/button.css:37` `.buttonReq4Arc` | `#F5B700`, black | `var(--arc42-amber)` bg, `var(--arc42-amber-ink)` text |
| `assets/css/button.css:38` `.buttonImprove` | `PaleGreen`, black | like `.buttonGreen` |
| `assets/css/arc42-org.css:9` `--arc42-accent` | `#f5b700` | `var(--arc42-amber)` (keep the alias so existing uses follow) |
| `assets/css/arc42-org.css:1290` `.method-diagram svg .olap` | `#f5b700` | `var(--arc42-amber)` |
| `_includes/canvas-mini.svg:3` `--gold` | `#f5b700` | `#ffc95c` (inline SVG, no cascade access — hardcode) |

Sweep for stragglers before closing:
`grep -rniE --exclude-dir=_site '#f5b700|#ff6347|palegreen|tomato' _sass assets _includes _layouts _pages`
(also check `petrol-apricot.css`'s apricot-as-accent remaps if that file survives).

Contrast gates (verify, don't trust): amber `#ffc95c`/`#4a3a0a` and green wash
`#d9f7d3`/`#1b5e20` pass AA comfortably; `--arc42-coral-deep #c22b47` with
white ≈ 5.4:1 ✓. Bright coral `#ff5c7c` must never carry white body text —
it is for small accents and text-on-dark only (same rule docs uses).

## Step 2 — Typography: adopt the family pair

Self-host, copying the working setup from docs:

1. Copy from `docs.arc42.org-site/assets/fonts/` into `assets/fonts/`:
   all six `*.woff2` (libre-caslon-text 400/700 + atkinson-hyperlegible-next,
   latin + latin-ext) **and both `OFL-*.txt` licences** (OFL requires shipping
   them).
2. Copy `docs.arc42.org-site/_sass/_fonts.scss` → `_sass/arc42-fonts.scss`
   (keep the `unicode-range` subsetting and `font-display: swap` as-is).
3. In `assets/css/main.scss`, hook Minimal Mistakes' `!default` variables by
   defining them **before** the theme imports:

   ```scss
   @import "arc42-fonts";

   $sans-serif: "Atkinson Hyperlegible Next", "Atkinson Hyperlegible",
     -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
   $serif: "Libre Caslon Text", Georgia, serif;

   @import "minimal-mistakes/skins/...";   // existing imports follow
   ```

   Order of the fallback stack matters: plain *Atkinson Hyperlegible* is a
   different family with different metrics — it stays second so the stack
   degrades to the right letterforms (see docs' font-decision note).
4. Headings: Minimal Mistakes sets headings in the sans stack. Add to
   `arc42-org.css`:

   ```css
   h1, h2, h3, h4 {
     font-family: "Libre Caslon Text", Georgia, serif;
     font-weight: 700;
     text-wrap: balance;
   }
   ```

   Serif is for headings **only** — never in buttons, nav, chips, or labels
   (quality's "Two Voices Rule"). h5/h6 and all UI stay in the sans.
5. If implementing on the petrol branch: delete the Bunny Fonts
   `<link>`/`preconnect` from `_includes/head/custom.html` and the
   Zilla/Hanken typography section of `petrol-apricot.css`.

Check DESIGN.md's type scale afterwards — the display/headline sizes
(2.441/1.953 rem) carry over unchanged; only the faces change.

## Step 3 — The masthead band

The single highest-impact change. Reference implementations: docs' Deep Blue
masthead (`docs.arc42.org-site/_sass/_masthead.scss`) and quality's violet
header (`quality.arc42.org-site/_sass/_header.scss`).

1. New tokens in `arc42-org.css` (the petrol skin, if kept, remaps only the
   first one):

   ```css
   :root {
     --arc42-masthead: #2b3a57;                       /* navy, deepened from --arc42-primary */
     --arc42-on-masthead: #ffffff;                    /* logo, active/hover links */
     --arc42-on-masthead-muted: rgba(255,255,255,.78);/* resting nav links */
   }
   ```

   (Petrol variant: `--arc42-masthead: #16363f`.)
2. `.masthead`: fill with `var(--arc42-masthead)`, drop the theme's
   `border-bottom: 1px solid $border-color` (`_sass/minimal-mistakes/_masthead.scss:7`)
   — override from `arc42-org.css`, don't edit the vendored theme file.
3. Logo: `_includes/masthead.html:6` swaps `ARC42_black.svg` →
   `ARC42_white.svg` (already in `assets/`).
4. `assets/css/nav-2026.css` — re-point the nav colours:
   - `.arc42-nav__inline > li > a`: `var(--arc42-slate)` →
     `var(--arc42-on-masthead-muted)`; hover/focus/`aria-current` →
     `var(--arc42-on-masthead)`. Colour-only transition, as now.
   - CTA (`.arc42-nav__cta`): on the dark band, invert to a light treatment —
     white or amber fill with dark text, since a navy button on the navy band
     disappears. Amber CTA (`--arc42-amber` + `--arc42-amber-ink`) is the
     recommended pick: it makes Download the loudest element in the header,
     which matches its job.
   - Language switch (`.arc42-lang`) and the More/hamburger toggle: same
     muted-light treatment; check the three `<span>` bars' colour.
   - Mobile drawer: the drawer panel may stay light (docs does this); only
     the bar itself is banded. Verify the open/close states on <900px.
5. Focus visibility on the dark band: a navy-ish focus ring vanishes on navy.
   Add a two-tone ring for masthead children (pattern:
   `--focus-ring-on-violet` in quality's header) — e.g.
   `box-shadow: 0 0 0 2px var(--arc42-masthead), 0 0 0 4px #fff;`.
6. Contrast gates: `--arc42-on-masthead-muted` on `#2b3a57` must clear
   4.5:1 (rgba(255,255,255,.78) ≈ 7.4:1 ✓); re-check if petrol is chosen.
7. Sweep for components that assumed a light header: search notice bars,
   `ukraine.css` banner, breadcrumbs, and the print stylesheet
   (`_sass/minimal-mistakes/_print.scss` may need the masthead flattened to
   white/ink for print).

## Acceptance criteria

- [ ] No occurrence of `#f5b700`, `#ff6347`, `PaleGreen`/`#98fb98` outside
      `_site/` and `todo/`.
- [ ] All button/label colour pairs ≥ 4.5:1 (spot-check with a contrast tool,
      including `aria-current` nav state and CTA on the band).
- [ ] No third-party font requests (check the network tab: nothing from
      bunny.net / googleapis). Six woff2 + two OFL files shipped.
- [ ] Headings render in Libre Caslon Text, body in Atkinson Hyperlegible
      Next, buttons/nav/labels in the sans.
- [ ] Masthead: dark band, white logo, visible keyboard focus on every
      header control, drawer works on mobile widths.
- [ ] Visual pass over: home, documentation, learn, download, news, 404,
      print preview of one content page.
- [ ] `DESIGN.md` updated: colour section gains the family accent tokens and
      the masthead band; typography section replaced by the Caslon/Atkinson
      pair; add a short "Family" note pointing at the sibling DESIGN.md files.

## Out of scope

- The navy-vs-petrol signature-hue decision itself (Gernot decides; this spec
  works with either — it's a 3-token swap).
- Content, layout structure, and the 2026 nav mechanics (already done).
- Other family sites (faq, arc42.de, canvas follow later; see the family
  schema summary of 2026-07-30).
- quality.arc42.org's semantic legend and docs' callout system — per-site
  systems stay untouched.

---

# Phase 2 — critique follow-up (added 2026-07-30)

Steps 1–3 above landed on the `family-styling` branch. This phase tracks the
2026-07-30 four-site critique findings for arc42.org (full context:
`~/projects/arc42/arc42-family-critique-synthesis.md`, visual sketch:
`meta.arc42.org/brand-manual.html` §03). Status reflects the working tree.

- [x] Solid deep hero band (`--arc42-deep #22304a`) replacing the pale
      gradient; light text, amber kicker, white CTA on the band; download
      strip calmed to paper + hairline. (arc42-org.css)
- [x] Kill remaining gradients: `.dlb__result`, `.method-cta` → flat fills.
- [x] All `font-weight: 800` → 700 (neither Caslon nor the Atkinson variable
      font ships 800 — everything was synthetic bold).
- [x] AA fixes: `#4b7ba3`-as-text replaced on `.dl-strip__all`,
      `.about-hero__kicker`, `.about-section__heading > p`; `.dlb__meta`
      `#6f7f92` → `--arc42-text-muted`; `.resource-detail__facts` slate →
      `--arc42-text-muted`.
- [x] `--arc42-focus-ring` token; all 6 outline literals replaced
      (arc42-org.css, grid.css).
- [x] Home feature cards styled into the system (grid + tokens + hover-only
      shadow; markup unchanged).
- [x] `button.css` trimmed to the used `.button` + `.margin-top`; all 14
      dead `.buttonX` classes deleted. `ukraine.css` deleted (all classes
      unused; `.ua-strip__*` lives in arc42-org.css).
- [x] Sponsor SVG: single-ink navy `supported-by-innoq.svg`; petrol/apricot
      variant deleted (meta ADR-0009).
- [x] Training-dates component rebuilt on tokens with the pinned-note shadow
      (ADR-0002) + error/timeout state and fallback link (ADR-0010).
- [x] Favicons: "42"-circle glyph in masthead navy (wordmark was illegible
      at 16px); mstile-*/browserconfig.xml deleted (unreferenced, IE11-era);
      manifest + theme-color `#2b3a57` wired (ADR-0008).
- [x] `todo/`, `PRODUCT.md`, `DESIGN.md` excluded from Jekyll build.
- [x] Contact email → info@arc42.de (_config.yml).

Open (needs content/owner decisions):
- [ ] Consider one dominant Template card vs three equal cards on home
      (content decision — cards are now styled but still equal-weight).
- [ ] Two-colour on-band logo variant (keep the azure swoosh on the navy
      masthead) — asset work, see BRAND.md → Assets.
- [ ] Update DESIGN.md (this repo): document `--arc42-deep`, the focus-ring
      token, the form vocabulary (before registration forms), and reconcile
      the type-scale numbers; add the "Family" section.
- [ ] CI palette guard per meta ADR-0014 (retired-hex deny-list).
- [ ] Form vocabulary tokens + specs before registration-form work starts
      (meta ADR-0011).
