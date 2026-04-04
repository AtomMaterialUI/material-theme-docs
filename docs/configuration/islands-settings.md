---
layout: docs
title: Islands Settings
description: Customize the Islands Layout and Behavior
group: configuration
comments: true
toc: true

previous:
  url: '/docs/configuration/language-additions'
  title: Language Additions
next:
  url: '/docs/configuration/theme-ignores'
  title: Theme Ignores

---

This page provides more customization capabilities for JetBrains' Islands layout.
{:class='title'}

{% include carbonads.html %}

This feature is exclusive to premium users. You can purchase a premium license for the plugin or a dedicated license for this feature via the following link: [Material Theme Islands](https://plugins.jetbrains.com/plugin/28142-material-theme-ui-islands).
{:class='card-panel warn'}

## Introduction

Since late 2025, JetBrains have revamped its user interface and introduced a layout called **Islands**. This layout features a more spacious design with distinct "islands" for the editor, tool windows, and other UI components. It is based on the now discontinued **JetBrains Fleet**, and gives a more refreshed look to its IDE suite.

The Islands layout is enabled by default on all IDEs, but is not configurable. The Material Theme Islands settings allow you to customize various aspects of this new layout to better suit your preferences and workflow.

{% include figure.html content="/screens/islands/islandsSettings.png" caption="Islands Settings" %}

----

## Colors

### Background Contrast

By default, the Islands' background is the same as the Tool Windows and the Status Bar color, blending together and distinguished by a thin border. 

This setting will slightly increase the contrast between them by increasing the lightness of the _Application Frame_, making the elements more distinguishable.

{% include figure.html content="/screens/islands/noContrast.png" caption="Without Contrast" %}

{% include figure.html content="/screens/islands/withContrast.png" caption="With Contrast" %}

### Custom Background Color

Alternatively, you can choose to use your own background color instead.

{% include figure.html content="/screens/islands/customColor.png" caption="Custom Background Color" %}

**Note**: This setting may conflict with the [Colorize Application Frame](/docs/configuration/project-title-bar.md#application-frame). If you enable both, the Application Frame settings will take precedence over the Islands Background Color. 
{:class='card-panel warn'}

**Note 2**: At the moment, it's not possible to use a different background color for each project.
{:class='card-panel info'}

### Border Color

This setting adds a border around the Islands', reinforcing the separation between the UI elements. You can also choose a custom border color.

{% include figure.html content="/screens/islands/noBorder.png" caption="Without Border" %}

{% include figure.html content="/screens/islands/withBorder.png" caption="With Border" %}

{% include figure.html content="/screens/islands/customBorderColor.png" caption="Custom Border Color" %}

----

## Spacing

### Island Arc Size

Controls the radius for the curved corners of the Islands. Default is 20.

{% include figure.html content="/screens/islands/angledCorners.png" caption="Angled Corners" %}

{% include figure.html content="/screens/islands/roundedCorners.png" caption="Rounded Corners" %}

### Inner Spacing

Controls the inner spacing inside the Islands. Default is 10.

{% include figure.html content="/screens/islands/noInnerSpacing.png" caption="No Inner Spacing" %}

{% include figure.html content="/screens/islands/maxInnerSpacing.png" caption="Max Inner Spacing" %}

### Outer Margin

Controls the distance between the Islands and the editor edges. Default is 10.

{% include figure.html content="/screens/islands/noOuterMargin.png" caption="No Outer Margin" %}

{% include figure.html content="/screens/islands/maxOuterMargin.png" caption="Max Outer Margin" %}

**Note**: Margins are "eating up" on the editor area, leading to the tabs being "cut off" at the edges.
{:class='card-panel warn'}

----

### Islands Gap

This setting only applies when the _Tool Windows_ are hidden.
{:class='card-panel info'}

This option adds a horizontal gap between the edges of the IDE and the Islands, thus achieving a more centered layout. Default is 4.

{% include figure.html content="/screens/islands/islandsGap.png" caption="Islands Gap" %}

{% include figure.html content="/screens/islands/maxGap.png" caption="Max Gap" %}

### Tool Windows Overlay Opacity

This setting controls the opacity of the overlay applied to Tool Windows when the application is not focused. By default, it's set to 50% opacity.


{% include figure.html content="/screens/islands/noOpacity.png" caption="Fully Opaque" %}

{% include figure.html content="/screens/islands/halfOpacity.png" caption="Half Transparent" %}

{% include figure.html content="/screens/islands/maxOpacity.png" caption="No Transparency" %}