//task:2 amazon-get title url-mobiles click,seach for iphone16,click ,sc
import{test}from '@playwright/test'
test('search product in amazon',async({page}) => {
await page.goto('https://www.amazon.in/',{waitUntil:'domcontentloaded'})
await page.waitForTimeout(5000)
console.log(await page.title())
console.log(await page.url())
await page.getByPlaceholder('Search Amazon.in').pressSequentially('iphone16')
await page.locator('#nav-search-submit-button').click()
await page.waitForTimeout(8000)
await page.screenshot({path:'C:\\Users\\karth\\OneDrive\\Desktop\\PlayWright\\screenshots\\task2.png',fullPage:false})
})