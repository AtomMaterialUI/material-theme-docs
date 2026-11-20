import { expect, test } from '@playwright/test';

const pages = ['/', '/docs/introduction/', '/docs/configuration/settings/', '/docs/what-s-new/'];
const legacy = [
  'jquery',
  'materialize',
  'pageclip',
  'docsearch',
  'algolia',
  'zendesk',
  'ghbtns',
  'UA-',
  'google-analytics.com/analytics.js',
];

for (const url of pages) {
  test(`${url} ships no legacy third-party script`, async ({ request }) => {
    const html = (await (await request.get(url)).text()).toLowerCase();

    for (const needle of legacy) {
      expect(html, needle).not.toContain(needle.toLowerCase());
    }
  });
}

test('robots.txt points at the generated sitemap and has no Algolia verification', async ({
  request,
}) => {
  const robots = await (await request.get('/robots.txt')).text();

  expect(robots).toContain('Sitemap: https://material-theme.com/sitemap-index.xml');
  expect(robots.toLowerCase()).not.toContain('algolia');
});
