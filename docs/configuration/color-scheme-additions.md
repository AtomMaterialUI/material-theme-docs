---
layout: docs
title: Additions
description: Color Scheme Additions
group: configuration
comments: true
toc: true

previous:
  url: '/docs/configuration/accents'
  title: Accents
next:
  url: '/docs/configuration/custom-themes'
  title: Custom Themes

---

This feature is only available for premium users.
{:class='card-panel warn'}

Augment languages highlighting capabilities.
{:class='title'}

{% include carbonads.html %}

## Intro

This feature is much more oriented development than the others as it provides new features for the Color Schemes rather than the UI. Basically it adds more customization to the Color Schemes by providing more syntax highlighting options than the original bundled ones, thus enhancing visual grepping.

{% include figure.html content="/screens/jsExtensions.png" caption="JavaScript Additions" %}


## Additions

At the moment the only supported languages are:
- **JavaScript**
- **TypeScript**
- **Java**
- **PHP**
- **Kotlin**

More will come in the future.

### JavaScript

The following keywords are customizable:
- `this`, `super`
- `import`, `export`, `module`, `from`
- `null`, `undefined`
- `debugger`
- `console`
- `var`, `let`, `const`
- `function`
- `true`, `false`

New from 6.3.0:

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


### TypeScript

TypeScript augments JavaScript additions with the following keywords:
- `private`, `public`, `protected`
- `declare`
- `type`, `alias`

New from 6.3.0:


- Keywords:
  - `declare`, `namespace`
  - `enum`
  - `keyof`
  - `readonly`
  - `type`, `interface`, `alias`
- Types:
  - `any`, `unknown`, `never`
  - `string`, `boolean`, `number`, `object`, `symbol`, `bigint`, `void`

### Java

The following keywords are customizable:
- `private`, `public`, `protected`
- `static`, `final`
- `this`, `super`
- `package`, `import`
- `null`, `true`, `false`

### PHP (since 4.1)

The following keywords are customizable:
- `$this` and `self`
- `function`
- `private`, `public` and `protected`
- `static`, `final`
- `use`, `namespace`
- `true`, `false`
- `echo`
- `exit`, `die`

### Kotlin (since 5.3)

The following keywords are customizable
- `import`, `package`
- `object`, `companion`
- `operator`, `infix`
- `data`
- `private`, `public`, `protected`, `internal`
- `sealed`, `override`, `open`
- `this`, `super`
- `null`, `Unit`
- `true`, `false`

### Python (since 6.12)

The following keywords are customizable:
- `if`, `elif`, `else`, `while`, `for` and `do`
- `def` and `class`
- `with`
- `import`, `from` and `as`
- `try`, `except`, and `finally`
- `return` and `yield`
- `raise`
- `True`, `False` and `None
- `print`

----

#### Enforce Highlighting

Due to a limitation in JetBrains' syntax highlighting, some additions might not be highlighted as expected, as the language's highlighting will take precedence over the additions. To remedy that, a setting has been added in the Material Theme Settings, **Enforce Highlighting**, which would give the language additions higher precedence by making them appear as _Weak Warnings_.

{% include figure.html content="/screens/enforceHighlighting.png" caption="Enforce Highlighting" %}

This, of course, has the side effect of adding a lot of "fake errors", therefore, it's disabled by default.

----

## Disabling the feature

Just like other features, you can also disable language additions if you don't need them for performance reasons or simply if you don't like them.

You can find the setting under `Material Theme Settings > Other Tweaks tab`.

---

## FAQ

**Q**: The feature doesn't work! My var/this/debugger keywords are still the same color as the others! By the way I'm using Darcula/IntelliJ/My custom scheme.

**A**: Since these are *Additions*, of course other schemes are unaware of these new entries and willrevert back to the default keyword color. However, color scheme designers can provide their own color definitions for the new entries if they choose to *Export scheme* after having selected their colors, and it will work for people having the plugin installed.

**Q**: What about Night Owl's own additions? Won't it clash with Material Theme's?

**A**: The _Material Theme Additions_ are using the same keys as the _Night Owl Additions_, while adding new ones. Therefore, assigning a color in the plugin's page will work for NightOwl and vice-versa.



