---
layout: docs
title: Adaptive Theme
description: A theme that adapts to the Color Scheme
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/scrollbars'
  title: Scrollbars
next:
  url: '/docs/icons/atom-material-icons-plugin'
  title: Atom Material Icons Plugin
---

Use the Adaptive Theme to automatically adapt your UI Theme to the Color Scheme.
{:class='title'}

{% include carbonads.html %}

## Introduction

The **Adaptive Theme** is a unique feature of the Material Theme UI plugin that dynamically adjusts the IDE's User Interface (UI) colors to match your active **Color Scheme**.

Traditionally, the UI Theme (which controls the look of tool windows, menus, and dialogs) and the Color Scheme (which controls the editor's syntax highlighting) are separate entities. This can sometimes lead to a visual disconnect if you switch to a very different color scheme while keeping the same UI theme.

The Adaptive Theme bridges this gap by extracting the main colors from your current color scheme and applying them to the IDE's UI components, ensuring a cohesive and unified look across the entire editor.

## Premium Feature

This feature is exclusive to **Premium** users. You can purchase a premium license for the plugin or a dedicated license for this feature via the following link:

[Material Theme Custom Theme](https://plugins.jetbrains.com/plugin/19308-material-theme-ui-custom-theme)
{:class='card-panel warn'}

----

## Overview

When the Adaptive Theme is active, the plugin analyzes the background and foreground colors of your color scheme to generate a matching UI palette. This means that whether you are using a light, dark, or high-contrast scheme, the IDE's interface will always feel like it belongs to that specific environment.

{% include figure.html content="/screens/adaptive/adaptive.gif" caption="Adaptive Theme in Action" %}

----

## Settings

While the Adaptive Theme does an excellent job of automatically calculating colors, you may still want to fine-tune the appearance. The plugin provides a dedicated settings page within the **Color Scheme** settings to allow for granular control.

You can find these settings under `Settings/Preferences > Editor > Color Scheme > Adaptive Theme`.

{% include figure.html content="/screens/adaptive/adaptiveScheme.png" caption="Adaptive Color Scheme Settings" %}

### Overriding Adaptive Colors

By default, all UI components inherit colors calculated from the color scheme. However, you can override specific elements—such as the background, selection colors, or border colors—to better suit your preferences.

{% include figure.html content="/screens/adaptive/overridenAdaptiveScheme.png" caption="Overriding Adaptive Colors" %}

**Note**: Like all Color Scheme settings, these overrides are saved per scheme. This allows you to have different adaptive settings for different color schemes, providing maximum flexibility in your workspace customization.
{:class='card-panel info'}