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

The Material Theme plugin comes with a bunch of features tailored for an optimal experience.
However, it's also highly configurable to allow every one to customize it to their hearts content.
{:class='title'}

{% include carbonads.html %}

## Themes and color schemes

### Theme switcher

The plugin comes prebundled with a set of themes interchangeables through the
![Theme Switcher](/img/icons/switcher.png) *Theme Switcher*.

{% include figure.html content="/screens/switcher.png" caption="Theme Switcher" %}

There are many ways to invoke the *Theme Switcher*:
- From the IDE menu `Tools → Material Theme → Material Theme Chooser`
- From the _Main Toolbar_
- From the `Search Everything` dialog, type `Material Theme`
- From the `Quick Switch` panel <kbd>(Ctrl + \`)</kbd> (Windows: <kbd>Ctrl + ~</kbd>)`
- From the `Status Bar Widget` (since version 7.4.0)

{% include figure.html content="/screens/quickswitch.png" caption="Quick Switch" %}

Or, since version 2.4.0, from the Settings at `Settings → Appearance → Material Theme`.

{% include figure.html content="/screens/switchSettings.png" caption="Switcher in Settings" %}

The plugin comes prebundled with {{ site.data.themes.material.size | plus: site.data.themes.material2.size | plus: site.data.themes.other.size | plus: site.data.themes.other2.size }} themes:

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

#### Custom theme

This feature is only available for premium users.
{:class='card-panel warn'}

Finally, there are the **Custom Themes**, which are the placeholder for the Custom Theme Settings, allowing you to set your own theme colors.

There are two options available, *Custom Theme* for dark themes and *Light Custom Theme* for light themes.

See [Custom Themes](/docs/configuration/custom-themes) for more information.

#### Native Themes (since 5.0)

From version 5.0 the plugin now supports **Native Themes** as well, that is, themes using JetBrains theme API.
When loading a native theme, the plugin would try to convert it into a Material Theme, 
thus allowing you to use the theme colors while using the Material Theme features such as the components, accent mode, etc.

You don't need to do anything to make it work, simply download a native theme and select it. 
It will be automatically converted to a theme format supported by the plugin.

Examples:

{% include figure.html content="/screens/intellij.png" caption="IntelliJ Light" %}

{% include figure.html content="/screens/darcula.png" caption="Darcula" %}

{% include figure.html content="/screens/gradianto.png" caption="Gradianto Theme" %}


#### External Themes (deprecated)

This feature is deprecated since version 6.10.0 in favor of the [native themes](https://plugins.jetbrains.com/search?tags=Theme).
{:class='card-panel warn'}

The plugin also exposes an endpoint allowing plugin developers to create and bundle their own custom themes, 
just like Color Schemes, Keymaps, Coding Styles, etc. 
To learn more about _External Themes_ or how to create your own plugin, 
head to the [External Themes section](/docs/development/external-themes).

Once the external theme has been downloaded and installed, it should appear at the bottom of the Switcher.

{% include figure.html content="/screens/external.png" caption="External Themes" %}

{% include figure.html content="/tutorial/externalList.png" caption="External Themes List" %}

----------
## Material theme settings

### Settings Page

Some settings are only available for premium users.
{:class='card-panel warn'}

You can configure many parts of the plugin features from the **plugin settings**.
They're available within the `Settings → Appearance → Material Theme → Settings`.

{% include figure.html content="/screens/settings.png" caption="Material Theme Settings v1" %}

Since version 2.4.0, the settings page has been remade to prevent overwhelming the user from the abundance of customization options.

Now settings are differentiated between basic and advanced settings, they're grouped within _tabs_, 
and a *Reset Settings* button has been added for easy factory resetting.

{% include figure.html content="/screens/settingsV2.png" caption="Material Theme Settings V2" %}

#### Summary

Quick explanation of all settings:

**[Main Settings](/docs/configuration/main-settings)**:
- *Selected Theme*: Select a _Theme_ from the prebundled themes.
- *Contrast Mode*: Add contrast to specific panels and components.
- *High Contrast*![premium](/img/icons/premium.png): Set a more pronounced contrast, by making the texts more prominent.
- *Custom Accent Color*: Set a custom accent color.
- *Override Accent Color*: Change the accent color accordingly to the selected theme.
- *Configure Custom Theme Colors*: Open the settings page for the _Custom Theme Colors_.

**[Tab Settings](/docs/configuration/tab-settings)**:
- *Tabs Height*: Customize the tabs' height (between `25` and `60` pixels).
- *Active Tab Highlight Color*![premium](/img/icons/premium.png): Customize the active tab's indicator color.
- *Thickness*![premium](/img/icons/premium.png): Set the active tab's indicator thickness.
- *Uppercase Tabs*![premium](/img/icons/premium.png): Set the Editor Tabs in Uppercase.
- *Bold Active Tab*![premium](/img/icons/premium.png): Make the Active Tab Bold.
- *Tab Highlight Position*![premium](/img/icons/premium.png): Customize the position of the tab highlighter.
- *Custom Tab Font*![premium](/img/icons/premium.png): Control the font and size of the Editor Tabs.

**[Compact Settings](/docs/configuration/compact-settings)**:
- *Compact Status Bar*: Reduce the height of the status bar.
- *Compact Table Cells*: Reduce the height of table headers and table cells.
- *Compact Dropdowns*: Reduce the size of dropdowns.
- *Compact Menus*: Reduce the size of the menus.
- *Custom List Items Height*: Control the size of items in lists and dropdowns (min: `18`, max: `48`).
- *Compact Fields*: Reduce the size of fields, such as input, numeric and passwords.

**[Project View Settings](/docs/configuration/project-view-settings)**:
- *Custom Tree Items Height*![premium](/img/icons/premium.png): Set custom line height in trees (min: `18`, max: `44`).
- *Custom Tree Indent*![premium](/img/icons/premium.png): Fine tune indent of tree items.
  - You can configure both the *Left* and *Right* indents. 
- *Selected Indicator Style*![premium](/img/icons/premium.png): Change the style of the indicator for selected item in trees.
  - *Border*: Add a small rounded border to the left
  - *Dot*: Add a dot on the selected item
  - *Sharp*: Add a small sharp border to the left
  - *None*: Remove the indicator
- *Thickness*![premium](/img/icons/premium.png): Control the thickness of the indicator.
- *Custom Directories Style*![premium](/img/icons/premium.png): Assign a specific style to directories. Can be configured from the *Custom File Colors* settings page.
- *Custom Tree Font*![premium](/img/icons/premium.png): Fine tune the font and size of the project trees (requires restart).

**[Component Settings](/docs/configuration/component-settings)**:
- *Old Material Design Style*: Reverts to the old Material Design style of 2016–2021.
- *Uppercase buttons*: Set the buttons' texts to uppercase.
- *Outlined buttons*![premium](/img/icons/premium.png): Use outline buttons instead of full buttons.
- *Transparent Scrollbars*: Enable/Disable transparency in scrollbars (requires restart).
- *Accent Scrollbars*: Set the color of the scrollbars to the accent color (requires restart).
- *Tabs Shadow*![premium](/img/icons/premium.png): Add a subtle shadow under the tabs.
- *Inverted Completion Selection Color*: Switch the Autocomplete selected item color between the selection color and contrast color.

**[Features Settings](/docs/configuration/features-settings)**:
- *Custom UI Font*: Set your own custom UI Font. Supplements the IDE's [_Custom Font_](https://www.jetbrains.com/help/idea/settings-appearance.html).
- *Use Editor Default Font*![premium](/img/icons/premium.png): Automatically update color schemes to use the default font of your choice.
- *Material File Status Colors*: Enable/Disable the [Material File Status Colors](/docs/configuration/file-status-colors).
- *Material Wallpapers*![premium](/img/icons/premium.png): Add a custom wallpaper per theme for the empty frame window.
- *Show Overlays*: Displays an overlay when modals are open.
- *Accent Mode*![premium](/img/icons/premium.png): Make components stand out by setting them in the accent color (buttons, tabs, selections…).
  - *Second Accent Color*: When _Accent Mode_ is on, sets a second accent color to contrast with the primary accent color.
- *Experimental New UI*: Enables a new **EXPERIMENTAL** UI for the IDE. Please use it with caution, as it may contain many bugs and breaking changes.

**[Project Frame Settings](/docs/configuration/project-frame-settings)**:
- *Project Frame Colors*![premium](/img/icons/premium.png): Add a colored stripe on the top of each project window for easier differentiation.
- *Show Project Name*![premium](/img/icons/premium.png): Displays the _project name_ on the stripe.
- *Show Project Icon*![premium](/img/icons/premium.png): Display the _project's custom icon_ on the stripe.
- *Customize Text*![premium](/img/icons/premium.png): Customize the displayed text.
  - You can use the keywords `{project}`, `{module}` and `{file}` to refer respectively to the current project, module and/or file.

**[Other Tweaks](/docs/configuration/other-tweaks-settings)**:
- *Language Additions*![premium](/img/icons/premium.png): Enable/Disable the [Language Additions](/docs/configuration/color-scheme-additions)
  - *Enforce Highlighting*: Enforce highlighting of keywords by making them appear as _"Weak Warnings"_.
- *Colored Open Directories*![premium](/img/icons/premium.png): Colorize open directories with the accent color.
- *Show What's New on each update*: Whether to display the [What's New](/docs/what-s-new) page on each update.
- *Automatically reset Color Scheme*: Automatically reset the color scheme on theme activation (_only for bundled color schemes_).

----

#### Project-specific settings

This feature is only available for premium users.
{:class='card-panel warn'}

These settings allow you to assign specific settings on a per-project basis:


**[Tab Settings](/docs/configuration/tab-settings)**:
- *Active Tab Highlight Color*![premium](/img/icons/premium.png): Customize the active tab's indicator color.
- *Thickness*![premium](/img/icons/premium.png): Set the active tab's indicator thickness.
- *Uppercase Tabs*![premium](/img/icons/premium.png): Set the Editor Tabs in Uppercase.
- *Bold Active Tab*![premium](/img/icons/premium.png): Make the Active Tab Bold.
- *Tab Highlight Position*![premium](/img/icons/premium.png): Customize the position of the tab highlighter.

**[Project Frame Settings](/docs/configuration/project-frame-settings)**:
- *Project Frame Colors*![premium](/img/icons/premium.png): Override the stripe color per project.
- *Show Project Name*![premium](/img/icons/premium.png): Display the project's name on the stripe.
- *Show Project Icon*![premium](/img/icons/premium.png): Display the project's custom icon on the stripe.
- *Customize Text*![premium](/img/icons/premium.png): Customize the text displayed.
  - You can use the keywords `{project}`, `{module}` and `{file}` to refer to the current project, module and/or file.

-----

#### Settings shortcuts

You can also quickly toggle some settings by using the _Search Everywhere_ or the _Command Panel_ functionality of the IDE.
Simply press `Shift-Shift` and type `Material Theme` to get the list of available toggles.

Same goes for the `Command Panel` (<kbd>Ctrl-Shift-A/Cmd-Shift-A</kbd>).

{% include figure.html content="/screens/cmdpanel.png" caption="Command Panel" %}

You can also use the `Keymap Editor` to assign your own custom shortcuts to these toggles.

#### Settings File

Your current configuration is stored inside the IDE settings' directory under the filenames: 
- **Main Settings**: `material_theme.xml`.
- **Custom Theme**: `material_custom_theme.xml`.
- **Per Project Settings**: `material_theme_project.xml`.

If, for some reason, there are issues with the plugin, or you don't manage to reset to a stable state, just delete these files and restart the IDE.

Read [IDE Settings](https://intellij-support.jetbrains.com/hc/en-us/articles/206544519-Directories-used-by-the-IDE-to-store-settings-caches-plugins-and-logs) 
and [Directories used by the IDE](https://www.jetbrains.com/help/idea/directories-used-by-the-ide-to-store-settings-caches-plugins-and-logs.html) 
to find out where are stored such configuration files.

The files in question should be located in the following directories:
- within `<config directory>/jba_config` if using [Settings Sync](https://www.jetbrains.com/help/idea/sharing-your-ide-settings.html#IDE_settings_sync)
- within `<config directory>/config` otherwise
- within each project's `.idea` directory for the **Per-Project Settings**.


----------
## Custom theme

This feature is only available for premium users.
{:class='card-panel warn'}

Aside from the bundled themes, you also have the ability to set up your own Material Theme.
You can do so by selecting `Custom Theme` in the theme list,
then customize the theme colors in the settings page at `Settings → Appearance → Material Custom Theme Settings`.

{% include figure.html content="/screens/customsettings.png" caption="Material Custom Theme Settings" %}

Once you set these colors, simply select the `Custom Theme` in the _Material Theme Chooser_ and see your colors take effect.

See [Custom Theme](/docs/configuration/custom-themes) for more details.

-----
## Advanced configuration

Here's a list of the keys used in the configuration file (`material_theme.xml`) with their default values.
If a key isn't in your file, it means that it uses the default value.

```xml
<component>
  <!-- Automatically reset the color scheme -->
  <option name="autoResetColorScheme" value="false" />
  <!-- Accent color -->
  <option name="accentColor" value="E91E63" />
  <!-- Accent scrollbars -->
  <option name="accentScrollbars" value="true" />
  <!-- Accent Mode -->
  <option name="accentMode" value="true" />
  <!-- Whether to send data analytics -->
  <option name="allowDataCollection" value="false" />
   <!-- Outlined Buttons -->
  <option name="borderedButtons" value="false" />
  <!-- Language Additions -->
  <option name="codeAdditionsEnabled" value="true" />
  <!-- Compact dropdowns enabled -->
  <option name="compactDropdowns" value="false" />
  <!-- Custom tree line height enabled -->
  <option name="compactSidebar" value="false" />
  <!-- Custom lists' item height -->
  <option name="customListItemsSizeEnabled" value="false" />
  <!-- Custom lists' line height if enabled -->
  <option name="customListItemsSize" value="28" />
  <!-- Custom tree line height if enabled -->
  <option name="customSidebarHeight" value="18" />
  <!-- Custom project frame text if enabled -->
  <option name="customTitle" value="{project}" />
  <!-- Themed Title Bar (deprecated since 2021.2) -->
  <!-- <option name="darkTitleBar" value="false" /> -->
  <!-- Enforced Language Additions -->
  <option name="enforcedLanguageAdditions" value="false" />
  <!-- Experimental UI -->
  <option name="expUIEnabled" value="false" />
  <!-- File Status Colors enabled-->
  <option name="fileStatusColorsEnabled" value="false" />
  <!-- Tab highlight color -->
  <option name="highlightColor" value="E91E63" />
  <!-- Tab highlight thickness -->
  <option name="highlightThickness" value="2" />
  <!-- Indicator Style (Border/Dot/Sharp/None) -->
  <option name="indicatorStyle" value="Border" />
  <!-- Indicator Thickness -->
  <option name="indicatorThickness" value="2" />
  <!-- Bold Active Tab-->
  <option name="isActiveBoldTab" value="false" />
  <!-- Tab highlight color enabled -->
  <option name="isHighlightColorEnabled" value="false" />
  <!-- Compact menus -->
  <option name="isCompactMenus" value="false" />
  <!-- Compact status bar enabled -->
  <option name="isCompactStatusBar" value="false" />
  <!-- Compact table cells enabled -->
  <option name="isCompactTables" value="false" />
  <!-- Compact fields enabled -->
  <option name="isCompactFields" value="false" />
  <!-- Contrast mode enabled -->
  <option name="isContrastMode" value="false" />
  <!-- Custom tree indent enabled -->
  <option name="isCustomTreeIndentEnabled" value="false" />
  <!-- High Contrast -->
  <option name="isHighContrast" value="false" />
   <!-- Inverted Selection Color -->
  <option name="isInvertedSelectionColor" value="false" />
  <!-- Old Material Design Style enabled -->
  <option name="isMaterialDesign2" value="false" />
  <!-- Material Theme enabled (deprecated) -->
  <!--  <option name="isMaterialDesign2" value="false" />-->
  <!-- Custom Wallpapers -->
  <option name="isMaterialWallpapers" value="true" />
  <!-- Styled folders enabled -->
  <option name="isStyledDirectories" value="false" />
  <!-- Tabs Shadow -->
  <option name="isTabsShadow" value="true" />
  <!-- Whether to show the wizard at start -->
  <option name="isWizardShown" value="true" />
  <!-- Left tree indent  -->
  <option name="leftTreeIndent" value="6" />
  <!-- Override accent color enabled -->
  <option name="overrideAccentColor" value="true" />
  <!-- Right tree indent  -->
  <option name="rightTreeIndent" value="6" />
  <!-- Second Accent Color when in Accent Mode -->
  <option name="secondAccentColor" value="80CBC4" />
  <!-- Selected Theme -->
  <option name="selectedTheme" value="OCEANIC" />
  <!-- Last selected tab in the settings -->
  <option name="settingsSelectedTab" value="0" />
  <!-- Show Overlays -->
  <option name="showOverlays" value="true" />
  <!-- Large Tool Windows -->
  <option name="stripedToolWindowsEnabled" value="true" />
  <!-- Show What's New Window on updates -->
  <option name="showWhatsNew" value="true" />
  <!-- Status bar indicator (moved to a status bar context menu) -->
  <!-- <option name="statusBarTheme" value="true" /> -->
  <!-- Tab Highlight Position -->
  <option name="tabHighlightPosition" value="Default" />
  <!-- Tab Opacity (deprecated) -->
  <!-- <option name="tabOpacity" value="50" /> -->
  <!-- Transparent scrollbars -->
  <option name="themedScrollbars" value="true" />
  <!-- Custom Tab Font if enabled -->
  <option name="tabFont" value="Roboto" />
  <!-- Tab Font Size -->
  <option name="tabFontSize" value="12" />
  <!-- Tab Font Size Enabled -->
  <option name="tabFontSizeEnabled" value="false" />
  <!-- Tab height -->
  <option name="tabsHeight" value="32" />
  <!-- Custom Tree Font if enabled -->
  <option name="treeFont" value="Roboto" />
  <!-- Project View Font Size -->
  <option name="treeFontSize" value="12" />
  <!-- Project View Font Size Enabled -->
  <option name="treeFontSizeEnabled" value="false" />
  <!-- Uppercase buttons -->
  <option name="uppercaseButtons" value="true" />
  <!-- Bold and uppercase tabs enabled -->
  <option name="upperCaseTabs" value="false" />
  <!-- Custom UI Font if enabled -->
  <option name="uiFont" value="Roboto" />
  <!-- Colored Open Directories -->
  <option name="useColoredDirectories" value="false" />
  <!-- Project Frame Custom Title -->
  <option name="useCustomTitle" value="false" />
  <!-- Use Editor Default fonts enabled -->
  <option name="useGlobalFont" value="false" />
  <!-- Custom UI Font enabled -->
  <option name="useMaterialFont2" value="false" />
  <!-- Material wallpapers enabled -->
  <option name="useMaterialWallpapers" value="false" />
  <!-- Project Frame -->
  <option name="useProjectFrame" value="false" />
  <!-- Show Project Title in Project Frame -->
  <option name="useProjectTitle" value="true" />
  <!-- Show Project Icon in Project Frame -->
  <option name="useProjectIcon" value="true" />
</component>

```

## Frequently Asked Questions

**Q**: **I've updated the IDE/plugin to a new version, and now I get an error about the plugin failing to initialize?**

**A**: It could come from multiple issues, but it could simply be a problem with the settings not being compatible to the new version. 
In that case, simply make a copy of the settings file, then delete the original file, and restart the IDE.

If the issue is gone, simply go back to the settings and go back to your previous configuration manually. 
If the issue persists, please report it in the Issues Section.

**Q**: **I've removed the plugin, and still the background image persists!**

**A**: This is an issue hard to resolve, because the *Custom Wallpaper* function is using the `Set Background image` function from the IDE behind the curtains. 
Therefore, removing the plugin might not remove the set image completely.
If that occurs, you can remove the image by opening the Command Panel (`Cmd-Shift-A/Ctrl-Shift-A`) 
and type `Set Background image` and then manually remove the image, or go into `Settings → Appearance → Background Image`.


**Q**: **What is that analytics option? What data are collected?**

**A**: This is an option to allow sending data to Material Theme servers about users' configuration, usage and trends.
These metrics allow us to find out which features are most used or least used,
in order to prioritize development of features, or maybe notify users about specific features, to provide better satisfaction.

These data are completely anonymous, and aren't shared/sold to any third parties.
If you want to stop sending data, simply turn off the option in the `material_theme.xml`.

**Q**: **My settings are lost/jumbled up!**

**A**: As the plugin evolves, sometimes settings are modified or removed, and as a result it can jumble your configuration files.
We're trying our best to limit such issues, but they can happen nonetheless. 

If you find yourself being unable to use the plugin or even run the IDE, try to delete your configuration files, 
or at least try to delete specific properties until the IDE launches again.

**Q**: **The wizard idea was great! But I've made a mistake, and the wizard won't show up anymore!**

**A**: The wizard shows only once and only when you don't have the `isWizardShown` option set to true in the config file. 
But you can reopen it by simply clicking on the action from the [Material Theme Toolbar](/docs/configuration/quick-actions-panel), in the Features menu.

**Q**: **Where have all the icons gone?**

**A**:
Since 5.0.0, the icons related settings have been moved to the [Atom Material Icons plugin](https://plugins.jetbrains.com/plugin/10044-atom-material-icons), 
another plugin developed by the Material Theme team. 
This is in order to encourage developers to develop _Icon Themes_, as the plugin is now free of icons.

**Q**: **I've downloaded a theme from the Plugins Page, and now I'm seeing texts that aren't themed, or checkboxes that are wrongly colored, etc…**

**A**: This is because these are native themes, and such themes use the Theme API provided by JetBrains rather than the API used by the Material Themes. 
Even though the plugin tries to convert it to its own format, it won't be as good as the originals.
Still, it should be as similar as possible, so there shouldn't be any critical issues.
In that case, please report to the repository's issues.

**Q**: **I've bought a license, but I am still identified as a Free User!**

**A**: That means that you haven't activated your license yet. At the moment, the only way to do it, is to run the action to open the _Registration Modal_.


{% include figure.html content="/screens/activateLicense.png" caption="Activate License" %}

{% include figure.html content="/screens/license.png" caption="License" %}

**Important note**: Android Studio users, in order to activate the plugin (or any paid plugin), 
you need to install a plugin first:<https://plugins.jetbrains.com/plugin/13407-jetbrains-marketplace-licensing-support>.
