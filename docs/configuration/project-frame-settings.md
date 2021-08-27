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


### Enable/Disable Project Frame Colors

This setting simply enables or disables the Project Frame. When enabled, a new stripe is added on the top of the IDE, just below the title bar, displaying the Project name in a randomly generated background color.

{% include figure.html content="/screens/projectFrame.png" caption="Project Frame Colors" %}

As stated above, the background color is generated from the project name. Meaning, that if two projects have similar names, they would have similar colors as well.

This can be a great when having multiple opened projects, to easily distinguish between each of them.

### Show Project Name

Since version 6.6.0, you can now decide to hide the Project Name displayed on the bar.

{% include figure.html content="/screens/hideProjectTitle.png" caption="Hide Project Name" %}

Since the project name is already displayed on the title bar, it can be a little jarring to have it on both the title bar and the Project Frame, therefore this setting can be useful for limiting the information displayed on screen.

### Show Project Icon

As of 2021.2, a pretty unknown feature has been put up to the spotlight by JetBrains, which is the ability to [set an icon to projects](https://blog.jetbrains.com/idea/2021/06/intellij-idea-eap-5/#change_project_icons). This setting makes use of this feature to directly display the said icon to the Project Frame Toolbar.

{% include figure.html content="/screens/projectIcons.png" caption="Project Icons" %}

This can prove very useful when having multiple projects open at once. Moreover, it can be activated on a per-project basis as well!

This feature is available since 6.7.0.

**Note**: At that moment, only SVG icons are supported.
{:class='card-panel warn'}


### Customize Text

Another option, rather than hiding the Project Name, would be to actually replace it with a text of your choice.

{% include figure.html content="/screens/customText.png" caption="Custom Project Frame Text" %}

That means that you can customize what's displayed on the bar with unicode characters, emojis, etc. This, coupled with the ability to set settings per-project, can be quite useful as well for better recognizing between windows :)

**Hint**: There are a few keywords available to use:
- `{project}`: the current project's name
- `{module}`: the current module name (for projects supporting modules, such as Java or Rider)
- `{file}`: the current filename

### Per-Project Settings

Since version 6.6.0, you can also override the global settings on a per-project basis:
- Select a custom color
- Show/Hide the project title
- Show/Hide the project icon
- Set a custom text per project

**Note**: You would still need to **Enable** the Global Project Frame Colors setting, so that the frame is added to the IDE. This cannot be enabled/disabled per-project.
{:class='card-panel warn'}
