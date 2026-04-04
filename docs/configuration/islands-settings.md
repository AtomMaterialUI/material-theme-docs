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

This page describes the customization options for JetBrains' Islands layout.
{:class='title'}

{% include carbonads.html %}

This feature is exclusive to premium users. You can purchase a premium license for the plugin or a dedicated license for this feature here: [Material Theme Islands](https://plugins.jetbrains.com/plugin/28142-material-theme-ui-islands).
{:class='card-panel warn'}

## Introduction

In late 2025, JetBrains revamped its user interface by introducing the **Islands** layout. This design features a more spacious look with distinct "islands" for the editor, tool windows, and other UI components. Based on the now-discontinued **JetBrains Fleet**, it provides a refreshed aesthetic to the IDE suite.

The Islands layout is enabled by default in recent IDE versions but offers limited native configuration. Material Theme Islands settings allow you to customize various aspects of this layout to better suit your preferences and workflow.

{% include figure.html content="/screens/islands/islandsSettings.png" caption="Islands Settings" %}

----

## Colors

### Background Contrast

By default, the Islands' background matches the Tool Windows and Status Bar colors, blending them together with only a thin border for distinction.

This setting increases the contrast between these elements by adjusting the lightness of the _Application Frame_, making the UI components more distinguishable.

{% include figure.html content="/screens/islands/noContrast.png" caption="Without Contrast" %}

{% include figure.html content="/screens/islands/withContrast.png" caption="With Contrast" %}

### Custom Background Color

Alternatively, you can define a custom background color for the Islands.

{% include figure.html content="/screens/islands/customColor.png" caption="Custom Background Color" %}

**Note**: This setting may conflict with [Colorize Application Frame](/docs/configuration/project-title-bar.md#application-frame). If both are enabled, the Application Frame settings take precedence over the Islands Background Color.
{:class='card-panel warn'}

**Note**: Currently, it is not possible to set a different background color for each project.
{:class='card-panel info'}

### Border Color

This setting adds a border around the Islands, reinforcing the separation between UI elements. You can also specify a custom border color.

{% include figure.html content="/screens/islands/noBorder.png" caption="Without Border" %}

{% include figure.html content="/screens/islands/withBorder.png" caption="With Border" %}

{% include figure.html content="/screens/islands/customBorderColor.png" caption="Custom Border Color" %}

----

## Spacing

### Island Arc Size

Controls the radius of the curved corners for the Islands. The default value is 20.

{% include figure.html content="/screens/islands/angledCorners.png" caption="Angled Corners" %}

{% include figure.html content="/screens/islands/roundedCorners.png" caption="Rounded Corners" %}

### Inner Spacing

Controls the padding inside the Islands. The default value is 10.

{% include figure.html content="/screens/islands/noInnerSpacing.png" caption="No Inner Spacing" %}

{% include figure.html content="/screens/islands/maxInnerSpacing.png" caption="Max Inner Spacing" %}

### Outer Margin

Controls the distance between the Islands and the editor edges. The default value is 10.

{% include figure.html content="/screens/islands/noOuterMargin.png" caption="No Outer Margin" %}

{% include figure.html content="/screens/islands/maxOuterMargin.png" caption="Max Outer Margin" %}

**Note**: Increasing margins reduces the available editor area, which may cause tabs to appear "cut off" at the edges.
{:class='card-panel warn'}

----

### Islands Gap

This setting applies only when the _Tool Windows_ are hidden.
{:class='card-panel info'}

This option adds a horizontal gap between the IDE edges and the Islands, creating a more centered layout. The default value is 4.

{% include figure.html content="/screens/islands/islandsGap.png" caption="Islands Gap" %}

{% include figure.html content="/screens/islands/maxGap.png" caption="Max Gap" %}

### Tool Windows Overlay Opacity

This setting controls the opacity of the overlay applied to Tool Windows when the application is not focused. The default value is 50%.

{% include figure.html content="/screens/islands/noOpacity.png" caption="Fully Opaque" %}

{% include figure.html content="/screens/islands/halfOpacity.png" caption="Half Transparent" %}

{% include figure.html content="/screens/islands/maxOpacity.png" caption="No Transparency" %}