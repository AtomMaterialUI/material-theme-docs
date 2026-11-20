import { expect, test } from '@playwright/test';

test('searching for a known phrase finds the matching page', async ({ page }) => {
  await page.goto('/docs/introduction/');
  await page.locator('site-search button').first().click();

  const dialog = page.locator('site-search dialog');

  await dialog.getByPlaceholder('Search').fill('subscription model');

  const result = dialog.locator('a[href*="about-subscription-model"]').first();

  await expect(result).toBeVisible();
});
