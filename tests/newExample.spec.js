import { test, expect, chromium } from '@playwright/test';

test('test', async ({ page }) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  // Navigate to the login
  const newPage = await context.newPage();
  await newPage.goto('http://localhost:3000/home');

  // Checking the availability of the header
  await newPage.waitForSelector("//header/div[1]/div[1]/div[3]/span[2]/a[1]/i[1]");
  await newPage.click("//header/div[1]/div[1]/div[3]/span[2]/a[1]/i[1]");

  // Checking blazer.io
  await newPage.waitForSelector("//div[contains(text(),'blazer.io')]");
  // Add additional checks or actions if needed

  // Checking the Login Header
  await newPage.waitForSelector("//h1[contains(text(),'Login')]");
  // Add additional checks or actions if needed

  await browser.close();
});

