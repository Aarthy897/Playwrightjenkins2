const { test, expect } = require('@playwright/test');

test('Facebook Signup Automation', async ({ page }) => {

    // ======================================================
    // 1. Open Facebook Website
    // ======================================================
    await page.goto('https://www.facebook.com/', {
        waitUntil: 'networkidle'
    });

    // Verify Facebook Home Page
    await expect(page).toHaveTitle(/Facebook/i);

    // ======================================================
    // 2. Click "Create New Account"
    // Proper Stable Locator
    // ======================================================
    await page.getByRole('button', { name: 'Create new account' }).click();

    // ======================================================
    // 3. Wait for Signup Modal
    // ======================================================
    const signupModal = page.locator('[aria-label="Sign Up"]');

    await expect(signupModal).toBeVisible();

    // ======================================================
    // 4. Fill First Name
    // ======================================================
    await page.locator('input[name="firstname"]').fill('Nirmal');

    // ======================================================
    // 5. Fill Last Name
    // ======================================================
    await page.locator('input[name="lastname"]').fill('Kumar');

    // ======================================================
    // 6. Fill Mobile Number
    // ======================================================
    await page.locator('input[name="reg_email__"]').fill('9876543210');

    // ======================================================
    // 7. Fill Password
    // ======================================================
    await page.locator('input[name="reg_passwd__"]').fill('Test@12345');

    // ======================================================
    // 8. Select Date of Birth
    // ======================================================

    // Day Dropdown
    await page.locator('select[title="Day"]').selectOption('10');

    // Month Dropdown
    await page.locator('select[title="Month"]').selectOption({ label: 'May' });

    // Year Dropdown
    await page.locator('select[title="Year"]').selectOption('1998');

    // ======================================================
    // 9. Select Gender
    // Proper Accessible Locator
    // ======================================================
    await page.getByLabel('Male').check();

    // ======================================================
    // 10. Wait for Form Data Rendering
    // ======================================================
    await page.waitForTimeout(2000);

    // ======================================================
    // 11. Take Screenshot
    // ======================================================
    await page.screenshot({
        path: 'screenshots/facebook-signup-form.png',
        fullPage: true
    });

    // ======================================================
    // 12. Validation
    // ======================================================
    await expect(
        page.locator('input[name="firstname"]')
    ).toHaveValue('Nirmal');

    console.log('Facebook signup form filled successfully');

});
