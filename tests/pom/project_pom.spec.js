const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { HomePage } = require('../../pages/HomePage');

test('Test', async ({ page }) => {

    // Login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('pavanol', 'test@123');
    await page.waitForTimeout(3000);

    // Home
    const home = new HomePage(page);
    await home.addProductToCart('Nexus 6');
    await page.waitForTimeout(3000);
    await home.goToCart();

    // Cart
    await page.waitForTimeout(3000);
    
    //verify that the product added (Nexus 6) is the same product shown in the cart table using an if condition
    // const expectedProduct = 'Nexus 6';

    // locator for product name in cart table
    // const actualProduct = await page.locator('//td[2]').first().textContent();

    // if (actualProduct.trim() === expectedProduct) 
    // {
    // console.log('Product matched');
    // } 
    // else 
    // {
    // console.log('Product NOT matched');
    // }

    const { CartPage } = require('../../pages/CartPage')

    const cart = new CartPage(page)

    const expectedProduct = 'Nexus 6'

    const actualProduct = await cart.getProductName()

    if (actualProduct === expectedProduct) 
    {
    console.log('Product matched')
    }
    else
    {
    console.log('Product NOT matched')
    }
})


