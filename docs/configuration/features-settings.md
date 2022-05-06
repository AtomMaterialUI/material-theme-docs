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

## Features

### Custom UI font

This feature is only available to all users.
{:class='card-panel warn'}

This setting replaces the previous [Material Fonts](/docs/configuration/features-settings#material-fonts) setting, by allowing you to specify your own UI Font.

In fact, this setting supplements the original [Custom Font](https://www.jetbrains.com/help/idea/user-interface-themes.html) 
provided by the IDE in *Appearance and Behavior*, so this is just another way to set up your own IDE font.

**Tip**: for an optimal experience, either use the **Roboto** or **Inter** font family!
{:class='card-panel'}

---

### Use editor default font

This feature is only available for premium users.
{:class='card-panel warn'}

This setting gives you the ability to override the current scheme's Editor Font
with the [default font](https://www.jetbrains.com/help/idea/configuring-colors-and-fonts.html).

{% include figure.html content="/screens/useEditorDefaultFont.png" caption="Use Editor Default Font" %}

While this can be done via the [Color Scheme settings](https://www.jetbrains.com/help/idea/configuring-colors-and-fonts.html#fonts), it can become a bit daunting to have to do this manually for every color scheme. 
Moreso when switching between color schemes many times a day!

This setting provides a way to undo this by turning off the color schemes' defined font and use the Default Font instead.

**Note**: turning on this setting would immediately cause the current color scheme to be edited, 
as if you changed the color scheme font with the default one.
Even if you turn it back on, the original color scheme font won't be restored, 
you would still need to [restore the color scheme](https://www.jetbrains.com/help/idea/settings-code-style.html#scheme) to do so.
{:class='card-panel warn'}

This setting has been available since version 6.10.0.

---

### Material file status colors

This feature is available for all users.
{:class='card-panel warn'}

This option enables Material File Status Colors, allowing customization of the file status colors from Color Schemes.

Check [Material File Status Colors](/docs/configuration/file-status-colors) for more information.

-----

### Material wallpapers

This feature is only available for premium users.
{:class='card-panel warn'}

The Material Theme plugin now comes prebundled with a list of "wallpapers" that are displayed when there are no files open in the editor.

This is performed in conjunction with the [Background Image feature](https://www.jetbrains.com/help/idea/setting-background-image.html) from JetBrains.

{% include figure.html content="/screens/wallpapers/oceanic.png" caption="Oceanic Wallpaper" %}

{% include figure.html content="/screens/wallpapers/darker.png" caption="Darker Wallpaper" %}

{% include figure.html content="/screens/wallpapers/lighter.png" caption="Lighter Wallpaper" %}

{% include figure.html content="/screens/wallpapers/palenight.png" caption="Palenight Wallpaper" %}

Attention: this setting overrides any custom background image that you may have set!
{:class='card-panel warn'}

This feature is available since version 5.0.0

----

### Overlays

This feature is available for all users.
{:class='card-panel warn'}

One of the features present in many applications, is the ability to **display an overlay** when modals are open.
This is one of the main concepts of _Material Design_ and somewhat missing in the IDE.

Now with a bit more experience, this feature has finally been implemented and is available for all users, just like the _Material Components_.

{% include figure.html content="/screens/modalOverlay.png" caption="Modals Overlay" %}

{% include figure.html content="/screens/settingsOverlay.png" caption="Settings Overlay" %}

Overlays greatly enhance the focus on the important information on the screen by making the rest of the screen, the "noise", less prominent,
without hiding it completely.

However, these shouldn't apply in all cases; as in some instances, the background information is useful to the modal window.
For example, the `Evaluate` window during debugging, or the _Find in Files_ window.

Therefore, the overlays only show up for the following modals:
- Alerts
- Dialogs
- New File Window
- Search Everything
- Run Anything

As usual, a setting is available to toggle this behaviour on or off in the _Features Settings_.

This feature has been available since version 6.8.0.

Please open issues in the repository if you wish for more modals to be affected!
{:class='card-panel'}

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

This feature has been available since 4.1.0.

-----

### Experimental UI

This setting toggles the successor of the _Large Tool Windows_, renamed as **"Experimental UI"**. 

When enabled, it introduces a lot of new changes that the folks at JetBrains are experimenting with:
- Large Tool Windows
- Hovering icons
- Navigation Bar merged with the Status Bar
- Animated tabs
- etc.

Because it's **highly experimental**,
and not related to the plugin directly, there is a high probabily of bugs and breaking changes occurring from version to version. 

Therefore, please use it with **extreme caution**. We don't take responsibility for any issues that can occur!

**Important Note**: because this isn't a feature of the plugin, any bugs related to the feature would be immediately closed.
{:class='card-panel warn'}

----

## Deprecated features

### Material fonts

This feature is only available for premium users.
{:class='card-panel warn'}

This setting switches the default font used in the editor with the usual font used in Material Design, [Roboto](https://fonts.google.com/specimen/Roboto).

This setting changes the font you see in *Settings → Appearance and Behavior → Appearance*.
When unchecked, it restores the original default font, namely `Tahoma` in Windows, `SF_Text` in Mac and `Lucida Sans` in Linux, at the time of writing.
When checked, it replaces it with `Roboto`, but only if the font is already installed in the machine.

**Note**: this setting is requiring that **default fonts are not overriden**,
meaning the setting at `Appearance and Behavior → Appearance → Override default font` is unchecked, in which case it should use the font set there.
{:class='card-panel'}

**Note 2**: this setting replaces the font with Roboto only if that font is already installed in the machine. Otherwise, you can download it here: <https://material.io/guidelines/resources/roboto-noto-fonts.html>
{:class='card-panel'}

----


### Material design components

**Note**: this feature has been removed since 5.0.
If you desire to keep using the native look and feel,
please disable this plugin or use the [Material Theme Lite](https://plugins.jetbrains.com/plugin/12124-material-theme-ui-lite)
{:class='card-panel warn'}

This toggles the theming of components inside the IDE such as *buttons*, *text fields* and *checkboxes*.
This is nice if you like the theme colors and icons but don't like the Material Design flat components, padded rows and borderless boxes.

Specifically, this option disables:
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

But while these components are disabled, other features, such as _Accent Colors_ and _Contrast Mode_ are still active,
meaning you can have Darcula checkboxes and buttons with your accent color, or the contents of text boxes being in contrast color, for instance.

{% include figure.html content="/screens/componentsEnabled.png" caption="Material Components Enabled" %}

{% include figure.html content="/screens/componentsDisabled.png" caption="Material Components Disabled" %}

What it doesn't disable however, albeit Material Design components, are:
- Dialog boxes padded titles
- Toggled buttons indicators

**UPDATE**: since version 2.10.5 the "Material Components Disabled" mode is laxer regarding components affected by other settings, 
such as *Arrow Styles* or *Compact Statusbar*.
Therefore, despite components disabled, these settings should continue to work.

These are:
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


### Large tool windows layout


The new version of the Material Theme UI makes use of the new experimental feature in progress by JetBrains: **Large Tool Windows**.

This new layout, heavily reminding of VSCode, replaces the tool windows with larger stripes on the left and right sides of the screen.
It also strips the buttons of all texts, making the IDE feeling less cluttered.

{% include figure.html content="/screens/stripedToolWindows.png" caption="Large Tool Windows" %}

This feature is disabled by default, but you can go back to the old layout via the _Settings_, or the _Material UI Actions Panel_.

{% include figure.html content="/screens/quickActionsPanel.png" caption="Quick Actions Panel" %}

This feature is available since version 6.3.0 and is still experimental at this point, so there could be bugs.


-----
## FAQ/troubleshooting

**Q**: I've set "Material Fonts" but now my texts are all scrambled!

**A**: This is a rare bug that occurs, and honestly, we don't know why it happens. 
It could be because the IDE caches fonts or because there are conflicts between Roboto fonts, or that you have a bad version of Roboto.
Try to reinstall the Roboto font and restart the computer.
If it still doesn't work, just disable the option or select another font in the settings.

