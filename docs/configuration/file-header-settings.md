---
layout: docs
title: File Header Settings
description: Customize the header displayed at the top of every open editor
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/project-title-bar-settings'
  title: Project Title Bar Settings
next:
  url: '/docs/configuration/theme-color-overrides'
  title: Theme Color Overrides
---

The **File Header** displays a configurable header at the top of every open editor, complementing the **Project Banner** feature.
{:class='title'}

Similar to the Project Banner, the File Header can provide useful information about the current file, such as its name, path, module, and
more.

This feature is available for **Premium** and **Project Frame** license owners.
{:class='card-panel warn'}

{% include carbonads.html %}

## Overview

The File Header sits at the top of each editor tab, displaying customizable text and actions. It can be configured globally in the app
settings or overridden per project.

{% include figure.html content="/screens/fileHeader/fileHeader.png" caption="File Header" %}

You can configure the File Header by navigating to `Settings → Appearance → Material Theme UI → File Header`.

## Header Styles

Choose from three visual styles for the header appearance:

### Island

The **Island** style presents the header as a floating, rounded element above the editor content, creating a modern and distinct visual
separation.

{% include figure.html content="/screens/fileHeader/headerStyle.png" caption="Island Style" %}

### Seamless

The **Seamless** style integrates the header smoothly with the editor background, providing a more subtle and unified appearance.

{% include figure.html content="/screens/fileHeader/seamlessStyle.png" caption="Seamless Style" %}

### Header

The **Header** style uses a traditional header bar appearance with clear boundaries between the header and editor content.

## Pattern & Text

Customize the header text using dynamic variables and patterns:

- `{file}`: The name of the currently opened file.
- `{path}`: The path of the currently opened file, relative to the project root.
- `{fullPath}`: The full path of the currently opened file.
- `{module}`: The name of the current module (for Java and Kotlin projects).
- `{project}`: The name of the current project.
- `{fileIcon}`: The icon of the currently opened file.

You can change the current pattern by right-clicking the header and selecting from a list of predefined patterns.

{% include figure.html content="/screens/fileHeader/customPresets.png" caption="Predefined Patterns" %}

Both the **Project Banner** and the **File Header** support rich text styling, allowing you to change colors, make text bold or italic, and
more. This lets you highlight important information such as the file name.

{% include figure.html content="/screens/fileHeader/headerStyle.png" caption="Header Style with Rich Text" %}

## Position & Alignment

Configure where the header appears and how its content is aligned:

- **Position**: Choose between top, center, or bottom alignment within the header area.
- **Text Alignment**: Align the header text to the left, center, or right.

{% include figure.html content="/screens/fileHeader/centerFileHeader.png" caption="Center Aligned Header" %}

{% include figure.html content="/screens/fileHeader/bottomFileHeader.png" caption="Bottom Positioned Header" %}

## Dimensions

Fine-tune the header's size to match your preferences:

- **Height**: Adjust the header height in pixels.
- **Opacity**: Control the transparency of the header background.

## Font & Colors

Customize the typography and colors of the header:

- **Font Family**: Choose from any installed font.
- **Font Size**: Adjust the text size for better readability.
- **Text Color**: Set a custom color for the header text.
- **Background Color**: Customize the header background color.

{% include figure.html content="/screens/fileHeader/fontSizeFileHeader.png" caption="Font Size Customization" %}

## Tint

Enable **Generate Tint** to automatically assign a unique background color to each file's header. This makes it easier to visually
distinguish between open files at a glance.

{% include figure.html content="/screens/fileHeader/fileHeaderTint.png" caption="File Header Tint" %}

## Toolbar Actions

The File Header includes a toolbar with handy actions such as:

- **Copy Path**: Copy the file's path to the clipboard.
- **Open in Split**: Open the file in a split editor.
- **Visibility Toggle**: Show or hide the header.

Configure the toolbar alignment and visibility in the settings.

## Per-Project Settings

Like other Material Theme UI features, the File Header can be configured individually for each project. This allows you to define unique
patterns, styles, or colors for different projects.

Access per-project settings via the project-specific Material Theme UI configuration panel.

## License Note

The File Header feature requires a **Premium** or **Project Frame** license. You can purchase a premium license for the plugin or a
dedicated license for this feature via the following
link: [Material Theme Project Frame](https://plugins.jetbrains.com/plugin/19310-material-theme-ui-project-frame).
