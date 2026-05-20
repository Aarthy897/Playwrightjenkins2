import {test,expect}from '@playwright/test'
test('datepicker',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/',{waitUntil:'domcontentloaded'})
    
    //way 1 - work if we able to type date 
    // const textbox=await page.locator('#datepicker')
    // await textbox.fill('03/04/2024')
    
    // await page.keyboard.press('Escape');

    //way 2- if unable to type need to use datepicker

    const month= 'September'
    const year='1997'
    const day='8'
    
    const date=await page.locator('#datepicker') //opens calendar
    await date.click()
    
    while(true)
    {
        const currentmonth=await page.locator('.ui-datepicker-month').textContent()
        const currentyear=await page.locator('.ui-datepicker-year').textContent()
        if(currentmonth===month && currentyear===year )
        {
            break
        }
        
            const prev=await page.getByTitle('Prev')
            await prev.click()
    }

    // const days=await page.$$("//a[@class='ui-state-default']")

    //slect day using loop
    // for(const d of days)
    // {
    //     if(await d.textContent()===day)
    //     {
    //     await d.click()
    //     break;
    //     }
    // }

    //another way selecting day without loop
    const days=await page.locator(`//a[@class='ui-state-default'][text()='${day}']`)//text()=9 alternate ${day}
    await days.click()

    await page.waitForTimeout(5000)
})