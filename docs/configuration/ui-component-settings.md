---
layout: docs
title: UI Components Settings
description: Customize various components of the IDE.
group: configuration
comments: true
toc: true

previous:
  url: '/docs/configuration/trees-settings'
  title: Trees Settings
next:
  url: '/docs/configuration/features-settings'
  title: Features Settings
---

These settings provide you with a wide range of customization options for various IDE components.
{:class='title'}

{% include carbonads.html %}

Some features are only available for premium users. You can either buy a premium license for the plugin, or purchase the license for these features only by going to this link: [Material Theme Extras](https://plugins.jetbrains.com/plugin/19250-material-theme-ui-extras).
{:class='card-panel warn'}

----

## Look And Feel

{% include figure.html content="/screens/settingsv3/uiComponents.png" caption="UI Components" %}

### Material Design Style

This feature is available in the free plan.
{:class='card-panel warn'}

This setting allows you to choose between three _Material Design_ styles, each offering a distinct visual experience: **Material Design**, *
*Material Theme**, and **Material You**.

#### Material Design (Material 1)

The first iteration of [Material Design from Google](https://m1.material.io/) features flat, rectangular elements with consistent spacing
and shadows to convey depth. Input fields blend seamlessly with the background by omitting borders, **Roboto** serves as the primary
font, toggled elements display an overlaid circle indicator, and selected tabs are marked by an underline.

{% include figure.html content="/screens/ui/material1.png" caption="Material Design" %}

#### Material Theme (Material 2)

[Material Theme](https://m2.material.io) builds upon the same principles as Material Design while introducing a more modern and refined
aesthetic. It incorporates softer, more rounded elements with enhanced emphasis on color and typography. Input fields now include borders
for clearer distinction from the background, **Roboto** remains the primary font, menus and popups feature rounded corners, and most
elements maintain Material 1's core principles with increased roundness throughout.

{% include figure.html content="/screens/ui/material2.png" caption="Material Theme" %}

#### Material You (Material 3)

The latest iteration, [Material You](https://m3.material.io), introduces a more dynamic and contemporary design language. Input fields and
buttons feature prominently rounded borders, **Google Sans** replaces Roboto as the primary typeface, and rounded corners appear throughout
the interface. Tabs are now represented by a rounded indicator instead of a solid line, offering improved visibility and a more cohesive
visual style.

{% include figure.html content="/screens/ui/material3.png" caption="Material You" %}

### Borderless Mode

The Material Theme UI designs feature very subtle borders and separators to create an "almost-flat" experience. However, you can take this
further by blending borders completely with the background.

This option replaces the color of various borders and separators with the background color, simulating a **pure borderless** interface.

<div class="masonry" markdown="0">

{% include figure.html content="/screens/ui/borderful.png" caption="Borderful Menu" %}

{% include figure.html content="/screens/ui/borderless.png" caption="Borderless Menu" %}

{% include figure.html content="/screens/ui/borderfulIde.png" caption="Borderful Ide" %}

{% include figure.html content="/screens/ui/borderlessIde.png" caption="Borderless Ide" %}

</div>
----

## Components

### Uppercase buttons

This setting changes the button text to uppercase, giving it a look reminiscent of Material Design guidelines.

<div class="masonry" markdown="0">

{% include figure.html content="/screens/ui/lowercaseButtons.png" caption="Regular Buttons" %}

{% include figure.html content="/screens/ui/uppercaseButtons.png" caption="Uppercase Buttons" %}

</div>

----

### Outline buttons

This setting gives buttons an alternate look, sporting a transparent background, and the border and text having the color of the
current accent color, making them looking like "outlined buttons".

{% include figure.html content="/screens/ui/outlined.png" caption="Outlined Buttons" %}

----

### Custom Button Radius

By default, the buttons have a different radius depending on the _Material Design Style_ selected:
- Material 1: 0px
- Material 2: 8px
- Material 3: 20px

However, if these defaults don't suit your tastes, you can use these settings to change the radius of the buttons.

<div class="masonry" markdown="0">

{% include figure.html content="/screens/ui/rectangularButtons.png" caption="Rectangular Buttons" %}

{% include figure.html content="/screens/ui/roundButtons.png" caption="Pill Buttons" %}

</div>

### Custom Action Buttons Radius

Like the _Custom Button Radius_, this setting allows you to change the radius of the action buttons, which are the buttons found in the toolbars and some popups. In this case, the default value is always 20px, giving it a full circle shape.

<div class="masonry" markdown="0">

{% include figure.html content="/screens/ui/rectangularActionButtons.png" caption="Rectangular Action Buttons" %}

{% include figure.html content="/screens/ui/roundActionButtons.png" caption="Circled Action Buttons" %}

</div>

-----

### Round Notifications

This setting allows you to make the notifications round. 

<div class="masonry" markdown="0">

{% include figure.html content="/screens/ui/roundNotifications.png" caption="Round Notifications" %}

{% include figure.html content="/screens/ui/rectNotifications.png" caption="Regular Notifications" %}

</div>

----

### Inverted Completion Color

This setting gives you the choice to change the color of the selected line in the autocompletion popup. When selected, it uses the *Contrast Color* instead of the *Selection Color*.

<div class="masonry" markdown="0">

{% include figure.html content="/screens/ui/normalSelection.png" caption="Normal Selection" %}

{% include figure.html content="/screens/ui/invertedSelection.png" caption="Inverted Selection" %}

</div>

----

## Search Everywhere

### Customize Search Everywhere

This section allows you to customize many aspects of the Search Everywhere popup, such as the padding, or the font size.

This feature is available for premium users.
{:class='card-panel warn'}

#### Custom Input Padding

This setting allows you to customize the size of the search input field. The more padding, the bigger the input will become. The default value is 12px.

<div class="masonry" markdown="0">

{% include figure.html content="/screens/ui/smallestSearch.png" caption="Smallest Search Field" %}

{% include figure.html content="/screens/ui/largestSearch.png" caption="Largest Search Field" %}

</div>

#### Font Size Delta

In addition, this setting gives the ability to increase or decrease the font size of the search field.

<div class="masonry" markdown="0">

{% include figure.html content="/screens/ui/smallestFont.png" caption="Smallest Font Size" %}

{% include figure.html content="/screens/ui/largestFont.png" caption="Largest Font Size" %}

</div>

----

## Scrollbars

### Transparent scrollbars and accent scrollbars

These options control the appearance of the IDE's scrollbars. Please note that this doesn't affect the scrollbars in the editor; for those you have a dedicated setting page: [**Scrollbars Color Scheme**](/docs/configuration/scrollbars.md).

- When both options are unchecked, the scrollbars will sport the same color as the foreground color.
- *Transparent scrollbars*: make scrollbars 50% transparent.
- *Accent scrollbars* changes the scrollbar color with the _current theme's accent color_.
- When both options are checked, the scrollbars will be accent colored and 50% transparent.

<div class="masonry" markdown="0">

{% include figure.html content="/screens/ui/transparentScrollbars.png" caption="Transparent Scrollbars" %}

{% include figure.html content="/screens/ui/accentScrollbars.png" caption="Accent Scrollbars" %}

{% include figure.html content="/screens/ui/transparentAccentScrollbars.png" caption="Transparent Accent Scrollbars" %}

{% include figure.html content="/screens/ui/noTintScrollbars.png" caption="Not Tinted Scrollbars" %}

</div>

**Important**: this feature works natively on Windows and Linux, but on macOS it's dependent on the "_System Scrollbars_"
setting.

{% include figure.html content="/screens/ui/macSettings.png" caption="Scrollbar Settings macOS" %}

----

## Misc

These features are available in the free plan.
{:class='card-panel warn'}

### Extra Shadows

This small tweak adds a shadow to some popups and notifications.

{% include figure.html content="/screens/ui/shadows.png" caption="Notifications Shadows" %}

### Circular Icon Loader

This setting replaces the default icon loader (the gear-like animated icon) with the Material Icons' circular loader icon.

{% include figure.html content="/screens/ui/circleLoader.png" caption="Circular Icon Loader" %}

{% include figure.html content="/screens/ui/miniLoader.png" caption="Small Icon Loader" %}


**Note**: This feature is only usable in coordination with the _Atom Material Icons_ plugin, as the icon is part of that plugin.
{:class='card-panel warn'}

**Note 2**: You need to restart the IDE for this setting to take effect.
{:class='card-panel warn'}

### Use Original Tool Window Buttons

The plugin replaces the appearance of the tool window buttons with a circular, transparent shape on hover, and a fully squared, transparent shape for opened tool windows.

This setting allows you to revert to the original tool window appearance instead.

<div class="masonry" markdown="0">

{% include figure.html content="/screens/ui/hoverTWButtons.png" caption="Hover" %}

{% include figure.html content="/screens/ui/toggledButtons.png" caption="Toggled" %}

{% include figure.html content="/screens/ui/originalHoverTWButtons.png" caption="Original Hover" %}

{% include figure.html content="/screens/ui/originalToggledButtons.png" caption="Original Toggled" %}

</div>