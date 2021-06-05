---
layout: docs
title: Tab Settings
description: Control the appearance of the Editor Tabs
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/main-settings'
  title: Main Settings
next:
  url: '/docs/configuration/compact-settings'
  title: Compact Settings
---

This feature is only available for premium users.
{:class='card-panel warn'}

This page displays the features and settings that customize the appearance of the Editor Tabs and IDE Tabbed Panes.
{:class='title'}

{% include carbonads.html %}

## Active Tab Options

#### Active Tab Highlighter

This setting controls the appearance of the little indicator under the current highlighted tab.

{% include figure.html content="/screens/tabs.png" caption="Active Tab Indicator" %}

- When the setting is **OFF**, the indicator color will be either the one defined by the color scheme (from the `TAB_UNDERLINE` property), or the [current accent color](/docs/configuration/accents).
- When the setting is **ON**, you can select your own custom color.


#### Thickness

This allows you to set the _thickness_ of the tab highlighter.

{% include figure.html content="/screens/thickness.png" caption="Tab Highlighter Thickness" %}

To avoid crazy values that could ruin the UI, the values are limited between `1` to `5` pixels.


#### About Tabs Placement

While most people set their tabs to be on the top, JetBrains IDE also give the possibility to place your tabs to the
bottom, left or right side.

In that case, the active tab indicator will be placed accordingly to the tab position:
- At the top for _bottom placement_
- At the right for _right placement_
- At the left for _left placement_

{% include figure.html content="/screens/leftSideHeight.png" caption="Left Placement" %}

-----
## Other Tab Options

### Uppercase Bold Tabs

This feature allows you to set the tabs to look even more like usual
[Material Design Tabs](https://material.io/guidelines/components/tabs.html#tabs-usage), that is in _Uppercase_ and _bold_.

{% include figure.html content="/screens/uppercasebold.png" caption="Uppercase Bold Tabs" %}

This setting gets rid of special characters such as hyphens or underscores and replace them with ++spaces++. It also
converts from camel case to "Spaced Uppercase".

Note: Because of the highly experimental status of this feature, it contains some bugs. For instance, the uppercasing
is not set until the tab is selected.

### Tab Height

This setting will allow you to customize the height of the different tabs of the IDE (that is, not only the editor tabs but
also _debugger tabs_, _code style tabs_, etc.). This will allow you to have the ultimate Material Design Tabs
experience.

The allowed values are between `18` to `60` pixels, where the default recommended value for horizontal tabs is `50`. If
you use vertical tabs though, my personal recommended value would be `25` so you can place more opened tabs at the side.

{% include figure.html content="/screens/leftSideHeight.png" caption="Left Side Tab Height" %}

There is no reset button, but there is an action in the `Material Toolbar` that resets the value to its default value, `50`.

----
## Material Tabbed Panes

Since version 3.0.0 the Tab Settings control not only the appearance of the Editor Tabs but for all tabbed panes as well
(except for JBTabbedPanes such as the Tabs inside the Debugger Tool Window or Code Style Settings).

{% include figure.html content="/screens/materialTabbedPanes.png" caption="Material Tabbed Panes" %}

You can therefore customize:
- The active tab highlighter color and thickness
- The tab height
- Whether they appear as upper case bold.

Tab Shadow and Opacity have no effect here.

----
## Tab Highlighter Position

A new setting has been added in 3.4.0 which allows tweak the position of the tab highlighter:

{% include figure.html content="/screens/positions/top.png" caption="Top" %}

{% include figure.html content="/screens/positions/bottom.png" caption="Bottom" %}

{% include figure.html content="/screens/positions/left.png" caption="Left" %}

{% include figure.html content="/screens/positions/right.png" caption="Right" %}

{% include figure.html content="/screens/positions/topBottom.png" caption="Top and Bottom" %}

{% include figure.html content="/screens/positions/leftRight.png" caption="Left and Right" %}

{% include figure.html content="/screens/positions/full.png" caption="All around" %}

{% include figure.html content="/screens/positions/bottomless.png" caption="Bottomless" %}

{% include figure.html content="/screens/positions/topless.png" caption="Topless" %}

{% include figure.html content="/screens/positions/none.png" caption="None" %}

----
## Tab Font Size

Last but not least, the tab size option allows you to override the Tab Font Size. Please note that this overrides the
global IDE font size and requires a restart.

{% include figure.html content="/screens/tabFontSize.png" caption="Tab Font Size" %}

----

## Per-Project Settings

Since version 6.6.0, you can also override specific tab settings on a per project basis.

Such settings include:
- Active Tab Highlighter color and thickness
- Uppercase tabs
- Tab Highlighter Position

{% include figure.html content="/screens/perProject.png" caption="Per-Project Settings" %}


----
## Other Tweaks

#### Edited files icon

Files that are edited but not yet saved will display a little pencil icon with
the current accent color on the tab, in place of the regular * asterisk *.
![editIcon](/img/icons/editIcon.png)

You need to activate this option under `Editor → General → Editor Tabs → Mark modified tabs with asterisk`

#### Pinned files icon

Same as the edited file icon, pinned tabs will display a little pin on the icon, colored with the current accent color.
![pinnedIcon](/img/icons/pin.png)

#### Accent close icon

The close icon didn't change, but it will be colored to the accent color on hover.

-----
## FAQ

**Q**: Is there a way to completely remove the Active Tab Indicator?

**A**: Not Currently. Even disabling the feature in the IDE will still display the indicator provided by the plugin. If
there is enough demand to add this functionality, we will add it.

**Q**: The Tab Height feature is cool in the editor, but I'd rather leave other tabs untouched.

**A**: Me as well. Unfortunately currently the setting that sets the tab height is shared between all tabs in the SDK,
and there is no way to distinguish between them currently. Maybe in the future if JetBrains agrees to allow more
customization natively.

**Q**: Why limiting the thickness or the tab height? I want to have 10 in thickness and 100 in tabs!!!

**A**: Because allowing values past these limits would make the UI ugly or worse, crash it. If you have a good reason to
want it anyway, you can open an issue on GitHub with why you would want that. At most, you can still fork the plugin and
tweak it to whatever you want.

**Q**: The uppercase tabs feature is so useless! Editor Tabs !== Material Design Tabs!

**A**: While I might agree with this statement, Personally, I think this is a cool feature, and it doesn't bother me. It is not allowed by default, so new users will not be startled by it, and if you don't like it you can simply turn it off.
