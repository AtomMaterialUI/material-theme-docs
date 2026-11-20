import { expect, test } from '@playwright/test';

test.describe('Landing page', () => {
  test('renders the hero, theme chooser and features', async ({ page }) => {
    await page.goto('/');

    await expect(
      page.getByRole('heading', { level: 1, name: 'Material Theme UI Plugin' }),
    ).toBeVisible();
    await expect(page.getByText('Material Design experience for JetBrains IDEs')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Get Started' })).toHaveAttribute(
      'href',
      '/docs/introduction/',
    );
    await expect(page.getByRole('link', { name: 'Download' })).toHaveCount(0);
    await expect(page.getByRole('heading', { name: 'Available Themes' })).toBeVisible();
    await expect(page.locator('.mt-chooser [data-mt-theme]')).toHaveCount(32);
    await expect(page.locator('.mt-features li')).toHaveCount(6);
    await expect(page.getByRole('heading', { name: 'Other Editions' })).toHaveCount(0);
    await expect(page.locator('.mt-sponsors')).toHaveCount(0);
  });

  test('the header and hero logos follow the theme', async ({ page }) => {
    await page.goto('/?theme=dracula');

    for (const selector of ['.mt-site-logo .mt-logo-img', '.mt-hero-logo']) {
      await expect(page.locator(selector)).toHaveCSS(
        'background-image',
        /\/img\/logo\/material-dracula\.svg/,
      );
    }
  });

  test('switching themes fades instead of snapping', async ({ page }) => {
    await page.goto('/');

    await page.locator('.mt-chooser [data-mt-theme="dracula"]').click();

    await expect(page.locator('html')).toHaveClass(/mt-theme-transition/);
    await expect(page.locator('html')).not.toHaveClass(/mt-theme-transition/);
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
