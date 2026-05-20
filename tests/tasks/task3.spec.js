//task3: open amazon -click mobile-search iphone16 click -left checkbox check apple and uncheck (checkbox & css selector)
import{test}from '@playwright/test'
test('search product in amazon',async({page})=>{
   await page.goto('https://www.amazon.in/',{waitUntil:'domcontentloaded'})
   const mob=await page.getByText('Mobiles')
   await mob.click()
   //await page.waitForTimeout(2000)
   const check1=await page.getByText('Get It Today').nth(1)
   await check1.click()

   const free=await page.getByText('Free Shipping').nth(1)
   await free.click()

   await page.goBack()
   await check1.click()
   //await page.waitForTimeout(5000)
})