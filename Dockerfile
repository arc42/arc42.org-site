FROM ruby:2.3-alpine

COPY Gemfile .

RUN apk update && \
    apk add make gcc g++ musl-dev nodejs python
RUN bundle install

WORKDIR /srv/jekyll
EXPOSE 4000
