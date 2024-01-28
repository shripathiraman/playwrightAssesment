import { test, expect } from "@playwright/test";
import salesForceElement from "./loginSalesForce-Page-Data.json";
import salesForceData from "./createLeadData.json"
test.skip('Create the Contact', async ({page}) => {  

    //Open the page
    await page.goto(salesForceElement.url);

    //Enter the User Name
    await page.getByLabel(salesForceElement.lblUserName).fill(salesForceElement.userName);

    //Enter the password
    await page.getByLabel(salesForceElement.lblPassword).fill(salesForceElement.password);

    //Click the login button
    await page.click(salesForceElement.loginButton);

    //Wait for the Home Page URL
    await page.waitForURL(salesForceElement.homepageUrl);

    //get the tile of the Home Page
    const urlCheck = await page.title();
    console.log(urlCheck);
    
    //Check the title of Hompage
    expect(urlCheck).toContain(salesForceElement.homepage.title);
   
    //click on the View All tab
    await page.click(salesForceElement.homepage.allTabID);

    //click the contact
    await page.locator(salesForceElement.contact.clickContact).click();

    //Click New button
    await page.getByRole('button',{name:salesForceElement.contact.btnNew}).click();

    //Fill last Name
    await page.locator(salesForceElement.contact.lastName).fill(salesForceData.contact.lastName);

    //Save Button
    await page.getByText(salesForceElement.contact.btnSave).first().click();

    //Check the Last Name
    const tabelData = await page.textContent(salesForceElement.checkContactData.table);
    console.log(tabelData?.includes("Shripathi"));

    expect(tabelData).toContain(salesForceData.contact.lastName);

    await page.waitForTimeout(5000);
});


test.only('Edit the contact', async ({page}) => {  
    //Open the page
    await page.goto(salesForceElement.url);

    //Enter the User Name
    await page.getByLabel(salesForceElement.lblUserName).fill(salesForceElement.userName);

    //Enter the password
    await page.getByLabel(salesForceElement.lblPassword).fill(salesForceElement.password);

    //Click the login button
    await page.click(salesForceElement.loginButton);

    //Wait for the Home Page URL
    await page.waitForURL(salesForceElement.homepageUrl);

    //get the tile of the Home Page
    const urlCheck = await page.title();
    console.log(urlCheck);
    
    //Check the title of Hompage
    expect(urlCheck).toContain(salesForceElement.homepage.title);
   
    //click on the View All tab
    await page.click(salesForceElement.homepage.allTabID);

    //click the contact
    await page.locator(salesForceElement.contact.clickContact).click();

    await page.waitForTimeout(5000);
});