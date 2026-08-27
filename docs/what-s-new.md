---
layout: docs
title: What's new?
group: whatsnew
toc: true
---

----

## What's New in Material Theme UI v13.0.0

Even though version 12 was deployed not long ago, this new version brings a lot of new features and refactorings, which is a pretty big change.

Between **Color Scheme Overrides**, **Peek**, **Window Coloring**, **Stylish Regions** and other new settings, this version changes the underlying architecture
of the **Actions System**, **Analytics**, **Accent Colors**, **Project Banner**, just to name a few.

### Stylish Regions

Folded regions can now become visual landmarks instead of plain folded blocks. **Stylish Regions** redesigns the appearance of folded regions, 
making them more visually distinct and easier to identify. 

You can choose from a variety of styles to suit your preferences, including:

- **Wavy**: A soft, undulating separator, reminiscent of what you can already experience in diff windows.
- **Line**: A clean horizontal rule that keeps boundaries subtle and precise.
- **Stripe**: A bold, high-contrast separator that makes regions easy to spot while scrolling.

<div class="masonry" markdown="0">
{% include figure.html content="/screens/regions/wavy.png" caption="Wavy Separator" %}
{% include figure.html content="/screens/regions/line.png" caption="Line Separator" %}
{% include figure.html content="/screens/regions/stripe.png" caption="Stripe Separator" %}
</div>

The **Advanced** plan unlocks deeper customization, including custom separator and title colors, font family and size, and title block
positioning. You can also generate a background color automatically from the region description. This gives regions with the same name a
consistent color across files, making familiar groups such as *Constants*, *Helpers*, or *API Calls* instantly recognizable.

You can configure these options in `Settings → Appearance → Material Theme UI → Regions`. The basic enable/disable option remains free for
everyone, so you can try the default Wavy style before enabling the full set of customization options.

----

### Window Coloring and Gradients

The former **Project Banner** window-coloring options are now available in their own settings page. **Window Coloring** applies a distinctive
color to the IDE frame for each project, making it much easier to identify the right window when several projects are open. Colors can be
generated consistently from a project name, overridden manually, or regenerated when you want a different visual identity.

Alongside the existing **Solid Fill**, version 13.0.0 introduces **Gradient Fill** for a more polished transition between the project color
and the theme's panel color:

- **Linear** gradients transition along a configurable angle, allowing horizontal, vertical, or diagonal color flows.
- **Radial** gradients radiate from a configurable anchor point. You can place the anchor at any of nine positions, from top-left to
  bottom-right, to create anything from a corner glow to a centered spotlight.
- **Gradient size and opacity** let you control how strongly the project color appears and how quickly it fades into the surrounding frame.

<div class="masonry" markdown="0">
{% include figure.html content="/screens/windows/gradient1.png" caption="Window Coloring" %}
{% include figure.html content="/screens/windows/gradient2.png" caption="Gradient Fill" %}
</div>

Window Coloring can be configured globally at `Settings → Appearance → Material Theme UI → Window Coloring`. You can also enable
**Regenerate
window color on theme change** to automatically pick a new color whenever you switch themes. 

For more granular control, **Per-Project Settings** allows you to choose different frame regions, fill modes, gradient settings, and colors for each project.
This makes it possible to give each project its own customizations, making them distinct from one another.

---

### Peek Evolution

Peek has received a number of improvements to make it more useful and easier to use:

- You can now use **Replace Ctrl-click** to replace the default `Ctrl+Click/Cmd+Click` behavior with the *Inline Peek* feature, keeping you in context while exploring definitions.
- To improve the reading experience, the Peek panel now **defaults to full width**. 
- We've added **F4 navigation** for faster jumping between results
- Implemented a **ServiceDimensionKey** to ensure consistent popup sizing when switching between peek panels. 
- Furthermore, interacting with the Peek window no longer triggers parent container scrolling, providing a more stable and focused editing experience.

**Note**: The **Replace Ctrl-click** option is a destructive action that modifies your current keymap. Please make a backup before enabling it.
{:class='card-panel warn'}

### New Color Scheme Overrides

We’ve expanded the **Color Scheme Overrides** to give you finer control over your workspace's aesthetics. You can now override the colors
for **Search Results**, the **Identifier Under Caret**, and **Matched Braces** using the **Accent Color**. This ensures key UI elements are
always consistent with your chosen theme and accent, regardless of the underlying color scheme's default colors. 

{% include figure.html content="/screens/colorSchemes/overrideAccents.png" caption="Override Accents" %}

We've also fixed the issue with **Diff Colors Opacity** not persisting after restarts.

### Outline Notifications

Experience a cleaner, more modern approach to IDE notifications with **Outline Notifications**. These notifications feature a subtle,
**accent-colored outline** styling that integrates seamlessly with the rest of the Material Theme UI, reducing visual clutter while
ensuring key information remains prominent.

{% include figure.html content="/screens/ui/notificationsOpaque.png" caption="Outline Notifications" %}

### Random Accent Color

The **Accent Color Picker** and **Accent Color Settings** now feature a **Random Accent Color** option. 

This allows you to generate a new accent color outside the predefined swatches, giving you a fresh and unique look for your IDE. 

{% include figure.html content="/screens/accents/accentPicker.png" caption="Material Accent Picker" %}

### Architectural Improvements

Behind the scenes, version 13.0.0 includes a massive architectural refactor to ensure the plugin remains fast and maintainable as it grows:

- **Dynamic Action System**: The entire action system has been rewritten to be fully dynamic, reducing boilerplate code. This allows for easier addition of new actions and features, while also improving startup performance.
- **Modular ThemeManager**: The core `ThemeManager` has been broken down into smaller, specialized services grouped by module. This makes the code more maintainable and testable, and less prone to bugs.
- **Boilerplate Reduction**: We've significantly reduced the boilerplate code required for Configurables and States, leading to a more
  reliable settings experience and faster delivery of new features.
- **Analytics Overhaul**: We've also improved the Analytics Collection, making it more efficient to follow user interactions and feature usage, which will help us prioritize future improvements.

These changes might not be immediately visible, but they provide a more stable foundation for the future of Material Theme UI.

## What's New in Material Theme UI v12.1.0

This version fixes a bunch of errors and usability issues, especially with the new **Peek** feature.

### Addition of a **Custom Width** option

Gives the ability to set a custom width for the Peek popup, restrained to the editor's width. This allows for a more comfortable reading
experience, especially when working with long lines of code.

### New defaults

The previous default of 8 lines in the Peek popup is really small and seldom useful. After comparing with other IDEs, we decided to increase
the default to 15 lines, which is a more comfortable size for most users.

In addition, we changed the background color to use the *Contrast Color* of the current theme, and the border color to the *Highlight
Color*, giving more contrast between the Peek Panels and the enclosing editor.

### New shortcuts

The previous shortcuts of `Shift + Click` or `Alt + Shift + Click` are conflicting with the usual purpose of `Shift`, which is to select
text. As such, we've added new shortcuts for the Peek feature: `Alt + Click` for Peek Inline and `Alt + Ctrl + Click` for Peek Popup.

### Omni Theme touches

The **Omni Theme** was found lacking a few properties in its color scheme, in comparison with the other prebundled themes. We've ran a
script to detect and fix the missing properties, and added a few more touches to make it more complete and visually appealing.

### Random Theme Fixes

We also (hopefully!) fixed a strange bug happening with the **Random Theme Switcher**, where the theme would suddenly change randomly,
despite not having reach the timer.

As always, happy coding!

---

## What's New in Material Theme UI v12.0.0

This release introduces a bunch of new content, including six new themes and handy code navigation features. We've also added a new options
page for managing **Color Schemes**, a new **Accent Color Picker**, a new **Theme Selector**, and other quality-of-life improvements.

### New Themes

We've added six new themes to the collection:

- **Cobalt2**: A refined port of the popular Cobalt2 theme.
- **Prism & Prism Light**: Clean and vibrant themes inspired by the Prism syntax highlighter.
- **Horizon & Horizon Bright**: Reddish soothing themes with a warm and refined color palette.
- **Omni**: A dusk theme with vibrant colors, ported from the theme of the same name.

<div class="masonry" markdown="0">
{% include figure.html content="/themes/cobalt2.png" caption="Cobalt2 Theme" %}
{% include figure.html content="/themes/prism.png" caption="Prism Theme" %}
{% include figure.html content="/themes/prism_light.png" caption="Prism Light Theme" %}
{% include figure.html content="/themes/horizon.png" caption="Horizon Theme" %}
{% include figure.html content="/themes/horizon_bright.png" caption="Horizon Bright Theme" %}
{% include figure.html content="/themes/omni.png" caption="Omni Theme" %}
</div>

### Peek

Introducing **Peek**, a new way to explore and modify your code without losing context. Inspired by the VSCode feature of the same name,
this feature allows you to peek at definitions inline, edit them, all in the comfort of your current file. You can configure the appearance
and behavior of the inline editor, including rounded borders and double-escape to close.

- **Peek (Editable Popup)**: Opens the definition in a sleek popup, allowing you to make quick edits without switching files.
- **Peek (Inline)**: Embeds the definition directly within your editor for a truly seamless experience.

{% include figure.html content="/screens/peek/popupPeek.png" caption="Peek as a Popup" %}

{% include figure.html content="/screens/peek/inlinePeek.png" caption="Peek Inline" %}

{% include figure.html content="/screens/peek/customColorsPeek.png" caption="Custom Colors" %}

**Note**: This feature is currently in beta and free for everyone, but in the future it will be only available in the Premium Plan. {:
class='card-panel warn'}

### Accent Color Picker

We've removed the plethora of **Accent Color Actions** and replaced them with a single, unified **Accent Color Picker** displaying the list
of available swatches in a modernized, handy popup. This allows you for a quick and easy way to change your accent color without navigating
through multiple menus.

{% include figure.html content="/screens/accents/accentPicker.png" caption="Material Accent Picker" %}

In addition, we've added a few more **predefined accent colors** to the list, such as **Aqua**, **Sand**, **Salmon** among others.

### Color Scheme Overrides

Thanks to the JetBrains Marketplace, you can download hundreds of themes and color schemes from a variety of sources. However, sometimes the
color schemes have contrast issues, wrong colors, or simply don't match the overall appearance. JetBrains IDEs already allow you to override
the colors of a color scheme. However, you can only override one scheme at a time, and if you have lots of color schemes, this can become
easily tedious and not worth the hassle.

As such, we've added a new settings page for overriding vendor color schemes on the fly, centralizing all the settings in one place. We've
migrated some of the existing color scheme overrides to this new page, such as the **Global Default Font** and the **Automatically Reset
Color Scheme**, and added a few more options for better control over your color schemes.

- **Diff Colors Opacity**: You can now adjust the opacity of diff highlights in the Diff/Merge editor.
- **Popups and Notifications**: Override the colors of popups and notifications from the Theme itself.
- **VCS Gutter Indicators**: Replace the VCS gutter indicator colors with the Material schemes' colors.
- **Accent Color Overrides**: Automatically align certain color scheme properties with the current **Accent Color**.

{% include figure.html content="/screens/colorSchemes/colorSchemeOverrides.png" caption="Color Scheme Overrides" %}

{% include figure.html content="/screens/colorSchemes/overrideAccents.png" caption="Override Accents" %}

**Note**: It's important to note that these overrides are affecting the color schemes, meaning that once applied, they can't be easily
reverted unless you reset the color scheme to its default state. Bear that in mind if you're using customized color schemes!
{:class='card-panel warn'}

### Other Improvements

- **New Logo**: We've replaced the static PNG logo with a nicer SVG version, which scales better and looks sharper on high-resolution
  displays. It also features a slightly more pleasant border radius, embedding with its containing environment.
- **New Theme Selector**: We've replaced the static PNG screenshots of the themes with SVG icons representing the theme's main colors. This
  allows us to add or edit themes more easily by automatically generating the previews.

-----

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

New year, new look! The **Material Theme UI** plugin continues to evolve, bringing a modernized experience to your IDE. This version
introduces the **Material 3** style, offering a fresh, contemporary aesthetic to replace the classic **Material 2** look. We’ve also added
support for the sleek **Google Sans** font (available separately) to further refine your workspace. {:class='title'}

### Material 3 Style

{% include figure.html content="/screens/ui/material3.png" caption="Refined UI: Buttons, dropdowns, sliders, and search boxes." %}

{% include figure.html content="/screens/ui/material3_2.png" caption="Updated Toggles" %}

{% include figure.html content="/screens/ui/material3_3.png" caption="Modern Option Buttons" %}

Want a preview? Explore the new **UI DSL Showcase** page in your settings.

For fans of the classics: we’ve completely overhauled the original **Material Design** (*Material 1*). No longer just a legacy style, it is
now a fully-featured customization option for those who prefer the traditional Material look.

----

Beyond the visual refresh, we’ve introduced several powerful features to enhance your workflow:

## Customizable Floating Action Button (FAB)

Access your most-used actions instantly with the new Floating Action Button. Position it anywhere in your IDE window and customize its
triggered actions via the **Menus and Toolbars** settings.

{% include figure.html content="/screens/features/fab.png" caption="The new Floating Action Button." %}

## Theme Ignores

Sometimes external themes don’t align perfectly with your preferences. With the new **Theme Ignores** page, you can choose to bypass
specific theme properties in favor of native IDE defaults, helping you resolve color clashes and UI inconsistencies.

{% include figure.html content="/screens/settingsv3/themeIgnores.png" caption="Fine-tune your theme overrides." %}

## Preview Theme Colors

Gain full transparency into your active theme. This new tool provides a comprehensive table of all theme properties and their exact color
values, eliminating the guesswork from customization.

{% include figure.html content="/screens/settingsv3/previewThemeColors.png" caption="Inspect your theme's color palette." %}

## Refined Spacing Settings

Precision matters. We’ve expanded the **Spacing Settings** to grant you granular control over the size and padding of UI components,
allowing you to tailor your IDE to your exact specifications.

{% include figure.html content="/screens/settingsv3/spacingNew.png" caption="Pixel-perfect layout control." %}

## Settings Overhaul

We’ve refined every settings page to improve the user experience. This includes UX optimizations, fixing UI bugs (such as broken images or
inconsistent disabled states), and overall polish to make navigation more intuitive.

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
