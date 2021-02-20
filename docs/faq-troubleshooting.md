---
layout: docs
title: Troubleshooting
group: troubleshooting
toc: true
comments: true

next:
  url: '/docs/other-products'
  title: Other Products

---

Here you can find all the Troubleshooting FAQs.
{:class='title'}

## Settings

**Q**: I've installed the Material Theme, but the editor still shows me the `Darcula` theme?

**A**: The Theme Switcher is only replacing the theme of the whole IDE, not the editor itself. You can therefore have a
separate theme for the IDE and the Editor, for instance _Palenight_ and _Darker_ or even a custom Color Scheme.

**Q**: I've updated the IDE/plugin to a new version, and now I get an error about the plugin failing to initialize?

**A**: It could come from multiple issues, but it could simply be a problem with the settings not being compatible to the
new version. In that case, simply make a copy of the settings file, then delete the original file, and restart the IDE.

If the issue is gone, simply go back to the settings and go back to your previous configuration manually. If the issue
persists, please report it in the Issues Section.

**Q**: I've removed the plugin, and still the background image persists!

**A**: This is an issue hard to resolve, because the *Custom Wallpaper* function is using the `Set Background image`
function from the IDE behind the curtains. Therefore, removing the plugin might not remove the set image completely. If
that occurs, you can remove the image by opening the Command Panel (Cmd-Shift-A/Ctrl-Shift-A) and type `Set Background
image` and then manually remove the image, or go into `Settings → Appearance → Background Image`.

**Q**: The dark title bar on Mac sticks as well! **Update: since version 2.5.0, it doesn't!**

**A**: As for the Mac Title bar, it is triggered using the IDE Registry. Just open the Command Palette (Cmd-Shift-A)
and type `Registry`.
Then you will see at the top the edited values. Simply press Revert to those you don't want.

**Update 2.5.0:** The Dark Title Bar option is now moved inside the Appearance panel of the IDE, named _Dark Window Headers_ (and currently contains the same problems as above). However, a new option `Themed Title Bar` have taken its place in the Material Theme Settings and allows to completely theme the title bar.

**Q**: **I've got two title bars! / My title bar is gone! / My title bar is …**

**A**: This is due to the _Experimental Themed Title Bar_ implemented since 4.3.0. This feature is still in its experimental state so there could still be bugs. Please open an issue in the GitHub repository, and if it bothers you, you can either revert to the JRE 8, or disable the feature and restart the IDE to get back the real title bar.

**Q**: **Somehow I've updated the plugin and now my window is empty!!!!!**

**A**: This is a rare and weird case due to the custom title bar implementation. Reports have indicated that this issue happens only once and is fixed by… resizing the window! Theoretically it should be enough to fix the issue but if it's not the case, please disable the _Themed Title Bar_ until a fix is found.

**Q**: **What is that analytics option? What data are collected?**

**A**: This is an option to allow sending data to Material Theme servers about users' configuration, usage and trends.
These analytics will allow us to see which features are most used or least used, in order to prioritize
development of features, or maybe notify users about specific features, to provide a better satisfaction.
These data are completely anonymous, and are not shared/sold to any third parties.
If you want to stop sending data, simply turn off the option in the material_theme.xml.

**Q**: **The wizard idea was great! But I've made an error and the wizard won't show up anymore!**

**A**: The wizard will show only once and only when you don't have the `isWizardShown` option set to true in the config file.
But you can reopen it by simply clicking on the action from the Material Theme Toolbar, in the Features menu.


**Q**: **I use two computers and while everything is fine in the first one, when I check the second one it is completely messy, some windows are empty, or I am getting Darcula even though I configured Material Oceanic…**

**A**: This is probably because you are using JetBrains's **Sync Settings** feature. While this is a great feature when you have multiple computers, unfortunately it does not sync third party settings, and as a result settings from the plugin are not synchronized between machines. And since Themes/Look and Feels are indeed synchronized, this would cause some weird behaviors like the ones mentioned previously.

If you need to use Sync Settings, then I'll suggest disabling synchronizing look and feels/themes. Or use the Lite version of the plugin which should be working fine.

**Q**: **Where have all the icons gone?**

**A**: Since 5.0.0 all icons related settings have been moved to the [Atom Material Icons plugin](https://plugins.jetbrains.com/plugin/10044-atom-material-icons), another plugin developed by the Material Theme team. This is in order to encourage developers to develop _Icon Themes_, since the plugin is now free of icons.

**Q**: **I've downloaded a theme from the Plugins Page, and now I'm seeing texts that are not themed, or checkboxes that are wrongly colored, etc…**

**A**: This is because these are native themes, and such themes use the Theme API provided by JetBrains rather than the API used by the Material Themes. Even though the plugin tries to convert it to its own format, it won't be as good as the originals. Still, it should be as similar as possible, so there shouldn't be any critical issues. In that case, please report to the repository's issues.


----
## Main Settings

- Contrast color is also used inside "striped tables", independently of the setting.
- Some resources, such as the scrollbar, will not get the new custom accent color until next restart.

-----
## Tab Settings

**Q**: The Tab Height feature is cool in the editor, but I'd rather leave other tabs untouched.

**A**: Me as well. Unfortunately currently the setting that sets the tab height is shared between all tabs in the SDK,
and there is no way to distinguish between them currently.
Maybe in the future if JetBrains agrees to allow more customization natively.

**Q**: Why limiting the thickness or the tab height? I want to have 10 in thickness and 100 in tabs!!!

**A**: Because allowing values past these limits would make the UI ugly or worse, crash it.
If you have a good reason to want it anyway, you can open an issue on GitHub with why you would want that.
At most, you can still fork the plugin and tweak it to whatever you want.

**Q**: The uppercase tabs feature is so useless! Editor Tabs !== Material Design Tabs!

**A**: While I might agree with this statement, Personally, I think that this is a cool feature, and it doesn't bother me.
It is not allowed by default, so new users will not be startled by it, and if you don't like it you can simply turn it off.

**Q**: My settings are not persisted between my IDEs!

**A**: Yes, this is because third-party plugins are not (yet) synchronizeable by the _Sync Settings_ feature. Therefore, you need to configure each IDE independently. However, since Look and Feels ARE synchronized, this can lead to inconsistencies between the look and feels, like for instance having `Darcula` instead of your chosen theme.

As a result, it is recommended to not rely too much on the Sync feature for now. Configure the two instances independently and try not to change settings too often.

----
## Panel Settings

- Because the IDE is developed with compact table cells in mind, using "padded table cells" may result of display artifacts in some components. One example is the *Python DataView* (https://github.com/ChrisRM/material-theme-jetbrains/issues/485). If you are using such features a lot, just enable the "Compact Table Cells" option to solve that problem.

----
## Component Settings

- Scrollbar settings actually mess up the Registry. Therefore, they can persist even when the plugin is off/disabled (though they shouldn't). In that case, you can reset the default settings by opening the Registry (`Cmd-Shift-A > Registry`) then resetting all custom values in there.
- Scrollbar settings don't work well with HiDPI (yet). For a better experience, please disable these options if you are on such environments until it is fixed.
- The scrollbar settings and color only affect the **UI Scrollbars**, as opposed to the **Editor Scrollbars**. Editor Scrollbars are actually managed by the color scheme, in the *Color Scheme → General → Vertical Scrollbars* section.


----
## Icons Settings

- Monochrome icons actually messes up some parts of the IDE, such as the SVG Image Viewer. If you need to use it, please disable the option temporarily.
- At the moment there is no option to specify the color used in the Monochrome filter, but there's a plan of implementing
  it!

----
## Project View Settings

- Tree views settings work in all tree views, even views such as "Project Structure" or "Remote Host"

----
## Feature Settings

**Q**: I've set "Material Fonts" but now my texts are all scrambled!

**A**: This is a rare bug that occurs and honestly I don't know why it happens.
It could be because the JDK caches fonts or because there are conflicts between Roboto fonts,
or that you have a bad version of Roboto.
Try to reinstall the Roboto font and restart the computer.
If it still doesn't work, just disable the option or select another font in the settings.


-----
## Other Tweaks

**Q**: **I've got two title bars! / My title bar is gone! / My title bar is …**

**A**: This is due to the _Experimental Themed Title Bar_ implemented since 4.3.0. This feature is still in its experimental state so there could still be bugs. Please open an issue in the GitHub repository, and if it bothers you, you can either revert to the JRE 8, or disable the feature and restart the IDE to get back the real title bar.

**Q**: **Somehow I've updated the plugin and now my window is empty!!!!!**

**A**: This is a rare and weird case due to the custom title bar implementation. Reports have indicated that this issue happens only once and is fixed by… resizing the window! Theoretically it should be enough to fix the issue but if it's not the case, please disable the _Themed Title Bar_ until a fix is found.

----
## Custom Themes

**Q**: Can I use more than one custom theme?

**A**: No you can't. If you're confident with your theme, you can fork the project and submit a pull request with
your theme as a predefined theme, or submit your theme in the form (not available yet).

**Q**: Where is stored my custom theme colors?

**A**: You can find your custom colors inside the config directory, just like the Material settings.

**Q**: Why do I get a popup asking me for "resetting the theme colors" at start?

**A**: This popup is used to reset the custom theme colors to their default ones and is popping up when switching from
a dark theme to a light theme and vice-versa.
But sometimes, like for instance when you install the plugin or reset your settings,
because it doesn't know which theme you came from, it will ask even though you didn't ask for it.
Simply press ok, and it will not bother you anymore.

**Q**: I changed the colors, but it doesn't look as good as the default themes.

**A**: Creating a theme is not an easy task, and the Material ones are the result of a long thought process about
which colors are best suited for a UI. However, you can check out other famous Sublime/Atom/Visual Studio themes
as an inspiration and start from it.

**Q**: OK I have an idea of a theme, but there is not enough options in the settings for me to make it.

**A**: It's true that those settings are for color palettes of a few colors only, and regroup components of the
same purpose under the same color group.
But if you'd like to have a different color for checkboxes and radio buttons, or between lists and tables,
or set the tree color different as the main background color, etc. — for this the best option would be to
fork the project and create a brand-new theme.

----
## Excluded File Colors

**Q**: Is there a way to change the text color?

**A**: The color of the text is controlled by another setting. See [File Status Colors]({{site.baseurl}}/docs/configuration/file-status-colors) for more info.

----
## File Status Colors

Because this feature modifies the original `VCS File Colors` feature, please bear in mind the following issues:
- When switching to other scheme that do not define file status colors, some defaults will be applied which are not the defaults provided by Darcula/IntelliJ, and therefore look bad.
- Uninstalling/Disabling the plugin will not revert these settings, so you will still keep the last file colors even after restarting.

Thankfully there is an easy fix for that: in the `VCS File Colors` there is a button _Reset Default_ that will
revert the value back to the Darcula/IntelliJ default.
**Note however that as soon as you change a color scheme the values will change back again.**

----
## License Activation

**Q**: I've bought a license, but I am still identified as a Free User!

**A**: That means that you didn't activate your license yet. At the moment the only way to do it is to run the action to open the _Registration Modal_.

{% include figure.html content="/screens/activateLicense.png" caption="Activate License" %}

{% include figure.html content="/screens/license.png" caption="License" %}

