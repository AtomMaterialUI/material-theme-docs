---
layout: docs
title: Window Coloring
description: Per-project IDE frame coloring with solid and gradient fills
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/regions'
  title: Stylish Regions
next:
  url: '/docs/configuration/tab-settings'
  title: Tab Settings
---

**Window Coloring** (Application Frame) gives each project a unique visual identity by coloring specific regions of the IDE window frame. {:class='title'}

With solid colors or sophisticated gradients, you can instantly identify which project you're working in — especially useful when managing multiple IDE windows.

Part of the Material Theme's premium visual enhancement suite, Window Coloring works alongside [Stylish Regions](/docs/configuration/regions) for code organization and [Peek](/docs/configuration/peek) for inline code navigation.

This feature requires the **Project Frame** license. {:class='card-panel warn'}

{% include carbonads.html %}

## Overview

When working with multiple projects simultaneously, it's easy to lose track of which IDE window belongs to which project. **Window Coloring** solves this by applying distinctive colors to your IDE's frame regions.

The feature automatically generates a unique color for each project based on its name, or you can manually set custom colors per project. Choose between solid fills for clean simplicity or gradients for dynamic, eye-catching frames.

You can configure Window Coloring globally at `Settings → Appearance → Material Theme UI → Application Frame`, and override settings per-project for fine-grained control.

{% include figure.html content="/screens/projectFrame/projectFrame.png" caption="Window Coloring Example" %}

## Colorizable Regions

Window Coloring can tint four distinct regions of your IDE window:

### Title Bar

The window's top bar containing the project name, menu, and window controls. This is the most prominent region and is enabled by default.

### Left Tool Window Header

The header bar above the left-side tool windows (Project, Structure, etc.). Coloring this region extends the project identity down the left edge.

### Right Tool Window Header

The header bar above the right-side tool windows (Gradle, Database, etc.). Mirrors the left side for balanced visual design.

### Status Bar

The bottom status bar showing file info, git branch, and notifications. Coloring this creates a complete frame effect wrapping your content.

{% include figure.html content="/screens/projectFrame/colorAllFrame.png" caption="All Four Regions Colored" %}

You can enable any combination of these regions to create the look you prefer. For a subtle effect, color only the title bar. For maximum impact, enable all four regions.

---

## Fill Modes

Choose how the colored regions are filled:

### Solid Fill

A single, flat color fills the entire region. This provides a clean, professional look and optimal readability for text and icons within the frame.

Solid fills are the default and work great when you want clear project differentiation without visual complexity.

{% include figure.html content="/screens/projectFrame/colorTitleFrame.png" caption="Solid Fill Example" %}

### Gradient Fill

A smooth color transition from the project color to your theme's panel color creates depth and visual interest. Gradients can be configured with two interpolation types:

- **Linear**: Colors transition along a straight line at a configurable angle
- **Radial**: Colors radiate outward from a configurable anchor point

Gradients add a modern, polished aesthetic to your IDE while maintaining project identification.

{% include figure.html content="/screens/projectFrame/600gradient.png" caption="Gradient Fill Example" %}

---

## Gradient Customization

When using **Gradient** fill mode, you have extensive control over the gradient appearance:

### Gradient Type

#### Linear Gradients

Linear gradients transition colors along a straight line. You control the **angle** of this line from **0 to 360 degrees**:

- **0°**: Left to right
- **90°**: Top to bottom
- **180°**: Right to left  
- **270°**: Bottom to top
- Any angle in between for diagonal transitions

This allows you to create horizontal, vertical, or diagonal color flows that complement your IDE layout.

{% include figure.html content="/screens/projectFrame/2000gradient.png" caption="Linear Gradient at Different Angles" %}

#### Radial Gradients

Radial gradients emanate outward from a central **anchor point**. You can position this anchor at any of **9 locations**:

- **Top**: Left, Center, Right
- **Middle**: Left Center, Center, Right Center  
- **Bottom**: Left, Center, Right

The default is **Top Left**, creating a glow effect from the upper-left corner. Center anchors create a spotlight effect, while bottom anchors create an inverted glow.

{% include figure.html content="/screens/projectFrame/4000gradient.png" caption="Radial Gradient with Different Anchors" %}

### Gradient Size

The **gradient size** (0-100%) controls how quickly the transition occurs — specifically, at what percentage of the region's extent the end color is fully reached:

- **25%**: Quick transition, most of the region is the end color
- **50%**: Balanced transition (default), colors blend evenly
- **75%**: Slow transition, project color dominates more area
- **100%**: Very gradual transition across the entire region

Smaller sizes create bold, concentrated color pops. Larger sizes create subtle, widespread color washes.

### Gradient Opacity

While not exposed as a separate setting, gradients always transition to your theme's panel color with full opacity, ensuring text and icons remain readable throughout the frame.

---

## Project Colors

### Auto-Generated Colors

By default, Window Coloring automatically generates a unique color for each project based on its name. This ensures:

- **Consistency**: The same project always gets the same color
- **Zero Configuration**: Colors appear immediately without manual setup
- **Visual Diversity**: Different projects get distinct, well-distributed hues

The auto-generation algorithm creates vibrant, saturated colors optimized for frame visibility.

{% include figure.html content="/screens/projectFrame/projectColors.png" caption="Auto-Generated Project Colors" %}

### Color Seeds

Both the global Application Frame settings and per-project settings include a **color seed** value. This seed is mixed into the color generation algorithm, allowing you to "regenerate" a project's color to a different but still stable hue.

**Use cases:**
- You have multiple similar project names generating similar colors
- You want a specific project to stand out with a particular color family
- You're creating themed color schemes across related projects

Simply click the regenerate button in settings to cycle through alternative colors until you find one you like.

### Manual Color Override

For complete control, you can manually set a specific color for any project:

1. Open project-specific settings: `Settings → Appearance → Material Theme UI → Application Frame → Project Settings`
2. Enable **Override Color**
3. Use the color picker to select your exact desired color

This is perfect when you have brand colors or prefer specific hues for certain projects.

{% include figure.html content="/screens/projectFrame/customProjectSettings.png" caption="Per-Project Color Settings" %}

---

## Per-Project Customization

Each project can override the global Application Frame settings with its own configuration:

- Different enabled regions (e.g., one project colors only the title bar, another colors everything)
- Different fill modes (solid vs. gradient)
- Different gradient settings (type, angle/anchor, size)
- Different colors (manual or different seed)

To access per-project settings:

**Settings → Appearance → Material Theme UI → Application Frame → Enable Per-Project Settings**

Once enabled, all frame settings in that settings dialog apply only to the current project, while other projects continue using the global settings or their own overrides.

---

## Settings Location

### Global Settings

**Settings → Appearance → Material Theme UI → Application Frame**

Configure default coloring, gradients, and color seeds that apply to all projects unless overridden.

### Per-Project Settings

Within the same settings page, enable **Per-Project Settings** to override the global configuration for the currently open project.

---

## Content Wash (Experimental)

An advanced feature that adds subtle color glows in the bottom corners behind your editor content, extending the project color into the workspace itself. 

**This feature is currently disabled** in the plugin but may return in future versions. Settings for opacity and radius are preserved for when it's re-enabled.

---

## Premium Features

**All Window Coloring features require a Project Frame license:**

- Colored title bar, tool window headers, and status bar
- Solid and gradient fill modes
- Linear and radial gradient types with full angle/anchor control
- Gradient size customization
- Auto-generated project colors
- Manual color override per project
- Per-project settings

Without a license, all window regions remain their default theme color.

Learn more about [licensing](/docs/configuration/license-info).
