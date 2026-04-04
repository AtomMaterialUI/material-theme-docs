---
layout: docs
title: Additions
description: Language Additions
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

Augments syntax highlighting capabilities.
{:class='title'}

{% include carbonads.html %}

This feature is only available for premium users. You can either buy a premium license for the plugin, or purchase the license for this feature only by going to this link: [Material Theme Language Additions](https://plugins.jetbrains.com/plugin/19309-material-theme-ui-language-additions).
{:class='card-panel warn'}

## Language Additions

This feature enhances the IDE's syntax highlighting by allowing you to colorize keywords, functions, and primitives individually. This results in a more vibrant coding environment and helps you quickly distinguish between different types of code elements.

{% include figure.html content="/screens/settingsv3/langAdditions.png" caption="Language Additions" %}

You can find these additions in specific _Color Scheme_ settings pages, denoted by the `<Language> Additions`.

{% include figure.html content="/screens/additions/jsAdditions.png" caption="JavaScript Additions" %}

{% include figure.html content="/screens/additions/phpAdditions.png" caption="PHP Additions" %}

### Languages

Language Additions are available for the most popular languages, such as:

- **Java**
- **Kotlin**
- **JavaScript**
- **TypeScript**
- **PHP**
- **Python**
- **Ruby**
- **Go**
- **Rust**

**Note**: In the future, we might give the option for other plugin authors to add their own additions as well.
{:class='card-panel info'}

### JavaScript/TypeScript

The following keywords are customizable:

- `this`, `super`
- `if`, `else`, `for`, `while`, `do`
- `constructor`,
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

The following keywords are customizable:

- `abstract` `extends`, `implements`, `native`
- `assert`
- `byte`, `short`, `int`, `long`, `float`, `double`, `char`, `boolean`, `void`
- `class`, `interface`
- `enum`
- `for`, `while`, `do`, 
- `if`, `else`
- `package`, `import`
- `instanceof`
- `module`, `exports`, `requires`, `opens`, `provides`, `uses`, `with`, `transitive`, `uses`
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
- `throw`, `throws`, 
- `try`, `catch`, `finally`
- `var`

### PHP

The following keywords are customizable:

- `echo`
- `exit`, `die`
- `function`
- `null`
- `private`, `public` and `protected`
- `self`
- `static`, `final`
- `true`, `false`
- `use`, `namespace`

### Kotlin

The following keywords are customizable

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

The following keywords are customizable:

- `True`, `False` and `None`
- `as`
- `async`, `await`
- `class`
- `def`
- `if`, `elif`, `else`, `while`, `for`, `do`
- `import`, `from`
- `print`
- `raise`
- `return` and `yield`
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

The following keywords are customizable:

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

You can enable/disable the language additions for specific languages by using these toggles.

{% include figure.html content="/screens/additions/advancedToggles.png" caption="Advanced Toggles" %}

---

## FAQ

**Q**: The feature doesn't work! My var/this/debugger keywords are still the same color as the others! By the way, I'm using Darcula/IntelliJ/My custom scheme.

**A**: Since these are *Additions*, of course, other schemes would be unaware of these new entries and would revert to the default keyword color.
However, color scheme designers can provide their own color definitions for the new entries if they choose to *Export scheme* after having selected their
colors, and it will work for people having the plugin installed.