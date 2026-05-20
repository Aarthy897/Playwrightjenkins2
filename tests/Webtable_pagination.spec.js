import {test,expect}from '@playwright/test'
test('performing actions on webtable',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/',{waitUntil:'domcontentloaded'})

    const table=await page.locator('#productTable')

    const columns=await table.locator('thead tr th')
    console.log("No of columns:" + await columns.count())
    expect(await columns.count()).toBe(4)

    const rows=await table.locator('tbody tr')
    console.log("No of rows:" + await rows.count())
    expect(await rows.count()).toBe(5)
    
    //select checkbox for single item - 1
    // const matchedRow=rows.filter({
    // has :page.locator('td'),
    // hasText :'Laptop'})

    // const checkbox =await matchedRow.locator('input')
    // await checkbox.check()
    
    //print all product details using loop - 3
    // for(let i=0;i<await rows.count();i++)
    // {
    // const row= rows.nth(i)
    // const tds=row.locator('td') //to print data from particular row
    // for(let j=0;j<await tds.count()-1;j++)
    // {
    //     console.log(await tds.nth(j).textContent())
    // }
    // }
    
    //read data from multiple pages - 4
    const pages=await page.locator('.pagination li a')
    console.log('No of pages in table:' + await pages.count())
    for(let p=0;p<await pages.count();p++)
    {
        if(p>0)
        {
            await pages.nth(p).click()
        }
          for(let i=0;i<await rows.count();i++)
    {
    const row= rows.nth(i)
    const tds=row.locator('td') //to print data from particular row
    for(let j=0;j<await tds.count()-1;j++)
    {
        console.log(await tds.nth(j).textContent())
    }
    }
    await page.waitForTimeout(3000)
    }

    //select multiple products by using reusable function - 2
//     await selectProduct(rows,page,'Smartphone')
//     await selectProduct(rows,page,'Tablet')
//     await selectProduct(rows,page,'Smartwatch')

    await page.waitForTimeout(3000)
})

//reusable function need to create outside block -2
// async function selectProduct(rows,page,Name)
// {
//     const matchedRow=rows.filter({
//     has :page.locator('td'),
//     hasText :Name})

//     const checkbox =await matchedRow.locator('input[type="checkbox"]')
//     await checkbox.check()
// }

