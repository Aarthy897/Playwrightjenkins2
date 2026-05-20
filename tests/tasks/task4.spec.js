//Task:4 open amazon drop down select amazon devices,search iphone16 click, hover to hello signin click on your orders
import{test}from '@playwright/test'
test('perform dropdown and mouse actions',async({page})=>{
    await page.goto('https://www.amazon.in/',{waitUntil:'domcontentloaded'})
    // const searchdropdown=await page.locator('#searchDropdownBox')
    // await searchdropdown.selectOption('Amazon Devices') //using text
    // const searchdropdown=await page.locator('#searchDropdownBox')
    // await searchdropdown.selectOption({index : 2})  //using index start from 0
    const searchdropdown=await page.locator('#searchDropdownBox')
    await searchdropdown.selectOption({value : 'search-alias=amazon-devices'})  //using value
    
    const search=await page.getByPlaceholder('Search Amazon.in')
    await search.fill('iphone16')

    const submit=await page.locator('#nav-search-submit-button')
    await submit.click()

    const move = page.locator('#nav-link-accountList');
    await move.hover()
    await page.waitForTimeout(2000);
   

    await page.screenshot({path:'C:\\Users\\karth\\OneDrive\\Desktop\\PlayWright\\screenshots\\task4.png',fullpage:true})
    await page.waitForTimeout(2000);
    

     // await move.waitFor({ state: 'visible' });
     // await move.hover({ force: true });


    // const move=await page.getByText('Hello, sign in')
    // await move.waitFor({ state: 'visible' });
    // await move.hover()
})