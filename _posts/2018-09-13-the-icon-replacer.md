---
layout: post
title: The Icon Replacer
tags: [framework]
category: [framework]
toc: true
comments: true
maxwords: 40

---

Version 2.9 is another big update in the release timeline, as it is a complete refactor of the **Icon Replacement** framework feature, as well as redesigning all icons from PNG to SVG!

In this post I will try to explain the reasoning behind this refactor and the origin of this feature.

## Icon Replacement Framework

### Background

To better explain the framework, we need to return back at the premises of the plugin, e.g. up to the end of 2015. At that time, John Lindquist, who was working at JetBrains (or for JetBrains, I don't know the details), owner of https://www.egghead.io and Angular enthusiast, found out that it was possible to override Darcula's defaults to create custom themes, a feature unfortunately absent in JetBrains IDEs. He then opened a feature request to allow plugin developers to create their own custom themes, presenting his own plugin, "_Darkerula_" as a proof of concept.

However JetBrains had other plans in mind, such as improving the performance of their IDEs, supporting a lot of languages and frameworks, etc... and UI customization wasn't one of them. But this served as a stepping stone for other plugins to build on that, such as Seti UI, Afterglow or, as you guessed, Material Theme.

Chris Magnussen, the original Material Theme plugin owner, quickly implemented the colors of the original _Material Theme for Sublime Text_, and the result was pretty nice. But then he noticed that the Oceanic blue colors were not blending very well with the bland IntelliJ icons, as opposed as the Sublime Text plugin, so he sought out a solution to replace the icons as well.

It wasn't really easy, the only example he had in stock was the `Idea 2016 Icons Plugin`, which was resorting on patching the JAR file containing the icons, surely not a good solution for plugin distribution. Then he found out that he could use reflection to patch the icons at start, instead of patching the jar file. This way no damage is done to the jar files! He then proceeded by replacing some of the icons, specifically the toolbar icons, which were the biggest issue at the time. And the result was great!

{% include figure.html content="/screens/materialTheme2016.png" caption="Material Theme 2016" %}

After I've taken the reins of the project, I decided to complement this feature with all the remaining icons not patched by the plugin. However at that time SVG rendering was not yet implemented, which means that we had to convert all SVG icons to PNG, and in two sizes: 16x16 and 32x32 for Retina-based devices. Thankfully, the wonderful website https://materialdesignicons.com has this "Export to PNG feature", so this made it really easy. The hardest part was knowing __which icon to choose__!

And so, since version 0.4.0 the _Material Icons_ feature made its apparition, and since then it was using the same framework as the one developed by ChrisRM... until now!

### The framework

The IntelliJ plugin SDK includes a lot of extension points, allowing plugin developers to customize a lot of stuff. Most of these extension points are, agreed, for building language editors and parsers, tool windows, custom actions or standalone applications, but there are also some in charge of customizing the UI, such as:
- Tab title provider
- Tab color provider
- Color Scheme bundles
- File icons provider
- Project View Decorators

However, nothing about Custom themes support nor Custom Icons support (will change with 2018.3!). So, as we said previously, the only option we have left is either to patch the .jar files (not recommended!) or to use **reflection**.

For those who don't know, reflection is a feature of Java that allows an instance of a class to access its structure, e.g. fields, methods, parents and so on. IDEs have been using this feature since the dawn of times to show the structure of classes, usages and so on. But reflection is not only that. It also allows classes to define and call methods, constructors, etc, dynamically e.g. at runtime. This is a pretty insecure feature since it is basically tampering with the classes (as opposed as the sources), but is the only way out in a closed code environment.

So the plugin has been using this feature by overriding the static fields containing the icons used by the IDE, replacing the Icons loaded from the `icons.jar` with icons from the plugin's resources. And it worked as a charm, providing a non-destructive way to replace the IDE icons! This service was named **IconReplacer**.

{% include figure.html content="/customizable.svg" caption="" %}

But if this solution worked for most icons of the IDE, there is an area where it is not working: when the static fields are contained in classes loaded by <u>external plugins</u>. By external plugins, we mean plugins such as Gradle, Maven, but also complete IDEs such as Android Studio, DataGrip or RubyMine!

To circumvent these limitations, a prior solution was to conditionally load sub-instances of IconReplacer, when a plugin is present. So we had an IconReplacer for RubyMine, for DataGrip, for PhpStorm, for PyCharm etc... But that means that for every plugin out there, we had to implement an IconReplacer, which is starting to becoming very inconvenient. And also, sometimes it didn't even work.

And there was another problem, it's about the extensions. Some icons were png, some were svg, some were gifs, some were accented icons, some were animated icons etc... It was far from perfect.

Then there was the big uproar about JetBrains replacing the icons with black and white equivalents, and the rising of solutions bringing back the old icons. That's where I learnt that there was another way to fix the icons issue which would not use reflection at all: **IconPathPatcher**.

----
To be continued...
