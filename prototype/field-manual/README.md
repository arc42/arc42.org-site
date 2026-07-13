# Field Manual 42 visual prototype

This directory contains a portable static prototype for the proposed arc42.org redesign.

## Preview locally

No build step is required.

Option 1: open `index.html` directly in a browser.

Option 2: run a small local server from the repository root:

```sh
python3 -m http.server 4174
```

Then open:

```text
http://localhost:4174/prototype/field-manual/
```

## Included pages

- `index.html`: homepage
- `download.html`: workflow-led template selection
- `overview.html`: the twelve arc42 sections
- `documentation.html`: long-form documentation pattern
- `examples.html`: example systems and learning paths
- `resources.html`: filterable books, articles, talks, and videos
- `about.html`: people, community, and project history
- `system.html`: visual-system and component reference

All page links and image references are relative to the repository. The two proposed typefaces are loaded from Google Fonts when an internet connection is available. System fallbacks keep the prototype usable offline.

## Prototype limitations

- The Download page simulates a successful handoff but does not download a file.
- Resource filters work against the sample content included in the prototype.
- Text and metadata are representative and should be reviewed before production use.
- This prototype does not replace the current Jekyll pages.

The detailed design brief lives at `todo/arc42-field-manual-redesign.md`.
