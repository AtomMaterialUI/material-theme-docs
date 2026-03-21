---
layout: docs
title: Trees Settings
description: Customize the Look and Feel of the IDE's Trees
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/spacing-settings'
  title: Spacing Settings
next:
  url: '/docs/configuration/component-settings'
  title: Component Settings

---

These settings allow you to customize the look and feel of the IDE's tree views: spacing, font, indicators, and more.
{:class='title'}

{% include carbonads.html %}

----

Some features are only available for premium users.
{:class='card-panel warn'}

Trees Settings can be grouped into the following categories:
- [Spacing Settings](#spacing-settings)
- [Font Settings](#font-settings)
- [Indicator Settings](#indicator-settings)
- [Arrows Settings](#arrows-settings)
- [Other](#other-settings)

{% include figure.html content="/screens/settingsv3/treeSettings.png" caption="Trees Settings" %}

## Spacing Settings

These options control various elements regarding the spacing in tree views.

### Custom Tree Indent

Here you can control the indentation of the tree items in the tree views. Whether you prefer condensed or spaced indentation, this setting allows you to adjust the visual hierarchy of items in the tree views, such as the _Project View_, _Settings View_, and others.

{% include figure.html content="/screens/trees/condensedView.png" caption="Condensed Indentation" %}

{% include figure.html content="/screens/trees/expandedView.png" caption="Expanded Indentation" %}

### Custom item line height

This setting allows you to adjust the vertical spacing between items in tree views by controlling the line height. This can be particularly useful for improving readability or fitting more items on the screen.

{% include figure.html content="/screens/trees/shortLineHeight.png" caption="Short Line Height" %}

{% include figure.html content="/screens/trees/largeLineHeight.png" caption="Large Line Height" %}

----
### Custom font

This feature is only available for premium users.
{:class='card-panel warn'}

Since version 6.10.0 you have the ability to customize the _Project View_'s **font family** and **size**.

<div class="masonry">

{% include figure.html content="/screens/customTreeFont.png" caption="Tree Font Settings" %}

{% include figure.html content="/screens/treeFont.png" caption="Custom Tree Font" %}

It also affects other trees as well, such as the _Find Usages_, _Settings_… (but not all).

</div>

**Note**: Although changing the font affects most trees right away, the _Project View_ still needs a restart for the changes to be visible.
{:class='card-panel warn'}

----
### Indicator style and thickness

This feature is only available for premium users.
{:class='card-panel warn'}

This setting allows you to customize the _Selected Tree Item Indicator_ (the left accentued border) for more flavors.

These are the available styles:

| Style  | Screenshot                                         |
|:-------|:---------------------------------------------------|
| Border | <img src="/img/screens/borderIndicator.png">       |
| Sharp  | <img src="/img/screens/selectedTreeIndicator.png"> |
| Dot    | <img src="/img/screens/dotTreeIndicator.png">      |
| None   | (no indicator)                                     |

You can also customize the thickness of the said indicator with a value between `1` and `5`.

Additionally, you can choose to:
- **Use gradient**: Set the indicator color as a gradient of the accent color and a second color.
- **Use complementary color**: Use the complementary color of the Accent Color, or use your own.

Moreover, you can switch styles from the [Actions Panel](/docs/configuration/quick-actions-panel).

----
### Arrows style

This setting is controlled by the [Atom Material Icons](https://plugins.jetbrains.com/plugin/10044-atom-material-icons) plugin.

----
### Colored open directories

This feature is only available for premium users.
{:class='card-panel warn'}

This setting allows you to colorize directories with opened files with the Accent color.
This could be useful to immediately differentiate between files and directories, with the default being off.

{% include figure.html content="/screens/boldDirectories.png" caption="Colored open directories" %}

Please note that this is different from the [Styled Directories](#styled-directories) feature, which is a _Color Scheme_ feature.

----
### Styled directories

This feature is only available for premium users.
{:class='card-panel warn'}

This setting allows you to set a custom style for directories in the _Project View_.
This could be useful to immediately differentiate between files and directories, with the default being off.

The options for configuring the style of directories can be found inside the
[Custom File Colors Settings](/docs/configuration/file-status-colors#directories).

Please note that since it's a _Color Scheme_ feature, the style must be configured per color scheme rather than app-wide.
This is great though for applying different styles according to the color scheme.
{:class='card-panel warn'}

This feature is available from versions **2.9** and up.

----
### Notes

- Tree views' settings work for all tree views, even views such as "Project Structure" or "Remote Host".
- _Font size_ also replaces the font of the settings tree.