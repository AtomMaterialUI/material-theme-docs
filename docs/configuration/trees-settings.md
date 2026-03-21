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

----

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

Here you can customize the font family and font size of tree views without impacting the rest of the IDE.

{% include figure.html content="/screens/trees/customFont1.png" caption="Custom Font and Font Size" %}

{% include figure.html content="/screens/trees/customFont2.png" caption="Custom Font and Font Size" %}


----
### Indicators

Here you can choose between different styles for the tree view indicators.

{% include figure.html content="/screens/trees/indicators.png" caption="Indicators" %}

You can choose from the following styles:

| Style            | Screenshot                                        |
|:-----------------|:--------------------------------------------------|
| Border (default) | <img src="/img/screens/indicators/border.png">    |
| Sharp Border     | <img src="/img/screens/indicators/sharp.png">     |
| Dot              | <img src="/img/screens/indicators/dot.png">       |
| Boxed            | <img src="/img/screens/indicators/boxes.png">     |
| Right Border     | <img src="/img/screens/indicators/right.png">     |
| Underline        | <img src="/img/screens/indicators/underline.png"> |
| None             | (no indicator)                                    |

You can also customize the thickness of the said indicator with a value between `1` and `5`.

Additionally, you can choose to:
- **Use gradient**: Set the indicator color as a gradient of the accent color and a second color.
- **Use complementary color**: Use the complementary color of the Accent Color, or use your own.

{% include figure.html content="/screens/trees/gradient.png" caption="Gradient Indicator" %}

{% include figure.html content="/screens/trees/thickGradientBox.png" caption="Thick Boxed Indicator with Gradient" %}

Moreover, you can switch styles from the [Actions Panel](/docs/configuration/quick-actions-panel).

----

### Arrows style

Here you get the option to select between a list of different arrow styles.

{% include figure.html content="/screens/trees/arrows.png" caption="Arrows Styles" %}

You can choose from the following styles:

| Style              | Screenshot                                    |
|:-------------------|:----------------------------------------------|
| Material (default) | <img src="/img/screens/arrows/default.png">   |
| Triangle           | <img src="/img/screens/arrows/triangle.png">  |
| Arrows             | <img src="/img/screens/arrows/arrows.png">    |
| Plus-Minus         | <img src="/img/screens/arrows/plusMinus.png"> |
| Circle             | <img src="/img/screens/arrows/circle.png">    |
| None               | (no arrows)                                   |

**Note**: If you have the [Atom Material Icons](https://plugins.jetbrains.com/plugin/10044-atom-material-icons) plugin installed, this setting will be disabled as it is controlled by that plugin.
{:class='card-panel warn'}

----
### Colored open directories

This setting applies the accent color to the directories of open files in the _Project View_.

{% include figure.html content="/screens/trees/coloredOpen.png" caption="Colored open directories" %}