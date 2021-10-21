---
layout: docs
title: Icon Associations Editor
description: In-app Icon Associations Edition
group: atom
toc: true
comments: true

previous:
  url: '/docs/icons/atom-material-icons-plugin'
  title: Atom Material Icons Plugin
next:
  url: '/docs/reference/color-palette'
  title: Color Palette

---

View, Add and Edit your icon associations!
{:class='title'}

{% include carbonads.html %}

## Introduction

Since version 50.0 (5.0.0) of the _Atom Material Icons_ plugin, a new Settings Page has been added allowing you to view, add, remove or edit the plugin's associations directly from inside the IDE.

{% include figure.html content="/screens/customAssociations.png" caption="Icon Associations Editor" %}

**Note**: This screen will replace the current "_Custom Associations_" settings page, which is going to be removed in a future released. Currently defined custom associations will need to be migrated to the new page.
{:class='card-panel warn'}


## Features


### View current assocations

Thanks to these tables, you will now be able to have a quick glance to all available file and folder associations of the plugin.

**Associations** are made of the following parts:
- _Name_ - An _unique_ identifier
- _Enabled_ — whether the association should be matched
- _Pattern_ — The pattern to match the file path/folder name against
- _Icon_ — The icon to display. You can use your own icons (SVG only).
- _Priority_ — The association's priority. Associations with higher priority are matched first.

**TIP**: Always assign a lower priority to "generic extensions", such as `png`, `json`, `md`. That way, defining custom associations such as `package.json` will be processed first. Alternatively, you could also assign higher priority to custom association.
{:class='card-panel warn'}

### Search for an association

You can use the __Search bar__ at the top of the table to filter out the table by looking for associations having the search term in their **name** or **pattern**.


### Toggle/Add/Edit/Remove

You can toggle/add/edit/remove the associations the same way it was done for the now deprecated _Custom Associations_. A quick reminder of the rules for making an association:

- Names should be unique
- Pattern should be a valid regular expression pattern
- Pattern should start with `.*` for file associations only
- Priority must be a positive number
- Icon Path can be selected from the file system and must point out to SVG icons. **Please note that the size is not checked**, so please make sure to use **16×16 SVG icons**.

New and edited associations will appear blue at the top of the table, indicating that they are not the default associations provided by the plugin.


### Toggle Pattern Highlighting

On the top of the table you can find a button allowing you to turn on the syntax highlighting for regular expression patterns. This should give you a better visibility of your defined regexps.

This toggle is off by default due to the heavy load it puts on the table. Please use it very carefully.

### Reset Associations

A button is available at the bottom of the table to remove all custom associations and revert to the default ones.

**PLEASE BE CAREFUL THAT DELETED ASSOCIATIONS CANNOT BE RECOVERED**.

### Downloading default icons

You can download the icons provided by the plugin in the following repository: <https://github.com/mallowigi/iconGenerator>
