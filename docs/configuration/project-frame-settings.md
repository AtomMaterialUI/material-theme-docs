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

What's the **Project Frame**?
{:class='title'}

This feature has been inspired by a Visual Studio Code plugin,
[Unique Window Colors](https://marketplace.visualstudio.com/items?itemName=stuart.unique-window-colors).
Its concept is to provide a better visualization of your opened projects by adding a colored stripe on top of each window,
with a unique color automatically generated from the **project name**!

{% include figure.html content="/screens/projectFrame.png" caption="Project Frame Colors" %}

This feature has been available since version 5.2.0.
Previously available under the _Features_ tab, since version 6.6.0 it has its own settings tab, with all its customization abilities.

{% include figure.html content="/screens/projectFrameTab.png" caption="Project Frame Settings" %}

---

### Enable/Disable Project Frame colors

This setting simply enables or disables the _Project Frame_.
When enabled, a new stripe is added on the top of the IDE, just below the title bar, displaying the Project name in a randomly generated background color.

{% include figure.html content="/screens/projectFrame.png" caption="Project Frame Colors" %}

As stated previously, the background color is generated from the project name.
Meaning, that if two projects have similar names, they would have similar colors as well.

This can be useful when having multiple open projects, to help distinguish between each of them.

----
### Colorize Title Bar

This feature is only available for people having access to the New UI via the _New UI Preview Plugin_, and available since version 7.7.0.
{:class='card-panel warn'}

This feature is inspired by the [Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock) VS Code extension, and was the inspiration behind the 
_Project Frame_. It allows you to paint the title bar differently per-project.

This was something that wasn't possible before, but the New UI introduced a flashy new "*title bar* component" to replace the original title bar (the same way the Material Theme [did in the past](/docs/configuration/other-tweaks-settings#themed-titlebar)), and this one is customizable.

So there it is, the perfect **Project Frame**! And it can be customized per project!

{% include figure.html content="/screens/colorized.png" caption="Colorize title bar" %}

As usual, you can still disable it from the [Project Frame Settings](/docs/configuration/project-frame-settings). And it's available in the separate standalone plugin as well.

Note: The _New UI Preview program_ has since then been closed, so there's no way to download the plugin anymore officially. However, we still have a copy of it available <a href="http://dl.material-theme.com/newUI" download>here</a>. You can also find it in our Slack channel.
{:class='card-panel warn'}

Note (2): This is **still** not possible on Linux, but a close enough result can be achievable through another plugin: [Project Color](https://plugins.jetbrains.com/plugin/19463-project-color).
{:class='card-panel warn'}

---
### Show project name

Since version 6.6.0, you can now decide to show or hide the _Project Name_ displayed on the bar.

{% include figure.html content="/screens/hideProjectTitle.png" caption="Hide Project Name" %}

Since the project name is already displayed in the title bar, it can be a little jarring to have it on both the title bar and the Project Frame.
Therefore, this setting can be useful for limiting the information displayed on screen.

---
### Show project icon

As of 2021.2, a pretty unknown feature has been put up to the spotlight by JetBrains, 
which is the ability to [set an icon to projects](https://blog.jetbrains.com/idea/2021/06/intellij-idea-eap-5/#change_project_icons). 

This setting makes use of this feature to directly display the said icon in the _Project Frame_.

{% include figure.html content="/screens/projectIcons.png" caption="Project Icons" %}

This can prove useful when having multiple projects open at once. Moreover, it can be activated on a per-project basis as well!

This feature has been available since 6.7.0.

**Note**: at that moment, only SVG icons are supported.
{:class='card-panel warn'}

---
### Customize text

Another option, rather than hiding the _Project Name_, would be to actually replace it with a text of your choice.

{% include figure.html content="/screens/customText.png" caption="Custom Project Frame Text" %}

That means that you can customize what's displayed on the bar with unicode characters, emojis, etc. 
This, coupled with the ability to set settings per-project, can be useful as well for better recognizing between windows :)

**Hint**: there are a few keywords available to use:
- `{project}`: the current project's name
- `{module}`: the current module name (for projects supporting modules, such as Java or Rider)
- `{file}`: the current filename

---
## Per-project settings

Since version 6.6.0, you can also override the global settings on a per-project basis:
- Select a custom color
- Show/Hide the project title
- Show/Hide the project icon
- Set a custom text per project

**Note**: you would still need to **Enable** the Global Project Frame Colors setting, so that the frame is added to the IDE. 
This can't be enabled/disabled per-project.
{:class='card-panel warn'}
