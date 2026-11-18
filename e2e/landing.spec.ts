import { expect, test } from '@playwright/test';

test.describe('Landing page', () => {
  test('renders the hero, features, other editions and sponsors', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('link', { name: 'Download' })).toHaveAttribute(
      'href',
      'https://plugins.jetbrains.com/plugin/8006-material-theme-ui',
    );
    await expect(page.getByRole('heading', { name: 'Available Themes' })).toBeVisible();
    await expect(page.locator('.mt-chooser [data-mt-theme]')).toHaveCount(32);
    await expect(page.locator('.mt-features li')).toHaveCount(6);
    await expect(page.getByRole('heading', { name: 'Other Editions' })).toBeVisible();
    await expect(page.locator('.mt-sponsors a')).toHaveCount(10);
  });

  test('clicking a theme switches the site theme and the screenshot', async ({ page }) => {
    await page.goto('/');

    await page.locator('.mt-chooser [data-mt-theme="dracula"]').click();

    await expect(page.locator('html')).toHaveAttribute('data-material-theme', 'dracula');
    await expect(page.locator('[data-mt-screenshot] img')).toHaveAttribute(
      'src',
      '/img/themes/dracula.png',
    );
    await expect(page.locator('.mt-chooser [data-mt-theme="dracula"]')).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });

  test('the screenshot also follows a theme set elsewhere', async ({ page }) => {
    await page.goto('/?theme=monokai');

    await expect(page.locator('[data-mt-screenshot] img')).toHaveAttribute(
      'src',
      '/img/themes/monokai.png',
    );
  });
});
