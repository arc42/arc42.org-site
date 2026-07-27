# Plausible tracking improvements — arc42.org only

**Date:** 2026-07-26
**Scope:** this repo (`arc42.org-site`) plus Plausible dashboard configuration.
**Full multi-repo plan:** see `plausible-instrumentation-handoff.md` — that one also
covers docs / faq / quality / canvas / status repos. This is the subset you can do
yourself, today.

---

## Why

Two blind spots in the current setup.

1. **Downloads are uncounted.** The home quick-download strip links to
   `github.com/arc42/arc42-template/raw/…*.zip`. The site runs the bare
   `script.js`, so no download event is recorded anywhere. There is no number for
   how many templates get downloaded, or which format wins.
2. **The docs handoff looks like abandonment.** All twelve tiles on `/overview`
   link to `docs.arc42.org`, which is outside the Plausible property. A tile click
   registers as a bounce and an exit. `/overview` is the #1 exit page on the site
   (43.5% of all sessions end there) — that number is mostly an artefact.

Fixing (1) is entirely local. Fixing (2) needs the docs repo too (see the full plan).

---

## Part 1 — the repo change (one line)

`_includes/head/custom.html:6`, currently:

```html
<script defer data-domain="arc42.org,rollup.arc42.com" src="https://plausible.io/js/script.js"></script>
```

Change **only the `src`**, keep `data-domain` byte-for-byte:

```html
<script defer data-domain="arc42.org,rollup.arc42.com"
        src="https://plausible.io/js/script.outbound-links.file-downloads.js"></script>
```

> **Verify the filename first.** Plausible's script-extensions doc did not render
> its code samples when this was written. Copy the exact `src` from
> *Site Settings → General → Site Installation → Review Installation*, or check
> <https://plausible.io/docs/script-extensions>. Do not trust the spelling above.

### Why not the new (Oct 2025) script?

Plausible's new script format moves feature toggles into Site Settings and uses
`plausible.init({...})` — but it **does not support multiple comma-separated
domains**, and `data-domain="arc42.org,rollup.arc42.com"` is a rollup. Plausible's
own migration guide says to stay on the legacy script if you need multi-domain.

So: **keep the rollup, stay legacy.** Revisit when Plausible adds multi-domain
support to the new script. Moving to the new script means giving up
`rollup.arc42.com`.

---

## Part 2 — Plausible dashboard configuration

### 2.1 Enhanced measurements

*Site Settings → General → Site Installation*, on the **arc42.org** site:

| Setting | Enable | Why |
|---|---|---|
| Outbound links | yes | counts clicks to docs.arc42.org, GitHub, etc. Goal: `Outbound Link: Click` |
| File downloads | yes | counts the `.zip` template links. Goal: `File Download` |
| 404 error pages | yes | surfaces stale inbound URLs (`/confluence-info`, `/downloads/`, `/)`) |
| Form submissions | no | nothing to measure |

No goal setup needed — the goals appear in the Goals tab after the first event.

`.zip` is already in Plausible's default file-extension list, so the template
downloads are covered out of the box. **Do not set a custom `fileExtensions`
list** — it *replaces* the defaults rather than adding to them.

⚠️ If the site stays on the legacy multi-domain script, verify these toggles
actually take effect rather than the `src` filename governing them. Test in
Realtime before assuming.

### 2.2 Hostname allow-list — only when docs/faq join

*Site Settings → Shields → Hostnames → Add Hostname.* Add exactly:

```
arc42.org
docs.arc42.org
faq.arc42.org
```

Not the `*arc42.org` wildcard — it would admit `quality.` and `canvas.`, which are
meant to stay separate properties. (Reference: `*.arc42.org` = subdomains but not
root; `*arc42.org` = subdomains and root. Max 30 entries.)

⚠️ Once an allow-list exists, anything not on it is **dropped, not filtered**. Add
all three entries *before* the docs snippet goes live, or that traffic is lost.
Skip this section entirely until the docs work is actually scheduled.

### 2.3 Saved views

*Filter → Hostname* supports is / is not / contains. Once docs and faq report in,
bookmark:

- **Main site only** — `Hostname is arc42.org`. Reproduces every historical number
  and stays comparable across the cutover.
- **All (unfiltered)** — the real cross-property journey.
- **Docs only** — `Hostname is docs.arc42.org`.

### 2.4 Billing

Outbound clicks and file downloads are **billable events**, and the rollup sends
every event twice. Check plan headroom before enabling — and again before docs
traffic is added, since docs is likely the highest-volume property.

---

## Part 3 — verification after deploying Part 1

1. Open the home page, click a download-strip format link.
2. In Plausible **Realtime**, confirm a `File Download` (and/or
   `Outbound Link: Click`) event appears within seconds.
3. Confirm normal pageviews still arrive on both `arc42.org` and
   `rollup.arc42.com` — the rollup must not break.

---

## Part 4 — what you get, and when

After roughly four weeks of data:

- **Template downloads per month**, and the AsciiDoc / Markdown / Word split. This
  directly decides what the home strip should feature.
- **Whether the home strip grew downloads or merely diverted them from
  `/download`.** Today `/download` gets 19.5k visitors a year and the strip is
  designed to intercept some of them; without this change, a drop in `/download`
  traffic would be unreadable.
- **Tile-click volume on `/overview`** — how many of those 54.5k session-endings
  are a handoff to the docs rather than abandonment. This determines whether
  `/overview` needs work at all.
- **Which URLs 404.**

Note the deploy date somewhere; it is the boundary of the old baseline.

---

## Not in this document

Adding `docs.arc42.org` / `faq.arc42.org` to the property, the separate
`quality.` / `canvas.` sites, and the `status.arc42.org` per-subdomain counts (which
break when docs and faq lose their own `site_id`s) — all in
`plausible-instrumentation-handoff.md`.
