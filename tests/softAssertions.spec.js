const { test, expect } = require('@playwright/test');

test('Soft Assertions', async ({page}) => { 
    await page.goto('http://localhost:3000/home');

    await expect(page).toHaveTitle("STORE");
    await expect(page).toHaveURL("URL");
    await expect(pagepage.locator('.')).toBeVisible();
    
    page.waitForTimeout(500)

    // tobevisible
    // tobeempty
    // tobeeditable
    // tobeenabled

    // Checking Radio Buttons
    await page.locator("").check();
    await expect(await page.locator()).toBeChecked();
    await expect(await page.locator().isChecked()).toBeTruthy()

    await expect(await page.locator().isChecked()).toBeFalsy()

    const cehckBoxLoxators = [
        "locatorw1",
        "locator2",
        "locator3"
    ]

    for(const locatorss of cehckBoxLoxators){
        await page.locator(locatorss).check()
    }

    for(const locatorss of cehckBoxLoxators){
        if(await page.locator(locatorss).isChecked()){
            await page.locator(locatorss).uncheck()
        }
    }

    await page.waitForTimeout(5000)

    // Drop Downs
    await page.locator().selectOption({label:"India"});
    await page.locator().selectOption({value:"OK"});

    // Check number of options in dropdown
    const options = await page.locator("");
    await expect(options).toHaveCount(10);

    // Checdk Numver of Options in dropdown2
    const option2 = await page.locator("");
    await expect(option2).toHaveCount(10)

    // Check Presence of value in the dropdown
    const content = await page.locator().textContent()
    await expect(content.includes('India')).toBeTruthy();
 
    // Check Presence of Value in the dropdown2
    const options3 = await page.$$('')
    let status = false;
    for (const option of options3){
        //console.log(await option.textContent())
        let value = await option.textContent();
        if(value.includes('France')){
            status = true;
            break;
        }
    }
    expect(status).toBeTruthy();
    
})