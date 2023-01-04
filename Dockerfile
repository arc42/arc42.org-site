FROM jekyll/builder

LABEL version="0.9.0"
LABEL description="develop and generate arc42 site"
LABEL vendor="arc42 (Gernot Starke)"

COPY Gemfile .

RUN apk update && \
    apk add ncurses && \
    bundle install

WORKDIR /srv/jekyll
EXPOSE 4000
