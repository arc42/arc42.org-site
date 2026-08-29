# AGENTS.md - arc42.org Jekyll Site

## Build/Test Commands
- **Build**: `bundle exec jekyll build` or `jekyll build`
- **Serve locally**: `bundle exec jekyll serve` or `jekyll serve`
- **Install dependencies**: `bundle install`
- **No specific test commands** - this is a static Jekyll site

## Technology Stack
- **Jekyll** static site generator with **Minimal Mistakes** theme
- **Ruby/Bundler** for dependency management
- **Sass/SCSS** for styling
- **Liquid** templating engine
- **Kramdown** markdown processor

## Code Style Guidelines
- **Markdown files**: Use YAML front matter with `---` delimiters
- **SCSS imports**: Use `@import` statements, follow existing structure in `assets/css/main.scss`
- **File naming**: Use kebab-case for files (e.g., `about-us.md`)
- **Images**: Store in `/images/` with descriptive paths, prefer `.webp` format
- **Liquid templates**: Use `{% raw %}{% %}{% endraw %}` for logic, `{% raw %}{{ }}{% endraw %}` for output
- **YAML**: Use 2-space indentation, quote strings with special characters
- **URLs**: Use relative paths starting with `/` for internal links

## Content Guidelines
- Keep content focused on software architecture and arc42 methodology
- Use semantic HTML structure in markdown
- Optimize images for web (prefer WebP, include alt text)
- Follow existing page structure patterns from `_pages/` directory