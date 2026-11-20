import { defineConfig } from '@playwright/test';

// Set BASE_URL to run the suite against a deploy preview or production instead of a local build.
const baseURL = process.env.BASE_URL ?? 'http://localhost:8888';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
  use: { baseURL },
  // `netlify serve` builds the site and serves it with the same redirect/header rules as production.
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command:
          'PUBLIC_GA_MEASUREMENT_ID=G-TEST123456 BROWSER=none pnpm exec netlify serve --offline --port 8888',
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        timeout: 180_000,
      },
});
