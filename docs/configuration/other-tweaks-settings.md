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

This feature is only available for premium users.
{:class='card-panel warn'}

These features are additional extras to the plugin, not related to the themes nor Material Design but simply nice addons
for the IDE.
{:class='title'}

{% include carbonads.html %}

----
### Themed Title Bar

##### Windows 10

This setting also allows the theming of the application title bar in Windows 10. To do so, it is actually setting the
[Windows Accent Color](https://www.howtogeek.com/225893/how-to-personalize-windows-10s-appearance/) set by Windows.

**Note**: Since this modifies the color OS-wide, the color set by the plugin will stick even if you close the
IDE/uninstall the plugin. Just follow the instructions at
<https://www.howtogeek.com/225893/how-to-personalize-windows-10s-appearance/> to set it to another color of your choice.

**Note:**: This feature has been removed since version 4.0
{:class='card-title warn'}

##### Mac OS with JRE 8

From version 2.5.0 the option came back with support for macOS. And unlike in Windows, this does not change the
Registry but actually applies the background color to the IDE title bar only!

{% include figure.html content="/screens/titlebarThemed.png" caption="Themed Title Bar Mac" %}

##### Mac OS with JRE 11

Starting from 2019.1 all IDEs are now bundled with JRE 11 by default. But the developers at JetBrains removed the ability to set the transparent title bar, instead they completely removed it! However instead of mourning the disparition of the title bar and removing the feature altogether, we found out a solution by implementing a _custom title bar_ and by delegating the events to the real, hidden title bar.

{% include figure.html content="/screens/customTitleBar.png" caption="Custom Title Bar" %}

Now the title bar looks more embedded than ever! However, it is still in its **experimental** state, so it can still contain bugs. For instance, sometimes the titlebar would not show for some dialogs, the text could be out of sync with what is supposed to show, font rendering issues etc.

We are still working on improving this feature by the time, until perhaps JetBrains finally decides to implement it.

**Note**: This is only for IDEs with JRE 11 enabled, with the JRE bundled by JetBrains. Custom JREs will however display **two** titlebars, the real and the fake one together.

**Note 2**: This custom title bar is in experimental state, so bugs may happen. If you find a bug, please open an issue at <https://github.com/ChrisRM/material-theme-jetbrains/issues> if it's not something that has already been discussed. In the meanwhile, if you cannot live with these bugs, you can still switch to JRE 8 or disable the _Themed Title Bar_ option and restart the IDE.


##### Linux

This feature is currently not available in Linux. Since I'm not a Linux user, I have no clue how to achieve that.
Besides, there are many distributions/frameworks of Linux, being Ubuntu, Gentoo, KDE, Gnome etc…

If someone is interested on a way to do so, please send me a PM by email or Slack, that would be awesome!

-----

### Open Colored Directories

When this feature is on, the directories that have files open in the editor will be colored with the accent color.

{% include figure.html content="/screens/boldDirectories.png" caption="Open Colored Directories" %}

-----

### Language Additions

Take a look at the page [Language Additions](/docs/configuration/color-scheme-additions.md) for more details.

----

### Show What's New page on each update

This setting allows you to toggle whether the [What's New](/docs/what-s-new.md) page would show up on each update.

-----

### Hollow Folders

**Note:**: These features have all been moved to the [Atom Material Icons Plugin](https://plugins.jetbrains.com/plugin/10044-atom-material-icons) since version 5.0.
{:class='card-title warn'}

This feature is adding decorations to the Project View to mimic the original Material Sublime Theme decorations.

----

### Open and closed directories

When this option is on, files that are _opened_ in the editor and that are _edited_ will have their containing
directories have a __hollow directory icon__ (or outline directory) instead of the original icon.

{% include figure.html content="/screens/folderDecorators.png" caption="Opened folder decorators" %}

**Note**: This feature requires *Material Icons* feature to work.

**Note 2**: If the **Folder decorators** option is set, the icon will match the decorator, but outlined.

**Note:**: This feature has been moved to the [Atom Material Icons Plugin](https://plugins.jetbrains.com/plugin/10044-atom-material-icons) since version 5.0.
{:class='card-title warn'}

----
### Theme in Status Bar

This setting adds a "widget" to the status bar to indicate which theme you are currently on. You can also click on it to
open the Material Theme Settings.

{% include figure.html content="/screens/widgetStatusbar.png" caption="Status Bar Widget" %}

Starting from version 2.9.4/2.10.4 you can also see your current accent color.

{% include figure.html content="/screens/statusAccentWidget.png" caption="Accent Widget" %}

**Note:**: This feature has been moved to the status bar directly, by right-clicking on it.
{:class='card-title warn'}

{% include figure.html content="/screens/statusbar.png" caption="Status Bar Toggles" %}

-----
## FAQ/Troubleshooting

**Q**: **I've got two title bars! / My title bar is gone! / My title bar is …**

**A**: This is due to the _Experimental Themed Title Bar_ implemented since 4.3.0. This feature is still in its experimental state so there could still be bugs. Please open an issue in the GitHub repository, and if it bothers you, you can either revert to the JRE 8, or disable the feature and restart the IDE to get back the real title bar.

**Q**: **Somehow I've updated the plugin and now my window is empty!!!!!**

**A**: This is a rare and weird case due to the custom title bar implementation. Reports have indicated that this issue happens only once and can be fixed by… resizing the window! Theoretically it should be enough to fix the issue but if it's not the case, please disable the _Themed Title Bar_ until a fix is found.

**Q**: **My Custom background image is gone!**

**A**: Sorry, this is due to the _Material Wallpapers_ feature, since it replays the empty frame background with the themes' background image. To resort to this, first disable the feature and then set the image back as explained in the [instructions here](https://www.jetbrains.com/help/idea/setting-background-image.html)
