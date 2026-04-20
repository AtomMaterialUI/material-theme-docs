---
layout: docs
title: Quick Actions Panel
description: Shortcuts for customizing the plugin
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/ui-components-settings'
  title: UI Components Settings
next:
  url: '/docs/configuration/status-bar-widgets'
  title: Status Bar Widgets
---

Here you'll find an overview of the options and tools available in the `Quick Actions Panel`.
{:class='title'}

{% include carbonads.html %}

## Quick Actions Panel

The _Quick Actions Panel_ is a convenient menu that provides fast access to the plugin's primary settings and toggles.

You can access this panel from several locations:

- In the main menu under `Tools → Material Theme`.

{% include figure.html content="/screens/other/toolsMenu.png" caption="Tools Menu" %}

- On the far right of the main toolbar.

{% include figure.html content="/screens/other/mainToolbar.png" caption="Main Toolbar" %}

- Within the `Quick Switch Panel`.

{% include figure.html content="/screens/other/quickswitch.png" caption="Quick Switch" %}

You can also assign custom shortcuts to any of its submenus in `Settings → Appearance & Behavior → Keymap → Material Theme`.

----

## Material Theme Switcher

The _Material Theme Switcher_ allows you to quickly browse and apply different themes.

{% include figure.html content="/screens/other/themeSwitcher.png" caption="Theme Switcher" %}

Themes are categorized by type (Light or Dark). It also includes the [Adaptive Theme](/docs/configuration/adaptive-theme.md), which automatically adjusts based on your current OS color scheme.

-----

## Accent Color Switcher

Much like the theme switcher, this menu displays all available accent colors, allowing for rapid switching.

{% include figure.html content="/screens/other/accentSwitcher.png" caption="Accent Switcher" %}

Additionally, it includes options to inherit the accent color from the current theme and to enable [Accent Mode](/docs/configuration/accent-mode.md).

----

## Panel Options

This panel allows you to quickly toggle various UI settings:

- _Toggle Contrast Mode_
- _Toggle High Contrast_
- _Toggle Compact Item Line Height_
- _Toggle Compact Dropdowns_
- _Toggle Compact Table Cells_
- _Toggle Compact Fields_
- _Toggle Compact Menus_
- _Toggle Compact Status Bar_
- _Toggle Uppercase Tabs_
- _Toggle Custom Tab Font_
- _Indicator Styles_
- _Tab Highlight Position_

It also provides one-time actions to modify the plugin's configuration:

- _Set Recommended Tab Height_: Sets the tab height to _42_.

-----

## Accent Color Chooser

This panel offers a selection of predefined colors for your [accent color](/docs/configuration/accents).

{% include figure.html content="/screens/accentChooser.png" caption="Accent Chooser" %}

It also includes shortcuts to toggle the following:

- _Override Accent Color from Theme_
- _Set Accent Mode_

Note: You can still manually change the accent color in `Settings → Custom Accent Color`.

-----

## Material Theme Features

The following features are available for Premium users.
{:class='card-panel warn'}

This panel provides quick toggles for the most frequently used component and feature settings:

- _Toggle Tab Separators_
- _Toggle Custom Tree Font_
- _Toggle Custom UI Font_
- _Toggle Colored Directories_
- _Toggle Language Additions_
- _Toggle Focus Mode_
- _Toggle Material Wallpapers_
- _Toggle Outline Buttons_
- _Toggle Overlays_
- _Toggle Animated Tool Windows_
- _Toggle Project Frame Colors_
- _Colorize Title Bar (New UI)_

Additional one-time actions available in this panel:

- _Material Theme Wizard_: Launch the Material Theme Wizard.
- _Atom Material Icons_: Visit the **Atom Material Icons Plugin** page for installation.
- _Show What's New_: Open the "**What's New**" page.
- _Reset Color Scheme_: Restore the default color scheme, removing any custom changes.
- _Clean Overlays_: Manually clear any remaining overlays.
- _Apply Custom UI Font_: Force a UI font update.
- _Undock Tool Windows_: Undock all currently active tool windows.
- _Dock Tool Windows_: Re-dock all active tool windows.

---

### License Activation

- _Activate License_: Activate your Premium license.

{% include figure.html content="/screens/license/activateLicense.png" caption="Activate License" %}

{% include figure.html content="/screens/license/manageSubscriptions.png" caption="License" %}

---

### Material Wallpapers

- _Remove Material Wallpaper_: Clears the current [IDE Background Image](https://www.jetbrains.com/help/idea/setting-background-image.html).

{% include figure.html content="/screens/customWallpaper.png" caption="Material Wallpaper" %}

Note: This setting affects the entire IDE. Removing or disabling the plugin will not automatically remove the background image. You can manage this manually in `Settings → Appearance → Background Image`.
{:class='card-panel warn'}