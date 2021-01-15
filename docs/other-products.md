---
layout: docs
title: Other Products
group: other-products
toc: true
comments: true

previous:
  url: '/docs/faq-troubleshooting'
  title: FAQ/Troubleshooting

next:
  url: '/docs/acknowledgements'
  title: Acknowledgements
---

Showcase of other products using the Material Theme assets
{:class='title'}

# Introduction

The Material Themes have been ported to many editors: VSCode, Atom, Sublime, Brackets, etc… This makes sense as the themes are very popular amongst developers, however it would be great to be able to use these themes in other uses, such as in Office Documents, Websites or other tools.

Therefore, people have thought of many ways to export these beautiful themes to such other uses, using custom styles, configuring settings or even go to modify the apps to inject the colors in the app. Here is a showcase of these:

## Material Theme for Chrome DevTools

[Material Theme for Chrome DevTools](https://chrome.google.com/webstore/detail/material-devtools-theme-c/jmefikbdhgocdjeejjnnepgnfkkbpgjo) is an extension for Google Chrome to modify the DevTools, used vehemently by FrontEnd developers all around the world.

{% include figure.html content="/chrome/brand.png" caption="Material DevTools Theme Collection" %}

It makes use of an experimental feature of Google Chrome, `Developer Tools Experiments` to allow developers to customize the DevTools panels using custom styles.

### Installation

To use this theme, you'll need first to enable Developer Tools experiments in chrome://flags:
- Go to chrome://flags
- Look for "Developer Tools experiments"
- Enable it and restart Chrome
- Open Developer Tools
- Open the Settings > Experiments > "Allow Custom UI Themes"
- Close and reopen the DevTools
- If you use a dark theme (Oceanic, Palenight etc), select the Dark Mode, otherwise select the Light Mode

### Screenshots

{% include figure.html content="/chrome/oceanic.png" caption="Material Oceanic" %}

{% include figure.html content="/chrome/darker.png" caption="Material Darker" %}

{% include figure.html content="/chrome/github.png" caption="GitHub" %}

{% include figure.html content="/chrome/onedark.png" caption="Atom One Dark" %}

{% include figure.html content="/chrome/solarizedlight.png" caption="Solarized Light" %}

{% include figure.html content="/chrome/list.png" caption="Theme List" %}

{% include figure.html content="/chrome/popup.png" caption="Settings Popup" %}

---
## Slack Themes

The Material Themes have also been ported to Slack, the famous instant messaging program. There was already a porting of the themes to customize the sidebar, but now there is finally a way to theme the whole application!

This is done by actually *modifying* the Slack app, as there is no way to actually customize the app. Instead, it is injecting the styles by importing a remote css file, overriding the default colors.

You can find the project [here](https://github.com/mallowigi/slack-themes)

### Installation

To install the plugin, you need to:
- First clone the repository. Make sure you have NodeJS installed.
- Make sure all instances of Slack are closed and Slack does not run in the background.
- Then run `npm install`
- Run `npm run apply`
- You will be prompted to enter your administrator password. This is necessary as it is writing on the disk.
- Also make sure you are online.

### Screenshots

{% include figure.html content="/slack/oceanic.png" caption="Material Oceanic" %}

{% include figure.html content="/slack/darker.png" caption="Material Darker" %}

{% include figure.html content="/slack/lighter.png" caption="Material Lighter" %}

{% include figure.html content="/slack/palenight.png" caption="Material Palenight" %}

You can find the list of available themes in the GitHub repository as well as troubleshooting info.

---

## Other Editions

As a final note, let's list a bunch of projects using or implementing the Material Theme:

  [Visual Studio Code](https://github.com/equinusocio/vsc-material-theme/) (by [@equinusocio](https://github.com/equinusocio))
  [Sublime Text](https://github.com/equinusocio/material-theme/) (also by [@equinusocio](https://github.com/equinusocio))
  [Hyper](https://github.com/equinusocio/hyper-material-theme) (also by [@equinusocio](https://github.com/equinusocio)).
- [Atom](https://github.com/silvestreh/atom-material-ui) (by [@silvestreh](https://github.com/silvestreh))
- [Vim](https://github.com/kristijanhusak/vim-hybrid-material) (by [@kristijanhusak](https://github.com/kristijanhusak)).
- [Terminal OSX](https://gist.github.com/mvaneijgen/4c56701215847dd5ddcf) (by [@mvaneijgen](https://github.com/mvaneijgen)).
- [iTerm2](https://gist.github.com/Revod/3f3115f8d4b90fc986fd4b61441c2567) (by [@Revod](https://github.com/Revod)) and [iTerm2 Palenight](https://github.com/JonathanSpeek/palenight-iterm2) (by [@jonathanspeek](https://github.com/jonathanspeek)).
- [ConEmu](https://gist.github.com/rajadain/b306b2ba71bd58a1df41) (by [@rajadain](https://github.com/rajadain)).
- [Slack Sidebar](https://slack.com/) ( #263238,#2e3a40,#80CBC4,#FFFFFF,#13191C,#ffffff,#50fa7b,#FF5555 )
- [Nylas N1](https://github.com/jackiehluo/n1-material) (thanks to [@jackiehluo](https://github.com/jackiehluo))
- [Base16](https://github.com/ntpeters/base16-materialtheme-scheme) (by [@ntpeters](https://github.com/ntpeters))
- [Notepad++](https://github.com/Codextor/npp-material-theme) (by [@Codextor](https://github.com/Codextor))
- [Chrome DevTools](https://chrome.google.com/webstore/detail/material-devtools-theme-c/jmefikbdhgocdjeejjnnepgnfkkbpgjo) (by [@Mallowigi](https://github.com/mallowigi) and [@jaysuz](https://github.com/jaysuz))
- [Slack Themes](https://www.npmjs.com/package/@mallowigi/slack-themes) - Porting of the Material Theme to Slack
- [Gmail](https://userstyles.org/styles/174257/material-dark-gmail) (by [@Charlie Etienne](https://github.com/CharlieEtienne))
- [Google Calendar](https://userstyles.org/styles/174228/material-dark-google-calendar) (by [@Charlie Etienne](https://github.com/CharlieEtienne))
- [Google Keep](https://userstyles.org/styles/174291/material-dark-google-keep) (by [@Charlie Etienne](https://github.com/CharlieEtienne))
- [Trello](https://userstyles.org/styles/167605/material-dark-trello) (by [@Charlie Etienne](https://github.com/CharlieEtienne))
- [GitHub](https://github.com/CharlieEtienne/material-github) (by [@Charlie Etienne](https://github.com/CharlieEtienne))
- [Google](https://github.com/CharlieEtienne/material-google) (by [@Charlie Etienne](https://github.com/CharlieEtienne))
