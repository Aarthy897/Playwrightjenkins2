import {test}from '@playwright/test'
test('placing order',async({page})=>{
    await page.goto('https://www.amazon.in/',{waitUntil:'domcontentloaded'})
    const search=await page.locator("input[role='searchbox']")
    await search.fill('iphone 17')
    const search_button=await page.locator("input[type='submit']")
    await search_button.click()
    
    // const priceLocator =await page.locator("xpath=//h2/span[text()='Apple']/ancestor::div[contains(@class,'a-spacing-top-small')]/child::div[contains(@class,'puis-desktop-list-row')]//span[text()='₹1,34,900']")
    // const priceText=await priceLocator.textContent()
    // console.log(priceText)
    
    const price =await page.locator("xpath=//h2/span[text()='Apple']/ancestor::div[contains(@class,'a-spacing-top-small')]/child::div[contains(@class,'puis-desktop-list-row')]//span[text()='₹1,34,900']")
    console.log(await price.textContent())
    
    await page.waitForTimeout(3000)
})