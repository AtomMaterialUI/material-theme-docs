---
layout: docs
title: What's new
group: whatsnew
toc: true

---

# What's new in Material Theme UI v6.14.0

## New UI!!!

The Material Design components experienced a major overhaul to conform to the latest [Material Design specification](https://material.io/components).

{% include figure.html content="/screens/dslShowcase.png" caption="New Components Showcase" %}

Here's a brief overview of the new components:

### Text Fields, Password Fields and Number Fields

Input Fields have become larger, with a rounded border, losing their Material Design 2017 style of having a single bottom border. The reasoning behind this,
according to Material Design principles, is to make them more discoverable and interactable.

Moreover, since these larger components can take a lot of space, a new setting has been added to
the [Compact Settings](/docs/configuration/compact-settings.md#compact-fields)
to allow you to have smaller fields.

More info: <https://material.io/components/text-fields#anatomy>

### Text Areas

Text Areas underwent the same process and will now sport a rounded border, just like the text fields, making them more discoverable as well.

### ComboBoxes and Menus

ComboBoxes (or dropdowns) got the same border style as well, and their options are now showing up under the text field, instead of over it. The caret icon (the
arrow) also changed to the usual Material Design chevron.

Menus have too undergone some changes and became larger as well, with the option to tweak up the items size through
the [Compact Settings](/docs/configuration/compact-settings.md#custom-list-items-height).

More info: <https://material.io/components/menus#usage>

### Buttons

Buttons got rounder, smaller and now sport a small shadow under them, making them stand out more, like regular buttons. The other options (uppercase, outlined, etc.) are still available.

More info: <https://material.io/components/buttons#anatomy>

### Search Fields

The search fields also underwent a redesign, becoming larger and bordered, but with a sharp border. The reason for this is that they are usually encapsulated in a more complex UI, such as the "_Search Everywhere_" or "_Find in Files_" popups.

{% include figure.html content="/screens/search.png" caption="New Search Fields" %}

They are also affected by the "*Compact Fields*" setting.

### Trees

Trees got their selected item design changed to sport a rounded border just like the other components. They look like the design of the navigation drawer's
selected items from <https://material.io/components/navigation-drawer#usage>.

Moreover, a new style of [Selected Tree Indicators](/docs/configuration/project-view-settings.md#indicator-style-and-thickness), bolder and rounder, replaces
the current one. You can still use the old one from the options though, renamed "_Sharp_".

Of course, the previous options (List Items Height, Indentation, etc.) are still available.

### Other updates

Other updated elements include:

- Color Picker Fields
- Table Headers
- Menu Items

The Navigation Bar and Notifications have been redesigned too, but are only available in 2022.1+.

-----

This redesign involved a lot of refactoring of the old components, as well as a full rewrite in Kotlin. Since it is impossible to check the whole UI, there might be bugs not yet discovered. In that case, please report them to the GitHub repository as soon as possible, thanks!

This was a lot of hard work, but I hope you'll like it :)

-----

# What's new in Material Theme UI v6.13.0

The first version of 2022 introduces a new set of **Material Themes**, expanding the current collection with new themes that are not available elsewhere, as
well as new **language additions** for Ruby and initial support for **Material Theme bundles**
{:class='title'}

----

## Material Theme Bundles

Material Theme "**Bundles**" (or "plugins", or "addons") are a way to benefit of Material Theme's paid features separately, without having to pay for the core
plugin.

Since the plugin became paid, a lot of users were left disappointed by suddenly having to pay for features they have been enjoying for free, leading to a lot of
frustrations. Although I've been trying to alleviate the frustration by giving more transparency about the reasons of the move, or through free plans and
vouchers, still, for some users, the loss of their favourite feature was unacceptable.

In fact, for some, they couldn't care less about the whole package, but THAT specific feature being unavailable was a true loss.

Introducing **Material Theme Bundles**: these are separate plugins that provide alternative access to the paid features. For example, let's say you are only
interested in the [Custom Theme](/docs/configuration/custom-themes.md) feature but don't need the [Tab Settings](/docs/configuration/tab-settings.md),
[Project Frame](/docs/configuration/project-frame-settings.md) or [Language Additions](configuration/color-scheme-additions.md), you would be able to purchase
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

## New Material Themes

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

## SynthWave '84

Another theme we've been working on is the implementation of the famous [SynthWave '84](https://github.com/robb0wen/synthwave-vscode) from Robb Owen.

{% include figure.html content="/screens/wizard/synthwave.png" caption="SynthWave '84 Theme" %}

This theme is one of the most popular VSCode themes, especially thanks to it's _"Glowing Neons"_ feature, and I thought it would make a great theme for
JetBrains products as well.

Unfortunately, there is no way to get the "Glowing Neons" to work in our favourite IDEs, but be sure that we are looking for ways to make it possible!

----

## Theme Reorganization

As part of the newest additions, the theme selection menus have been reorganized to group light and dark themes together.

{% include figure.html content="/screens/themeGroups.png" caption="Theme Groups" %}

----

## Ruby Additions

And last but not least, a new [Language Addition](/docs/configuration/color-scheme-additions.md) made its way alongside the others: **Ruby**.

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

# What's new in Material Theme UI v6.12.0

This version is less about new features but more about project consolidation, bug squashing, code deprecation, documentation and migration to Kotlin. It's part
of a long process to make the project more stable and maintainable. {:class='title'}

Here are a few new features though:

## Automatically Reset Color Scheme

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

This release brings a lot of new features, mostly related to font customization. {:class='title'}

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
Even if you turn it back on, the original color scheme font will not be restored, you will need
to [restore the color scheme](https://www.jetbrains.com/help/idea/settings-code-style.html#scheme) to do so. {:class='card-panel warn'}

### Reset Color Scheme Action

A new action has been added to the [Quick Actions Panel](/docs/configuration/quick-actions-panel.md), giving you the ability
to [restore the color scheme](https://www.jetbrains.com/help/idea/settings-code-style.html#scheme) easily, rather than going to the settings.

You can find the action in the [Material Theme Features](/docs/configuration/quick-actions-panel.md#material-theme-features) menu.

### Support for DataSpell

Last but not least, JetBrains' DataSpell support has finally been added to the color schemes. This fixes the
issue: <https://github.com/mallowigi/material-theme-issues/issues/25>.

You will need to reset your color schemes to get this change

----

### Deprecation of the External Themes

After a long consideration, starting this version, the [External Themes](/docs/development/external-themes.md) feature has been deprecated, and be no longer
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

More information on the [Custom Themes](/docs/configuration/custom-themes.md#colors-explanation)

In the future, a new settings page will be available to allow users to customize such properties from the UI directly. Stay tuned!

---
