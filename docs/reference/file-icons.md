---
layout: docs
title: File Icons
description: File Icons Reference
group: reference
toc: true
comments: true

previous:
  url: '/docs/reference/color-palette'
  title: Color Palette
next:
  url: '/docs/reference/associations'
  title: Icon Associations
---

{% include carbonads.html %}

## Introduction

Aside from themes and color schemes, the plugin provides also a complete reskin to the projects' file icons, making them prettier and easier to distinguish.

It's heavily inspired by the
[A File Icon](https://github.com/SublimeText/AFileIcon) plugin for Sublime, which itself is inspired by
[Atom File Icons](https://github.com/file-icons/atom) Atom plugin.

&nbsp;

**Note**: There is also a standalone plugin for the icons only, called
[Atom File Icons IDEA](https://plugins.jetbrains.com/plugin/10044-atom-file-icons-idea), which is straight out taken
from this plugin, so if you'd like to only have the icons without the themes, check this one.
{:class='card-panel'}

## Acknowledgements

All file icons have been built using the tools provided by
[A File Icon](https://github.com/SublimeText/AFileIcon). Great thanks to
[@ihodev](https://github.com/ihodev)!

The icons themselves were taken from one of these sources:

* [File-Icons](https://github.com/file-icons/source/blob/master/charmap.md)
* [FontAwesome 4.7.0](http://fontawesome.io/cheatsheet/)
* [Mfizz](https://github.com/file-icons/MFixx/blob/master/charmap.md)
* [Devicons](https://github.com/file-icons/DevOpicons/blob/master/charmap.md)
* [Material Design Icons](https://materialdesignicons.com/)
* [Many FlatIcons authors](https://www.flaticon.com/)

## How it works

Icons are matched based on a specific pattern in the filename:
- According to the file extension (ex: .png, .js, .yml…)
- According to the framework/library (ex: package.json, Gemfile, AndroidManifest.xml…)
- According to certain keywords in the name (Redis, Cordova, Git…)

Finally, if the icon does not fall in any of the categories, it will either:
- Get a generic category (Audio, Video, Archive, JSON)
- Fallback to the original icon provided by JetBrains

To see the full associations list, see
[Associations](/docs/reference/associations) and [Folder Associations](/docs/reference/folder-associations)

### Exhaustive List

{% include figure.html content="/icons/files.png" caption="File Icons" %}

{% include figure.html content="/icons/folders.png" caption="Folder Icons" %}


## Customization

If you want to add an icon, or add/remove/modify an association pattern to/from the list, you can submit a PR with the
requested icon/change. Your request must follow those guidelines:
- The icon must be an **acknowledged icon**, which means from one of the
  [aforementioned resources](#acknowledgements). If you cannot find your icon in these resources but want to create one
  anyway, you must:
  - Have your icon as close as the original language/framework logo
  - Only use one color
  - The color must be one of those mentioned in [Color Schemes](/docs/configuration/color-schemes#color-palette)
- The icon must be in `SVG` format and its width and height must be `16×16`.
- The icon must not weigh too much (it rarely exceeds 5 KB)
- Add the icon in the `src/resources/icons/files` folder.

If you add an association, please bear in mind that:
- The items are processed from top to bottom, so specific icons (like `package.json`) must come before generic icons
  (such as `*.json`).
- Check that your association is not used or shadowed by another one.
- Your association must make sense (e.g. not `Verizon`, `*.000` or `a.b`)

Moreover, please note that it's preferable that your icon is **actually of use**, put another way do not submit requests for a private framework that you use only in your company or of a personal choice (like "_I prefer my html files to have the React icon_" or something of the sort.)
