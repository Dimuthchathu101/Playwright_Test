import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/home');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('heading', { name: 'Easy way to make an order' }).click();
  await page.getByText('Want to be SMART ?').click();
  await page.getByRole('heading', { name: 'Want to be SMART ? Order' }).click({
    button: 'right'
  });
  await page.getByRole('heading', { name: 'Want to be SMART ? Order' }).click();
  await page.getByText('No shipping charge').click();
  await page.getByRole('link', { name: 'See all blazers' }).click();
});