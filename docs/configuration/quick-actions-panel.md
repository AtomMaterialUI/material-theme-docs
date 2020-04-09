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

Here you can find an explanation of the actions from the `Quick Actions Panel`.
{:class='title'}

{% include carbonads.html %}

## Quick Actions Panel

The Quick Actions Panel is a set of actions and toggles to quickly customize the plugin. You can find this panel in many
places:
- Inside the menu, under `Tools -> Material Theme`

{% include figure.html content="/screens/toolsMenu.png" caption="Tools Menu" %}

- At the end of the main toolbar

{% include figure.html content="/screens/toolbar.png" caption="Main Toolbar" %}

- As an option of the `Quick Switch Panel`

{% include figure.html content="/screens/quickswitch.png" caption="Quick Switch" %}

You can also set a shortcut to open each and every one of its submenus from the
`Settings -> Appearance and Behavior -> Keymap -> Material Theme` settings.

----

## Material Theme Switcher

The first subpanel is a switcher to rapidly switch between the themes. There you can find all the available themes plus
the two custom themes.

{% include figure.html content="/screens/switcher.png" caption="Theme Switcher" %}

-----

## Panel Options

This panel allows you to quickly toggle some of the most used Panel Settings:
- _Toggle Contrast Mode_
- _Toggle High Contrast_
- _Toggle Compact Sidebar_
- _Toggle Compact Dropdowns_
- _Toggle Compact Table Cells_
- _Toggle Compact Menus_
- _Toggle Hide File Icons_
- _Toggle Monochrome Icons_
- _Toggle Compact Status Bar_
- _Toggle Uppercase Tabs_
- _Arrow styles_
- _Indicator Styles_
- _Tab Highlight Position_

Besides those are one-time actions that will change the plugin or the IDE configuration:
- _Set Recommended Tab Height_: Change the tab height to _42_

-----

## Accent Color Chooser

This panel provides a set of predefined colors to set up your [accent color](/docs/configuration/accents).

{% include figure.html content="/screens/accentChooser.png" caption="Accent Chooser" %}

There are also more options to easily toggle the following modes:
- _Override Accent Color from Theme_
- _Set Action Mode_

Note that these actions are one-time only and the accent color can be changed in the `Settings -> Custom Accent Color`.

-----

## Component Settings

This panel as well allows you to rapidly toggle the most used Component Settings:
- _Toggle Material Components_
- _Toggle Material Icons_
- _Toggle Material File Icons_
- _Toggle Material PSI Icons_
- _Toggle Material Fonts_
- _Toggle Hollow Folders_
- _Toggle Open Colored Directories_
- _Toggle Status Bar Indicator_
- _Toggle Themed Title Bar_

In addition, other one-time actions are available in this panel, which are:
- _Material Theme Wizard_: Relaunch the Material Theme Wizard
- _Install Material Wallpaper_: Set the
  [IDE Background Image](https://www.jetbrains.com/help/idea/setting-background-image.html) to the one from the
  repository.
- _Remove Material Wallpaper_: Remove the [IDE Background Image](https://www.jetbrains.com/help/idea/setting-background-image.html).

{% include figure.html content="/screens/customWallpaper.png" caption="Material Wallpaper" %}

Please note that this is a setting that affects the whole IDE settings, so actions such as removing/disabling the plugin
will not get rid of the background image. You can do so in `Settings -> Appearance -> Background Image`.
{:class='card-panel warn'}

