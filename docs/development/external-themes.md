---
layout: docs
title: External Themes
description: Create and Publish your Themes for the plugin
group: development
toc: true
comments: true

next:
  url: '/docs/analytics'
  title: Analytics
---

In this section you will learn how to create your own external themes and distribute them via a plugin.
{:class='title'}

{% include carbonads.html %}

**Important note**: Since JetBrains had given the ability for users to create their own themes, and since the plugin supports such themes, the _External Themes_ feature has been deprecated since version 6.10.0, giving more room for adding new features and fixing existing bugs.
{:class='card-panel warn'}

---

## External Themes

From version 2.3.0 the plugin can load custom themes from external plugins, just like Color Schemes,
Keymaps or Live Templates. To do so, it exports a specific
[extension point](https://www.jetbrains.org/intellij/sdk/docs/basics/plugin_structure/plugin_extensions_and_extension_points.html)
to be used from other plugins wanting to extend the theme list.

Once your theme is done, you should see it inside the
[theme switcher](/docs/configuration/settings#theme-switcher) under the _External Themes_ section.

{% include figure.html content="/screens/external.png" caption="External Themes" %}

You can see an example of it from the
[Dracula Theme plugin](https://plugins.jetbrains.com/plugin/10762-dracula-theme), a porting of the successful
[Dracula Theme](https://draculatheme.com/).

Another example of it is the
[Night Owl Theme](https://github.com/xdrop/night-owl-jetbrains), a porting of the already famous
[Night Owl Theme](https://css-tricks.com/creating-a-vs-code-theme/).

If we get enough submissions we might even host a gallery!

## Tutorial

### Getting Started

The best way to illustrate it is by doing a tutorial.

First, you will need the Plugin DevKit. Please refer to the JetBrains documentation to download the necessary dependencies.

Next, go to _File > New Project_ and select _IntelliJ Plugin_

{% include figure.html content="/tutorial/newPlugin.png" caption="New Plugin" %}

Click Next and enter a name for your theme.

{% include figure.html content="/tutorial/pluginExample.png" caption="Plugin Example" %}

### Configuring your plugin

The next step will be to configure your plugin to be used by the Plugin Manager. All the plugin information is contained
inside the `plugin.xml` file.

First enter your plugin's information: pluginId, author name, email, description.

Next, uncomment the line `<depends>com.intellij.modules.lang</depends>` to allow your plugin in all platforms.

Finally, add the **Material Theme Dependency** to make use of Material Theme's theme system for importing your theme.
That means that your plugin is dependant of the Material Theme being installed, of course.

- Add `<depends>com.chrisrm.idea.MaterialThemeUI</depends>` to the dependencies.
- Add the extension point:

```html
<extensions defaultExtensionNs="com.chrisrm.idea.MaterialThemeUI">
   <bundledTheme name="VibrantInk" path="/themes/vibrantink"/>
</extensions>
```

- If you want to also include a Color Scheme, you can add a color scheme extension:

```html
<extensions defaultExtensionNs="com.intellij">
    <bundledColorScheme path="colors/VibrantInk" id="VibrantInk"/>
</extensions>
```

You can try to launch your plugin. Just comment the Material Theme extension and dependencies and run the plugin from
the run configuration. Once the sandbox is launched, open the settings and go to the Plugin page. You should see your
plugin there.

{% include figure.html content="/tutorial/plugins.png" caption="Plugins" %}

At the end your plugin.xml should look like this:

{% include figure.html content="/tutorial/pluginxml.png" caption="Plugin.xml" %}

(don't bother about the red lines)

### Theme colors

Finally, the most important part: the theme information file. Just like color schemes, themes are written in XML. First
create the xml file in the directory specified in the `bundledTheme` extension.

Then fill the theme info and colors. For more information about the theme colors, please refer to the
[Custom Theme section](/docs/configuration/custom-themes)

Example:

```xml
<mtTheme>
    <name>VibrantInk</name>
    <themeId>vibrantInk</themeId>
    <dark>true</dark>
    <editorColorsScheme>VibrantInk</editorColorsScheme>
    <colors>
        <color id="background" value="252526"></color>
        <color id="foreground" value="FFFFFF"></color>
        <color id="text" value="b0bec5"></color>
        <color id="selectionBackground" value="2e3f34"></color>
        <color id="selectionForeground" value="FFFFFF"></color>
        <color id="button" value="333333"></color>
        <color id="secondaryBackground" value="3F3F46"></color>
        <color id="disabled" value="666666"></color>
        <color id="contrast" value="000000"></color>
        <color id="tableSelected" value="2e3f34"></color>
        <color id="secondBorder" value="404040"></color>
        <color id="highlight" value="6272A4"></color>
        <color id="treeSelection" value="2e3f3490"></color>
        <color id="notifications" value="252526"></color>
        <color id="accentColor" value="ff6600"></color>
        <color id="excludedColor" value="333333"></color>
    </colors>
</mtTheme>
```

Once you're done, launch the sandbox again. But this time you will need to manually download the Material Theme plugin
in order to use your plugin. For that, once the sandbox is up, download the Material Theme UI from the Plugins page.
Then click Restart IDE and launch the sandbox again.

If everything went well, you should see your theme in the list.

{% include figure.html content="/tutorial/externalList.png" caption="External List" %}

Then select it, and TA-DA!

{% include figure.html content="/tutorial/vibrantInk.png" caption="Vibrant Ink" %}

The next step would then be to publish your plugin to the JetBrains repository. Just head to
<https://plugins.jetbrains.com/> and follow the instructions there.

And of course post a link here if you want to share it with other users!

### Next steps

Next steps for external themes could be:
- Custom Icon
- Custom Font
