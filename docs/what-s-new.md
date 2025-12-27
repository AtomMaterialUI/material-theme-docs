---
layout: docs
title: What's new?
group: whatsnew
toc: true
---

----

## What's new in Material Theme UI v10.7.1

### Features

- Add option to control the size of the _Rounded Tabs_ border
- Open **Rounded Tabs** option to Free Users

### Fixes

- Fix issue where changing themes would place the Title Frame on the left
- Fix issue where changing themes would change the Stripe Tool Windows Color
- Experiment: Changing the ways _External Themes_ are loaded

### Other

- Add Islands Settings to the _Wizard_
- Add _Borderless Mode_ to the _Wizard_

----

## What's new in Material Theme UI v10.7.0

This version focuses on improving the **Islands** layout to look more like the original design, and its integration with the _Project Title Frame_.

### Islands Layout improvements

This version brings a refurbished version of the _Islands Layout_, following the official guidelines:
- The background color is now inherited from the main frame.
- The tool window stripes are also inherited from the main frame.
- The tabs are using the same color as the islands' background color.
- A slight border has been added to help distinguish the islands.

For that purpose, a few settings have been added to the _Islands Settings_:
- **Contrast Mode**: Set a lighter background color for the main window, contrasting with the islands and the editor
- **Custom Background**: Same as before, set your own background color
- **Border Color**: Set a border color for the islands
- **Custom Border Color**: Specify your own border color

### Project Title Frame Integration

In addition, the _Project Title Frame_ is now integrated with the _Islands Layout_ by inheriting the background color from the main frame as well. The previous experimental solution was not working properly, therefore it has been removed in favor of this new solution.

### Screenshots:

{% include figure.html content="/screens/islandsV2.png" caption="New Islands Layout" %}

{% include figure.html content="/screens/withProjectFrame.png" caption="With Project Title Frame" %}

{% include figure.html content="/screens/islandsContrast.png" caption="Contrast Mode" %}

{% include figure.html content="/screens/customBackground.png" caption="Custom Background" %}

{% include figure.html content="/screens/withColorizedTitle.png" caption="With Colorized Title Bar" %}

{% include figure.html content="/screens/withBorder.png" caption="With Border" %}

{% include figure.html content="/screens/withCustomBorder.png" caption="With Custom Border" %}

----

## What's new in Material Theme UI v10.6.0

### Fixes

- Make the _Islands_ layout available to the free plan
- Fix the `{{fileIcon}}` to return the actual file icon
- *Experimental*: Provide a custom solution to paint a gradient on the _Project Title Frame_

----

## What's new in Material Theme UI v10.5.0

### Features

#### New Options for the Project Title Frame:

- Customize Width and Height of the Stripe
- Customize Font and Font Size
- New Macro: `{fileIcon}`: now you can display the file icon in the _Project Title Frame_.

{% include figure.html content="/screens/projectTitleTweaks.png" caption="Project Title Bar Customizations" %}

#### Islands Layout's improvements

- Use the native Islands background for the *Application Frame* when all title options are off.
- Hide tool window borders when the *Islands* mode is enabled

### Fixes

- Fix asynchronous issue for the `{modulePath}` and `{subProject}` macros
- Add new UI properties, such as the _Alert Dialogs_

----

## What's new in Material Theme UI v10.4.1

### Features

- Add a setting to the **Islands** to control the opacity of inactive windows
- Touch up the appearance of the *Islands layout'* tabs to be similar to the rounded tabs

### Fixes

- Fix the **Islands Border Insets** settings
- Adapt the plugin to the new *Tab Painter* when the Islands layout is enabled
- Remove the confirmation for closing projects

## What's new in Material Theme UI v10.4.0

## Disable Favorite Themes on the fly

A new button has been added to the **Favorite Themes Shuffle** tool window, to allow you to disable the selected theme on the fly, rather than having to open the settings to disable them.

{% include figure.html content="/screens/disableThemes.png" caption="Disable Themes on the fly" %}

## Other Fixes

- Fix again the issue with persisting Favorite Themes.
- Fix the wrong identifier for the _Islands_ Plugin
- Prevent a crash when selecting the first theme in the randomizer
- Change the color of the identifier under caret to be consistent with the other identifiers
- Better support for the _Compact Mode_

----

## What's new in Material Theme UI v10.3.0

### Rounded Tabs Opacity

You can now customize the opacity of the rounded tabs.

{% include figure.html content="/screens/roundedTabsSettings.png" caption="Rounded Tabs Opacity Settings" %}

In addition, tabs using custom *File Colors* are now more opaque, providing a better visualization.

### Sub-Project support in Project Title Frame

A new pattern has been added to the **Project Title Frame**, `{subProject}` to reference a different sub-project when running in a **multi-project** setup.

{% include figure.html content="/screens/subproject.png" caption="Sub-Project support in Project Title Frame" %}

> Note: Multi-project setups are available for all IDEs except IntelliJ IDEA, Rider and Android Studio. They are allowing you to open multiple projects in the same window, using the "Attach Project" feature at `File > Attach Project`.

### Fixes

This version also fixes the issue of the *Theme Randomizer* not persisting the disabled themes across restarts.

----

## What's new in Material Theme UI v10.2.0

This version fixes issues related to the **Theme Randomizer** feature, as well as many other issues that were reported by the community.

### Custom Active Tab

A new setting has been added to the **Tabs Settings** to allow customizing the active tab background color. This is done natively from the **Color Scheme General Colors** settings, but the plugin was overriding this behavior to provide its own colorization.

From now on, you can again customize the colors from the Color Scheme, as long as you have the setting enabled.

### Fixes

- Fix an issue where selecting the first theme in the _Theme Randomizer_ freezes the IDE (hopefully)
- Constraint the icon size in the _Theme Randomizer_ tables to 16x16.
- __Rounded Tabs__: Change the selected tab color to a transparent accent color, to mimic the new Islands Design's tabs.
- __Rounded Tabs__: Add a subtle border to inactive tabs, to make them more distinguishable.
- __Accent Mode__: Make the active tab use the *Accent Color* instead of the usual *Background Color*
- __Islands Layout__: Change the default settings to make the islands more spaced with each other.
- __Outline Buttons__: Fix the shape of the focused buttons outline when a custom _Button Radius_ is set.
- __Plugins__: [#579] _GitHub Copilot Chat Window_ style is now correctly indented.
- __Plugins__: [#568] [#580] Fix Gemini and Junie plugins not being able to load when *Compact Menus* is enabled


## What's new in Material Theme UI v10.1.0

This version focuses on issues related to the **Theme Randomizer** feature.

### Favorite Themes Playlist

The previous implementation of the randomizer was a bit too naive and didn't produce the right results. It would give the same theme over and over, prevents you from selecting non material themes, you can't disable specific themes, etc.

As a result, the whole feature has been reworked to a different approach: **Favorite Themes Playlist**.

In this implementation, rather than selecting a theme at random, the plugin will instead generate a "playlist" of themes from the selected favorite themes, and will switch to the next theme in the playlist at the specified interval, like a music playlist.

{% include figure.html content="/screens/randomizerPlaylist.png" caption="Theme Randomizer Playlist" %}

This playlist will be displayed in the tool window that was used to display the next theme countdown. It will display the current selected theme, as well as buttons to switch to the next or previous theme in the playlist. There is also a button to shuffle the playlist manually.

## What's new in Material Theme UI v10.0.0

After long months without updates, the Material Theme UI is proud to announce the release of version 10.0.0, which brings a few new features to the plugin.

These features are reserved for premium users, but will be available to all for a limited time, so you can try them out, and because it is brand new, so it might contain bugs.

### Theme Randomizer

As the Material Theme UI contains quite a lot of themes, it can be challenging to choose one that fits your needs. This is why the plugin now comes with a **Theme Randomizer** feature, which will randomly switch the theme at a random interval of your choice.

{% include figure.html content="/screens/randomizer.png" caption="Theme Randomizer" %}

From these settings you can select the themes you want to include in the randomization, as well as the _interval_ at which the theme will be changed. You can also customize the _weight_ of the theme, e.g., the rate at which the theme will be selected. The less the number, the less likely the theme will be selected.

Note: The randomizer will only switch between Dark or Light themes respectively. This means that if you are using a Dark theme, the randomizer will only switch between _Dark themes_, and the same for Light themes.
{:class='card-panel warn'}

Also, there's a new _Tool Window_ which will display the remaining time before the next theme change. This allows you to understand how long you have before it switches.

{% include figure.html content="/screens/countdown.png" caption="Next Change countdown" %}

Note: Changing anything in the settings will reset the countdown.
{:class='card-panel warn'}

### Islands Layout

Since version 2025.2 JetBrains introduced a newer layout for the IDE, called **Islands Layout**. This layout, originally only present in Fleet, is now getting added to the main products, providing a more modern and flexible layout for the IDE.

{% include figure.html content="/screens/islandsLayout.png" caption="Islands Layout" %}

However, this new layout is only available for the new themes, **Single Island** and **Multiple Islands**. Other themes will still be using the current layout (but this might change in the future).

In consequence, the Material Theme UI allows you to enable this layout for any other theme, all the while providing you with customization options for this layout.

{% include figure.html content="/screens/islands.png" caption="Islands Layout" %}

In the settings, you will find options that allow you to control the background color of the canvas, the spacing between the islands, the arc radius, and the gap between the islands and the tool windows.

{% include figure.html content="/screens/islandsSettings.png" caption="Islands Settings" %}

Moreover, associated with other features, you can be creative to have the *Islands Layout* the way you want it to be.

For example, you can use the **Contrast Mode** for a better contrast between the islands.

{% include figure.html content="/screens/contrastIslands.png" caption="Islands with Contrast Mode" %}

You can also set a custom background color between the islands:

{% include figure.html content="/screens/islandsBackground.png" caption="Islands with Background Color" %}

Finally, you can also use the **Background Image** feature to set a custom background image for the background.

{% include figure.html content="/screens/islandsWithImage.png" caption="Islands with Background Image" %}

Note: This layout requires closing all projects when you change the settings.
{:class='card-panel warn'}

### Rounded Buttons

A new setting has been added to the **UI Components**: **Rounded Buttons**. This setting will allow you to control the border radius of all buttons in the IDE, making them more rounded or less rounded, according to your tastes.

{% include figure.html content="/screens/roundedButtons.png" caption="Rounded Buttons" %}

----

## What's new in Material Theme UI v9.8.0

### Better Rounded Tabs

The **Rounded Tabs** setting has been improved to provide a better contrast between the selected and unselected tabs.

Now the selected tab sports a border with the accent color, to make it more distinguishable from the unselected tabs. Moreover, the tabs use the highlight color on hover, to make it more prominent.

{% include figure.html content="/screens/roundedTabsContrast.png" caption="Rounded Tabs" %}

{% include figure.html content="/screens/withTabHighlighter.png" caption="Rounded Tabs with Tab Indicators" %}

### Fixes

- Fix the title bar colors seeping out of the _Left_ and _Right_ tool windows.
- Fix specific comboboxes' issue where the arrows and the combobox were overlapping.
- Make the **Tab Separators** more visible.

----

## What's new in Material Theme UI v9.7.0

This version fixes a list of long-standing issues, as well as some new features.

### Use Editor Global Font for the Console

The **Use Editor Global Font** setting now allows you to set the Global Font for the Console as well.

### Other Fixes

This version also includes it's set of bug fixes and improvements:

- Fix the theme not being applied at start in some cases
- Fix the **Uppercase Tabs** setting not being applied
- Fix the freezing on the IDE when changing multiple settings at once
- Removes a bunch of internal uses to be compliant with the new JetBrains guidelines

----

## What's new in Material Theme UI v9.5.0

Yet another small update but with some new features worth checking.

### Rounded Tabs

As the New UI is now the default for all users, it's now become easier to add more customization to the UI.

To celebrate that, we are introducing a new setting to customize the tabs' design: **Rounded Tabs**.

{% include figure.html content="/screens/roundedTabs.png" caption="Rounded Tabs" %}

This feature mimics the new tab design introduced by Google in their navigator, _Google Chrome_, which makes the tabs more rounded and looking like pressed buttons.

This design isn't popular with everyone, so it's disabled by default, but you can give it a shot in the **Material Theme > UI Components** settings.

### Other fixes

- Add Sticky Lines background to color scheme
- Fix parameter colors in Color schemes
- Fix performance issue when multiple settings are modified

----

## What's new in Material Theme UI v9.4.0

This version only brings bug fixes and improvements

### Fixes

- Refactor locale management to support the new framework
- Fix deprecations
- Fix Cancel Button not working on Custom Theme Settings
- Fix "Auto expanding" search and replace
- Support for 2024.2

-----

## What's new in Material Theme UI v9.3.0

This version introduces small features and improvements to the plugin.

### Custom Action Button Radius

As a follow-up to the feature introduced in version 9.2.0, **Use Original Tool Window Hover Buttons**, this version introduces yet another feature requested by the community to control the border radius of all _Action Buttons_.

You can find this setting in the **Material Theme > UI Components Settings**

{% include figure.html content="/screens/actionButtonsRadius.png" caption="Action Buttons Radius Settings" %}

Comparison:

{% include figure.html content="/screens/fullRadius.png" caption="Full Rounded buttons" %}

{% include figure.html content="/screens/halfRadius.png" caption="Half Rounded buttons" %}

{% include figure.html content="/screens/noRadius.png" caption="Not Rounded buttons" %}

### More Overlays

This setting supplements the **Overlays** setting by adding way more triggers to the list of popups that trigger the overlays.

Currently, the Overlays are displayed when most popups are displayed. However, there are still a few popups that do not trigger the overlays, such as the **Find In Files** popup, or the **Git Branches**, as this would be too intrusive for some users.

But there are people that do not mind the overlays, and as such, this setting was added to allow those users to display the overlays in much more cases, such as the aforementioned examples, but also:
- When **dropdowns** are opened
- When **light popups** are opened
- etc.

{% include figure.html content="/screens/gitBranches.png" caption="Git Branch Overlays" %}

{% include figure.html content="/screens/dropdownOverlays.png" caption="Dropdown Overlays" %}

This setting is disabled by default to not get in the way of the users' workflow, but you can enable it in the **Material Theme > Features** settings.

### Others

- **Color Schemes**: Change the color of the *Identifier Under Caret* to be a shade of the Accent Color
- **Color Schemes**: Change the default console font to _Hack_ with fallback to _JetBrains Mono_
- **Color Schemes**: Add Prompt separator Color
- Fix removal of underscore in the *Project Title Widget*
- Fix display of *TypeScript Additions* settings page
- Fix discrepancy between the *Editor Tabs* and *Tool Windows Tabs*
- Color Schemes: Fix _Micronaut_ and _Angular Template_ background colors
- Color Schemes: Fix _Angular Signals_ color
- Color Schemes: Add a different color for *MongoDB properties*
- Language Additions: Deprecate the _Severity Provider_ to use regular annotations again

----

## What's new in Material Theme UI v9.2.0

### Use Original Tool Window Hover Buttons

This feature is the result of a particular demand by some users to restore the original design of the tool windows buttons.

As you may know, the plugin changed the look and feel of those buttons to look like the Material Design look and feel, by replacing them with a transparent circle of the accent color. However some users preferred the original look of the buttons, and as such, this feature was added to the plugin.

{% include figure.html content="/screens/originalToolWindowButtons.png" caption="Original Tool Window Hover Buttons" %}

### Other Bug fixes and improvements

- **Java Additions**: Add `null` and `final` additions
- Refactor the **Theme Selector** to improve performance and limit freezes
- Fix the issue where buttons become spaced out when changing the **Custom Header Height** setting.
- Adds back the _Selected Tool Window indicator_.
- Fix the issue where the **Arrows Style** setting was disabled if the Atom Material Icons plugin was installed but
  disabled.
- Fix issue with large buttons
- Fix issue with Toolbar icons unavailable on the free plan
- Fix issue with File Color Gray
- Fix _Custom Line Height_ setting not having any effect
- Change default value of `Centered Editor` to false
- Fix default button height
- Fix custom line height not being applied

----

## What's new in Material Theme UI v9.1.0

This version fixes a few problems with color schemes, as well as improves the onboarding screen for new users and also for migrating users to the version 9.0.0.

### New On-boarding Screen

If you've been using the plugin until now, chances are that you have your own configuration throughout the years.

However, version 9.0.0 restructured how settings are kept, and as a result a migration is necessary to migrate the settings to the new format.

To help existing users with that, a new onboarding screen has been added to the plugin, which will guide you through the migration process.

{% include figure.html content="/screens/settingsv3/migrate.png" caption="Onboarding Screen" %}

This screen will only show us once and will trigger the migration process.

**Note**: You can still re-run the migration process manually through the `Actions > Material Theme Features > Migrate Settings`.


### New Setting: Material Design Loading Icon

This setting will return the old loading icon from Material Design, which was removed at some point in the past.

{% include figure.html content="/screens/loader.png" caption="Material Design Loading Icon" %}

**Note**: You will have to reset the IDE for the changes to take effect.


### Other Bug fixes and improvements

- **File Colors**: Set *Gray* as _Excluded Files_ color
- **Overlays**: Fix overlays not being triggered on some cases
- Prevent NPE on MTButton
- Prevent NPE when the *Python* plugin is installed
- **Color Schemes**: Add _New Terminal_ colors
- **Color Schemes**: Add _JVM Logging_ colors
- **Color Schemes**: Add _Tabs Scrollbar_ colors
- **Color Schemes**: Add _Error Stripe_ colors on Searches

----

## What's new in Material Theme UI v9.0.0

Hello everyone, welcome for a new round of Material Theme UI updates. First, I would like to apologize for the lateness in updating the documentation since the latest version, this year has been very rough for me, but after long months of work, the new version is here, albeit still in its early phases, so bugs and performance issues can still be experienced at this point, but hopefully they will be less and less as time goes on.

So what's new in tow?

### New Settings

The first thing you will notice is the new settings page. This is a complete overhaul of the settings page, which was long overdue. Since the beginning of the plugin, there has been only two settings overhauls, the last one going as far back as 2017 (!). Back then, the settings were organized into tabs, each tab responsible for a specific part of the plugin.

This was a good idea at the time, but as the plugin grew, so did the settings, and it started to become cramped in there, and it began being difficult to add more settings without breaking the UI.

This is why the new settings page is now organized into different pages, each page representating what was once inside a tab. This makes it easier to find the setting you are looking for, and it also makes it easier to add new settings in the future.

The new settings page is more organized, more intuitive, and using a different technology: `Kotlin UI DSL` rather than pure Swing. This makes it easier to maintain and to add new features in the future.

{% include figure.html content="/screens/settingsv3/mainSettings.png" caption="Main Settings v3" %}

{% include figure.html content="/screens/settingsv3/themeSelector.png" caption="Theme Selector" %}

{% include figure.html content="/screens/settingsv3/accentColors.png" caption="Accent Colors" %}

As a result of that change, the settings need to be migrated to a new format, as such, the new settings are to be found in a file named `material_theme_new.xml` as opposed as the previous `material_theme.xml`. Therefore, you will need to migrate your previous configuration before using the plugin. This is a one-time operation, and you will be prompted to do so when you first open the IDE after updating the plugin.

{% include figure.html content="/screens/settingsv3/migrate.png" caption="Migration Dialog" %}

Upon clicking migrate, your previous settings will be migrated to the new format, and you will be able to use the plugin as usual.

> Note: You can still re-run the migration process manually through the Actions > Material Theme Features > Migrate Settings.

### Centered Editor

Perhaps the most controversial of the changes, is a new feature called **Centered Editor**. When enabled, it centers the code in the middle of the editor, as opposed as tucked to the left.

{% include figure.html content="/screens/centeredEditor.png" caption="Centered Editor" %}

This feature is based on the already available **Zen Mode** of the IDE, found in _Menu > View > Appearance > Zen Mode_. But, unlike Zen Mode, which also hides all tool windows and tabs, the Centered Editor only centers the code, leaving the rest of the UI intact.

This is particularly pleasant for people working with the Tool Windows closed, or having the Tool Windows **undocked**, and is similar to the way pages are laid out in the modern web.

You can find the setting under `Material Theme UI > Features > Centered Editor`

----

### Project Title Bar

Previously named **Project Frame**, the Project Title Bar sports more options than ever before. For one, it now allows you to control more elements of the screen, namely the _Tool Windows_ and the _Status Bar_!

{% include figure.html content="/screens/settingsv3/projectTitle.png" caption="Project Title Settings" %}

Such options allow you to colorize not only the title bar, but the tool windows and the status bar as well, giving you a more "framed" look of your IDE, similar to the famous VSCode "Peacock" extension.

{% include figure.html content="/screens/peacockMode.png" caption="Peacock Mode" %}

Moreover, a new widget has been added on the Title Bar displaying the same contents of the Project Frame, that you can toggle ON or OFF according to your tastes.

You can also select from a list of presets for your Title Bar widget. Maybe more will be added in the future!

{% include figure.html content="/screens/titleBarOptions.png" caption="Title Bar Widget" %}

----

### Adaptive Theme

The **Adaptive Theme** is a new theme that adapts itself from the **color scheme**. When selecting that theme, it will select the most suited color from the current color scheme as the theme colors.

You can also choose to override the colors you want from the Color Scheme Settings Page.

{% include figure.html content="/screens/settingsv3/adaptiveTheme.png" caption="Adaptive Theme" %}

----

### Current Theme and Custom Theme

You can now visualize your current theme colors in the Settings page under `Material Theme UI > Current Theme`.

{% include figure.html content="/screens/settingsv3/currentTheme.png" caption="Current Theme" %}

This page displays a matrix of the current theme colors, with the ability to copy the theme colors by clicking on a tile. And yes, this works for non-bundled themes too!

The **Custom Theme** page has also been migrated to the new layout, with the option to assign a different set of colors for the **Light Custom Theme**.

{% include figure.html content="/screens/settingsv3/customTheme.png" caption="Custom Theme" %}

---

### Theme Selector

The Theme Selector, previously only available inside the Wizard, is now available in the settings page as well. You can now preview the themes before applying them.

{% include figure.html content="/screens/settingsv3/themeSelector.png" caption="Theme Selector" %}

> Note: We are aware of the current performance issues with the Theme Selector, and we are working on it.

### Contrast Settings

The contrast settings are available in the `Material Theme UI > Contrast` page, just like before.

{% include figure.html content="/screens/settingsv3/contrastMode.png" caption="Contrast Settings" %}

In addition, you can now fine-tune the degree of contrast for the **High Contrast** mode, by adjusting the **Contrast Level** slider. (Only available for premium users).

---

### Accent Mode Revamp

Another highlight of that new version is the revamp of the Accent Mode.

{% include figure.html content="/screens/settingsv3/accentMode.png" caption="Accent Mode" %}

In the new Accent Mode, you will have much more options to control the look of the Accent Mode,
such as the ability to add a second Accent Color, or to toggle which parts of the IDE you don't want to be affected by the Accent Color.

---

### Spacing Settings

Previously labeled "Compact Settings", the spacing settings have been moved to the `Material Theme UI > Spacing` page, where you can adjust the spacing of the UI elements.

{% include figure.html content="/screens/settingsv3/spacing.png" caption="Spacing Settings" %}

There, you can find the previously available compactness options, as well as two brand new settings: **Header Size** and **Status Bar Size**.

Example of a bigger header and status bars:

{% include figure.html content="/screens/settingsv3/hugeHeaderStatusBar.png" caption="Big Header and Status Bar" %}

> Note: Increasing the header size also increases the icons size! Maybe in the future we'll separate the two.

----

### New Project Tree Indicators

New **Project Tree Indicators** have been added to the list:

#### Right Border

{% include figure.html content="/screens/indicators/rightBorder.png" caption="Right Border" %}

#### Underline

{% include figure.html content="/screens/indicators/underline.png" caption="Underline" %}

#### Boxed

{% include figure.html content="/screens/indicators/boxed.png" caption="Boxed" %}

In addition, you can select to have a gradient instead of a solid color for the indicators.

{% include figure.html content="/screens/indicators/gradient.png" caption="Gradient Indicators" %}

---

### Arrows Style

Previously only available in the Atom Material Icons plugin, you can now find the **Arrows Style** setting in the `Material Theme UI > Trees > Arrows Style` page.

{% include figure.html content="/screens/settingsv3/arrowsStyle.png" caption="Arrows Style" %}

> Note: This setting is only available for users NOT using the Atom Material Icons plugin in conjunction with the Material Theme UI plugin.

---

### Borderless mode

A new mode is available under `Material Theme UI > UI Components > Borderless Mode`. When enabled, it sets the "Border Color" to be the same color as the background, effectively "hiding" the borders from the UI components.

{% include figure.html content="/screens/settingsv3/borderless.png" caption="Borderless Mode" %}

### Round Notifications

Still on the **UI Components** page, you can now make the notifications round by enabling the **Round Notifications** setting.

{% include figure.html content="/screens/roundNotifications.png" caption="Round Notifications" %}

### Material Circular Loader

The **Material Circular Loader** is now available in the settings page under `Material Theme UI > UI Components > Material Circular Loader`.

When enabled, it restores the previous circular loading icon, just like the one found in the Material Design guidelines.

{% include figure.html content="/screens/loader.png" caption="Material Circular Loader" %}

---

### Custom Overlay Transparency

From the `Material Theme UI > Features` page, alongside the Overlays feature, you can now fine-tune the transparency of the overlays.

{% include figure.html content="/screens/settingsv3/overlays.png" caption="Custom Overlay Transparency" %}

-----

### Language Additions

The Language Additions now allow you to disable specific languages rather than the whole feature.

{% include figure.html content="/screens/settingsv3/langAdditions.png" caption="Language Additions" %}

In addition, languages have much more available options than before, with more keywords added to the tray, allowing for more customization. Oh and **Rust** has been added to the available languages list!

-----

### Deprecated Features and Removals

To conclude that long list of changes, there are two features that have been unshipped from the product due to low adoption and maintenance costs:

- Recommended Plugins
- Focus Mode

The **Focus Mode** have since then been adapted to a [separate plugin](https://plugins.jetbrains.com/plugin/21237-focus-mode-2), but it is currently unmaintained, so be aware that there will probably be no more updates unless someone else takes the reins of the project.

The Recommended Plugins was removed because plugin curation demands time and constant maintenance, and besides it was drafting away from the plugin's core features.

------

Fiou, that was a lot. There are also a lot of bug fixes and improvements, as well as other deprecations and removals, but I think I've covered the most important ones. You can find more information in the changelog.

Please note that this version is still in its early stages, and bugs and performance issues can still be experienced at this point. But we are working hard to make it better, and we hope you will enjoy the new features!

That's it, thanks all folks!