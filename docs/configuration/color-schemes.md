---
layout: docs
title: Color Schemes
description: Installation and Configuration
group: configuration
comments: true
toc: true

previous:
  url: '/docs/configuration/settings'
  title: Settings
next:
  url: '/docs/configuration/license-info'
  title: License Information
---

The plugin provides a variety of color schemes optimized for Material Themes, delivering a flat, borderless, and modern interface.
{:class='title'}

{% include carbonads.html %}

## Installation

Change the active color scheme via:
- IDE settings: `Editor → Color Scheme`
- `Quick Switch` menu: Select `Color Scheme`.

{% include figure.html content="/screens/schemes/quickSwitch.png" caption="Color Scheme Switcher" %}

The list includes all your installed color schemes as well as those provided by JetBrains. The color schemes included with the plugin are:

<ul>
{% for theme in site.data.themes.material %}
    <li>Material {{ theme.name }}</li>
{% endfor %}

{% for theme in site.data.themes.material2 %}
    <li>Material {{ theme.name }}</li>
{% endfor %}

{% for theme in site.data.themes.other %}
    <li>{{ theme.name }}</li>
{% endfor %}

{% for theme in site.data.themes.other2 %}
    <li>{{ theme.name }}</li>
{% endfor %}
</ul>

## Customization

While color schemes are optimized for immediate use, you can customize them in the `Color Scheme` editor.

Navigate to `Settings → Editor → Color Scheme` to modify colors. This will create a local copy of the scheme (e.g., `_@user_<schemeName>.icls`), which you can then modify and rename.

{% include figure.html content="/screens/schemes/colorschemes.png" caption="Color Schemes" %}

{% include figure.html content="/screens/schemes/colorschemes2.png" caption="Color Scheme Editor" %}

Note: If the [Automatically reset color schemes](/docs/configuration/other-tweaks-settings#automatically-reset-color-schemes) option is enabled, manual changes will not persist. We recommend using the `Duplicate` function to create a permanent copy.

To revert a scheme to its original state, select `Restore Defaults` from the scheme's menu or use the [Reset Color Scheme](/docs/configuration/quick-actions-panel#material-theme-features) action in the [Quick Actions Panel](/docs/configuration/quick-actions-panel).

**Important**: Resetting or restoring defaults will permanently erase all changes made to that scheme. To preserve your modifications, create a backup by using the `Duplicate` function before resetting.

----------
## Supported languages

|              |             |             |
|:-------------|:------------|:------------|
| Java         | Properties  | Erlang      |
| Gradle       | Yaml        | Elm         |
| Groovy       | JSON        | Matlab      |
| Scala        | Ruby        | Haskell     |
| Kotlin       | Python      | Elixir      |
| CSS          | PHP         | Hibernate   |
| Sass         | Twig        | SQL         |
| LESS         | Blade       | Markdown    |
| Stylus       | C           | Bash        |
| HTML         | C++         | HOCON       |
| Haml         | C#          | Apache      |
| XML          | ASP         | Gitignore   |
| Jade/Pug     | Objective C | Lua         |
| JavaScript   | Swift       | Perl        |
| TypeScript   | Go          | Slim        |
| CoffeeScript | ERB         | Velocity    |
| Ini          | EJS         | Rust        |
| Regex        | Rdoc        | HTTP Client |

----------
## Color Palette

The following palettes are relevant only for _Material Themes_ (hover to see the hex value):

<span style="float:none">Dark variant</span>
<span style="float:right">Light variant</span>

{% for color in site.data.colors %}
{% include color.html color=color %}
{% endfor %}