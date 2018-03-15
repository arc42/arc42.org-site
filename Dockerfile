FROM jekyll/builder

LABEL version="0.9.0"
LABEL description="develop and generate arc42.org site"
LABEL vendor="arc42 (Gernot Starke)"

COPY Gemfile .
#COPY Gemfile.lock .

RUN bundle install

WORKDIR /srv/jekyll
EXPOSE 4000
