---
layout: docs
title: Stylish Regions
description: Customize folded code regions with beautiful separators and title blocks
group: configuration
toc: true
comments: true

previous:
  url: '/docs/configuration/peek'
  title: Peek
next:
  url: '/docs/configuration/window-coloring'
  title: Window Coloring
---

**Stylish Regions** transforms your folded code regions into beautifully styled visual separators, making it easier to organize and navigate large files. {:class='title'}

With customizable styles, colors, fonts, and positioning options, you can create a personalized code organization system that matches your workflow.

Looking for more ways to customize your IDE's appearance? Check out [Peek](/docs/configuration/peek) for inline code navigation, or [Window Coloring](/docs/configuration/window-coloring) for per-project frame colors.

Most customization features require the **Advanced** license. Basic enable/disable is free for everyone. {:class='card-panel warn'}

{% include carbonads.html %}

## Overview

When working with large files, code regions (`//region` and `//endregion` comments) help organize related code blocks. By default, these regions collapse into simple text separators. **Stylish Regions** enhances them with:

- Three distinct separator styles (Wavy, Line, Stripe)
- Customizable separator and text colors
- Adjustable fonts and sizes
- Positioned title blocks with rounded corners
- Auto-generated colors from region names

You can configure Stylish Regions by navigating to `Settings → Appearance → Material Theme UI → Regions`.

{% include figure.html content="/screens/regions/regionsSettings.png" caption="Regions Settings" %}

## Separator Styles

Choose from three visual styles that determine how the collapsed region separator line appears:

### Wavy

The default style features a smooth, undulating wave pattern that provides a soft, organic look. Perfect for a modern, friendly aesthetic.

{% include figure.html content="/screens/regions/wavyStyle.png" caption="Wavy Separator Style" %}

### Line

A clean, straight horizontal line that offers a minimalist appearance. Ideal for those who prefer sharp, crisp visual boundaries.

{% include figure.html content="/screens/regions/lineStyle.png" caption="Line Separator Style" %}

### Stripe

A thick, bold stripe that makes regions stand out prominently. Great for high-contrast organization and quick visual scanning.

{% include figure.html content="/screens/regions/stripeStyle.png" caption="Stripe Separator Style" %}

---

## Appearance Customization

### Separator Color

Customize the color of the separator line itself. By default, regions use a teal accent color (`#009688`), but you can choose any color that fits your theme or organizational system.

Enable **Custom Color** and select your preferred color from the color picker. When disabled, the separator uses the theme's default accent color.

### Text Color

The region title text color can also be customized independently from the separator. By default, it uses a light gray color (`#B0BEC5`), but you can set it to any color for better readability or visual hierarchy.

This is particularly useful when you want the title to stand out more prominently or match specific branding colors.

{% include figure.html content="/screens/regions/customColors.png" caption="Custom Separator and Text Colors" %}

---

## Font Customization

### Font Family

Choose a custom font family for your region titles. The default is Roboto, but you can select from any font installed on your system. This allows you to:

- Match your editor font for consistency
- Use a distinctive font for easy region identification
- Create visual hierarchy with different font weights

### Font Size

Adjust the region title font size between **8px and 24px** (default is 14px). Larger sizes make regions more prominent and easier to spot when scrolling, while smaller sizes provide a more subtle organizational cue.

{% include figure.html content="/screens/regions/fontCustomization.png" caption="Font Family and Size Options" %}

---

## Title Block Settings

### Block Corner Radius

Control the roundedness of the region title block's corners with a radius range of **0-32px** (default is 8px):

- **0px**: Sharp, rectangular corners for a traditional look
- **8px**: Softly rounded corners (default, matches Material Design)
- **16px+**: Heavily rounded corners for a pill-shaped appearance

### Block Position

Choose where the region title block appears horizontally:

- **Left**: Aligned to the left edge of the editor
- **Center**: Centered in the editor (default)
- **Right**: Aligned to the right edge of the editor

Each position can be fine-tuned with an offset value.

### Block Offset

When the block position is set to **Left** or **Right**, you can add an offset distance (**0-500px**, default is 0px) from the edge. This creates breathing room or aligns the block with specific indentation levels in your code.

For example, setting a left position with a 50px offset moves the title block 50 pixels away from the left edge, making it align with your code's indentation.

{% include figure.html content="/screens/regions/blockPositioning.png" caption="Block Positioning and Offset Options" %}

---

## Generate Block Color

Enable **Generate Block Color** to automatically create a unique background color for each region's title block based on its name. This feature uses a hash of the region title text to consistently generate the same color for regions with the same name.

Benefits:
- **Visual Grouping**: Regions with the same name across different files get the same color
- **Quick Identification**: Instantly recognize region types by color
- **No Manual Setup**: Colors are generated automatically

This is especially useful when you have standard region names like "Constants," "Helpers," or "API Calls" that appear across multiple files.

{% include figure.html content="/screens/regions/randomColor.png" caption="Auto-Generated Block Colors" %}

---

## Settings Location

All Stylish Regions settings are located at:

**Settings → Appearance → Material Theme UI → Regions**

From here, you can:
- Enable or disable the feature entirely (free)
- Select your preferred separator style (Advanced license)
- Customize colors, fonts, and positioning (Advanced license)
- Toggle auto-generated block colors (Advanced license)

---

## Premium Features

**Most customization options require an Advanced license:**
- Separator styles (Wavy, Line, Stripe)
- Custom separator and text colors
- Font family and size customization
- Title block corner radius, position, and offset
- Auto-generated block colors

**The basic enable/disable toggle is available to all users** without a license. This allows you to try the default Wavy style before upgrading.

Learn more about [licensing](/docs/configuration/license-info).
