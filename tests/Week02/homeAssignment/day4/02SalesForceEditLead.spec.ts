import { test, expect } from "@playwright/test";
import elementDetail from "./02EditLeadElementDetail.json";
import editLeadData from "./02EditLeadData.json";

test('2 Edit Lead', async({page}) => {  

    //Open the URL
    await page.goto(elementDetail.url);

    //Enter the user name
    await page.getByLabel(elementDetail.lblUserName).fill(editLeadData.username);

    //Enter the password
    await page.getByLabel(elementDetail.lblPassword).fill(editLeadData.password);

    //click the login button
    await page.click(elementDetail.btnLogin);

    //click CRM//SFA
    await page.locator(elementDetail.crmsfa).click();

    //Lead Tab
    await page.locator(elementDetail.tabLead).click();

    // Create Lead
    await page.getByText(elementDetail.shortcut).click();

    //Fill Details
    await page.locator(elementDetail.createLead.companyName).fill(editLeadData.companyName);  
    await page.locator(elementDetail.createLead.firstName).fill(editLeadData.firstName);
    await page.locator(elementDetail.createLead.lastName).fill(editLeadData.lastName);   

    //Create Lead - Button Click
    await page.click(elementDetail.createLead.btncreateLead);

    //Edit Button
    await page.locator(elementDetail.editLead.btnEdit).filter({hasText: elementDetail.editLead.btnEditValue}).click();

    //Edit Company
    await page.locator(elementDetail.editLead.companyName).fill(editLeadData.companyNameEdit); 
    
    //Trigger the update button
    await page.locator(elementDetail.editLead.btnUpdate).click();

    //View Lead
    const companyNameElement = page.locator('[id=viewLead_companyName_sp]');

    expect(companyNameElement).toContainText(editLeadData.companyNameEdit,);
    
    await page.waitForTimeout(5000);
    
});