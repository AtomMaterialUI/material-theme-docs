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

The Material Theme plugin comes with a bunch of features tailored for an optimal experience. However, it is also highly
configurable to allow every one to customize it to their hearts content.
{:class='title'}

{% include carbonads.html %}

## Themes and Color Schemes

### Theme Switcher

The plugin comes prebundled with a set of themes interchangeables through the
![Theme Switcher](/img/icons/switcher.png) *Theme Switcher*.

{% include figure.html content="/screens/switcher.png" caption="Theme Switcher" %}

There are many ways to invoke the *Theme Switcher*:
- From the IDE menu `Tools → Material Theme → Material Theme Chooser`
- From the _Main Toolbar_
- From the `Search Everything` dialog, type `Material Theme`
- From the `Quick Switch` panel <kbd>(Ctrl + \`)</kbd> (Windows: <kbd>Ctrl + ~</kbd>)`

{% include figure.html content="/screens/quickswitch.png" caption="Quick Switch" %}

Or, since version 2.4.0, from the Settings at `Settings → Appearance → Material Theme`.

{% include figure.html content="/screens/switchSettings.png" caption="Switcher in Settings" %}

**Note that this dropdown won't show the [External Themes](/docs/development/external-themes).**

The plugin comes prebundled with {{ site.data.themes.material.size | plus: site.data.themes.other.size | plus: site.data.themes.other2.size }} themes:

#### Material Themes

These themes are based on the original themes, made by Mattia Astorino ([@equinusocio](https://github.com/equinusocio))

<ul class="theme-cards">
{% for theme in site.data.themes.material %}
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

#### External Themes

This feature is only available for premium users.
{:class='card-panel warn'}

The plugin also exposes an endpoint allowing plugin developers to create and bundle their own custom themes, just like Color Schemes, Keymaps, Coding Styles and so on. To learn more about _External Themes_ or how to create your own plugin, head to the [External Themes section](/docs/development/external-themes).

Once the external theme has been downloaded and installed, it should appear at the bottom of the Switcher.

{% include figure.html content="/screens/external.png" caption="External Themes" %}

{% include figure.html content="/tutorial/externalList.png" caption="External Themes List" %}

#### Custom Theme

This feature is only available for premium users.
{:class='card-panel warn'}

Finally, there are the **Custom Themes**, which is the placeholder for the Custom Theme Settings, allowing you set your own theme colors.

There are two options available, *Custom Theme* for themes based off the *Darcula* LaF, and *Light Custom Theme* based off the *Light* LaF.

See [Custom Themes](/docs/configuration/custom-themes) for more information.

#### Native Themes (since 5.0)

From version 5.0 the plugin now supports **Native Themes** as well, that is, themes using JetBrains theme API. When loading a native theme, the plugin will try to convert it into a Material Theme, thus allowing you to use the theme colors while using the Material Theme features such as the components, accent mode and so on.

You don't need to do anything to make it work, simply download a native theme and select it, it will be automatically converted to a theme format supported by the plugin.

Examples:

{% include figure.html content="/screens/intellij.png" caption="IntelliJ Light" %}

{% include figure.html content="/screens/darcula.png" caption="Darcula" %}

{% include figure.html content="/screens/gradianto.png" caption="Gradianto Theme" %}

----------
## Material Theme Settings

### Settings Page

Some settings are only available for premium users.
{:class='card-panel warn'}

You can configure many parts of the plugin features from the **plugin settings**. They are accessible within `Settings → Appearance → Material Theme → Settings`.

{% include figure.html content="/screens/settings.png" caption="Material Theme Settings v1" %}

Since version 2.4.0, the settings page has been remade to prevent overwhelming the user from the abundance of customization options.

Now settings are differentiated between basic and advanced settings, they are grouped within _tabs_, and a *Reset Settings* button has been added for easy factory resetting.

{% include figure.html content="/screens/settingsV2.png" caption="Material Theme Settings V2" %}

#### Summary

Quick summary of all settings:

**[Main Settings](/docs/configuration/main-settings)**:
- *Selected Theme*: Select a _Material Theme skin_ (will not display External Themes)
- *Contrast Mode*: Add contrast to specific panels and components.
- *High Contrast* ![premium](/img/icons/premium.png): Set a darker color of the backgrounds and lighter color of texts for more contrast
- *Custom Accent Color*: Set a custom accent color.
- *Override Accent Color*: Change the accent color accordingly to the selected theme
- *Configure Custom Theme Colors*: Open the settings page for the _Custom Theme Colors_.

**[Tab Settings](/docs/configuration/tab-settings)**:
- *Tabs Height*: Set a custom height for tabs (between 25 and 60 pixels)
- *Active Tab Highlight Color* ![premium](/img/icons/premium.png): Customize the active tab's indicator color
- *Thickness* ![premium](/img/icons/premium.png): Set the active tab's indicator thickness (works also for the Project View selected row)
- *Uppercase Tabs* ![premium](/img/icons/premium.png): Set the Editor Tabs in Uppercase
- *Bold Active Tab* ![premium](/img/icons/premium.png): Make the Active Tab Bold
- *Tab Position* ![premium](/img/icons/premium.png): Customize the position of the tab highlighter
- *Font Size* ![premium](/img/icons/premium.png): Control the size of the Editor Tabs (requires restart)

**[Compact Settings](/docs/configuration/compact-settings)**:
- *Compact Status Bar*: Reduce the height of the status bar (this is the default height)
- *Compact Table Cells*: Reduce the height of table headers and table cells
- *Compact Dropdown Lists*: Reduce the size of the dropdowns
- *Compact Menus*: Reduce the size of the menus

> **[Icons Settings](/docs/configuration/icons-settings)**:
> - *Material UI Icons*: Enable/Disable the Material UI icons
> - *Hide Icons*: Hide file icons (depends on the Material Icons option)
> - *Monochrome Icons*: Filter the IDE icons with a shade of the current theme's primary color
> - *File Icons*: Enable/Disable the Custom File Icons
> - *Folder decorators*: Decorate special folders with custom icons.
> - *PSI Icons*: Replace PSI Icons (class, interface, etc.)

**NOTE**: Since 5.0, The Icons Settings have been moved to the [Atom Material Icons plugin](https://plugins.jetbrains.com/plugin/10044-atom-material-icons)
{:class='card-panel warn'}

**[Project View Settings](/docs/configuration/project-view-settings)**:
- *Custom Sidebar Height* ![premium](/img/icons/premium.png): Set a custom line height in Project View (min: 18, max: 30)
- *Custom Tree Indent* ![premium](/img/icons/premium.png): Fine tune indent of Project View items (both left and right indent)
> - *Arrows Style*: **(This setting has been moved to the Atom Material Icons plugin since 5.0)** - Change the style of the arrows in trees. Choices:
>   - *Material*: Chevron arrows
>   - *Darcula*: Triangle arrows
>   - *Plus-Minus*: Plus and Minus symbols
>   - *Arrows*: Regular arrows
>   - *None*: Hide the arrows
- *Selected Indicator Style* ![premium](/img/icons/premium.png): Change the style of the indicator of the selected item in trees
  - *Border*: Add a small border to the left
  - *Dot*: Add a dot on the selected item
  - *None*: Remove the indicator
- *Thickness* ![premium](/img/icons/premium.png): Control the thickness of the indicator
- *Custom Directories Style* ![premium](/img/icons/premium.png): Assign a specific style to directories. Can be configured from the *Material File Colors* settings page.
- *Font Size* ![premium](/img/icons/premium.png): Fine tune the font size of the project trees (requires restart)

**[Component Settings](/docs/configuration/component-settings)**:
- *Uppercase buttons*: Set the buttons' texts to uppercase
- *Outlined buttons* ![premium](/img/icons/premium.png): Use outline buttons instead of full buttons.
- *Transparent Scrollbars*: Enable/Disable transparency in scrollbars (requires restart)
- *Accent Scrollbars*: Set the color of the scrollbars to the accent color (requires restart)
- *Tab Shadows* ![premium](/img/icons/premium.png): Add a subtle shadow under the tabs
- *Inverted Selection Color*: Switch the Autocomplete selected item color between the selection color and contrast color.

**[Features Settings](/docs/configuration/features-settings)**:
- *Material Fonts* ![premium](/img/icons/premium.png): Enable/Disable Material fonts (Roboto)
- *Material File Status Colors*: Enable/Disable the [Material File Status Colors](/docs/configuration/file-status-colors)
- *Material Wallpapers* ![premium](/img/icons/premium.png): Add a custom wallpaper per theme for the empty frame window.
- *Show Overlays*: Displays an overlay when modals are open.
- *Accent Mode* ![premium](/img/icons/premium.png): Make components stand out by setting them in the accent color (buttons, tabs, selections…)
- *Striped Tool Windows*: Set the new Striped Tool Windows Layout

**[Project Frame Settings](/docs/configuration/project-frame-settings)**:
- *Project Frame Colors* ![premium](/img/icons/premium.png): Add a colored stripe on the top of each window for easier differentiation
- *Show Project Name* ![premium](/img/icons/premium.png): Show or hide the project frame on the stripe
- *Show Project Icon* ![premium](/img/icons/premium.png): Display the project's custom icon on the stripe
- *Customize Text* ![premium](/img/icons/premium.png): Customize the text displayed

**[Other Tweaks](/docs/configuration/other-tweaks-settings)**:
> - *Hollow Folders*: **(This setting has been moved to the Atom Material Icons plugin since 5.0)** Enable/Disable the Hollow Folders in Project View.
~~- *Themed Title Bar*: Colorize the title bar of the whole OS with the current theme's background color (Mac-Windows only)~~ (integrated into the main product since 2021.2)
- *Colored Open Directories* ![premium](/img/icons/premium.png): Colorize open directories with the accent color
- *Language Additions* ![premium](/img/icons/premium.png): Enable/Disable the [Language Additions](/docs/configuration/color-scheme-additions)
  - *Enforce Highlighting*: Enforce highlighting of keywords by making them appear as "Weak Warnings"
- *Show What's New on each update*: Whether to display the [What's New](/docs/what-s-new) on each update.

#### Settings shortcuts

You can also quickly toggle some settings by using the _Search Everywhere_ or the _Command Panel_ functionality of the IDE. Simply press `Shift-Shift` and type `Material Theme` to get the list of available toggles.

Same goes for the `Command Panel` (<kbd>Ctrl-Shift-A/Cmd-Shift-A</kbd>).

{% include figure.html content="/screens/cmdpanel.png" caption="Command Panel" %}

You can also use the `Keymap Editor` to assign your own custom shortcuts to these toggles.

#### Settings File

Your current configuration is stored inside the IDE settings' directory under the filename `material_theme.xml`. If for some reason there are issues with the plugin, or you don't manage to reset to a stable state, just delete this file and restart the IDE.

See [IDE Settings](https://intellij-support.jetbrains.com/hc/en-us/articles/206544519-Directories-used-by-the-IDE-to-store-settings-caches-plugins-and-logs) for more information.


----------
## Material Custom Theme

This feature is only available for premium users.
{:class='card-panel warn'}

Aside from the bundled themes, you also have the ability to set up your own Material Theme. You can do so by selecting `Custom Theme` in the theme list, then customize the theme colors in the settings page at `Settings → Appearance → Material Custom Theme Settings`.

{% include figure.html content="/screens/customsettings.png" caption="Material Custom Theme Settings" %}

Once you set these colors, simply select the `Custom Theme` in the _Material Theme Chooser_ and see your colors take effect.

See [Custom Theme](/docs/configuration/custom-themes) for more details.

-----
## Advanced Configuration

Here's a list of the keys used in the configuration file (`material_theme.xml`) with their default values. If a key isn't in your file, it means that it uses the default value.

```xml
<component>
  <!-- Accent color -->
  <option name="accentColor" value="E91E63" />
  <!-- Arrows style (moved to Atom Icons Plugin) -->
  <!-- <option name="arrowsStyle" value="Material" /> -->
  <!-- Accent scrollbars -->
  <option name="accentScrollbars" value="true" />
  <!-- Accent Mode -->
  <option name="accentMode" value="true" />
  <!-- Whether or not to send data analytics -->
  <option name="allowDataCollection" value="false" />
   <!-- Outlined Buttons -->
  <option name="borderedButtons" value="false" />
  <!-- Language Additions -->
  <option name="codeAdditionsEnabled" value="true" />
  <!-- Compact dropdowns enabled -->
  <option name="compactDropdowns" value="false" />
  <!-- Custom sidebar line height enabled -->
  <option name="compactSidebar" value="false" />
  <!-- Sidebar line height if enabled -->
  <option name="customSidebarHeight" value="28" />
  <!-- Themed Title Bar (deprecated since 2021.2) -->
  <!-- <option name="darkTitleBar" value="false" /> -->
  <!-- Enforced Language Additions -->
  <option name="enforcedLanguageAdditions" value="fale" />
  <!-- File Status Colors enabled-->
  <option name="fileStatusColorsEnabled" value="false" />
  <!-- Tab highlight color -->
  <option name="highlightColor" value="E91E63" />
  <!-- Tab highlight thickness -->
  <option name="highlightThickness" value="2" />
  <!-- Indicator Style -->
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
  <!-- Contrast mode enabled -->
  <option name="isContrastMode" value="false" />
  <!-- Custom tree indent enabled -->
  <option name="isCustomTreeIndentEnabled" value="false" />
  <!-- Decorated folders enabled-->
  <option name="isDecoratedFolders" value="true" />
  <!-- High Contrast -->
  <option name="isHighContrast" value="true" />
   <!-- Inverted Selection Color -->
  <option name="isInvertedSelectionColor" value="fale" />
   <!-- Custom Wallpapers -->
  <option name="isMaterialWallpapers" value="true" />
  <!-- Styled folders enabled -->
  <option name="isStyledDirectories" value="false" />
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
  <!-- Striped Tool Windows -->
  <option name="stripedToolWindowsEnabled" value="true" />
  <!-- Show What's New Window on updates -->
  <option name="showWhatsNew" value="true" />
  <!-- Status bar indicator (moved to status bar context menu) -->
  <!-- <option name="statusBarTheme" value="true" /> -->
  <!-- Tab Highlight Position -->
  <option name="tabHighlightPosition" value="Default" />
  <!-- Tab Opacity (deprecated) -->
  <!-- <option name="tabOpacity" value="50" /> -->
  <!-- Transparent scrollbars -->
  <option name="themedScrollbars" value="true" />
  <!-- Project View Font Size -->
  <option name="treeFontSize" value="12" />
  <!-- Project View Font Size Enabled -->
  <option name="treeFontSizeEnabled" value="false" />
  <!-- Tab Font Size -->
  <option name="tabFontSize" value="14" />
  <!-- Tab Font Size Enabled -->
  <option name="tabFontSizeEnabled" value="false" />
  <!-- Tab height -->
  <option name="tabsHeight" value="42" />
  <!-- Uppercase buttons -->
  <option name="uppercaseButtons" value="true" />
  <!-- Bold and uppercase tabs enabled -->
  <option name="upperCaseTabs" value="false" />
  <!-- Colored Open Directories -->
  <option name="useColoredDirectories" value="true" />
  <!-- Project Frame Custom Title -->
  <option name="useCustomTitle" value="false" />
  <!-- Project Frame -->
  <option name="useProjectFrame" value="false" />
  <!-- Show Project Title in Project Frame -->
  <option name="useProjectTitle" value="true" />
  <!-- Show Project Icon in Project Frame -->
  <option name="useProjectIcon" value="true" />
  <!-- Material fonts enabled -->
  <option name="useMaterialFont2" value="false" />
  <!-- Material wallpapers enabled -->
  <option name="useMaterialWallpapers" value="false" />
</component>

```

## Frequently Asked Questions

**Q**: I've installed the Material Theme, but the editor still shows me the `Darcula` theme?

**A**: The Theme Switcher is only replacing the theme of the whole IDE, not the editor itself. You can therefore have a separate theme for the IDE and the Editor, for instance _Palenight_ and _Darker_ or even a custom Color Scheme.


**Q**: I've updated the IDE/plugin to a new version, and now I get an error about the plugin failing to initialize?

**A**: It could come from multiple issues, but it could simply be a problem with the settings not being compatible to the new version. In that case, simply make a copy of the settings file, then delete the original file, and restart the IDE.

If the issue is gone, simply go back to the settings and go back to your previous configuration manually. If the issue persists, please report it in the Issues Section.

**Q**: I've removed the plugin, and still the background image persists!

**A**: This is an issue hard to resolve, because the *Custom Wallpaper* function is using the `Set Background image` function from the IDE behind the curtains. Therefore, removing the plugin might not remove the set image completely. If that occurs, you can remove the image by opening the Command Panel (Cmd-Shift-A/Ctrl-Shift-A) and type `Set Background image` and then manually remove the image, or go into `Settings → Appearance → Background Image`.


**Q**: What is that analytics option? What data are collected?

**A**: This is an option to allow sending data to Material Theme servers about users' configuration, usage and trends.
These analytics will allow us to see which features are most used or least used, in order to prioritize development of features, or maybe notify users about specific features, to provide a better satisfaction. These data are completely anonymous, and are not shared/sold to any third parties. If you want to stop sending data, simply turn off the option in the material_theme.xml.

**Q**: The wizard idea was great! But I've made an error and the wizard won't show up anymore!

**A**: The wizard will show only once and only when you don't have the `isWizardShown` option set to true in the config file. But you can reopen it by simply clicking on the action from the Material Theme Toolbar, in the Features menu.

**Q**: My settings are not persisted between my IDEs!

**A**: Yes, this is because third-party plugins are not (yet) synchronizeable by the _Sync Settings_ feature. Therefore, you need to configure each IDE independently. However, since Look and Feels ARE synchronized, this can lead to inconsistencies between the look and feels, like for instance having `Darcula` instead of your chosen theme.

As a result, it is recommended to not rely too much on the Sync feature for now. Configure the two instances independently and try not to change settings too often.

**Q**: Where have all the icons gone?

**A**: Since 5.0.0 all icons related settings have been moved to the [Atom Material Icons plugin](https://plugins.jetbrains.com/plugin/10044-atom-material-icons), another plugin developed by the Material Theme team. This is in order to encourage developers to develop _Icon Themes_, since the plugin is now free of icons.

**Q**: I've downloaded a theme from the Plugins Page, and now I'm seeing texts that are not themed, or checkboxes that are wrongly colored, etc…

**A**: This is because these are native themes, and such themes use the Theme API provided by JetBrains rather than the API used by the Material Themes. Even though the plugin tries to convert it to its own format, it won't be as good as the originals. Still, it should be as similar as possible, so there shouldn't be any critical issues. In that case, please report to the repository's issues.

**Q**: I've bought a license, but I am still identified as a Free User!

**A**: That means that you didn't activate your license yet. At the moment the only way to do it is to run the action to open the _Registration Modal_.


{% include figure.html content="/screens/activateLicense.png" caption="Activate License" %}

{% include figure.html content="/screens/license.png" caption="License" %}

