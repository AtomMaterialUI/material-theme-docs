---
layout: docs
title: Scrollbars
description: Customize Editor Scrollbars
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/file-status-colors'
  title: File Status Colors
next:
  url: '/docs/configuration/accents'
  title: Accents
---

This feature is available in the free plan.
{:class='card-panel warn'}

Customize the editor scrollbars from the Color Scheme.
{:class='title'}

{% include carbonads.html %}

## Important information

## Introduction

Since some time, JetBrains IDEs started separating components from the IDE Themes to the Color Schemes. Since the color schemes can be changed without affecting the UI, it makes sense that the color schemes control the appearance of elements tied with the Editor.

Such examples are:
- Search matches
- Line Coverage sections
- Tooltips
- Notifications
- Breadcrumbs
- Gutter modified lines
- ...

However, up until 2019.1 scrollbars were still controlled by the UI Theme. This was fine but if the color scheme was using, let's say, a dark purple shade, why would the scrollbar still _Darcula Gray_ based?

As a result they started refactoring the Scrollbars to allow color scheme designers to control the color and opacity of the scrollbars when their scheme is applied. However, this setting is nowhere to be found as of today! The only way to change the Scrollbar colors was from the XML file directly.

I'm sure this is bound to happen sooner or later, but in the meantime the plugin is adding a new section in the Color Scheme Settings to allow tuning these colors, independently of the UI Theme being used.


----
## Scrollbar Colors

You can find this section under `Settings > Editor > Color Scheme > Scrollbars`. Since this is a color scheme based setting, each color scheme has its own, with a default value of gray if not defined.

{% include figure.html content="/screens/scrollbarSettings.png" caption="Scrollbar Settings" %}

By default, in the provided themes all these properties will have the same value. But you can easily have a different border color, or a different color when hovered.

### System Scrolling Settings

These scrollbar colors are highly dependent on the System scrollbar settings:

{% include figure.html content="/screens/macScrollSettings.png" caption="Scrollbar Settings MacOS" %}

- If you decide to go with "Always", then the `Transparent` values will have no effect.
- On the other hand, should you select the option to display the scrollbar only when scrolling, then only the
`Transparent` settings will be relevant.


Of course, modifying these values from the prebundled color schemes will result in the color schemes being copied, so color scheme updates will not be reflected unless you decide to `Restore Defaults`.
{:class = 'card-panel warn'}

----
## FAQ

**Q**: I've set the `Accent Scrollbars` setting off, but my scrollbar is still blue/orange/whatever!

**A**: The `Accent Scrollbars` and `Transparent Scrollbars` feature control the appearance of the IDE Scrollbars, not the editor scrollbars. For the editor scrollbars unfortunately, there's no way to set them via the accent color nor to change their transparency. Maybe in the future!

**Q**: I've uninstalled the theme but the scrollbar colors persist!

**A**: Of course! Since these colors are color scheme based, removing the plugin would not revert them back, the same way it does with the File Status Colors! The only way to do so would be to restore default colors.
