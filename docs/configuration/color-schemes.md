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

Navigate to `Settings → Editor → Color Scheme` to modify colors. This will create a local copy of the scheme (e.g.,
`_@user_<schemeName>.icls`), which you can then modify and rename.

{% include figure.html content="/screens/schemes/colorschemes.png" caption="Color Schemes" %}

{% include figure.html content="/screens/schemes/colorschemes2.png" caption="Color Scheme Editor" %}

Note: If the [Automatically reset color schemes](/docs/configuration/other-tweaks-settings#automatically-reset-color-schemes) option is
enabled, manual changes will not persist. We recommend using the `Duplicate` function to create a permanent copy.

----

## Color Scheme Overrides

Since version 12.0.0, you can override certain properties of **all** color schemes via these Settings, including the color schemes provided
by JetBrains or from third-party plugins. This allows you to align some colors with the theme, to use predefined values, to use your own
colors, etc.

At this moment, only a handful of properties are available, tailored from the most common use cases. More properties will be added in future
releases.

{% include figure.html content="/screens/colorSchemes/colorSchemeOverrides.png" caption="Color Scheme Overrides" %}

**Note**: These properties forcefully override the color schemes, and therefore cannot be reverted once applied. If you want to preserve
any changes you could have made, create a backup of the color scheme before applying any overrides.
{:class='card-panel warn'}

### Diff Colors Opacity

**Diff Colors** are the colors displayed when opening a Diff or a Merge window. It showcases added lines, deleted lines, modified lines, and
sometimes conflicting lines. However, many theme editors provide a fully opaque, bright background, making it hard to understand what
changed.

This setting allows you to adjust the opacity of the background color of these highlights. Reducing the
opacity can help make the editor less cluttered and easier to read.

{% include figure.html content="/screens/colorSchemes/fullyOpaqueDiff.png" caption="Fully Opaque Diff Colors" %}

{% include figure.html content="/screens/colorSchemes/transparentDiff.png" caption="Transparent Diff Colors" %}

{% include figure.html content="/screens/colorSchemes/fiftyPercentOpaqueDiff.png" caption="Fifty Percent Opaque Diff Colors" %}

### VCS Gutter Colors

Another area of concern are the VCS Gutter Indicator Colors. Some theme editors completely missed this section or provided values that don't
have enough contrast with the background, making it hard to see the changes in the gutter.

This setting forcefully replaces these colors to use the same ones provided by the Material Themes.

<div class="masonry" markdown="0">
{% include figure.html content="/screens/colorSchemes/originalVCS.png" caption="Original VCS Gutter Colors" %}

{% include figure.html content="/screens/colorSchemes/updatedVCS.png" caption="Updated VCS Gutter Colors" %}

</div>

### Popups and Notifications

Another point of contention is the color of popups and notifications, which is sometimes forgotten by theme editors, leading to the theme
displaying the default Darcula/Light color.

Just like the above settings, this option forcefully replace these colors with values taken from the Theme itself, ensuring a consistent
look and feel across the IDE.

{% include figure.html content="/screens/colorSchemes/originalPopupColor.png" caption="Original Popup Colors" %}

{% include figure.html content="/screens/colorSchemes/updatedPopupColor.png" caption="Updated Popup Colors" %}

### Automatically reset color scheme

This option automatically removes all customizations from your color scheme when switching themes. This ensures a clean slate, which is
especially useful given that many plugins, including this one, modify color schemes.

It also ensures you receive all the latest color scheme updates, as copied schemes cannot automatically detect changes to the original.

**Note**: This setting was previously found in the **Other** section of the plugin settings.
{:class='card-panel info'}

### Use Editor Default Font

This option overrides the color scheme's font with the *Default Font* defined in `Settings > Editor > Font`. Since color schemes can define
their own fonts—leading to inconsistencies across different themes—enabling this ensures a uniform typography regardless of the active color
scheme.

**Note**: This setting was previously found in the **Other** section of the plugin settings.
{:class='card-panel info'}

### Restoring Color Scheme Defaults

To revert a scheme to its original state, select `Restore Defaults` from the scheme's menu or use
the [Reset Color Scheme](/docs/configuration/quick-actions-panel#material-theme-features) action in
the [Quick Actions Panel](/docs/configuration/quick-actions-panel).

In addition, a new **Force Reset Color Scheme** action has been added to the __Color Scheme Overrides__ settings page as well.

**Important**: Resetting or restoring defaults will permanently erase all changes made to that scheme. To preserve your modifications,
create a backup by using the `Duplicate` function before resetting.
{:class='card-panel warn'}

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