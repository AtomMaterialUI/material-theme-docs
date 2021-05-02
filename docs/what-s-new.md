---
layout: docs
title: What's new
group: whatsnew
toc: true

---

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
