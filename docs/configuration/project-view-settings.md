---
layout: docs
title: Project View Settings
description: Customize the Project View's appearance
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/icons-settings'
  title: Icons Settings
next:
  url: '/docs/configuration/component-settings'
  title: Component Settings

---

Customize the Project View's appearance: indent, items' height, font size and so on.
{:class='title'}

{% include carbonads.html %}

----
### Custom sidebar height

Following Material Design principles, this plugin is adding more padding to many of the components used in the IDE, such
as Tables, Lists and Tree. This setting will allow you to override this behavior and specify a custom line height in
your tree views, such as the _Project View_ and the _Settings View_.

The allowed values are between **18** and **30** in order to keep the IDEs within reasonable sizes. The default value
when unchecked is **28**.

<div class="masonry">

{% include figure.html content="/screens/regularLineHeight.png" caption="Regular Line Height" %}

{% include figure.html content="/screens/paddedLineHeight.png" caption="Padded Line Height" %}

</div>

----
### Custom tree indent

Another tree views' feature is the ability to customize the indentation of the items. This might be useful for projects
that have a lot of nesting levels and do not want unnecessary scrolling.

You can customize the left and right indent at ease, though recommended values vary between 4 and 10.

The allowed values vary between **0** and **40**, with the default being **6**.

<div class="masonry">

{% include figure.html content="/screens/condensedView.png" caption="Condensed indent (2)" %}

{% include figure.html content="/screens/dilatedView.png" caption="Dilated indent (8)" %}

</div>

----
### Styled Directories

This setting allows you to set a custom style for directories in the _Project View_. This could be useful to immediately
differentiate between files and directories (default off).

The options for configuring the style of directories can be found inside the
[Material File Colors Settings](/docs/configuration/file-status-colors#directories)

{% include figure.html content="/screens/boldDirectories.png" caption="Styled directories" %}

Please note that since it's a _Color Scheme_ feature, the style must be configured per color scheme rather than
application-wide. This is great though for applying different styles according to the color scheme.
{:class='card-panel warn'}

This feature is available from versions **2.9** and above.

----
### Indicator Style and Thickness

This setting allows you to customize the _Selected Tree Item Indicator_ (the left accentued border) for more flavors.

These are the available styles:

| Style  | Screenshot                                                                                                         |
|:-------|:-------------------------------------------------------------------------------------------------------------------|
| Border | <img src="{{ site.media_folder | prepend: site.baseurl | replace: '//', '/' }}/screens/selectedTreeIndicator.png"> |
| Dot    | <img src="{{ site.media_folder | prepend: site.baseurl | replace: '//', '/' }}/screens/dotTreeIndicator.png">      |
| None   | (no indicator)                                                                                                     |

You can also customize the thickness of the said indicator with a value between `1` and `5`.

You can also switch styles in the `Actions Panel`.

----
### Font Size

Here you can fine tune the font size of the Project View Panes without changing the Font Size of the whole IDE.

Note that you need to restart the IDE for it to be applied.

----
### Notes

- Tree views settings work in all tree views, even views such as "Project Structure" or "Remote Host"
- Font Size also replace the Font inside settings.

