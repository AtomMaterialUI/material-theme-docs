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

These settings give you precise control over the spacing and sizing of various IDE components, allowing you to tailor the overall look and feel of your development environment to your preference.
{:class='title'}

{% include carbonads.html %}

----

## Spacing Settings

You can access the **Spacing** menu under the **Material Theme** settings group. Since version 11.0, the plugin has shifted from a simple "Compact vs. Regular" mode to a more granular system where you can control the size of each component individually using intuitive sliders.

{% include figure.html content="/screens/settingsv3/spacing.png" caption="Spacing Settings Interface" %}

----

### Main Toolbar

This setting allows you to adjust the height of the **Main Toolbar** for both regular and compact modes. This is especially useful for high-resolution displays where you might want a more spacious or a more compact layout.

- **Header Size**: Adjusts the height of the toolbar in standard mode.
- **Compact Mode Header Size**: Adjusts the height when the IDE is set to [Compact Mode](https://www.jetbrains.com/help/idea/sharing-your-ide-settings.html#compact-mode).

{% include figure.html content="/screens/spacing/smallHeader.png" caption="Small Header" %}

{% include figure.html content="/screens/spacing/largeHeader.png" caption="Large Header" %}

----

### Custom Status Bar Size

The IDE's **Status Bar** has been redesigned to align with Material Design principles, featuring increased padding and a cleaner look. Use this slider to find the perfect balance between information density and visual breathing room.

{% include figure.html content="/screens/spacing/smallStatus.png" caption="Small Status Bar" %}

{% include figure.html content="/screens/spacing/largeStatus.png" caption="Large Status Bar" %}

----
### Custom Table Cells Size

This setting controls the vertical padding of **Table Cells** and **Table Headers** across the IDE. This is particularly helpful when working with long lists or complex configurations where you want to minimize vertical scrolling.

**Note**: This setting does not affect database tables.

{% include figure.html content="/screens/small/defaultCells.png" caption="Default Table Cells" %}

{% include figure.html content="/screens/small/smallCells.png" caption="Small Table Cells" %}

{% include figure.html content="/screens/small/largeCells.png" caption="Large Table Cells" %}

### Modify Database Tables

The previous setting only applies to tables within the IDE interface. However, for tables within the Editor — such as **Database Views** — a separate IDE configuration is typically used (found under `Settings -> Appearance -> Data Editor and Viewer`).

By enabling this option, the plugin will automatically apply your custom table size settings to the Data Editor as well, ensuring a consistent look across the entire environment.

{% include figure.html content="/screens/spacing/databaseViewsSmall.png" caption="Data Views Small Cells" %}

{% include figure.html content="/screens/spacing/databaseViewsLarge.png" caption="Data Views Large Cells" %}

**Note**: This option directly overrides the values in `Settings -> Appearance -> Data Editor and Viewer`. Be aware that these changes are permanent and cannot be automatically reverted to their previous state once applied.
{:class='card-panel warn'}

----
### Custom Dropdowns Size

This setting allows you to customize the size of **Dropdown Menus** (Comboboxes) used throughout the UI, such as the branch selector or run configurations.

{% include figure.html content="/screens/spacing/defaultDropdowns.png" caption="Default Dropdowns" %}

{% include figure.html content="/screens/spacing/smallDropdowns.png" caption="Small Dropdowns" %}

{% include figure.html content="/screens/spacing/largeDropdowns.png" caption="Large Dropdowns" %}

----

### Custom Menus Size

Customize the padding and overall size of the IDE's **Menus**. This affects both the top-level application menus and context (right-click) menus.

{% include figure.html content="/screens/spacing/smallMenus.png" caption="Small Menus" %}

{% include figure.html content="/screens/spacing/largeMenus.png" caption="Large Menus" %}

----

### Custom List Items Height

This slider controls the height of individual items in **Lists**, such as the "Find in Files" results or the "Search Everywhere" list.

**Note**: This also affects **Autocompletion choices** and **Menu Items**.
{:class='card-panel warn'}

{% include figure.html content="/screens/spacing/smallLists.png" caption="Small List Items" %}

{% include figure.html content="/screens/spacing/largeLists.png" caption="Large List Items" %}

{% include figure.html content="/screens/spacing/smallComplete.png" caption="Compact Autocomplete" %}

{% include figure.html content="/screens/spacing/largeComplete.png" caption="Large Autocomplete" %}

----

### Custom Input Fields Size

Finally, this setting allows you to adjust the size of **Input Fields** used in the UI, including text fields, password fields, number fields, and search fields.

{% include figure.html content="/screens/spacing/smallFields.png" caption="Small Fields" %}

{% include figure.html content="/screens/spacing/largeFields.png" caption="Large Fields" %}