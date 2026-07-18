# arc42 visual design proposals

This directory contains seven independent static design proposals.

- `field-manual/`: V1, Field Manual 42
- `field-manual-v2/`: V2, Founders' Notebook
- `field-manual-v3/`: V3, Living Architecture
- `ghost-structures/`: V4, Ghost Structures (transparent photo + diagram headers)
- `petrol-apricot/`: V5, Petrol & Apricot (friendly full palette)
- `twelve/`: V6, Twelve (Swiss poster grid around the 12 sections)
- `evergreen/`: V7, Evergreen Press (drenched pine green, book pacing)

V4 through V7 each cover four pages (Home, Method, Download, Resources) on the
simplified 2026 information architecture.

Open `prototype/index.html` to compare them.

## Recommended preview method

From the repository root:

```sh
python3 -m http.server 4174
```

Then open:

```text
http://localhost:4174/prototype/
```

No build step is required. All images and diagrams are existing repository assets. Proposed web fonts load from Google Fonts when an internet connection is available; system fallbacks keep the pages usable without them.

## Page coverage

V2 includes seven linked pages:

- Home
- Template
- Method and canvas
- Download
- Examples
- Stories and resources
- People

V3 includes six linked pages:

- Home
- Template
- Ecosystem method and canvas
- Download
- Explore resources
- People

These are visual and interaction prototypes. Download actions simulate a successful handoff and do not retrieve ZIP files.
