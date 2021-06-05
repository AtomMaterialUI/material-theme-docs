---
layout: docs
title: Project Frame Settings
description: Project Frame related settings
group: configuration
comments: true
toc: true

previous:
  url: '/docs/configuration/feature-settings'
  title: Feature Settings
next:
  url: '/docs/configuration/other-tweaks-settings'
  title: Other Tweaks
---

This feature is only available for premium users.
{:class='card-panel warn'}

This panel controls all settings related to the **Project Frame** feature.
{:class='title'}

{% include carbonads.html %}

## Introduction

What is **Project Frame**?
{:class='title'}

This feature has been inspired by a Visual Studio Code plugin, [Unique Window Colors](https://marketplace.visualstudio.com/items?itemName=stuart.unique-window-colors).
Its concept is to provide a better visualization of your opened projects by adding a colored stripe on top of each window, with a unique color automatically generated from the **project name**!

{% include figure.html content="/screens/projectFrame.png" caption="Project Frame Colors" %}

This feature is available since version 5.2.0. Previously available under the _Features_ tab, since version 6.6.0 it has its own settings tab, with all it's customization abilities.

{% include figure.html content="/screens/projectFrameTab.png" caption="Project Frame Settings" %}


### Enable/Disable Project Frmae Colors

This setting simply enables or disables the Project Frame. When enabled, a new stripe is added on the top of the IDE, just below the title bar, displaying the Project name in a randomly generated background color.

{% include figure.html content="/screens/projectFrame.png" caption="Project Frame Colors" %}

As stated above, the background color is generated from the project name. Meaning, that if two projects have similar names, they would have similar colors as well.

This can be a great when having multiple opened projects, to easily distinguish between each of them.

### Show Project Name

Since version 6.6.0, you can now decide to hide the Project Name displayed on the bar.

{% include figure.html content="/screens/hideProjectTitle.png" caption="Hide Project Name" %}

Since the project name is already displayed on the title bar, it can be a little jarring to have it on both the title bar and the Project Frame, therefore this setting can be useful for limiting the information displayed on screen.

### Customize Text

Another option, rather than hiding the Project Name, would be to actually replace it with a text of your choice.

{% include figure.html content="/screens/customText.png" caption="Custom Project Frame Text" %}

That means that you can customize what's displayed on the bar with unicode characters, emojis, etc. This, coupled with the ability to set settings per-project, can be quite useful as well for better recognizing between windows :)

**Note**: You can add the current project's name to the custom text by using the `{project}` keyword.
{:class='card-panel warn'}

### Per-Project Settings

Since version 6.6.0, you can also override the global settings on a per-project basis:
- Select a custom color
- Show/Hide the project title
- Set a custom text per project

**Note**: You would still need to **Enable** the Global Project Frame Colors setting, so that the frame is added to the IDE. This cannot be enabled/disabled per-project.
{:class='card-panel warn'}
