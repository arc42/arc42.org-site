# arc42.org Website

> Live at [arc42.org](https://www.arc42.org)

Built with [Jekyll](https://jekyllrb.com/) and served by [Netlify](https://www.netlify.com/).

**Stack:** Jekyll 4 (Ruby) · [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme (fully vendored) · Docker Compose for local development · Netlify for build & deploy.

---

## Local development

All development runs in Docker — **no local Ruby, Bundler, or Jekyll needed**, just Docker and `make`.

```bash
make build     # build the dev image once (installs the pinned gems — needs network)
make dev       # start Jekyll with live reload at http://localhost:4000
```

Everything after the first `make build` works **fully offline** (e.g. on a train): the
gems are baked into the Docker image and the theme is vendored into the repo, so no
build step reaches out to the network.

### Make targets

| Command           | What it does                                                              |
| ----------------- | ------------------------------------------------------------------------ |
| `make help`       | List all targets.                                                        |
| `make dev`        | Start the dev server with live reload at http://localhost:4000.          |
| `make build`      | Build the `arc42-site:latest` Docker image from the pinned gems.         |
| `make site`       | Generate the static site into `_site/`.                                  |
| `make check-links`| Build, then validate internal links/images/HTML with html-proofer.      |
| `make shell`      | Open a shell inside the container for debugging.                          |
| `make install`    | Refresh gems in the image after editing the `Gemfile`.                    |
| `make update`     | Update gems to their latest allowed versions (rewrites `Gemfile.lock`).  |
| `make stop`       | Stop and remove the running container.                                    |
| `make logs`       | Tail the dev server logs.                                                 |
| `make clean`      | Remove `_site/` and local caches.                                         |

After `make update` (or any change to `Gemfile.lock`), the container refuses to serve
until you re-run `make build` — the entrypoint compares the lockfile against the gems
baked into the image and fails loudly on drift, so you never run against stale gems.

---

## Theme

The [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme (v4.24.0) is
**vendored** into this repository — its `_layouts/`, `_includes/`, `_sass/`, and
`assets/js/` live here directly rather than being pulled from a remote theme or gem at
build time. This keeps builds fully offline and puts every template under version
control. arc42-specific customizations (masthead, footer, head, SCSS) sit alongside the
stock theme files and override them via Jekyll's normal precedence.

## Deployment

Netlify builds and deploys on push. The build configuration lives in
[`netlify.toml`](netlify.toml) (build command, publish directory, `JEKYLL_ENV=production`)
and the Ruby version is pinned in [`.ruby-version`](.ruby-version) — these override the
Netlify dashboard's build settings.

---

## Resources library

The [`/resources/`](https://www.arc42.org/resources/) page (books, articles, talks,
videos) is **data-driven**. Every entry is a single Markdown file in the
[`_resources/`](_resources/) collection — no HTML to touch, no counts to maintain.

### Add a resource

Drop one file in `_resources/`, e.g. `_resources/my-new-talk.md`:

```yaml
---
type: talk                 # book | article | talk | video   (required)
title: "My new talk"       # required
language: en               # en | de                         (required)
year: 2026                 # optional — undated items sort to the end
summary: "One-line description shown on the card."   # required
search: "extra author keywords for the filter"       # optional
cover: /images/resources/my-new-talk.webp            # optional (see Thumbnails)
link: https://speakerdeck.com/...                    # optional — omit for no link
link_label: "Open slides"                            # optional CTA text
id: my-anchor              # optional — for deep links like /resources/#my-anchor
---
```

That's it. The listing template ([`_includes/resource-item.html`](_includes/resource-item.html))
renders the card; [`_pages/resources.md`](_pages/resources.md) loops the collection,
sorts by `year` descending (undated last), and computes the type-badge counts in
Liquid — so the numbers can never drift out of sync with the files.

The **link arrow is derived from the URL**, so it stays consistent:
internal `→`, external `↗` (plus `rel="noopener"`), and `.pdf` `↓`.

### Thumbnails

Set `cover:` to any image path and the card shows that thumbnail. Omit it and the
card falls back to a color-coded letter marker (**B**ook / **A**rticle / **T**alk /
**V**ideo). This works for every type, not just books.

- New thumbnails (articles, talks, videos): put them in `/images/resources/`.
- Existing book covers live in `/images/books/` — leave them there.

The thumbnail box is portrait-ish (`4rem × 5.5rem`) with `object-fit: contain`, so
both portrait covers and landscape stills fit without distortion.

### Detail pages (opt-in)

Each resource also gets its own page at `/resources/<slug>/` (the collection is
`output: true`). Most are minimal landing pages generated from the front matter; add
`detail: true` to promote one and **the listing card links to it** ("More details →")
instead of straight out.

Write Markdown **below the front matter** and it becomes the body of that detail page
— headings, lists, a longer description, a cover, a buy/watch button (from `link:`).
[`_resources/effektive-softwarearchitekturen-9.md`](_resources/effektive-softwarearchitekturen-9.md)
is the worked example; the layout is [`_layouts/resource.html`](_layouts/resource.html).

> **Remember:** [`sitemap.xml`](sitemap.xml) is maintained by hand. When you publish a
> `detail: true` page, add its URL there — the other auto-generated item pages are
> orphaned landing pages and are intentionally left out of the sitemap.

## How does the search page work?
The search uses the [Simple-Jekyll-Search Javascript Function](https://github.com/christian-fei/Simple-Jekyll-Search),
Copyright 2015-2020, Christian Fei, licensed under the MIT License.  
This function is available in the [search-script.js file](search-script.js).  
In the [search.json file](search.json), all content we want to include within the search is converted into 
key-value pairs which can then be easily read by the search script.  
In [search.html](_pages/search.html), we create the page that shows the search box and results, using the 
script and the json, and with that, the search is ready. 

## Credits

##### Michael Rose, creator of the Minimal-Mistakes Jekyll Theme

- <https://mademistakes.com>
- <https://twitter.com/mmistakes>

#### Icons + Images:

* Free images can be found at [Unsplash](https://unsplash.com/)
* I bought several icons from [IconFinder](https://www.iconfinder.com?ref=gernotstarke), a great source for professional-grade icons. Recommended!
* I generated the various favicon files with [RealFavIconGenerator](https://realfavicongenerator.net/).


---

## Licenses


### arc42 Template
The arc42 template is licensed under a [CreativeCommons Sharealike International 4.0 License](https://creativecommons.org/licenses/by-sa/4.0/).

You are free to:

* **Share** — copy and redistribute the template in any medium or format
* **Adapt** — remix, transform, and build upon the material for any purpose, even commercially.



### [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/)


##### The MIT License (MIT)

Copyright (c) 2016ff Michael Rose

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
