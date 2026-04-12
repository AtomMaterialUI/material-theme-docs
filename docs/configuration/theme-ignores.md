---
layout: docs
title: Theme Ignores
description: Fine tuning for External Themes
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/islands-settings'
  title: Islands Settings
next:
  url: '/docs/configuration/theme-randomizer'
  title: Theme Randomizer
---

This page explains how to resolve rendering issues with external themes by ignoring specific theme properties in favor of default values.
{:class='title'}

{% include carbonads.html %}

This feature is available exclusively to premium users. You can acquire a premium license for the entire plugin or specifically for these features via the following link: [Material Theme Custom Theme](https://plugins.jetbrains.com/plugin/19308-material-theme-ui-custom-theme).
{:class='card-panel warn'}

----

## Overview

The Material Theme UI plugin includes a variety of predefined themes, offering a wide range of aesthetic options. Its theming system provides flexibility and customization by exposing a streamlined set of properties, allowing you to focus on the most essential aspects of your UI.

While the plugin's native themes are highly optimized, the JetBrains Marketplace offers a vast collection of third-party themes. These external themes often use a different theming structure, allowing authors to customize properties at a very granular level. To bridge these differences, the plugin employs an algorithm to adapt the JetBrains theming system to the Material Theme UI framework. Occasionally, this adaptation can result in color or size inconsistencies.

For instance, theme authors might modify only the most common properties, leaving others to inherit from a parent theme (like Darcula or Light). While often harmless, these discrepancies can occasionally cause visual friction with the rest of the Material Theme UI.

This page allows you to add missing or problematic properties to an "ignore list." When a property is listed here, the plugin will use the value defined by the _Material Theme UI system_ instead of the one specified in the theme's configuration file.

{% include figure.html content="/screens/ignores/themeIgnores.png" caption="Theme Ignores" %}


### Example

To illustrate, consider the [Cobalt2 Reshaded Theme](https://plugins.jetbrains.com/plugin/28023-cobalt2-theme-reshaded-). While this theme is visually appealing, certain elements may remain unthemed, resulting in "gray areas" that stand out against the primary blue palette.

{% include figure.html content="/screens/ignores/noIgnore.png" caption="Git Log: Without Ignores" %}

{% include figure.html content="/screens/ignores/tableNoIgnore.png" caption="Table: Without Ignores" %}

In these examples, the Git Log and Tables display certain elements in gray, which do not blend seamlessly with the overall UI.

After adding the relevant properties to the ignore list, the interface is much more cohesive:

{% include figure.html content="/screens/ignores/withIgnores.png" caption="Git Log: With Ignores" %}

{% include figure.html content="/screens/ignores/tableWithIgnores.png" caption="Table: With Ignores" %}

As shown above, by skipping the problematic properties, the plugin falls back to its own default values (e.g., _Tree Color_ for the Git Log and _Contrast Color_ for the Table).

**Note**: Identifying the specific properties to ignore can be a trial-and-error process, as they are not always explicitly documented. You can consult the JetBrains documentation or community resources on GitHub for guidance, or simply add properties one by one until you achieve the desired look.
{:class='card-panel info'}

----

## Settings

You can choose to ignore theme properties globally (for all themes) or specifically for a single theme. Use the dropdown at the top of the settings page to select the theme you wish to modify.

{% include figure.html content="/screens/ignores/themeSelector.png" caption="Theme Selection" %}

The table below displays the currently ignored properties. You can add or remove entries using the toolbar at the top of the table.

Within the table, use the dropdown to browse available properties. You can search the list by typing and navigate using the arrow keys.

{% include figure.html content="/screens/ignores/ignoreList.png" caption="Ignore List" %}

Once you click **Apply**, the plugin will merge the theme-specific ignored properties with your global settings and reload the theme accordingly.