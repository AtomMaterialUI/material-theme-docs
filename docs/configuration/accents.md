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
  url: '/docs/configuration/accent-mode'
  title: Accent Mode

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

The **Accent Colors** feature allows you to personalize and emphasize key UI elements throughout the IDE.
{:class='title'}

{% include carbonads.html %}

## Definition

An _Accent Color_ is used to highlight primary UI components, such as active tabs, focused inputs, checkboxes, and buttons. The Material Theme UI plugin enables comprehensive customization of these colors within the IDE.

For more information, refer to the [Material Design Color System](https://material.io/guidelines/style/color.html#color-color-system) guidelines.

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

Accent colors can be configured in several ways:

**Material Theme Toolbar**:

{% include figure.html content="/screens/accents/accentChooser.png" caption="Material Toolbar Accent Chooser" %}

**Status Bar Accent Color Widget**:

{% include figure.html content="/screens/accents/accentColorWidget.png" caption="Status Bar Accent Chooser" %}

**From The Settings**:

{% include figure.html content="/screens/settingsv3/accentColors.png" caption="Accent Color Settings" %}

### Predefined accent colors

Here is the list of predefined colors:

{% for color in site.data.accentColors %}
{% include color2.html color=color %}
{% endfor %}

### Second Accent Color

Themes can define a secondary accent color. This color is utilized when [Accent Mode](/docs/configuration/accent-mode) is enabled, providing a complementary highlight when the primary accent color is already prominent.

### Custom accent color

By default, the accent color is derived from the theme. For Material Themes, this is a predefined theme property; for external themes, it is typically based on the `Link.activeForeground` property.

To use a different color, uncheck the `Override Accent Color from Theme` option and select your preferred color.

### Accent Color Preview

To see how your chosen accent color will appear, refer to the `Preview` section on the settings page.

{% include figure.html content="/screens/accents/accentPreview.png" caption="Accent Preview" %}

## Gallery

Note: These images are from earlier versions of the plugin and may not reflect current UI changes. For a real-time preview, navigate to the `UI DSL Showcase` settings screen within the IDE.

{% include gallery_lightbox.html %}