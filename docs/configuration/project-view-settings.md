---
layout: docs
title: Project View Settings
description: Customize the Project View's appearance
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/compact-settings'
  title: Compact Settings
next:
  url: '/docs/configuration/component-settings'
  title: Component Settings

---

Customize the Project View's appearance: indent, items' height, font size and so on.
{:class='title'}

{% include carbonads.html %}

----
### Custom item line height

This feature is available in the free plan.
{:class='card-panel warn'}

Following Material Design principles, this plugin adds more padding to many of the components used in the IDE, such as tables, lists and trees. 
This setting allows you to override this behavior and specify custom line height in your tree views, such as the _Project View_, or the _Settings View_.

The allowed values are between `18` and `44` in order to keep the IDEs within reasonable sizes. The default value when unchecked is `28`.

<div class="masonry">

{% include figure.html content="/screens/regularLineHeight.png" caption="Regular Line Height" %}

{% include figure.html content="/screens/paddedLineHeight.png" caption="Padded Line Height" %}

</div>

----
### Custom tree indent

This feature is only available for premium users.
{:class='card-panel warn'}

Another feature of tree views is the ability to customize the indentation of the items.
This might be useful for projects that have a lot of nesting levels, to prevent unnecessary horizontal scrolling.

You can customize the left and right indent at ease, and recommended values vary between `4` and `10`.

The allowed values vary between `4` and `40`, with the default being `6`.

<div class="masonry">

{% include figure.html content="/screens/condensedView.png" caption="Condensed indent (4)" %}

{% include figure.html content="/screens/dilatedView.png" caption="Dilated indent (8)" %}

</div>

----
### Styled directories

This feature is only available for premium users.
{:class='card-panel warn'}

This setting allows you to set a custom style for directories in the _Project View_.
This could be useful to immediately differentiate between files and directories, with the default being off.

The options for configuring the style of directories can be found inside the
[Custom File Colors Settings](/docs/configuration/file-status-colors#directories).

{% include figure.html content="/screens/boldDirectories.png" caption="Styled directories" %}

Please note that since it's a _Color Scheme_ feature, the style must be configured per color scheme rather than app-wide.
This is great though for applying different styles according to the color scheme.
{:class='card-panel warn'}

This feature is available from versions **2.9** and up.

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

Moreover, you can switch styles from the [Actions Panel](/docs/configuration/quick-actions-panel).

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
### Notes

- Tree views' settings work for all tree views, even views such as "Project Structure" or "Remote Host".
- _Font size_ also replaces the font of the settings tree.

