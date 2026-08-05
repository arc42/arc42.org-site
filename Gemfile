source "https://rubygems.org"

# Jekyll 4.x — the site is built & served by Netlify, so we are not bound
# to the github-pages gem's ancient Jekyll 3.9 / ruby-sass stack.
gem "jekyll", "~> 4.3"

# Pin the SCSS compiler to the libsass-based 2.x converter. The vendored
# minimal-mistakes SCSS uses classic `@import`, which dart-sass (converter
# 3.x) has deprecated; 2.x compiles it cleanly and without warnings.
gem "jekyll-sass-converter", "~> 2.2"

# include-cache backs the include_cached calls in the vendored theme;
# sitemap generates the sitemap.xml that robots.txt advertises. SEO meta
# comes from the vendored _includes/seo.html — NOT the jekyll-seo-tag
# plugin — and the site has no posts, hence no feed and no jekyll-feed.
group :jekyll_plugins do
  gem "jekyll-include-cache"
  gem "jekyll-sitemap"
end

group :test do
  gem "html-proofer"
end

# Windows/JRuby-only helpers, harmless elsewhere.
gem "webrick", "~> 1.8"
