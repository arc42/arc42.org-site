FROM jekyll/builder

LABEL version="0.8.1"
LABEL description="develop and generate arc42.org site"
LABEL vendor="arc42 (Gernot Starke)"

COPY Gemfile .
#COPY Gemfile.lock .

RUN apk update && \
    apk add ncurses && \
    bundle install

WORKDIR /srv/jekyll
EXPOSE 4000
