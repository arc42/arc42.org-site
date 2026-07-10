# Design Critique — arc42.org "2026 layout"

Method: dual-agent (A: aa5232aa35eda63bd · B: a795ddb5fdc5b6c37)
Date: 2026-07-08 · Target: the redesigned pages (`_pages/`, branch `layout-update-2026`) · Register: brand

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No current-page indicator in the masthead (no `aria-current`, no active style); download builder claims "Version 9.0.0" regardless of selected language. |
| 2 | Match System / Real World | 3 | Fluent architect-speak, overview grid mirrors the template; but bare language codes (CZ, UKR) and "Impressions" (Germanism) in the drawer. |
| 3 | User Control and Freedom | 3 | Drawer closes on Esc/outside click, downloads are ungated; drawer external links force `target="_blank"` without warning. |
| 4 | Consistency and Standards | 2 | Two competing card systems (`res-card` vs gray shadowed `.part` tiles), radius drift (8/10/12/20px), legacy footer glued under the new design; site violates its own DESIGN.md. |
| 5 | Error Prevention | 1 | Builder builds URLs for combinations that may not exist (Hungarian "July 2026"); v8.2.1 languages still labeled "Version 9.0.0"; bad pick → raw GitHub 404. |
| 6 | Recognition Rather Than Recall | 2 | Bare language codes (full names hidden until after selection); "Docs" vs "Overview" unguessable; six Markdown-flavor chips demand format trivia; /canvas/ linked from nowhere. |
| 7 | Flexibility and Efficiency | 3 | Quick-download panel is a real expert accelerator; native accordions; but builder state isn't URL-addressable (can't share "German docx"). |
| 8 | Aesthetic and Minimalist Design | 3 | High contrast, system fonts, no motion junk; dragged down by the ~15-item training-date wall on six pages and dead whitespace on /more/. |
| 9 | Error Recovery | 1 | Nothing designed for failure: broken download → GitHub 404; subtle-ads fallback promises content "should display here shortly" even when it never will. |
| 10 | Help and Documentation | 4 | Format overview explains every format; "plain vs with-help" explained exactly at the decision point; docs/FAQ ecosystem well cross-linked. |
| **Total** | | **24/40** | **Acceptable — solid working site, two structural weaknesses at the core transaction** |

## Anti-Patterns Verdict

**Does this look AI-generated?** Not without hesitation — the restraint, working no-JS fallbacks, and the download builder show human judgment. But it carries the fingerprint of the current template era, and its loudest tell is one the project explicitly banned for itself.

**LLM assessment (Assessment A):**
- **The kicker problem.** PRODUCT.md names "tiny tracked uppercase kicker eyebrows on every section" as an anti-reference — and the redesign ships `dl-hero__kicker` (uppercase, 700 weight, 0.14em tracking) on *all nine page heroes*, plus `res-card__kicker` on every card on /more/ and /canvas/, plus `dlb__step`, `dlb__rlabel`, `.res-tag`, `.dl-badge`, and `.arc42-drawer__title`. The banned pattern is the site's most repeated typographic gesture. On /canvas/ the kickers wrap to two ungainly lines ("STARTING GREENFIELD").
- **Identical card grids** on /more/, /canvas/, /examples/ — same kicker/title/text/arrow-CTA card three pages running; /more/ is *nothing but* four such cards and a void.
- **Layout sameness.** Eight of ten pages are: Ukraine strip → pastel gradient hero (kicker/title/sub) → content → identical green training block. Side by side, only the H1 changes.
- **Flattened identity.** The canonical colored arc42 template diagram became twelve uniform gray tiles; the anonymous pastel-blue gradient hero could belong to any developer-tools startup. "The Architect's Blueprint" north star is asserted in DESIGN.md but never visually expressed.
- Genuinely avoided: side-stripes, gradient text, glassmorphism, text overflow, numbered-section scaffolding (the builder's "1 · 2" numbering is functional and earns its place).

**Deterministic scan (Assessment B):** 4 advisory findings, **zero in the redesigned `_pages/`**, all 4 in legacy `_includes/`:
- `#50C878` inline on the footer Status icon (`_includes/footer.html:23`) — **site-wide, pixel-verified in the rendered footer**; color exists nowhere in DESIGN.md.
- `border-radius: 3px` legend swatch (`_includes/arc42-legend.html:47`) and `border-radius: 1rem` orbit animation (`_includes/orbit-animation.html:26`) — both off the 4/8px scale (blog-post scope).
- `#ddd` border (`_includes/arc42-legend.html:16`) — borderline: DESIGN.md prose explicitly allows `#ddd`, but the machine-readable frontmatter omits it. The inconsistency is *inside DESIGN.md*.
- Scope note: the detector scans markup only. The drift Assessment A found by reading CSS (10/12/20px radii, rest shadows on `.quick-dl`/`.part`, off-palette `#132c15`, result-pane gradient) is invisible to it — the two assessments agree the new pages drift from the declared system, they just see different halves.

**Visual overlays:** skipped — no browser automation available in this session (Chrome extension not connected); full-page static screenshots (desktop + 390px mobile) were used as fallback evidence.

## Overall Impression

A disciplined, fast, honest redesign whose fundamentals (contrast, focus states, no-JS resilience, progressive disclosure) are genuinely good — and whose two real problems are structural, not cosmetic. First: the site's single most important interaction, the download, misreports versions and has no designed failure path. Second: identity — the redesign polices every flashy anti-pattern except the one it wrote down first, and in flattening the old site's quirks it also flattened arc42's face. The biggest opportunity: make the overview grid the best-designed artifact on the site (it *is* the product) and let the declared "Blueprint" identity actually appear somewhere.

## What's Working

1. **The home quick-download panel** (`.quick-dl`). Three curated formats, EN/DE toggle, "recommended" guidance, and real `href`s that work with JavaScript disabled. "Frictionless Utility" achieved, not just claimed — the product is deliverable before the first scroll.
2. **The download builder's information architecture.** Numbered steps, always-valid live result pane (`aria-live="polite"`), plain/with-help explained in one honest sentence exactly where the decision is made. For a 12×12×2 matrix, an elegant shape — it needs data honesty, not a redesign.
3. **Engineering craft under the paint.** The theme's load-fade killed with a documented cascade rationale, `prefers-reduced-motion` handled in the nav, focus-visible styles nearly everywhere, legacy tool formats preserved behind native accordions. This is the pragmatic register the brand claims.

## Priority Issues

1. **[P1] The builder lies about versions and permits dead downloads.**
   - **Why it matters:** this is the site's core transaction; a wrong version claim on an architecture-documentation product is a credibility wound, and a raw GitHub 404 is an unrecoverable dead end.
   - **Fix:** `data-version` per language chip, update the meta line in the picker's refresh; micro-label v8.2.1 languages on the chip; verify HU artifacts exist before the chip ships.
   - **Suggested command:** `/impeccable harden`
2. **[P1] Mobile masthead loses the primary CTA; no page is ever marked "current".**
   - **Why it matters:** the product's stated #1 job is frictionless download; below 800px the navy Download button disappears into an icon-only hamburger (still labeled "More"), and at all sizes users can't tell where they are.
   - **Fix:** keep a compact Download button beside the hamburger on mobile; rename the toggle "Menu" at small sizes; add `aria-current="page"` + visible active state in `masthead.html`.
   - **Suggested command:** `/impeccable adapt`
3. **[P1] The site's signature typographic device is its own declared anti-pattern.**
   - **Why it matters:** governance, not taste — the one pattern the team wrote down as "not us" became the redesign's most repeated element, and it is the single strongest "template-made" signal.
   - **Fix:** keep at most the hero kicker, restyled (sentence case, slate, no tracking); delete `res-card__kicker` (fold into card body: "Books — 25+ titles"); de-uppercase `dlb__step`/`dlb__rlabel`.
   - **Suggested command:** `/impeccable quieter`
4. **[P2] Home buries "What is arc42?" under an advertisement, and the ad block leaks internals.**
   - **Why it matters:** newcomers are the growth audience; they scroll past ~900px of German seminar dates (including the leaked "Version of June 20th 2026 (gs@CGN)" stamp) before learning what the product is.
   - **Fix:** move "What is arc42?" directly under the feature row; cap the ads block to the next 3 dates + "all dates" link; strip internal stamps server-side.
   - **Suggested command:** `/impeccable layout`
5. **[P2] The overview grid breaks on mobile and breaks the design system on desktop.**
   - **Why it matters:** this page is the product's mental model; at 390px the forced two-column grid makes the numbered tiles read 1, 7, 2, 8…, and on desktop the tiles carry rest shadows, hover `scale(1.02)` (not reduced-motion-gated) and off-palette `#132c15` — the oldest-looking artifact on the newest site.
   - **Fix:** single column below ~700px (ordered 1–12); restyle tiles to the `res-card` idiom (1px border, no rest shadow, navy text); keep the desktop two-column echo of the canonical poster.
   - **Suggested command:** `/impeccable adapt` (mobile) + `/impeccable polish` (system alignment)

## Persona Red Flags

**Jordan (confused first-timer):** hero never says arc42 is a *template* (that word first appears in sub-copy); the "What is arc42?" answer sits below the training-date wall; "AsciiDoc — recommended" steers novices toward the unfamiliar option; "Overview" vs "Docs" unguessable; **/canvas/ has zero inbound links** from nav, footer, or any redesigned page; /why/ — the page written for Jordan — is reachable only via a bullet on /documentation/. On /overview/ mobile the numbered tiles read out of order (1, 7, 2, 8…).

**Casey (distracted mobile user):** fine on home (hero + quick-dl at top); on every other page the Download CTA is gone from the masthead. On /download/ mobile, tapping "DE" produces **no visible change** — the result pane is off-screen below 24 chips (the `aria-live` helps screen readers, not sighted thumbs). Language/format chips are ~28–34px tall — below the 44px touch floor, packed tightly. htmx → unpkg → Vercel → `outerHTML` swap = late layout shift on slow connections.

**Riley (stress tester):** **with JS off, mobile navigation is entirely dead** (drawer stays `hidden`; no `<noscript>` path) — desktop survives via inline links. Builder defaults degrade gracefully (all static hrefs valid) but 143 combos become unreachable, silently. The subtle-ads fallback text promises data that "should display here shortly" even when the backend is down — it should state the failure and lead with the trainings link. Drawer: Esc + focus-return correct, but no focus containment. `.part` tiles have no custom focus style; hover transform not gated by `prefers-reduced-motion`. htmx pinned to 1.9.6 (old major).

## Minor Observations

- Corner-radius drift: 8px (buttons), 10px (`res-card`, `dlb__pane`), 12px (`quick-dl`), 20px (pills) vs DESIGN.md's 4/8.
- `quick-dl` rest shadow and `dlb__result` gradient are off-system per DESIGN.md ("flat & sharp", shadows only on hover).
- `res-card__kicker` sits above the title, so hierarchy reads metadata-first ("25+ TITLES" louder in position than "Books").
- Footer: `<a>` as direct child of `<ul>`, stray `<br>`s, inline `color:Tomato` icons, `#50C878` Status icon (detector-confirmed, site-wide), 60% `!important` copyright (~10px), personal LinkedIn/dev.to profiles presented as org links.
- Toggle buttons (`quick-dl__lang`, `dlb__lang`, `dlb__fmt`) express state by CSS class only — no `aria-pressed`.
- Ukraine strip duplicated in ten page files instead of once in the layout — maintenance trap.
- navigation.yml: drawer says "Impressions" for /gallery/; legacy block still titled "Publikations".
- Naming drift: "Training" (nav, H1) vs "Trainings" (home card) vs "SELF-STUDY · INSTRUCTOR-LED SEMINARS" (kicker).
- DESIGN.md internal inconsistency: prose allows `#ddd` borders; frontmatter palette omits it (that's why the detector flags it).
- Legacy includes off-system (blog scope): legend swatch 3px radius, orbit animation 1rem radius + rest shadow.

## Questions to Consider

1. **If the quick-download panel satisfies 90% of visitors in two clicks, what is /download/ actually for?** Consider inverting: three curated formats as the hero, the full 12×12 matrix demoted to an "All languages & formats" disclosure.
2. **Where did arc42's face go?** The colored template diagram is one of the most-recognized images in software architecture — the redesign renders it as twelve gray rectangles, under a pastel gradient any startup could ship. Would you rather own a slightly dated icon than rent a tasteful anonymity?
3. **Who owns the seam between arc42.org and its satellites?** Money changes hands at trainings.arc42.org, learning happens at docs.arc42.org — every emotional journey ends by crossing to an unreviewed property. Does the 2026 layout make the rest of the constellation look older by contrast?
