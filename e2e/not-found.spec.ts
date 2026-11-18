import { expect, test } from '@playwright/test';

test('an unknown URL returns 404 with the Starlight 404 page', async ({ page }) => {
  const response = await page.goto('/this-page-does-not-exist/');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('404');
  await expect(page.locator('main')).toContainText(/couldn.t find|not found/i);
});
