import { expect, test } from '@playwright/test';

const pages = [
  'settings',
  'color-schemes',
  'license-info',
  'contrast',
  'accents',
  'accent-mode',
  'peek',
  'regions',
  'window-coloring',
  'tab-settings',
  'spacing-settings',
  'trees-settings',
  'ui-component-settings',
  'features-settings',
  'project-title-bar-settings',
];

for (const slug of pages) {
  test(`configuration page ${slug} renders and is in the sidebar`, async ({ page }) => {
    await page.goto(`/docs/configuration/${slug}/`);

    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(
      page.locator(`nav.sidebar a[href="/docs/configuration/${slug}/"]`),
    ).toHaveAttribute('aria-current', 'page');
    await expect(page.locator('main')).not.toContainText(/\{%|\{\{/);
  });
}
