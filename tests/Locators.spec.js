const { test, expect } = require('@playwright/test');

test('Locators', async ({page}) => { 
    await page.goto('https://demoblaze.com/index.html');

    await page.click('id=login2')

    // await page.locator("id=login2").fill("Hello World");

    await page.fill('id=login2', 'dimuthcbandara')

    // checking the password
    await page.fill('id=loginpassword','password')

    const logoutLink = await page.locator("//a[normalize-space()='About us']")

    await expect(logoutLink).toBeVisible();
    
    page.close()
 })