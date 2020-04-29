---
layout: docs
title: Icons Settings
description: Change the IDE icons
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/compact-settings'
  title: Compact Settings
next:
  url: '/docs/configuration/project-view-settings'
  title: Project View Settings

---

Here you can find settings for the Icons provided by the plugin, whether to enable or disable the icons, completely hide
them or applying a filter to them.
{:class='title'}

{% include carbonads.html %}

## Atom Material Icons plugin

<img class="avatar-img -centered" src="https://plugins.jetbrains.com/files/10044/78336/icon/META-INF_pluginIcon.svg">


These features have all been moved to the [Atom Material Icons Plugin](https://plugins.jetbrains.com/plugin/10044-atom-material-icons) since version 5.0.

The plugin can be installed the same way the Material Theme can be installed, but with one important twist: **it doesn't require the IDE to restart!**

{% include figure.html content="/screens/atomMaterial.png" caption="Atom Material Toolbar" %}

{% include figure.html content="/screens/atomMaterialSettings.png" caption="Atom Material Settings" %}

The UI is a bit different than the Material Theme UI, but provides the same functionality nonetheless. This operation has been done to decouple the Material Theme plugin from the _UI Icons_ feature, therefore allowing to use different *Icon Themes* from other authors alongside the Material Theme UI, and in the same time gives the ability to use the icons independently of the UI themes.

Note: This plugin has been recently ported to Google Chrome! Go take a look: [Atom File Icons Web](https://chrome.google.com/webstore/detail/atom-file-icons-web/pljfkbaipkidhmaljaaakibigbcmmpnc)
{:class='card-panel'}

----
### Material UI Icons

This setting toggles the replacement of the icons provided by the plugin. Specifically this disables:
- Menu Icons
- Toolbar Icons
- Tool Window Icons
- Application Icons

Basically this replaces all icons provided by the plugin, including breakpoint icons, dialog icons and even icons inside
documentation panels.

{% include figure.html content="/screens/iconsDisabled.png" caption="Material Icons Disabled" %}

**Note**: This setting does not affect icons being changed by other plugins.

----
### Hide File Icons

This option allows you to _completely hide_ the __file__ icons from the IDE. This means from the _Project Tree_, Tabs,
Dialogs and everything. This does not hide folders, though.

{% include figure.html content="/screens/hideFileIcons.png" caption="Hide File Icons" %}

**Note**: This feature takes precedence over default file icons providers and the plugin's own ones. However some
plugins, may have an even greater precedence, meaning that you will still see icons from such plugins.
{:class='card-panel'}

----
### Monochrome Icons

This option allows you to apply a monochrome filter to the whole IDE, just like the color blindness filter. This is
ideal for people who don't like the avalanche of colors provided by the different icons.

{% include figure.html content="/screens/monochrome.png" caption="Monochrome Icons" %}

By applying this filter, all icons will be filtered with a shade of the primary color (e.g. the color of the items in
the Project View) of the current theme.

Note: This setting not only filters out the toolbar and file icons, but even tool window icons, debugger icons, etc...
{:class='card-panel warn'}

----
### File Icons

This setting changes the icons for project files according to specific file patterns. Usually it is based off the
extension of the file (*.js, *.scss, *.php) but it also identifies specific commonly used patterns and replace them with
the relevant icon, such as:
- package.json
- build.gradle
- README.md
- composer.json
- etc...

You can find more information at the [File Icons Reference](/docs/reference/file-icons).

From version 2.9.0 it has been completely separated from the _Material UI Icons_ setting, meaning that you can set File
Icons without activating the UI Icons at all.

----
### Folder Decorators

Assign specific folder icons to folders with commonly used names to add yet more visual grepping than with file icons.
For instance, `tmp`, `logs`, `src`, `lib` or `test` are folders found within most projects.

{% include figure.html content="/screens/decoFolders.png" caption="Decorated Folders" %}

Note that excluded/resource root/test root/package folders will not be decorated.

**Important note**: Because of the way it is implemented, this feature is not available in **Rider**.
{:class='card-panel warn'}

----
### PSI Icons

From version 3.4.0 you can also replace the PSI icons (e.g. Class, Interface, Enums, functions and so on) with Material
icons.

{% include figure.html content="/screens/psiIcons.png" caption="PSI Icons" %}

The Structure Panel icons are also changed:

{% include figure.html content="/screens/psiStructure.png" caption="PSI Icons" %}

This option makes it look like the Visual Studio Code *Outline* Panel, as well as Rider or Resharper structure panels.

----
### Notes

- Monochrome icons actually messes up some parts of the IDE, such as the SVG Image Viewer. If you need to use it, please
  disable the option temporarily.
- Currently there is no option to specify the color used in the Monochrome filter, but there's a plan of implementing
  it!
