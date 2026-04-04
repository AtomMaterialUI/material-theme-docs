---
layout: docs
title: Custom Themes
description: Learn how to create and manage your own custom themes.
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/project-title-bar-settings'
  title: Project Title Bar Settings
next:
  url: '/docs/configuration/language-additions'
  title: Recommended plugins
---

Create your own custom themes.
{:class='title'}

{% include carbonads.html %}

This feature is exclusive to premium users. You can purchase a premium license for the plugin or a dedicated license for this feature via the following link: [Material Theme Custom Theme](https://plugins.jetbrains.com/plugin/19308-material-theme-ui-custom-theme/edit).
{:class='card-panel warn'}

## Introduction

Material Themes utilize a clever theme system that exposes only a select few properties to modify. This simplifies the customization process compared to JetBrains' native themes. Theme authors don't need to know every possible UI property; instead, they only need to define these core properties to create a theme supported by the plugin.

Through this system, the plugin allows users to create their own **custom themes** by modifying these properties directly through the settings.

Furthermore, users can export and share their custom themes with others who are also using the plugin.

## Configuration

### Settings

The **Custom Theme Settings** provide a simple way to create your own custom theme. You can start from scratch, use a predefined theme as a base, or import an existing custom theme.

{% include figure.html content="/screens/custom/customThemeSettings.png" caption="Custom Theme Settings" %}

### Color Scheme

Since custom themes don't have an intrinsic color scheme, you must specify which one to associate with your theme. You can attach any color scheme, including default ones, those from other themes, or your own custom schemes.

{% include figure.html content="/screens/custom/colorSchemeSelect.png" caption="Assign Color Scheme" %}

**Note**: Since the plugin modifies color schemes, modified schemes may appear in the list with the prefix `@user_`. 
{:class='card-panel'}

### Theme Properties

You can preview and edit your theme colors via an easy-to-use grid that displays both the color and its hex value.

Clicking a color opens a color picker for selection.
Click **Apply** to preview how the theme looks within the IDE.

{% include figure.html content="/screens/custom/colorPicker.png" caption="Pick a color" %}

#### Property Descriptions

- **Background color**: The primary background color for IDE panels, application windows, dialogs, etc.
- **Foreground color**: The primary text and icon color used throughout the IDE.
- **Secondary text color**: The foreground color for supplementary controls, such as tree items, button text, shortcuts, and explanation text.
- **Selection background color**: The background color for selected items in menus and lists.
- **Selection foreground color**: The text color for selected items in menus and lists.
- **Button color**: The background color for buttons and similar components.
- **Secondary background color**: A secondary color used for lists, active tool window headers, autocomplete popups, etc.
- **Disabled color**: The color used for disabled items, such as menu items and buttons.
- **Contrast color**: A ternary color used to provide contrast against the primary background, typically in trees, text fields, and tab panes.
- **Table Selected text color**: A quaternary background color used in specific components like tables.
- **Separators color**: The color for borders and separators in menu bars, buttons, tabbed panes, etc.
- **Highlight color**: The color for highlighted components, such as primary buttons.
- **Tree selection color**: The background color for selected items in trees and autocompletion lists.
- **Notifications color**: The background color for notification popups.
- **Accent color**: The primary accent color for the theme.
- **Excluded files' color**: The color for excluded files in the Project View.
- **Second Accent color**: The secondary accent color used in [Accent Mode](/docs/configuration/accent-mode).

Once defined, your theme will appear in the theme list as **Custom Theme**.

----

## Importing and Exporting Custom Themes

The settings page includes buttons for loading colors from predefined themes, as well as importing and exporting custom themes.

{% include figure.html content="/screens/custom/loadFrom.png" caption="Load colors from Predefined Themes" %}

- **Import Theme**: Select a previously saved custom theme `xml` file to load its colors.
- **Export Theme**: Opens a popup where you can specify the theme's ID, name, and darkness setting.

{% include figure.html content="/screens/custom/export.png" caption="Export Theme" %}

After entering these details, you'll be prompted to choose a save location. You can then share the resulting file with other users.

----

## Light Custom Theme

Custom Themes are "darkness agnostic," meaning they are neither inherently dark nor light; the user determines the color palette. However, by default, the IDE treats them as *Dark Themes* regardless of the colors chosen.

To create a true *Light Theme*, use the **Light Custom Theme** settings. This interface is identical to the standard **Custom Theme Settings**, but it generates a theme recognized by the IDE as a light theme.

Your created theme will appear in the theme list as **Light Custom Theme**.

{% include figure.html content="/screens/custom/lightCustomTheme.png" caption="Light Custom Theme" %}

----

### Detailed Color Reference

The following is a non-exhaustive reference of theme properties and the components they affect. Note that this list may evolve as new IDE components are added or updated.

##### Background color

**Property**: `material.background`

The primary background color for IDE panels, popups, and controls.

##### Foreground color

**Property**: `material.foreground`

The primary foreground (text) color for IDE panels, popups, and controls.

##### Secondary text color

**Property**: `material.primaryColor`

A secondary color used for:
- Button text
- Menu and menu item shortcut text
- Text field borders
- Disabled text in dropdowns
- Tree items
- Tag names in the VCS Log
- Supplementary help text

##### Selection background color

**Property**: `material.selectionBackground`

The background color for selected elements:
- Selected menu items
- Selected list items and table cells
- Active tabs
- Autocomplete active item
- Selected tab in `TabbedPanes`
- Selected text in documentation panels

##### Selection foreground color

**Property**: `material.selectionForeground`

The text color for selected elements:
- Selected menu items
- Selected list items and table cells
- Active tabs
- Autocomplete active item
- Selected text in text fields
- Selected text in documentation panels
- Focused button text
- Dropdown selected item text
- Selected item in trees

##### Buttons color

**Property**: `material.button`

Affects buttons and related elements:
- Button background color
- Merge commit text
- Section headers
- "More" buttons

##### Secondary background color

**Property**: `material.second`

A secondary color used for contrast:
- List background color
- Active Tool Window header color
- Memory indicator (unused portion)
- Progress bar track color
- Autocomplete popup background
- Parameter info popup background
- VCS Log's current branch background

##### Disabled color

**Property**: `material.disabled`

The color used for disabled components:
- Disabled menu and menu item text
- Disabled text and password fields
- Disabled buttons and checkboxes
- Disabled tabs
- Disabled items in Parameter Info

##### Contrast color

**Property**: `material.contrast`

The color used when **Contrast Mode** is enabled:
- Contrast-affected controls (Trees, Text fields, Tabs, etc.)
- Odd rows in striped tables
- Documentation panes
- Tool Window headers (selected tab)
- Selected tab in `Tabbed Panes`
- Search Everywhere search field
- Selected Tool Window
- Editor background (when no files are open)

##### Selected text color

**Property**: `material.active`

An additional color for active elements or selected text:
- Selected table cells
- Selected text in input fields and documentation panes
- Active items in dropdowns
- Primary and hovered buttons
- Hovered tool window buttons
- Active tab in `Tabbed Panes`

##### Border Color

**Property**: `material.border`

The color for borders and separators:
- Menu bar border
- Disabled checkbox borders
- Button borders (non-material buttons)
- Tabbed Pane borders
- Editor separators in Split Mode
- Menu separators
- Help tooltip borders
- Welcome screen separators
- List separators

##### Highlight color

**Property**: `material.highlight`

Used for highlighting specific UI elements:
- Text field and dropdown borders
- Checkbox markers in disabled checkboxes
- Memory indicator (used portion)
- Unfocused items in certain lists
- Hovered tabs in `Tabbed Panes`
- Selected tab in Search Everywhere
- Active debugger tab

##### Tree selection color

**Property**: `material.tree`

The color used specifically for selected items in trees and autocompletion lists.

##### Notifications color

**Property**: `material.notifications`

The background color for notification popups.

##### Accent Color

**Property**: `material.accent`

The color that replaces the default Accent Color if the [Override Accent color from theme](/docs/configuration/main-settings#override-accent-color) setting is enabled.

##### Excluded files' color

**Property**: `material.excluded`

The color used for the "Theme" option in [File Colors Settings](/docs/configuration/excluded-files-colors#excluded-files-theme-color).

##### Second Accent Color

**Property**: `material.accent2`

Supplements the primary Accent Color in [Accent Mode](/docs/configuration/accent-mode) (e.g., Active Tab highlight, links in notifications).

-----

## Frequently Asked Questions

**Q: Can I use more than one custom theme?**

**A:** Currently, you can only define one "Custom Theme" and one "Light Custom Theme" at a time. However, you can save your settings as an XML file (via Export) to swap between different palettes or share your creations with others.

**Q: Where are my custom theme settings stored?**

**A:** Custom colors are stored in your IDE's [config directory](https://intellij-support.jetbrains.com/hc/en-us/articles/206544519-Directories-used-by-the-IDE-to-store-settings-caches-plugins-and-logs) within a file named `material_custom_theme.xml`.

**Q: My custom colors don't look as cohesive as the default themes.**

**A:** Creating a well-balanced theme is challenging. The default Material themes are the result of extensive refinement. We recommend using established palettes from Sublime, Atom, or VS Code as inspiration when starting.

**Q: I need more fine-grained control than these settings provide.**

**A:** These settings are designed for quick color palette customization. For more advanced needs (e.g., different colors for checkboxes vs. radio buttons), consider using the [JetBrains Theme API](http://www.jetbrains.org/intellij/sdk/docs/reference_guide/ui_themes/themes.html) or creating a **new plugin** based on the Material Theme SDK. Examples include the [Doki Doki Literature Club Theme](https://github.com/cyclic-reference/ddlc-jetbrains-theme) and the [Night Owl Theme](https://github.com/xdrop/night-owl-jetbrains).

**Q: My editor color scheme resets every time I restart the IDE.**

**A:** If you are using a custom theme, ensure you have correctly associated your preferred color scheme in the [Color Scheme settings](/docs/configuration/custom-themes#color-scheme) of the Custom Theme panel.