import { expect, test, type Page } from '@playwright/test';

// The suite runs against a production build with PUBLIC_GA_MEASUREMENT_ID=G-TEST123456 (see playwright.config.ts).
// Google's real script is replaced by a stub, so no test ever reaches Google.
async function trackGoogleRequests(page: Page) {
  const requests: string[] = [];

  await page.route(/googletagmanager\.com|google-analytics\.com/, (route) => {
    requests.push(route.request().url());

    return route.fulfill({ contentType: 'text/javascript', body: '' });
  });

  return requests;
}

test('shows the banner and sends nothing to Google before a choice', async ({ page }) => {
  const requests = await trackGoogleRequests(page);

  await page.goto('/docs/introduction/');

  await expect(page.getByRole('dialog', { name: 'Cookie consent' })).toBeVisible();
  await page.waitForLoadState('networkidle');
  expect(requests).toEqual([]);
});

test('accepting loads gtag with the configured ID and is remembered', async ({ page }) => {
  const requests = await trackGoogleRequests(page);

  await page.goto('/docs/introduction/');
  await page.getByRole('button', { name: 'Accept' }).click();

  await expect(page.getByRole('dialog', { name: 'Cookie consent' })).toBeHidden();
  await expect.poll(() => requests.length).toBeGreaterThan(0);
  expect(requests[0]).toContain('id=G-TEST123456');

  const seen = requests.length;

  await page.goto('/docs/pricing/');
  await expect(page.getByRole('dialog', { name: 'Cookie consent' })).toBeHidden();
  await expect.poll(() => requests.length).toBeGreaterThan(seen);
});

test('declining sends nothing, now or on later pages', async ({ page }) => {
  const requests = await trackGoogleRequests(page);

  await page.goto('/docs/introduction/');
  await page.getByRole('button', { name: 'Decline' }).click();
  await page.goto('/docs/pricing/');
  await page.waitForLoadState('networkidle');

  await expect(page.getByRole('dialog', { name: 'Cookie consent' })).toBeHidden();
  expect(requests).toEqual([]);
});

test('the footer link reopens the banner after a choice', async ({ page }) => {
  await trackGoogleRequests(page);

  await page.goto('/docs/introduction/');
  await page.getByRole('button', { name: 'Decline' }).click();
  await page.getByRole('button', { name: 'Cookie settings' }).click();

  await expect(page.getByRole('dialog', { name: 'Cookie consent' })).toBeVisible();
});

test('no Universal Analytics ID is shipped', async ({ page }) => {
  await page.goto('/docs/introduction/');

  expect(await page.content()).not.toMatch(/UA-\d/);
});
