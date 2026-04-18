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

The Material Theme UI plugin is highly configurable, offering a wide array of features that can be tailored to suit your workflow.
{:class='title'}

{% include carbonads.html %}

## Themes and color schemes

### Current Theme

Since version 9.0.0, you can view the active theme's color palette directly within the settings.

To access this, navigate to `Settings → Appearance → Material Theme UI → Current Theme`.

{% include figure.html content="/screens/settingsv3/currentTheme.png" caption="Current Theme" %}

### Preview Theme Colors

This section provides a visual grid of all colors used by the currently active theme.

{% include figure.html content="/screens/settingsv3/previewThemeColors.png" caption="Preview Theme Colors" %}

### Theme switcher

The plugin includes several prebundled themes that can be switched using the
![Theme Switcher](/img/icons/switcher.svg) **Theme Switcher**.

{% include figure.html content="/screens/settingsv3/switcher.png" caption="Theme Switcher" %}

There are many ways to invoke the *Theme Switcher*:

- From the IDE menu `Tools → Material Theme → Material Theme Chooser`
- From the _Main Toolbar_
- From the `Search Everything` dialog, type `Material Theme`
- From the `Quick Switch` panel <kbd>(Ctrl + \`)</kbd> (Windows: <kbd>Ctrl + ~</kbd>)`
- From the `Status Bar Widget`

{% include figure.html content="/screens/settingsv3/quickswitch.png" caption="Quick Switch" %}

Alternatively, use the **Theme Selector** at `Settings → Appearance → Material Theme UI → Theme Selector`.

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

Native Themes utilize the JetBrains Theme API. The plugin automatically converts these themes, allowing you to use their colors while still benefiting from Material Theme features such as custom components and accent modes.

No manual configuration is required: simply download a native theme and select it; the plugin will handle the conversion.

Examples:

{% include figure.html content="/screens/themes/dark.png" caption="New UI Dark" %}

{% include figure.html content="/screens/themes/vscodedark.png" caption="VSCode Dark" %}

{% include figure.html content="/screens/themes/gerrystorm.png" caption="Gerry Storm" %}

{% include figure.html content="/screens/themes/dokidoki.png" caption="Doki Doki Literature Club" %}

----

#### Adaptive Theme

This feature is only available for premium users.
{:class='card-panel warn'}

Since version 9.0, the plugin includes an **Adaptive Theme** that dynamically updates its colors based on your current **color scheme**.

This is particularly useful when using color schemes that do not bundle their own UI themes (e.g., [Rainglow color schemes](https://rainglow.io/)).

Examples:

{% include figure.html content="/screens/themes/cobalt.png" caption="Cobalt Color Scheme" %}

{% include figure.html content="/screens/themes/monokai.png" caption="Monokai Color Scheme" %}

{% include figure.html content="/screens/themes/earthsong.png" caption="Rainglow EarthSong Color Scheme" %}

{% include figure.html content="/screens/themes/mauve.png" caption="Rainglow Mauve Color Scheme" %}

{% include figure.html content="/screens/themes/tetra.png" caption="Rainglow Tetra Color Scheme" %}


You can further customize the Adaptive Theme's behavior via the **Color Scheme Settings Page**, allowing you to fine-tune the UI directly from your color scheme settings.

{% include figure.html content="/screens/settingsv3/adaptiveTheme.png" caption="Adaptive Theme" %}

----------

## Material Theme UI settings

### Settings Page

Some settings are only available for premium users.
{:class='card-panel warn'}

Configure various plugin features via the **plugin settings** at `Settings → Appearance → Material Theme UI`.

Starting with version 9.0, settings are categorized into sub-pages for improved organization.

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

{% include figure.html content="/screens/settingsv3/islands.png" caption="Islands" %}

{% include figure.html content="/screens/settingsv3/themeRandomizer.png" caption="Theme Randomizer" %}

{% include figure.html content="/screens/settingsv3/themeIgnores.png" caption="Theme Ignores" %}

#### Summary

Here's an exhaustive list of all available settings:

**[Current Theme](/docs/configuration/current-theme)**:

View the active theme's colors. Click any color to copy its hex value to the clipboard.

**[Preview Theme Colors](/docs/configuration/preview-theme-colors)**:

This section provides a visual grid of all colors used by the currently active theme.

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

- *Enable Customization*: Whether to use the Material Theme's tabs implementation or the native one.
- *Tabs Height*: Customize the height of the tabs (between `25` and `60` pixels).
- *Active Tab Highlight Color*![premium](/img/icons/premium.png): Customize the active tab's indicator color.
- *Thickness*![premium](/img/icons/premium.png): Set the indicator thickness for the active tab.
- *Rounded Tabs*: Use **Rounded Tabs** instead of the classic Material Design tabs.
  - *Rounded Tabs Opacity*![premium](/img/icons/premium.png): Customize the opacity of the background color.
  - *Rounded Tabs Border Size*![premium](/img/icons/premium.png): Customize the border size of the selected tab.
  - *Rounded Tabs Arc*![premium](/img/icons/premium.png): Customize the arc radius of the selected tab.
  - *Rounded Tabs Padding*![premium](/img/icons/premium.png): Customize the internal padding of the selected tab.
- *Uppercase Tabs*![premium](/img/icons/premium.png): Set the tabs' text to uppercase.
- *Bold Active Tab*![premium](/img/icons/premium.png): Make the active tab bold.
- *Custom Tab Font*![premium](/img/icons/premium.png): Control the font and size of the tabs.
- *Tab Highlight Position*![premium](/img/icons/premium.png): Customize the position of the tab highlighter.
- *Tabs Shadow Effect*![premium](/img/icons/premium.png): Add a subtle shadow or glow effect under the tabs.
- *Animated Tabs*: Animate the tab indicator when switching tabs.
- *Tab Separators*: Add thin borders between tabs.
- *Customize Active Tab Color*: Allows overriding the active tab highlight color from the Color Scheme.

**[Spacing](/docs/configuration/spacing)**:

- *Header Size*![premium](/img/icons/premium.png): Control the size of the header.
  - *Compact Mode Header Size*![premium](/img/icons/premium.png): Control the size of the header in compact mode.
- *Custom Statusbar Size*![premium](/img/icons/premium.png): Control the size of the status bar.
- *Custom Table Cells*: Control the size of table headers and table cells.
  - *Modify Database Tables*: Apply the custom table cell size to editor tables such as Database Views.
- *Custom Dropdowns*: Control the size of dropdowns.
- *Custom Menus*: Control the size of the menus.
- *Custom List Items Height*: Control the size of items in lists and dropdowns.
- *Custom Fields*: Control the size of fields, such as input, numeric and passwords.

**[Islands](/docs/configuration/islands)**:

- *Islands Layout*: Enable the new islands layout.
- *Background Contrast*![premium](/img/icons/premium.png): Give more contrast between the IDE and the islands.
- *Custom Background Color*![premium](/img/icons/premium.png): Set a custom background color between the islands.
- *Border Color*![premium](/img/icons/premium.png): Set a custom border color.
- *Island Arc Size*![premium](/img/icons/premium.png): Sets a custom arc radius.
- *Inner Spacing*![premium](/img/icons/premium.png): Customize the inner spacing inside the islands.
- *Outer Margin*![premium](/img/icons/premium.png): Customize the spacing between the islands.
- *Islands Gap*![premium](/img/icons/premium.png): Set the gap between the islands and the window borders (only when the tool windows are hidden).
- *Tool Window Overlay Opacity*: Customize the opacity applied to the tool windows when the IDE is inactive.

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
  - *Material 3*: Use the Material 3 style (rounded buttons and search fields, Google Sans font...).
- *Borderless Mode*![premium](/img/icons/premium.png): Remove most borders and separators.
- *Uppercase buttons*: Set the button text to uppercase.
- *Outlined buttons*![premium](/img/icons/premium.png): Use outline buttons instead of full buttons.
- *Custom Button Radius*![premium](/img/icons/premium.png): Override the default button radius.
- *Action Buttons Radius*![premium](/img/icons/premium.png): Customize the radius of the action buttons.
- *Round Notifications*![premium](/img/icons/premium.png): Make notifications rounder.
- *Search Everywhere Customization*![premium](/img/icons/premium.png): Customize the look of the Search Everywhere popup.
  - *Custom Input Padding*![premium](/img/icons/premium.png): Increase or decrease the size of the Search Everywhere input field.
  - *Font Size Delta*![premium](/img/icons/premium.png): Increase or decrease the size of the font.
- *Inverted Completion Selection Color*: Toggle between the theme's selection color and a high-contrast color for the active item in the *Autocomplete* popup.
- *Scrollbars*:
  - *Accent Scrollbars*: Set the color of the scrollbars to the accent color (requires restart).
  - *Transparent Scrollbars*: Enable/Disable transparency in scrollbars (requires restart).
- *Extra Shadows*![premium](/img/icons/premium.png): Add a subtle shadow around notifications and some popups.
- *Material Circular Loader Icon*: Replace the loading icon with a Material Design circular loader icon (available only in conjunction with the [Atom Material Icons](https://plugins.jetbrains.com/plugin/10044-atom-material-icons) plugin).
- *Use original Tool Window Hover Buttons*: Replace the look of the hover indicator on the Tool Windows with the native one.

**[Features](/docs/configuration/features)**:

- *Animated Tool Windows*: Animate the opening and closing of tool windows when they are undocked.
- *Centered Editor*: Center the code in open editors, similar to distraction-free mode.
- *Floating Action Button*: Add a floating action button to the bottom right corner of the screen.
- *Show Overlays*: Display an overlay when modals are open.
  - *Add more popups under overlays*: When enabled, triggers overlays for additional popups such as right-click menus and dropdowns.
  - *Overlays Opacity*: Customize the opacity of the overlays.
- *Material Wallpapers*![premium](/img/icons/premium.png): Add a custom wallpaper per theme for the empty frame window.
- *Custom UI Font*![premium](/img/icons/premium.png): Set your own custom UI Font. Supplements the IDE's [_Custom Font_](https://www.jetbrains.com/help/idea/settings-appearance.html).
- *Material File Status Colors*: Enable/Disable the [Material File Status Colors](/docs/configuration/file-status-colors).
- *Custom Directories Style*![premium](/img/icons/premium.png): Customize the style of directories.
- *Automatically reset color scheme*: Automatically reset the color scheme on theme activation (_only for bundled color schemes_).
- *Use Editor Default Font*![premium](/img/icons/premium.png): Automatically update color schemes to use the default font of your choice.

**[Theme Randomizer](/docs/configuration/theme-randomizer)**:

- *Enabled*: Enable the theme randomizer.
- *Theme Change Interval*: Set the interval between theme changes.
- *Theme List*: Check or uncheck themes to be included in the randomization.

**[Theme Ignores](/docs/configuration/theme-ignores)**:

This section allows you to add specific UI Properties to ignore when loading custom themes, so that they will be replaced by the plugin's default values.

This is particularly useful in the case when external themes don't define properties, so that you don't end up with the default `Darcula` values.

**[Language Additions](/docs/configuration/language-additions)**:

- *Language Additions*![premium](/img/icons/premium.png): Enable/Disable the [Language Additions](/docs/configuration/language-additions).
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
- *Gradient Radius*![premium](/img/icons/premium.png): Customize the Project Widget Gradient radius on the title bar.
- *Project Title Bar*![premium](/img/icons/premium.png): Add a colored stripe on the top of each project window for easier differentiation.
- *Show Project Icon*![premium](/img/icons/premium.png): Display the _project's custom icon_ on the stripe.
- *Show Project Title*![premium](/img/icons/premium.png): Displays the _project title_ on the stripe.
- *Customize Text*![premium](/img/icons/premium.png): Customize the displayed text.
    - You can use the keywords `{project}`, `{module}`, `{fullPath}`, `{path}` and `{file}` to refer respectively to the current project, module, full path, local path and/or current file.
- *Project Title Frame Settings*:
  - *Project Frame Width*: Set the width of the project frame (use 0 for the whole width).
  - *Project Frame Height*: Set the height of the project frame.
  - *Project Frame Font Family*: Customize the font family of the project frame text.
  - *Project Frame Font Size*: Customize the font size of the project frame text.

**[Other Tweaks](/docs/configuration/other-tweaks)**:

- *Show What's New on each update*: Whether to display the [What's New](/docs/what-s-new) page after each update.
- *Show Wizard on Welcome Screen*: Add or remove the Wizard option in the Welcome Screen.

**UI DSL Showcase**:

This settings page simply displays a list of UI components to preview how they will look like in the IDE.

-----

#### Settings shortcuts

You can also quickly toggle some settings by using the _Search Everywhere_ or the _Command Panel_ capability of the IDE.
Simply press `Shift-Shift` and type `Material Theme` to get the list of available toggles.

Same goes for the `Command Panel` (<kbd>Ctrl-Shift-A/Cmd-Shift-A</kbd>).

{% include figure.html content="/screens/settingsv3/cmdPanel.png" caption="Command Panel" %}

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
then customize the theme colors in the settings page at `Settings → Appearance → Material Theme -> Custom Theme`.

{% include figure.html content="/screens/settingsv3/customTheme.png" caption="Material Custom Theme Settings" %}

Once you set these colors, select the `Custom Theme` in the _Material Theme Chooser_ and see your colors take effect.

See [Custom Theme](/docs/configuration/custom-themes) for more details.

-----

## Frequently Asked Questions

**Q**: **I've updated the IDE or plugin, and now the plugin fails to initialize. How can I fix this?**

**A**: This may occur if your settings are incompatible with the new version. Try creating a backup of your settings file, then delete the original and restart the IDE. If the issue is resolved, you can reconfigure your settings manually. If it persists, please report the issue on our GitHub repository.

**Q**: **I've removed the plugin, but the background image persists!**

**A**: This occurs because the *Custom Wallpaper* feature utilizes the IDE's native `Set Background image` function. If removing the plugin doesn't clear the image, you can do so manually via the Command Panel (`Cmd-Shift-A`/`Ctrl-Shift-A`) by searching for `Set Background image` and clearing the value, or by navigating to `Settings → Appearance → Background Image`.

**Q**: **What data is collected via the analytics option?**

**A**: This option sends anonymous usage data to Material Theme servers to help us understand user configurations and trends. These metrics allow us to prioritize development and improve the plugin. The data is entirely anonymous and is never shared with or sold to third parties. You can disable this option at any time in `material_theme.xml`.

**Q**: **My settings seem jumbled or lost.**

**A**: As the plugin evolves, some settings may be modified or retired, which can occasionally impact configuration files. We aim to minimize these disruptions. If you encounter issues, try deleting your configuration files or specific properties until the IDE launches correctly.

**Q**: **The wizard only appeared once and I can't find it anymore.**

**A**: By design, the wizard only appears upon initial installation. However, you can relaunch it at any time via the [Material Theme Toolbar](/docs/configuration/quick-actions-panel), under the Features menu.

**Q**: **Where have all the icons gone?**

**A**: Starting with version 5.0.0, icon-related settings have been moved to the [Atom Material Icons plugin](https://plugins.jetbrains.com/plugin/10044-atom-material-icons), also developed by the Material Theme team.
This change encourages the development of independent _Icon Themes_, as the main plugin no longer bundles icons.

**Q**: **I've installed a theme from the Marketplace, but some UI elements are not correctly themed.**

**A**: These are likely "Native Themes" that use the JetBrains Theme API. While the Material Theme UI plugin attempts to convert them to its own format for better compatibility, the result may not always be perfect. If you encounter significant issues, please report them to the respective theme's repository.

**Q**: **I've bought a license, but I am still identified as a Free User!**

**A**: This indicates that your license has not yet been activated. To activate it, run the action to open the _Registration Modal_.

{% include figure.html content="/screens/license/activateLicense.png" caption="Activate License" %}

{% include figure.html content="/screens/license/manageSubscriptions.png" caption="License" %}

**Important note**: Android Studio users must install the [JetBrains Marketplace Licensing Support](https://plugins.jetbrains.com/plugin/13407-jetbrains-marketplace-licensing-support) plugin to activate the Material Theme UI (or any other paid plugin).