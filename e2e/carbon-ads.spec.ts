import { expect, test, type Page } from '@playwright/test';

// Carbon's real script is replaced by a stub that injects the same container the real one creates.
async function stubCarbon(page: Page) {
  await page.route('**/cdn.carbonads.com/**', (route) =>
    route.fulfill({
      contentType: 'text/javascript',
      body: `
        const el = document.createElement('div');
        el.id = 'carbonads';
        el.textContent = 'stub ad';
        document.currentScript.parentElement.append(el);
      `,
    }),
  );
}

const docsPages = [
  '/docs/introduction/',
  '/docs/configuration/settings/',
  '/docs/reference/color-palette/',
  '/docs/pricing/',
];

for (const url of docsPages) {
  test(`${url} shows exactly one Carbon ad on desktop, below the TOC card`, async ({ page }) => {
    await stubCarbon(page);
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(url);

    await expect(page.locator('#carbonads')).toHaveCount(1);
    await expect(page.locator('script#_carbonads_js')).toHaveCount(1);
    await expect(page.locator('.right-sidebar #carbonads')).toBeVisible();
  });

  test(`${url} shows exactly one Carbon ad on mobile, after the ribbon`, async ({ page }) => {
    await stubCarbon(page);
    await page.setViewportSize({ width: 390, height: 800 });
    await page.goto(url);

    await expect(page.locator('#carbonads')).toHaveCount(1);
    await expect(page.locator('[data-carbon-slot="ribbon"] #carbonads')).toBeVisible();
  });
}

test('the landing page shows exactly one Carbon ad in the hero', async ({ page }) => {
  await stubCarbon(page);
  await page.goto('/');

  await expect(page.locator('#carbonads')).toHaveCount(1);
  await expect(page.locator('[data-carbon-slot="hero"] #carbonads')).toBeVisible();
});

test('content files contain no ad markup', async () => {
  const { execSync } = await import('node:child_process');
  const hits = execSync('grep -rli "carbon" src/content || true').toString().trim();

  expect(hits).toBe('');
});
