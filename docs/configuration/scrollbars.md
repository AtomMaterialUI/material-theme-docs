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

## Introduction

For some time, JetBrains IDEs started separating components from the IDE Themes to the Color Schemes.
Since the color schemes can be changed without affecting the UI, it makes sense that the color schemes control the appearance of elements tied with the Editor.

Such examples are:
- Search matches
- Line Coverage sections
- Tooltips
- Notifications
- Breadcrumbs
- Gutter modified lines
- ...

However, up until 2019.1 scrollbars were still controlled by the UI Theme.
This was fine but if the color scheme was using a dark purple shade, for instance, why would the scrollbar still _Darcula Gray_ based?

As a result, they refactored the scrollbars, allowing color scheme designers to control the color and opacity of the scrollbars when their scheme is applied. 
However, this setting is nowhere to be found as of today!
The only way to change the _Scrollbar_ colors was from the XML file directly.

While this is bound to happen sooner or later, in the meantime the plugin adds a new section in the _Color Scheme Settings_ to allow tuning these colors, 
independently of the UI Theme being used.


----
## Scrollbar colors

You can find this section under `Settings > Editor > Color Scheme > Scrollbars`.
Since this is a color scheme based setting, each color scheme has its own, with a default value of gray if not defined.

{% include figure.html content="/screens/scrollbarSettings.png" caption="Scrollbar Settings" %}

By default, in the provided themes all the scrollbar properties have the same value.
But you can easily specify a different border color, or a different color when hovered.

### System Scrolling Settings

In macOS systems, the scrollbar colors are highly dependent on the _System scrollbar settings_:

{% include figure.html content="/screens/macScrollSettings.png" caption="Scrollbar Settings macOS" %}

- If you decide to go with "_Always_", then the `Transparent` values have no effect.
- But, should you select the option to display the scrollbar only when scrolling, then only the `Transparent` settings are relevant.


Be aware, that modifying these values from the prebundled color schemes results in the color schemes being copied,
so color scheme updates would not be reflected unless you decide to `Restore Defaults`.
{:class='card-panel warn'}

----
## FAQ

**Q**: **I've set the `Accent Scrollbars` setting off, but my scrollbar is still blue/orange/whatever!**

**A**: The `Accent Scrollbars` and `Transparent Scrollbars` feature control the appearance of the IDE Scrollbars, not the editor scrollbars. 
For the editor scrollbars, unfortunately, the only way to do so is to use this _Color Scheme Panel_.

**Q**: **I've uninstalled the theme, but the scrollbar colors persist!**

**A**: Since these colors are color scheme based, removing the plugin doesn't revert them back, just like with the [File Status Colors](/docs/configuration/file-status-colors). 
The only way to do so would be to restore the color scheme.
