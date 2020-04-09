---
layout: docs
title: Material Components
group: reference
toc: true
comments: true

previous:
  url: '/docs/reference/associations'
  title: Icon Associations

next:
  url: '/docs/reference/wizard'
  title: Material Wizard
---

This is a reference of all the components customized by the plugin.
{:class='title'}

{% include carbonads.html %}

## Introduction

The original idea of the _Material Theme plugin_ was to be able to customize the UI and Editor colors to look like the
original Sublime theme. Since there wasn't a way to create a new separate Look And Feel, the plugin is instead borrowing
the native Look and feels, Darcula and IntelliJ, and overrides their colors as long as it is able to.

However, the original Sublime theme didn't stop there. Aside from changing the colors of the editor, the theme also got
to customize the different parts of the editor with a Material Design look and feel, which brought him a lot of stars.
There should be a way to do it for JetBrains IDE as well, right?

Guess there is, and now the plugin features Material Design components reworked from the ground up, making it look very
similar to the original plugin, and even bringing new features to light!

## Reference

### Tabs

{% include figure.html content="/components/tabs.png" caption="Tabs" %}

Regular Editor tabs have been modified to look like Material design tabs:
- They got bigger
- An indicator is displayed under the active tab
- They can be bold uppercase
- The close button has been reworked
- A shadow is shown under the tab strip (from version 2.8.0)

### Buttons

{% include figure.html content="/components/buttons.png" caption="Buttons" %}

- Buttons have been flattened, and lost their bevel effect.
- The font have been increased to 13px, and got bold
- An animation is played when hovering them as they change color

### Inputs, Numbers and Passwords

{% include figure.html content="/components/input.png" caption="Input Fields" %}

{% include figure.html content="/components/number.png" caption="Number Fields" %}

{% include figure.html content="/components/password.png" caption="Password Fields" %}

- They lost their border, instead only display a bottom border that get highlighted on focus
- They have a different background color in contrast mode
- Password fields have a new button to allow previewing the inputted characters

### Checkboxes

{% include figure.html content="/components/checkbox.png" caption="Checkboxes" %}

- Checkboxes are now filled with the accent color while the sign is transparent
- They get some sort of ripple effect when checked/unchecked

### Radio buttons

{% include figure.html content="/components/radio.png" caption="Radio Buttons" %}

- Radio buttons got similar to the Material Design Radio buttons
- They get some sort of ripple effect when pressed

### Dropdowns/Combobox

{% include figure.html content="/components/dropdown.png" caption="Dropdown/Comboboxes" %}

{% include figure.html content="/screens/dropdownEnhanced.png" caption="Opened Dropdowns" %}

- The dropdowns/comboboxes got redesigned by having the same border as the inputs, which highlights on active/hover.
- Besides, they have been added more padding between items, as well as hovering over the selector, just like Material
  Design dropdowns. This behavior can be switched off via the `Compact Dropdowns` setting.

### Action Buttons

{% include figure.html content="/components/actionButton.png" caption="Action Button" %}

- Action Buttons (or Toolbar buttons) got redesigned to display some sort of ripple when hovered/pressed.

### Sliders

{% include figure.html content="/components/slider.png" caption="Sliders" %}

- The thumb got round and larger
- The track got thicked and received the accent color
- The steppers have been removed

### Tables

{% include figure.html content="/components/table.png" caption="Tables" %}

{% include figure.html content="/components/table2.png" caption="Table Cells" %}

- Table Headers and cells have been padded on top and bottom
- Table Headers got bold
- Table Cells got a beveled border when selected (this might change in the future)
- Striped table rows get the regular and contrast color of the current theme

### Trees

{% include figure.html content="/components/treeArrows.png" caption="Tree Arrows" %}

- Tree Items height got bigger (can be customized in the settings)
- Selected item is highlighted with an indicator (can be customized in the settings)
- Arrows have been replaced with Material Arrows ("chevrons") (but can be modified in the settings as well)

### Progress Indicators

{% include figure.html content="/components/progress.png" caption="Progress Bar" %}

{% include figure.html content="/components/spinner.png" caption="Progress Loader" %}

- Progress Bars have lost their "striped" look to look more like a regular filling bar
- Progress Loaders have been replaced with the usual Material Design circular loader

### Dialogs

{% include figure.html content="/components/dialog.png" caption="Dialogs" %}

- Dialogs title bar's text is now left aligned, bigger and bold

### Switches

{% include figure.html content="/components/switches.png" caption="Switches" %}

- On/Off buttons that appear inside the Command Panel and Search Everywhere

### Navigation Bar

{% include figure.html content="/components/navbar.png" caption="Navigation Bar" %}

- The Navigation Bar at the top of the view looks more like Material Design breadcrumbs.

### Tabbed Panes

{% include figure.html content="/screens/materialTabbedPanes.png" caption="Tabbed Panes" %}

- Tabbed panes respect the Tab Settings, thus allowing custom height, custom indicator and upper case labels
