---
layout: docs
title: Quick Actions Panel
description: Shortcuts for customizing the plugin
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/component-settings'
  title: Component Settings
next:
  url: '/docs/configuration/excluded-files-colors'
  title: Excluded File Colors
---

Here you can find an explanation of the actions found in the `Quick Actions Panel`.
{:class='title'}

{% include carbonads.html %}

## Quick actions panel

The _Quick Actions Panel_ is a set of actions and toggles to quickly customize the plugin.
You can find this panel in many places:

- Inside the menu, under `Tools → Material Theme`

{% include figure.html content="/screens/toolsMenu.png" caption="Tools Menu" %}

- At the end of the main toolbar

{% include figure.html content="/screens/toolbar.png" caption="Main Toolbar" %}

- As an option of the `Quick Switch Panel`

{% include figure.html content="/screens/quickswitch.png" caption="Quick Switch" %}

You can also set a shortcut to open every one of its submenus from the
`Settings → Appearance and Behavior → Keymap → Material Theme` settings.

----

## Material theme switcher

The first subpanel is a switcher to quickly switch between the themes.
There you can find all the available themes plus the two custom themes.

{% include figure.html content="/screens/switcher.png" caption="Theme Switcher" %}

**Note**:

Since version 6.13, Light and Dark themes are grouped together.

{% include figure.html content="/screens/themeGroups.png" caption="Light and Dark Theme Groups" %}

**Note**: _Custom Themes_ are only available for premium users.
{:class='card-panel warn'}

-----

## Panel Options

Some features are only available for premium users.
{:class='card-panel warn'}

This panel allows you to quickly toggle some settings:

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

In addition, there are one-time actions that change the plugin's configuration:

- _Set Recommended Tab Height_: Change the tab height to _42_

-----

## Accent color chooser

This panel provides a set of predefined colors to set up your [accent color](/docs/configuration/accents).

{% include figure.html content="/screens/accentChooser.png" caption="Accent Chooser" %}

There are also actions to easily toggle the following modes:

- _Override Accent Color from Theme_
- _Set Accent Mode_

Note that the accent color can still be changed in the `Settings → Custom Accent Color`.


-----

## Material theme features

Some features are only available for premium users.
{:class='card-panel warn'}

This panel as well allows you to quickly toggle the most used Component/Features Settings:

- _Toggle Tab Separators_
- _Toggle Custom Tree Font_
- _Toggle Custom UI Font_
- _Toggle Colored Directories_
- _Toggle Language Additions_
- _Toggle Focus Mode_
- _Toggle Material Wallpapers_
- _Toggle Outline Buttons_
- _Toggle Overlays_
- _Toggle Project Frame Colors_
- _Colorize Title Bar (New UI)_

In addition, other one-time actions are available in this panel, which are:

- _Material Theme Wizard_: Open the Material Theme Wizard
- _Atom Material Icons_: Open the **Atom Material Icons Plugin** page for installation.
- _Show What's New_: Display the "**What's new**" page.
- _Reset Color Scheme_: Reset the current color scheme, removing all custom changes.
- _Clean Overlays_: Manually remove any lingering overlays.
- _Apply Custom UI Font_: Forcibly triggers a UI Font change.

--- 

### License activation

- _Activate License_: Activate your Premium License, if it's not already done.

{% include figure.html content="/screens/activateLicense.png" caption="Activate License" %}

{% include figure.html content="/screens/license.png" caption="License" %}

---

### Material wallpapers

- _Remove Material Wallpaper_: Remove the [IDE Background Image](https://www.jetbrains.com/help/idea/setting-background-image.html).

{% include figure.html content="/screens/customWallpaper.png" caption="Material Wallpaper" %}

Please note that this is a setting that affects the whole IDE, so actions such as removing/disabling the plugin won't get rid of the background image.
You can do so in `Settings → Appearance → Background Image`.
{:class='card-panel warn'}

