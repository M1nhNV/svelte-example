import { expect, test } from '@playwright/test';

async function createNewItem(page, itemName) {
  await page.goto('/todo');
  await page.getByPlaceholder('input').fill(itemName);
  await page.getByRole('button', { name: /add/i }).click();
}

test('Create item to list', async ({ page }) => {
  const itemName = 'todo item 1';
  await createNewItem(page, itemName);

  const inputValue = await page.locator(`//div[@data-key="todo"]//input[@readonly]`).inputValue();
  expect(inputValue).toEqual(itemName);

  await expect(page.locator('//span[@data-key="todo"]')).toContainText('1');
});

test('Reset todo list', async ({ page }) => {
  await createNewItem(page, 'todo item 2');

  await page.getByRole('button', { name: /Reset/i }).click();

  await expect(page.locator(`//div[@data-key="todo"]`)).toBeEmpty();
  await expect(page.locator('//span[@data-key="todo"]')).toContainText('0');
});

test('Move todo item', async ({ page }) => {
  const itemName = 'todo item 3';
  await createNewItem(page, itemName);
  await expect(page.locator('//span[@data-key="todo"]')).toContainText('1');

  await page
    .locator('//div[@data-key="todo"]//div[@draggable="true"]/input')
    .dragTo(await page.locator('//div[@data-key="in_progress"]'));

  await expect(page.locator(`//div[@data-key="todo"]`)).toBeEmpty();
});
