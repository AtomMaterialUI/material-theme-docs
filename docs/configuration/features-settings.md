---
layout: docs
title: Feature Settings
description: Enable or disable Material Theme features
group: configuration
comments: true
toc: true

previous:
  url: '/docs/configuration/component-settings'
  title: Component Settings
next:
  url: '/docs/configuration/project-frame-settings'
  title: Project Frame Settings
---

Some of these features are only available for premium users.
{:class='card-panel warn'}

Here you can turn on and off specific features of the Material Theme for even further customization.
{:class='title'}

{% include carbonads.html %}

## Enabling and Disabling features

**Note**: The Material Theme and Material Design components have been removed since 5.0.
{:class='card-panel error'}

The following options allow you to enable and disable features provided by the Material Theme. This gives you the ability to specifically select features such as theme colors or icons while disabling the rest if you don't like it. For instance, if you like the icons but don't like the themes and components, just leave the icons on and disable the rest. If on the other hand you like everything but prefer to use the default icons, just disable the icons.

### Material Design Components

**Note**: This feature has been removed since 5.0. If you desire to keep using the native look and feel, please disable this plugin or use the [Material Theme Lite](https://plugins.jetbrains.com/plugin/12124-material-theme-ui-lite)
{:class='card-panel warn'}

This toggles the theming of components inside the IDE such as *buttons*, *text fields* and *checkboxes*. This is nice if you like the theme colors and icons but don't like the Material Design flat components, padded rows and borderless boxes.

Specifically this option disables:
- Flat Buttons
- Borderless input, number, password and search boxes
- Borderless dropdowns
- Accent progress bars
- Material Design Checkboxes, Radio Buttons and Sliders
- Search Everywhere's Switches
- Material Design Navigation Bar
- ~~Trees' selected item indicator~~
- ~~Trees' opened and closed folders chevrons (>)~~
- ~~Padded Table Headers and Table Cells~~
- ~~Padded List Items~~
- ~~Borderless status bar~~

But while these components are disabled, other features such as _Accent Colors_ and _Contrast Mode_ are still in action, meaning that you can have Darcula checkboxes and buttons with your accent color, or the contents of inputs being in contrasted color, for instance.

{% include figure.html content="/screens/componentsEnabled.png" caption="Material Components Enabled" %}

{% include figure.html content="/screens/componentsDisabled.png" caption="Material Components Disabled" %}

What it doesn't disable however, albeit Material Design components, are:
- Dialog boxes padded titles
- Toggled buttons indicators

**UPDATE**: Since version 2.10.5 the "Material Components Disabled" mode is much more lax regarding components affected by other settings, such as *Arrow Styles* or *Compact Statusbar*. Therefore, despite components disabled, these settings will continue to work. These are:
- Tab Height
- Arrow Styles in trees
- Selected Item Indicator
- Compact/Padded Statusbar
- Compact/Padded Dropdowns
- Compact/Padded Menus
- Compact/Padded Table Cells
- Trees row height
- Left and Right side indent
- Font size

----

### Material Fonts

**IMPORTANT NOTE**: As a result of the font being jumbled for a lot of users, and since there is no easy workaround, the *Material Fonts* option has been disabled indefinitely. However, we still recommend Roboto for the best experience.
{:class='card-panel warn'}

This setting switches the default font used in the editor with the usual font used in Material Design,
[Roboto](https://fonts.google.com/specimen/Roboto).

This setting changes the font you see in *Settings → Appearance and Behavior → Appearance*. When unchecked, it will restore the original default font, namely `Tahoma` in Windows, `SF_Text` in Mac and `Lucida Sans` in Linux. When checked, it will replace it with `Roboto` (only if the font is already installed in the machine though).

**Note**: This setting is requiring that **default fonts are not overriden**, meaning that the setting at `Appearance and Behavior → Appearance → Override default font` is unchecked, in which case it will use the font set there.
{:class='card-panel'}

**Note 2**: This setting will replace the font with Roboto only if that font is already installed in the machine. If not, you can download it here: https://material.io/guidelines/resources/roboto-noto-fonts.html
{:class='card-panel'}

----

### Material File Status Colors

This option enables Material File Status Colors, allowing customization of the file status colors from Color Schemes.

Check [Material File Status Colors](/docs/configuration/file-status-colors) for more information.

-----

### Material Wallpapers

The Material Theme plugin now comes prebundled with a list of "wallpapers" that are displayed when there are no files open in the editor.

This is performed in conjunction with the [Background Image feature](https://www.jetbrains.com/help/idea/setting-background-image.html) from JetBrains.

{% include figure.html content="/screens/wallpapers/oceanic.png" caption="Oceanic Wallpaper" %}

{% include figure.html content="/screens/wallpapers/darker.png" caption="Darker Wallpaper" %}

{% include figure.html content="/screens/wallpapers/lighter.png" caption="Lighter Wallpaper" %}

{% include figure.html content="/screens/wallpapers/palenight.png" caption="Palenight Wallpaper" %}

Attention: This setting will override any custom background image that you may have set!
{:class='card-panel warn'}

This feature is available since version 5.0.0

----

### Overlays

This feature is available for all users.
{:class='card-panel warn'}

One of the features I've always wanted to implement since day one, was the ability to **display an overlay** when modals are open. This is one of the main concepts of _Material Design_ and somewhat missing in our editors.

Now with a bit more experience, this feature has finally been implemented and is available for all users, just like the Material Components.

{% include figure.html content="/screens/modalOverlay.png" caption="Modals Overlay" %}

{% include figure.html content="/screens/settingsOverlay.png" caption="Settings Overlay" %}

Overlays greatly enhance the focus on the important information on the screen by making the rest of the screen, the "noise", less prominent, without hiding it completely.

However, these should not apply in all cases, as in some instances, the background information is useful to the modal window. For example, the *Evaluate* window during debugging, or the _Find in Files_ window.

Therefore, the overlays will only display for the following modals:
- Alerts
- Dialogs
- New File Window
- Search Everything
- Run Anything

As usual, a setting is available to toggle this behaviour on or off in the Features Settings.

This feature is available since version 6.8.0.

Please open issues in the repository if you wish for more modals to be affected!
{:class='card-panel warn'}

----- 

### Accent Mode

This feature is only available for premium users.
{:class='card-panel warn'}

This feature makes components stand out more by coloring them with the current accent color. The affected components are:
- The Editor Tabs
- The Primary Buttons
- The selection color for Lists, Tables and Trees

{% include figure.html content="/screens/accentMode.png" caption="Accent Mode" %}

You can also specify a _second accent color_ to contrast with the now prominent accent color.

This feature is available since 4.1.0.

----

### Striped Tool Windows Layout

This feature is available in the free plan.
{:class='card-panel warn'}

The new version of the Material Theme UI makes use of the new experimental feature in progress by JetBrains: The **Striped Tool Windows**.

This new layout, heavily reminding of VSCode, replaces the tool windows by larger stripes on the left and right side of the screen. It also strips the buttons of all texts, making the IDE feeling less cluttered.

{% include figure.html content="/screens/stripedToolWindows.png" caption="Striped Tool Windows" %}

This feature is disabled by default, but you can go back to the old layout via the _Settings_ or the _Material UI Actions Panel_.

{% include figure.html content="/screens/quickActionsPanel.png" caption="Quick Actions Panel" %}

This feature is available since version 6.3.0 and is still experimental at this point, so there could be bugs.


-----
## FAQ/Troubleshooting

**Q**: I've set "Material Fonts" but now my texts are all scrambled!

**A**: This is a rare bug that occurs and honestly I don't know why it happens. It could be because the JDK caches fonts or because there are conflicts between Roboto fonts, or that you have a bad version of Roboto. Try to reinstall the Roboto font and restart the computer. If it still doesn't work, just disable the option or select another font in the settings.

**Q**: Why have you removed the Material Fonts?!

**A**: Because of the previous Q&A. Many users were complaining that their IDE become scrambled all of a sudden, generally as a result of their installed Roboto font not in sync with new versions of the JDK.
Even though there is an easy workaround, it is not serious for a plugin used by millions of users to have such critical issues, even though it's not the plugin's fault per se. Therefore, it's left at the discretion of the user to replace the fonts of their IDE. That being said we still recommend Roboto for the best experience!
