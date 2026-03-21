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

These settings allow you to customize the look and feel of the IDE's tree views, including spacing, fonts, and indicators.
{:class='title'}

{% include carbonads.html %}

----

Some features are only available for premium users.
{:class='card-panel warn'}

Trees Settings are grouped into the following categories:
- [Spacing Settings](#spacing-settings)
- [Font Settings](#font-settings)
- [Indicator Settings](#indicators)
- [Arrows Settings](#arrows-style)
- [Other](#colored-open-directories)

{% include figure.html content="/screens/settingsv3/treeSettings.png" caption="Trees Settings" %}

----

## Spacing Settings

Adjust the spacing of various tree elements to improve readability or maximize screen real estate.

### Custom Tree Indent

Control the indentation of items within tree views. Whether you prefer a condensed or spacious layout, this setting helps you adjust the visual hierarchy in views like the _Project View_ and _Settings View_.

{% include figure.html content="/screens/trees/condensedView.png" caption="Condensed Indentation" %}

{% include figure.html content="/screens/trees/expandedView.png" caption="Expanded Indentation" %}

### Custom item line height

Adjust the vertical spacing between items by controlling the line height. This is particularly useful for improving readability or fitting more items on the screen at once.

{% include figure.html content="/screens/trees/shortLineHeight.png" caption="Short Line Height" %}

{% include figure.html content="/screens/trees/largeLineHeight.png" caption="Large Line Height" %}

----

### Font Settings

Customize the font family and size for tree views independently of the rest of the IDE.

{% include figure.html content="/screens/trees/customFont1.png" caption="Custom Font and Font Size" %}

{% include figure.html content="/screens/trees/customFont2.png" caption="Custom Font and Font Size" %}


----
### Indicators

Choose from several indicator styles to highlight the active item in tree views.

{% include figure.html content="/screens/trees/indicators.png" caption="Indicators" %}

Available styles:

| Style            | Screenshot                                        |
|:-----------------|:--------------------------------------------------|
| Border (default) | <img src="/img/screens/indicators/border.png">    |
| Sharp Border     | <img src="/img/screens/indicators/sharp.png">     |
| Dot              | <img src="/img/screens/indicators/dot.png">       |
| Boxed            | <img src="/img/screens/indicators/boxed.png">     |
| Right Border     | <img src="/img/screens/indicators/right.png">     |
| Underline        | <img src="/img/screens/indicators/underline.png"> |
| None             | (no indicator)                                    |

You can also adjust the indicator thickness (from `1` to `5`).

Additionally, you can enable:
- **Use gradient**: Sets the indicator color as a gradient between the accent color and a secondary color.
- **Use complementary color**: Uses the accent color's complementary color, or a custom one of your choice.

{% include figure.html content="/screens/trees/gradient.png" caption="Gradient Indicator" %}

{% include figure.html content="/screens/trees/thickGradientBox.png" caption="Thick Boxed Indicator with Gradient" %}

Moreover, you can switch styles from the [Actions Panel](/docs/configuration/quick-actions-panel).

----

### Arrows style

Select from a variety of arrow styles for expanding and collapsing tree nodes.

{% include figure.html content="/screens/trees/arrows.png" caption="Arrows Styles" %}

Available styles:

| Style              | Screenshot                                    |
|:-------------------|:----------------------------------------------|
| Material (default) | <img src="/img/screens/arrows/material.png">  |
| Triangle           | <img src="/img/screens/arrows/triangle.png">  |
| Arrows             | <img src="/img/screens/arrows/arrows.png">    |
| Plus-Minus         | <img src="/img/screens/arrows/plusMinus.png"> |
| Circle             | <img src="/img/screens/arrows/circle.png">    |
| None               | (no arrows)                                   |

**Note**: If the [Atom Material Icons](https://plugins.jetbrains.com/plugin/10044-atom-material-icons) plugin is installed, this setting will be disabled as it is managed by that plugin.
{:class='card-panel warn'}

----
### Colored open directories

When enabled, this setting applies the accent color to directories containing open files in the _Project View_, making them easier to identify.

{% include figure.html content="/screens/trees/coloredOpen.png" caption="Colored open directories" %}