---
layout: docs
title: Scrollbars
description: Customize Editor Scrollbars
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/file-status-colors'
  title: File Status Colors
next:
  url: '/docs/configuration/adaptive-theme'
  title: Adaptive Theme
---

Customize the editor scrollbars from the Color Scheme.
{:class='title'}

{% include carbonads.html %}

## Introduction

In recent versions, JetBrains IDEs began moving several UI components from global Themes to individual Color Schemes. This change allows for greater flexibility, as color schemes can be switched without altering the overall IDE user interface. It also ensures that editor elements—such as scrollbars—match the active coding environment.

Examples of elements controlled by Color Schemes include:
- Search matches
- Line coverage sections
- Tooltips
- Notifications
- Breadcrumbs
- Gutter modified lines
- ...

Prior to version 2019.1, scrollbars were strictly controlled by the UI Theme. This often led to visual inconsistencies; for example, a dark purple color scheme might still display standard "Darcula Gray" scrollbars.

To address this, JetBrains refactored scrollbars to allow color scheme designers to define their own colors and opacity. However, as of now, these settings are not exposed in the standard IDE settings and can typically only be modified by editing the color scheme's XML file directly.

The Material Theme UI plugin bridges this gap by adding a dedicated section in the **Color Scheme Settings**, allowing you to tune scrollbar colors independently of your current UI Theme.

----

## Scrollbar Colors

You can access these settings under `Settings/Preferences > Editor > Color Scheme > Scrollbars`. Since these settings are tied to the color scheme, each scheme can have its own unique configuration. If no specific colors are defined, the IDE defaults to a standard gray.

{% include figure.html content="/screens/scrollbars/scrollbarSettings.png" caption="Scrollbar Settings" %}

By default, the Material Theme's included schemes use consistent values for all scrollbar properties. However, you can easily customize specific elements, such as the border color or the color used when the scrollbar is hovered.

### macOS System Scrolling Settings

On macOS, scrollbar appearance is heavily influenced by system-level settings found in `System Settings > Appearance`:

{% include figure.html content="/screens/scrollbars/macScrollSettings.png" caption="macOS Scrollbar Settings" %}

- **Always**: If the system is set to always show scrollbars, any `Transparent` color settings will have no effect.
- **When scrolling**: If scrollbars are only shown during interaction, only the `Transparent` settings in the IDE will be applied.

**Note**: Modifying these values in a pre-bundled color scheme will create a local copy of that scheme. Consequently, future updates to the original scheme will not be reflected unless you select `Restore Defaults`.
{:class='card-panel warn'}

----

## FAQ

**Q: I've disabled the "Accent Scrollbars" setting, but my scrollbars are still colored!**

**A:** The `Accent Scrollbars` and `Transparent Scrollbars` features control the appearance of **IDE-wide scrollbars** (e.g., in tool windows or lists). They do not affect the **editor scrollbars**. To customize the editor's scrollbars, you must use the **Color Scheme** settings described above.

**Q: I've uninstalled the plugin, but the scrollbar colors haven't reverted!**

**A:** Because these settings are saved within your active Color Scheme, removing the plugin does not automatically reset them—similar to how [File Status Colors](/docs/configuration/file-status-colors) behave. To return to the original look, you will need to manually restore your color scheme's default settings.