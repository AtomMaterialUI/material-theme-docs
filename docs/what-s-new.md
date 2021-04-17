---
layout: docs
title: What's new in Material Theme UI v6.3.0
group: whatsnew
toc: true

---

What's new in Material Theme UI v6.3.0? New JavaScript and TypeScript additions, Outline Buttons improvements and a brand new **Striped Tool Windows layout**. Here's a quick glance of the new features.
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
- A new action have been added to the Quick Action Panels: _Outline Buttons_.
- Fix for [#1720](https://github.com/ChrisRM/material-theme-jetbrains/issues/1720)
- Fix for [#1725](https://github.com/ChrisRM/material-theme-jetbrains/issues/1725)
