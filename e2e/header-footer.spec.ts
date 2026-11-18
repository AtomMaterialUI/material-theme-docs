import { expect, test } from '@playwright/test';

test.describe('Header and footer', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test('the header shows the five top links and the social icons on desktop', async ({ page }) => {
    await page.goto('/docs/reference/color-palette/');

    const nav = page.locator('header').getByRole('navigation', { name: 'Main', exact: true });

    for (const label of [
      'Getting Started',
      'Configuration',
      'Reference',
      "What's New",
      'Pricing',
    ]) {
      await expect(nav.getByRole('link', { name: label })).toBeVisible();
    }

    await expect(nav.getByRole('link', { name: 'Reference' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    await expect(page.locator('header').getByRole('link', { name: 'GitHub' })).toBeVisible();
    await expect(page.locator('header').getByRole('link', { name: 'Slack' })).toBeVisible();
  });

  test('the footer shows support links, version and the EULA link', async ({ page }) => {
    await page.goto('/docs/reference/color-palette/');

    const footer = page.locator('[data-mt-footer]');

    await expect(footer.getByRole('link', { name: 'Support', exact: true })).toHaveAttribute(
      'href',
      '/docs/support-us/',
    );
    await expect(footer.getByRole('link', { name: 'Slack', exact: true })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Elior Boukhobza' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Chris Magnussen' })).toBeVisible();
    await expect(footer).toContainText(/Material Theme v\d+\.\d+\.\d+ © 2015-\d{4}/);
    await expect(footer.getByRole('link', { name: 'EULA' })).toHaveAttribute('href', '/docs/eula/');
  });

  test('the top links are hidden on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 800 });
    await page.goto('/docs/reference/color-palette/');

    await expect(page.getByRole('navigation', { name: 'Main', exact: true })).toBeHidden();
  });
});
