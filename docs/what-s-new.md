---
layout: docs
title: What's new
group: whatsnew
toc: true

---

# What's new in Material Theme UI v6.7.0

This version integrates the new [Project Icons](https://blog.jetbrains.com/idea/2021/06/intellij-idea-eap-5/#change_project_icons) to the [Project Frame Colors](/docs/configuration/project-frame-settings.md), as well as fixing many issues as usual.
{:class='title'}



## Project Icon in the Project Frame

In the continuity in the development of the [Project Frame Feature](/docs/configuration/project-frame-settings.md), a new capability has been added to allow you to view the [Custom Project Icon](https://blog.jetbrains.com/idea/2021/06/intellij-idea-eap-5/#change_project_icons) in the toolbar.

{% include figure.html content="/screens/projectIcons.png" caption="Project Icons" %}

This can prove very useful when having multiple projects open at once. Moreover, it can be activated on a per project basis as well!

**Note**: This feature is only available for 2021.2 versions and later unfortunately, as support for project icons wasn't complete in the 2021.1 versions. This could still change though, depending on JetBrains' progress.
{:class='card-panel warn'}

----

## Better support for the XPathView plugin

This version improves support for the XPathView plugin by providing better colors to the highlighted results.

{% include figure.html content="https://user-images.githubusercontent.com/15972415/124044227-8bfe7200-d9d2-11eb-88f8-f9b9551c1626.mp4" caption="Before" %}

{% include figure.html content="https://user-images.githubusercontent.com/15972415/124044244-96207080-d9d2-11eb-8abd-9eb58e604bb4.mp4" caption="After" %}

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




# What's new in Material Theme UI v6.4.0

This version closes the gap with some leftover tasks, mainly about **UI Theme Properties** and **Color Scheme Properties**, while continuing to improve the _Striped Tool Windows_ feature.
{:class='title'}

----

## UI Theme Additions

### Learn IDE Features Theming

The plugin continues its process to theme all parts of the IDE, even those that are currently non-themable. And one of those is the **Learn IDE** plugin's pane.

{% include figure.html content="/screens/learnIDEunthemed.png" caption="Learn IDE Unthemed" %}

{% include figure.html content="/screens/learnIDEthemed.png" caption="Learn IDE Unthemed" %}

----

## Color Scheme Additions

### Inlay Hints

Another non-themed part were the _inlay hints_ that can be displayed in different places of the editor.

{% include figure.html content="/screens/inlayUnthemed.png" caption="Inlay Hints Unthemed" %}

{% include figure.html content="/screens/inlayThemed.png" caption="Inlay Hints Themed" %}

{% include figure.html content="/screens/inlayParamsUnthemed.png" caption="Inlay Parameters Unhemed" %}

{% include figure.html content="/screens/inlayParamsThemed.png" caption="Inlay Parameters Themed" %}


### Problems Toolbar

This is the small transparent toolbar that appears on the top right of the editor window to display the current file's problems. Although it looked like it was themed, the hovered buttons were not.

{% include figure.html content="/screens/problemsUnthemed.png" caption="Problems Toolbar Unthemed" %}

{% include figure.html content="/screens/problemsThemed.png" caption="Problems Toolbar Themed" %}

### Inline refactoring toolbar

Last but not least, the _inline refactoring toolbar_ was themed as well.

{% include figure.html content="/screens/inlineUnthemed.png" caption="Inline Refactoring Unthemed" %}

{% include figure.html content="/screens/inlineThemed.png" caption="Inline Refactoring Themed" %}



**NOTE:** Because these additions are on the color schemes, you will need to _Restore Color Schemes to default_ in case you edited them.
{:class='card-panel warn'}


---

## Scrollbars Track Colors

New settings have been added to the **Scrollbars** Color Scheme page to allow changing the color of the scrollbar track.

{% include figure.html content="/screens/scrollbarsTrack.png" caption="Scrollbars Track Colors" %}

---

## Improved Material Theme UI Landing Page Settings

The Material Theme UI Landing Page have been improved to simplify __accessing the Marketplace__ to buy the plugin and __activating your License__.

{% include figure.html content="/screens/landingPage.png" caption="Material Theme UI Landing Page" %}

---

## Other fixes and improvements

- Now, enabling the _Striped Tool Windows_ will require a restart if it wasn't enabled before
- Fix the _Striped Tool Windows_ issue where opening a project on the same window would cause the closed project icons to remain on the toolbars.
- Fix `NullPointerExcpetion` in Rider.
- Fix _Moonlight_ identifier under caret's color
- Add missing Android Studio Theme Keys (which will only be available once Android Studio migrates to 2021.1)

----

That's it! And as JetBrains say,

__Happy Developing!__


----------------

# What's new in Material Theme UI v6.3.3?

Bug fixes, improvements, and more information about the Subscription Model in the Plugin Page. Hopefully this will put a stop to users uninstalling the plugin! 😣
{:class='title'}


### More info about the Subscription Model

Since the new model has been implemented, many users started complaining about the change thinking that the plugin will be no longer free and that they will be left with nothing but to pay in order to continue using the plugin. Or that the plugin using a subscription model means that they will need to pay for it every year.

But that is not the case. In fact, there is a long article explaining [the reasons behind the change](about-subscription-model.md#about-material-themes-new-pricing-model). Unfortunately, people were unaware of this, and the first thing they saw is that the plugin is suddenly paid, and of course being left with incomprehension.

As a result, I've added more information in the plugin page as well, so that hopefully people will be able to better understand the circumstances of the change as well as the many options available.

### Bug Fixes

- The __[Outline buttons](configuration/component-settings.md#outline-buttons)__ are no longer transparent as transparency is not really supported in the IDE. Instead, the buttons use color mixing to simulate transparency. This should make the outlined buttons feature more comfortable to use.
- __[Language Additions](configuration/color-scheme-additions.md)__ are no longer appearing inside comments or JSX Tags. Hope this will be the last of it!
- Now when changing settings without changing the theme, the color scheme will **NOT BE RESET**.
- Same for executing actions such as the _Striped Tool Windows_, _Language Additions_, etc.

### Additions

- Two new actions have been added to the Quick Action Panels: _Outline Buttons_ and _Language Additions_.
- JavaScript and TypeScript additions requiring the __[Enforced Highlighting](configuration/color-scheme-additions.md#enforce-highlighting)__ are now annotated as such in the _Color Scheme Setting Pages_.


That's it! And as JetBrains say,

__Happy Developing!__

-----

# What's new in Material Theme UI v6.3.0?

New JavaScript and TypeScript additions, Outline Buttons improvements and a brand new **Striped Tool Windows layout**. Here's a quick glance of the new features.
{:class='title'}

{% include carbonads.html %}

### Striped Tool Windows Layout

This feature is available in the free plan.
{:class='card-panel warn'}

The new version of the Material Theme UI makes use of the new experimental feature in progress by JetBrains: The **Striped Tool Windows**.

This new layout, heavily reminding of VSCode, replaces the tool windows by larger stripes on the left and right side of the screen. It also strips the buttons of all texts, making the IDE feeling less cluttered.

{% include figure.html content="/screens/stripedToolWindows.png" caption="Striped Tool Windows" %}

This feature is disabled by default, but you can go back to the old layout via the _Settings_ or the _Material UI Actions Panel_.

{% include figure.html content="/screens/quickActionsPanel.png" caption="Quick Actions Panel" %}

----

### JavaScript and TypeScript Additions

The _Language Additions_ feature has started undergoing a big revamping. The feature, albeit useful, is suffering from many performance issues and weird behaviours. For example, PHP Additions were available even though the PHP plugin wasn't installed on the IDEs.

This is the beginning of a long refactor of such a useful feature, starting from two very popular languages: **JavaScript** and **TypeScript**.

In addition, the list of available additions has been greatly expanded for these languages, allowing users to configure almost everything.

{% include figure.html content="/screens/javaScriptAdditions.png" caption="JavaScript Additions" %}

Here's the list of new additions:

#### JavaScript

- Globals: `window`, `document`, `global`
- Primitives: `NaN`
- Keywords:
  - `abstract`, `class`, `extends`, `implements`
  - `async`, `await`
  - `constructor`
  - `static`
  - `get`, `set`
  - `if`, `else`, `for`, `while`, `do`
  - `in`, `of`, `instanceof`, `typeof`, `as`
  - `default`
  - `new`, `throw`
  - `return`, `yield`
  - `try`, `catch`, `finally`
- Other: `prototype`

#### TypeScript

- Keywords:
  - `declare`, `namespace`
  - `enum`
  - `keyof`
  - `readonly`
  - `type`, `interface`, `alias`
- Types:
  - `any`, `unknown`, `never`
  - `string`, `boolean`, `number`, `object`, `symbol`, `bigint`, `void`

Of course, the bundled color schemes have been extended to support those new additions, by comparing them with their VSCode/Sublime counterpart.

#### Enforce Highlighting

However, due to a limitation in JetBrains' syntax highlighting, some additions might not be highlighted as expected, as the language's highlighting will take precedence over the additions. To remedy that, a setting has been added in the Material Theme Settings, **Enforce Highlighting**, which would give the language additions higher precedence by making them appear as _Weak Warnings_.

{% include figure.html content="/screens/enforceHighlighting.png" caption="Enforce Highlighting" %}

This, of course, has the side effect of adding a lot of "fake errors", therefore, it's disabled by default.

----

### Scrollbars Color Settings

The **Scrollbars Color Settings** are back! Although they are available in the _General Color Scheme Colors_, not all values are available there.

This update restores this setting page so people can comfortably tweak their scrollbar colors.

More info at the [Scrollbars Page]({{ site.baseurl }}/docs/configuration/scrollbars)

----

### Other fixes and improvements

- Outlined buttons have been slightly expanded to be more similar to their normal counterpart.
- The button highlighters have been slightly improved
- Fix for [#1720](https://github.com/ChrisRM/material-theme-jetbrains/issues/1720)
- Fix for [#1722](https://github.com/ChrisRM/material-theme-jetbrains/issues/1722)
- Fix for [#1725](https://github.com/ChrisRM/material-theme-jetbrains/issues/1725)
- Fix for [#1727](https://github.com/ChrisRM/material-theme-jetbrains/issues/1727)
- Fix for [#1728](https://github.com/ChrisRM/material-theme-jetbrains/issues/1728)
