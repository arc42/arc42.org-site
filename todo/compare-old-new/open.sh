#!/bin/sh
set -e
cd "$(dirname "$0")"

docker compose up -d

URL="http://localhost:8080"
echo "Serving at $URL"

if command -v open >/dev/null 2>&1; then
  open "$URL"
elif command -v xdg-open >/dev/null 2>&1; then
  xdg-open "$URL"
else
  echo "Open $URL in your browser."
fi
