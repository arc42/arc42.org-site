---
title: "Download arc42"
layout: splash
permalink: /download
header:
  overlay_color: "#000"
  overlay_filter: "0.2"
  overlay_image: /assets/images/splash/unsplash-download-pedro-lastra.jpg
  cta_label: "Get it!"
  cta_url: "/download/"
  caption: "Photo credit: [**unsplash**](https://unsplash.com/photos/5g8dJvtYRYA/)"
excerpt: "Version 7.0 - the most practical and effective arc42 ever."

intro:
  - excerpt: "Version 7.0, released January 15th 2017."


---

{% include feature_row id="intro" type="center" %}

{% assign formats = "asciidoc|docx|markdown|latex" | split: "|"  %}  
{% assign types = "plain|withhelp" | split: "|"  %}  
| Format | Language | Plain | With Help |
|--------|----------|-------|-----------|
{% for format in formats %}| {{ format }} | EN | {% for type in types %} [.zip](download/arc42-template-EN-{{type}}-{{format}}.zip?raw=true) |{% endfor %}
|  | DE | {% for type in types %} [.zip](download/arc42-template-DE-{{type}}-{{format}}.zip?raw=true) |{% endfor %}
{% endfor %}|
Confluence | EN |  | [5.x or 6.x](https://www.dropbox.com/s/yvlkkozpt36rovr/templateEN-V6-confluence-53.xml.zip?dl=0), [4.3](https://www.dropbox.com/s/9ss7s1h24ikyx5d/templateEN-V6-confluence-43.xml.zip?dl=0) |
|            | DE |  | [5.x oder 6.x](https://www.dropbox.com/s/phz6fgdas2p320a/templateDE-V6-confluence-53.xml.zip?dl=0), [4.3](https://www.dropbox.com/s/x7n456bw8i8dl97/templateDE-V6-confluence-43.xml.zip?dl=0) |


If you consider to use confluence, the [asciidoc2confluence](https://github.com/rdmueller/asciidoc2confluence) script might be helpful. There is also a [confluence plugin available from the atlassian market place](https://marketplace.atlassian.com/plugins/com.networkedassets.plugins.space-blueprint/server/overview).
