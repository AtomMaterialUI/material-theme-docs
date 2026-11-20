import { expect, test } from '@playwright/test';

for (const slug of ['what-s-new', 'changelog']) {
  test(`${slug} is in the sidebar and renders`, async ({ page }) => {
    await page.goto(`/docs/${slug}/`);

    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
    await expect(page.locator(`nav.sidebar a[href="/docs/${slug}/"]`)).toHaveAttribute(
      'aria-current',
      'page',
    );
    await expect(page.locator('main')).not.toContainText(/\{%|\{\{/);
  });
}

test('Archives keeps its URL but is not in the sidebar', async ({ page }) => {
  await page.goto('/docs/archives/');

  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
  await expect(page.locator('nav.sidebar a[href="/docs/archives/"]')).toHaveCount(0);
  await expect(page.locator('main')).not.toContainText(/\{%/);
});
