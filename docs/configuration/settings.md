---
layout: docs
title: Settings
description: Learn how to configure the plugin
group: configuration
toc: true
comments: true

previous:
  url: '/docs/getting-started'
  title: Getting Started
next:
  url: '/docs/configuration/color-schemes'
  title: Color Schemes
---

The Material Theme UI plugin comes with a wide range of features tailored for an optimal experience.
However, it's also highly configurable, allowing you to customize it to your heart's content.
{:class='title'}

{% include carbonads.html %}

## Themes and color schemes

### Current Theme

Since version 9.0.0, you can see the current theme's colors from the settings page.

For this, navigate to `Settings → Appearance → Material Theme UI → Current Theme`.

{% include figure.html content="/screens/settingsv3/currentTheme.png" caption="Current Theme" %}

### Theme switcher

The plugin comes prebundled with a set of themes that are interchangeable via the
![Theme Switcher](/img/icons/switcher.svg) *Theme Switcher*.

{% include figure.html content="/screens/settingsv3/switcher.png" caption="Theme Switcher" %}

There are many ways to invoke the *Theme Switcher*:

- From the IDE menu `Tools → Material Theme → Material Theme Chooser`
- From the _Main Toolbar_
- From the `Search Everything` dialog, type `Material Theme`
- From the `Quick Switch` panel <kbd>(Ctrl + \`)</kbd> (Windows: <kbd>Ctrl + ~</kbd>)`
- From the `Status Bar Widget`

{% include figure.html content="/screens/quickswitch.png" caption="Quick Switch" %}

Alternatively, you can switch themes using the _Theme Selector_ found in `Settings → Appearance → Material Theme UI → Theme Selector`.

{% include figure.html content="/screens/settingsv3/themeSelector.png" caption="Theme Selector" %}

The plugin comes prebundled with {{ site.data.themes.material.size | plus: site.data.themes.material2.size | plus: site.data.themes.other.size | plus:
site.data.themes.other2.size }} themes:

#### Material themes

These themes are based on the original Material Themes by Mattia Astorino ([@equinusocio](https://github.com/equinusocio)).

<ul class="theme-cards">
{% for theme in site.data.themes.material %}
  {% include theme-card.html %}
{% endfor %}

{% for theme in site.data.themes.material2 %}
{% include theme-card.html %}
{% endfor %}
</ul>

#### Other themes

Besides the Material Themes, there are other prebundled themes contributed by the community:

<ul class="theme-cards">
{% for theme in site.data.themes.other %}
  {% include theme-card.html %}
{% endfor %}

{% for theme in site.data.themes.other2 %}
{% include theme-card.html %}
{% endfor %}
</ul>

-----

#### Custom Themes

This feature is only available for premium users.
{:class='card-panel warn'}

In addition, premium users can also define their own **Custom Themes**.

{% include figure.html content="/screens/settingsv3/customTheme.png" caption="Custom Themes" %}

There are two options available, *Custom Theme* for dark themes and *Light Custom Theme* for light themes.

See [Custom Themes](/docs/configuration/custom-themes) for more information.

----

#### Native Themes

The plugin supports **Native Themes**, which use the JetBrains theme API.
When loading a native theme, the plugin attempts to convert it into a Material Theme,
allowing you to use the theme's colors while benefiting from Material Theme features such as components and accent mode.

You don't need to do anything to make it work: simply download a native theme and select it.
It will be automatically converted to a format supported by the plugin.

Examples:

{% include figure.html content="/screens/themes/dark.png" caption="New UI Dark" %}

{% include figure.html content="/screens/themes/vscodedark.png" caption="VSCode Dark" %}

{% include figure.html content="/screens/themes/gerrystorm.png" caption="Gerry Storm" %}

{% include figure.html content="/screens/themes/dokidoki.png" caption="Doki Doki Literature Club" %}

----

#### Adaptive Theme

This feature is only available for premium users.
{:class='card-panel warn'}

Finally, since version 9.0, the plugin also includes an **Adaptive Theme**.
This theme automatically updates its colors based on the current **color scheme**.

This theme is especially useful if you use color schemes that do not include their own UI themes, such as the [Rainglow color schemes](https://rainglow.io/).

Examples:

{% include figure.html content="/screens/themes/cobalt.png" caption="Cobalt Color Scheme" %}

{% include figure.html content="/screens/themes/monokai.png" caption="Monokai Color Scheme" %}

{% include figure.html content="/screens/themes/earthsong.png" caption="Rainglow EarthSong Color Scheme" %}

{% include figure.html content="/screens/themes/mauve.png" caption="Rainglow Mauve Color Scheme" %}

{% include figure.html content="/screens/themes/tetra.png" caption="Rainglow Tetra Color Scheme" %}


You can also override the Adapative Theme's colors from a **Color Scheme Settings Page**.
This way, you can customize your UI theme directly from the Color Scheme settings!

{% include figure.html content="/screens/settingsv3/adaptiveTheme.png" caption="Adaptive Theme" %}

----------

## Material Theme UI settings

### Settings Page

Some settings are only available for premium users.
{:class='card-panel warn'}

You can configure many of the plugin's features from the **plugin settings**.
They are located under `Settings → Appearance → Material Theme UI`.

Since version 9.0, the settings have been split into multiple pages for easier navigation and maintenance.

{% include figure.html content="/screens/settingsv3/mainSettings.png" caption="Main Settings" %}

{% include figure.html content="/screens/settingsv3/themeSelector.png" caption="Theme Selector" %}

{% include figure.html content="/screens/settingsv3/contrastMode.png" caption="Contrast Settings" %}

{% include figure.html content="/screens/settingsv3/accentColors.png" caption="Accent Settings" %}

{% include figure.html content="/screens/settingsv3/accentMode.png" caption="Accent Mode" %}

{% include figure.html content="/screens/settingsv3/customTheme.png" caption="Custom Themes" %}

{% include figure.html content="/screens/settingsv3/tabSettings.png" caption="Tabs Settings" %}

{% include figure.html content="/screens/settingsv3/spacing.png" caption="Spacing Settings" %}

{% include figure.html content="/screens/settingsv3/treeSettings.png" caption="Trees Settings" %}

{% include figure.html content="/screens/settingsv3/uiComponents.png" caption="UI Components Settings" %}

{% include figure.html content="/screens/settingsv3/featureSettings.png" caption="Features Settings" %}

{% include figure.html content="/screens/settingsv3/projectTitleBar.png" caption="Project Title Bar" %}

{% include figure.html content="/screens/settingsv3/langAdditions.png" caption="Language Additions Settings" %}

{% include figure.html content="/screens/settingsv3/otherTweaks.png" caption="Other Tweaks" %}

#### Summary

Here's an exhaustive list of all available settings:

**[Current Theme](/docs/configuration/current-theme)**:
In this section, you can view the current theme's colors. Click on a color to copy its value to the clipboard.

**[Theme Selector](/docs/configuration/theme-selector)**:

- *Theme Selector*: Select a theme from the list of pre-bundled themes. A small preview is provided for easier selection.

**[Contrast](/docs/configuration/contrast)**:

- *Contrast Mode*: Adds contrast to specific panels and components.
- *High Contrast*![premium](/img/icons/premium.png): Enable a more pronounced contrast by making text more prominent.
- *Contrast Value*![premium](/img/icons/premium.png): Fine-tune the contrast level. Higher values result in greater contrast.

**[Accent Settings](/docs/configuration/accents)**:

- *Custom Accent Color*: Set a custom accent color.
- *Override Accent Color from Theme*: Use the predefined accent color associated with the theme.
- *Custom Accent Color*: Set a custom accent color.
- *Predefined Accent Colors*: Choose from a list of predefined accent colors.

**[Accent Mode](/docs/configuration/accent-mode)**:

- *Accent Mode*![premium](/img/icons/premium.png): Emphasize specific components (buttons, tabs, selections, etc.) by applying the accent color.
- *Second Accent Color*![premium](/img/icons/premium.png): Define an additional accent color to complement the primary one.
- *Allow Color Scheme Modifications*![premium](/img/icons/premium.png): Update the current color scheme to apply accent colors to elements like links, tab indicators, and selections.
- *Fine-grained settings*![premium](/img/icons/premium.png): Apply accent mode to specific UI components rather than globally.
  - *Buttons*: Primary buttons
  - *Tabs*: Selected tabs
  - *Lists*: Selected list items
  - *Trees*: Selected tree items
  - *Toolbars*: Selected toolbar elements
  - *Notifications*: Accent-colored notifications

**[Custom Theme](/docs/configuration/custom-theme)**:

- *Custom Theme*![premium](/img/icons/premium.png): Configure the colors of the **Custom Theme**
- *Color Scheme*: Select a color scheme to be loaded alongside your custom theme.
- *Load from XML*: Import a custom theme in XML format.
- *Save to Disk*: Export your custom theme to an XML file.

**[Light Custom Theme](/docs/configuration/light-custom-theme)**:

- *Light Custom Theme*![premium](/img/icons/premium.png): Configure the colors of the **Light Custom Theme.**
- *Color Scheme*: Select a color scheme to be loaded alongside your custom theme.
- *Load from XML*: Import a custom theme in XML format.
- *Save to Disk*: Export your custom theme to an XML file.

**[Tabs](/docs/configuration/tabs)**:

- *Tabs Height*: Customize the height of the tabs (between `25` and `60` pixels).
- *Active Tab Highlight Color*![premium](/img/icons/premium.png): Customize the active tab's indicator color.
- *Thickness*![premium](/img/icons/premium.png): Set the indicator thickness for the active tab.
- *Uppercase Tabs*![premium](/img/icons/premium.png): Set the tabs' text to uppercase.
- *Bold Active Tab*![premium](/img/icons/premium.png): Make the active tab bold.
- *Custom Tab Font*![premium](/img/icons/premium.png): Control the font and size of the tabs.
- *Tab Highlight Position*![premium](/img/icons/premium.png): Customize the position of the tab highlighter.
- *Tabs Shadows*![premium](/img/icons/premium.png): Add a subtle shadow under the tabs.
- *Animated Tabs*: Animate the tab indicator when switching tabs.
- *Tab Separators*: Add thin borders between tabs.


**[Spacing](/docs/configuration/spacing)**:

- *Header Size*![premium](/img/icons/premium.png): Control the size of the header.
- *Compact Mode Header Size*![premium](/img/icons/premium.png): Control the size of the header in compact mode.
- *Custom Statusbar Size*![premium](/img/icons/premium.png): Control the size of the status bar.
- *Compact Table Cells*: Reduce the height of table headers and table cells.
- *Compact Dropdowns*: Reduce the size of dropdowns.
- *Compact Menus*: Reduce the size of the menus.
- *Custom List Items Height*: Control the size of items in lists and dropdowns (min: `18`, max: `48`).
- *Compact Fields*: Reduce the size of fields, such as input, numeric and passwords.


**[Trees](/docs/configuration/trees)**:

- *Custom Tree Indent*![premium](/img/icons/premium.png): Fine-tune the indentation of tree items.
    - You can configure both *Left* and *Right* indents.
- *Custom Line Item Height*![premium](/img/icons/premium.png): Set custom line height in trees (min: `18`, max: `44`).
- *Custom Tree Font*![premium](/img/icons/premium.png): Customize the font and font size of the project trees.
- *Selected Indicator Style*![premium](/img/icons/premium.png): Change the visual style of the indicator for selected tree items.
  - *Border*: Add a small rounded border to the left
  - *Dot*: Add a dot to the left of the selected item.
  - *Sharp*: Add a small sharp border to the left
  - *Right Border*: Add a small rounded border to the right
  - *Boxed*: Add a box around the selected item
  - *Underline*: Add an underline to the selected item
  - *None*: Remove the indicator
- *Thickness*![premium](/img/icons/premium.png): Control the thickness of the indicator.
- *Use Gradient*![premium](/img/icons/premium.png): Use a gradient instead of a single color for the indicator.
- *Use complementary color*![premium](/img/icons/premium.png): If using a gradient, use the complementary color of the accent color for the gradient.
- *Arrows Style*![premium](/img/icons/premium.png): Change the style of the arrows in the trees.
  - *Material*: Material UI Styled Arrows (chevrons)
  - *Darcula*: Darcula Styled Arrows (triangles)
  - *Plus-Minus*: Plus and Minus signs
  - *Arrows*: Simple arrows
  - *Circle*: Circled arrows
  - *None*: No arrows
- *Colored Open Directories*![premium](/img/icons/premium.png): Assign a specific style to directories. Can be configured from the *Custom File Colors* settings page.

**[UI Components](/docs/configuration/ui-components)**:

- *Material Design Style*: Select the style of the components.
  - *Legacy Material Design*: Use the old Material Design style (sharp corners, borderless input fields…).
  - *Material Theme*: Use the Material Theme style (rounded corners, bordered input fields…).
  - *Material You* (NOT RELEASED YET): Use the Material You style (rounded buttons, input fields…).
- *Borderless Mode*![premium](/img/icons/premium.png): Remove most borders and separators.
- *Uppercase buttons*: Set the button text to uppercase.
- *Outlined buttons*![premium](/img/icons/premium.png): Use outline buttons instead of full buttons.
- *Action Buttons Radius*![premium](/img/icons/premium.png): Customize the radius of the action buttons.
- *Round Notifications*![premium](/img/icons/premium.png): Make notifications rounder.
- *Inverted Completion Selection Color*: Toggle between the theme's selection color and a high-contrast color for the active item in the *Autocomplete* popup.
- *Accent Scrollbars*: Set the color of the scrollbars to the accent color (requires restart).
- *Transparent Scrollbars*: Enable/Disable transparency in scrollbars (requires restart).
- *Extra Shadows*![premium](/img/icons/premium.png): Add a subtle shadow around notifications and some popups.
- *Material Circular Loader Icon*: Replace the loading icon with a Material Design circular loader icon (available only in conjunction with the [Atom Material Icons](https://plugins.jetbrains.com/plugin/10044-atom-material-icons) plugin).

**[Features](/docs/configuration/features)**:

- *Animated Tool Windows*: Animate the opening and closing of tool windows when they are undocked.
- *Centered Editor*: Center the code in open editors, similar to distraction-free mode.
- *Show Overlays*: Display an overlay when modals are open.
- *Add more popups under overlays*: When enabled, triggers overlays for additional popups such as right-click menus and dropdowns.
- *Overlays Opacity*: Customize the opacity of the overlays.
- *Material Wallpapers*![premium](/img/icons/premium.png): Add a custom wallpaper per theme for the empty frame window.
- *Custom UI Font*![premium](/img/icons/premium.png): Set your own custom UI Font. Supplements the IDE's [_Custom Font_](https://www.jetbrains.com/help/idea/settings-appearance.html).
- *Material File Status Colors*: Enable/Disable the [Material File Status Colors](/docs/configuration/file-status-colors).
- *Custom Directories Style*![premium](/img/icons/premium.png): Customize the style of directories.
- *Automatically reset color scheme*: Automatically reset the color scheme on theme activation (_only for bundled color schemes_).
- *Use Editor Default Font*![premium](/img/icons/premium.png): Automatically update color schemes to use the default font of your choice.

**[Language Additions](/docs/configuration/language-additions)**:

- *Language Additions*![premium](/img/icons/premium.png): Enable/Disable the [Language Additions](/docs/configuration/color-scheme-additions).
- *Advanced Settings*![premium](/img/icons/premium.png): Turn off language additions for specific languages, depending on the IDE. The available options are:
  - Java (IntelliJ IDEA)
  - Kotlin (IntelliJ IDEA)
  - JavaScript (WebStorm, JavaScript plugin)
  - TypeScript (WebStorm, TypeScript plugin)
  - Ruby (RubyMine, Ruby plugin)
  - Python (PyCharm, Python plugin)
  - PHP (PhpStorm, PHP plugin)
  - Go (GoLand, Go plugin)
  - Rust (CLion, RustRover, Rust plugin)

**[Project Title Bar](/docs/configuration/project-title-bar)**:

- *Colorize Title Bar*![premium](/img/icons/premium.png): Colorize the title bar with a random color (only for the New UI).
- *Colorize Left Tool Window*![premium](/img/icons/premium.png): Colorize the left tool window (only for the New UI).
- *Colorize Right Tool Window*![premium](/img/icons/premium.png): Colorize the right tool window (only for the New UI).
- *Colorize Status Bar*![premium](/img/icons/premium.png): Colorize the status bar (only for the New UI).
- *Project Title Bar*![premium](/img/icons/premium.png): Add a colored stripe on the top of each project window for easier differentiation.
- *Show Project Icon*![premium](/img/icons/premium.png): Display the _project's custom icon_ on the stripe.
- *Show Project Title*![premium](/img/icons/premium.png): Displays the _project title_ on the stripe.
- *Customize Text*![premium](/img/icons/premium.png): Customize the displayed text.
    - You can use the keywords `{project}`, `{module}`, `{fullPath}`, `{path}` and `{file}` to refer respectively to the current project, module, full path, local path and/or current file.

**[Other Tweaks](/docs/configuration/other-tweaks)**:

- *Show What's New on each update*: Whether to display the [What's New](/docs/what-s-new) page after each update.
- *Show Wizard on Welcome Screen*: Add or remove the Wizard option in the Welcome Screen.

-----

#### Settings shortcuts

You can also quickly toggle some settings by using the _Search Everywhere_ or the _Command Panel_ capability of the IDE.
Simply press `Shift-Shift` and type `Material Theme` to get the list of available toggles.

Same goes for the `Command Panel` (<kbd>Ctrl-Shift-A/Cmd-Shift-A</kbd>).

{% include figure.html content="/screens/cmdpanel.png" caption="Command Panel" %}

You can also use the `Keymap Editor` to assign your own custom shortcuts to these toggles.

#### Settings File

Your current configuration is stored inside the IDE settings' directory under the filenames:

- **Main Settings**: `material_theme_new.xml`.
- **Custom Theme**: `material_custom_theme_new.xml`.
- **Per Project Settings**: `material_theme_project.xml`.

If, for some reason, there are issues with the plugin,
or you don't manage to reset to a stable state, delete these files and restart the IDE.

Read the [IDE Settings](https://intellij-support.jetbrains.com/hc/en-us/articles/206544519-Directories-used-by-the-IDE-to-store-settings-caches-plugins-and-logs) 
and [Directories used by the IDE](https://www.jetbrains.com/help/idea/directories-used-by-the-ide-to-store-settings-caches-plugins-and-logs.html)
documentation to learn where these configuration files are stored.

The files in question should be located in the following directories:

- within `<config directory>/config`
- within each project's `.idea` directory for the **Per-Project Settings**.

----------

## Custom themes

This feature is only available for premium users.
{:class='card-panel warn'}

Aside from the bundled themes, you can also set up your own Material Theme.

You can do so by selecting `Custom Theme` in the theme list,
then customize the theme colors in the settings page at `Settings → Appearance → Material Custom Theme Settings`.

{% include figure.html content="/screens/customsettings.png" caption="Material Custom Theme Settings" %}

Once you set these colors, select the `Custom Theme` in the _Material Theme Chooser_ and see your colors take effect.

See [Custom Theme](/docs/configuration/custom-themes) for more details.

-----

## Frequently Asked Questions

**Q**: **I've updated the IDE/plugin to a new version, and now I get an error about the plugin failing to initialize?**

**A**: This could be due to several issues, but it might simply be that your settings are incompatible with the new version.
In that case, make a copy of your settings file, delete the original, and restart the IDE.
If the problem is resolved, you can reconfigure your settings manually.
If the issue persists, please report it in the Issues section.

**Q**: **I've removed the plugin, and still the background image persists!**

**A**: This is a difficult issue to resolve because the *Custom Wallpaper* feature uses the IDE's native `Set Background image` function.
Consequently, removing the plugin might not completely remove the background image.
If this occurs, you can remove the image by opening the Command Panel (`Cmd-Shift-A`/`Ctrl-Shift-A`), typing `Set Background image`, and then manually clearing the image. Alternatively, go to `Settings → Appearance → Background Image`.

**Q**: **What is that analytics option? What data are collected?**

**A**: This option allows anonymous data to be sent to Material Theme servers regarding user configuration, usage, and trends.
These metrics help us identify which features are most or least used, allowing us to prioritize development and improve user satisfaction.
The data is completely anonymous and is never shared with or sold to third parties.
If you wish to stop sending data, you can disable this option in `material_theme.xml`.

**Q**: **My settings are lost/jumbled up!**

**A**: As the plugin evolves, settings may be modified or removed, which can occasionally cause issues with configuration files.
We strive to minimize such occurrences, but they can still happen.
If you are unable to use the plugin or run the IDE, try deleting your configuration files or specific properties until the IDE launches correctly.

**Q**: **The wizard idea was great! But I've made a mistake, and the wizard won't show up anymore!**

**A**: The wizard only appears once, specifically when the `isWizardShown` option is not set to true in the configuration file.
However, you can reopen it at any time by clicking the wizard action in the [Material Theme Toolbar](/docs/configuration/quick-actions-panel), under the Features menu.

**Q**: **Where have all the icons gone?**

**A**: Starting with version 5.0.0, icon-related settings have been moved to the [Atom Material Icons plugin](https://plugins.jetbrains.com/plugin/10044-atom-material-icons), also developed by the Material Theme team.
This change encourages the development of independent _Icon Themes_, as the main plugin no longer bundles icons.

**Q**: **I've downloaded a theme from the Plugins Page, and now I'm seeing texts that aren't themed, or checkboxes that are wrongly colored, etc…**

**A**: These are native themes that use the JetBrains Theme API rather than the Material Theme API.
While the plugin attempts to convert them to its own format, the result may not perfectly match the original.
However, it should be as close as possible without causing critical issues. If you encounter significant problems, please report them to the repository's issues page.

**Q**: **I've bought a license, but I am still identified as a Free User!**

**A**: This indicates that your license has not yet been activated. To activate it, run the action to open the _Registration Modal_.

{% include figure.html content="/screens/activateLicense.png" caption="Activate License" %}

{% include figure.html content="/screens/license.png" caption="License" %}

**Important note**: Android Studio users must install the [JetBrains Marketplace Licensing Support](https://plugins.jetbrains.com/plugin/13407-jetbrains-marketplace-licensing-support) plugin to activate the Material Theme UI (or any other paid plugin).