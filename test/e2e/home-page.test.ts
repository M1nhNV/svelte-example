import { expect, test } from '@playwright/test';

const urlGithub = 'https://github.com/M1nhNV/svelte-example';
test('Home page has expected h1', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toHaveText('Home Page');
  await expect(page.getByTestId('description-1')).toContainText(
    'A sample project built with Svelte, SvelteKit, TypeScript, Vite, Tailwind, MeltUI, and Playwright.'
  );
  await expect(page.getByTestId('description-2')).toContainText(
    'This project uses Prisma as the ORM and SQLite3 as the database.'
  );
});

test('Home page has link to repository', async ({ page }) => {
  await page.goto('/');
  const aTagLocator = await page.getByTestId('github_link');
  const linkRepository = await aTagLocator.getAttribute('href');

  expect(linkRepository).toEqual(urlGithub);

  await expect(aTagLocator).toHaveText('GitHub Repository');
});

test('Open link repository, check github title repository', async ({ page, context }) => {
  await page.goto('/');
  const pagePromise = context.waitForEvent('page');
  await page.getByTestId('github_link').click();
  const newPage = await pagePromise;

  await expect(newPage.url()).toBe(urlGithub);
});
