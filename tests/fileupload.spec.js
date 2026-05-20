const { test, expect } = require('@playwright/test');

test('Test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // single file upload
    await page.locator('#singleFileInput').setInputFiles('C:/Users/karth/OneDrive/Desktop/PlayWright/Uploadfile/Aarthy_M_Resume.docx');

    await page.waitForTimeout(3000);

    // multiple file upload
    await page.locator('#multipleFilesInput').setInputFiles([
        'C:/Users/karth/OneDrive/Desktop/PlayWright/Uploadfile/Aarthy_M_Resume.docx',
        'C:/Users/karth/OneDrive/Desktop/PlayWright/Uploadfile/Aarthy resume automation- old.pdf'
    ]);

    await page.waitForTimeout(3000);

    await page.locator('#multipleFilesInput').setInputFiles([
        'C:/Users/karth/OneDrive/Desktop/PlayWright/Uploadfile/Aarthy_M_Resume.docx'
    ]);

    await page.waitForTimeout(3000);

    await page.locator('#multipleFilesInput').setInputFiles([]);

    await page.waitForTimeout(3000);
});