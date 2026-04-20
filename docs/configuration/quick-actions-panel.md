---
layout: docs
title: Quick Actions Panel
description: Shortcuts for customizing the plugin
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/ui-components-settings'
  title: UI Components Settings
next:
  url: '/docs/configuration/status-bar-widgets'
  title: Status Bar Widgets
---

Here you'll find an overview of the options and tools available in the `Quick Actions Panel`.
{:class='title'}

{% include carbonads.html %}

## Quick Actions Panel

The _Quick Actions Panel_ is a convenient menu that provides fast access to the plugin's primary settings and toggles.

You can access this panel from several locations:

- In the main menu under `Tools → Material Theme`.

{% include figure.html content="/screens/other/toolsMenu.png" caption="Tools Menu" %}

- On the far right of the main toolbar.

{% include figure.html content="/screens/other/toolbarMenu.png" caption="Main Toolbar" %}

- Within the `Quick Switch Panel`.

{% include figure.html content="/screens/other/quickswitch.png" caption="Quick Switch" %}

You can also assign custom shortcuts to any of its submenus in `Settings → Appearance & Behavior → Keymap → Material Theme`.

----

## Material Theme Switcher

The _Material Theme Switcher_ allows you to quickly browse and apply different themes.

{% include figure.html content="/screens/other/themeSwitcher.png" caption="Theme Switcher" %}

Themes are categorized by type (Light or Dark). It also includes the [Adaptive Theme](/docs/configuration/adaptive-theme.md), which automatically adjusts based on your current OS color scheme.

-----

## Accent Color Switcher

Much like the theme switcher, this menu displays all available accent colors, allowing for rapid switching.

{% include figure.html content="/screens/other/accentSwitcher.png" caption="Accent Switcher" %}

Additionally, it includes options to inherit the accent color from the current theme and to enable [Accent Mode](/docs/configuration/accent-mode.md).

----

## Contrast Toggles

This submenu includes toggles related to contrast options:
- _Toggle Contrast Mode_ to enable/disable the plugin's contrast mode.
- _Toggle High Contrast_ to enable/disable the plugin's high contrast mode.

----

## Tabs Toggles

This submenu includes various toggles for customizing the appearance and behavior of tabs:

- _Set Recommended Tab Height_: Resets the tab height to the default value (42).
- _Toggle Uppercase Tabs_: Toggles the uppercase tabs style.
- _Toggle Custom Tab Font_: Toggles the tabs custom font.
- _Toggle Tab Separators_: Toggles the visibility of separators between tabs.
- _Toggle Rounded Tabs_: Toggles the Rounded Tabs style.
- _Toggle Bold Active Tab_: Toggles bold text for the active tab.
- _Toggle Tab Shadow_: Toggles the shadow effect beneath the tabs.
- _Toggle Tab Glow_: Toggles the glow effect beneath the tabs.
- _Remove Tab Shadow_: Removes any shadow or glow effect under the tabs.
- _Tab Highlight Position_: Allows you to change the position of the tab highlight.

{% include figure.html content="/screens/other/tabsMenu.png" caption="Tabs Toggles" %}

----

## Spacing Toggles

This submenu includes options for adjusting the spacing of various UI components:

- _Toggle Compact Item Line Height_: Toggles the compact line height for menu items and list items.
- _Toggle Compact Dropdowns_: Toggles the compact size for dropdown components.
- _Toggle Compact Table Cells_: Toggles the compact size for table cells.
- _Toggle Compact Fields_: Toggles the compact size for text fields and other input components.
- _Toggle Compact Menus_: Toggles the compact size for menus.
- _Toggle Compact Status Bar_: Toggles the compact size for the IDE status bar.
- _Toggle Compact List Items_: Toggles the compact size for items in lists.

{% include figure.html content="/screens/other/spacingMenu.png" caption="Spacing Toggles" %}

----

## Trees Toggles

This submenu includes toggles for customizing the appearance and behavior of trees:

- _Toggle Colored Directories_: Toggles the colored directories feature in the project tree.
- _Toggle Custom Tree Font_: Toggles the custom font for the tree components.
- _Toggle Indicator Gradient_: Toggles the gradient effect for tree indicators.
- _Toggle Custom Tree Indent_: Toggles the custom indentation for tree items.
- _Toggle Custom Line Height_: Toggles the custom line height for tree items.
- _Indicator Styles_: Allows you to choose between different styles for tree indicators:
    - _Border_
    - _Sharp_
    - _Dot_
    - _Right Border_
    - _Boxed_
    - _Underline_
    - _None_

{% include figure.html content="/screens/other/treesMenu.png" caption="Trees Toggles" %}

----

## UI Components Toggles

This submenu provides toggles for various UI components and their styles:

- _Toggle Outline Buttons_: Toggles the outline style for buttons.
- _Toggle Round Notifications_: Toggles rounded corners for notification popups.
- _Extra Shadows_: Toggles additional shadows for some components.
- _Toggle Upper Case Buttons_: Toggles uppercase text for buttons.
- _Toggle Inverted Completion Selection_: Inverts the selection color in completion lists.
- _Toggle Custom Search Everywhere_: Toggles the custom Material style for the Search Everywhere dialog.
- _Toggle Borderless_: Toggles borderless style for some components.
- _Toggle Material Spinner_: Toggles the Material-style progress spinner.
- _Toggle Original Square Buttons_: Toggles the original square style for buttons.
- _Material Design Style_: Choose between different Material Design versions:
    - _V1_
    - _V2_
    - _V3_

{% include figure.html content="/screens/other/componentsMenu.png" caption="UI Components Toggles" %}

----

## Features Toggles

This submenu includes toggles for various plugin features:

- _Toggle Custom Font_: Toggles the use of a custom font for the IDE.
- _Toggle Material Wallpapers_: Toggles the Material Wallpapers feature.
- _Toggle Overlays_: Toggles the use of overlays for some components.
- _Toggle More Overlays_: Toggles additional overlays.
- _Animate Tool Windows_: Toggles animations when opening/closing tool windows.
- _Toggle Auto Reset Color Scheme_: Toggles automatic resetting of the color scheme when changing themes.
- _Toggle Centered Editor_: Toggles the centered editor mode.
- _Toggle Editor Global Font_: Toggles the use of a global font for the editor.
- _Toggle Floating Action Button_: Toggles the visibility of the Floating Action Button.
- _Remove Material Wallpaper_: Clears the current IDE background image.
- _Set UI Font to Google Sans_: Sets the IDE UI font to Google Sans.
- _Reset Color Scheme_: Resets the current color scheme to its default values.
- _Clean Overlays_: Removes all active overlays.
- _Apply Custom UI Font_: Applies the configured custom UI font.

{% include figure.html content="/screens/other/featuresMenu.png" caption="Features Toggles" %}

----

## Project Banner Toggles

This submenu allows you to customize the Project Banner feature:

- _Toggle Project Banner_: Toggles the visibility of the project banner.
- _Colorize Title Bar_: Toggles title bar colorization based on the project.
- _Colorize Left Tool Window Stripe_: Toggles colorization of the left tool window stripe.
- _Colorize Right Tool Window Stripe_: Toggles colorization of the right tool window stripe.
- _Colorize Status Bar_: Toggles colorization of the status bar.
- _Toggle Show Project Icon_: Toggles the visibility of the project icon in the banner.
- _Toggle Show Project Name_: Toggles the visibility of the project name in the banner.

{% include figure.html content="/screens/other/bannerMenu.png" caption="Project Banner Toggles" %}

----

## Islands Toggles

This submenu includes toggles for the "Islands" UI style:

- _Toggle Islands Background_: Toggles the isolated background style for certain components.
- _Toggle Islands Contrast_: Toggles contrast for the Islands style.
- _Toggle Islands Border_: Toggles borders for the Islands style.

{% include figure.html content="/screens/other/islandsMenu.png" caption="Islands Toggles" %}

----

## Theme Randomizer

This submenu provides options for the Theme Randomizer feature:

- _Toggle Theme Randomizer_: Enables or disables the theme randomizer.
- _Next Favorite Theme_: Switches to the next theme in your favorites list.
- _Previous Favorite Theme_: Switches to the previous theme in your favorites list.

{% include figure.html content="/screens/other/randomizerMenu.png" caption="Theme Randomizer" %}

----

## Language Additions

This submenu includes toggles for language additions:

- _Toggle Language Additions_: Enables or disables all language-specific additions.
- _Toggle Advanced Settings_: Toggles advanced language settings.
- _Specific Languages_: Allows you to toggle additions for specific languages:
    - _Java_
    - _Kotlin_
    - _JavaScript_
    - _TypeScript_
    - _PHP_
    - _Ruby_
    - _Python_
    - _Go_
    - _Rust_

{% include figure.html content="/screens/other/langagesMenu.png" caption="Language Additions" %}

----

## Other Toggles

This submenu includes miscellaneous options and tools:

- _Material Theme Wizard_: Opens the Material Theme setup wizard.
- _Install Atom Material Icons_: Provides a link to install the Atom Material Icons plugin.
- _Activate License_: Opens the license activation dialog.
- _Toggle Show Wizard on Welcome_: Toggles whether to show the wizard on the welcome screen.
- _Toggle Show What's New_: Toggles whether to show the "What's New" dialog after updates.
- _Undock Tool Windows_: Undocks all tool windows.
- _Dock Tool Windows_: Docks all tool windows.

{% include figure.html content="/screens/other/otherMenu.png" caption="Other Toggles" %}