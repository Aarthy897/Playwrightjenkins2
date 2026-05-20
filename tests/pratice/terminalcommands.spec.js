import {test,expect}from '@playwright/test'
test('verify login',async({page},testInfo)=>{

    await page.goto('https://www.demoblaze.com/',{waitUntil:'domcontentloaded'})

    await expect(page).toHaveURL("https://www.demoblaze.com/")

    const login=await page.getByRole('link',{name:'Log in'})
    await expect(login).toBeVisible()
    await login.click()
    
    await expect(page.locator('#logInModal')).toBeVisible();

    const username=await page.locator('#loginusername')
    await username.fill('pavanol')

    const password=await page.locator('#loginpassword')
    await expect(password).toBeEditable()
    await password.fill('test@123')
    
    const button=await page.getByRole('button',{name:'Log in'})
    await expect (button).toBeEnabled()
    await button.click()
    
    const text=await page.locator('#nameofuser')
    // Tell Playwright: Wait until the text is actually visible on the screen
    await text.waitFor({ state: 'visible' })
    await expect(text).toHaveText("Welcome pavanol")
    console.log(await text.textContent())
    
    console.log("Hello")
    
    testInfo.annotations.push({type:'info',description:'pratice program'})
})