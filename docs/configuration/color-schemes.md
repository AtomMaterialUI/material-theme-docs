---
layout: docs
title: Color Schemes
description: Installation and Configuration
group: configuration
comments: true
toc: true

previous:
  url: '/docs/configuration/settings'
  title: Settings
next:
  url: '/docs/configuration/main-settings'
  title: Main Settings
---

The plugin comes prebundled with a bunch of color schemes adapted for the Material Themes, resulting in a flat,
borderless and slick experience.
{:class='title'}

{% include carbonads.html %}

## Installation

If you've read the previous section, you'd have learned how to switch themes using the _Theme Switcher_. However, as
strange as it may sound, switching the _Material Theme_ does **NOT** fix the editor's color scheme, thus allowing you to
customize even more by having a color scheme different that the UI Theme. You can even put a light scheme with a dark
theme (it is not recommended though).

There are multiple ways to change the color scheme:
- Through the settings, in `Editor -> Color Schemes`
- Through the `Quick Switch`, with the first option `Color Scheme`.

{% include figure.html content="/screens/quickswitch.png" caption="Quick Switch" %}

In this list you'll find all your installed color schemes alongside those provided by JetBrains. The color schemes
provided by the plugin are:
- Material Oceanic
- Material Darker
- Material Lighter
- Material Palenight
- Material Deep Ocean
- Atom One Dark
- Atom One Light
- Arc Dark
- Monokai Pro
- Dracula
- Solarized Dark
- Solarized Light
- GitHub
- Night Owl
- Light Owl

## Customization

Though the color schemes have been built for an optimal day-to-day usage, if there are colors you don't like, you can
have your own configuration and select which colors or fonts are best suited for you.

To do so, open the `Colors and Fonts` editor at `Settings -> Editor -> Color Scheme`, there click on the small icon next
to the scheme selector and select `Duplicate`. This will create a copy of the color scheme that you can customize however
you want.

{% include figure.html content="/screens/colorschemes.png" caption="Color Scheme Editor" %}

You can also directly modify the original color schemes and it will create a copy in the colors folder with the name
`_@user_<schemeName>.icls`. The color scheme will then appear in *blue* in the list.

However, this is not recommended to do so because the IDE will use the copy from then on, meaning that you won't be able
to get the updates from further versions of the plugin.

In order to revert the copies to their original state, in the previous menu select `Restore Defaults`. Be careful
however, as that means that __all the changes you've made will be lost__. Therefore I would suggest you to make a copy
(of the copy) using the `Duplicate` function, this way you can go back to your changes one by one.

----------
## Supported languages

|              |             |             |
|:-------------|:------------|:------------|
| Java         | Properties  | Erlang      |
| Gradle       | Yaml        | Elm         |
| Groovy       | JSON        | Matlab      |
| Scala        | Ruby        | Haskell     |
| Kotlin       | Python      | Elixir      |
| CSS          | PHP         | Hibernate   |
| Sass         | Twig        | SQL         |
| LESS         | Blade       | Markdown    |
| Stylus       | C           | Bash        |
| HTML         | C++         | HOCON       |
| Haml         | C#          | Apache      |
| XML          | ASP         | Gitignore   |
| Jade/Pug     | Objective C | Lua         |
| JavaScript   | Swift       | Perl        |
| TypeScript   | Go          | Slim        |
| CoffeeScript | ERB         | Velocity    |
| Ini          | EJS         | Rust        |
| Regex        | Rdoc        | HTTP Client |

----------
## Color Palette

These are only for Material Themes:

<span style="float:none">Dark variant</span>
<span style="float:right">Light variant</span>

{% for color in site.data.colors %}
{% include color.html color=color %}
{% endfor %}
