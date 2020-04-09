---
layout: post
title: Version 3.0.0 is out
tags: [whatsnew]
category: [release]
toc: true
comments: true
maxwords: 40

---

The finally awaited version **3.0.0** is out! This is also a good opportunity to celebrate the third anniversary of the plugin, and for myself the second anniversary as a core maintainer!
This is a big milestone in the lifecycle of the plugin and for that, I wanted to take a good look at the
whole codebase and make a new facelift.

## Some history

The plugin started out as an experiment to customize the IDE Look And Feel using _properties files_. At the time (
[@ChrisRM](https://github.com/chrisrm)) was the sole contributor, even though he got some insights from the JetBrains
fellows on how to implement his idea.

Soon enough his POC worked and a good usage of this new information was to implement the then very popular **Material Theme** by ([@equinusocio](https://github.com/equinusocio)). The plugin then burst in popularity, being used by thousands of people and companies as the only alternative to the becoming-dull Darcula and IntelliJ themes.
Some others tried to propose other alternatives, such as _Seti UI_ or _Afterglow_ but they couldn't get as downloaded as the Material Theme (but thanks for them anyway).

As he continued experimenting, bugs started seeping inside the code. However the plugin was very simple at the time,
as it only provided themes, color schemes and file icon changes, so it was still maintainable.

And then 2016.3 came out, and along with it major refactors, breaking many features of the plugin.
By that time, Chris became less and less involved with the plugin, as he decided to move on from OSS.
He still tried to fix things up but not the best he could as he had other priorities.

That's when I, Mallowigi, came into play and decided to take up the torch to make the plugin I loved survive.
However I am not a Java developer. I did learn Java but not professionally, so my implementations were hectic at best.
Besides, I didn't know nothing about plugin development, and resources were scarce, so features took a long time to develop, with plenty of bugs as I was mostly experimenting.
Still, I was happy with the results, and soon enough this became my preferred side-project that I was investing a lot of free time on.

Now two years after I gained a lot of experience and knowledge, and the plugin quadrupled up in size and features.
There are a lot of available features - icons, themes, components, settings...
Some became obsolete, some really hard to implement, and some depend on implementations that were made years or months ago when my knowledge was more limited.

At the same time, JetBrains finally decided to implement the so-long awaited theme support, a feature that was asked six years ago.
As they realized that so many colors in the IDE were **hard-coded**, they started refactoring their whole codebase as well, making these hard-coded colors finally customizable.
But these wouldn't be available until the release of **2018.3**

That's when I decided that it was time for a spring cleaning of the plugin. After changing all the icons to SVG from version 2.9,
now was a good time to cleanup three years worth of code. So until the final release of 2018.3, I performed:
- Remove old and obsolete code
- Refactor old implementations to reduce the boilerplate code
- Migrate hard coded strings and values to their own classes
- Replace hard coded colors to Color resources
- Internationalize hard-coded strings
- Add more explanations for some features in the settings and wizards
- Create interfaces for better managing the code
- Use newly available tools and extensions to convey features that before relied on hacks and patches
- Look up for performance improvements

And because a major version wouldn't be a major version without its lot of new features, I added new stuff along the way:
- Better Disabled Mode
- Padded menus
- Material Tabbed Panes
- New folder icons
- New Arrow styles
- New Themes
- Rider Icons

Now that all the old man's ranting is done, let's go over the new stuff!

## Better Disabled Mode

Behind this obscure name is hidden a big feature that will please people *using the Material Theme without the Material Theme* - e.g. people disabling the Material Theme Colors or UI Components.

Basically it allows them to continue benefiting of some of the Material Features, such as the [Arrow Styles]({{site.baseurl}}/docs/configuration/project-view-settings#arrows-style/) or [Padded Dropdowns]({{site.baseurl}}/docs/configuration/compact-settings#compact-dropdown-lists/), without having the Material Theme Colors or UI Components enabled - e.g. *Darcula on steroids*.

The possibilities are endless:
- Darcula with upper case buttons and tabs
- IntelliJ with Arrow Styles and Indicator Styles
- High Contrast with Padded Status bar and Project View Line Height

{% include figure.html content="/screens/darculaExtended.png" caption="Darcula with Material Theme Features" %}

Of course, since this is a very unusual feature, it is not as heavily tested as the regular state, so it might contain more bugs than usual.

----
## Material Padded Menus

To continue with the Material Design (now we say Material Theme don't we? That makes things awkward...) look and feel,
after the Table Cells and Dropdowns, now it's time for **menus** to adopt the padded style as well.

{% include figure.html content="/screens/paddedMenus.png" caption="Padded Menus" %}

Now I agree that it won't please everyone, as it can become very big in small screens, requiring scrolling when before it wouldn't.

Therefore, a new option has been added in the *Material Compact Settings* (previously *Panels*), as well as a new toggle in the [Quick Actions Panel]({{site.baseurl}}/docs/configuration/quick-actions-panel/), to easily enable or disable this setting.

I particularly like this feature when I'm on big screens!

----
## Material Tabbed Panes

Another addition in the Material Design family is the replacement of **Tabbed Panes** with Material Design ones.

As usual, it features Material Design features such as the well-known _Active Tab Indicator_.
What's interesting however, is that it is using the **same configuration options** as the Editor Tabs, meaning that the Tab Settings,
with the exception of the Tabs Shadow and Tab Opacity, apply to those tabbed panes as well.

{% include figure.html content="/screens/materialTabbedPanes.png" caption="Material Tabbed Panes" %}

Here for instance, you can see Tabbed Panes with uppercase bold letters, with a custom height and highlight thickness.

Please note however, that it applies only for regular tabbed panes, e.g. not JBTabbedPanes (like the ones in the Debugger Tool Window or Code Style Settings).
Maybe they will be replaced in the future, but currently they're not.

----
## New folder icons

Just like many new versions, this version also brings a new set of folder icons:
- api
- archive
- constants
- core
- env
- functions
- generated
- hook
- job
- keys
- layouts
- meta
- notification
- packages
- posts
- serverless
- shared

More will also come in future versions

----
## New Theme: Dracula

I've already talked about the [Dracula Theme plugin](https://plugins.jetbrains.com/plugin/10762-dracula-theme), in the *External Themes* section, as to give an example on how to write plugins that extend the Material Theme. 
Since the Dracula Theme is very popular in VSCode, I thought interesting to have it in JetBrains products as well.

However it's popularity didn't get as good as in VSCode, possibly because of the lack of exposure for JetBrains plugins, and of course because there is no "Themes Section" in the Plugins Repository. 

On the other hand, community themes bundled with the plugin got a lot of traction, with _Atom One Dark_ being the third most popular theme, followed by _Solarized Dark_ and _Monokai Pro_.

And last but not least, it is hard to handle multiple repositories at the same time.

Therefore, I've decided to bundle the **Dracula Theme** as well alongside the other themes.

{% include figure.html content="/screens/dracula.png" caption="Dracula Theme" %}

In addition, The **Arc Dark Theme** has been updated to look more like it's VSCode equivalent.

----

## Rider Icons

Another work in progress is to include the **Material Icons to Rider**.

Since it's creation Rider has been a sore thumb in the family of IDEs, as it was an hybrid between IntelliJ IDEA and ReSharper, the Visual Studio plugin.
Because Rider users usually came from Visual Studio (not VSCode), a lot of work has been made to make them feel at ease, by keeping the same menus and icons, while providing new features from the JetBrains family of products.

As a result, Material Icons didn't work for Rider for a long time.

However, since the refactor from version 2.9, changing icons became much easier independently of the product used. Therefore, from version 3.0.0 Rider Icons will start to adopt Material Theme Icons as well.

Note that because Rider/ReSharper has some icons that do not appear in any of the other products, a decision has been made to keep such icons, while replacing the ones that are usually changed in the other products.

----
## Other Additions

### New Arrow Style: Arrows

A simple yet cool new style for Tree Arrows: **Arrows** (yes it's Arrow Arrows I know)

{% include figure.html content="/arrows/arrows.png" caption="Arrow Arrows" %}


### New Accent Colors

New accent colors have been added to the list in the Quick Actions Panel:
- Lavender
- Orange
- Abyss
- Oceanic
- Carbon
- Light
- Silver
- Water
- Plant
- Fuchsia
- Neon
- Cyan
- Palenight
- Amber
- Atomic Purple

### What's new popup

The Changelog popup after updates has been modified to be opened expanded and at the top of the Window.

----

And of course, it's lot of bug fixes and improvements.

That's it, thanks for reading!



