---
layout: docs
title: Atom Material Icons Plugin
description: Change the IDE icons
group: atom
toc: true
comments: true

previous:
  url: '/docs/configuration/custom-themes'
  title: Custom Themes
next:
  url: '/docs/icons/associations-editor'
  title: Icon Associations Editor

---

Here you can find settings for the Icons provided by the plugin, whether to enable or disable the icons, completely hide them or applying a filter to them.
{:class='title'}

{% include carbonads.html %}

## Atom Material Icons

<img class="avatar-img -centered" src="https://plugins.jetbrains.com/files/10044/78336/icon/META-INF_pluginIcon.svg" alt="Atom Material Icons Plugin">


The [Atom Material Icons Plugin](https://plugins.jetbrains.com/plugin/10044-atom-material-icons) is a complementary
plugin of the Material Theme whose purpose is to customize all IDE icons. It was originally part of the Material Theme
but has been extracted from it since version 2.9.0, in order to tend to users who don't need the themes but do need the icons, the same way it's done in Atom or
Visual Studio.

The plugin can be installed in the same way the Material Theme can be installed, but with one important twist: **it doesn't require the IDE to restart!**

{% include figure.html content="/screens/atomMaterial.png" caption="Atom Material Toolbar" %}

{% include figure.html content="/screens/atomMaterialSettings.png" caption="Atom Material Settings" %}

The UI is a bit different from the Material Theme UI but provides the same capability nonetheless.

This operation has been performed to decouple the Material Theme plugin from the _UI Icons_ feature, therefore granting the ability to use
different *Icon Themes* from other authors alongside the Material Theme UI, and at the same time gives the ability to
use the icons independently of the UI themes.

Note: This plugin has been ported to Google Chrome and Firefox!
Go take a look: [Atom Material Icons for Chrome](https://chrome.google.com/webstore/detail/atom-file-icons-web/pljfkbaipkidhmaljaaakibigbcmmpnc)
and [Atom Material Icons for Firefox](https://addons.mozilla.org/en-US/firefox/addon/atom-file-icons-web/)
{:class='card-panel'}

{% include figure.html content="/screens/chrome.png" caption="Chrome Atom Material Icons Plugin" %}
{:class='card-panel'}

Note: This plugin has also ben ported to VSCode as well! Go take a
look: [Atom Material Icons](https://marketplace.visualstudio.com/items?itemName=AtomMaterial.a-file-icon-vscode&ssr=false#overview)

{% include figure.html content="/screens/vscode.png" caption="VSCode Atom Material Icons Plugin" %}
{:class='card-panel'}

----

### File icons

This setting changes the icons for project files according to specific file patterns.
Usually, it's based off the extension of the file (*.js, *.scss, *.php) but it also identifies specific commonly used patterns and replaces them with
the relevant icon, such as:

- `package.json`
- `build.gradle`
- `README.md`
- `composer.json`
- etc...

{% include figure.html content="/screens/file-icons.png" caption="File Icons" %}

You can find more information at the [Associations](/docs/reference/associations).

----

### Directory icons

Assign specific folder icons to folders with commonly used names to add yet more visual grepping than with file icons.
For instance, `tmp`, `logs`, `src`, `lib` or `test` are folders found within most projects.

{% include figure.html content="/screens/decoFolders.png" caption="Decorated Folders" %}

Note that excluded/resource root/test root/package folders won't be decorated.

You can find more information at the [Folder Associations](/docs/reference/folder-associations).

**Important note**: Because of the way it's implemented, in **Rider**, you would need to turn off the _Low Power Mode_ switch to see the directory icons.
{:class='card-panel warn'}

----

### UI Icons

This setting toggles the replacement of the icons provided by the plugin. Specifically, this disables:

- Menu Icons
- Toolbar Icons
- Tool Window Icons
- Application Icons

Basically, this replaces all icons provided by the plugin, including breakpoint icons, dialog icons and even icons inside
documentation panels.

{% include figure.html content="/screens/iconsDisabled.png" caption="Material Icons Disabled" %}

**Note**: This setting doesn't affect icons being changed by other plugins.

----

### PSI Icons

This toggle lets you replace the PSI icons (e.g. Class, Interface, Enums, functions, etc) with Material icons.

{% include figure.html content="/screens/psiIcons.png" caption="PSI Icons" %}

The Structure Panel icons are also changed:

{% include figure.html content="/screens/psiStructure.png" caption="PSI Icons" %}

This option makes it look like the Visual Studio Code *Outline* Panel, as well as Rider or Resharper structure panels.


----

### Hide file icons

This option allows you to _completely hide_ the __file icons__ from the IDE.
It hides them from the _Project Tree_, Tabs, Dialogs and everything.
Folders are unaffected, though.

{% include figure.html content="/screens/hideFileIcons.png" caption="Hide File Icons" %}

**Note**: This feature takes precedence over default file icons providers, and the plugin's own ones.
However, some plugins might have an even greater precedence, meaning you would still see icons from such plugins.
{:class='card-panel'}

----

### Hide folder icons

Same setting as the _Hide File Icons_ except that it works for folders.

{% include figure.html content="/screens/hideFolderIcons.png" caption="Hide Folder Icons" %}


----

### Monochrome icons

This option allows you to apply a monochrome filter to the whole IDE, just like the color blindness filter.
This is ideal for people who don't like the avalanche of colors provided by the different icons.

{% include figure.html content="/screens/monochrome.png" caption="Monochrome Icons" %}

By applying this filter, all icons will be filtered with a shade of the primary color, that is, the color of the items in
the Project View of the current theme.

Note: This setting not only filters out the toolbar and file icons, but even tool window icons, debugger icons, etc…
{:class='card-panel warn'}

----

### Hollow folders

This feature further decorates the _Project View_ by emphasizing the folders that contain files that are currently open
in the editor, making them appear as "**hollow**".

{% include figure.html content="/screens/hollowFolders.png" caption="Hollow Folders" %}

Not only regular folders, but also excluded folders, resource folders or even decorated folders have a hollow
counterpart.

----

### Custom icon size

This option allows you to change the size of the icons ranging from 12px to 24px.

Moreover, it adapts the Project View Items' height to the new size.

{% include figure.html content="/screens/normalIcons.png" caption="Normal Icons" %}

{% include figure.html content="/screens/biggerIcons.png" caption="Bigger Icons" %}

**Note**: The IDEs aren't optimized to handle bigger icons, so there could be parts of the IDE that are missing icons, or that the containers will appear
larger/wider/bigger.
Please be aware of such issues when using this setting.
{:class='card-panel warn'}

----

### Arrows style

This setting allows you to change the style of the arrows in trees such as the Project Tree or ~~Settings Tree~~ (TODO).

There are the available styles:

| Style      | Screenshot                            |
|:-----------|:--------------------------------------|
| Material   | <img src="/img/arrows/material.png">  |
| Darcula    | <img src="/img/arrows/darcula.png">   |
| Plus-Minus | <img src="/img/arrows/plusminus.png"> |
| Arrows     | <img src="/img/arrows/arrows.png">    |
| None       | (no arrows)                           |

You can also switch styles in the `Actions Panel`.

----

### Custom accent color

This option will let you override the *Accent Color* set for some icons, such as the _Checkboxes_.

{% include figure.html content="/screens/accentColor.png" caption="Custom Accent Color" %}

**Note**: This custom color will be overriden by the Accent Color set by the *Material Theme UI* plugin.
{:class='card-panel warn'}

----

### Custom themed color

Some icons are colored with what's called the **Themed Color**.
It's a dynamic color, which matches up the current UI Theme.
Examples of such icons are:

- Regular Folder Icons
- Unchecked checkboxes
- Unselected radio buttons
- Expand Arrows
- And some others

By default, this color will be the same as the text color in trees, but this setting will allow you to override it with the color of your choice.

{% include figure.html content="/screens/themedColor.png" caption="Custom Themed Color" %}
