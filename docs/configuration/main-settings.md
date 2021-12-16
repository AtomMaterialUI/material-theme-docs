---
layout: docs
title: Main Settings
description: Main Settings for the Material Theme
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/settings'
  title: Settings
next:
  url: '/docs/configuration/tab-settings'
  title: Tab Settings

---

Configure the main settings of the plugin: Theme, Contrast mode and Accent Color.
{:class='title'}

{% include carbonads.html %}

### Selected Theme

This dropdown will allow you to change the currently selected theme just like the Quick Switcher.

{% include figure.html content="/screens/switchSettings.png" caption="Switch Theme in Settings" %}

Note that [Native Themes](https://plugins.jetbrains.com/contest/intellij-themes/2019) won't show up in this list.

----

### Contrast Mode

This feature is available in the free plan.
{:class='card-panel warn'}

The contrast mode allows you to add more contrast between the IDE's panels and components for better visualization.

{% include figure.html content="/screens/noContrast.png" caption="Without Contrast enabled" %}
{% include figure.html content="/screens/withContrast.png" caption="With Contrast enabled" %}

The parts that are affected by the contrast change are:
- The project tree
- The settings tree
- Inactive tabs
- Input, Search and number controls
- Dropdowns
- Lists and Tables
- etc...

#### Color Palette

{% for theme in site.data.themes.material  %}
{% include color.html color=theme field='contrast' %}
{% endfor %}
{% for theme in site.data.themes.other  %}
{% include color.html color=theme field='contrast' %}
{% endfor %}
{% for theme in site.data.themes.other2  %}
{% include color.html color=theme field='contrast' %}
{% endfor %}


----
### High Contrast

This feature is only available for premium users.
{:class='card-panel warn'}

This option increases the contrast between the editor and the IDE, just like other editors such as Visual Studio Code or Atom.

{% include figure.html content="/screens/highContrast.png" caption="High Contrast" %}

There is already a *Contrast Mode* which is providing contrast between different panes of the editor, such as the Trees or the inputs, but this feature actually increases the contrast between the _IDE itself_ and the editor. You can even set High Contrast **when in Contrast Mode**!

{% include figure.html content="/screens/noHighContrast.png" caption="Regular" %}

{% include figure.html content="/screens/veryHighContrast.png" caption="Very High Contrast" %}

The High Contrast mode is setting the main background color and contrast color darker, while setting the "Text Color" brighter (and vice-versa for light themes), such as the color of the tree items. Other colors, such as the main foreground colors or button colors are left unchanged.

----
### Custom Accent Color

This feature is available in the free plan.
{:class='card-panel warn'}

This setting controls the [current accent color](/docs/configuration/accents) used throughout the app.

Accent color is used in many places such as:
- Quick documentation
- Parameter Info
- Links and bold texts in documentation panels
- Text, number and password boxes border
- Dropdowns border
- Checkboxes and Radio Buttons fill color
- etc...

While a set of predefined accent colors are available in the
[Accent Color Chooser](/docs/configuration/accents), this setting allows you to set your own custom color.

{% include figure.html content="/screens/accentChooser.png" caption="Accent Color Chooser" %}

### Override Accent Color

From version 2.6.0 there exists the possibility to override the custom accent color with the default one bundled with the theme. For instance, for _Oceanic_ the accent color will be `teal` while for _Darker_ it will be `orange` etc.

This is especially useful for external themes, so that Themes designers can provide their own accent color.

----
### Notes

- Contrast color is also used inside "striped tables", independently of the setting.
- Some resources, such as the scrollbar, will not get the new custom accent color until next restart.
- The *Override Accent Color from Theme* setting will take precedence over the selected accent color.

