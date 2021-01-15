---
layout: docs
title: Excluded Files Colors
description: Learn about File Colors, Scopes and Excluded files
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/component-settings'
  title: Component Settings
next:
  url: '/docs/configuration/file-status-colors'
  title: File Status Colors
---

{% include carbonads.html %}

## Introduction

JetBrains editors are truly great for all kinds of projects, whatever big they are. However, once you've started working
on big projects, you're beginning to notice that it's getting harder finding your way through open files, the project
tree, the search results and so on.

Therefore, the IDEs have a nifty feature called **File Colors**. It allows developers to add custom colors to
specific groups of files according to a pattern. For example, it could be:
- Excluded Files
- Tests
- Erroneous files
- Build Files
- Logs
- etc...

You can even set specific folders representing different parts/modules of your project.

These colors will be then displayed in different parts of the IDE, namely:
- Project Tree
- Editor Tabs
- Find in Path Dialog
- Search Everywhere dialog
- Navigate to file/class/symbol dialog
- And other places…

This will considerably reduce the time looking for a file and navigating thanks to *color grepping*.

## Configuration

The JetBrains editors come prebundled with at least two File Colors:
- **Excluded files**, or files that are _Marked as Excluded_, and therefore excluded for indexing, searching and
  navigation, resulting in huge performance boosts. Such examples are `node_modules`, `logs`, `vendors`, `gradle` etc…
You can mark a directory for exclusion by clicking right on the directory and select `Mark Directory as…`
- **Tests**, which is the test directory in gradle/rails/symfony…

Specific IDEs might have other File Colors preinstalled.

You can see them in `Settings → Appearance & Behavior → File Colors`.

{% include figure.html content="/screens/fileColors.png" caption="File Colors" %}

There you can add new Local colors, share them across projects, disable them on the project view/tabs/both, and last but
not least you can reorder them to give precedence to one in case two or more file colors are falling in the same pattern
rules.

### Scopes

These two options are pretty limited, but you can add your own file colors according to certain patterns. For
example, differentiating between the `docs` directory than the rest of the source.

To do so, one must create a **Scope**. There you can define your pattern rules, which directories are included in the
scope, which are excluded, and so on. Finally, add your new created scope in the File Colors list, and rise it up to the
top so it won't be shrouded by previous file colors.

{% include figure.html content="/screens/scopes.png" caption="Scopes" %}

See more at
[File Colors](https://www.jetbrains.com/help/idea/2017.3/file-colors.html?utm_medium=help_link&utm_source=from_product&utm_campaign=IU&utm_content=2017.3)

-----
## Material File Colors

### Excluded Files Theme Color

File Colors are pretty neat, but the current prebundled File Colors are adapted for the _Darcula/IntelliJ_ look and
feels, not for the Material Themes.

To remedy this, the Material Theme is also coming prebundled with File Colors, specifically for **Excluded files**.

However, because the _File Colors_ are user settings, and because the user could quite possibly have modified the default
Excluded Files' file colors, the plugin could not override this setting with a better suited color. Therefore, it is the
responsibility of the user to change the color of the Excluded Files.

To do so, open the File Colors Settings (`Appearance > File Colors`), select the scope you want to change the color (for
instance, "Excluded Files") and click to the _Edit_ button. There you'll see a list of predefined colors, as well as one
specific color named `Theme`, which corresponds to the current theme's `Excluded Color`.

{% include figure.html content="/screens/excludedFilesColors.png" caption="Excluded Files Color" %}

Moreover, if you select this color and switch to another theme, the selected theme's excluded color will be applied
without the need to reopen the settings.

However, just like many of the features of the plugin, this color option is set at the start of the IDE, meaning that if
you switch to another theme you'll need a full restart to see the new colors applied.

{% include figure.html content="/screens/excludedFilesColors2.png" caption="The excluded files color is set by the theme" %}

-----
## Color Reference

{% for theme in site.data.themes.material %}
{% include color.html color=theme field="excluded" %}
{% endfor %}


{% for theme in site.data.themes.other %}
{% include color.html color=theme field="excluded" %}
{% endfor %}

{% for theme in site.data.themes.other2 %}
{% include color.html color=theme field="excluded" %}
{% endfor %}
