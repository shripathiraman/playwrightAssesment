import { chromium, expect, test } from '@playwright/test';
import  createLeadData  from './createLeadData.json';
import loginPageData from './loginSalesForce-Page-Data.json';
import { clear } from 'console';
import { create } from 'domain';

test('TC001-Create Test Lead', async ({ page }) => { 
    
    console.log(createLeadData.lastName);
    console.log(createLeadData.companyName);
    console.log(createLeadData.leadStatus);

    //goto Login Page
    await page.goto(loginPageData.url);

    //Enter the User Name
    await page.getByLabel(loginPageData.lblUserName).fill(loginPageData.userName);

    //Enter the password
    await page.getByLabel(loginPageData.lblPassword).fill(loginPageData.password);

    //Click the login button
    await page.click(loginPageData.loginButton);

    //Wait for the Home Page URL
    await page.waitForURL(loginPageData.homepageUrl);

    //get the tile of the Home Page
    const urlCheck = await page.title();
    console.log(urlCheck);
    
    //Check the title of Hompage
    expect(urlCheck).toContain(loginPageData.homepage.title);
   
    //click on the View All tab
    await page.click(loginPageData.homepage.allTabID);

    //Wait for the Home Page URL
    await page.waitForURL(loginPageData.allTabDetails.allPageUrl);

    //get the tile of the All tag Page
    const urlAllTabCheck = await page.title();
    console.log(urlAllTabCheck);
    
    //Check All Tabs title
    expect(urlAllTabCheck).toContain(loginPageData.allTabDetails.title);

    //clcik on the app launcher
    await page.click(loginPageData.allTabDetails.appLauncher);

    //Wait for the Home Page URL
    await page.waitForURL(loginPageData.appLauncherDetail.url);

    //check the url
    expect(page.url()).toEqual(loginPageData.appLauncherDetail.url);
    
    //Click on Sales
    await page.click(loginPageData.appLauncherDetail.salesId);

    //click on Leads
    await page.click(loginPageData.sales.leadsTab);

    //click New Lead button
    await page.click(loginPageData.sales.newLeadButton);
    //await page.waitForTimeout(5000);

    //Enter the Salutation
    await page.selectOption(loginPageData.createLeadPage.salutation,{value: createLeadData.Salutation});

    //Enter the Last Name
    await page.fill(loginPageData.createLeadPage.lastName,createLeadData.lastName);

    //Enter the Company Name
    await page.getByLabel(loginPageData.createLeadPage.lblCompany).fill(createLeadData.companyName);

    //Enter the lead status
    await page.getByLabel(loginPageData.createLeadPage.leadStatusSelectBox).selectOption({value:createLeadData.leadStatus});

    //click save
    await page.click(loginPageData.createLeadPage.clickSave);

    const tableExists = await page.waitForSelector(loginPageData.checkLeadData.table) !== null;
    if (tableExists) {
        console.log('Table found on the page.');
    } else {
        console.log('Table not found on the page.');
    }

    //Check the title of Hompage
    const leadName = createLeadData.Salutation + " " + createLeadData.lastName;


    const tabelData = await page.textContent(loginPageData.checkLeadData.table);
    console.log(tabelData?.includes("Mr. Test2"));
    expect(tabelData).toContain(leadName);

    /*const cells =await page.$$(".detailList" + ' td');
    console.log(cells.length);
    cells.forEach(async cell => {
        const cellText = await cell.innerText();
        //console.log(cellText);
    });
    // Print the tag name and text content of each element
    // Find the cell containing the desired value
    const cellWithText = cells.find(async (cell) => {
        const cellText = await cell.innerText();
        console.log(cellText.length);
        return cellText.includes("Mr. Test21");
    });
    console.log(cellWithText);*/
    
    //await page.waitForTimeout(5000);
});