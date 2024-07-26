---
layout: docs
title: Additions
description: Language Additions
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

This feature is much more oriented development than the others as it provides new features for the Color Schemes rather than the UI. Basically, it adds more
customization to the Color Schemes by providing more syntax highlighting options than the original bundled ones, thus enhancing visual grepping.

{% include figure.html content="/screens/jsExtensions.png" caption="JavaScript Additions" %}

## Additions

At the moment the only supported languages are:

- **JavaScript**
- **TypeScript**
- **Java**
- **PHP**
- **Kotlin**
- **Python**
- **Ruby**
- **Go**
- **Rust**

Planned languages:
- **C#**
- **Dart**
- **Bash**

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

Available since 7.9.0

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

#### Enforce highlighting (deprecated since 7.10.0)

Due to a limitation in JetBrains' syntax highlighting, some additions might not be highlighted as expected,
as the language's highlighting will take precedence over the additions.
To remedy that, a setting has been added in the Material Theme Settings, **Enforce Highlighting**,
which would give the language additions higher precedence by making them appear as _Weak Warnings_.

{% include figure.html content="/screens/enforceHighlighting.png" caption="Enforce Highlighting" %}

This, of course, has the side effect of adding a lot of "fake errors", therefore, it's disabled by default.

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

## Disabling the feature

Just like other features, you can also disable language additions if you don't need them for performance reasons or simply if you don't like them.

You can find the setting under `Material Theme UI > Language Additions`.

### Advanced Toggles

Since version 9.0.0, you can now disable specific language additions, in case you don't want to use them all.

{% include figure.html content="/screens/additionsToggles.png" caption="Additions Toggles" %}

---

## FAQ

**Q**: The feature doesn't work! My var/this/debugger keywords are still the same color as the others! By the way, I'm using Darcula/IntelliJ/My custom scheme.

**A**: Since these are *Additions*, of course, other schemes would be unaware of these new entries and would revert to the default keyword color.
However, color scheme designers can provide their own color definitions for the new entries if they choose to *Export scheme* after having selected their
colors, and it will work for people having the plugin installed.
