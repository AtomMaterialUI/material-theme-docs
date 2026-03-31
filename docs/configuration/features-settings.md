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
---

Some of these features are only available for premium users.
{:class='card-panel warn'}

Here you can turn on and off specific features of the Material Theme for even further customization.
{:class='title'}

{% include carbonads.html %}

## General

### Animated Tool Windows

Tool Windows in JetBrains IDEs can have 5 different states: **undocked, floating, windowed, docked pinned and docked unpinned**

By default, tool windows are **Docked Pinned**, meaning they are docked to the sides of the screen and always visible, unless the user
minimizes it by clicking on the minimize button, or by using the shortcut `Shift + Escape` when the tool window is focused.

But this behavior can be changed either by clicking on the "more" button on every tool window.

{% include figure.html content="/screens/features/toolWindowStates.png" caption="Tool Window States" %}

Among these, the **Undocked** state represents a tool window that opens when pressing on the button, then closes automatically when you
click outside of it. But unlike the _Docked Unpinned_ state, in the Undocked state, the tool window opens **on top** of the main editor,
rather than at the side, like a drawer. However, the opening and closing animation is instant, which can be a bit jarring.

This setting adds a sliding animation on tool windows when in that state.

{% include figure.html content="/screens/features/animatedToolWindows.png" caption="Animated Tool Windows" %}

In addition, two actions have been added to the _Material UI Actions Toolbar_ to set all current tool windows to either the Undocked or
Docked Pinned state, to quickly switch to a auto-hidden layout experience and benefit from the animations.

{% include figure.html content="/screens/features/dockingOptions.png" caption="Docking Actions" %}

----

### Centered Editor

This option centers the editor in the middle of the screen rather than stuck to the left, completing the fully undocked layout for a more
focused experience. It is very similar to the _Distraction Free Mode_, but without hiding the tabs and the tool windows.

{% include figure.html content="/screens/features/centeredEditor.png" caption="Centered Editor" %}

**Note**: At this time, there is no way to increase or reduce the width of the centered editor, but we're monitoring for when such an option
can be implemented in the future.
{:class='card-panel'}

----

### Floating Action Button (FAB)

This feature creates a small floating action button at the bottom right of the editor, which is a placeholder to contain any generic action
you'd like to have access at all times.

{% include figure.html content="/screens/features/fab.png" caption="Floating Action Button" %}

By default, it contains three basic default actions:

- **New File**: Creates a new file in the same folder as the current opened editor.
- **New Directory**: Creates a new directory in the same folder as the current opened editor.
- **New Scratch File**: Creates a new scratch file in the type of your choice.

{% include figure.html content="/screens/features/fabActions.png" caption="FAB Actions" %}

However, you can also assign your own custom actions through the `Settings > Menus And Toolbars > Material FAB`. This can be useful, for
instance, to have access to common actions like "Jump To Top", "Reformat Code", "Push", etc.

{% include figure.html content="/screens/features/customizeFab.png" caption="Customize FAB Actions" %}

{% include figure.html content="/screens/features/fabCustomActions.png" caption="Custom FAB Actions" %}

You can also drag and drop the button to move it wherever you want, and it will remember the last position even after closing the IDE. You
can also temporarily hide it by clicking on the "x" button, but it will reappear again once you switch to another tab.

----

### Overlays

The Material Theme UI follows the Material Design principles and one of those principles is the use of overlays to create a sense of depth
and hierarchy in the UI. This setting enables or disables the use of overlays in the IDE.

When enabled, some UI elements will have a semi-transparent background that allows the underlying content to show through, creating a
layered effect. This can help to visually separate different sections of the UI and make it easier to focus on specific elements.

{% include figure.html content="/screens/features/overlays.png" caption="Overlays" %}

Overlays are displayed whenever a dialog or light popup is open, such as the Settings dialog, the Find In Files, Search Everywhere, etc.

### More Overlays

Normally, overlays are displayed only for dialogs and light popups, but you can also decide to enable showing them for more UI elements, such as Menus, Quick Switch Panels, and other floating elements, making the experience even more immersive. This feature is disabled by default.

{% include figure.html content="/screens/features/moreOverlays.png" caption="More Overlays" %}

### Overlays Opacity

This setting allows you to fine-tune the opacity of the overlays. The default is 40%, but you can decide to increase or decrease it to your liking.

{% include figure.html content="/screens/features/transparent.png" caption="20% Opacity" %}

{% include figure.html content="/screens/features/veryOpaque.png" caption="80% Opacity" %}