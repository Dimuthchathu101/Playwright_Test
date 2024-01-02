const { test, expect } = require('@playwright/test');

test('Built In Locators', async ({page}) => { 
    await page.goto('https://demoblaze.com/index.html');

    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    // getByPlaceholder
    // getbyRole
    // getByText
    // getByLabel
    // getByTitle
    // getByTestId

    // expect(page).tohaveURL()
    expect(page).toHaveTitle()
    expect(locator).toBeVisible()
    expect(locator).toBeEnabled()
    

 })