.DEFAULT_GOAL := help

# This site's fixed local dev port. Every arc42 site has its own so their dev
# servers can run side by side; see raw/port-assignment.md in meta.arc42.org.
# Changing it here is not enough: docker-compose.yml and the Dockerfile pass
# the same number to Jekyll so its startup banner names the real port.
SITE_PORT ?= 4200

# The dev image is rebuilt only when one of its inputs changes, never on a plain
# `make dev` -- so day-to-day work needs no network (no Docker Hub lookup, no
# deb.debian.org, no rubygems). The hash goes into an image label; see
# docker-compose.yml.
IMAGE        := arc42-org-site:latest
BASE_IMAGE   := $(shell awk '/^FROM /{print $$2; exit}' Dockerfile)
IMAGE_INPUTS := Dockerfile Gemfile Gemfile.lock docker/jekyll-entrypoint.sh
export IMAGE_INPUTS_HASH := $(shell cat $(IMAGE_INPUTS) | shasum -a 256 | cut -c1-16)

.PHONY: help dev image build stop site check-links sync-downloads clean distclean install update shell logs

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-14s\033[0m %s\n", $$1, $$2}'

dev: image ## Start the local Jekyll dev server with live reload (http://localhost:4200)
	@echo "==> Open http://localhost:$(SITE_PORT)  (NOT http://0.0.0.0:$(SITE_PORT) — Firefox refuses to connect to 0.0.0.0)"
	@docker compose down --remove-orphans >/dev/null 2>&1 || true
	@holder=$$(docker ps --filter "publish=$(SITE_PORT)" --format '{{.Names}}'); \
	if [ -n "$$holder" ]; then \
		echo "==> Port $(SITE_PORT) is already in use by another container: $$holder"; \
		echo "==> That's likely a dev server from a sibling arc42 site repo. Stop it first, e.g.:"; \
		echo "==>   docker stop $$holder"; \
		exit 1; \
	fi
	docker compose up

image: ## Build the dev image only if Dockerfile/Gemfile/Gemfile.lock changed (offline-safe otherwise)
	@have=$$(docker image inspect $(IMAGE) --format '{{index .Config.Labels "org.arc42.image-inputs"}}' 2>/dev/null); \
	if [ "$$have" = "$(IMAGE_INPUTS_HASH)" ]; then \
		echo "==> $(IMAGE) is up to date"; \
	else \
		$(MAKE) --no-print-directory build; \
	fi

build: ## Force a rebuild of the Docker dev image (arc42-org-site:latest); needs network only for new gems
	@# Keep the pinned base image in the local image store: BuildKit then uses it
	@# without asking Docker Hub, and the apt-get layer stays cached.
	@docker image inspect $(BASE_IMAGE) >/dev/null 2>&1 || docker pull $(BASE_IMAGE)
	docker compose build

stop: ## Stop and remove the running dev container
	docker compose down

site: image ## Generate the static site into _site/
	docker compose run --rm jekyll bundle exec jekyll build

check-links: site ## Validate internal links, images, and HTML in the built _site (html-proofer)
	@# /dl/ are Netlify redirects to the template releases (netlify.toml), no files in _site;
	@# the generator checks them: make check-downloads PREFIX=https://arc42.org/dl/ (in arc42-generator)
	docker compose run --rm jekyll bundle exec htmlproofer ./_site --disable-external --allow-hash-href --ignore-urls '/^\/dl\//'

sync-downloads: image ## Write _data/downloads.yml (languages, formats) from manifest.json of the latest arc42-template release
	docker compose run --rm --no-deps -e ALLOW_FEWER -e MANIFEST_URL jekyll ruby _scripts/sync-downloads.rb

clean: ## Remove the generated _site only (keeps image and caches; works while `make dev` runs)
	rm -rf _site .jekyll-metadata

distclean: clean ## Also stop the container and wipe the Jekyll/Sass cache volumes (image is kept)
	@# .jekyll-cache/.sass-cache live in named Docker volumes, not on the host,
	@# so a host rm alone leaves them stale -- wipe the volumes too. This has to
	@# come FIRST: while the dev container runs it holds those mount points and
	@# the rm below fails with "Permission denied".
	-docker compose down -v --remove-orphans
	rm -rf .sass-cache .jekyll-cache

install: build ## Install/refresh gems into the dev image after editing the Gemfile
	docker compose run --rm jekyll bundle install

update: build ## Update gems to their latest allowed versions (rewrites Gemfile.lock)
	docker compose run --rm jekyll bundle update

shell: image ## Open a shell inside the dev container for debugging
	docker compose run --rm jekyll bash

logs: ## Tail logs from the running dev container
	docker compose logs -f jekyll
