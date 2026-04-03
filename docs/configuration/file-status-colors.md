---
layout: docs
title: File Status Colors
description: Customize File Status Colors
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/excluded-files-colors'
  title: Excluded Files Colors
next:
  url: '/docs/configuration/scrollbars'
  title: Scrollbars
---

These settings allow you to customize the file status colors on a per color scheme basis.
{:class='title'}

This feature is available in the free plan.
{:class='card-panel warn'}

{% include carbonads.html %}

## Introduction

**File Status Colors** is a built-in feature of the IDE that colorizes filenames according to their status. These colors are applied across various parts of the IDE, including:

- Project View
- Editor Tabs
- Recent Files
- Navigate to File/Class/Symbol
- and more...

A file's "status" refers to its state within a Version Control System (VCS), such as Git, SVN, or Mercurial. This includes states like *modified*, *newly added*, *deleted*, *ignored*, or *conflicted*.

Originally, these color settings were found within the **Color Schemes** section of the settings, allowing designers to define their own file status colors. However, JetBrains later moved these settings to the application level, reasoning that UI colors should be separated from editor-specific settings.

While this change organized the settings differently, many users still prefer to have these colors change automatically with their theme. For instance, a theme creator might want *Modified Files* to appear in cyan for a specific dark theme but use a different color for a light one.

Because the IDE now treats these colors as application-level settings rather than scheme-specific ones, they are typically coupled to the global *Look and Feel* (e.g., Light or Dark). The Material Theme UI plugin restores the ability to customize these colors on a per-scheme basis.

**Note**: Although the IntelliJ SDK provides a way for theme authors to customize these colors via the [Color Scheme](http://www.jetbrains.org/intellij/sdk/docs/reference_guide/ui_themes/themes_extras.html#customizing-version-control-file-status-colors), this method is relatively unknown and often conflicts with the Version Control settings. The **Custom File Colors** provided by this plugin is the recommended alternative.
{:class='card-panel warn'}

----

## Custom File Colors

These settings are located in a dedicated section within the **Color Schemes** settings rather than the main Material Theme settings.

{% include figure.html content="/screens/features/customFileColors.png" caption="Custom File Colors" %}

Editing these colors will directly update the values found in `Settings > Version Control > File Status Colors`.

The following table describes the available file statuses and their default Material Theme colors:

| Title                         | Material Color                                                                                                                | Explanation                                               |
|:------------------------------|:------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------|
| Added                         | <span style="background-color:#000; font-weight: bold; font-family: monospace; color:#C3E88D">#C3E88D</span> (green)          | New file added to the repository in active changelist     |
| Added outside                 | <span style="background-color:#000; font-weight: bold; font-family: monospace; color:#C3E88D">#C3E88D</span> (green)          | New file added to the repository in non-active changelist |
| Changelist conflict           | <span style="background-color:#000; font-weight: bold; font-family: monospace; color:#d5756c">#d5756c</span> (red)            | File modified in two changelists                          |
| Copied                        | <span style="background-color:#000; font-weight: bold; font-family: monospace; color:#C3E88D">#C3E88D</span> (green)          | File copied (Mercurial only)                              |
| Deleted                       | <span style="background-color:#000; font-weight: bold; font-family: monospace; color:#808080">#808080</span> (gray)           | File removed from the repository                          |
| Deleted from FS               | <span style="background-color:#000; font-weight: bold; font-family: monospace; color:#808080">#808080</span> (gray)           | File deleted from the file system                         |
| Directories                   | <span style="background-color:#000; font-weight: bold; font-family: monospace; color:#FCFCFA">#FCFCFA</span> (default text)   | Directory color (depends on *Styled Directories*)         |
| Have changed descendants      | <span style="background-color:#000; font-weight: bold; font-family: monospace; color:#80cbc4">#80cbc4</span> (cyan)           | Directory has recursively changed files (not used)        |
| Have immediate changed        | <span style="background-color:#000; font-weight: bold; font-family: monospace; color:#80cbc4">#80cbc4</span> (cyan)           | Directory has immediate changed descendants (not used)    |
| Hijacked                      | <span style="background-color:#000; font-weight: bold; font-family: monospace; color:#ffcb6b">#ffcb6b</span> (yellow)         | File is modified without editing (Perforce only)          |
| Ignored                       | <span style="background-color:#000; font-weight: bold; font-family: monospace; color:#ab7967">#ab7967</span> (brown)          | File is ignored                                           |
| Ignored (ignore plugin)       | <span style="background-color:#000; font-weight: bold; font-family: monospace; color:#ab7967">#ab7967</span> (brown)          | File is ignored by the .ignore plugin                     |
| Merged                        | <span style="background-color:#000; font-weight: bold; font-family: monospace; color:#C792EA">#C792EA</span> (violet)         | File is modified by a merge                               |
| Merged with conflicts         | <span style="background-color:#000; font-weight: bold; font-family: monospace; color:#d5756c">#d5756c</span> (red)            | File has conflicts                                        |
| Modified                      | <span style="background-color:#000; font-weight: bold; font-family: monospace; color:#80cbcf">#80cbcf</span> (cyan)           | File modified in active changelist                        |
| Modified outside              | <span style="background-color:#000; font-weight: bold; font-family: monospace; color:#82AAFF">#82AAFF</span> (blue)           | File modified in non-active changelist                    |
| Obsolete                      | <span style="background-color:#000; font-weight: bold; font-family: monospace; color:#ffcb6b">#ffcb6b</span> (yellow)         | File is obsolete (SVN only)                               |
| Renamed                       | <span style="background-color:#000; font-weight: bold; font-family: monospace; color:#80CBC4">#80CBC4</span> (cyan)           | File renamed (Mercurial only)                             |
| Switched                      | <span style="background-color:#000; font-weight: bold; font-family: monospace; color:#C792EA">#C792EA</span> (violet)         | File from another branch (SVN only)                       |
| Suppressed                    | <span style="background-color:#000; font-weight: bold; font-family: monospace; color:#546E7A">#546E7A</span> (comments color) | File from a Virtual File System (like Scratches)          |
| Unknown                       | <span style="background-color:#000; font-weight: bold; font-family: monospace; color:#d5756c">#d5756c</span> (red)            | Unversioned file                                          |
| Up to date                    | none (default tree color)                                                                                                     | File unchanged                                            |

**Note**: This feature works best when the *Color Scheme* and the *UI Theme* are aligned. Using mismatched schemes could yield unpredictable results, such as colors failing to update or displaying incorrectly.
{:class='card-panel warn'}

**Note 2**: The available statuses depend on your VCS. For example, Git does not support the `Copied` status, and Perforce does not support the `Renamed` status. If no VCS is used, no status colors will be applied.
{:class='card-panel warn'}

----

## Directories

In the **Custom File Colors** section, you can find a property called **Directories**. This allows you to set a custom color for directories, helping to differentiate them from regular files.

This setting requires the [Styled Directories](/docs/configuration/trees-settings#styled-directories) option to be enabled.

{% include figure.html content="/screens/features/directories.png" caption="Styled Directories" %}

**Note**: Although all customization options are available in the settings, only `Bold`, `Italic`, `Foreground`, `Error Stripe Mark`, `Underscored`, and `Underwaved` are currently supported for directories.
{:class='card-panel warn'}

----

## Advanced Customization

Color scheme designers can manually implement this feature by adding the following keys to their `.icls` or `.xml` scheme files. If you previously defined these colors in the IDE before the feature was moved, they should still work when using this plugin.

```xml
<colors>
    <option name="FILESTATUS_ADDED" value="C3E88D"/>
    <option name="FILESTATUS_COPIED" value="C3E88D"/>
    <option name="FILESTATUS_DELETED" value="808080"/>
    <option name="FILESTATUS_HIJACKED" value="ffcb6b"/>
    <option name="FILESTATUS_IDEA_FILESTATUS_DELETED_FROM_FILE_SYSTEM" value="808080"/>
    <option name="FILESTATUS_IDEA_FILESTATUS_IGNORED" value="ab7967"/>
    <option name="FILESTATUS_IDEA_SVN_FILESTATUS_EXTERNAL" value="c3e88d"/>
    <option name="FILESTATUS_IGNORE.PROJECT_VIEW.IGNORED" value="ab7967"/>
    <option name="FILESTATUS_MERGED" value="C792EA"/>
    <option name="FILESTATUS_MODIFIED" value="80cbc4"/>
    <!--<option name="FILESTATUS_NOT_CHANGED" value="626669"/>-->
    <option name="FILESTATUS_NOT_CHANGED_IMMEDIATE" value="80cbc4"/>
    <option name="FILESTATUS_NOT_CHANGED_RECURSIVE" value="80cbc4"/>
    <option name="FILESTATUS_SWITCHED" value="C792EA"/>
    <option name="FILESTATUS_SUPPRESSED" value="979FAD"/>
    <option name="FILESTATUS_UNKNOWN" value="f77669"/>
    <option name="FILESTATUS_addedOutside" value="C3E88D"/>
    <option name="FILESTATUS_changelistConflict" value="d5756c"/>
    <option name="FILESTATUS_modifiedOutside" value="82AAFF"/>
</colors>
```

## Caveats

Because this feature overrides the default VCS file color behavior, please keep the following in mind:

- If you switch to a scheme that does not define custom file status colors, the IDE will apply its own defaults, which may not align perfectly with the Material Theme.
- Disabling or uninstalling the plugin will not automatically revert these colors. The last applied colors will remain in your settings.

To restore the original colors, go to the **VCS File Colors** settings and click **Reset to Default**. This will revert the colors back to the Darcula or IntelliJ defaults. 

**Note: These values will be overridden again if you change back to a color scheme that uses custom status colors.**

{% include figure.html content="/screens/features/restoreDefault.png" caption="Restore Default" %}