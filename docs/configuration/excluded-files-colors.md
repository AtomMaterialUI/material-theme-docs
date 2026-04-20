---
layout: docs
title: Excluded Files Colors
description: Learn about File Colors, Scopes and Excluded files
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/status-bar-widgets'
  title: Status Bar Widgets
next:
  url: '/docs/configuration/file-status-colors'
  title: File Status Colors
---

{% include carbonads.html %}

## Introduction

JetBrains IDEs are excellent for projects of any scale. However, as projects grow, navigating through open files, the project tree, or search results can become increasingly difficult.

To address this, JetBrains IDEs offer a feature called **File Colors**. It allows you to assign custom colors to specific groups of files based on patterns.

Common examples include:

- Excluded Files
- Tests
- Erroneous files
- Build Files
- Logs
- etc.

You can even colorize specific folders representing different modules or parts of your project. As a result, files in these categories will have a distinct background color, significantly reducing the time spent searching and navigating through the use of *color-based identification*.

This feature is supported in several areas, including:

- Project Tree
- Editor Tabs
- Find in Files Dialog
- Search Everywhere dialog
- Navigate to File/Class/Symbol dialog
- And more…

## Configuration

JetBrains editors come with at least two pre-configured _File Colors_:

- **Excluded files**: Files marked as excluded are omitted from indexing, searching, and navigation, which significantly improves performance. Examples include `node_modules`, `logs`, `vendors`, `gradle`, etc.
- **Tests**: Typically identifies the tests directory.

**Note**: You can mark a directory as excluded by right-clicking it and selecting `Mark Directory as…`.

Depending on the IDE, other _File Colors_ might also be pre-installed. You can find them under `Settings/Preferences → Appearance & Behavior → File Colors`.

{% include figure.html content="/screens/colors/fileColors.png" caption="File Colors" %}

From this settings screen, you can add new colors, share them across projects, disable them for specific components, or adjust their priority.

**Tip**: The [Project Tree Highlighter](https://plugins.jetbrains.com/plugin/13951-projecttree-color-highlighter) plugin also allows you to colorize folders directly from the Project View.
{:class='card-panel'}

----

### Scopes

While the pre-bundled options are a great start, you can create custom file colors using **Scopes**. Scopes allow you to define pattern-based rules to include or exclude specific directories.

To set up a custom color:
1. Create a **Scope** and define its rules.
2. Add your new scope to the _File Colors_ list.
3. Move it to the top of the list to ensure it isn't overridden by other colors.

{% include figure.html content="/screens/colors/scopes.png" caption="Scopes" %}

{% include figure.html content="/screens/colors/scopes2.png" caption="Add File Colors To Scope" %}

For more information, visit the [official JetBrains documentation on File Colors](https://www.jetbrains.com/help/idea/file-colors.html).

-----

## Material File Colors

### Theme-Specific File Colors

Themes can override default file colors to provide a palette that matches their specific aesthetic.

{% include figure.html content="/screens/colors/cobaltColors.png" caption="Cobalt2 File Colors" %}

{% include figure.html content="/screens/colors/catpuccinColors.png" caption="Catppuccin File Colors" %}

Similarly, the themes included with this plugin provide their own optimized File Colors.

{% include figure.html content="/screens/colors/materialColors.png" caption="Material File Colors" %}

### Excluded Files Theme Color

In addition, the plugin includes a specific color designed for **Excluded Files**.

Known as the **Excluded Files Color** in the theme nomenclature, this is typically a dimmed variant of the background color. It is automatically injected into the "Gray" File Color, making it ready for use with excluded files.

{% include figure.html content="/screens/colors/oceanicExcluded.png" caption="Material Oceanic Excluded Files Color" %}

{% include figure.html content="/screens/colors/darkerExcluded.png" caption="Material Darker Excluded Files Color" %}

{% include figure.html content="/screens/colors/spaceExcluded.png" caption="Material Space Excluded Files Color" %}

**Note**: While theme authors are not required to provide a specific "excluded files color," most also use the "Gray" File Color for this purpose.
{:class='card-panel info'}

-----

## Color reference

{% for theme in site.data.themes.material %}
{% include color.html color=theme field="excluded" %}
{% endfor %}

{% for theme in site.data.themes.material2 %}
{% include color.html color=theme field="excluded" %}
{% endfor %}

{% for theme in site.data.themes.other %}
{% include color.html color=theme field="excluded" %}
{% endfor %}

{% for theme in site.data.themes.other2 %}
{% include color.html color=theme field="excluded" %}
{% endfor %}