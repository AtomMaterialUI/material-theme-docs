---
layout: docs
title: Accent Mode
description: Emphasize UI components with the accent color
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/accents'
  title: Accents
next:
  url: '/docs/configuration/tab-settings'
  title: Tab Settings
---

Accent Mode allows you to emphasize specific UI components by applying the accent color more prominently throughout the IDE.
{:class='title'}

This feature is only available for premium users.
{:class='card-panel warn'}

{% include carbonads.html %}

## Overview

While [Accent Colors](/docs/configuration/accents) are used for subtle highlights, **Accent Mode** takes it further by colorizing entire components—such as buttons, selected tabs, and list items—with the accent color. This ensures that active elements stand out clearly against the background.

You can configure Accent Mode by navigating to `Settings → Appearance → Material Theme UI → Accent Mode`.

{% include figure.html content="/screens/settingsv3/accentMode.png" caption="Accent Mode Settings" %}

## Settings

### Enable

When enabled, Accent Mode applies the accent color to various UI components to make them stand out.

{% include figure.html content="/screens/accentMode/accentModeEnabled.png" caption="Accent Mode" %}

### Override second accent color

By default, the plugin uses a secondary accent color defined by the theme for certain elements like links and icons when Accent Mode is active. Enabling this option allows you to override this with a custom color of your choice.

### Second Accent Color

Choose a custom color to be used as the secondary accent color. The second accent color takes the place of the accent color in elements such as links, tab indicators, etc., to stand out on elements that are painted with the primary accent color.

{% include figure.html content="/screens/accentMode/secondAccentColor.png" caption="Accent Mode Second Color" %}

### Allow Color Scheme Modifications

When enabled, Accent Mode can override specific color scheme settings, such as the **Active Tab Color**, to ensure consistency across the UI. This allows the accent color to be applied to elements that are usually controlled by the editor's color scheme.

{% include figure.html content="/screens/accentMode/overrideColorScheme.png" caption="Override Color Scheme" %}

Important Note: This setting forcefully overrides the color scheme, meaning that once it is activated, it will not be possible to revert back to the original color scheme. Moreover, even turning off Accent Mode will not restore the original color scheme, as the override is applied at a global level. Use this option with caution.
{:class='card-panel warn'}

## Fine-grained Control

Accent Mode can be applied globally or restricted to specific UI components. This allows you to customize exactly which elements should reflect the accent color.

Available components include:
- **Buttons**: Primary buttons in dialogs and toolbars.
- **Tabs**: The currently selected editor and tool window tabs.
- **Lists**: Selected items in lists and dropdowns.
- **Trees**: Selected items in the Project View and other tree structures.
- **Toolbars**: Selected or toggled elements within toolbars.
- **Notifications**: Colorized background or accents of IDE notifications.

---

## Preview

The settings page includes a **Preview** section where you can see how your Accent Mode configuration will look before applying it.

{% include figure.html content="/screens/accentMode/accentModePreview.png" caption="Accent Mode Preview" %}