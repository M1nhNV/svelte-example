import { expect, test } from '@playwright/test';

const urlGithub = 'https://github.com/M1nhNV/svelte-example';
test('Home page has expected h1', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toHaveText('Home Page');
  await expect(page.locator('p')).toHaveText(
    'An example with Svelte, SvelteKit, Typescript, Vite, Tailwind, MeltUI, and Playwright.'
  );
});

test('Home page has link to repository', async ({ page }) => {
  await page.goto('/');
  const aTagLocator = await page.getByTestId('github_link');
  const linkRepository = await aTagLocator.getAttribute('href');

  expect(linkRepository).toEqual(urlGithub);

  await expect(aTagLocator).toHaveText('Github Repository');
});

test('Open link repository, check github title repository', async ({ page, context }) => {
  await page.goto('/');
  const pagePromise = context.waitForEvent('page');
  await page.getByTestId('github_link').click();
  const newPage = await pagePromise;

  await expect(newPage.url()).toBe(urlGithub);
});
