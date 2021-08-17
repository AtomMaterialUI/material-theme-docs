---
layout: docs
title: What's new
group: whatsnew
toc: true

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


