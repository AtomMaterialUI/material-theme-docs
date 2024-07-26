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

You don't need to do anything to make it work, simply download a native theme and select it.
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

Last but not least, since version 9.0 the plugin also comes with an **Adaptive Theme**.
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

[//]: # ()
[//]: # (#### Summary)

[//]: # ()
[//]: # (Quick explanation of all settings:)

[//]: # ()
[//]: # (**[Main Settings]&#40;/docs/configuration/main-settings&#41;**:)

[//]: # ()
[//]: # (- *Selected Theme*: Select a _Theme_ from the prebundled themes.)

[//]: # (- *Contrast Mode*: Add contrast to specific panels and components.)

[//]: # (- *High Contrast*![premium]&#40;/img/icons/premium.png&#41;: Set a more pronounced contrast, by making the texts more prominent.)

[//]: # (- *Custom Accent Color*: Set a custom accent color.)

[//]: # (- *Override Accent Color*: Change the accent color accordingly to the selected theme.)

[//]: # (- *Configure Custom Theme Colors*: Open the settings page for the _Custom Theme Colors_.)

[//]: # ()
[//]: # (**[Tab Settings]&#40;/docs/configuration/tab-settings&#41;**:)

[//]: # ()
[//]: # (- *Tabs Height*: Customize the tabs' height &#40;between `25` and `60` pixels&#41;.)

[//]: # (- *Active Tab Highlight Color*![premium]&#40;/img/icons/premium.png&#41;: Customize the active tab's indicator color.)

[//]: # (- *Thickness*![premium]&#40;/img/icons/premium.png&#41;: Set the active tab's indicator thickness.)

[//]: # (- *Uppercase Tabs*![premium]&#40;/img/icons/premium.png&#41;: Set the Editor Tabs in Uppercase.)

[//]: # (- *Bold Active Tab*![premium]&#40;/img/icons/premium.png&#41;: Make the Active Tab Bold.)

[//]: # (- *Tab Highlight Position*![premium]&#40;/img/icons/premium.png&#41;: Customize the position of the tab highlighter.)

[//]: # (- *Custom Tab Font*![premium]&#40;/img/icons/premium.png&#41;: Control the font and size of the Editor Tabs.)

[//]: # (- *Tabs Animations*: Animate the tab indicator upon switching tabs)

[//]: # (- *Tab Separators*: Add thin borders between tabs)

[//]: # ()
[//]: # (**[Compact Settings]&#40;/docs/configuration/compact-settings&#41;**:)

[//]: # ()
[//]: # (- *Compact Status Bar*: Reduce the height of the status bar.)

[//]: # (- *Compact Table Cells*: Reduce the height of table headers and table cells.)

[//]: # (- *Compact Dropdowns*: Reduce the size of dropdowns.)

[//]: # (- *Compact Menus*: Reduce the size of the menus.)

[//]: # (- *Custom List Items Height*: Control the size of items in lists and dropdowns &#40;min: `18`, max: `48`&#41;.)

[//]: # (- *Compact Fields*: Reduce the size of fields, such as input, numeric and passwords.)

[//]: # ()
[//]: # (**[Project View Settings]&#40;/docs/configuration/project-view-settings&#41;**:)

[//]: # ()
[//]: # (- *Custom Tree Items Height*![premium]&#40;/img/icons/premium.png&#41;: Set custom line height in trees &#40;min: `18`, max: `44`&#41;.)

[//]: # (- *Custom Tree Indent*![premium]&#40;/img/icons/premium.png&#41;: Fine tune indent of tree items.)

[//]: # (    - You can configure both the *Left* and *Right* indents.)

[//]: # (- *Selected Indicator Style*![premium]&#40;/img/icons/premium.png&#41;: Change the style of the indicator for selected item in trees.)

[//]: # (    - *Border*: Add a small rounded border to the left)

[//]: # (    - *Dot*: Add a dot on the selected item)

[//]: # (    - *Sharp*: Add a small sharp border to the left)

[//]: # (    - *None*: Remove the indicator)

[//]: # (- *Thickness*![premium]&#40;/img/icons/premium.png&#41;: Control the thickness of the indicator.)

[//]: # (- *Custom Directories Style*![premium]&#40;/img/icons/premium.png&#41;: Assign a specific style to directories. Can be configured from the *Custom File Colors* settings)

[//]: # (  page.)

[//]: # (- *Custom Tree Font*![premium]&#40;/img/icons/premium.png&#41;: Fine tune the font and size of the project trees.)

[//]: # ()
[//]: # (**[Component Settings]&#40;/docs/configuration/component-settings&#41;**:)

[//]: # ()
[//]: # (- *Old Material Design Style*: Reverts to the old Material Design style of 2016–2021.)

[//]: # (- *Uppercase buttons*: Set the buttons' texts to uppercase.)

[//]: # (- *Outlined buttons*![premium]&#40;/img/icons/premium.png&#41;: Use outline buttons instead of full buttons.)

[//]: # (- *Transparent Scrollbars*: Enable/Disable transparency in scrollbars &#40;requires restart&#41;.)

[//]: # (- *Accent Scrollbars*: Set the color of the scrollbars to the accent color &#40;requires restart&#41;.)

[//]: # (- *Tabs Shadow*![premium]&#40;/img/icons/premium.png&#41;: Add a subtle shadow under the tabs.)

[//]: # (- *Shadows*![premium]&#40;/img/icons/premium.png&#41;: Add a subtle shadow around notifications and some popups.)

[//]: # (- *Inverted Completion Selection Color*: Switch the _Autocomplete_'s selected item color between the selection color and contrast color.)

[//]: # (- *Animated Tool Windows*: Animate opening and closing on tool windows when they are undocked.)

[//]: # ()
[//]: # (**[Features Settings]&#40;/docs/configuration/features-settings&#41;**:)

[//]: # ()
[//]: # (- *Custom UI Font*: Set your own custom UI Font. Supplements the IDE's [_Custom Font_]&#40;https://www.jetbrains.com/help/idea/settings-appearance.html&#41;.)

[//]: # (- *Use Editor Default Font*![premium]&#40;/img/icons/premium.png&#41;: Automatically update color schemes to use the default font of your choice.)

[//]: # (- *Material File Status Colors*: Enable/Disable the [Material File Status Colors]&#40;/docs/configuration/file-status-colors&#41;.)

[//]: # (- *Material Wallpapers*![premium]&#40;/img/icons/premium.png&#41;: Add a custom wallpaper per theme for the empty frame window.)

[//]: # (- *Show Overlays*: Displays an overlay when modals are open.)

[//]: # (- *Accent Mode*![premium]&#40;/img/icons/premium.png&#41;: Make components stand out by setting them in the accent color &#40;buttons, tabs, selections…&#41;.)

[//]: # (    - *Second Accent Color*: When _Accent Mode_ is on, sets a second accent color to contrast with the primary accent color.)

[//]: # ()
[//]: # (**[Project Frame Settings]&#40;/docs/configuration/project-frame-settings&#41;**:)

[//]: # ()
[//]: # (- *Project Frame Colors*![premium]&#40;/img/icons/premium.png&#41;: Add a colored stripe on the top of each project window for easier differentiation.)

[//]: # (- *Colorize Title Bar*![premium]&#40;/img/icons/premium.png&#41;: Colorizes the title bar as well &#40;only for the New UI!&#41;.)

[//]: # (- *Show Project Name*![premium]&#40;/img/icons/premium.png&#41;: Displays the _project name_ on the stripe.)

[//]: # (- *Show Project Icon*![premium]&#40;/img/icons/premium.png&#41;: Display the _project's custom icon_ on the stripe.)

[//]: # (- *Customize Text*![premium]&#40;/img/icons/premium.png&#41;: Customize the displayed text.)

[//]: # (    - You can use the keywords `{project}`, `{module}`, `{fullPath}`, `{path}` and `{file}` to refer respectively to the current project, module, full path,)

[//]: # (      local path and/or current file.)

[//]: # ()
[//]: # (**[Other Tweaks]&#40;/docs/configuration/other-tweaks-settings&#41;**:)

[//]: # ()
[//]: # (- *Language Additions*![premium]&#40;/img/icons/premium.png&#41;: Enable/Disable the [Language Additions]&#40;/docs/configuration/color-scheme-additions&#41;)

[//]: # (- *Focus Mode*![premium]&#40;/img/icons/premium.png&#41;: Increases focus on the current editing scope by making other parts dimmer.)

[//]: # (    - *Override Focus Color from Theme*: Sets the color of the "unfocused" parts from the current theme.)

[//]: # (    - *Custom Focus Color*: Set your own unfocused color)

[//]: # (- *Colored Open Directories*![premium]&#40;/img/icons/premium.png&#41;: Colorize open directories with the accent color.)

[//]: # (- *Show What's New on each update*: Whether to display the [What's New]&#40;/docs/what-s-new&#41; page on each update.)

[//]: # (- *Automatically reset Color Scheme*: Automatically reset the color scheme on theme activation &#40;_only for bundled color schemes_&#41;.)

[//]: # (- *Show Wizard on Welcome Screen*: Add or remove the Wizard option in the Welcome Screen.)

[//]: # ()
[//]: # (----)

[//]: # ()
[//]: # (#### Project-specific settings)

[//]: # ()
[//]: # (This feature is only available for premium users.)

[//]: # ({:class='card-panel warn'})

[//]: # ()
[//]: # (These settings allow you to assign specific settings on a per-project basis:)

[//]: # ()
[//]: # (**[Tab Settings]&#40;/docs/configuration/tab-settings&#41;**:)

[//]: # ()
[//]: # (- *Active Tab Highlight Color*![premium]&#40;/img/icons/premium.png&#41;: Customize the active tab's indicator color.)

[//]: # (- *Thickness*![premium]&#40;/img/icons/premium.png&#41;: Set the active tab's indicator thickness.)

[//]: # (- *Uppercase Tabs*![premium]&#40;/img/icons/premium.png&#41;: Set the Editor Tabs in Uppercase.)

[//]: # (- *Bold Active Tab*![premium]&#40;/img/icons/premium.png&#41;: Make the Active Tab Bold.)

[//]: # (- *Tab Highlight Position*![premium]&#40;/img/icons/premium.png&#41;: Customize the position of the tab highlighter.)

[//]: # ()
[//]: # (**[Project Frame Settings]&#40;/docs/configuration/project-frame-settings&#41;**:)

[//]: # ()
[//]: # (- *Project Frame Colors*![premium]&#40;/img/icons/premium.png&#41;: Override the stripe color per project.)

[//]: # (- *Show Project Name*![premium]&#40;/img/icons/premium.png&#41;: Display the project's name on the stripe.)

[//]: # (- *Show Project Icon*![premium]&#40;/img/icons/premium.png&#41;: Display the project's custom icon on the stripe.)

[//]: # (- *Customize Text*![premium]&#40;/img/icons/premium.png&#41;: Customize the text displayed.)

[//]: # (    - You can use the keywords `{project}`, `{module}` and `{file}` to refer to the current project, module and/or file.)

[//]: # ()
[//]: # (-----)

[//]: # ()
[//]: # (#### Settings shortcuts)

[//]: # ()
[//]: # (You can also quickly toggle some settings by using the _Search Everywhere_ or the _Command Panel_ capability of the IDE.)

[//]: # (Simply press `Shift-Shift` and type `Material Theme` to get the list of available toggles.)

[//]: # ()
[//]: # (Same goes for the `Command Panel` &#40;<kbd>Ctrl-Shift-A/Cmd-Shift-A</kbd>&#41;.)

[//]: # ()
[//]: # ({% include figure.html content="/screens/cmdpanel.png" caption="Command Panel" %})

[//]: # ()
[//]: # (You can also use the `Keymap Editor` to assign your own custom shortcuts to these toggles.)

[//]: # ()
[//]: # (#### Settings File)

[//]: # ()
[//]: # (Your current configuration is stored inside the IDE settings' directory under the filenames:)

[//]: # ()
[//]: # (- **Main Settings**: `material_theme_new.xml`.)

[//]: # (- **Custom Theme**: `material_custom_theme_new.xml`.)

[//]: # (- **Per Project Settings**: `material_theme_project.xml`.)

[//]: # ()
[//]: # (If, for some reason, there are issues with the plugin, or you don't manage to reset to a stable state, just delete these files and restart the IDE.)

[//]: # ()
[//]: # (Read [IDE Settings]&#40;https://intellij-support.jetbrains.com/hc/en-us/articles/206544519-Directories-used-by-the-IDE-to-store-settings-caches-plugins-and-logs&#41;)

[//]: # (and [Directories used by the IDE]&#40;https://www.jetbrains.com/help/idea/directories-used-by-the-ide-to-store-settings-caches-plugins-and-logs.html&#41;)

[//]: # (to find out where are stored such configuration files.)

[//]: # ()
[//]: # (The files in question should be located in the following directories:)

[//]: # ()
[//]: # (- within `<config directory>/jba_config` if using [Settings Sync]&#40;https://www.jetbrains.com/help/idea/sharing-your-ide-settings.html#IDE_settings_sync&#41;)

[//]: # (- within `<config directory>/config` otherwise)

[//]: # (- within each project's `.idea` directory for the **Per-Project Settings**.)

[//]: # ()
[//]: # (----------)

[//]: # ()
[//]: # (## Custom theme)

[//]: # ()
[//]: # (This feature is only available for premium users.)

[//]: # ({:class='card-panel warn'})

[//]: # ()
[//]: # (Aside from the bundled themes, you also have the ability to set up your own Material Theme.)

[//]: # (You can do so by selecting `Custom Theme` in the theme list,)

[//]: # (then customize the theme colors in the settings page at `Settings → Appearance → Material Custom Theme Settings`.)

[//]: # ()
[//]: # ({% include figure.html content="/screens/customsettings.png" caption="Material Custom Theme Settings" %})

[//]: # ()
[//]: # (Once you set these colors, simply select the `Custom Theme` in the _Material Theme Chooser_ and see your colors take effect.)

[//]: # ()
[//]: # (See [Custom Theme]&#40;/docs/configuration/custom-themes&#41; for more details.)

[//]: # ()
[//]: # (-----)

[//]: # ()
[//]: # (## Advanced configuration)

[//]: # ()
[//]: # (Here's a list of the keys used in the configuration file &#40;`material_theme.xml`&#41; with their default values.)

[//]: # (If a key isn't in your file, it means that it uses the default value.)

[//]: # ()
[//]: # (```xml)

[//]: # ()
[//]: # (<component>)

[//]: # (    <!-- Automatically reset the color scheme -->)

[//]: # (    <option name="autoResetColorScheme" value="false"/>)

[//]: # (    <!-- Accent color -->)

[//]: # (    <option name="accentColor" value="E91E63"/>)

[//]: # (    <!-- Accent scrollbars -->)

[//]: # (    <option name="accentScrollbars" value="true"/>)

[//]: # (    <!-- Accent Mode -->)

[//]: # (    <option name="accentMode" value="true"/>)

[//]: # (    <!-- Whether to send data analytics -->)

[//]: # (    <option name="allowDataCollection" value="false"/>)

[//]: # (    <!-- Outlined Buttons -->)

[//]: # (    <option name="borderedButtons" value="false"/>)

[//]: # (    <!-- Language Additions -->)

[//]: # (    <option name="codeAdditionsEnabled" value="true"/>)

[//]: # (    <!-- Compact dropdowns enabled -->)

[//]: # (    <option name="compactDropdowns" value="false"/>)

[//]: # (    <!-- Custom tree line height enabled -->)

[//]: # (    <option name="compactSidebar" value="false"/>)

[//]: # (    <!-- Custom lists' item height -->)

[//]: # (    <option name="customListItemsSizeEnabled" value="false"/>)

[//]: # (    <!-- Custom lists' line height if enabled -->)

[//]: # (    <option name="customListItemsSize" value="28"/>)

[//]: # (    <!-- Custom tree line height if enabled -->)

[//]: # (    <option name="customSidebarHeight" value="18"/>)

[//]: # (    <!-- Custom project frame text if enabled -->)

[//]: # (    <option name="customTitle" value="{project}"/>)

[//]: # (    <!-- Themed Title Bar &#40;deprecated since 2021.2&#41; -->)

[//]: # (    <!-- <option name="darkTitleBar" value="false" /> -->)

[//]: # (    <!-- Enforced Language Additions -->)

[//]: # (    <option name="enforcedLanguageAdditions" value="false"/>)

[//]: # (    <!-- Experimental UI &#40;deprecated since 2022.1&#41; -->)

[//]: # (    <!-- <option name="expUIEnabled" value="false"/>-->)

[//]: # (    <!-- File Status Colors enabled-->)

[//]: # (    <option name="fileStatusColorsEnabled" value="false"/>)

[//]: # (    <!-- Custom focus color when in Focus Mode -->)

[//]: # (    <option name="focusColor" value="424242"/>)

[//]: # (    <!-- Tab highlight color -->)

[//]: # (    <option name="highlightColor" value="E91E63"/>)

[//]: # (    <!-- Tab highlight thickness -->)

[//]: # (    <option name="highlightThickness" value="2"/>)

[//]: # (    <!-- Indicator Style &#40;Border/Dot/Sharp/None&#41; -->)

[//]: # (    <option name="indicatorStyle" value="Border"/>)

[//]: # (    <!-- Indicator Thickness -->)

[//]: # (    <option name="indicatorThickness" value="2"/>)

[//]: # (    <!-- Animated Tabs -->)

[//]: # (    <option name="isAnimatedTabs" value="true"/>)

[//]: # (    <!-- Bold Active Tab-->)

[//]: # (    <option name="isActiveBoldTab" value="false"/>)

[//]: # (    <!-- Tab highlight color enabled -->)

[//]: # (    <option name="isHighlightColorEnabled" value="false"/>)

[//]: # (    <!-- Compact menus -->)

[//]: # (    <option name="isCompactMenus" value="false"/>)

[//]: # (    <!-- Compact status bar enabled -->)

[//]: # (    <option name="isCompactStatusBar" value="false"/>)

[//]: # (    <!-- Compact table cells enabled -->)

[//]: # (    <option name="isCompactTables" value="false"/>)

[//]: # (    <!-- Compact fields enabled -->)

[//]: # (    <option name="isCompactFields" value="false"/>)

[//]: # (    <!-- Contrast mode enabled -->)

[//]: # (    <option name="isContrastMode" value="false"/>)

[//]: # (    <!-- Custom tree indent enabled -->)

[//]: # (    <option name="isCustomTreeIndentEnabled" value="false"/>)

[//]: # (    <!-- Focus Mode Enabled -->)

[//]: # (    <option name="isFocusModeEnabled" value="false"/>)

[//]: # (    <!-- High Contrast -->)

[//]: # (    <option name="isHighContrast" value="false"/>)

[//]: # (    <!-- Inverted Selection Color -->)

[//]: # (    <option name="isInvertedSelectionColor" value="false"/>)

[//]: # (    <!-- Old Material Design Style enabled -->)

[//]: # (    <option name="isMaterialDesign2" value="false"/>)

[//]: # (    <!-- Custom Wallpapers -->)

[//]: # (    <option name="isMaterialWallpapers" value="true"/>)

[//]: # (    <!-- Styled folders enabled -->)

[//]: # (    <option name="isStyledDirectories" value="false"/>)

[//]: # (    <!-- Animated tool windows enabled -->)

[//]: # (    <option name="isAnimatedToolWindows" value="true"/>)

[//]: # (    <!-- Tabs Shadow -->)

[//]: # (    <option name="isTabsShadow" value="true"/>)

[//]: # (    <!-- Notifications shadows -->)

[//]: # (    <option name="useShadows" value="false"/>)

[//]: # (    <!-- Tab Separators -->)

[//]: # (    <option name="isTabSeparatorsEnabled" value="true"/>)

[//]: # (    <!-- Whether to show the wizard at start -->)

[//]: # (    <option name="isWizardShown" value="true"/>)

[//]: # (    <!-- Show or hide the wizard option on welcome screen -->)

[//]: # (    <option name="isShowWizardOnWelcome" value="true"/>)

[//]: # (    <!-- Left tree indent  -->)

[//]: # (    <option name="leftTreeIndent" value="6"/>)

[//]: # (    <!-- Override accent color enabled -->)

[//]: # (    <option name="overrideAccentColor" value="true"/>)

[//]: # (    <!-- Override focus color enabled -->)

[//]: # (    <option name="overrideFocusColor" value="true"/>)

[//]: # (    <!-- Right tree indent  -->)

[//]: # (    <option name="rightTreeIndent" value="6"/>)

[//]: # (    <!-- Second Accent Color when in Accent Mode -->)

[//]: # (    <option name="secondAccentColor" value="80CBC4"/>)

[//]: # (    <!-- Selected Theme -->)

[//]: # (    <option name="selectedTheme" value="OCEANIC"/>)

[//]: # (    <!-- Last selected tab in the settings -->)

[//]: # (    <option name="settingsSelectedTab" value="0"/>)

[//]: # (    <!-- Show Overlays -->)

[//]: # (    <option name="showOverlays" value="true"/>)

[//]: # (    <!-- Large Tool Windows -->)

[//]: # (    <option name="stripedToolWindowsEnabled" value="true"/>)

[//]: # (    <!-- Show What's New Window on updates -->)

[//]: # (    <option name="showWhatsNew" value="true"/>)

[//]: # (    <!-- Status bar indicator &#40;moved to a status bar context menu&#41; -->)

[//]: # (    <!-- <option name="statusBarTheme" value="true" /> -->)

[//]: # (    <!-- Tab Highlight Position -->)

[//]: # (    <option name="tabHighlightPosition" value="Default"/>)

[//]: # (    <!-- Tab Opacity &#40;deprecated&#41; -->)

[//]: # (    <!-- <option name="tabOpacity" value="50" /> -->)

[//]: # (    <!-- Transparent scrollbars -->)

[//]: # (    <option name="themedScrollbars" value="true"/>)

[//]: # (    <!-- Custom Tab Font if enabled -->)

[//]: # (    <option name="tabFont" value="Roboto"/>)

[//]: # (    <!-- Tab Font Size -->)

[//]: # (    <option name="tabFontSize" value="12"/>)

[//]: # (    <!-- Tab Font Size Enabled -->)

[//]: # (    <option name="tabFontSizeEnabled" value="false"/>)

[//]: # (    <!-- Tab height -->)

[//]: # (    <option name="tabsHeight" value="32"/>)

[//]: # (    <!-- Custom Tree Font if enabled -->)

[//]: # (    <option name="treeFont" value="Roboto"/>)

[//]: # (    <!-- Project View Font Size -->)

[//]: # (    <option name="treeFontSize" value="12"/>)

[//]: # (    <!-- Project View Font Size Enabled -->)

[//]: # (    <option name="treeFontSizeEnabled" value="false"/>)

[//]: # (    <!-- Uppercase buttons -->)

[//]: # (    <option name="uppercaseButtons" value="true"/>)

[//]: # (    <!-- Bold and uppercase tabs enabled -->)

[//]: # (    <option name="upperCaseTabs" value="false"/>)

[//]: # (    <!-- Custom UI Font if enabled -->)

[//]: # (    <option name="uiFont" value="Roboto"/>)

[//]: # (    <!-- Colored Open Directories -->)

[//]: # (    <option name="useColoredDirectories" value="false"/>)

[//]: # (    <!-- Project Frame Custom Title -->)

[//]: # (    <option name="useCustomTitle" value="false"/>)

[//]: # (    <!-- Use Editor Default fonts enabled -->)

[//]: # (    <option name="useGlobalFont" value="false"/>)

[//]: # (    <!-- Custom UI Font enabled -->)

[//]: # (    <option name="useMaterialFont2" value="false"/>)

[//]: # (    <!-- Material wallpapers enabled -->)

[//]: # (    <option name="useMaterialWallpapers" value="false"/>)

[//]: # (    <!-- Project Frame -->)

[//]: # (    <option name="useProjectFrame" value="false"/>)

[//]: # (    <!-- Show Project Title in Project Frame -->)

[//]: # (    <option name="useProjectTitle" value="true"/>)

[//]: # (    <!-- Show Project Icon in Project Frame -->)

[//]: # (    <option name="useProjectIcon" value="true"/>)

[//]: # (</component>)

[//]: # ()
[//]: # (```)

[//]: # ()
[//]: # (## Frequently Asked Questions)

[//]: # ()
[//]: # (**Q**: **I've updated the IDE/plugin to a new version, and now I get an error about the plugin failing to initialize?**)

[//]: # ()
[//]: # (**A**: It could come from multiple issues, but it could simply be a problem with the settings not being compatible to the new version.)

[//]: # (In that case, simply make a copy of the settings file, then delete the original file, and restart the IDE.)

[//]: # ()
[//]: # (If the issue is gone, simply go back to the settings and go back to your previous configuration manually.)

[//]: # (If the issue persists, please report it in the Issues Section.)

[//]: # ()
[//]: # (**Q**: **I've removed the plugin, and still the background image persists!**)

[//]: # ()
[//]: # (**A**: This is an issue hard to resolve, because the *Custom Wallpaper* function is using the `Set Background image` function from the IDE behind the curtains.)

[//]: # (Therefore, removing the plugin might not remove the set image completely.)

[//]: # (If that occurs, you can remove the image by opening the Command Panel &#40;`Cmd-Shift-A/Ctrl-Shift-A`&#41;)

[//]: # (and type `Set Background image` and then manually remove the image, or go into `Settings → Appearance → Background Image`.)

[//]: # ()
[//]: # (**Q**: **What is that analytics option? What data are collected?**)

[//]: # ()
[//]: # (**A**: This is an option to allow sending data to Material Theme servers about users' configuration, usage and trends.)

[//]: # (These metrics allow us to find out which features are most used or least used,)

[//]: # (in order to prioritize development of features, or maybe notify users about specific features, to provide better satisfaction.)

[//]: # ()
[//]: # (These data are completely anonymous, and aren't shared/sold to any third parties.)

[//]: # (If you want to stop sending data, simply turn off the option in the `material_theme.xml`.)

[//]: # ()
[//]: # (**Q**: **My settings are lost/jumbled up!**)

[//]: # ()
[//]: # (**A**: As the plugin evolves, sometimes settings are modified or removed, and as a result it can jumble your configuration files.)

[//]: # (We're trying our best to limit such issues, but they can happen nonetheless.)

[//]: # ()
[//]: # (If you find yourself being unable to use the plugin or even run the IDE, try to delete your configuration files,)

[//]: # (or at least try to delete specific properties until the IDE launches again.)

[//]: # ()
[//]: # (**Q**: **The wizard idea was great! But I've made a mistake, and the wizard won't show up anymore!**)

[//]: # ()
[//]: # (**A**: The wizard shows only once and only when you don't have the `isWizardShown` option set to true in the config file.)

[//]: # (But you can reopen it by simply clicking on the action from the [Material Theme Toolbar]&#40;/docs/configuration/quick-actions-panel&#41;, on the Features menu.)

[//]: # ()
[//]: # (**Q**: **Where have all the icons gone?**)

[//]: # ()
[//]: # (**A**:)

[//]: # (Since 5.0.0, the icons related settings have been moved to the [Atom Material Icons plugin]&#40;https://plugins.jetbrains.com/plugin/10044-atom-material-icons&#41;,)

[//]: # (another plugin developed by the Material Theme team.)

[//]: # (This is in order to encourage developers to develop _Icon Themes_, as the plugin is now free of icons.)

[//]: # ()
[//]: # (**Q**: **I've downloaded a theme from the Plugins Page, and now I'm seeing texts that aren't themed, or checkboxes that are wrongly colored, etc…**)

[//]: # ()
[//]: # (**A**: This is because these are native themes, and such themes use the Theme API provided by JetBrains rather than the API used by the Material Themes.)

[//]: # (Even though the plugin tries to convert it to its own format, it won't be as good as the originals.)

[//]: # (Still, it should be as similar as possible, so there shouldn't be any critical issues.)

[//]: # (In that case, please report to the repository's issues.)

[//]: # ()
[//]: # (**Q**: **I've bought a license, but I am still identified as a Free User!**)

[//]: # ()
[//]: # (**A**: That means that you haven't activated your license yet. At the moment, the only way to do it, is to run the action to open the _Registration Modal_.)

[//]: # ()
[//]: # ({% include figure.html content="/screens/activateLicense.png" caption="Activate License" %})

[//]: # ()
[//]: # ({% include figure.html content="/screens/license.png" caption="License" %})

[//]: # ()
[//]: # (**Important note**: Android Studio users, in order to activate the plugin &#40;or any paid plugin&#41;,)

[//]: # (you need to install a plugin first:<https://plugins.jetbrains.com/plugin/13407-jetbrains-marketplace-licensing-support>.)
