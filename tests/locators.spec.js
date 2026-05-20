//april 6
import{test}from '@playwright/test'
import { count } from 'node:console'
test('praticing locators',async({page})=>{
 await page.goto("https://demo.automationtesting.in/",{waitUntil:'domcontentloaded'})
 const reg=await page.getByAltText("logo").last()
 await reg.click()

 const firstname=await page.getByPlaceholder("First Name")
 await firstname.fill("Aarthy")

 const lastname=await page.getByPlaceholder("Last Name")
 await lastname.pressSequentially("Moorthy")

  const submit=await page.getByText(" Submit ")
 await submit.click()

 await page.screenshot({path:'locator.png',fullPage:true})

//  const gender=await page.getByLabel(" FeMale")
//  await gender.click()

//april 7-- radio button, checkbox
 const gender=await page.getByRole("radio" ,{name:"FeMale"})
 await gender.click()

  const hobby1=await page.locator('input#checkbox1')
 await hobby1.check()

   const hobby2=await page.locator('#checkbox3')
 await hobby2.click()

 await hobby1.uncheck()

 const hobby3=await page.locator('#checkbox2')
 await hobby3.setChecked(true)

 const ele = await page.getByText("Cricket")
 await ele.screenshot({path:'locator2.png'})

 //april 8--dropdown,mouse action,keyboard actions
 //dropdown
 const skill=await page.locator('#Skills')
 await skill.selectOption({index:5})

 //mouse action
 await page.goto('https://vinothqaacademy.com/mouse-event/',{waitUntil:'domcontentloaded'})

 const doubleclick=await page.getByText('Double Click Me')
 await doubleclick.dblclick()

 const rightclick=await page.locator('#rightBtn')
 await rightclick.click({button:'right'}) //by default click left

  const drag=await page.getByText('Drag Me')
  const drop=await page.getByText('Drop Here').first()
  await drag.dragTo(drop)

  const move=await page.getByTitle('This is tooltip text')
  await move.hover()

  //keyboard actions
  await page.goto("https://demo.automationtesting.in/Register.html",{waitUntil:'domcontentloaded'})
  const address=await page.locator('textarea')
  await address.click()

  await page.keyboard.insertText('chennai') // alternate for insertText we can use type

  await page.keyboard.press('Control+A')
  await page.keyboard.press('Control+C')
  await page.keyboard.press('Tab')
  await page.keyboard.press('Control+V')
  await page.waitForTimeout(2000)
 
  //April 9--Dialog(alert popup)
  await page.goto("https://demo.automationtesting.in/Alerts.html",{waitUntil:'domcontentloaded'})

  //to handle simple alert
  await page.once('dialog',async(dialog)=>{
  await dialog.accept()
  })
const simpleAlert=await page.locator('button',{hasText:'click the button to display an  alert box:'})
await simpleAlert.click()

//to handle confirm alert
const btn1=await page.getByText('Alert with OK & Cancel ')
await btn1.click()

await page.once('dialog',async(dialog)=>{
await dialog.dismiss()
  })

const confirmAlert=await page.locator('.btn-primary')
await confirmAlert.click()

const getText=await page.locator('#demo')
console.log(await getText.textContent())

//to handle prompt alert
const btn2=await page.getByText('Alert with Textbox ')
await btn2.click()

await page.once('dialog',async(dialog)=>{
await dialog.accept('Aarthy') //send the text and accept
console.log(await dialog.message()) //-->print message inside dialog box
  })

const promptAlert=await page.getByText('click the button to demonstrate the prompt box ')
await promptAlert.click()

const getText1=await page.locator('#demo1').first()
console.log(await getText1.textContent())

//April 13 -Frame -single and nested
await page.goto('https://demo.automationtesting.in/Frames.html')
//single frame
const singleFrame=await page.frameLocator("iframe[name='SingleFrame']")
const input=await singleFrame.locator('input[type="text"]')
await input.fill("Aarthy")

//Nested frame
const frameLink=await page.getByText("Iframe with in an Iframe")
await frameLink.click()

//to get total count of frames
const totalframecount=await page.frames().length
console.log(totalframecount)
//or
const framecount=await page.locator('iframe').count()
console.log(framecount)

//outerfram
const outerFrame=await page.frameLocator('div#Multiple>iframe')//outerframe tagname iframe its parent div#Multiple
const outerFrameText=await outerFrame.locator('div.iframe-container>h5')//text locator h5 to locate use parent div.iframe
console.log(await outerFrameText.textContent())
//innerFrame
const innerFrame=await outerFrame.frameLocator('div.iframe-container>iframe')
const innerFrameText=await innerFrame.locator('div.container>h5').textContent()
console.log(innerFrameText)
const innerFrameInput=await innerFrame.locator('input[type="text"]')
await innerFrameInput.fill('hello')
await page.waitForTimeout(3000)
})