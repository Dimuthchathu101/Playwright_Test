const { test, expect } = require('@playwright/test');

test('Locate Multiple Elements', async ({page}) => { 
    await page.goto('https://demoblaze.com/index.html');

    // const logoutLink = await page.locator("//a[normalize-space()='About us']")

    const products = await page.locator("//div[@id='tbodyid']//div//h4/a")

    // const links = await page.$$('a')

    // for (const link of links){
    //     const linktext = await link.textContent()
    //     console.log(linktext);

    // }

    for (const product of products){
        const producttest = await product.textContent()
        console.log(producttest);

    }
 })