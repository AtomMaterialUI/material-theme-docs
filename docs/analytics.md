---
layout: docs
title: Analytics
description: About Analytics
group: development
comments: true

previous:
  url: '/docs/reference/chrome-themes'
  title: Chrome Themes

next:
  url: '/docs/faq-troubleshooting'
  title: FAQ/Troubleshooting
---

{% include carbonads.html %}

## Analytics

Starting from 2.4.0, analytics have been added to the plugin.
Just like other plugins' analytics, these analytics are here to analyze feature usage and users' audiences.

This step would provide us useful data for prioritizing development of highly requested features, while scrapping others that are seldom used.
This could also be a good opportunity to make people aware of specific features via push notifications or
daily hints, for instance.

Note that this process doesn't collect user information at all, therefore **completely anonymous**.
It's only used to measure feature usage. And of course, it's **not sold** to third parties.

## Opt-in and opt-out

These metrics are opt-in by default.
This means that unless you specifically consent to upload analytics data, these won't be collected.
The consent is shown via a Notification just like JetBrains's own consent.

Whether you choose yes or no, this consent won't appear unless you clean up your settings.

{% include figure.html content="/screens/consent.png" caption="Data Collection Consent" %}

Now if you want to retract your choice, simply go to your `material_theme.xml` settings file and set the
`allowDataCollection` setting to `true` or `false`.
