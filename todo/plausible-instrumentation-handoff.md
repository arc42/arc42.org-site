# Handoff: unify Plausible tracking across the arc42 web properties

**Audience:** an agent/developer with write access to *all* arc42 site repos.
**Anchor repo:** `arc42.org-site` (this one). All other work is in sibling repos.
**Status:** nothing implemented yet. This document is the plan, not a record.
**Written:** 2026-07-26, from Plausible docs current at that date.

---

## 1. Why — the problem being fixed

Twelve months of Plausible data for arc42.org contain two structural blind spots.

**Blind spot A — the docs handoff is recorded as abandonment.**
`/overview` is the site's #2 entry page (39.7k landings/year) and its #1 exit page
(54.5k unique exits — **43.5% of all sessions on the site end there**). All twelve
section tiles on that page link to `https://docs.arc42.org/section-N/`.

`docs.arc42.org` is not part of the Plausible property, so a visitor who lands on
`/overview`, reads it, clicks a tile and spends fifteen minutes in the docs is
recorded as: one pageview → **bounce** → session ended at `/overview`. The page's
73% entry-bounce and 58.9% exit rate are therefore largely artefacts of a
cross-domain split, not evidence of a content problem. Nobody can currently tell
handoff from abandonment.

**Blind spot B — template downloads are invisible.**
The home page carries a quick-download strip whose links point at
`https://github.com/arc42/arc42-template/raw/master/dist/*.zip`. The site runs the
bare `script.js` with no enhanced measurements, so **zero** download events are
recorded. There is no number anywhere for "how many people downloaded the
template", nor for which format wins (AsciiDoc / Markdown / Word).

**Goal of this work:** one Plausible property covering `arc42.org` + `docs.arc42.org`
+ `faq.arc42.org` with session continuity, plus outbound-link and file-download
measurement, while keeping `quality.arc42.org` and `canvas.arc42.org` as separate
properties.

---

## 2. Current state

`arc42.org-site/_includes/head/custom.html:6`:

```html
<script defer data-domain="arc42.org,rollup.arc42.com" src="https://plausible.io/js/script.js"></script>
```

- Two comma-separated domains = a **rollup**: every event is sent to the
  `arc42.org` site *and* to the `rollup.arc42.com` site.
- `script.js` = base tracker. Pageviews only. No outbound links, no file
  downloads, no 404 tracking.
- Sibling subdomains referenced from this site (link counts from the repo):
  `docs.arc42.org` ~19, `canvas.arc42.org` 6, `faq.arc42.org` 4,
  `quality.arc42.org` 2, `patterns.arc42.org` 1. Also `trainings.arc42.org` and
  `status.arc42.org` in the nav data.

---

## 3. Decisions the human must make first

Do not start until these are answered.

### Decision 1 — rollup or new script? (they are mutually exclusive)

Plausible's October 2025 script update replaces filename-based extensions with a
per-site snippet plus `plausible.init({...})`, and moves feature toggles into
Site Settings. **It does not support multiple comma-separated domains.** Plausible's
own migration guide says to keep the legacy script if you need multi-domain.

| Option | Keeps rollup | Feature toggles | Recommendation |
|---|---|---|---|
| **A. Stay legacy** | yes | via `src` filename variants | **recommended for now** |
| **B. Move to new script** | no — rollup dies | via Site Settings UI | only if the rollup is expendable |

Recommended: **A**. Once root+docs+faq merge, the rollup's remaining job is
"all of arc42 including quality/canvas/patterns in one view", which is still
worth having. Revisit when Plausible adds multi-domain to the new script.

If the human picks **B**, drop `rollup.arc42.com` everywhere and use the exact
snippet Plausible generates per site under *Site Settings → Site Installation*.
Everything else in this document still applies.

### Decision 2 — which hostnames join the root property?

Confirmed by the human so far:

- **Join `arc42.org`:** `docs.arc42.org`, `faq.arc42.org`
- **Stay separate:** `quality.arc42.org`, `canvas.arc42.org`
- **Undecided:** `patterns.arc42.org` (linked from `/documentation/`),
  `trainings.arc42.org`, `status.arc42.org`

Get an explicit answer for the undecided ones before touching their repos.
`arc42.de` is a different domain and stays entirely separate.

### Decision 3 — how does status.arc42.org keep its per-subdomain counts?

`status.arc42.org` displays visitor/pageview counts **per subdomain**. Those counts
presumably come from the Stats API, one call per Plausible site. Merging docs and
faq into the `arc42.org` property removes their individual `site_id`s, so the
status page breaks unless one of these is done.

| Option | Status page | Billing | Session continuity |
|---|---|---|---|
| **1. Hostname breakdown** (recommended) | needs a code change | unchanged | yes |
| **2. Triple-tagged `data-domain`** | no change needed | 3× per pageview | needs verifying |
| **3. Don't merge** | no change needed | unchanged | no — blind spot stays |

**Option 1 — one property, break down by hostname.** The Stats API exposes
`event:hostname`, `visit:entry_page_hostname` and `visit:exit_page_hostname` as
both filter and breakdown dimensions. So instead of N calls to N `site_id`s, the
status page makes **one** call to `site_id=arc42.org` with a breakdown by
`event:hostname` and gets arc42.org, docs.arc42.org and faq.arc42.org in a single
response. `quality`/`canvas`/`patterns` stay separate sites and keep their own
calls exactly as today. Net effect: fewer API calls, simpler code.

**Option 2 — keep docs as its own site *and* feed the merged property**, by
listing three domains in its snippet:

```html
<script defer data-domain="docs.arc42.org,arc42.org,rollup.arc42.com" ...></script>
```

The status page then needs no change at all, because `docs.arc42.org` still exists
as its own `site_id`. Two caveats: every pageview becomes **three** billable
events, and — important — **it is unverified whether the copy sent to `arc42.org`
joins the same session as the main site**. The reasoning is that Plausible derives
visitor identity per target domain, so the `arc42.org` copy should share the main
site's identity, but Plausible's rollup documentation could not be retrieved when
this was written. **Test this in Realtime (step 6.5) before committing to Option 2.**

Recommendation: **Option 1**. Option 2 only if changing the status page is
genuinely off the table.

### Decision 4 — billing headroom

Enhanced-measurement events (outbound clicks, file downloads) **count toward the
billable monthly pageview allowance**, and the rollup means every event is
counted twice. Adding docs.arc42.org — likely the highest-volume property — could
be a large step up. Check the plan's headroom before step 5.2.

---

## 4. Work items, repo by repo

### 4.1 `arc42.org-site` (this repo) — one line

Edit `_includes/head/custom.html:6`. Keep `data-domain` **exactly** as it is; only
change the `src` to the variant that includes outbound links and file downloads.

```html
<script defer data-domain="arc42.org,rollup.arc42.com"
        src="https://plausible.io/js/script.outbound-links.file-downloads.js"></script>
```

> **Verify the filename before committing.** The docs pages for script extensions
> did not render their code samples when this handoff was written. Confirm the
> exact variant filename and the combination order against
> <https://plausible.io/docs/script-extensions>, or copy it from
> *Site Settings → Site Installation → Review Installation* in the dashboard.
> Do not guess. If 404-page tracking is also wanted, confirm whether it is
> available as a legacy variant or only via the new script.

### 4.2 `docs.arc42.org` repo — add the identical snippet

Paste the **byte-for-byte identical** line from 4.1 into the `<head>` of every
page. Identical `data-domain` is what preserves session continuity — that is the
entire mechanism. Plausible keys the visitor session on the `data-domain` *value*,
not on the request hostname.

Keeping `rollup.arc42.com` in the string is intentional: it makes the rollup a
true "all of arc42" view instead of one that misses the biggest destination.

Find where the head is templated (Antora/Asciidoctor/Jekyll — check the repo) and
add it once, not per page.

### 4.3 `faq.arc42.org` repo — same as 4.2

### 4.4 `quality.arc42.org` and `canvas.arc42.org` repos — separate properties

Only if they are currently untracked or should be brought into the same account:

```html
<script defer data-domain="quality.arc42.org,rollup.arc42.com"
        src="https://plausible.io/js/script.outbound-links.file-downloads.js"></script>
```

```html
<script defer data-domain="canvas.arc42.org,rollup.arc42.com"
        src="https://plausible.io/js/script.outbound-links.file-downloads.js"></script>
```

Separate dashboards, still aggregated into the rollup. Each needs its own site
created in Plausible first (step 5.1).

### 4.5 `patterns.arc42.org` — after Decision 2

### 4.6 `status.arc42.org` repo — rewrite the per-subdomain queries (Option 1 only)

Skip this if Decision 3 lands on Option 2.

The page currently queries one Plausible `site_id` per subdomain. After the merge,
`docs.arc42.org` and `faq.arc42.org` no longer have their own `site_id`. Replace
those calls with a single Stats API query against `site_id=arc42.org` broken down
by `event:hostname`:

- `event:hostname` — hostname of each event (use this for pageview/visitor counts
  per subdomain)
- `visit:entry_page_hostname` / `visit:exit_page_hostname` — also available if the
  page reports entry/exit behaviour

`quality.arc42.org`, `canvas.arc42.org` and any other separate property keep their
existing per-`site_id` calls unchanged. Deploy this **together with or immediately
after** 4.2/4.3 so the status page never shows a gap.

⚠️ **The numbers will shift at cutover, and that is expected.** With docs as its own
site, someone who reads arc42.org and then the docs counts as one visitor in each
of two properties. After the merge they are one visitor in one property, attributed
to both hostnames in the breakdown. Per-hostname *visitor* counts therefore stop
summing to the historical total. Pageview counts are unaffected by this — if the
status page can show pageviews rather than visitors for the cross-property view,
the series stays comparable across the switch.

---

## 5. Plausible dashboard configuration

### 5.1 Sites

- `arc42.org` — exists. Becomes the root+docs+faq property.
- `rollup.arc42.com` — exists. No change.
- `quality.arc42.org`, `canvas.arc42.org` — create as new sites if 4.4 goes ahead.
- **Do not** create sites for `docs.arc42.org` or `faq.arc42.org`. They must report
  into `arc42.org`. Creating separate sites for them defeats the whole exercise.

### 5.2 Enhanced measurements — on the `arc42.org` site

*Site Settings → General → Site Installation.* Enable:

- **Outbound links** → auto-creates the goal `Outbound Link: Click`
- **File downloads** → auto-creates the goal `File Download`
- **404 error pages** → optional but useful; there are stale inbound URLs
  (`/confluence-info`, `/downloads/`, `/)`) currently invisible
- **Form submissions** → not needed

No goal setup is required; the goals appear in the Goals tab after the first event.

Default tracked file extensions already include **`.zip`**, which covers every
template download link. Do **not** set a custom `fileExtensions` list — it
*overrides* the defaults rather than extending them.

> If the site stays on the legacy multi-domain script (Decision 1A), verify
> whether these toggles take effect or whether the `src` filename is what governs
> them. Test in Realtime before assuming (step 6).

Repeat for `quality.arc42.org` / `canvas.arc42.org` if created.

### 5.3 Hostname allow-list — on the `arc42.org` site

*Site Settings → Shields → Hostnames → Add Hostname.* Add exactly:

```
arc42.org
docs.arc42.org
faq.arc42.org
```

**Do not use the `*arc42.org` wildcard.** It would admit every arc42 subdomain,
including the ones that are deliberately staying separate. (For reference:
`*.arc42.org` = all subdomains but not the root; `*arc42.org` = subdomains and
root. Limit is 30 hostnames.)

⚠️ Once an allow-list exists, anything not on it is **dropped, not merely
filtered**. Add all three hostnames before deploying 4.2/4.3, or the first docs
traffic is lost. Also check whether `rollup.arc42.com` has its own allow-list that
needs the new hostnames added.

### 5.4 Saved views for day-to-day analysis

*Filter → Hostname* supports is / is not / contains. Set up and bookmark:

- **Main site only** — `Hostname is arc42.org`. This reproduces every number in
  the historical analysis and stays comparable across the switch.
- **All (unfiltered)** — the real cross-property journey.
- **Docs only** — `Hostname is docs.arc42.org`.

---

## 6. Verification, in order

1. Deploy 4.1 alone. In *Realtime*, click a download-strip link on the home page
   and confirm a `File Download` (and/or `Outbound Link: Click`) event appears.
2. Confirm the `arc42.org` dashboard still receives pageviews and that
   `rollup.arc42.com` still receives its copy.
3. Add the hostname allow-list (5.3) **before** deploying docs/faq.
4. Deploy 4.2. In Realtime, load a docs page and confirm the pageview arrives on
   the **`arc42.org`** dashboard with hostname `docs.arc42.org`.
5. The real test: load `arc42.org/overview/`, click a section tile, and confirm
   Plausible shows **one session with two pageviews** — not two sessions, and not
   a bounce. If it splits, the `data-domain` strings differ somewhere.
6. Deploy 4.3, repeat 4–5 for faq.
7. **Only if Decision 3 = Option 2:** with the triple-tagged snippet live on docs,
   load `arc42.org/overview/`, click a section tile, and check the **`arc42.org`**
   dashboard. One session with two pageviews = the rollup copy joins the session,
   Option 2 works. Two separate sessions, or a bounce = it does not, and Option 1
   is the only route. Do this test before rolling the snippet out anywhere else.
8. Deploy 4.6 and confirm the status page renders the same subdomains as before.

---

## 7. Expected consequences — warn the human, don't be surprised by them

- **`/overview`'s exit rate will collapse** the day docs goes live. ~19 links stop
  being exits. That is the fix working.
- **Totals jump.** docs.arc42.org traffic is new volume in this property.
- **The 12-month baseline stops being comparable** except through the
  `Hostname is arc42.org` filter. Record the cutover date in this file.
- **Path collision:** the Pages report groups by path across hostnames, so
  `arc42.org/`, `docs.arc42.org/` and `faq.arc42.org/` collapse into a single `/`
  row. Deeper paths don't collide (`/section-5/` exists only on docs). Use the
  hostname filter for any front-door analysis.
- **No double-counted visitors.** Plausible's cookieless caveat about counting a
  person separately on two domains applies to *different `data-domain` values*.
  All three will share one, so a visitor crossing arc42.org → docs.arc42.org is
  one visitor.

---

## 8. Out of scope

Do not change page content, navigation, or layout. Do not remove the rollup
without Decision 1. Do not create Plausible sites for docs/faq. Do not touch
`arc42.de`.

---

## 9. Questions to send back

1. Decision 1 — rollup (legacy script) or new script? Default: legacy.
2. Decision 2 — where do `patterns.arc42.org`, `trainings.arc42.org` and
   `status.arc42.org` belong?
3. Decision 3 — status page via hostname breakdown (Option 1) or triple-tagged
   `data-domain` (Option 2)? Default: Option 1.
4. Decision 4 — is there plan headroom for docs-level volume, doubled by the rollup
   (tripled under Option 2)?
5. Which repos host `docs.arc42.org` and `faq.arc42.org`, and who can deploy them?
6. Which Plausible sites exist today? This plan assumes `arc42.org` and
   `rollup.arc42.com` exist; whether `docs.arc42.org` and `faq.arc42.org` already
   have their own sites (which the status page would be querying) needs confirming
   before step 4.6 can be scoped.
