import { readFileSync } from 'node:fs';
import { expect, test } from '@playwright/test';
import { docsPages, gone, otherPages, redirects } from './fixtures/old-urls';

// maxRedirects: 0 lets us assert the 301 itself instead of just the final page.
const noFollow = { maxRedirects: 0 };

test.describe('old URLs keep working', () => {
  for (const path of [...docsPages, ...otherPages]) {
    test(`200 ${path}`, async ({ request }) => {
      expect((await request.get(path, noFollow)).status()).toBe(200);
    });
  }

  // Netlify adds the missing slash itself in production; `netlify serve` does not emulate that,
  // so this only runs against a deploy preview (BASE_URL).
  for (const path of docsPages) {
    test(`301 ${path} without the trailing slash`, async ({ request }) => {
      test.skip(!process.env.BASE_URL, 'not emulated by netlify serve');

      const response = await request.get(path.slice(0, -1), noFollow);

      expect(response.status()).toBe(301);
      expect(new URL(response.headers().location, 'http://x').pathname).toBe(path);
    });
  }
});

test.describe('moved URLs redirect to a live page', () => {
  for (const [from, to] of Object.entries(redirects)) {
    test(`301 ${from} -> ${to}`, async ({ request }) => {
      const response = await request.get(from, noFollow);

      expect(response.status()).toBe(301);
      expect(new URL(response.headers().location, 'http://x').pathname).toBe(to);
      expect((await request.get(to, noFollow)).status()).toBe(200);
    });
  }
});

test.describe('dropped URLs return 404', () => {
  for (const path of gone) {
    test(`404 ${path}`, async ({ request }) => {
      expect((await request.get(path, noFollow)).status()).toBe(404);
    });
  }
});

test.describe('/img hot-links', () => {
  const oldImages: string[] = JSON.parse(
    readFileSync(new URL('./fixtures/old-img-paths.json', import.meta.url), 'utf8'),
  );

  test('every old /img file is still shipped at the same path', () => {
    const missing = oldImages.filter((path) => {
      try {
        readFileSync(new URL(`../public${path}`, import.meta.url));

        return false;
      } catch {
        return true;
      }
    });

    expect(missing).toEqual([]);
  });

  for (const path of ['/img/favicon.ico', '/img/brand/logo.png', '/img/themes/arcdark.png']) {
    test(`200 ${path}`, async ({ request }) => {
      expect((await request.get(path, noFollow)).status()).toBe(200);
    });
  }
});

test('an unknown URL serves the themed 404 page', async ({ page }) => {
  const response = await page.goto('/docs/this-page-does-not-exist/');

  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});
