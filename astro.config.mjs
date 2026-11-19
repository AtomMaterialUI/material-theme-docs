// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import starlight from '@astrojs/starlight';
import AutoImport from 'astro-auto-import';
import { site } from './src/config/site';
import starlightLinksValidator from 'starlight-links-validator';

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
    // Content components are available in every MDX page without import lines.
    // Order matters: AutoImport, then Starlight, then MDX (Expressive Code must precede MDX).
    AutoImport({
      imports: [
        './src/components/content/AccentColors.astro',
        './src/components/content/ChromeThemes.astro',
        './src/components/content/ColorSwatch.astro',
        './src/components/content/Figure.astro',
        './src/components/content/Gallery.astro',
        './src/components/content/PaletteColors.astro',
        './src/components/content/RecommendedPlugins.astro',
        './src/components/content/ThemeCard.astro',
        './src/components/content/ThemeCards.astro',
        './src/components/content/ThemeColors.astro',
        './src/components/content/ThemeList.astro',
        './src/components/content/ThemePalette.astro',
        './src/components/content/ThemePalettes.astro',
        './src/components/content/Wallpapers.astro',
      ],
    }),
    starlight({
      title: 'Material Theme UI',
      customCss: ['./src/styles/custom.css'],
      head: [
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: '',
          },
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
          href: site.github,
        },
        {
          icon: 'slack',
          label: 'Slack',
          href: site.slack,
        },
      ],
      sidebar: [
        { label: 'Introduction', slug: 'docs/introduction' },
        { label: 'Getting Started', slug: 'docs/getting-started' },
        { label: "What's New", slug: 'docs/what-s-new' },
        { label: 'Changelog', slug: 'docs/changelog' },
        {
          label: 'Configuration',
          items: [
            { label: 'Settings', slug: 'docs/configuration/settings' },
            { label: 'Color Schemes', slug: 'docs/configuration/color-schemes' },
            { label: 'License Info', slug: 'docs/configuration/license-info' },
            { label: 'Contrast Settings', slug: 'docs/configuration/contrast' },
            { label: 'Accents', slug: 'docs/configuration/accents' },
            { label: 'Accent Mode', slug: 'docs/configuration/accent-mode' },
            { label: 'Peek', slug: 'docs/configuration/peek' },
            { label: 'Regions', slug: 'docs/configuration/regions' },
            { label: 'Window Coloring', slug: 'docs/configuration/window-coloring' },
            { label: 'Tab Settings', slug: 'docs/configuration/tab-settings' },
            { label: 'Spacing Settings', slug: 'docs/configuration/spacing-settings' },
            { label: 'Trees Settings', slug: 'docs/configuration/trees-settings' },
            { label: 'UI Components Settings', slug: 'docs/configuration/ui-component-settings' },
            { label: 'Features Settings', slug: 'docs/configuration/features-settings' },
            {
              label: 'Project Title Bar Settings',
              slug: 'docs/configuration/project-title-bar-settings',
            },
            { label: 'File Header Settings', slug: 'docs/configuration/file-header-settings' },
            { label: 'Theme Color Overrides', slug: 'docs/configuration/theme-color-overrides' },
            { label: 'Custom Themes', slug: 'docs/configuration/custom-themes' },
            { label: 'Language Additions', slug: 'docs/configuration/language-additions' },
            { label: 'Islands Settings', slug: 'docs/configuration/islands-settings' },
            { label: 'Theme Ignores', slug: 'docs/configuration/theme-ignores' },
            { label: 'Theme Randomizer', slug: 'docs/configuration/theme-randomizer' },
            { label: 'Other Tweaks Settings', slug: 'docs/configuration/other-tweaks-settings' },
            { label: 'Quick Actions Panel', slug: 'docs/configuration/quick-actions-panel' },
            { label: 'Status Bar Widgets', slug: 'docs/configuration/status-bar-widgets' },
            { label: 'Excluded Files Colors', slug: 'docs/configuration/excluded-files-colors' },
            { label: 'File Status Colors', slug: 'docs/configuration/file-status-colors' },
            { label: 'Scrollbars', slug: 'docs/configuration/scrollbars' },
            { label: 'Adaptive Theme', slug: 'docs/configuration/adaptive-theme' },
            { label: 'Recommended Plugins', slug: 'docs/configuration/recommended-plugins' },
          ],
        },
        {
          label: 'Icons',
          items: [
            {
              label: 'Atom Material Icons Plugin',
              slug: 'docs/icons/atom-material-icons-plugin',
            },
            { label: 'Associations Editor', slug: 'docs/icons/associations-editor' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Color Palette', slug: 'docs/reference/color-palette' },
            { label: 'Components', slug: 'docs/reference/components' },
            { label: 'Wizard', slug: 'docs/reference/wizard' },
            { label: 'Chrome Themes', slug: 'docs/reference/chrome-themes' },
          ],
        },
        {
          label: 'Development',
          items: [
            { label: 'Installation', slug: 'docs/development/installation' },
            { label: 'External Themes', slug: 'docs/development/external-themes' },
          ],
        },
        { label: 'Analytics', slug: 'docs/analytics' },
        { label: 'FAQ/Troubleshooting', slug: 'docs/faq-troubleshooting' },
        { label: 'Other Products', slug: 'docs/other-products' },
        { label: 'Acknowledgements', slug: 'docs/acknowledgements' },
        { label: 'Pricing', slug: 'docs/pricing' },
        { label: 'About Subscription Model', slug: 'docs/about-subscription-model' },
        { label: 'Support Us', slug: 'docs/support-us' },
        { label: 'EULA', slug: 'docs/eula' },
      ],
      plugins: [starlightLinksValidator()],
      components: {
        ThemeProvider: './src/components/overrides/ThemeProvider.astro',
        ThemeSelect: './src/components/overrides/ThemeSelect.astro',
        PageTitle: './src/components/overrides/PageTitle.astro',
        PageSidebar: './src/components/overrides/PageSidebar.astro',
        Footer: './src/components/overrides/Footer.astro',
        Header: './src/components/overrides/Header.astro',
        SiteTitle: './src/components/overrides/SiteTitle.astro',
        Hero: './src/components/overrides/Hero.astro',
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
    mdx(),
  ],
});
