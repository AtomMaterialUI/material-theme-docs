---
layout: docs
title: What's new?
group: whatsnew
toc: true
---

----

## What's new in Material Theme UI v11.0.0

New year, new look! The **Material Theme UI plugin** is back with its latest evolution, bringing even more goodness to your IDE. This version introduces **Material 3**, giving your workspace a fresh, modern vibe that replaces the classic (but aging) **Material 2** style. We've also baked in support for the sleek **Google Sans** font (you'll need to grab it separately) to really make things pop.
{:class='title'}

### Material 3 Style

{% include figure.html content="/screens/ui/material3.png" caption="Fresh UI: Buttons, Dropdowns, Sliders and Search Boxes" %}

{% include figure.html content="/screens/ui/material3_2.png" caption="New Toggles" %}

{% include figure.html content="/screens/ui/material3_3.png" caption="Modern Option Buttons" %}

Want a sneak peek? Check out the new **UI DSL Showcase** page in your settings.

And for the fans of the classics: we've given the original **Material Design** (_Material 1_) a complete makeover. It's no longer just a "deprecated" style—it's now a fully-featured customization option for those who love that legacy look.

----

But that's not all! We've added some handy new features to level up your workflow:

## Customizable Floating Action Button (FAB)

Need quick access to your favorite actions? We've added a floating button right in your IDE window. You can pick which actions it triggers and where it sits—just head over to the *Menus and Toolbars* settings to set it up.

{% include figure.html content="/screens/fab.png" caption="Your new best friend: the Floating Action Button" %}

## Theme Ignores

Sometimes an external theme doesn't quite get the colors right, or it misses some parts of the IDE. With the new **Theme Ignores** page, you can choose to ignore specific theme properties and stick with the native ones instead. It's perfect for fixing those annoying color clashes.

{% include figure.html content="/screens/settingsv3/themeIgnores.png" caption="Fine-tune your theme ignores" %}

## Preview Theme Colors

Curious about what makes up your current theme? This new tool gives you a clear table of all the theme's properties and their exact colors. No more guessing!

{% include figure.html content="/screens/settingsv3/previewThemeColors.png" caption="See your theme's true colors" %}

## Refined Spacing Settings

We know that every pixel counts. We've beefed up the **Spacing Settings** to give you even more control over the size and padding of UI components. Get your IDE looking exactly how you want it.

{% include figure.html content="/screens/settingsv3/spacingNew.png" caption="Pixel-perfect spacing control" %}

## Settings Overhaul

We've also gone through every single settings page to smooth out the bumps. We've fixed UX quirks, ironed out UI bugs (like those pesky broken images or disabled elements), and made everything feel much more polished.

**Full Changelog**:

### Features

- **Contrast Mode by Default**: We've enabled Contrast Mode for everyone to give the UI a sharper, cleaner look right out of the box.
- **Hello, Material 3**: Material 3 is now the default style, taking over from the old Material 2.
    - We also revamped **Material 1** so it's a first-class citizen again.
- **Floating Action Button (FAB)**: Your new shortcut hub—customizable, draggable, and it remembers where you put it.
- **Theme Ignores**: A dedicated interface to keep external themes in check.
- **UI Customization Boost**:
    - New settings for **Custom Button Radius** and component borders.
    - Better **Rounded Tabs** with more ways to tweak them.
    - Official support for the **Google Sans** font.
- **Better Spacing**: More options to fine-tune your IDE's layout.
- **Database Perks**: Added settings for database tables and better plugin integration.
- **Live Color Preview**: A new page to visualize every color in your current theme.
- **UI DSL Showcase**: A handy way to preview how different UI components look.

### Fixes

- A massive cleanup of the settings pages to squash a ton of bugs.
- Smoother Contrast Mode, especially when using Islands or High Contrast themes.
- More consistent and better-looking Accent Mode.
- Fixed a bug where the plugin wouldn't load for users on the free plan.
- Better memory management when switching themes (bye-bye, memory leaks!).
- Fixed opacity issues for inactive island settings.

### Other

- Bumped Kotlin and other dependencies for a faster, more stable experience.
- Updated translations.
- Refreshed UI properties and color schemes.

**Note**: This is still a work-in-progress, so there's a chance there are still nasty little bugs here and there. Hopefully, it will improve with time, so don't hesitate to report any issues you find!

Happy coding!