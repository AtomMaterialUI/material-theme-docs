import { expect, test, type Page } from '@playwright/test';

const KEY = 'material-theme';
const html = (page: Page) => page.locator('html');

async function openPicker(page: Page) {
  await page.getByRole('button', { name: 'Open theme switcher' }).click();
  await expect(page.getByRole('dialog', { name: /theme/i })).toBeVisible();
}

test('the saved theme is on <html> before the body is parsed (no flash)', async ({ page }) => {
  await page.addInitScript((key) => {
    localStorage.setItem(key, 'dracula');
    new MutationObserver((_, observer) => {
      if (!document.body) {
        return;
      }

      (window as any).__themeAtBody = document.documentElement.dataset.materialTheme;
      observer.disconnect();
    }).observe(document, { childList: true, subtree: true });
  }, KEY);
  await page.goto('/');
  expect(await page.evaluate(() => (window as any).__themeAtBody)).toBe('dracula');
});

test('a picked theme persists across reload and navigation', async ({ page }) => {
  await page.goto('/');
  await openPicker(page);
  await page.locator('.mt-theme-fab [data-mt-theme="dracula"]').click();
  await expect(html(page)).toHaveAttribute('data-material-theme', 'dracula');

  await page.reload();
  await expect(html(page)).toHaveAttribute('data-material-theme', 'dracula');

  await page.goto('/another-page-that-404s/');
  await expect(html(page)).toHaveAttribute('data-material-theme', 'dracula');
});

test('?theme= overrides the saved theme without replacing it', async ({ page }) => {
  await page.addInitScript((key) => localStorage.setItem(key, 'dracula'), KEY);
  await page.goto('/?theme=monokai');
  await expect(html(page)).toHaveAttribute('data-material-theme', 'monokai');
  expect(await page.evaluate((key) => localStorage.getItem(key), KEY)).toBe('dracula');
});

test('all 32 themes can be picked and set light or dark accordingly', async ({ page }) => {
  await page.goto('/');
  await openPicker(page);
  const cards = page.locator('.mt-theme-fab [data-mt-theme]');
  await expect(cards).toHaveCount(32);

  for (const name of await cards.evaluateAll((els) =>
    els.map((e) => (e as HTMLElement).dataset.mtTheme!),
  )) {
    await page.locator(`.mt-theme-fab [data-mt-theme="${name}"]`).click();
    await expect(html(page)).toHaveAttribute('data-material-theme', name);
    const { scheme, theme } = await html(page).evaluate((el) => ({
      scheme: getComputedStyle(el).colorScheme,
      theme: el.dataset.theme,
    }));
    expect(scheme, name).toBe(theme);
  }
});

test('there is no light/dark toggle', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('starlight-theme-select')).toHaveCount(0);
});
