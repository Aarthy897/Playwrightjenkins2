const {test,expect}=require('@playwright/test')
test('Bulit in locators',async({page})=>{
     await page.goto("https://www.facebook.com/")
     await expect(page.getByText("Log in to Facebook")).toBeVisible()
     await page.getByLabel('Email address or mobile number').fill('aarthy897@gmail.com')
     await page.getByLabel('password').fill("duck@123")
     await page.getByRole("button",{name:'Log in'}).click()
     await page.waitForTimeout(5000)

})