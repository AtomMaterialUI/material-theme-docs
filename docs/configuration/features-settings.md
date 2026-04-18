---
layout: docs
title: Feature Settings
description: Enable or disable Material Theme features
group: configuration
comments: true
toc: true

previous:
  url: '/docs/configuration/ui-components-settings'
  title: UI Components Settings
next:
  url: '/docs/configuration/project-title-bar-settings'
  title: Project Title Bar Settings

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

Here you can turn on and off specific features of the Material Theme for even further customization.
{:class='title'}

{% include carbonads.html %}

Some features are only available for premium users. You can either buy a premium license for the plugin, or purchase the license for these features only by going to this link: [Material Theme Extras](https://plugins.jetbrains.com/plugin/19250-material-theme-ui-extras).
{:class='card-panel warn'}

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

The width of the editor depends on the **Hard Wrap** configured in your Code Style settings, e.g. in `Settings > Editor > Code Style > [Your language] > Hard Wrap`.

{% include figure.html content="/screens/features/hardWrap.png" caption="Code Style Settings > Hard Wrap" %}

{% include figure.html content="/screens/features/hardWrap80.png" caption="80 Characters Width" %}

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

----

### Custom UI Font

The Material Theme UI plugin replaces the IDE's default font with the standard fonts recommended by Material Design style guides.

For _Material Design (Material 1)_ and _Material Theme (Material 2)_, the recommended font is [**Roboto**](https://fonts.google.com/specimen/Roboto). For _Material You (Material 3)_, it uses [**Google Sans**](https://fonts.google.com/specimen/Google+Sans). For CJK (Chinese, Japanese, Korean) languages, it uses [**Noto Sans**](https://fonts.google.com/noto/specimen/Noto+Sans?query=noto+sans).

While you can change the font via `Settings > Appearance & Behavior > Appearance > Use custom font`, doing so sets a global IDE state that may interfere with features like *Zoom Level* or *Presentation Mode*.

The **Custom UI Font** option in the Material Theme settings allows you to customize the font without these side effects.

{% include figure.html content="/screens/features/appearance.png" caption="Appearance Settings" %}

{% include figure.html content="/screens/features/customFont.png" caption="Custom UI Font" %}

**Note**: If you have already set a custom font in the IDE's _Appearance_ settings, that setting will take precedence over this one.
{:class='card-panel warn'}

----

### File Status Colors

By default, JetBrains IDEs color filenames based on their Version Control (VCS) status (see [File Status Colors](/docs/configuration/file-status-colors.md)). These colors are typically defined within the *Color Scheme* rather than the *UI Theme*.

This setting allows you to enforce these colors when switching themes, making them independent of the active *Color Scheme*. This is particularly useful for themes that don't define these colors or if you prefer consistent file colors across different schemes.

{% include figure.html content="/screens/features/customFileColors.png" caption="Custom File Colors" %}

These colors can be customized in `Settings > Editor > Color Scheme > Custom File Colors` and will override the defaults in `Settings > Version Control > File Status Colors`.

**Note**: Enabling this option modifies the current Color Scheme by creating a copy with the new settings. Disabling the option will not automatically restore the original colors; you must manually click **Restore Defaults** in the Color Scheme settings to revert.
{:class='card-panel warn'}

### Custom Directories Style

Similar to *File Status Colors*, this setting adds an option to the *Custom File Colors* scheme settings, allowing you to set custom colors for modules or directories.

{% include figure.html content="/screens/features/directories.png" caption="Directories File Colors" %}

{% include figure.html content="/screens/features/customDirectoriesStyle.png" caption="Custom Directories Style" %}

**Note**: Although you can configure background, marker, and effects colors, only the foreground color will be applied.
{:class='card-panel'}

**Note 2**: Like *File Status Colors*, this feature modifies your active color scheme.
{:class='card-panel warn'}

----

## Color Scheme Tweaks

These settings modify your current color scheme rather than the IDE's overall appearance. Please note that applying these changes might overwrite any custom modifications you have made to the color scheme.
{:class='card-panel warn'}

### Automatically reset color scheme

This option automatically removes all customizations from your color scheme when switching themes. This ensures a clean slate, which is especially useful given that many plugins, including this one, modify color schemes.

It also ensures you receive all the latest color scheme updates, as copied schemes cannot automatically detect changes to the original.

### Use Editor Default Font

This option overrides the color scheme's font with the *Default Font* defined in `Settings > Editor > Font`. Since color schemes can define their own fonts—leading to inconsistencies across different themes—enabling this ensures a uniform typography regardless of the active color scheme.