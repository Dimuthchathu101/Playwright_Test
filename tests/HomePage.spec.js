const { test, expect } = require('@playwright/test');

test('First Test Case', async ({page}) => { 
    await page.goto('https://demoblaze.com/index.html');

    const pageTitle = page.title()

    console.log('Page Title is : ' + pageTitle);

    await expect(page).toHaveTitle('STORE')

    await expect(page).toHaveURL('https://demoblaze.com/index.html')

    const pageURL = page.url()
    console.log("Page URL is "+ pageURL);

    page.close()
 })