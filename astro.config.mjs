// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Material themes that have a matching bundled Shiki theme (code blocks follow these 5 only);
// every other theme falls back to github-dark/light by its light/dark type.
/** @type {Record<string, string>} */
const CODE_THEMES = {
  'material-theme': 'oceanic',
  'material-theme-darker': 'darker',
  'material-theme-lighter': 'lighter',
  'material-theme-palenight': 'palenight',
  'material-theme-ocean': 'deepocean',
};

export default defineConfig({
  site: 'https://material-theme.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    starlight({
      title: 'Material Theme UI',
      customCss: ['./src/styles/custom.css'],
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Source+Code+Pro:wght@400;500&display=swap',
          },
        },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/mallowigi/material-theme-docs',
        },
      ],
      sidebar: [],
      components: {
        ThemeProvider: './src/components/overrides/ThemeProvider.astro',
        ThemeSelect: './src/components/overrides/ThemeSelect.astro',
        PageTitle: './src/components/overrides/PageTitle.astro',
        Footer: './src/components/overrides/Footer.astro',
      },
      expressiveCode: {
        themes: /** @type {any} */ (['github-dark', 'github-light', ...Object.keys(CODE_THEMES)]),
        themeCssSelector: (theme) =>
          CODE_THEMES[theme.name]
            ? `[data-material-theme='${CODE_THEMES[theme.name]}']`
            : `[data-theme='${theme.type}']`,
        styleOverrides: {
          codeBackground: 'var(--mt-code-bg, var(--sl-color-gray-6))',
          borderColor: 'var(--sl-color-hairline-light)',
          frames: {
            editorTabBarBackground: 'var(--sl-color-bg-nav)',
            editorActiveTabBackground: 'var(--mt-code-bg, var(--sl-color-gray-6))',
            editorActiveTabIndicatorTopColor: 'var(--sl-color-accent)',
            terminalTitlebarBackground: 'var(--sl-color-bg-nav)',
            terminalBackground: 'var(--mt-code-bg, var(--sl-color-gray-6))',
          },
        },
      },
    }),
  ],
});
