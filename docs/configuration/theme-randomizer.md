---
layout: docs
title: Theme Randomizer
description: Automatically switch themes to keep your workspace fresh and dynamic.
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/theme-ignores'
  title: Theme Ignores
next:
  url: '/docs/configuration/other-tweaks-settings'
  title: Other Tweaks
---

This feature allows you to automatically switch between your favorite themes at regular intervals.
{:class='title'}

{% include carbonads.html %}

This feature is available exclusively to premium users. You can acquire a premium license for the entire plugin or specifically for these features via the following link: [Material Theme Randomizer](https://plugins.jetbrains.com/plugin/28143-material-theme-ui-theme-randomizer).
{:class='card-panel warn'}

----

## Overview

The Material Theme UI plugin features a curated collection of predefined themes, hand-picked from renowned theme authors and designers. Additionally, the JetBrains Marketplace showcases thousands of community-created themes, offering a vast array of styles and aesthetics.

With such a diverse selection available, it can be difficult to settle on just one. The **Theme Randomizer** allows you to bring variety to your workspace by automatically switching themes at regular intervals.

{% include figure.html content="/screens/randomizer/themeRandomizer.png" caption="Theme Randomizer" %}

----

## Settings

### Theme Interval

You can specify the interval for theme changes in minutes.

{% include figure.html content="/screens/randomizer/themeInterval.png" caption="Theme Interval" %}

The default interval is 30 minutes, but you can adjust this to suit your preference. Once configured, a timer begins, and the theme will automatically switch after the specified duration.

**Note**: Modifying any setting will reset the timer.
{:class='card-panel warn'}


### Theme Selection

The settings page displays all available themes, categorized into Dark and Light themes.

{% include figure.html content="/screens/randomizer/themeList.png" caption="Theme List" %}

By default, all themes are included in the rotation, but you can exclude any you prefer not to use. A search bar is also available to help you quickly find specific themes.

----

## Theme Playlist

The Theme Randomizer employs a "semi-random" algorithm to switch themes. Rather than picking a completely random theme at each interval, it generates a *playlist*. The randomizer then cycles through this playlist sequentially.

You can manage and view the current playlist via the **Favorite Theme Shuffle** tool window.

{% include figure.html content="/screens/randomizer/shuffle.png" caption="Favorite Theme Shuffle" %}

{% include figure.html content="/screens/randomizer/playlist.png" caption="Theme Playlist" %}

Within this tool window, you can manually select a theme, skip to the next or previous theme, or shuffle the playlist to generate a new random sequence. You can also view the remaining time until the next rotation.

The tool window also features a **Disable Selected Theme** button, allowing you to quickly exclude the current theme from future rotations without opening the settings. Disabling a theme will automatically re-shuffle the playlist.

**Note**: Manually adding or removing themes, or switching the current theme, will trigger a re-shuffle of the playlist.
{:class='card-panel warn'}