---
layout: docs
title: Theme Color Overrides
description: Customize any theme's colors in-place via settings or tool window
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/file-header-settings'
  title: File Header Settings
next:
  url: '/docs/configuration/language-additions'
  title: Language Additions
---

**Theme Color Overrides** lets you customize any theme's colors in-place, persisting your changes for that specific theme.
{:class='title'}

This feature is available for **Premium** and **Custom Theme** license owners.
{:class='card-panel warn'}

{% include carbonads.html %}

## Overview

Previously, you could only preview the colors of the current theme. Now you can edit them directly, either through the **Settings page** or
the new **Tool Window**. Any property listed in the *Theme Ignores* will be ignored, no matter what color you assign to it.

You can:

- Override a theme color that will be persisted for that specific theme.
- Select a color from the current theme's palette or pick a new one.
- Filter properties by name or color.
- Reset individual properties or all properties to their defaults.
- Import and export your theme color overrides to share with others.

## Settings Page

The **Theme Colors Override** settings page provides a full-fledged interface for customizing any theme's colors.

{% include figure.html content="/screens/override/overrideThemeColors.png" caption="Override Theme Colors Settings" %}

Navigate to `Settings → Appearance → Material Theme UI → Current Theme` to access the override table.

## Tool Window

In addition to the settings page, the feature is now available as a **Tool Window** for quick access without leaving your workspace.

{% include figure.html content="/screens/override/toolWindow.png" caption="Override Theme Colors Tool Window" %}

The Tool Window gives you a preview of the current theme's colors and allows you to edit them in-place.

## Color Picker

Upon clicking on a color in the override table, you will be presented with a custom color picker that allows you to pick a color from the
current theme's colors, or pick a new one.

{% include figure.html content="/screens/override/colorSelector.png" caption="Color Selector" %}

{% include figure.html content="/screens/override/editColor.png" caption="Edit Color" %}

## Filtering & Resetting

You can filter out properties by name or color to quickly find the property you want to modify.

- **Filter by name**: Type in the search field to narrow down the list of properties.
- **Filter by color**: Click on a color to filter properties matching that value.
- **Reset a property**: Click the reset button next to a property to restore its default value.
- **Reset all properties**: Restore all overrides to their defaults with a single action.

## Adding and Removing Custom Properties

If a property is not present in the current theme, you can add a custom override for it. Conversely, you can remove manually-added overrides
that are no longer needed.

## License Note

This feature is only available for **Premium** and **Custom Theme** license owners. You can purchase a premium license for the plugin or a
dedicated license for this feature via the following
link: [Material Theme Custom Theme](https://plugins.jetbrains.com/plugin/19308-material-theme-ui-custom-theme).
