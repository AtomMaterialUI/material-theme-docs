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

The plugin includes a variety of color schemes optimized for Material Themes, providing a flat, 
borderless, and modern experience.
{:class='title'}

{% include carbonads.html %}

## Installation

You can change the color scheme in several ways:
- Through the IDE settings: `Editor → Color Scheme`
- Using the `Quick Switch` menu: Select `Color Scheme`.

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

While the color schemes are optimized for daily use, you can easily customize any color via the `Color Scheme` editor.

To do so, navigate to `Settings → Editor → Color Scheme` and start modifying the colors. This will automatically create a copy of the current scheme (named `_@user_<schemeName>.icls`), which you can then edit or rename as desired.

{% include figure.html content="/screens/schemes/colorschemes.png" caption="Color Schemes" %}

{% include figure.html content="/screens/schemes/colorschemes2.png" caption="Color Scheme Editor" %}

Note: If the [Automatically reset color schemes](/docs/configuration/other-tweaks-settings#automatically-reset-color-schemes) option is enabled, your manual changes will not be saved. In this case, we recommend using the `Duplicate` function to create a permanent copy.

To revert a modified scheme to its original state, select `Restore Defaults` from the scheme's menu. Alternatively, you can run the [Reset Color Scheme](/docs/configuration/quick-actions-panel#material-theme-features) action from the [Quick Actions Panel](/docs/configuration/quick-actions-panel).

**Important**: Resetting or restoring defaults will permanently erase all changes made to that scheme. To preserve your modifications, use the `Duplicate` function to create a backup copy before resetting.

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