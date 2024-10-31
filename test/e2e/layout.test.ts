import { expect, test } from '@playwright/test';

test('Layout has link todo list', async ({ page }) => {
  await page.goto('/');
  const todoLink = page.getByTestId('nav-link-top-todo');

  await expect(todoLink).toHaveText('Todo List');
});

test('Layout click item todo list then move to page todo', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('nav-link-top-todo').click();
  await page.waitForURL('**/todo');
  await expect(page.url()).toContain('todo');
});

test('Layout click menu home page then move to home page', async ({ page }) => {
  await page.goto('/todo');
  await page.getByRole('link', { name: 'Home Page' }).click();

  await expect(page.url()).toContain('/');
});
