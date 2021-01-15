---
layout: docs
title: Analytics
description: About Analytics
group: development
comments: true

previous:
  url: '/docs/reference/external-themes'
  title: External Themes

next:
  url: '/docs/changelog'
  title: Changelog
---

{% include carbonads.html %}

## Analytics

Starting from 2.4.0 analytics have been added to the plugin. Just like other plugins' analytics, these analytics are here to
analyze feature usage and users' audiences.

This step would provide us useful data for prioritizing development of highly requested features, while scrapping others
rarely in use. This could also be a good opportunity to make people aware of specific features via push notifications or
daily hints, for instance.

Note that this process does not collect user information at all, therefore **completely anonymous**. It is only used to
measure feature usage. And of course, it is **not sold** to third parties.

## Opt-in and Opt-out

These metrics are opt-in by default. This means that unless you specifically consent to upload analytics data, these
will not be collected. The consent is shown via a Notification just like JetBrains's own consent.

Whether you choose yes or no, this consent will not appear unless you cleanup your settings.

{% include figure.html content="/screens/consent.png" caption="Data Collection Consent" %}

Now if you want to retract your choice, simply go to your `material_theme.xml` settings file and set the
`allowDataCollection` setting to `true` or `false`.
