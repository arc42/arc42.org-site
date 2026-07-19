# arc42.org layout comparison

`comparison.html` is a fully self-contained page (all screenshots
inlined as base64 — no network requests, no other files needed).

## Easiest: just open it

Double-click `comparison.html`, or `open comparison.html` — works in
any browser, no server required.

## With Docker

```bash
docker compose up -d
```

Then open http://localhost:8080. Stop with `docker compose down`.

## Transferring to another computer

Copy this whole folder (or just `comparison.html` — the
`docker-compose.yml` only needs it to sit alongside).
