# AGENTS.md - arc42.org Jekyll Site

## Build/Test Commands — Docker ONLY

Everything runs inside the project's Docker image via `make`. **Never** run
`bundle`, `jekyll`, `gem` or `ruby` on the host, and never install gems or
Ruby versions locally: the host toolchain is deliberately not set up for this
repo (and `Gemfile.lock` pins a Bundler the host does not have). If a target
fails, fix the Docker setup instead of falling back to the host.

- **Verify a change**: `make check-links` — builds `_site/` in Docker, then runs
  html-proofer on internal links, images and HTML. Run it before claiming that
  a change works.
- **Build only**: `make site` — generates the static site into `_site/`.
- **Serve locally**: `make dev` — live reload at http://localhost:4200 (port
  4200 is fixed; see README). Stop with `make stop`.
- **Run anything else in the container**: `docker compose run --rm jekyll <cmd>`,
  or `make shell` for an interactive shell.
- **Gems**: `make install` after editing the `Gemfile`, `make update` to bump
  versions (rewrites `Gemfile.lock`). The image rebuilds itself on the next
  `make` target when `Dockerfile`, `Gemfile`, `Gemfile.lock` or
  `docker/jekyll-entrypoint.sh` change.
- **Download page data**: `make sync-downloads` regenerates `_data/downloads.yml`
  — never edit that file by hand.
- `make help` lists all targets; README.md "Local development" has the details.

Netlify builds production on push (`netlify.toml`, Ruby from `.ruby-version`);
that is the only place the site is built outside Docker.

## Technology Stack
- **Jekyll 4** static site generator; gems pinned in `Gemfile.lock`
- **Minimal Mistakes** theme (v4.24.0), **vendored** into `_layouts/`,
  `_includes/`, `_sass/`, `assets/js/` — no remote theme or theme gem
- **Docker Compose + make** for all local work
- **Sass/SCSS** for styling, **Liquid** templates, **Kramdown** markdown
- Plugins: `jekyll-include-cache`, `jekyll-sitemap` (sitemap.xml is generated);
  SEO tags come from the vendored `_includes/seo.html`, not jekyll-seo-tag

## Code Style Guidelines
- **Markdown files**: Use YAML front matter with `---` delimiters
- **SCSS imports**: Use `@import` statements, follow existing structure in `assets/css/main.scss`
- **File naming**: Use kebab-case for files (e.g., `about-us.md`)
- **Images**: Store in `/images/` with descriptive paths, prefer `.webp` format
- **Liquid templates**: `{% %}` for logic, `{{ }}` for output
- **YAML**: Use 2-space indentation, quote strings with special characters
- **URLs**: Use relative paths starting with `/` for internal links

## Content Guidelines
- Keep content focused on software architecture and arc42 methodology
- Use semantic HTML structure in markdown
- Optimize images for web (prefer WebP, include alt text)
- Follow existing page structure patterns from `_pages/` directory
- Data-driven content lives in `_data/` and `_resources/` — edit the data, not
  the HTML (see README.md for resources, translators, contributors, downloads,
  training dates)
