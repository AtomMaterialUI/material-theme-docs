# Documentation for Material Theme UI for JetBrains

Source of [material-theme.com](https://material-theme.com), the documentation website for the
[Material Theme UI plugin](https://github.com/ChrisRM/material-theme-jetbrains).
It is built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build), and hosted on Netlify.

Please only report issues concerning the documentation.

## Prerequisites

- Node 26 (see `.nvmrc`)
- [pnpm](https://pnpm.io) 10

## Commands

| Command            | What it does                                                     |
| ------------------ | ---------------------------------------------------------------- |
| `pnpm install`     | Install dependencies                                             |
| `pnpm dev`         | Dev server on http://localhost:4321                              |
| `pnpm build`       | Production build to `dist/` (also validates every internal link) |
| `pnpm preview`     | Serve `dist/` locally                                            |
| `pnpm serve`       | Serve `dist/` with Netlify (applies `public/_redirects`)         |
| `pnpm check`       | Type-check Astro and TypeScript files                            |
| `pnpm lint`        | Lint with Oxlint                                                 |
| `pnpm format`      | Format with Oxfmt and Prettier (`.astro` files)                  |
| `pnpm test:e2e`    | Playwright end-to-end tests          |

The tests start `netlify serve` on port 8888 themselves.
Set `BASE_URL` to run them against a deploy preview instead, which also enables the tests that need Netlify's
production behaviour (such as the trailing-slash redirect).

## Structure

- `src/content/docs/` — the pages, as `.md` or `.mdx`. The sidebar is defined in `astro.config.mjs`.
- `src/data/` — YAML data (themes, colors, accents, features) shared by the pages and components.
- `src/components/content/` — components available in every MDX page without an import (see below).
- `src/components/overrides/` — Starlight component overrides (header, footer, page title, theme selector).
- `src/components/analytics/`, `src/components/ads/` — consent banner with Google Analytics, and Carbon Ads.
- `src/styles/custom.css` — the Material look and feel.
- `public/` — static files, including images in `public/img/` (keep screenshots under 400KB), `robots.txt`
  and `_redirects`.
- `e2e/` — Playwright tests, including the old-URL parity suite.

## Writing content

Add a page by creating a file in `src/content/docs/docs/`, then list it in the sidebar in `astro.config.mjs`.
Internal links must end with a slash and point to existing pages and anchors, or the build fails.

### Content components cheat-sheet

| Component                                | Use                                                                          |
| ---------------------------------------- | ---------------------------------------------------------------------------- |
| `<Figure content="/img/x.png" caption="…" />` | An image with a caption                                                 |
| `<ThemeCards groups={['material']} />`   | Cards for each theme of the given groups in `themes.yml`                     |
| `<ThemeList groups={[…]} prefix="…" />`  | A list of theme names                                                        |
| `<ThemePalettes groups={[…]} />`         | The full color palette of each theme                                         |
| `<ThemeColors field="excluded" />`       | One color field across all themes                                            |
| `<ColorSwatch color={c} />`              | A single swatch (also `theme` and `field`)                                   |
| `<AccentColors />`, `<PaletteColors />`  | The accent and the palette color grids                                       |
| `<RecommendedPlugins />`                 | The recommended plugins list                                                 |
| `<Gallery />`, `<ChromeThemes />`, `<Wallpapers />` | Render the `gallery`, `chromeThemes` and `wallpapers` front matter |

New components go in `src/components/content/` and must be added to the `AutoImport` list in `astro.config.mjs`.

### Heading badges

Flag a recent feature by adding `:badge[New]` to its heading, e.g. `### Splash Screens :badge[New]`. The badge shows in
the heading and the table of contents, and follows the theme accent. Variants: `:badge[Premium]{variant=tip}`
(also `note`, `success`, `caution`, `danger`). Add "New" to the headings of the latest release only, and remove it
when the next release ships.

### Keyboard shortcuts

Write shortcuts with `<Kbd mac="Command+Shift+A" windows="Control+Shift+A" />` (auto-imported, no import needed).
Keys are joined with `+`, chords are separated by spaces (`Shift Shift`). Readers pick their OS in the header picker,
which defaults to their detected platform. The plugin's provider and picker are rendered from our `ThemeProvider` and
`ThemeSelect` overrides. Release-note pages (changelog, archives, what's new) keep plain text.

### Lead paragraph

Start a page with the intro paragraph wrapped in a `:::lead` block (styled in `src/styles/custom.css`):

```md
:::lead
One or two sentences introducing the page.
:::
```

`:::lead` is a small custom mdast plugin in `astro.config.mjs` (passed to the default `satteri()` processor), not a
dependency. It turns the block into `<div class="lead">`.

### Comments

Every docs page ends with a GitHub Discussions thread through `starlight-giscus`, configured in `astro.config.mjs`.
Comments are click-to-load: nothing is requested from giscus.app or github.com until the reader presses "Load
comments" (`src/components/content/GiscusComments.astro`, rendered by our `Pagination` override). Opt a page out with
`giscus: false` in its front matter. Splash pages never show comments.

## Deploy

Netlify builds every push with `pnpm build` and publishes `dist/` (see `netlify.toml`). Pull requests get a deploy
preview. Merging into `next` is how changes are integrated; CI (`.github/workflows/ci.yml`) runs lint, format check,
type check, build and the e2e tests on each pull request.

Set `PUBLIC_GA_MEASUREMENT_ID` in the Netlify environment to enable the analytics consent banner. Without it, no
analytics code is shipped.

## License

See [LICENCE](LICENCE).
