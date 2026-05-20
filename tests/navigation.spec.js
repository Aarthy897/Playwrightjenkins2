import{test,chromium} from '@playwright/test'

test('navigating pages', async()=>{

    const browser = await chromium.launch({
            headless: false
        })

        const context=await browser.newContext()
        const page=await context.newPage()
        await page.goto("https://testautomationpratice.blogspot.com/",{waitUntil:'domcontentloaded'})
        await page.goto("https://www.google.com/")
        await page.waitForTimeout(3000)
        await page.goBack()
        await page.goForward()
        await page.reload()

})