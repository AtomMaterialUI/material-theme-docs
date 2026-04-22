---
layout: docs
title: What's new?
group: whatsnew
toc: true
---

----

## What's New in Material Theme UI v11.1.0

Following a comprehensive review of the plugin's codebase, this new version addresses most issues reported in recent releases and introduces several refinements.

Additionally, the documentation has been thoroughly updated. We've replaced outdated screenshots, added guides for new features, and removed deprecated sections to better reflect the current state of the plugin.

We invite you to explore the updates and share your feedback or suggestions for further improvements!

### Changelog

## 11.1.0

### Features

- **New Setting: Tab Glow (Premium)**: Adds a subtle glow effect beneath active tabs.
- **Material Theme UI Toolbar Reorganization**:
  - Actions are now logically categorized (e.g., *Tabs*, *Features*...).
  - Added more setting toggles for quicker access.
  - Added toggles to quickly switch the current **Material Style**.

### Fixes

- Fixed **Adaptive Theme** not updating correctly upon color scheme changes.
- Fixed an issue where **StatusBar Widgets** would not reappear after removal until a restart.
- Corrected spacing in the **New File** popup when using the M3 Style.
- Fixed a bug where outlines were not always applied to text fields.

### Other

- Removed Legacy Widget.
- Expanded translations.
- Updated dependencies.

## 11.0.0-beta.5

### Fixes

- Fixed a bug causing Font Scale to reset to maximum value.
- Removed deprecated setting for Islands Layout since it is no longer possible to turn off Islands.
- Renamed **Project Frame** to **Project Banner**.
- Fixed **Show Project Banner Text** setting not working.
- Corrected screenshot URL in Features Settings.
- Fixed missing text in **Language Additions** settings.
- Added a new **Full Window Gradient** setting in **Project Title Bar** settings.

## 11.0.0-beta.4

### Fixes

- Reverted Tab Height refactor to resolve sizing issues.
- Removed unnecessary Read Action in `MTListUI`.

## 11.0.0-beta.3

### Fixes

- Restored the **Floating Action Button** setting to its enabled state.

## 11.0.0-beta.2

### Fixes

- Made FAB Actions Editor context-aware.
- Improved UI component scaling at higher zoom levels.
- Reduced internal API usage.

## 11.0.0-beta.1

### Fixes

- Reduced internal API usage.
- Improved **Borderless** mode within the Islands Layout.

----

## What's New in Material Theme UI v11.0.0

New year, new look! The **Material Theme UI** plugin continues to evolve, bringing a modernized experience to your IDE. This version introduces the **Material 3** style, offering a fresh, contemporary aesthetic to replace the classic **Material 2** look. We’ve also added support for the sleek **Google Sans** font (available separately) to further refine your workspace.
{:class='title'}

### Material 3 Style

{% include figure.html content="/screens/ui/material3.png" caption="Refined UI: Buttons, dropdowns, sliders, and search boxes." %}

{% include figure.html content="/screens/ui/material3_2.png" caption="Updated Toggles" %}

{% include figure.html content="/screens/ui/material3_3.png" caption="Modern Option Buttons" %}

Want a preview? Explore the new **UI DSL Showcase** page in your settings.

For fans of the classics: we’ve completely overhauled the original **Material Design** (*Material 1*). No longer just a legacy style, it is now a fully-featured customization option for those who prefer the traditional Material look.

----

Beyond the visual refresh, we’ve introduced several powerful features to enhance your workflow:

## Customizable Floating Action Button (FAB)

Access your most-used actions instantly with the new Floating Action Button. Position it anywhere in your IDE window and customize its triggered actions via the **Menus and Toolbars** settings.

{% include figure.html content="/screens/features/fab.png" caption="The new Floating Action Button." %}

## Theme Ignores

Sometimes external themes don’t align perfectly with your preferences. With the new **Theme Ignores** page, you can choose to bypass specific theme properties in favor of native IDE defaults, helping you resolve color clashes and UI inconsistencies.

{% include figure.html content="/screens/settingsv3/themeIgnores.png" caption="Fine-tune your theme overrides." %}

## Preview Theme Colors

Gain full transparency into your active theme. This new tool provides a comprehensive table of all theme properties and their exact color values, eliminating the guesswork from customization.

{% include figure.html content="/screens/settingsv3/previewThemeColors.png" caption="Inspect your theme's color palette." %}

## Refined Spacing Settings

Precision matters. We’ve expanded the **Spacing Settings** to grant you granular control over the size and padding of UI components, allowing you to tailor your IDE to your exact specifications.

{% include figure.html content="/screens/settingsv3/spacingNew.png" caption="Pixel-perfect layout control." %}

## Settings Overhaul

We’ve refined every settings page to improve the user experience. This includes UX optimizations, fixing UI bugs (such as broken images or inconsistent disabled states), and overall polish to make navigation more intuitive.

### Full Changelog

### Features

- **Contrast Mode by Default**: Enabled by default to provide a sharper, more defined UI out of the box.
- **Material 3 Integration**: Material 3 is now the default style, succeeding Material 2.
    - **Material 1** has been revitalized as a primary customization option.
- **Floating Action Button (FAB)**: A customizable, draggable shortcut hub that persists across sessions.
- **Theme Ignores**: A dedicated interface for managing and overriding external theme properties.
- **UI Customization Enhancements**:
    - New settings for **Custom Button Radius** and component borders.
    - Improved **Rounded Tabs** with expanded customization options.
    - Official support for the **Google Sans** font.
- **Enhanced Spacing**: More granular options for fine-tuning the IDE layout.
- **Database Integration**: New settings for database tables and improved plugin synergy.
- **Live Color Preview**: A dedicated page to visualize every color property in your current theme.
- **UI DSL Showcase**: A convenient way to preview various UI components and styles.

### Fixes

- Comprehensive cleanup and bug fixes across all settings pages.
- Improved Contrast Mode stability, particularly with Islands and High Contrast themes.
- Enhanced consistency and aesthetics for Accent Mode.
- Resolved an issue preventing the plugin from loading for users on the free plan.
- Optimized memory management during theme switching to prevent leaks.
- Fixed opacity issues for inactive settings in the Islands layout.

### Other

- Updated Kotlin and other core dependencies for improved performance and stability.
- Expanded and updated translations.
- Refreshed UI properties and color schemes.

**Note**: This version is actively being refined. If you encounter any bugs or have feedback, please report them to help us improve.

Happy coding!