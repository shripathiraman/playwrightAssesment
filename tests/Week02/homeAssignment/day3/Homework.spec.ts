import { chromium, expect, test } from '@playwright/test';


let urlPage = 'https://login.salesforce.com/';
let userNameField = "Username";
let userName = "shripathiram@gmail.com";
let passwordField = "Password";
let loginButton = "#Login";

 test('TC-001 To login into Saleforce login', async() => {  
    const browser = await chromium.launch({headless:false, channel:'chrome'});

    const browserContext = await browser.newContext();

    const page = await browserContext.newPage();

    await page.goto(urlPage);

    await page.getByLabel(userNameField).fill("shripathiram@gmail.com");

    await page.getByLabel(passwordField).fill("Sailux@2024PW");

    await page.click(loginButton);
    await page.waitForTimeout(5000);
    const urlCheck = await page.title();
    console.log(urlCheck);

    expect(urlCheck).toContain("Salesforce - Developer Edition");
    //loginButton

});