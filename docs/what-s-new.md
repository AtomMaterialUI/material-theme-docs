---
layout: docs
title: What's new?
group: whatsnew
toc: true
---

----

## What's new in Material Theme UI v11.0.0

New year, new version! As a tradition, the **Material Theme UI plugin** continues to evolve and improve, providing more features and upgrades to your favorite IDEs. In this release, a new look and feel has been added, **Material 3**, replacing the now stable but dated **Material Theme** (also referred to as *Material 2*), and integrating the fancy **Google Sans** Font (to be downloaded separately) for a more modern look.
{:class='title'}

### Material 3 Style

{% include figure.html content="/screens/ui/material3.png" caption="New UI Components: Button, Dropdowns, Sliders and Search Boxes" %}

{% include figure.html content="/screens/ui/material3_2.png" caption="New UI Components: Toggles" %}

{% include figure.html content="/screens/ui/material3_3.png" caption="New UI Components: Option Buttons" %}

You can see a preview in the **UI Dsl Showcase** new Setitngs page.

In addition, the **Material Design** (_Material 1_) has been reworked as well, going from a "deprecated style" to a full fledged customization option.

----

On top of that, new features made their first appearance in the plugin:

## Customizable Floating Action Button (FAB):

Adds a floating button to the IDE window that you can use for quick access to actions of your choice (configurable via the *Menus and Toolbars* settings page).

{% include figure.html content="/screens/fab.png" caption="Floating Action Button" %}

## Theme Ignores

A new settings page that provide the ability to ignore certain theme properties of _External Themes_ and use the native ones instead (Useful, for instance, when external themes provide colors not in coordinance with the rest of the IDE, or when they don't provide ones).

{% include figure.html content="/screens/settingsv3/themeIgnores.png" caption="Theme Ignores" %}

## Preview Theme Colors 

Shows a nice table showcasing the current theme's properties and their colors.

{% include figure.html content="/screens/settingsv3/previewThemeColors.png" caption="Preview Theme Colors" %}

## Refined Spacing Settings 

Gives more customization to the **Spacing Settings**, allowing you to fine-tune the different sizes of the components.

{% include figure.html content="/screens/settingsv3/spacingNew.png" caption="New Spacing Options" %}

## Settings Overhaul

In addition, all the settings pages have been reviewed, fixing many UX and UI issues such as elements being disabled, or images not loading, etc.

----

**Full Changelog**:

### Features

- **Default Contrast Mode**: The **Contrast Mode** is now enabled by default to provide a generally better looking experience.
- **Material 3 Style**: The **Material 3 Style** is now available by default, replacing the now outdated **Material Theme** (_Material 2_)
  Style.
    - In addition, the **Material Design** (_Material 1_) has been reworked, to provide more options to your IDE's look and feel.
- **Floating Action Button (FAB)**: Introduced FAB support with customizable action groups, drag-and-drop, and position persistence.
- **Theme Ignores Configuration**: New interface for managing and configuring native theme ignores.
- **Enhanced UI Customization**:
    - New settings for **Custom Button Radius** and personalization of UI component borders.
    - Improved **Rounded Tabs** with additional customization options and controls.
    - Support for **Google Sans** font across the UI.
- **Spacing Settings Refinements**: Adds enhanced customization options for spacing settings.
- **Database Integration**: Added support for database table settings and plugin integration.
- **Current Look and Feel Properties**: New Settings page to visualize the current theme's colors.
- **UI DSL showcase**: New Settings page to preview various UI components.

### Fixes

- Major overhaul of the settings in order to fix many bugs within various settings pages.
- Improve the Contrast Mode layout and integration with the Islands and High Contrast.
- Improve Accent Mode to be more consistent and visually appealing.
- Fixed the issue where the plugin wouldn't load on the free plan.
- Improved resource disposal in the Change LaF Animator to prevent memory leaks.
- Corrected opacity calculations for inactive island settings.

### Other

- Updated Kotlin and dependency versions for better performance and stability.
- Translations updated
- Updated UI Properties and Color Schemes.