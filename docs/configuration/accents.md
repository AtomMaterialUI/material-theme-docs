---
layout: docs
title: Accents
description: Colorize important parts of the UI
group: configuration
comments: true
toc: true

previous:
  url: '/docs/configuration/contrast'
  title: Contrast Settings
next:
  url: '/docs/configuration/color-scheme-additions'
  title: Language Additions

gallery:
  - images:
      - filename: accents/actionButtons.png
        alttext: Action Buttons
      - filename: accents/checkboxes.png
        alttext: Checkboxes
      - filename: accents/containingDir.png
        alttext: Project View Directories
      - filename: accents/autocomplete.png
        alttext: Code Completion
      - filename: accents/documentation.png
        alttext: Documentation
      - filename: accents/editIndicator.png
        alttext: Edit Indicator
      - filename: accents/parameterInfo.png
        alttext: Parameter Info
      - filename: accents/progressBar.png
        alttext: Progress Bar
      - filename: accents/searchEverywhere.png
        alttext: Search Everywhere
      - filename: accents/searchInput.png
        alttext: Search Input
      - filename: accents/selectedItemArrow.png
        alttext: Selected Item Arrow
      - filename: accents/radio.png
        alttext: Radio Buttons
      - filename: accents/slider.png
        alttext: Sliders
      - filename: accents/navbar.png
        alttext: Navigation Bar
      - filename: accents/switch.png
        alttext: On/Off Switches
      - filename: accents/caret.png
        alttext: Caret color
      - filename: accents/modifiedSettings.png
        alttext: Modified settings color
      - filename: accents/scrollbar.png
        alttext: Scroll Bar
      - filename: accents/newSEHighlight.png
        alttext: Search Term in Lists
      - filename: accents/branchNames.png
        alttext: Branch names in VCS Log
      - filename: accents/runningIndicator.png
        alttext: Running Indicator in Run Configurations
---

This section describes the **Accent Colors** feature, and how it's used by the plugin.
{:class='title'}

{% include carbonads.html %}

## Definition

_Accent Color_ refers to a color used to emphasize key parts of the UI, such as the active tab, focused input texts, checked boxes, etc.
The Material Theme
plugin enables this feature in the IDE and gives the ability to customize it to your heart's content.

For more info about _Accent Colors_ in the Material Design guidelines, follow this link:
<https://material.io/guidelines/style/color.html#color-color-system>

### Usage

Here is a non-exhaustive list of components where accent color is used:

- Active Tab Indicator
- Close tab button on hover
- Tree View selected item indicator
- Checked boxes
- Selected Radio buttons
- Focused text inputs
- Focused/Hovered comboboxes
- Sliders
- Toggled Action buttons
- Code Completion pane
- Parameter Info
- Documentation's links and bold texts
- Panels' links
- Tree's selected item expanded and collapsed icons
- Progress Bar
- Circular progress indicator
- Scrollbars (according to `Accent Scrollbars` setting)
- VCS Log branches icon
- Caret Color
- Modified Setting Pages
- On/Off Switches in Search Everywhere/Execute Action
- Navigation Bar Focused Item
- Search terms in lists
- Accent Mode color
- Running Indicator in Run configurations
- And other use cases...

## Customization

There are many ways to select an accent color:

**Material Theme Toolbar**:

{% include figure.html content="/screens/accents/accentChooser.png" caption="Material Toolbar Accent Chooser" %}

**Status Bar Accent Color Widget**:

{% include figure.html content="/screens/accents/statusAccentChooser.png" caption="Status Bar Accent Chooser" %}

**From The Settings**:

{% include figure.html content="/screens/settingsv3/accentColors.png" caption="Accent Color Settings" %}

### Predefined accent colors

Here is the list of predefined colors:

{% for color in site.data.accentColors %}
{% include color2.html color=color %}
{% endfor %}

### Custom accent color

By default, the accent color is taken from the theme itself. For Material Themes, it is a specific property of the theme, but for external themes it is taken from the `Link.activeForeground` property.

You can also decide to use your own accent color by unchecking the `Override Accent Color from Theme` checkbox.

### Accent Color Preview

If you want to know how the accent will look like, you can use the `Preview` section of the Settings Page

{% include figure.html content="/screens/accents/accentPreview.png" caption="Accent Preview" %}

## Gallery

Note: These images are dating from the first versions of the plugin. As the plugin evolved, there is a high chance that these images are outdated. Nevertheless, you can navigate the `UI DSL Showcase` settings screen to see the preview in real-time.

{% include gallery_lightbox.html %}