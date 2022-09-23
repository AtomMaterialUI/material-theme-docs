---
layout: docs
title: What's new?
group: whatsnew
toc: true
---

## What's new in Material Theme UI v7.11.0

This is the latest version of the 2022.2 versions of the plugin.
With the 2022.3 EAP already around the corner, work will very soon shift to that branch instead.
That being said, this version brings two small but interesting features to the arsenal.

### Tab Separators

This version finalizes the planned tab features for 2022 by introducing support for **Tab Separators**.

These are thin, almost transparent borders that can be added between tabs to ease the distinction between them.

{% include figure.html content="/screens/noTabSeparators.png" caption="Without Tab Separators" %}

{% include figure.html content="/screens/tabSeparators.png" caption="With Tab Separators" %}

----

### Focus Mode

The second brand-new feature of this release is a feature called "Focus Mode".

Originally inspired by an extension with the same name, this feature has been added to the plugin's feature as well, with more customization options.

{% include figure.html content="/screens/focusModeOceanic.png" caption="Focus Mode (Oceanic)" %}

{% include figure.html content="/screens/focusModeLighter.png" caption="Focus Mode (Lighter)" %}

What this feature does is to help you focus on the current part of the code you're editing, by "unhighlighting" the other parts surrounding it.
This can further help you to code without distractions!

As this feature is highly dependent on the way people code, it is disabled by default, in order to not bother people used to code the usual way.

By default, the color of the unfocused parts is taken from the current theme, but you can decide to use your own color as well.

{% include figure.html content="/screens/customFocusColor.png" caption="Custom Focus Color (black)" %}

{% include figure.html content="/screens/customFocusColorWhite.png" caption="Custom Focus Color (white)" %}

You can find this feature under the "Other Tweaks" tab.

This feature is available only available for premium users having bought the [Language Additions feature](/docs/configuration/color-scheme-additions).
{:class='card-panel warn'}

### Fixes and Improvements

- Now the "What's New" page will take the current theme into consideration!
- Added more of the newest settings to the _Material Theme Wizard_: Project Tree Font, Custom UI Font, Tab Font, Animated Tabs, Focus Mode...
- Fix the fatal error happening to some users with the _Tab Highlight Indicator_.
- Fix the small error with the Project Tree refresh when the said tree is not loaded.

----

## What's new in Material Theme UI v7.10.0

This version focuses on bug fixes and improvements for various parts of the plugin.

### License checking refactor

The first improvement is a complete refactoring of the _license checking process_.

It's been almost two years since the plugin became a freemium plugin, and since then a lot of changes have been brought to the licensing system: free plan, new
features, external plugins and so on.
Moreover, with the license checking becoming asynchronous, leading to many people having access to premium features even
though they were on the free plan, and oftentimes with no possibility to turn them off.

Therefore, it was time for a refactor of the whole process. This refactor attempts to cover all use cases that we can think of:

- Free plan users
- Premium users that downgraded to the free plan
- Free plan users with the [external plugins](/docs/pricing#material-theme-bundles)
- Premium users

Besides, information about the external plugins licenses can be found on the About page.

{% include figure.html content="/screens/licenses.png" caption="Material Theme Bundles Licences" %}

---

### Custom Tree Font Improvement

Another long-awaited fix is the ability to change the _Project View Tree Font_ without having to restart the IDE.

This was something quite difficult to implement, as even within JetBrains, a restart was required upon changing the font size.

{% include figure.html content="/screens/advancedSettingsRestart.png" caption="JetBrains' Advanced Settings" %}

Thankfully, with time comes experience, and we finally found a workaround for this issue, therefore giving the full ability to customize the _Project View_
without a restart.

{% include figure.html content="/screens/treeChange.gif" caption="Tree Font Change" %}

---

### Language Additions Improvement

Last but not least, the [Languages Additions](configuration/color-scheme-additions) feature received an improvement as well, deprecating the need of
the _Enforce Highlighting_ switch.

This was done by the use of the `SeverityProvider`, which allows plugin developers to add their own "error severities". By doing so, the language additions no
longer appear as _Weak Warnings_, but instead, fall into their own custom category, therefore not getting in the way of genuine warnings.

### Other changes

- Improved the Wizard UI
- Improved the Custom Theme UI Settings
- Improved the Project Based Settings
- Fix the Project-Based Tab Highlighting applying to all projects

---

## What's new in Material Theme UI v7.9.0

### Go Additions

Another small addition to the list of [Language Additions](configuration/color-scheme-additions): **Go Additions**

GoLand users and Go plugin users are now able to customize specific keywords of the Go language:

- Functions:
    - `main`
    - `make`
    - `len`, `cap`
    - `Print`, `Println`, `Printf`
- Keywords:
    - `import`, `package`
    - `func`
    - `if`, `else`
    - `switch`, `case`, `default`, `fallthrough`
    - `for`, `range`, `map`
    - `return`
    - `var`, `const`
    - `type`
    - `defer`
    - `struct`
    - `interface`
    - `go`, `select`
    - `chan`
- Primitives:
    - `nil`
    - `true`, `false`

## Other bug fixes and additions

- Add _Conventional Commit_ plugin's color scheme support
- Fix _Synthwave_'s Caret row color
- Fix Registry's text area not cleaning up the text
- Fix indentation in the _Language Additions'_ Color Settings Pages
- Adding more recommended plugins

---

## What's new in Material Theme UI v7.8.1

This is a bug fix version that solves some long awaited issues.

- Fix NPE on the Title Frame
- Remove deprecated color scheme keys about _Markdown Navigator_
- Added newer color keys:
    - Run Toolbar Widget
    - PackageSearch
    - Search Everywhere Settings
    - Editor Tooltip Foreground
    - Main menu foreground
    - Debugger
    - Main Menu
    - Version Control Commit
    - Editor Pane Splitter
    - Version Control Marker
    - Banner Warning
- Set Toolbar widgets foreground color to *selected foreground*
- Fix Colorize Title Bar on Linux

----

## What's new in Material Theme UI v7.8.0

A small update to keep things going :)

### Animated Tabs

A small yet cool feature that makes your editor even cooler by animating the tab indicators!

{% include figure.html content="/screens/animatedtabs.gif" caption="Animated Tabs" %}

### Other fixes

- Fix the Custom UI Font not being applied when using the Experimental New UI

----

## What's new in Material Theme UI from v7.5.4 up to v7.7.1?

### Editorial

2022.2 is officially out! The JetBrains folks have been working constantly on the new version for the last three months, especially in the performance and
remote departments.
The result is a more stable experience accompanied with a lot of great features, such as:

- Migration to JDK 17
- Remote Gateway improvements
- User Experience and Quality of life improvements
- etc

But the plugin didn't stop during all this time! As updates kept coming, so was the plugin adapting itself to the newest additions and deprecations, in order to
keep being
the plugin you cherish and love.

Oh and the **New UI Preview** is officially out
for [beta-testing](https://blog.jetbrains.com/idea/2022/05/take-part-in-the-new-ui-preview-for-your-jetbrains-ide/)!
Which means that it's time for the plugin to give it a proper goodbye, so that we can leave it to the pros and concentrate of the plugin's unique features.

You can find more information in the [JetBrains Blog](https://blog.jetbrains.com/).

Now let's focus on these last three months changes:

### Sunsetting the Experimental UI

As stated above, the [New UI Preview](https://blog.jetbrains.com/idea/2022/05/take-part-in-the-new-ui-preview-for-your-jetbrains-ide/) has officially begun it's
beta-phase,
and thousands of users started experiencing what _Material Theme_ users have been experiencing all along, which is their brand-new rewriting of the UI.

For many years this new UI preview has been available as a highly experimental setting in the plugin, first labeled _Striped Tool Windows_, then _Large Tool
Windows_, and
finally _Experimental UI_, giving users the opportunity to experience it first-hand, even in it's super-beta-experimental state.

But now that the cat is out of the bag, there's no need to keep it in the plugin anymore, and therefore the setting has been removed altogether, as it became
incompatible
with the _New UI Preview_ plugin.

Note: The _New UI Preview program_ has since then been closed, so there's no way to download the plugin anymore officially. However, we still have a copy of it
available <a href="http://dl.material-theme.com/newUI" download>here</a>. You can also find it in our Slack channel.
{:class='card-panel warn'}

### Colorize Title Bar

The second highlight of this version is also related to the *New UI users only*, and is about an extension of
the [Project Frame](/docs/configuration/project-frame-settings): the ability to **Colorize the Title Bar**!

{% include figure.html content="/screens/colorized.png" caption="Colorize title bar" %}

This was something that wasn't possible before, but the New UI introduced a flashy new "*title bar* component" to replace the original title bar (the same way
the Material Theme [did in the past](/docs/configuration/other-tweaks-settings#themed-titlebar)), and this one is customizable.

So there it is, the perfect **Project Frame**! And it can be customized per project!

Note: As usual, you can still disable it from the [Project Frame Settings](/docs/configuration/project-frame-settings). And it's available in the separate
standalone plugin as well.
{:class='card-panel warn'}


---------

## What's new in Material Theme UI v7.5.4

Yet another small update that introduces new exciting features.

### Recommended plugins

The Material Theme UI is a great plugin, but there are also literally thousands of other plugins available in the Marketplace. Some are great, some not so much,
but in any case it can be
a little hard to get to find out the hidden pearls in this sea of available options.

Introducing the **Recommended plugins**: It's another settings page found inside the _Material Theme Settings_ that showcases a hand-picked list of useful
plugins and remarkable themes for you to discover at a glance rather than navigating the whole sea of available plugins in the Marketplace.

{% include figure.html content="/screens/recommendedPlugins.png" caption="Recommended Plugins" %}

Most of these plugins are UI-related, grouped into three sections:

- **Recommended plugins**: Hand-picked list of great plugins to use alongside the Material Theme UI.
- **Material Plugins**: These are the standalone paid plugins that you can buy separately instead of the main plugin.
- **Great Themes**: Curated list of amazing themes that can be sideloaded with the Material Theme UI.

Come take a look! And if you have other great recommendations, please post them on the chat or in the GitHub repo!

Oh and by the way: this is a purely subjective list! So please don't be mad if a plugin you love isn't on the list!
{:class='card-panel warn'}

---

## What's new in Material Theme UI v7.5.3

### New StatusBar Widget: **Current Project**

This version introduces a new widget to the Status Bar, which displays the current project and gives the ability to open other projects via a menu. This is
based on a similar widget available on the title bar in the new UI.

{% include figure.html content="/screens/projectsWidget.png" caption="Recent Projects Widget" %}

### Material Theme Bundles

This version finalizes the support of the _Material Theme Bundles_, by releasing 5 packages related to the different paid features:

- [Material Theme High Contrast](https://plugins.jetbrains.com/plugin/17456-material-theme-ui-high-contrast)
- [Material Theme Custom Theme](https://plugins.jetbrains.com/plugin/19308-material-theme-ui-custom-theme)
- [Material Theme Project Frame](https://plugins.jetbrains.com/plugin/19310-material-theme-ui-project-frame)
- [Material Theme Language Additions](https://plugins.jetbrains.com/plugin/19309-material-theme-ui-language-additions)
- [Material Theme Extras](https://plugins.jetbrains.com/plugin/19250-material-theme-ui-extras)

As stated in [Material Theme Bundles](/docs/pricing#material-theme-bundles) section, these plugins are to be loaded as an alternate way to purchase a license,
by providing a way to purchase only the features that are relevant to you.

For instance, if you are only interested in the *Language Additions* feature and don't want to purchase the whole package, you can decide to install the
relevant plugin at a lower price.

**Important**: If you already have purchased the main plugin, purchasing these plugins will do nothing, so be careful! These only make sense if you are using
the Free Version (and not to be confused with the Material Theme Lite)!
{:class='card-panel warn'}

### Other fixes

- Fix [#187](https://github.com/mallowigi/material-theme-issues/issues/187)
- Update Translations

---

## What's new in Material Theme UI v7.5.2

### Custom Color Scheme in Custom Themes

This update expands the functionalities of the [Custom Theme](/docs/configuration/custom-themes) by giving the ability to specify a color scheme to your custom
theme.

{% include figure.html content="/screens/colorSchemeCustomTheme.png" caption="Custom Theme Color Scheme" %}

This is particularly useful if you have "Custom Color Schemes" and want to assign them to your own custom theme.

Note: If the color scheme cannot be found (for example if you decide to use the `_@user` schemes or if you select a plugin based scheme), it will automatically
revert to _Darcula_)

### Other fixes

- Fix [#168](https://github.com/mallowigi/material-theme-issues/issues/168)
- Attempt at fixing [#174](https://github.com/mallowigi/material-theme-issues/issues/174)
- Initial support for "_Material Theme Extension Plugins_"

---

## What's new in Material Theme UI v7.5.1

This small update fixes the Experimental UI not working after the update to 2022.1.2, as well as adding more languages support in the color schemes: **Angular
Template**, **Qute** and **Sonarlint**.

In addition, the color for _Modified Files_ in the _SynthWave '84_ theme has been changed as well.


---

## What's new in Material Theme UI v7.5.0

### Japanese, Chinese and Korean support

This version adds support for three additional languages: **Japanese**, **Chinese (simplified)** and **Korean**.

Thanks to machine learning and external translators, we've been finally able to translate the plugin into the three popular asian languages.
To enable it, you'll need
to [install the IDE language packs](https://blog.jetbrains.com/idea/2021/04/use-updated-language-packs-for-intellij-based-ides-with-translation-plugin/), and
the plugin will be automatically translated to the corresponding language.

{% include figure.html content="/screens/langs/japanese.png" caption="Settings - Japanese" %}

{% include figure.html content="/screens/langs/korean.png" caption="Custom Theme - Korean" %}

{% include figure.html content="/screens/langs/chinese.png" caption="Actions - Chinese" %}

{% include figure.html content="/screens/langs/wizard.png" caption="Wizard - Chinese" %}

Of course, there could be some inconsistencies between the english texts and their asian counterparts.
In such cases, we'd appreciate if you could report such inconsistencies, and perhaps provide better translations!

Note: You can only use one language pack at a time!
Please make sure to **remove** the languages you don't use, or you would end up with mixed translations!
{:class='card-panel warn'}

---

## What's new in Material Theme UI v7.4.0

### New Material Theme Widgets

#### Material theme widget

The old _Material Theme widget_ has been redone to better blend with the other widgets.
It sports the current theme name and icon, and you can open a menu with the list of available themes.

<div class="masonry">

{% include figure.html content="/screens/newWidgets.png" caption="Material Theme + Accent Widget" %}

{% include figure.html content="/screens/widgetsMenu.png" caption="Theme Selection Widget" %}

</div>

#### Accent color widget

Just besides the theme widget, you can also display the _Accent Color Widget_.
It sports the current accent color, and displays the list of available predefined accent colors when clicked.

<div class="masonry">

{% include figure.html content="/screens/newWidgets.png" caption="Material Theme + Accent Widgets" %}

{% include figure.html content="/screens/accentColorWidget.png" caption="Accent Color Widget" %}

</div>

#### Deprecation of the old Material theme widget

You can still find the previous legacy widget:

<div class="masonry">

{% include figure.html content="/screens/widgetStatusbar.png" caption="Status Bar Widget" %}

{% include figure.html content="/screens/statusAccentWidget.png" caption="Accent Widget" %}

</div>

---

### Other fixes

As usual, this version also comes with its bug fixes and improvements:

- Fix visual issue when Menus weren't highlighted in the _Legacy Material Design_
- Fix fatal error when opening the wizard
- Fix fatal error when opening the Command Palette
- Fix issue where the Project Tree being colored in _Accent Mode_
- Fix minimum size of fields when using _Compact Fields_
- Fix minimum size of table headers when using _Compact Table Cells_
- Make _Tab Shadows_ feature free

----

## What's new in Material Theme UI v7.0.0-7.3.2

The 7.X.X versions up to 7.3.2 contained mainly the same changes than of the 6.14.X up to 6.16.X, but for the 2022.1 IDEs. However, there are some changes that
need to be mentioned:

### Large Tool Windows deprecation and Experimental UI

As with every major IDE updates, a lot of work needed to be done to support the newest releases, alongside their breaking changes and deprecations.

One of the features that got the cut was the very famous **Large Tool Windows**, which was sometimes buggy but nonetheless a very awaited redesign. Since this
wasn't a feature made by the plugin, it was very difficult to open the feature to the public despite the barriers, but this time it became utterly impossible,
because it got merged with the complete redesign of the IDE.

As a result, the old setting has been removed, and temporarily replaced with a new setting to open this **Experimental UI** instead. However, we do **NOT**
recommend using this UI as this is a **largely buggy and highly suspect to change between new releases of the IDE**. If you're aware of the risks, you can try
it, but don't come complaining if there are issues.

----

## What's new in Material Theme UI v6.16.1

This is a bugfix update for many issues related to the new UI.

### Fixes

- Improve the UI of the tag buttons: alignment, close button, color, etc
- Add exclusions to replacing specific text fields: Plugins pages, New File popup, JFormDesigner inline edit, Prettier options etc
- Fix outlined buttons disabled border color
- Limit the minimum left and right indent at 4 as it wouldn't work below it.
- Synthwave color scheme improvements: Kotlin instance field color
- Prevent showing the "what's new" popup when the setting is disabled

---

## What's new in Material Theme UI v6.16.0

### New Feature: **Custom UI Font**

A new setting has been added to the Material UI Settings Features: **Custom UI Font**. This font replaces (or rather, expands on) the
original [Material Fonts](/docs/configuration/features-settings#material-fonts) to provide the ability to choose your own font.

Actually, this feature supplements the _Custom Font_ feature provided by JetBrains, so this is just another way to change the IDE font.

This feature is available to all users.

### Fixes:

- Added back missing properties from legacy Material Design style (selected items, color panels etc)
- Remove need for restart when applying legacy _Material Design style_
- Fix **Scrollbars Color Settings** non-translated texts on Linux
- Align new comboboxes with other fields
- Fix buttons text vertical and horizontal alignments
- Add accent color to focused fields
- Add new Material UI Border to fields that removed it (_Find in Files_, _Plugins Search_ and others)
- Fix text not showing when editing table cells
- Fix Option button arrow

----

## What's new in Material Theme UI v6.15.0

### Legacy Material Design

The latest version introduced a new UI with a lot of changes: broader components, rounder buttons and so on. However, not all people were happy with the
changes, be it because they didn't like the new style, or simply because they were used to the old, sharper design and the signature of the legacy Material
Design of 2016.

Therefore, in order to not drive people away, we decided to add it back! Disabled by default, you can find it inside the **Components** tab, in the Material
Theme settings.

Please note however that this style remains **deprecated**. It means, we're not planning to remove it for the moment, but we won't be adding any new features
nor fix any bugs that might occur in the future.

### Fixes

- Add a bit more spacing between buttons.
- Remove the glitch that happened during selection in lists.

----

## What's new in Material Theme UI v6.14.0

### New UI!!!

The Material Design components experienced a major overhaul to conform to the latest [Material Design specification](https://material.io/components).

{% include figure.html content="/screens/dslShowcase.png" caption="New Components Showcase" %}

Here's a brief overview of the new components:

#### Text Fields, Password Fields and Number Fields

Input Fields have become larger, with a rounded border, losing their Material Design 2017 style of having a single bottom border. The reasoning behind this,
according to Material Design principles, is to make them more discoverable and interactable.

Moreover, since these larger components can take a lot of space, a new setting has been added to
the [Compact Settings](/docs/configuration/compact-settings#compact-fields)
to allow you to have smaller fields.

More info: <https://material.io/components/text-fields#anatomy>

#### Text Areas

Text Areas underwent the same process and will now sport a rounded border, just like the text fields, making them more discoverable as well.

#### ComboBoxes and Menus

ComboBoxes (or dropdowns) got the same border style as well, and their options are now showing up under the text field, instead of over it. The caret icon (the
arrow) also changed to the usual Material Design chevron.

Menus have too undergone some changes and became larger as well, with the option to tweak up the items size through
the [Compact Settings](/docs/configuration/compact-settings#custom-list-items-height).

More info: <https://material.io/components/menus#usage>

#### Buttons

Buttons got rounder, smaller and now sport a small shadow under them, making them stand out more, like regular buttons. The other options (uppercase, outlined,
etc.) are still available.

More info: <https://material.io/components/buttons#anatomy>

#### Search Fields

The search fields also underwent a redesign, becoming larger and bordered, but with a sharp border. The reason for this is that they are usually encapsulated in
a more complex UI, such as the "_Search Everywhere_" or "_Find in Files_" popups.

{% include figure.html content="/screens/search.png" caption="New Search Fields" %}

They are also affected by the "*Compact Fields*" setting.

#### Trees

Trees got their selected item design changed to sport a rounded border just like the other components. They look like the design of the navigation drawer's
selected items from <https://material.io/components/navigation-drawer#usage>.

Moreover, a new style of [Selected Tree Indicators](/docs/configuration/project-view-settings#indicator-style-and-thickness), bolder and rounder, replaces
the current one. You can still use the old one from the options though, renamed "_Sharp_".

Of course, the previous options (List Items Height, Indentation, etc.) are still available.

#### Other updates

Other updated elements include:

- Color Picker Fields
- Table Headers
- Menu Items

The Navigation Bar and Notifications have been redesigned too, but are only available in 2022.1+.

-----

This redesign involved a lot of refactoring of the old components, as well as a full rewrite in Kotlin. Since it is impossible to check the whole UI, there
might be bugs not yet discovered. In that case, please report them to the GitHub repository as soon as possible, thanks!

This was a lot of hard work, but I hope you'll like it :)

-----

## What's new in Material Theme UI v6.13.0

The first version of 2022 introduces a new set of **Material Themes**, expanding the current collection with new themes that are not available elsewhere, as
well as new **language additions** for Ruby and initial support for **Material Theme bundles**
{:class='title'}

----

### Material Theme Bundles

Material Theme "**Bundles**" (or "plugins", or "addons") are a way to benefit of Material Theme's paid features separately, without having to pay for the core
plugin.

Since the plugin became paid, a lot of users were left disappointed by suddenly having to pay for features they have been enjoying for free, leading to a lot of
frustrations. Although I've been trying to alleviate the frustration by giving more transparency about the reasons of the move, or through free plans and
vouchers, still, for some users, the loss of their favourite feature was unacceptable.

In fact, for some, they couldn't care less about the whole package, but THAT specific feature being unavailable was a true loss.

Introducing **Material Theme Bundles**: these are separate plugins that provide alternative access to the paid features. For example, let's say you are only
interested in the [Custom Theme](/docs/configuration/custom-themes) feature but don't need the [Tab Settings](/docs/configuration/tab-settings),
[Project Frame](/docs/configuration/project-frame-settings) or [Language Additions](configuration/color-scheme-additions), you would be able to purchase
it separately and benefit from it without having to buy a premium license.

Of course, these bundles would not be free; otherwise there would be no point of having to purchase a premium license. But they will be at a lesser price than
the whole package.

At the moment, the only bundle available is the [High Contrast](https://plugins.jetbrains.com/plugin/17456-material-theme-ui-high-contrast) feature for an
annual cost of $3 only.

Others will follow, depending on the demand. Currently, the planned ones for 2022 are:

- Custom Theme
- Language Additions
- Project Frame Colors
- Project View Settings

**PLEASE NOTE THAT THESE BUNDLES MUST NOT BE BOUGHT IF YOU ALREADY HAVE A PREMIUM LICENSE.** They only provide access to the paid features to people on the free
plan, so buying them when you have a paid plan would only result in paying twice for the same thing. {:class='card-panel warn'}

----

### New Material Themes

You might be aware that the original Material Themes from [@equinusocio](https://github.com/equinusocio) have not had changes for a long time. It's fine, these
themes are awesome and a personal favorite too. However, the Material Theme color scheme is great on its own, and can easily live in different _environments_
than the ocean and the night. Therefore, we've decided to run our imagination run wild and started working on new "environmental themes".

##### Introducing Nature Material Themes!!!

{% include figure.html content="/screens/wizard/forest.png" caption="Forest Theme" %}

{% include figure.html content="/screens/wizard/skyblue.png" caption="Sky Blue Theme" %}

{% include figure.html content="/screens/wizard/volcano.png" caption="Volcano Theme" %}

{% include figure.html content="/screens/wizard/sandybeach.png" caption="Sandy Beach Theme" %}

As said previously, these themes are completely new, and thus can be subject to a few modifications in the future, especially regarding contrast.

**Let me know what you think of them!**

----

### SynthWave '84

Another theme we've been working on is the implementation of the famous [SynthWave '84](https://github.com/robb0wen/synthwave-vscode) from Robb Owen.

{% include figure.html content="/screens/wizard/synthwave.png" caption="SynthWave '84 Theme" %}

This theme is one of the most popular VSCode themes, especially thanks to it's _"Glowing Neons"_ feature, and I thought it would make a great theme for
JetBrains products as well.

Unfortunately, there is no way to get the "Glowing Neons" to work in our favourite IDEs, but be sure that we are looking for ways to make it possible!

----

### Theme Reorganization

As part of the newest additions, the theme selection menus have been reorganized to group light and dark themes together.

{% include figure.html content="/screens/themeGroups.png" caption="Theme Groups" %}

----

### Ruby Additions

And last but not least, a new [Language Addition](/docs/configuration/color-scheme-additions) made its way alongside the others: **Ruby**.

Just like _Python_, **Ruby Additions** are now available for Ruby-based IDEs, and provide additional coloring for the following keywords:

**Keywords**:

- `begin`, `rescue`, `finally`
- `case`
- `when`
- `class`
- `def`
- `do`
- `if`, `elsif`, `else`, `unless`
- `module`, `namespace`
- `not`, `and`, `or`
- `private`, `protected`, `public`
- `raise`
- `require`, `require_self`, `require_relative`
- `return`, `yield`
- `self`
- `while`, `until`, `loop`

**Primitives**:

- `nil`
- `true`, `false`

**Methods**:

- `attr_reader`, `attr_writer`, `attr_accessor`
- `initialize`
- `new`
- `puts`

{% include figure.html content="/screens/ruby-additions.png" caption="Ruby Additions" %}

**Note**: As usual, this feature is only available for premium users. {:class='card-panel warn'}

---

## What's new in Material Theme UI v6.12.0

This version is less about new features but more about project consolidation, bug squashing, code deprecation, documentation and migration to Kotlin. It's part
of a long process to make the project more stable and maintainable. {:class='title'}

Here are a few new features though:

### Automatically Reset Color Scheme

One of the main complaints of the plugin is that it constantly asks the user to **reset their color schemes**, but in actuality most users have no idea how to
nor do want to do so. Even though a lot of documentation is available regarding the subject, since the plugin relies a lot on the color schemes, relying on user
interaction means that there is a high chance they are going to miss new updates.

Therefore, from version 6.12.0 users can now decide to let the plugin **automatically reset the color scheme** during theme activation, i.e., at startup and
whenever the theme is changed.

{% include figure.html content="/screens/autoResetSettings.png" caption="Auto Reset Color Scheme" %}

This setting only affects the bundled themes, excluding the *Custom theme*.

**Note**: This feature is **opt-in**, meaning that it is **disabled by default**, to prevent accidental erasure of user custom modifications. Make sure to
backup your custom changes before enabling the feature!
{:class='card-panel warn'}

This feature is available in the free plan. {:class='card-panel'}

### Python Additions

Another small addition to the list of [Language Additions](configuration/color-scheme-additions): **Python Additions**

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

### Many bug fixes, improvements and deprecations

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

## What's new in Material Theme UI v6.11.1

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

## What's new in Material Theme UI v6.10.0

This release brings a lot of new features, mostly related to font customization. {:class='title'}

### Tabs Custom Font

Continuing from the *Tab Font Size* feature, you will now be able to customize the font displayed in the editor tabs.

{% include figure.html content="/screens/customTabFont.png" caption="Tab Font Settings" %}

{% include figure.html content="/screens/tabFont.png" caption="Custom Tab Font" %}

This font will be different from the one used for the whole IDE.

You can find the setting in the [_Tab Settings_](/docs/configuration/tab-settings#custom-tab-font) panel.

### Tree Custom Font

Just like the tabs, you will now be able to customize the Trees' Font Family as well.

{% include figure.html content="/screens/customTreeFont.png" caption="Tree Font Settings" %}

{% include figure.html content="/screens/treeFont.png" caption="Custom Tree Font" %}

Just like the _Tree Font Size_, you will need to close and reopen the project (or restart) to see the changes.

You can find the setting in the [_Project View Settings_](/docs/configuration/project-view-settings#custom-font) panel.

### Use Editor Default Font

Another long awaited feature is the ability to override the current scheme's Editor Font with the default font.

While this can be done via the [Color Scheme settings](https://www.jetbrains.com/help/idea/configuring-colors-and-fonts.html#fonts), it can become a bit
daunting to have to do this manually for every color scheme. Moreso when switching between color schemes many times a day!

This setting provides a way to undo this by turning off the color schemes' defined font and use the Default Font instead.

{% include figure.html content="/screens/useEditorDefaultFont.png" caption="Use Editor Default Font" %}

**Note**: Turning on this setting will immediately cause the current color scheme to be edited, as if you changed the color scheme font with the default one.
Even if you turn it back on, the original color scheme font will not be restored, you will need
to [restore the color scheme](https://www.jetbrains.com/help/idea/settings-code-style.html#scheme) to do so. {:class='card-panel warn'}

### Reset Color Scheme Action

A new action has been added to the [Quick Actions Panel](/docs/configuration/quick-actions-panel), giving you the ability
to [restore the color scheme](https://www.jetbrains.com/help/idea/settings-code-style.html#scheme) easily, rather than going to the settings.

You can find the action in the [Material Theme Features](/docs/configuration/quick-actions-panel#material-theme-features) menu.

### Support for DataSpell

Last but not least, JetBrains' DataSpell support has finally been added to the color schemes. This fixes the
issue: <https://github.com/mallowigi/material-theme-issues/issues/25>.

You will need to reset your color schemes to get this change

----

### Deprecation of the External Themes

After a long consideration, starting this version, the [External Themes](/docs/development/external-themes) feature has been deprecated, and be no longer
working.

For that, I'd like to give a proper eulogy to the feature, how it started, and what are the plans for the future.

In the beginning, there were no way of having themes in the IDE, aside from IntelliJ Light and Darcula. Then this plugin came out and with it, a few themes were
available out of the box. Soon enough, other themes joined the fray, as well as the very popular **Custom Theme** feature, letting people define their own
themes from a simple easy to use UI.

This was great and all, but unfortunately these custom themes weren't exportable, except from the xml config file. People started exporting their custom theme
xml file for people to see, and other people had to import these colors one by one manually. Wouldn't it be better if people were allowed to install such custom
themes via the plugin marketplace?

There was the main idea of the External Themes feature. By exposing an _Extension Point_, plugin developers would now be able to add their own custom theme xml
file, the same way they were able to add their color schemes or code styles. The plugin would then be able to import such custom themes and add them to the list
of themes on the fly. An example plugin, the famous **Dracula Theme** was used to showcase that feature, followed by the **Night Owl Theme** soon after.

However, the adoption of such a feature was very low. Even though a tutorial was available on the docs, people were mostly unaware of it. Moreover, in 2019
JetBrains finally released an API to allow people to create theme using JSON, with much more flexibility in terms of customization than the Material Theme
External Themes.

As a result, people starting making themes using JetBrains' API rather than the Material Theme one, and rightfully so. At the start, these themes were
incompatible with the Material Theme API, but soon enough the plugin started supporting them as well, to the detriment of the external themes. Even people that
have written external themes have long removed that support in favor of the native themes. In the meantime, bugs regarding the external themes were piling up,
and such issues were affected to the back of the backlog. Everytime we tried fixing those issues, we were met with more issues, since they are very incompatible
with the native themes support.

So it was time to pull the plug, and let this feature sink in. From version 6.10.0, the extension point will be **unavailable**, so themes that were still using
that extension point will need to remove the extension. Hopefully, most of the themes in the market have done that long ago, but otherwise they will need to
update a fix removing that extension point.

**So what happens for external themes then?**

Rather than investing on the external themes, resources will be shifted to the native themes support, and their integration with the Material Theme. Currently,
the plugin uses specific properties of the native themes to find out what color to use in the Material Theme API (i.e., which color to use for the _excluded
color_, the _accent color_, etc.). Starting this version, themes can also define `material` based properties that the plugin will parse to figure out which
color to assign to which resource.

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

More information on the [Custom Themes](/docs/configuration/custom-themes#colors-explanation)

In the future, a new settings page will be available to allow users to customize such properties from the UI directly. Stay tuned!

---
