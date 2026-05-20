import { test, expect } from '@playwright/test';

test('test', async ({ page},testInfo) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginpassword').fill('test@123');
  await page.locator('#loginusername').fill('pavanol');
  await page.getByRole('button', { name: 'Log in' }).click();

  console.log("Test 1")
  
   // Correct way to add a note to the report
  testInfo.annotations.push({ type: 'info', description: 'Hello' });
});