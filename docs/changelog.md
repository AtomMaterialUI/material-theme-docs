---
layout: docs
title: Changelog
group: changelog
comments: true

previous:
  url: '/docs/analytics'
  title: Analytics

next:
  url: '/docs/support-us'
  title: Support Us
---

# Changelog

## 13.0.0

### Features

- **New Feature: Stylish Regions**: Make Folded Regions stand out.
    - Three styles: *Wavy*, *Line* and *Stripe*
    - Custom Separator Color (PREMIUM)
    - Custom Text Color and Font (PREMIUM)
    - Generate background color from the region description (PREMIUM)
- **Peek**:
    - New Option: **Replace Ctrl-click**. When enabled, this will replace the default `Ctrl+Click/Cmd+Click` behavior by the *Inline
      Peek* feature.
    - Prevent scrolling the parent container when scrolling on a peek panel
    - Set default width to the full width
    - Make the Peek Panel navigatable by `F4`
    - Add the `ServiceDimensionKey` to make it keep the same size when switching between peek panels.
- **New Feature: Window Coloring**: Color the IDE window frame per project.
    - Split out the *Window Coloring* settings from the *Project Banner* settings.
    - You can now select between **Solid Color** or **Gradient Fill**
    - For Gradients:
        - You can choose between *Linear* and *Radial* gradient types
        - You can select the anchor point for radial gradients (top left, top center, top right, etc)
        - You can customize the size and opacity
    - Override and regenerate the frame color
    - Customize settings per-project
    - **Regenerate window color on theme change**: Trigger a new Gradient/Solid color when the theme changes.
- **New Color Scheme Overrides**:
    - **Search Results**: Override the search results highlight color with the accent color.
    - **Identifier Under Caret**: Override the identifier under caret color with the accent color.
    - **Matched Brace**: Override the matched brace color with the accent color.
- **New Feature: Outline Notifications** (UI Components): Give notifications an outline accent-colored look.

### Fixes

- **Peek**: Change the shortcut to `alt+middle` click
- Fix fallback font when **Google Sans** is not installed
- Fix the `registerActions` startup error with Actions
- Fix **Diff Colors Opacity** not getting persisted

### Other

- Mass refactor of the whole action system: now all actions are dynamic and taken from the `DynamicActionRegistrar`
- Mass refactor of the Configurables and States to reduce boilerplate code.
- Mass refactor of the `ThemeManager` into smaller services, each grouped in their relevant modules
- Removal of the `OptionContributors`

## 12.1.0

### Features

- **Peek: Custom Width**: Added a new setting to customize the width of the Peek popup.
- **Peek**: Change the background color and the border color of the Peek popup.
- **Peek**: Change the default number of lines to `16` and the default shortcut to `Alt+Click` and `Ctrl+Alt+Click`.

### Fixes

- Fix the issue (hopefully) with the **Random Theme Switcher** happening multiple times out of nowhere.
- Improve the **Omni Theme** colors
- Improve the **Omni Theme** color scheme colors
- Add *Overlays* support to the new *Non-Modal Settings*

----

## 12.0.0

### Features

- **New Themes**: Added **Cobalt2**, **Prism**, **Prism Light**, **Horizon**, **Horizon Bright**, and **Omni** themes to the list of the
  predefined themes.
- **New Accents**: Added more predefined accents to the collection
- **New Accent Color Popup**: Replaced the long list of actions for switching accents with a modernized popup for selecting accent colors
  with dynamic previews.
- **Peek**:
    - Introduced **Peek (Popup)** and **Peek (Inline)**: Quick code preview and editing capabilities similar to VSCode's Peek feature.
    - Added configurable settings for Peek, such as **padding**, **header color**, etc..
- **Color Scheme Overrides**: New settings page for overriding color scheme colors on the fly, for all themes.
    - Migrated the **Automatically reset color scheme** and **Global Default Font** to this new page.
    - **Diff Colors Opacity**: Adjust the opacity of diff highlights in the editor.
    - **Popups and Notifications**: Override the colors of popups and notifications from the theme.
    - **VCS Gutter Colors**: Override the colors of the VCS gutter indicators with the Material ones.
    - **Override Accent**: Align certain color scheme properties with the current **Accent Color**.
- **Theme Selector Redone**: Replaced static theme preview screenshots with dynamic SVG previews for better consistency across all themes.
- New modernized **Plugin Logo**.

### Fixes

- Adjust the project banner's height to prevent it being cut off.
- Improve window type checks in dialog utilities for overlays in the new 2026.2 build.
- Fixed the cropping issue in the NuGet Package Manager

### Other

- **Round Notifications** are now enabled by default.
- Updated **Gradle IntelliJ Plugin** and **Java version**.
- Optimized theme layout spacing and chunking logic.

## 11.1.0

### Features

- New Setting: **Tab Glow** (premium): adds a glow effect under the tabs.
- Reorganization of the **Material Theme UI Toolbar**:
    - Categorize actions under their own section (_Tabs_, _Features_, etc)
    - Adding most of the settings toggles
    - Adding toggles to switch the current **Material Style**

### Fixes

- Fix **Adaptive Theme** not adapting upon color scheme changes.
- Fix issue where the _StatusBar Widgets_ are not added back upon removal until the next reloading.
- Fix wrong spacing in the _New File_ popup in M3 Style
- Fix outline not always added to text fields

### Other

- Remove Legacy Widget
- More Translations
- Update dependencies

## 11.0.0-beta.5

### Fixes

- Fixes the issue with the Font Scale booming up to MaxValue
- Removes deprecated setting for Islands Layout
- Changed the text from **Project Frame** to **Project Banner**
- Fixes the Project Banner's **Show Project Banner Text** not working
- Fixes wrong screenshot url in Features Settings
- Fixes empty text in the **Language Additions** settings
- Add a new setting for the **Full Window Gradient** in **Project Title Bar** settings.

## 11.0.0-beta.4

### Fixes

- Reverted the Tab Height Refactor as it was causing the tabs to be too big
- Remove Read Action in `MTListUI`

## 11.0.0-beta.3

### Fixes

- Removed the disabled state on the **Floating Action Button** setting.

## 11.0.0-beta.2

### Fixes

- Make FAB Actions Editor context-aware.
- Improve UI components sizing in larger Zoom Scales.
- Remove some API Internal uses

## 11.0.0-beta.1

### Fixes

- Remove some API Internal uses
- Improve **Borderless** mode in the Islands Layout

## 11.0.0

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

## 10.10.0

### Features

- New Setting: **Rounded Tabs Padding** and **Rounded Tabs Radius** gives you more personalization to the Rounded Tabs feature.

### Fixes

- Restore disabled screenshots after introducing a new images domain.
- Fix issue with tool windows opacity not being applied correctly.
