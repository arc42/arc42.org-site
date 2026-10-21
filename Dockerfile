# Pinned by digest, not just the tag: a floating `ruby:3.4-slim` makes every
# build ask Docker Hub for the current digest and, whenever Ruby ships a patch,
# re-run apt-get and the whole bundle install (and fail offline). The Makefile
# pulls this exact image into the local store so rebuilds work without network.
# To move to a newer base: `docker buildx imagetools inspect ruby:3.4-slim`,
# paste the new digest here, `make build`.
FROM ruby:3.4-slim@sha256:48ebc88c7c77e39b26f8f3807765745bd13fe4a09500d4f3afac444c625ad1ae

LABEL description="arc42.org Jekyll dev image"

RUN apt-get update && apt-get install -y --no-install-recommends \
      build-essential git libcurl4 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /tmp/bundle

RUN gem install bundler:2.3.25

COPY Gemfile Gemfile.lock ./

RUN bundle _2.3.25_ config set path /usr/local/bundle \
    && bundle _2.3.25_ install --frozen --jobs 4 --retry 3 \
    && mkdir -p /opt/site-deps \
    && sha256sum Gemfile.lock | awk '{ print $1 }' > /opt/site-deps/.gemfile-lock.sha256

COPY docker/jekyll-entrypoint.sh /usr/local/bin/jekyll-entrypoint
RUN chmod +x /usr/local/bin/jekyll-entrypoint

WORKDIR /site

EXPOSE 4200

ENTRYPOINT ["jekyll-entrypoint"]
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "4200", "--watch"]
