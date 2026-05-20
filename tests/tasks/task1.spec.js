//task 1: fb-enter email pwd and click login ,take error sc
import{test,chromium}from '@playwright/test'
test('login facebook',async()=>{
const browser=await chromium.launch({
    headless:false
})
const context=await browser.newContext()
const page=await context.newPage()
await page.goto("https://www.facebook.com/",{waitUntil:'domcontentloaded'})
const title=await page.title()
const url=await page.url()
console.log(title)
console.log(url)
await page.getByLabel("Email address or mobile number").fill("aarthy897@gmail.com")
await page.getByLabel("Password").fill("")
await page.getByRole('button',{name: "Log in"}).click()
await page.waitForTimeout(15000)
await page.screenshot({path:'C:\\Users\\karth\\OneDrive\\Desktop\\PlayWright\\screenshots\\task1.png' ,fullPage:true})
})
