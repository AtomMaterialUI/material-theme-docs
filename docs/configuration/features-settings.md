---
layout: docs
title: Feature Settings
description: Enable or disable Material Theme features
group: configuration
comments: true
toc: true

previous:
  url: '/docs/configuration/component-settings'
  title: UI Components Settings
next:
  url: '/docs/configuration/project-frame-settings'
  title: Project Frame Settings

wallpapers:
  - filename: https://images.material-theme.com/mariosmilax/image/upload/c_thumb,w_400,g_face/v1694951877/walls/oceanic.png
    alttext: Material Oceanic
  - filename: https://images.material-theme.com/mariosmilax/image/upload/c_thumb,w_400,g_face/v1694951877/walls/palenight.png
    alttext: Material Palenight
  - filename: https://images.material-theme.com/mariosmilax/image/upload/c_thumb,w_400,g_face/v1694951877/walls/lighter.png
    alttext: Material Lighter
  - filename: https://images.material-theme.com/mariosmilax/image/upload/c_thumb,w_400,g_face/v1694951877/walls/darker.png
    alttext: Material Darker
---

Some of these features are only available for premium users.
{:class='card-panel warn'}

Here you can turn on and off specific features of the Material Theme for even further customization.
{:class='title'}

{% include carbonads.html %}

## General

### Animated Tool Windows

Tool windows in JetBrains IDEs can have five different states: **Undocked**, **Floating**, **Windowed**, **Docked Pinned**, and **Docked Unpinned**.

By default, tool windows are **Docked Pinned**, meaning they are attached to the sides of the screen and always visible, unless minimized by clicking the minimize button or using the `Shift + Escape` shortcut while the tool window is focused.

This behavior can be changed by clicking the "More" button on any tool window.

{% include figure.html content="/screens/features/toolWindowStates.png" caption="Tool Window States" %}

Among these, the **Undocked** state represents a tool window that opens when its button is pressed and then closes automatically when you click outside of it. Unlike the **Docked Unpinned** state, an **Undocked** tool window opens **on top** of the main editor, rather than to the side, similar to a drawer. However, the default opening and closing animation is instant, which can be somewhat jarring.

This setting adds a smooth sliding animation to tool windows when they are in this state.

{% include figure.html content="/screens/features/animatedToolWindows.gif" caption="Animated Tool Windows" %}

In addition, two actions have been added to the _Material UI Actions Toolbar_ to set all current tool windows to either the **Undocked** or **Docked Pinned** state. This allows you to quickly switch to an auto-hidden layout and enjoy the benefit of the animations.

{% include figure.html content="/screens/features/dockingOptions.png" caption="Docking Actions" %}

----

### Centered Editor

This option centers the editor in the middle of the screen rather than pinning it to the left, providing a more focused experience that complements the fully undocked layout. It is very similar to **Distraction Free Mode**, but without hiding the tabs or tool windows.

{% include figure.html content="/screens/features/centeredEditor.png" caption="Centered Editor" %}

**Note**: Currently, there is no way to adjust the width of the centered editor, but we are monitoring for future implementation possibilities.
{:class='card-panel'}

----

### Floating Action Button (FAB)

This feature creates a small floating action button at the bottom right of the editor, serving as a customizable container for actions you want to access at any time.

{% include figure.html content="/screens/features/fab.png" caption="Floating Action Button" %}

By default, it contains three standard actions:

- **New File**: Creates a new file in the same folder as the currently open editor.
- **New Directory**: Creates a new directory in the same folder as the currently open editor.
- **New Scratch File**: Creates a new scratch file of the selected type.

{% include figure.html content="/screens/features/fabActions.png" caption="FAB Actions" %}

However, you can also assign your own custom actions via `Settings > Menus and Toolbars > Material FAB`. This is useful for providing quick access to common actions such as **Jump to Top**, **Reformat Code**, or **Push**.

{% include figure.html content="/screens/features/customizeFab.png" caption="Customize FAB Actions" %}

{% include figure.html content="/screens/features/customFabActions.png" caption="Custom FAB Actions" %}

You can drag and drop the button to move it anywhere you like; it will remember its last position even after the IDE is restarted. You can also temporarily hide it by clicking the "X" button, though it will reappear when you switch tabs.

----

### Overlays

The Material Theme UI follows Material Design principles, one of which is the use of overlays to create a sense of depth and hierarchy. This setting enables or disables the use of overlays throughout the IDE.

When enabled, certain UI elements will have a semi-transparent background that allows underlying content to show through, creating a layered effect. This helps visually separate different sections of the UI and makes it easier to focus on specific elements.

{% include figure.html content="/screens/features/overlays.png" caption="Overlays" %}

Overlays are displayed whenever a dialog or light popup is open, such as the **Settings** dialog, **Find in Files**, or **Search Everywhere**.

### More Overlays

By default, overlays are only displayed for dialogs and light popups. Enabling this option extends overlays to more UI elements, such as menus, **Quick Switch** panels, and other floating elements, for a more immersive experience. This feature is disabled by default.

{% include figure.html content="/screens/features/moreOverlays.png" caption="More Overlays" %}

### Overlays Opacity

This setting allows you to fine-tune the opacity of overlays. The default is 40%, but you can increase or decrease it to your preference.

{% include figure.html content="/screens/features/transparent.png" caption="20% Opacity" %}

{% include figure.html content="/screens/features/veryOpaque.png" caption="80% Opacity" %}

----

### Material Wallpapers

JetBrains IDEs feature a built-in mechanism that allows you to set custom background images for the entire IDE or specifically for the **empty frame** (the background shown when no files are open). You can configure this manually in `Settings > Appearance & Behavior > Appearance > Background Image`.

The Material Theme UI leverages this feature to automatically replace the _empty frame_ with a custom-generated wallpaper. These wallpapers feature the plugin logo with a color palette that dynamically matches your active theme. This aesthetic enhancement adds a personal touch to your workspace, similar to what you might find in other editors like Atom or VS Code.

<div class="masonry" markdown="0">
  {% for wallpaper in page.wallpapers %}
    <div class="masonry-brick">
      <img src="{{ wallpaper.filename }}"
           alt="{{ wallpaper.alttext }}">
    </div>
  {% endfor %}
</div>

These wallpapers are also compatible with custom and external themes, as they automatically adjust to the theme's colors.

<div class="masonry" markdown="0">

{% include figure.html content="/screens/wallpapers/shades.png" caption="Shades of Purple" %}

{% include figure.html content="/screens/wallpapers/darkviolet.png" caption="JetBrains Dark Violet" %}

{% include figure.html content="/screens/wallpapers/sakura2.png" caption="Sakura Theme" %}

</div>

**Note**: Enabling this option will replace any background image you may have previously configured.
{:class='card-panel danger'}

**Note 2**: As of March 2026, setting a wallpaper—whether through the plugin or manually—will disable gradients in the application frame. We are investigating whether this limitation can be addressed in future updates.
{:class='card-panel warn'}