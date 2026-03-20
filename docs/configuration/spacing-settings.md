---
layout: docs
title: Spacing Settings
description: Control the size of various IDE components.
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

Some features are only available in the premium plan.
{:class='card-panel warn'}

These settings allows you to control the size of various IDE components, giving you more freedom to control the overall look and feel of the IDE.
{:class='title'}

{% include carbonads.html %}

----

## Spacing Settings

You can find the Spacing Settings in the **Spacing** menu under the **Material Theme** group. Since version 11, you can now control the size of each component separately rather than choose between compact and regular mode.

{% include figure.html content="/screens/settingsv3/spacing.png" caption="Spacing Settings" %}

----

### Main Toolbar

This setting allows you to control the height of the Main Toolbar in both regular and compact modes.

{% include figure.html content="/screens/spacing/smallHeader.png" caption="Small Header" %}

{% include figure.html content="/screens/spacing/largeHeader.png" caption="Large Header" %}

----

### Custom statusbar size

This setting controls the size of the status bar.

{% include figure.html content="/screens/spacing/smallStatus.png" caption="Small Status Bar" %}

{% include figure.html content="/screens/spacing/largeStatus.png" caption="Large Status Bar" %}

----
### Custom table cells size

Similarly, this setting control the size of table cells and table headers. 

**Note**: this doesn't control the size of database tables.

{% include figure.html content="/screens/small/defaultCells.png" caption="Default Table Cells" %}

{% include figure.html content="/screens/small/smallCells.png" caption="Small Table Cells" %}

{% include figure.html content="/screens/small/largeCells.png" caption="Large Table Cells" %}

----
### Custom dropdowns size

This setting allows you to customize the size of the dropdowns used in the UI.

{% include figure.html content="/screens/spacing/defaultDropdowns.png" caption="Default Dropdowns" %}

{% include figure.html content="/screens/spacing/smallDropdowns.png" caption="Small Dropdowns" %}

{% include figure.html content="/screens/spacing/largeDropdowns.png" caption="Large Dropdowns" %}

[//]: # (----)

[//]: # (### Custom menus size)

[//]: # ()
[//]: # (Menus also have gain padding to match the rest of the UI.)

[//]: # (This setting allows you to customize the size of the menus and menu items.)

[//]: # ()
[//]: # ({% include figure.html content="/screens/paddedMenus.png" caption="Regular Menus" %})

[//]: # ()
[//]: # (----)

[//]: # (### Custom list items height)

[//]: # ()
[//]: # (This setting allows you to customize the items' height in lists, such as regular lists, dropdown options, etc.)

[//]: # ()
[//]: # (Note: this also affects **Autocompletion choices**.)

[//]: # ()
[//]: # ({% include figure.html content="/screens/highestHeight.png" caption="Custom List Item Size: 48" %})

[//]: # ()
[//]: # ({% include figure.html content="/screens/paddedComplete.png" caption="Large Autocomplete" %})

[//]: # ()
[//]: # ({% include figure.html content="/screens/compactComplete.png" caption="Compact Autocomplete" %})

[//]: # ()
[//]: # (----)

[//]: # (### Custom fields size)

[//]: # ()
[//]: # (This setting allows you to customize the size of the fields, such as text fields, password fields, etc.)

[//]: # ()
[//]: # (This option concerns **Text Fields**, **Password Fields**, **Number Fields** and **Search Fields**,)

[//]: # (as well as **Search Everywhere**, **Find In Files**, **New File**, etc.)

[//]: # ()
[//]: # ({% include figure.html content="/screens/compactField.png" caption="Compact Fields" %})

[//]: # ()
[//]: # ({% include figure.html content="/screens/paddedField.png" caption="Padded Fields" %})

[//]: # ()
[//]: # ({% include figure.html content="/screens/compactSearch.png" caption="Compact Search Everywhere" %})

[//]: # ()
[//]: # ({% include figure.html content="/screens/paddedSearch.png" caption="Padded Search Everywhere" %})

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (### Notes)

[//]: # ()
[//]: # (- Because the IDE is developed with compact table cells in mind, using "padded table cells" may result of display issues in some components.)

[//]: # (  One example is the *Python DataView* &#40;<https://github.com/ChrisRM/material-theme-jetbrains/issues/485>&#41;.)

[//]: # (  If you are using such features a lot, just enable the "Compact Table Cells" option to solve that problem.)