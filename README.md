---
layout: index
title: README
---
# Documentation for Material Theme UI for JetBrains

This is the repository for the documentation website for the
[Material Theme UI plugin](https://github.com/ChrisRM/material-theme-jetbrains).

Please only report issues concerning the documentation.

## Contributing

If you want to contribute to the documentation, you can fork this repository and update the docs accordingly:

1. Fork this repository
2. Clone your forked repository on your computer
3. Install Jekyll: `bundle install` (you need Ruby 2.0+ and Bundler installed)
4. Install NPM dependencies: `npm install` (or `yarn install`)
5. Run local server: `npm run start`
6. Run grunt watch `grunt`
7. Open the address http://localhost:8080

## Structure

```
{% include tree %}
```

- New pages should be added in the `docs` directory
- New images should be added in the `img` directory and in their relevant subfolder
- New partials should be added in the `_includes` directory
- New pages can be added in the navigation sidebar from the `_data/nav.yml` configuration file.
- Screenshots should not be more than 400KB in size


