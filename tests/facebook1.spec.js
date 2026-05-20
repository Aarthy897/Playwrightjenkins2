const { test } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

test('Facebook Signup Automation (No POM)', async ({ page }) => {

  // ---------- Test Data ----------
  const userData = {
    firstName: 'Aarthy',
    lastName: 'Tester',
    mobile: '9876543210',
    password: 'Test@12345',
    day: '10',
    month: '5', // May
    year: '1998',
    gender: 'female'
  };

  // ---------- Helper: Screenshot Function ----------
  async function takeScreenshot(fileName) {
    const dir = path.join(__dirname, '../screenshots');

    // Create folder if not exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    const filePath = path.join(dir, `${fileName}.png`);

    await page.screenshot({
      path: filePath,
      fullPage: true,
    });
  }

  // ---------- Step 1: Open Facebook ----------
  await page.goto('https://www.facebook.com/');

  // ---------- Step 2: Click "Create New Account" ----------
  await page.locator('text=Create new account').click();

  // ---------- Step 4: Wait for Signup Form ----------
  await page.locator('input[name="firstname"]').waitFor({ state: 'visible' });

  // ---------- Step 3: Fill Signup Form ----------

  // First Name
  await page.locator('input[name="firstname"]').fill(userData.firstName);

  // Last Name
  await page.locator('input[name="lastname"]').fill(userData.lastName);

  // Mobile Number
  await page.locator('input[name="reg_email__"]').fill(userData.mobile);

  // Password
  await page.locator('input[name="reg_passwd__"]').fill(userData.password);

  // Date of Birth
  await page.locator('select[name="birthday_day"]').selectOption(userData.day);
  await page.locator('select[name="birthday_month"]').selectOption(userData.month);
  await page.locator('select[name="birthday_year"]').selectOption(userData.year);

  // Gender Selection
  if (userData.gender === 'male') {
    await page.locator('input[value="2"]').check();
  } else {
    await page.locator('input[value="1"]').check();
  }

  // ---------- Step 5: Take Screenshot ----------
  await takeScreenshot('facebook_signup_filled');

});