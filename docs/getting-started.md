---
layout: docs
title: Getting Started
description: Installing and configuring the plugin
group: getting-started
toc: true

next:
  url: '/docs/configuration/settings'
  title: Configuration
---

This section describes how to download and use the Material Theme UI plugin in your IDE.
{:class='title'}

{% include carbonads.html %}

## Installation

### Plugin Manager

The easiest way to install the Material Theme plugin is through IntelliJ's **plugin manager**.
The plugin manager usually contains stable releases that made it through testing and feedback.
{:class='title'}

<img src="/img/screens/plugins.png" alt="Plugins">

Steps:

1. Open Settings/Preferences (Windows/Linux: `Ctrl-S`, Mac: `Cmd-,`)
2. On the left, select or search for **Plugins**
3. In the search field, type `Material Theme`
4. Install the `Material Theme UI` plugin
5. Click the `OK` button and restart the IDE.

### Manual installation

You can also install the plugin manually:

<a href="https://plugins.jetbrains.com/plugin/8006-material-theme-ui">
  <button class="btn">Download <icon class="fa fa-download"></icon></button>
</a>

Steps:

1. Go to the [plugin page](https://plugins.jetbrains.com/plugin/8006-material-theme-ui)
2. Go to the **Download** section and download the latest version of the plugin as a zip file.
3. Open Plugins settings (`Preferences → Plugins`)
4. Click on the "more" button and select **Install plugin from disk** and select the zip file.
5. Click OK and restart the IDE.

----

## Usage

Congratulations! You've just installed the Material Theme plugin.

If that's your first time using the plugin, you'll get greeted with a nice wizard to help you get started.

{% include figure.html content="/screens/wizard.png" caption="Material Theme Wizard" %}

### Setting the color scheme

The first thing to set is to change the color scheme to fit your current _UI Theme_. It's usually done automatically
when selecting a theme, but you can also decide to assign a different color scheme.

To do so, open the `Quick Switch Panel` by typing `Ctrl + ``/Cmd + ~` and select `Color Scheme`.
Alongside the color schemes provided by the IDE, and your own custom color schemes, you should find the color schemes provided by the
plugin:

#### Material themes:

{% for theme in site.data.themes.material %}

- {{theme.name}}
  {% endfor %}

{% for theme in site.data.themes.material2 %}

- {{theme.name}}
  {% endfor %}

#### Other themes:

{% for theme in site.data.themes.other %}

- {{theme.name}}
  {% endfor %}

{% for theme in site.data.themes.other2 %}

- {{theme.name}}
  {% endfor %}

These schemes are adapted to the UI Theme of the same name.

You can see more in the [Color Schemes](/docs/configuration/color-schemes) section.

### Configuring the plugin

The plugin also comes with a bunch of configurable settings to suit all flavors.
There you can turn off certain features, change the sizes, appearance of the elements and colors, etc.

These settings are found inside `Settings → Appearance and Behavior → Material Theme`.

Check [Settings](/docs/configuration/settings) for more info.

### Material Theme quick panel

Last but not least, the plugin is also providing action groups to quickly customize the theme.
These action groups are found in:

- The IDE menu, under `Tools → Material Theme`
- The main toolbar, at the end of the toolbar
- By invoking the `Quick Switch Panel`

{% include figure.html content="/screens/toolbar.png" caption="Material Theme Toolbar" %}

Check [Actions](/docs/configuration/quick-actions-panel) for more info

## Premium Support

From version 6.0.0 the plugin has become a freemium plugin.

Please refer [here](/docs/pricing) for more details and [this blog post](/docs/about-subscription-model) to better understand the reasons behind this choice.

## Android Studio

The plugin should be compatible with Android Studio just fine,
but since _Android Studio Bumblebee_ you would need to
install [another plugin](https://plugins.jetbrains.com/plugin/13407-jetbrains-marketplace-licensing-support) to be able to **Activate your license**.

*[freemium]: The plugin is free, but some functionalities are under a paywall.