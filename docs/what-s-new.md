---
layout: docs
title: What's new
group: whatsnew
toc: true

---

# What's new in Material Theme UI v6.12.0

This version is less about new features but more about project consolidation, bug squashing, code deprecation, documentation and migration to Kotlin. It's part of a long process to make the project more stable and maintainable.
{:class='title'}

Here are a few new features though:

## Automatically Reset Color Scheme

One of the main complaints of the plugin is that it constantly asks the user to **reset their color schemes**, but in actuality most users have no idea how to nor do want to do so. 
Even though a lot of documentation is available regarding the subject, since the plugin relies a lot on the color schemes, relying on user interaction means that there is a high chance they are going to miss new updates. 

Therefore, from version 6.12.0 users can now decide to let the plugin **automatically reset the color scheme** during theme activation, i.e., at startup and whenever the theme is changed.

{% include figure.html content="/screens/autoResetSettings.png" caption="Auto Reset Color Scheme" %}

This setting only affects the bundled themes, excluding the *Custom theme*.

**Note**: This feature is **opt-in**, meaning that it is **disabled by default**, to prevent accidental erasure of user custom modifications. Make sure to backup your custom changes before enabling the feature!
{:class='card-panel warn'}

This feature is available in the free plan.
{:class='card-panel'}

## Python Additions

Another small addition to the list of [Language Additions](configuration/color-scheme-additions.md): **Python Additions**

PyCharm users and Python plugin users are now able to customize specific keywords of the Python language:

- `if`, `elif`, `else`, `for`, `while`, `do`
- `import`, `from`
- `class`
- `def`
- `as`
- `return`, `yield`
- `try`, `except`, `finally`
- `with`
- `raise`
- `print`
- `True`, `False` and `None`

## Many bug fixes, improvements and deprecations

- Migration to Java 11
- Converted 70% of the plugin in Kotlin, and fixed all detekt issues
- Fix Premium features not being loaded at start
- Fix Custom Theme not being applied at start
- Add initial support for Material Theme internal plugins
- Remove Custom Theme opacity support for many colors except *buttons*, *tree highlight* and *notifications*
- Fix issue with Buttons keeping the color of the previous theme when switching themes.
- Fix Red color being too dark in dark themes (and too bright in light themes)
- Support for new color keys for the whole UI
- Fix loading in JetBrains Gateway
- Support for new color keys for the diagrams
- Fix Load and Save Custom Themes
- Fix *Colored Open Folders* not working


This is a huge refactoring release, so there might be some regressions here and there. Please report any issues you find, thanks!
{:class='title'}

----

# What's new in Material Theme UI v6.11.1

### Features

- Add new action to manually remove lingering overlays in the rare case it happens
- Added more notifications when triggering actions 

### Fixes

- Fix Plugin not loading Premium features at start
- Fix Large Tool Windows not working in latest EAP/RC
- Fix Material Oceanic scrollbars' colors (you need to reset the color scheme) ([#34](https://github.com/mallowigi/material-theme-issues/issues/34))
- Fix Color Scheme Font resetted to Default Font even when the checkbox is unchecked ([#37](https://github.com/mallowigi/material-theme-issues/issues/37))
- Fix Fatal Error when using Darcula Theme ([#33](https://github.com/mallowigi/material-theme-issues/issues/33))


-----

# What's new in Material Theme UI v6.10.0

This release brings a lot of new features, mostly related to font customization.
{:class='title'}

### Tabs Custom Font

Continuing from the *Tab Font Size* feature, you will now be able to customize the font displayed in the editor tabs.

{% include figure.html content="/screens/customTabFont.png" caption="Tab Font Settings" %}

{% include figure.html content="/screens/tabFont.png" caption="Custom Tab Font" %}

This font will be different from the one used for the whole IDE.

You can find the setting in the [_Tab Settings_](/docs/configuration/tab-settings.md#custom-tab-font) panel.


### Tree Custom Font

Just like the tabs, you will now be able to customize the Trees' Font Family as well.

{% include figure.html content="/screens/customTreeFont.png" caption="Tree Font Settings" %}

{% include figure.html content="/screens/treeFont.png" caption="Custom Tree Font" %}

Just like the _Tree Font Size_, you will need to close and reopen the project (or restart) to see the changes.

You can find the setting in the [_Project View Settings_](/docs/configuration/project-view-settings.md#custom-font) panel.


### Use Editor Default Font

Another long awaited feature is the ability to override the current scheme's Editor Font with the default font.

While this can be done via the [Color Scheme settings](https://www.jetbrains.com/help/idea/configuring-colors-and-fonts.html#fonts), it can become a bit
daunting to have to do this manually for every color scheme. Moreso when switching between color schemes many times a day!

This setting provides a way to undo this by turning off the color schemes' defined font and use the Default Font instead.

{% include figure.html content="/screens/useEditorDefaultFont.png" caption="Use Editor Default Font" %}

**Note**: Turning on this setting will immediately cause the current color scheme to be edited, as if you changed the color scheme font with the default one.
Even if you turn it back on, the original color scheme font will not be restored, you will need to [restore the color scheme](https://www.jetbrains.com/help/idea/settings-code-style.html#scheme) to do so.
{:class='card-panel warn'}


### Reset Color Scheme Action

A new action has been added to the [Quick Actions Panel](/docs/configuration/quick-actions-panel.md), giving you the ability to [restore the color scheme](https://www.jetbrains.com/help/idea/settings-code-style.html#scheme) easily, rather than going to the settings.

You can find the action in the [Material Theme Features](/docs/configuration/quick-actions-panel.md#material-theme-features) menu.

### Support for DataSpell

Last but not least, JetBrains' DataSpell support has finally been added to the color schemes. This fixes the issue: <https://github.com/mallowigi/material-theme-issues/issues/25>.

You will need to reset your color schemes to get this change

----

### Deprecation of the External Themes

After a long consideration, starting this version, the [External Themes](/docs/development/external-themes.md) feature has been deprecated, and be no longer working.

For that, I'd like to give a proper eulogy to the feature, how it started, and what are the plans for the future.

In the beginning, there were no way of having themes in the IDE, aside from IntelliJ Light and Darcula. Then this plugin came out and with it, a few themes were available out of the box. Soon enough, other themes joined the fray, as well as the very popular **Custom Theme** feature, letting people define their own themes from a simple easy to use UI.

This was great and all, but unfortunately these custom themes weren't exportable, except from the xml config file. People started exporting their custom theme xml file for people to see, and other people had to import these colors one by one manually. Wouldn't it be better if people were allowed to install such custom themes via the plugin marketplace?

There was the main idea of the External Themes feature. By exposing an _Extension Point_, plugin developers would now be able to add their own custom theme xml file, the same way they were able to add their color schemes or code styles. The plugin would then be able to import such custom themes and add them to the list of themes on the fly. An example plugin, the famous **Dracula Theme** was used to showcase that feature, followed by the **Night Owl Theme** soon after.

However, the adoption of such a feature was very low. Even though a tutorial was available on the docs, people were mostly unaware of it. Moreover, in 2019 JetBrains finally released an API to allow people to create theme using JSON, with much more flexibility in terms of customization than the Material Theme External Themes.

As a result, people starting making themes using JetBrains' API rather than the Material Theme one, and rightfully so. At the start, these themes were incompatible with the Material Theme API, but soon enough the plugin started supporting them as well, to the detriment of the external themes. Even people that have written external themes have long removed that support in favor of the native themes. In the meantime, bugs regarding the external themes were piling up, and such issues were affected to the back of the backlog. Everytime we tried fixing those issues, we were met with more issues, since they are very incompatible with the native themes support.

So it was time to pull the plug, and let this feature sink in. From version 6.10.0, the extension point will be **unavailable**, so themes that were still using that extension point will need to remove the extension. Hopefully, most of the themes in the market have done that long ago, but otherwise they will need to update a fix removing that extension point.

**So what happens for external themes then?**

Rather than investing on the external themes, resources will be shifted to the native themes support, and their integration with the Material Theme. Currently, the plugin uses specific properties of the native themes to find out what color to use in the Material Theme API (i.e., which color to use for the _excluded color_, the _accent color_, etc.). Starting this version, themes can also define `material` based properties that the plugin will parse to figure out which color to assign to which resource.

These colors are the following:
- `material.background`
- `material.foreground`
- `material.primaryColor`
- `material.selectionBackground`
- `material.selectionForeground`
- `material.button`
- `material.second`
- `material.disabled`
- `material.contrast`
- `material.active`
- `material.border`
- `material.highlight`
- `material.tree`
- `material.notifications`
- `material.accent`
- `material.excluded`

More information on the [Custom Themes](/docs/configuration/custom-themes.md#colors-explanation)

In the future, a new settings page will be available to allow users to customize such properties from the UI directly. Stay tuned!

---

# What's new in Material Theme UI v6.9.0

### Features
- Make **External Themes** as a dynamic extension point
- Increase the number of windows/popups that are under an **overlay**:
  - Recent Files
  - Quick Switchers
  - Branch Chooser``
  - and others

### Fixes
- Fix issue where checkboxes were invisible
- Fix issue where local history information was unreadable

### Other
- More and more classes converted to Kotlin

---

# What's new in Material Theme UI v6.8.2

Yet another bug-fix release, alongside small features and an overgoing refactor.
{:class='title'}

### Features
- Add two new keywords for the [Project Frame Custom Text](/docs/configuration/project-frame-settings.md#customize-text): `{module}` and `{file}`

### Fixes
- Fix [#1823](https://github.com/ChrisRM/material-theme-jetbrains/issues/1823)
- Fix [#1772](https://github.com/ChrisRM/material-theme-jetbrains/issues/1772)
- Fix [#1808](https://github.com/ChrisRM/material-theme-jetbrains/issues/1808)
- Fix [#1790](https://github.com/ChrisRM/material-theme-jetbrains/issues/1790)
- Fix [#1825](https://github.com/ChrisRM/material-theme-jetbrains/issues/1825)

### Other
- More and more classes converted to Kotlin

---

# What's new in Material Theme UI v6.8.1

This new release is a bug-fix version, principally to rename and disable by default the experimental feature of _Large Tool Windows_ (previously named _Striped Tool Windows_).
{:class='title'}

### Fixes
- Restore the JetBrains layout as the default one
- Fix error when switching themes when inside a modal
- Fix transparency during drag and drop
- Fix _Show What's new_ option not being respected

### Other
- Renamed "_Striped Tool Windows_" to "_Large Tool Windows_" to be clearer.
- Upgrade gradle to 7.2



# What's new in Material Theme UI v6.8.0

This version's features consists in the ability to [display an overlay](/docs/configuration/features-settings.md#overlays) when modals are open, make the [Active Tab Bold](/docs/configuration/tab-settings.md#bold-active-tab), show notifications when actions are executed, and add a few more settings to the bundled wizards. And of course, a few improvements along the way. Oh, and the project is slowly converting into Kotlin :)
{:class='title'}

## Overlays

Your IDE can now display **overlays** when modals are open, providing better focus to the information at hand.

{% include figure.html content="/screens/modalOverlay.png" caption="Modals Overlay" %}

{% include figure.html content="/screens/settingsOverlay.png" caption="Settings Overlay" %}

These overlays show up in the following modal windows:
- Alerts
- Dialogs
- New File Window
- Search Everything
- Run Anything

Please open issues in the repository if you wish for more modals to be affected!

-----

## Bold Active Tab

A new option made its way to the tab settings section, which is the ability to make the current tab as bold.

{% include figure.html content="/screens/activeBoldTab.png" caption="Active Tab as Bold" %}

Also, another older setting, [Uppercase Bold Tabs](/docs/configuration/tab-settings.md#uppercase-tabs) has been stripped of its rather broken implementation of bold tabs, and is now only setting the tabs as ++Uppercase++, hence the new name.

----

## Make Run Configurations using the Compact Settings

A small but notable change is the [Run Configurations](https://www.jetbrains.com/help/idea/run-debug-configuration.html) now displaying as a dropdown list with different paddings, according to the [Compact Dropdown Lists](/docs/configuration/compact-settings.md#compact-dropdown-lists) setting, the same way the other dropdowns do.

{% include figure.html content="/screens/paddedRunConf.png" caption="Padded Run Configuration" %}

{% include figure.html content="/screens/compactRunConf.png" caption="Compact Run Configuration" %}

-----

## Show notifications upon executing actions

Another small but great improvement is the display of notifications ("toasts") after executing actions. This makes it easier to notice what exactly happened at a glance.

{% include figure.html content="/screens/notification.png" caption="Example Notification" %}

----

## Add newer settings to the Wizards

Last but not least, a few of the latest settings have been added to the [Wizard](/docs/reference/wizard.md), in order to better showcase them. These include:
- Latest **Show Overlays** feature
- Latest **Bold Active Tab** feature
- **Tab Font Size**
- **Project Frame Colors**


---------
# What's new in Material Theme UI v6.7.0

This version integrates the new [Project Icons](https://blog.jetbrains.com/idea/2021/06/intellij-idea-eap-5/#change_project_icons) to the [Project Frame Colors](/docs/configuration/project-frame-settings.md), as well as fixing many issues as usual.
{:class='title'}


## Project Icon in the Project Frame

In the continuity in the development of the [Project Frame Feature](/docs/configuration/project-frame-settings.md), a new capability has been added to allow you to view the [Custom Project Icon](https://blog.jetbrains.com/idea/2021/06/intellij-idea-eap-5/#change_project_icons) in the toolbar.

{% include figure.html content="/screens/projectIcons.png" caption="Project Icons" %}

This can prove very useful when having multiple projects open at once. Moreover, it can be activated on a per-project basis as well!

**Note**: This feature is only available for 2021.2 versions and later unfortunately, as support for project icons wasn't complete in the 2021.1 versions. This could still change though, depending on JetBrains' progress.
{:class='card-panel warn'}

----

## Better support for the XPathView plugin

This version improves support for the XPathView plugin by providing better colors to the highlighted results.

Thanks for [Unthrottled](https://github.com/Unthrottled) for the implementation!

----

## Other fixes

- **Language Additions**: Fix back `console`, `window`, `global` not being colored correctly. ([#1780](https://github.com/ChrisRM/material-theme-jetbrains/issues/1780))
- Refactor [File Status Colors](/docs/configuration/file-status-colors.md), allowing to restore the file status colors when resetting the color scheme ([#1732](https://github.com/ChrisRM/material-theme-jetbrains/issues/1732))
- Fix [#1773](https://github.com/ChrisRM/material-theme-jetbrains/issues/1773)
- Fix [#1764](https://github.com/ChrisRM/material-theme-jetbrains/issues/1764)
- Fix [#1776](https://github.com/ChrisRM/material-theme-jetbrains/issues/1776)
- Improve unused variables contrast ([#1775](https://github.com/ChrisRM/material-theme-jetbrains/issues/1775))

----

That's it. And as always,

Happy coding!
{:class='title'}


---

# What's new in Material Theme UI v6.6.0

This version brings out the first **per-project settings**, alongside new settings for the **Project Frame**. Now you can even more customize your IDE on a per-project basis!
{:class='title'}

## Project Frame Customizations

One of the latest updates of the Material Theme was a feature allowing you to add a "custom frame", or "toolbar", at the top of the window with a different color per project.

This feature, named [Project Frame Colors](/docs/configuration/project-frame-settings.md), was inspired by a [VS Code plugin](https://marketplace.visualstudio.com/items?itemName=stuart.unique-window-colors), and was positively adopted by users.

As a result, new customization capabilities were added to that feature to stand out even more.

Previously inside the **Features** tab, these settings are now located under a new tab, **Project Frame**.

{% include figure.html content="/screens/projectFrameTab.png" caption="Project Frame Settings" %}

Here's a quick recap of the new settings:

- **Show Project Name**: Whether to display the project name on the frame
- **Customize Text**: Replace the project name with a custom text

These are not much, but they signalize the beginning of a new set of improvements for this feature!

## Per-Project Settings

This is the second highlight of this release: the ability to override the global settings **on a per-project basis**.

{% include figure.html content="/screens/perProject.png" caption="Per-Project Settings" %}

As you can see in this screenshot, the two projects have different settings for the **Active Tab** and the **Project Frame**. This will allow you to customize even more your IDE, now having different settings for each project.

At this time, the only available settings are:
- Active Tab Highlight and Thickness
- Uppercase Tabs
- Tab highlight position
- Project Frame Color
- Project Frame's Project Title's Display
- Project Frame's custom text

Other settings, such as the current theme, the accent color or the compact settings, are much harder to implement since they use the same underlying UI for all windows, but maybe in the future we'll find a way to make it work.

## Other fixes and improvements

And like always, this release also has its lot of bug fixes:
- Improve Light themes by setting black borders to white
- Fixes the {0} in the "What's new" menu
- Change the _Highlight Color_ for the **Arc Dark Theme**

----

That's it. And as always,

Happy coding!
{:class='title'}


----

# What's new in Material Theme UI v6.5.0

This version finally implements the so long waited **Sync Settings**!!! Now you can finally sync your Material Theme Settings across your environments! And of course a new set of features and bug fixes.
{:class='title'}

## Sync Material Theme UI Settings

This was one of our most waited features since… forever, and it is finally here! You can finally share your Material Theme Settings and Custom Theme using the **Sync Settings** plugin.

{% include figure.html content="/screens/syncSettings.png" caption="Sync Settings" %}

Please note however that this is highly depending on the Sync Settings implementation. There are still some discrepencies with how the Sync Settings should work, as you can show in this [YouTrack issue](https://youtrack.jetbrains.com/issue/IDEA-219788). But theoretically your Material Theme Settings should be shared across your stations.

**Important note**: This feature has been tested between two stations having the same premium model i.e., both being with the free plan and both being with the premium plan. There's no guarantee of what would happen if settings were shared between a free and premium plan!
{:class='card-panel warn'}

----

## Inverted Selection Color

Latest releases drastically changed a day-one feature from the Material Theme plugin, the auto complete list's selected option color. This has been done after running a quick poll with some Material Theme users to determine which option was better in terms of contrast.

However, this change might have caused some disagreements with the previous behaviour. Some users, like me, prefer the old style.

Therefore, I've decided to include a new setting to select your preferred style, **Inverted Selection Color**.

{% include figure.html content="/screens/invertedSelectionColor.png" caption="Inverted Selection Color" %}

More information in the [Component Settings documentation](/docs/configuration/component-settings.md#inverted-selection-color)

----

### Other fixes and improvements

- Fix issue with Language Additions being applied to object keys and methods (<https://github.com/ChrisRM/material-theme-jetbrains/issues/1742>)
- Fix issue with Language Additions not being applied to JSX and Vue files (<https://github.com/ChrisRM/material-theme-jetbrains/issues/1744>)
- Fix the fatal error preventing **CodeWithMe** to be run when Material Theme UI is enabled.
- Complete _Github_ and _Github Dark_ color schemes to include missing styles already existing in other schemes (such as Rust, ReSharper, Osmorc and so on).
- Also, the **Accent Mode** settings moved to the **Features Tab** rather than **Components Tab**.
- Add a new action to display the **What's new Page** in the toolbar.

----

That's it. And as always,

Happy coding!
{:class='title'}


----

# What's new in Material Theme UI v6.4.2

This version improves the themes colors to provide better contrasts, as well as fixing the issue with some settings remaining locked despite being in the free plan. And some new features too:
{:class='title'}

## Display the What's new page on each update

Since 2021.1 JetBrains introduced the capabitilty to display a webpage in the editor, and this has been used to show, well, this page actually. However, while it's nice to know what has been updated, it can be a bit annoying to see this popping up at every update.

Therefore, a new switch has been added in the [Other Settings](configuration/other-tweaks-settings.md) tab, to let users control whether they want this page to show up.

----

## Theme improvements

Some theme colors have been improved to have better contrasts. Such themes are:
- Arc Dark
- Github
- Github Dark
- Night Owl
- Palenight
- Lighter
- Deep Ocean

Moreover, the **selected background color** is no longer transparent, as it was causing some rendering issues.

**Note**: Some of the aforementioned changes are reflected in the Color Schemes, not only on the UI Themes. Therefore, you would need to **Restore Color Schemes** for the changes to be applied.
{:class='card-panel warn'}

----

## Other improvements

- Fix Wizards and Menus to not lock settings that are part of the free plan.
- Remove border color for tool windows
- Do not reset the registry's value `transparentTitleBarAppearance` when in the free plan.
- Fix the Settings search to return the Material Theme UI Settings.


That's it. And as always,

Happy coding!
{:class='title'}


----

# What's new in Material Theme UI v6.4.1

Yet another bug fixes version.
{:class='title'}

- Fixes <https://github.com/ChrisRM/material-theme-jetbrains/issues/1739>
- Fixes <https://github.com/ChrisRM/material-theme-jetbrains/issues/1743>

This fixes the issue where changing the theme from the _Material Theme Settings_ caused the theme to not be saved.

- Fixes <https://github.com/ChrisRM/material-theme-jetbrains/issues/1745>

Fixes a threading error caused when switching color schemes.

- Fixes <https://github.com/ChrisRM/material-theme-jetbrains/issues/1747>

[accents](configuration/accents.md) and [file-status-colors](configuration/file-status-colors.md) are part of the [pricing](pricing.md#feature-comparison) but appears requiring the Premium Version.


