---
layout: docs
title: Tab Settings
description: Control the appearance of the Editor Tabs
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/accent-mode'
  title: Accent Mode
next:
  url: '/docs/configuration/spacing-settings'
  title: Spacing Settings
---

These settings allow you to customize the appearance of the Tabs, whether it's Editor Tabs, Debugger Tabs, or any tabbed pane in the IDE. You can customize the height, the active tab indicator, the font, and much more to achieve the perfect look for your IDE.
{:class='title'}

{% include carbonads.html %}

Some features are only available for premium users. You can either buy a premium license for the plugin, or purchase the license for these features only by going to this link: [Material Theme Extras](https://plugins.jetbrains.com/plugin/19250-material-theme-ui-extras).
{:class='card-panel warn'}

----

## Tab Customization

{% include figure.html content="/screens/settingsv3/tabSettings.png" caption="Tab Settings Overview" %}

### Enable Customization

The Material Theme UI plugin provides it's own implementation of the tabs, giving you a lot of control over the appearance and behavior. However, JetBrains' implementation is generally more polished for general use. 

Therefore, this setting allows you to turn off the Material Theme UI tabs and revert to the default ones. However, this also means that you won't benefit from the features such as the custom tab highlighter, custom tab font, custom rounded tabs, etc.

**Note**: Some settings do not apply with the *Rounded Tabs* layout.
{:class='card-panel warn'}

### Tab Height

This setting allows you to customize the height for the different tabs of the IDE, giving you full control over the tabs' appearance.

You can set a custom height between `24` and `60`. 

{% include figure.html content="/screens/tabs/smallTabs.png" caption="Small Height Tabs" %}

{% include figure.html content="/screens/tabs/largestTabs.png" caption="Largest Height Tabs" %}

{% include figure.html content="/screens/tabs/normalTabs.png" caption="Default Height Tabs" %}

**Note**: The _Tabs Height_ setting also affects the **Tool Windows' Height**, to provide a consistent look between the Editor Tabs and other tool windows.
{:class='card-panel info'}

### Active Tab Highlight Color

This feature is only available for premium users.
{:class='card-panel warn'}

By default, the active tab indicator takes its color from the following sources:
- From the color scheme, via the Color Scheme Settings at `Editor -> Color Scheme -> General -> Tabs -> Underline`
- From the accent color of the current theme.

However, if you want to customize the color independently of the color scheme or the current theme, this setting provides you with the ability to customize it globally or per-project.

{% include figure.html content="/screens/tabs/overrideTabColorGlobal.png" caption="Active Tab Highlight Color Settings" %}

{% include figure.html content="/screens/tabs/perProjectSettings.png" caption="Per Project Tab Highlight Settings" %}

{% include figure.html content="/screens/tabs/perProjectsTabColor.png" caption="Per Project Tab Color" %}

### Thickness

In addition of the highlight color, you can also customize the thickness of the active tab indicator. Similarly, you can set a global thickness or on a per-project basis.

{% include figure.html content="/screens/tabs/smallThickness.png" caption="Smallest thickness" %}

{% include figure.html content="/screens/tabs/largeThickness.png" caption="Largest thickness" %}


-----

## Rounded Tabs

This feature is only available for free, but some customization options are only available in the premium version.
{:class='card-panel warn'}

### Overview

The classic Material Design tabs design give the following recommendation for tabs:
- The tabs should have no borders
- The active tab has a bottom, thick indicator line with the accent color

While this design has made its way into a lot of apps, recently a newer design is starting to get some traction: **Rounded Tabs**.

Unlike classic tabs, rounded tabs follow the following guidelines:
- The tabs should have a border with the accent color
- The active tab should have a transparent background with the accent color

{% include figure.html content="/screens/tabs/roundedTabs.png" caption="Rounded Tabs" %}

The Material Theme UI plugin allows you to use either design, or even a mix of both, e.g. you can decide to use the rounded tabs design while still keeping the classic tab indicator, if you feel like it.

{% include figure.html content="/screens/tabs/roundedTabsWithIndicator.png" caption="Rounded Tabs With Indicator" %}

This mode is available in the free plan, to coincide with JetBrains' _Islands Layout_ which is also free. However, the plugin provides a bunch of additional customization options to make it even more unique.

### Rounded Tabs Opacity

Controls the transparency of the background.

{% include figure.html content="/screens/tabs/opaque.png" caption="Opaque Background" %}

{% include figure.html content="/screens/tabs/transparent.png" caption="Transparent Background" %}

### Rounded Tabs Border Size

Controls the size of the border of the tabs.

{% include figure.html content="/screens/tabs/thinBorder.png" caption="Thin Border" %}

{% include figure.html content="/screens/tabs/thickBorder.png" caption="Thick Border" %}

### Rounded Tabs Arc

You can also control the arc radius of the border (to some extent).

{% include figure.html content="/screens/tabs/squared.png" caption="Squared Border" %}

{% include figure.html content="/screens/tabs/smallRadius.png" caption="Small Radius Border" %}

### Rounded Tabs Padding

Lastly, this setting allows you to control the padding between the outer tab and the rounded border.

{% include figure.html content="/screens/tabs/largePadding.png" caption="Large Padding" %}

{% include figure.html content="/screens/tabs/smallPadding.png" caption="Small Padding" %}

-----

## Tab Label Settings

These settings allow you to customize the appearance of the tab labels, such as making them uppercase, bold, or changing the font.

Some features are only available for premium users.
{:class='card-panel warn'}

### Uppercase Tabs

This setting allows you to make the tab titles appear in **UPPERCASE**, removes any other symbols than alphanumeric characters, and adds spaces between words.

{% include figure.html content="/screens/tabs/uppercaseTabs.png" caption="Uppercase Tabs" %}

### Bold Active Tab

Make the active tab **bold**.

{% include figure.html content="/screens/tabs/boldTabs.png" caption="Bold Active Tab" %}

When coupled with the `Uppercase Tabs` setting, you can achieve a look very close to the original Material Design.

{% include figure.html content="/screens/tabs/uppercaseBold.png" caption="Uppercase Bold Tabs" %}

### Custom Font

These settings allow you to customize the font family and font size of the tab labels.

{% include figure.html content="/screens/tabs/customFont.png" caption="Custom Tab Font" %}

-----

## Tab Highlight Position

This setting allows you to customize the position of the active tab indicator.

{% include figure.html content="/screens/tabs/tabHighlightPosition.png" caption="Tab Highlight Position" %}

You have the choice of the following positions:
- **Default (Bottom)**
- **Bottom**
- **Top**
- **Left**
- **Right**
- **Top-Bottom**
- **Left-Right**
- **Boxed**
- **Bottomless**
- **Topless**
- **None**

**Tip**: If you use the _Rounded Tabs_ layout, it's recommended to set the tab highlighter position to **None** for the best visual results.
{:class='card-panel info'}

-----

## Tab Tweaks

Lastly, there are a few small and free tweaks to apply to the tabs.

### Tabs Shadow

Enable or disable the shadow effect under the tabs to provide a sense of depth.

{% include figure.html content="/screens/tabs/tabShadow.png" caption="Tabs Shadow" %}

### Animated Tabs

This option sports a slight animation when switching between tabs.

{% include figure.html content="/screens/tabs/animatedtabs.gif" caption="Animated Tabs" %}

### Tab Separators

Add a small separator between tabs to provide a better distinction between tabs. 

{% include figure.html content="/screens/tabs/tabSeparators.png" caption="With Tab Separators" %}

**Tip**: We encourage disabling this option if you use the _Rounded Tabs_ layout.
{:class='card-panel info'}

### Customize Active Tab Color

By default, the active tab indicator takes its color from the current theme's accent color, disabling the ability to take it from the color scheme, to provide a more consistent look.

But if you prefer to let the color scheme determine that color, this option allows you to do so.

----

## FAQ

**Q**: Is there a way to completely remove the Active Tab Indicator?

**A**: Yes, by setting the **Tab Highlighter Position** to **None**.

**Q**: The _Tab Height_ feature is cool in the editor, but I'd rather leave other tabs untouched.

**A**: Unfortunately, currently the setting that sets the tab height is shared between all tabs in the IDE.

**Q**: Why limit the thickness or the tab height?

**A**: Because allowing values past these limits would make the UI look inconsistent or cause layout issues.