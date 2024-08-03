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

The Material Theme UI plugin comes with a bunch of features tailored for an optimal experience.
However, it's also highly configurable to allow everyone to customize it to their hearts' content.
{:class='title'}

{% include carbonads.html %}

## Themes and color schemes

### Current Theme

Since version 9.0.0, you can see the current theme's colors from the settings page.

For this, navigate to `Settings → Appearance → Material Theme UI → Current Theme`.

{% include figure.html content="/screens/settingsv3/currentTheme.png" caption="Current Theme" %}

### Theme switcher

The plugin comes prebundled with a set of themes interchangeables through the
![Theme Switcher](/img/icons/switcher.svg) *Theme Switcher*.

{% include figure.html content="/screens/settingsv3/switcher.png" caption="Theme Switcher" %}

There are many ways to invoke the *Theme Switcher*:

- From the IDE menu `Tools → Material Theme → Material Theme Chooser`
- From the _Main Toolbar_
- From the `Search Everything` dialog, type `Material Theme`
- From the `Quick Switch` panel <kbd>(Ctrl + \`)</kbd> (Windows: <kbd>Ctrl + ~</kbd>)`
- From the `Status Bar Widget`

{% include figure.html content="/screens/quickswitch.png" caption="Quick Switch" %}

Alternatively, you can also switch themes using the _Theme Selector_ found in `Settings → Appearance → Material Theme UI → Theme Selector`.

{% include figure.html content="/screens/settingsv3/themeSelector.png" caption="Theme Selector" %}

The plugin comes prebundled with {{ site.data.themes.material.size | plus: site.data.themes.material2.size | plus: site.data.themes.other.size | plus:
site.data.themes.other2.size }} themes:

#### Material themes

These themes are based on the original themes, made by Mattia Astorino ([@equinusocio](https://github.com/equinusocio))

<ul class="theme-cards">
{% for theme in site.data.themes.material %}
  {% include theme-card.html %}
{% endfor %}

{% for theme in site.data.themes.material2 %}
{% include theme-card.html %}
{% endfor %}
</ul>

#### Other themes

Besides the Material Themes, there are other prebundled themes made by the community:

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

The plugin supports **Native Themes** as well, that is, themes using JetBrains theme API.
When loading a native theme, the plugin would try to convert it into a Material Theme,
thus allowing you to use the theme colors while using the Material Theme features such as the components, accent mode, etc.

You don't need to do anything to make it work, download a native theme and select it.
It will be automatically converted to a theme format supported by the plugin.

Examples:

{% include figure.html content="/screens/themes/dark.png" caption="New UI Dark" %}

{% include figure.html content="/screens/themes/vscodedark.png" caption="VSCode Dark" %}

{% include figure.html content="/screens/themes/gerrystorm.png" caption="Gerry Storm" %}

{% include figure.html content="/screens/themes/dokidoki.png" caption="Doki Doki Literature Club" %}

----

#### Adaptive Theme

This feature is only available for premium users.
{:class='card-panel warn'}

Last but not least, since version 9.0, the plugin also comes with an **Adaptive Theme**.
This theme automatically changes its colors based on the current **color scheme**.

This theme is quite useful if you have a lot of color schemes that do not come with their own UI Themes, such as the [Rainglow color schemes](https://rainglow.io/).

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

You can configure many parts of the plugin features from the **plugin settings**.
They're available within the `Settings → Appearance → Material Theme UI`.

Since version 9.0, the settings page has been split into multiple settings pages, for easier navigation and maintenance.

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

In this page, you can view the current theme's colors. You can also click on a color to copy it to the clipboard.

**[Theme Selector](/docs/configuration/theme-selector)**:

- *Theme Selector*: Select a theme from the list of pre-bundled themes. You'll get a small preview of the theme for easier selection.

**[Contrast](/docs/configuration/contrast)**:

- *Contrast Mode*: Add contrast to specific panels and components.
- *High Contrast*![premium](/img/icons/premium.png): Set a more pronounced contrast, by making the texts more prominent.
- *Contrast Value*![premium](/img/icons/premium.png): Fine tune the contrast value. The more you increase it, the more contrast you get.

**[Accent Settings](/docs/configuration/accents)**:

- *Custom Accent Color*: Set a custom accent color.
- *Override Accent Color from Theme*: Use the theme's accent color.
- *Custom Accent Color*: Set a custom accent color.
- *Predefined Accent Colors*: Choose from a list of predefined accent colors.

**[Accent Mode](/docs/configuration/accent-mode)**:

- *Accent Mode*![premium](/img/icons/premium.png): Make components stand out by painting them in the accent color (buttons, tabs, selections…).
- *Second Accent Color*![premium](/img/icons/premium.png): Specify a second accent color to contrast with the primary accent color.
- *Allow Color Scheme Modifications*![premium](/img/icons/premium.png): Modify the current color scheme to replace some elements with the primary or secondary accent color, such as links, tab highlighter, selections, etc.
- *Fine-grained settings*![premium](/img/icons/premium.png): Instead of applying accent mode globally, you can decide to apply it only to specific components.
  - *Buttons*: Primary buttons
  - *Tabs*: Selected tabs
  - *Lists*: Selected elements in lists
  - *Trees*: Selected elements in trees
  - *Toolbars*: Some toolbars
  - *Notifications*: Notifications

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

- *Tabs Height*: Customize the tabs' height (between `25` and `60` pixels).
- *Active Tab Highlight Color*![premium](/img/icons/premium.png): Customize the active tab's indicator color.
- *Thickness*![premium](/img/icons/premium.png): Set the active tab's indicator thickness.
- *Uppercase Tabs*![premium](/img/icons/premium.png): Set the tabs' text to uppercase.
- *Bold Active Tab*![premium](/img/icons/premium.png): Make the active tab bold.
- *Custom Tab Font*![premium](/img/icons/premium.png): Control the font and size of the tabs.
- *Tab Highlight Position*![premium](/img/icons/premium.png): Customize the position of the tab highlighter.
- *Tabs Shadows*![premium](/img/icons/premium.png): Add a subtle shadow under the tabs.
- *Animated Tabs*: Animate the tab indicator upon switching tabs
- *Tab Separators*: Add thin borders between tabs


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

- *Custom Tree Indent*![premium](/img/icons/premium.png): Fine tune indent of tree items.
    - You can configure both the *Left* and *Right* indents.
- *Custom Line Item Height*![premium](/img/icons/premium.png): Set custom line height in trees (min: `18`, max: `44`).
- *Custom Tree Font*![premium](/img/icons/premium.png): Customize the font and font size of the project trees.
- *Selected Indicator Style*![premium](/img/icons/premium.png): Change the style of the indicator for selected item in trees.
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
- *Borderless Mode*![premium](/img/icons/premium.png): Remove most borders and separators
- *Uppercase buttons*: Set the buttons' texts to uppercase.
- *Outlined buttons*![premium](/img/icons/premium.png): Use outline buttons instead of full buttons.
- *Action Buttons Radius*![premium](/img/icons/premium.png): Customize the radius of the action buttons.
- *Round Notifications*![premium](/img/icons/premium.png): Make notifications rounder.
- *Inverted Completion Selection Color*: Switch the _Autocomplete_'s selected item color between the selection color and contrast color.
- *Accent Scrollbars*: Set the color of the scrollbars to the accent color (requires restart).
- *Transparent Scrollbars*: Enable/Disable transparency in scrollbars (requires restart).
- *Extra Shadows*![premium](/img/icons/premium.png): Add a subtle shadow around notifications and some popups.
- *Material Circular Loader Icon*: Replace the loading icon with a Material Design circular loader icon (available only in conjunction with the [Atom Material Icons](https://plugins.jetbrains.com/plugin/10044-atom-material-icons) plugin).

**[Features](/docs/configuration/features)**:

- *Animated Tool Windows*: Animate opening and closing on tool windows when they are undocked.
- *Centered Editor*: Centers the code in open editors, like in distraction free mode.
- *Show Overlays*: Displays an overlay when modals are open.
- *Add more popups under overlays*: When enabled, triggers overlays for more popups, such as right click menus, dropdowns, etc.
- *Overlays Opacity*: Customize the opacity of the overlays
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

- *Show What's New on each update*: Whether to display the [What's New](/docs/what-s-new) page on each update.
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

Read [IDE Settings](https://intellij-support.jetbrains.com/hc/en-us/articles/206544519-Directories-used-by-the-IDE-to-store-settings-caches-plugins-and-logs) 
and [Directories
used by the IDE](https://www.jetbrains.com/help/idea/directories-used-by-the-ide-to-store-settings-caches-plugins-and-logs.html)
to find out where are stored such configuration files.

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

**A**: It could come from multiple issues, but it could simply be a problem with the settings not being compatible with the new version.

In that case, make a copy of the settings file, then delete the original file, and restart the IDE.

If the issue is gone, go back to the settings and go back to your previous configuration manually.

If the issue persists, please report it in the Issues Section.

**Q**: **I've removed the plugin, and still the background image persists!**

**A**: This is an issue hard to resolve, because the *Custom Wallpaper* function is using the `Set Background image` function from the IDE behind the curtains.

Therefore, removing the plugin might not remove the set image completely.

If that occurs, you can remove the image by opening the Command Panel (`Cmd-Shift-A/Ctrl-Shift-A`)
and type `Set Background image` and then manually remove the image,
or go into `Settings → Appearance → Background Image`.

**Q**: **What is that analytics option? What data are collected?**

**A**: This is an option to allow sending data to Material Theme servers about users' configuration, usage and trends.

These metrics allow us to find out which features are most used or least used, to prioritize development of features,
or maybe notify users about specific features, to provide better satisfaction.

These data are completely anonymous, and aren't shared/sold to any third parties.
If you want to stop sending data, turn off the option in the `material_theme.xml`.

**Q**: **My settings are lost/jumbled up!**

**A**: As the plugin evolves, sometimes settings are modified or removed, and as a result it can jumble your configuration files.

We're trying our best to limit such issues, but they can happen nonetheless.

If you find yourself being unable to use the plugin or even run the IDE, try to delete your configuration files,
or at least try to delete specific properties until the IDE launches again.

**Q**: **The wizard idea was great! But I've made a mistake, and the wizard won't show up anymore!**

**A**: The wizard shows only once and only when you don't have the `isWizardShown` option set to true in the config file.

But you can reopen it by simply clicking on the action from the [Material Theme Toolbar](/docs/configuration/quick-actions-panel),
on the Features menu.

**Q**: **Where have all the icons gone?**

**A**: Since 5.0.0, the icons related settings have been moved to the [Atom Material Icons plugin](https://plugins.jetbrains.com/plugin/10044-atom-material-icons), another plugin developed by the Material Theme team.

This is to encourage developers to develop _Icon Themes_, as the plugin is now free of icons.

**Q**: **I've downloaded a theme from the Plugins Page, and now I'm seeing texts that aren't themed, or checkboxes that are wrongly colored, etc…**

**A**: This is because these are native themes, and such themes use the Theme API provided by JetBrains rather than the API used by the Material Themes.

Even though the plugin tries to convert it to its own format, it won't be as good as the originals.
Still, it should be as similar as possible, so there shouldn't be any critical issues.
In that case, please report to the repository's issues.

**Q**: **I've bought a license, but I am still identified as a Free User!**

**A**: That means that you haven't activated your license yet. At the moment, the only way to do it, is to run the action to open the _Registration Modal_.

{% include figure.html content="/screens/activateLicense.png" caption="Activate License" %}

{% include figure.html content="/screens/license.png" caption="License" %}

**Important note**: Android Studio users, to activate the plugin (or any paid plugin), you need to install a plugin first:<https://plugins.jetbrains.com/plugin/13407-jetbrains-marketplace-licensing-support>.
