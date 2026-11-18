import { expect, test } from '@playwright/test';

const pages = [
  'icons/atom-material-icons-plugin',
  'icons/associations-editor',
  'reference/color-palette',
  'reference/components',
  'reference/wizard',
  'reference/chrome-themes',
  'development/installation',
  'development/external-themes',
];

for (const slug of pages) {
  test(`page ${slug} renders and is in the sidebar`, async ({ page }) => {
    await page.goto(`/docs/${slug}/`);

    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator(`nav.sidebar a[href="/docs/${slug}/"]`)).toHaveAttribute(
      'aria-current',
      'page',
    );
    await expect(page.locator('main')).not.toContainText(/\{%|\{\{/);
  });
}

test('the Kitchen test page and the old installation URL are not published', async ({
  request,
}) => {
  for (const url of ['/docs/development/kitchen/', '/docs/development/installation_/']) {
    expect((await request.get(url)).status()).toBe(404);
  }
});

test('the Chrome Themes page lists the gallery of themes', async ({ page }) => {
  await page.goto('/docs/reference/chrome-themes/');

  await expect(page.locator('main img').first()).toBeVisible();
});
