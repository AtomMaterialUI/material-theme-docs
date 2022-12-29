---
layout: docs
title: Other Tweaks
description: Other Material Theme plugin tweaks
group: configuration
comments: true
toc: true

previous:
  url: '/docs/configuration/project-frame-settings'
  title: Project Frame Settings
next:
  url: '/docs/configuration/quick-actions-panel'
  title: Quick Actions Panel
---

These features are additional extras to the plugin, not related to the themes or Material Design but simply nice addons to the IDE experience.
{:class='title'}

{% include carbonads.html %}

-----

### Language additions

This feature is only available for premium users.
{:class='card-panel warn'}

This feature adds new highlighting capabilities to popular languages,
making possible to highlight specific keywords or function names separately from the language color scheme.

{% include figure.html content="/screens/javaScriptAdditions.png" caption="Language Additions" %}

Refer to the [Language Additions](/docs/configuration/color-scheme-additions) page for more details.

----

### Focus Mode

This feature is only available for premium users and users who bought the **Language Additions** package.
{:class='card-panel warn'}

Originally inspired by an extension with the same name, this feature has been added to the plugin's feature as well, with more customization options.

What it does is to "focus" on the current part of the code, by "unhighlighting" the parts surrounding it. Whether it's within a class, a function, or inside an
if-block, the surrounding parts will receive a unique, monotone color, in order for the focused part to receive all the necessary attention.

{% include figure.html content="/screens/focusModeOceanic.png" caption="Focus Mode (Oceanic)" %}

{% include figure.html content="/screens/focusModeLighter.png" caption="Focus Mode (Lighter)" %}

Since this way of coding is highly dependent of the individual, it is disabled by default,
in order to not frustrate the users that are used to code without this tweak.
However, we recommend giving it a shot, and maybe you'll get used to coding this way!

By default, the color of the unfocused parts is taken from the current theme, but you can decide to use your own color as well,
thanks to a switch found inside the settings.
For example, you can set the _Focus Color_ to the same color as your current editor background, making the unfocused parts disappear completely!

{% include figure.html content="/screens/customFocusColor.png" caption="Custom Focus Color (black)" %}

{% include figure.html content="/screens/customFocusColorWhite.png" caption="Custom Focus Color (white)" %}

This feature is available since version 7.11.0.

----

### Colored open directories

This feature is only available for premium users.
{:class='card-panel warn'}

When this feature is on, the directories that have files open in the editor will be colored with the accent color.

{% include figure.html content="/screens/boldDirectories.png" caption="Open Colored Directories" %}

----

### Show What's New page on each update

This feature is available for all users.
{:class='card-panel warn'}

This setting allows you to toggle whether the [What's New](/docs/what-s-new) page would show up on each update.

-----

#### Show Wizard on Welcome Screen

This feature is available for all users.
{:class='card-panel warn'}

This setting allows you to toggle the **Material Theme Wizard** option in the Welcome Screen.

{% include figure.html content="/screens/welcomeScreen.png" caption="Welcome Screen Wizard Option" %}


-----

### Automatically reset color schemes

This feature is available for all users.
{:class='card-panel warn'}

One of the main complaints of the plugin is that it constantly asks the user to **reset their color schemes**,
but in actuality most users have no idea how to nor do want to do so.
Even though a lot of documentation is available regarding the subject, since the plugin relies a lot on the color schemes,
relying on user interaction means that there is a high chance they're going to miss new updates.

Therefore, from version **6.12.0** users can now decide to let the plugin **automatically reset the color scheme** during theme activation,
that's during startup and whenever the theme is changed.

{% include figure.html content="/screens/autoResetSettings.png" caption="Auto Reset Color Scheme" %}

This setting only affects the **bundled themes**, excluding the *Custom themes*.
{:class='card-panel'}

**Note**: this feature is **opt-in**, meaning it's **disabled by default**, to prevent accidental erasure of user custom modifications.
Make sure to back up your custom changes before enabling the feature!
{:class='card-panel warn'}

----

### Status Bar Widgets

This isn't a setting, but rather a set of toggleable widgets for the _Status Bar_.
You can find them by right-clicking the status bar and enabling the widgets you'd like.

#### Material theme widget

Since version 7.4.0, the old _Material Theme widget_ has been redone to better blend with the other widgets.
It sports the current theme name and icon, and you can open a menu with the list of available themes.

<div class="masonry">

{% include figure.html content="/screens/newWidgets.png" caption="Material Theme + Accent Widget" %}

{% include figure.html content="/screens/widgetsMenu.png" caption="Theme Selection Widget" %}

</div>

#### Accent color widget

Just besides the theme widget, you can also display the _Accent Color Widget_.
It sports the current accent color, and displays the list of available predefined accent colors when clicked.

<div class="masonry">

{% include figure.html content="/screens/newWidgets.png" caption="Material Theme + Accent Widgets" %}

{% include figure.html content="/screens/accentColorWidget.png" caption="Accent Color Widget" %}

</div>

### Current Project Widget

Version 7.5.3 introduces yet another widget to the Status Bar, which displays the current project and gives the ability to open other projects via a menu. This
is based on a similar widget available on the title bar in the new UI.

<div class="masonry">

{% include figure.html content="/screens/projectsWidget.png" caption="Recent Projects Widget" %}

</div>

#### Material theme legacy widget

You can still find the previous legacy widget:

<div class="masonry">

{% include figure.html content="/screens/widgetStatusbar.png" caption="Status Bar Widget" %}

{% include figure.html content="/screens/statusAccentWidget.png" caption="Accent Widget" %}

</div>

---------

## Deprecated features

### Themed title bar

**Note**: this feature has been incorporated into the main product as of version 2021.2.
As a result, it has been removed from the plugin.
{:class='card-panel warn'}

##### Windows 10

This setting also allows the theming of the application title bar in Windows 10. To do so, it is actually setting the
[Windows Accent Color](https://www.howtogeek.com/225893/how-to-personalize-windows-10s-appearance/) set by Windows.

**Note**: since this modifies the color OS-wide, the color set by the plugin will stick even if you close the
IDE/uninstall the plugin. Just follow the instructions at
<https://www.howtogeek.com/225893/how-to-personalize-windows-10s-appearance/> to set it to another color of your choice.

**Note:**: this feature has been removed since version 4.0
{:class='card-title warn'}

##### macOS with JRE 8

From version 2.5.0 the option came back with support for macOS. And unlike in Windows, this does not change the
Registry but actually applies the background color to the IDE title bar only!

{% include figure.html content="/screens/titlebarThemed.png" caption="Themed Title Bar Mac" %}

##### macOS with JRE 11

Starting from 2019.1, all IDEs are now bundled with JRE 11 by default.
But the developers at JetBrains removed the ability to set the transparent title bar, instead they completely removed it!

However, instead of mourning the disparition of the title bar and removing the feature altogether,
we found out a solution by implementing a _custom title bar_ and by delegating the events to the real, hidden title bar.

{% include figure.html content="/screens/customTitleBar.png" caption="Custom Title Bar" %}

Now the title bar looks more embedded than ever! However, it is still in its **experimental** state, so it can still contain bugs.
For instance, sometimes the titlebar would not show for some dialogs; the text could be out of sync with what's supposed to show, font rendering issues etc.

We're still working on improving this feature by the time, until perhaps JetBrains finally decides to implement it.

**Note**: this is only for IDEs with JRE 11 enabled, with the JRE bundled by JetBrains.
Custom JREs would however display **two** titlebars, the real and the fake one together.

**Note 2**: this custom title bar is in experimental state, so bugs may happen.
If you find a bug, please open an issue at <https://github.com/ChrisRM/material-theme-jetbrains/issues>, if it's not something that has already been discussed.
In the meanwhile, if you can't work with these issues, you can still switch to JRE 8 or disable the _Themed Title Bar_ option and restart the IDE.

##### Linux

This feature is currently not available in Linux.
As non-Linux users, we currently have no clue how to achieve that.
Besides, there are many distributions/frameworks of Linux, being Ubuntu, Gentoo, KDE, Gnome etc…

If someone is interested in a way to do so, please send us a PM by email or Slack; it would be great!

-----

### Theme in status bar

This setting adds a "widget" to the status bar to indicate which theme you are currently on.
You can also click on it to open the Material Theme Settings.

{% include figure.html content="/screens/widgetStatusbar.png" caption="Status Bar Widget" %}

Starting from version 2.9.4/2.10.4, you can also see your current accent color.

{% include figure.html content="/screens/statusAccentWidget.png" caption="Accent Widget" %}

**Note**: this feature has been merged into the Status bar's context menu as of version 2020.3.
As a result, it has been removed from the plugin.
{:class='card-panel warn'}

{% include figure.html content="/screens/statusbar.png" caption="Status Bar Toggles" %}

-----

## FAQ/troubleshooting

**Q**: **I've got two title bars! / My title bar is gone! / My title bar is …**

**A**: This is due to the _Experimental Themed Title Bar_ implemented since 4.3.0. This feature is still in its experimental state so there could still be bugs.
Please open an issue in the GitHub repository, and if it bothers you, you can either revert to the JRE 8, or disable the feature and restart the IDE to get back
the real title bar.

**Q**: **Somehow I've updated the plugin and now my window is empty!!!!!**

**A**: This is a rare and weird case due to the custom title bar implementation.
Reports have indicated that this issue happens only once and can be fixed by… resizing the window!
Theoretically, it should be enough to fix the issue, but if it's not the case, please disable the _Themed Title Bar_ until a fix is found.

**Q**: **My Custom background image is gone!**

**A**: Sorry, this is due to the _Material Wallpapers_ feature, since it replays the empty frame background with the themes' background image. To resort to
this, first disable the feature and then set the image back as explained in
the [instructions here](https://www.jetbrains.com/help/idea/setting-background-image.html)
