import{test,chromium}from '@playwright/test'

test('user launch application', async()=>{

    //launch browser
    const browser = await chromium.launch({
        headless:false
    })
    
    //create window (context)
    const context=await browser.newContext()
    //create tab (page)
    const page=await context.newPage()
    //navigate to url
    await page.goto("https://testautomationpratice.blogspot.com/")
    //get viewpoint
    const viewpoint =await page.viewportSize()
    console.log(viewpoint)
    await page.waitForTimeout(3000)

    //launch another context in same browser 
    const context2 = await browser.newContext()
    //create page in context2
    const page1 = await context2.newPage()
    //navigate url
    await page1.goto("https://www.google.com/")
    //to get page title
    const title1=await page1.title()
    console.log(title1)
    //set viewpoint
    await page1.setViewportSize({width: 600, height: 400})
    await page1.waitForTimeout(4000)

    //create another page in same context
    const page2 = await context2.newPage()
    //navigate url
    await page2.goto("https://www.amazon.in/",{ waitUntil: 'domcontentloaded'})

    await page2.waitForTimeout(5000)
    //to get page title
    const title=await page2.title()
    console.log(title)
    //to get page url
    const url=await page2.url()
    console.log(url)
    
    await browser.close()
})