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
  url: '/docs/configuration/icons-settings'
  title: Icons Settings

---

These settings control some components' display, mainly about their compactness.
{:class='title'}

{% include carbonads.html %}

----
### Compact Statusbar

The IDE's Status Bar went through a redesign as well, removing all borders and giving more padding on the top and
bottom. This setting allows you to revert to the default "_compact_" design.


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

----
### Compact Menus

From version 2.10.2 Menus had also gained more padding just like dropdowns and tables.

{% include figure.html content="/screens/paddedMenus.png" caption="Regular Menus" %}

As a result, a setting have been added to revert to the default menus size.

----
### Notes

- Because the IDE is developed with compact table cells in mind, using "padded table cells" may result of display
  artifacts in some components. One example is the *Python DataView*
  (<https://github.com/ChrisRM/material-theme-jetbrains/issues/485>). If you are using such features a lot, just enable
  the "Compact Table Cells" option to solve that problem.

