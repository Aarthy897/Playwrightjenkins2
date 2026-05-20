const {test,expect}=require('@playwright/test')
test('Bulit in locators',async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.getByPlaceholder('Enter Your Name').fill('Aarthy')        //Ctrl + Shift + C --to inspect //ctrl+f--search elements
    await expect(page.getByText("Dropdown Example")).toBeVisible()
    await page.getByRole("button",{name:'Home'}).click()
    await page.waitForTimeout(5000)
})

test("test1",async({page})=>{
   await page.goto("https://demoqa.com/") 
   await expect(page.getByAltText('Selenium Online Training')).toBeVisible()
   await page.waitForTimeout(3000)
})

//7 types of builtin locators are there
//page.getByPlaceholder()--used for input fiels
//page.getByText()--to get any text present in the page
//page.getByRole()--mostly use for buttons
//page.getByAltText()--used on image 
//page.getByLabel()--used on inputfiels,checkbox,dropdown
//page.getByTitle()--often appears as tooltip
//page.getByTestId()--which defaults to data-testid (configurable). This is useful when user-facing locators are not feasible. 
