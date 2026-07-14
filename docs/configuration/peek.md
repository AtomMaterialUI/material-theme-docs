---
layout: docs
title: Peek
description: Quick code preview and editing without losing context
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/accent-mode'
  title: Accent Mode
next:
  url: '/docs/configuration/tab-settings'
  title: Tab Settings
---

**Peek & Edit Definition** is a powerful feature that allows you to explore and modify your code without losing your current context.
{:class='title'}

Inspired by the VSCode feature of the same name, it enables you to peek at definitions, make quick edits, and navigate your codebase more
efficiently, all within the same editor window.

This feature is currently in beta and free for everyone. In the future, it will be part of the [Premium Plan](/docs/pricing).
{:class='card-panel warn'}

{% include carbonads.html %}

## Overview

Traditional code navigation often requires jumping between files, which can break your focus. **Peek** solves this by opening a small,
secondary editor window — either as a popup or inline — that displays the definition of the symbol under your cursor.

You can configure Peek by navigating to `Settings → Appearance → Material Theme UI → Peek`.

{% include figure.html content="/screens/peek/peekSettings.png" caption="Peek Settings" %}

## Peek Modes

There are two main ways to use Peek:

### Peek & Edit Definition (Popup)

This mode opens the definition in a sleek, editable popup window. It's ideal for quick lookups and small edits where you want to keep the
main editor fully visible.

{% include figure.html content="/screens/peek/popupPeek.png" caption="Peek as a Popup" %}

### Peek & Edit Definition (Inline)

In this mode, the definition is embedded directly within your current editor, shifting the surrounding code to make room. This provides a
truly seamless experience as if the code were part of the same file.

{% include figure.html content="/screens/peek/inlinePeek.png" caption="Peek Inline" %}

---

## Appearance Settings

You can customize the look and feel of the Peek window to match your preferences and theme.

### Rounded Borders

To match the modern aesthetic of the Material Theme, you can enable and adjust rounded borders for the Peek window.

{% include figure.html content="/screens/peek/borderRadiusPeek.png" caption="Rounded Borders" %}

### Custom Colors

Peek allows for fine-grained control over its color palette. You can customize the header background, the editor background, and the border
colors to make the Peek window stand out or blend in.

{% include figure.html content="/screens/peek/customColorsPeek.png" caption="Custom Colors" %}

### Padding and Layout

Adjust the internal padding and line count of the Peek window to ensure it shows exactly as much information as you need without being
intrusive.

{% include figure.html content="/screens/peek/customLinesPeek.png" caption="Padding and Layout Settings" %}

---

## Behavior

### Double Escape to Close

For a faster workflow, you can enable the option to close the Peek window by pressing `Escape` twice. This allows you to quickly return to
your main editor after you've finished peeking.