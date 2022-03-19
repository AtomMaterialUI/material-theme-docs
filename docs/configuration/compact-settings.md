---
layout: docs
title: Compact Settings
description: Fine tune some components' display.
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/tab-settings'
  title: Tab Settings
next:
  url: '/docs/configuration/project-view-settings'
  title: Project View Settings

---

This feature is available in the free plan.
{:class='card-panel warn'}

These settings control some components' display, mainly about their compactness.
{:class='title'}

{% include carbonads.html %}

### Compact Statusbar

The IDE's Status Bar went through a redesign as well, removing all borders and giving more padding on the top and bottom. This setting allows you to revert to the default "_compact_" design.


{% include figure.html content="/screens/expandedStatusbar.png" caption="Padded Status Bar" %}

{% include figure.html content="/screens/compactStatusbar.png" caption="Compact Status Bar" %}

----
### Compact Table Cells

Just like the status bar, table cells, table headers and list views were also given more padding to resemble more like
Material Design's equivalents.

This setting allows you to revert to the old, "_compact_" style. This can be useful if you have lots of items and don't
want to scroll endlessly.

{% include figure.html content="/screens/regularTableHeaders.png" caption="Regular Table Cells" %}

{% include figure.html content="/screens/compactTableHeaders.png" caption="Compact Table Cells" %}

----
### Compact Dropdown Lists

This setting allows you to reduce the size of the dropdowns used in the UI to be more compact.

{% include figure.html content="/screens/notCompactDropdowns.png" caption="Regular Dropdowns" %}

{% include figure.html content="/screens/compactDropdowns.png" caption="Compact Dropdowns" %}

Also, since version 6.8.0, the [Run Configurations](https://www.jetbrains.com/help/idea/run-debug-configuration.html) are affected as well:

{% include figure.html content="/screens/paddedRunConf.png" caption="Padded Run Configuration" %}

{% include figure.html content="/screens/compactRunConf.png" caption="Compact Run Configuration" %}


----
### Compact Menus

From version 2.10.2 Menus had also gained more padding just like dropdowns and tables.

{% include figure.html content="/screens/paddedMenus.png" caption="Regular Menus" %}

As a result, a setting have been added to revert to the default menus size.

----
### Compact Fields

This setting allows you to reduce the size of the fields, that have become larger since the version 6.14.

This option concerns **Text Fields**, **Password Fields**, **Number Fields** and **Search Fields**, as well as **Search Everywhere**. **Find In Files**, **New File**, etc.

{% include figure.html content="/screens/compactField.png" caption="Compact Fields" %}

{% include figure.html content="/screens/paddedField.png" caption="Padded Fields" %}

{% include figure.html content="/screens/compactSearch.png" caption="Compact Search Everywhere" %}

{% include figure.html content="/screens/paddedSearch.png" caption="Padded Search Everywhere" %}


----

### Custom List Items Height

This setting will allow you to customize the items' height in lists, such as regular lists, dropdown options, and many others.

Note: This also affects *Autocompletion choices**.

{% include figure.html content="/screens/highestHeight.png" caption="Custom List Item Size: 48" %}

{% include figure.html content="/screens/paddedComplete.png" caption="Large Autocomplete" %}

{% include figure.html content="/screens/compactComplete.png" caption="Compact Autocomplete" %}


### Notes

- Because the IDE is developed with compact table cells in mind, using "padded table cells" may result of display
  artifacts in some components. One example is the *Python DataView*
  (<https://github.com/ChrisRM/material-theme-jetbrains/issues/485>). If you are using such features a lot, just enable
  the "Compact Table Cells" option to solve that problem.

