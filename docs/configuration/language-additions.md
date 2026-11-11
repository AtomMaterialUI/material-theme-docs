---
layout: docs
title: Language Additions
description: Augment language highlightin capabilities
group: configuration
comments: true
toc: true

previous:
  url: '/docs/configuration/theme-color-overrides'
  title: Theme Color Overrides
next:
  url: '/docs/configuration/islands-settings'
  title: Islands Settings

---

Enhance your code's clarity with granular syntax highlighting.
{:class='title'}

{% include carbonads.html %}

This is a **premium feature**. You can unlock it by purchasing a full plugin license or a
standalone [Material Theme Language Additions](https://plugins.jetbrains.com/plugin/19309-material-theme-ui-language-additions) license.
{:class='card-panel warn'}

## Overview

Language Additions significantly improves the IDE's syntax highlighting by allowing you to individually colorize keywords, functions, and
primitives. This creates a more readable and vibrant coding environment, helping you instantly distinguish between different code elements.

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
- **HTML**
- **CSS**

---

## Custom Language Additions

You can extend syntax highlighting beyond predefined keywords by defining your own custom entries for any supported language. Whether you
want to highlight project-specific utility functions, domain models, or distinct naming conventions, custom entries let you assign
individual colors on the fly.

{% include figure.html content="/screens/additions/customEntries.png" caption="Custom Language Additions Settings" %}

### How to Configure Custom Additions

1. Open **Settings | Appearance & Behavior | Material Theme | Language Additions**.
2. Expand the **Custom Entries** group.
3. Enter comma-separated or newline-separated identifier names for your desired language.
4. **Wildcards**: You can append an asterisk `*` to define prefix-matching patterns (e.g. entering `use*` will automatically match and
   highlight `useState`, `useEffect`, `useCustomHook`, etc.).
5. Click **OK** (you need to reopen the settings for the elements to be added).
6. Navigate to the language's additions color scheme page (e.g. **Editor | Color Scheme | JavaScript Additions**) — your custom entries will
   appear under the `Custom` category (e.g. `Custom//useState`), ready for individual color customization.

---

## Language Additions Providers

To streamline highlighting for popular modern frameworks and libraries without manual entry, the plugin includes built-in **Language
Additions Providers**. These providers automatically categorize and expose framework-specific constructs into the respective Color Scheme
settings pages.

<div class="masonry" markdown="0">
{% include figure.html content="/screens/additions/customProvidersJS.png" caption="Custom Providers - JavaScript" %}
{% include figure.html content="/screens/additions/customProvidersKotline.png" caption="Custom Providers - Kotlin" %}
</div>

### Built-in Providers

- **React Hooks**: `useState`, `useEffect`, `useContext`, `useReducer`, `useMemo`, `useCallback`, etc.
- **Angular**: `@Component`, `@Injectable`, `@Directive`, `@Pipe`, `ngFor`, `ngIf`...
- **Vue**: `use*`, `watch*`, `computed`, `ref`, `reactive`...
- **NestJS**: `@Controller`, `@Injectable`, `@Module`, `@Get`, `@Post`...
- **Django**: `@login_required`, `@app.route`, `views.View`...
- **Spring**: `@Controller`, `@Service`, `@Repository`, `@Autowired`, `@Component`...
- **Laravel**: `@Route`, `@Controller`, `@Middleware`...
- **IntelliJ Platform SDK**: `@NotNull`, `@Nullable`, `Project`, `PsiFile`, `ApplicationManager`...
- **Rails**: `before_action`, `after_save`, `validate`, `has_many`, `belongs_to`...

### Contributing Providers (For Plugin Developers)

Plugin authors can contribute their own language additions by implementing the `LanguageAdditionsProvider` interface and registering it via
the extension point in `plugin.xml`:

```xml
<extensions defaultExtensionNs="com.chrisrm.idea.MaterialThemeUI">
    <languageAdditionsProvider implementation="com.example.MyCustomAdditionsProvider"/>
</extensions>
```

```kotlin
class MyCustomAdditionsProvider : LanguageAdditionsProvider {
  override val name: String = "My Framework"
  override val languages: Set<MTLanguage> = setOf(MTLanguage.TYPESCRIPT, MTLanguage.JAVASCRIPT)
  override val names: Set<String> = setOf("myMacro", "inject*", "defineService")
}
```

---

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

### HTML

Customize colors for individual HTML tags and attributes to structure complex markup and distinguish semantic containers at a glance.

{% include figure.html content="/screens/additions/htmlAdditions.png" caption="HTML Additions Color Scheme" %}

**Customizable Tags**:

- **Semantic Tags**: `header`, `nav`, `article`, `footer`, `aside`, `section`, etc.
- **Headers**: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
- **Media**: `img`, `video`, `audio`, `picture`, `source`, `track`
- **Forms**: `form`, `input`, `button`, `select`, `textarea`, `option`, `optgroup`, `fieldset`, `legend`, `label`
- **Tables**: `table`, `caption`, `colgroup`, `col`, `tbody`, `thead`, `tfoot`, `tr`, `td`, `th`
- **Lists**: `ul`, `ol`, `li`, `dl`, `dt`, `dd`
- **Links**: `a`
- **Containers**: `div`, `span`, `p`
- **Line Breaks**: `br`, `hr`, `wbr`
- **Meta / Document**: `head`, `meta`, `title`, `base`
- **Structure**: `html`, `body`
- **Dialogs**: `dialog`
- **Embedded Content**: `iframe`, `embed`, `object`, `canvas`, `svg`
- **Layout**: `main`, `section`, `aside`
- **Text Formatting**: `strong`, `em`, `b`, `i`, `small`, `code`, `pre`
- **Figures**: `figure`, `figcaption`
- **Interactive**: `details`, `summary`
- **Misc**: `time`, `mark`, `template`, `slot`

**Customizable Attributes**:

- **General Attributes**: `class`, `id`, `style`, `title`, `name`, `type`, `value`
- **Sources & URLs**: `src`, `href`, `alt`, `action`
- **Language & Text Direction**: `lang`, `dir`
- **Relations & Roles**: `rel`, `role`
- **Form Actions & Methods**: `action`, `method`
- **Boolean Attributes**: `disabled`, `checked`, `readonly`, `selected`, `required`
- **Validation**: `min`, `max`, `step`, `pattern`
- **Accessibility & Custom Data**: `aria-*` (`aria`), `data-*` (`data`)
- **Labels & Forms**: `for`, `label`

----

### CSS

Fine-tune syntax colors for CSS properties, pseudo-selectors, functions, and at-rules to quickly scan styles and variables.

{% include figure.html content="/screens/additions/cssAdditions.png" caption="CSS Additions Color Scheme" %}

**Customizable Elements**:

- **At-Rules**: `@import`, `@media`, `@supports`, `@keyframes`, `@font-face`, `@layer`, `@container`, `@page`, `@namespace`
- **Layout & Positioning**: `display`, `position`, `top`, `right`, `bottom`, `left`, `z-index`, `float`, `clear`, `overflow`, `visibility`
- **Flexbox & Grid**: `flex`, `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `align-content`, `grid`,
  `grid-template-columns`, `grid-template-rows`, `gap`
- **Spacing & Sizing**: `margin`, `padding`, `width`, `height`, `min-width`, `max-width`, `min-height`, `max-height`, `box-sizing`
- **Typography**: `font-family`, `font-size`, `font-weight`, `font-style`, `line-height`, `text-align`, `text-decoration`, `text-transform`,
  `letter-spacing`, `white-space`
- **Colors, Backgrounds & Borders**: `color`, `background`, `background-color`, `background-image`, `border`, `border-radius`,
  `border-color`, `border-width`, `border-style`, `outline`
- **Effects & Transforms**: `box-shadow`, `text-shadow`, `opacity`, `transform`, `transition`, `animation`, `filter`, `backdrop-filter`,
  `cursor`, `pointer-events`, `user-select`
- **Pseudo-classes & Pseudo-elements**: `:root`, `:hover`, `:active`, `:focus`, `:focus-visible`, `:focus-within`, `:disabled`,
  `:first-child`, `:last-child`, `:nth-child()`, `::before`, `::after`, `::placeholder`, `::selection`
- **Functions**: `calc()`, `min()`, `max()`, `clamp()`, `rgb()`, `rgba()`, `hsl()`, `hsla()`, `var()`, `url()`, `linear-gradient()`,
  `radial-gradient()`, `translate()`, `scale()`, `rotate()`, `attr()`

----

### Advanced Toggles

Individual Language Additions can be enabled or disabled globally through the **Advanced Settings** page.

{% include figure.html content="/screens/additions/advancedToggles.png" caption="Advanced Toggles" %}

---

## FAQ

**Q**: The feature doesn't seem to be working. My keywords like `var` or `this` are the same color as the default keyword color, even though
I'm using a different color scheme.

**A**: Since these are *Additions*, most color schemes are not natively aware of these specific entries and will fall back to the default
keyword color defined by that scheme.

To fix this, you can manually customize the colors in the Language Additions settings page. If you're a theme designer, you can include
these color definitions in your exported schemes so that users who have the plugin installed can see your custom highlighting.
