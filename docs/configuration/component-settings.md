---
layout: docs
title: Component Settings
description: Further customize the IDE components
group: configuration
comments: true
toc: true

previous:
  url: '/docs/configuration/project-view-settings'
  title: Project View Settings
next:
  url: '/docs/configuration/features-settings'
  title: Features Settings
---

This page controls the components used throughout the IDE, like buttons, scrollbars, etc.
{:class='title'}

{% include carbonads.html %}

### Old Material Design style

This feature is available in the free plan.
{:class='card-panel warn'}

This setting reverts the components to the previous _Material Design_ style of 2016,
for those who prefer it over the new Material Design style.

Please note: this style remains deprecated, e.g., it won't be getting any new features neither fixes for issues that can
occur within this design.
{:class='card-panel warn'}

This feature has been available since 6.15.0

----

### Uppercase buttons

This feature is available in the free plan.
{:class='card-panel warn'}

This setting sets the text of the buttons to be uppercase, just like the Material Design buttons.
It's optimal for a full-fledged _Material Design_ experience.

{% include figure.html content="/screens/uppercaseButtons.png" caption="Uppercase Buttons" %}

-----

### Outline buttons

This feature is only available for premium users.
{:class='card-panel warn'}

Starting from version 6.2, this setting replaces regular buttons with **outlined buttons**.

{% include figure.html content="/screens/outlinedButtons.png" caption="Outlined Buttons" %}

-----

### Transparent scrollbars and accent scrollbars

This feature is available in the free plan.
{:class='card-panel warn'}

These options control the appearance of the scrollbars.

**Note**: this feature works natively on Windows and Linux, but on macOS it's dependent on the "_System Scrollbars_"
setting.

{% include figure.html content="/screens/macScrollSettings.png" caption="Scrollbar Settings macOS" %}

- *Transparent scrollbars* adds more transparency to the scrollbars and set it as the same color as the current theme's
  background color.
  It's adding _50% opacity_, and there is no way to change it.

- *Accent scrollbars* replaces the scrollbar color with the _current accent color_.

{% include figure.html content="/screens/scrollbars.png" caption="Accent Scrollbars" %}

#### Editor scrollbars

This feature is available in the free plan.
{:class='card-panel warn'}

Since 2019.1 the scrollbars enter into two categories:

* _UI Scrollbars_: these are the scrollbars found throughout the UI, such as lists and trees.
* _Editor Scrollbars_: these are scrollbars for the editor.

Due to this separation, this setting only affects the _UI Scrollbars_.

The _Editor Scrollbars_, in turn, are managed via a [**Color Scheme Setting Page**](/docs/configuration/scrollbars).

---

### Tabs shadow

This feature is available in the free plan.
{:class='card-panel warn'}

This option enables/disables the shadow under the tabs.

{% include figure.html content="/screens/tabShadow.png" caption="Tabs Shadow" %}

---

### Shadows

This feature is only available for premium users.
{:class='card-panel warn'}

This small tweak adds a shadow to popups and some notifications.

{% include figure.html content="/screens/shadows.png" caption="Shadows" %}


---

### Inverted completion selection color

This feature is available in the free plan.
{:class='card-panel warn'}

This setting allows you to choose between two styles for the **selected option** in the *Autocomplete Panel*:

{% include figure.html content="/screens/normalSelection.png" caption="Normal selection" %}

{% include figure.html content="/screens/invertedSelection.png" caption="Inverted selection" %}

