// The single place for site-wide constants. Bump `version` here on each plugin release.
export const site = {
  version: '14.3.0',
  firstYear: 2015,
  github: 'https://github.com/mallowigi/material-theme-issues',
  slack:
    'https://join.slack.com/t/material-theme-ui/shared_invite/zt-4w78iblt-cHXYRYERpuGNbD~TqsD8rg',
  paypal: 'https://paypal.me/mallowigi',
  openCollective: 'https://opencollective.com/atom-material-themes-and-plugins',
};

// Computed at build time, so the footer never goes stale.
export const years = `${site.firstYear}-${new Date().getFullYear()}`;

// The desktop header links, in display order.
export const topLinks = [
  { label: 'Getting Started', href: '/docs/introduction/' },
  { label: 'Configuration', href: '/docs/configuration/settings/' },
  { label: 'Reference', href: '/docs/reference/color-palette/' },
  { label: "What's New", href: '/docs/what-s-new/' },
  { label: 'Pricing', href: '/docs/pricing/' },
];
