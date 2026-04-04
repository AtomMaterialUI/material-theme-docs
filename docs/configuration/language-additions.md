---
layout: docs
title: Language Additions
description: Augment language highlightin capabilities
group: configuration
comments: true
toc: true

previous:
  url: '/docs/configuration/custom-themes'
  title: Custom Themes
next:
  url: '/docs/configuration/islands-settings'
  title: Islands Settings

---

Enhance your code's clarity with granular syntax highlighting.
{:class='title'}

{% include carbonads.html %}

This is a **premium feature**. You can unlock it by purchasing a full plugin license or a standalone [Material Theme Language Additions](https://plugins.jetbrains.com/plugin/19309-material-theme-ui-language-additions) license.
{:class='card-panel warn'}

## Overview

Language Additions significantly improves the IDE's syntax highlighting by allowing you to individually colorize keywords, functions, and primitives. This creates a more readable and vibrant coding environment, helping you instantly distinguish between different code elements.

{% include figure.html content="/screens/settingsv3/langAdditions.png" caption="Language Additions Settings" %}

These additions are integrated directly into the **Color Scheme** settings pages for each supported language, titled `<Language> Additions`.

{% include figure.html content="/screens/additions/jsAdditions.png" caption="JavaScript Additions Settings" %}

{% include figure.html content="/screens/additions/phpAdditions.png" caption="PHP Additions Settings" %}

### Supported Languages

Language Additions are currently available for several popular languages:

- **Java**
- **Kotlin**
- **JavaScript**
- **TypeScript**
- **PHP**
- **Python**
- **Ruby**
- **Go**
- **Rust**

**Note**: We plan to allow other plugin authors to contribute their own language additions in the future.
{:class='card-panel info'}

### JavaScript / TypeScript

The following elements can be customized:

- `this`, `super`
- `if`, `else`, `for`, `while`, `do`
- `constructor`
- `return`, `yield`
- `new`, `throw`
- `async`, `await`
- `try`, `catch`, `finally`
- `export`, `import`, `require`, `from`, `default`, `module`
- `debugger`
- `prototype`
- `null`, `undefined`, `NaN`
- `true`, `false`
- `var`, `let`, `const`
- `function`, `static`
- `get`, `set`
- `abstract`, `class`, `extends`, `implements`
- `console`, `window`, `document`, `global`
- `in`, `of`, `instanceof`, `typeof`, `as`
- `public`, `private`, `protected`, `readonly`
- `declare`, `namespace`
- `type`, `interface`, `alias`
- `any`, `unknown`, `never`
- `keyof`
- `enum`
- `number`, `string`, `boolean`, `object`, `symbol`, `bigint`, `void`
- `satisfies`, `using`

### Java

The following elements can be customized:

- `abstract`, `extends`, `implements`, `native`
- `assert`
- `byte`, `short`, `int`, `long`, `float`, `double`, `char`, `boolean`, `void`
- `class`, `interface`
- `enum`
- `for`, `while`, `do`
- `if`, `else`
- `package`, `import`
- `instanceof`
- `module`, `exports`, `requires`, `opens`, `provides`, `uses`, `with`, `transitive`
- `new`
- `true`, `false`
- `null`
- `private`, `protected`, `public`
- `return`
- `static`
- `final`
- `switch`, `case`, `default`
- `synchronized`, `volatile`, `transient`
- `this`, `super`
- `throw`, `throws`
- `try`, `catch`, `finally`
- `var`

### PHP

The following elements can be customized:

- `echo`
- `exit`, `die`
- `function`
- `null`
- `private`, `public`, `protected`
- `self`
- `static`, `final`
- `true`, `false`
- `use`, `namespace`

### Kotlin

The following keywords can be customized:

- `private`, `public`, `protected`, `internal`
- `sealed`, `override`, `open`
- `object`, `companion`
- `data`
- `operator`, `infix`
- `this`, `super`
- `null`, `Unit`
- `import`, `package`
- `true`, `false`

### Python

The following elements can be customized:

- `True`, `False`, `None`
- `as`
- `async`, `await`
- `class`
- `def`
- `if`, `elif`, `else`, `while`, `for`, `do`
- `import`, `from`
- `print`
- `raise`
- `return`, `yield`
- `try`, `except`, `finally`
- `with`

### Ruby

**Keywords**:

- `require`, `require_self`, `require_relative`
- `def`
- `class`
- `module`, `namespace`
- `if`, `elsif`, `else`, `unless`
- `private`, `protected`, `public`
- `return`, `yield`
- `raise`
- `case`
- `when`
- `while`, `until`, `loop`
- `begin`, `rescue`, `finally`
- `self`
- `not`, `and`, `or`
- `do`

**Primitives**:

- `nil`
- `true`, `false`

**Methods**:

- `attr_reader`, `attr_writer`, `attr_accessor`, `attr_accessible`
- `initialize`
- `new`
- `puts`

### Go

**Functions**:

- `main`
- `make`
- `len`, `cap`
- `Print`, `Println`, `Printf`

**Keywords**:

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

**Primitives**:

- `nil`
- `true`, `false`

----

### Rust

The following keywords and elements are customizable:

- `as`
- `async`, `await`
- `crate`
- `dyn`
- `enum`
- `extern`
- `fn`
- `if`, `else`
- `impl`
- `let`, `const`
- `loop`, `while`, `for`, `break`, `continue`
- `match`
- `mod`
- `move`
- `mut`, `ref`
- `pub`
- `self`, `Self`
- `static`
- `struct`
- `return`, `yield`
- `trait`
- `true`, `false`
- `type`
- `unsafe`
- `union`
- `use`
- `where`
- `_`

----

### Advanced Toggles

Individual Language Additions can be enabled or disabled globally through the **Advanced Settings** page.

{% include figure.html content="/screens/additions/advancedToggles.png" caption="Advanced Toggles" %}

---

## FAQ

**Q**: The feature doesn't seem to be working. My keywords like `var` or `this` are the same color as the default keyword color, even though I'm using a different color scheme.

**A**: Since these are *Additions*, most color schemes are not natively aware of these specific entries and will fall back to the default keyword color defined by that scheme.

To fix this, you can manually customize the colors in the Language Additions settings page. If you're a theme designer, you can include these color definitions in your exported schemes so that users who have the plugin installed can see your custom highlighting.