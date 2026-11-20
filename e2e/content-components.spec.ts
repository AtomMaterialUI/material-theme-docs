import fs from 'node:fs';
import { load } from 'js-yaml';
import { expect, test } from '@playwright/test';

const readYaml = <T>(file: string) => load(fs.readFileSync(`src/data/${file}`, 'utf8')) as T;

test.describe('Accents page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/docs/configuration/accents/');
  });

  test('renders one swatch per accent color in the data', async ({ page }) => {
    const accents = readYaml<{ name: string }[]>('accentColors.yml');

    await expect(page.locator('.mt-colors .mt-color')).toHaveCount(accents.length);
    await expect(page.locator('.mt-colors .mt-color').first()).toContainText(accents[0].name);
  });

  test('figures are centered, link to the full-size image and have a caption', async ({ page }) => {
    const figure = page.locator('figure.mt-figure', { hasText: 'Material Accent Picker' });
    const link = figure.locator('a');

    await expect(link).toHaveAttribute('href', '/img/screens/accents/accentPicker.png');
    await expect(figure.locator('img')).toHaveAttribute(
      'src',
      '/img/screens/accents/accentPicker.png',
    );
    await expect(figure.locator('figcaption')).toHaveText('Material Accent Picker');

    const box = (await figure.boundingBox())!;
    const container = (await page.locator('.sl-markdown-content').boundingBox())!;
    const left = box.x - container.x;
    const right = container.x + container.width - (box.x + box.width);

    expect(Math.abs(left - right)).toBeLessThanOrEqual(2);
  });

  test('no figure link contains a double slash', async ({ page }) => {
    const hrefs = await page
      .locator('figure.mt-figure a')
      .evaluateAll((links) => links.map((link) => link.getAttribute('href')));

    expect(hrefs.length).toBeGreaterThan(0);

    for (const href of hrefs) {
      expect(href).not.toContain('//');
    }
  });

  test('the gallery lists every front matter image and opens a lightbox', async ({ page }) => {
    const gallery = page.locator('[data-mt-gallery] figure');

    await expect(gallery).toHaveCount(21);
    const link = gallery.first().locator('a');

    // Lazy images have no height until loaded, so the link counts as hidden.
    await link.locator('img').evaluate((img: HTMLImageElement) => {
      img.loading = 'eager';
    });
    await link.click();
    await expect(page.locator('dialog[data-mt-lightbox]')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('dialog[data-mt-lightbox]')).toBeHidden();
  });
});

test.describe('Color Palette page', () => {
  test('renders one palette card per theme, grouped as in the data', async ({ page }) => {
    const groups = readYaml<Record<string, { className: string }[]>>('themes.yml');
    const total = Object.values(groups).flat().length;

    await page.goto('/docs/reference/color-palette/');

    await expect(page.locator('.mt-theme-palette')).toHaveCount(total);
    await expect(page.locator('#theme-oceanic')).toContainText('Background: #263238');
  });
});
