---
layout: docs
title: Color Palette
group: reference
toc: true
comments: true

previous:
  url: '/docs/configuration/custom-themes'
  title: Custom Themes
next:
  url: '/docs/reference/file-icons'
  title: File Icons
---

You can find here a reference of all colors used in the themes.
{:class='title'}

{% include carbonads.html %}

## Material Themes

<ul class="theme-cards">
{% for theme in site.data.themes.material %}
{% include theme.html theme=theme %}
{% endfor %}
</ul>


## Other Themes

<ul class="theme-cards">
{% for theme in site.data.themes.other %}
{% include theme.html theme=theme %}
{% endfor %}
</ul>
