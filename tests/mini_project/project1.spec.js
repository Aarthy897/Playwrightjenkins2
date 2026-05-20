//april- 14 boolean methods and assertion
import {test, expect}from '@playwright/test'
test("placing order in pratice site",async({page})=>{
await page.goto('https://demo.automationtesting.in/Register.html',{waitUntil:'domcontentloaded'})
const heading=await page.getByRole('heading',{name:'Register'})
await expect(heading).toBeVisible()
await expect(heading).toHaveText('Register')

const firstname=await page.getByPlaceholder("First Name")
await firstname.fill("Aarthy")
await expect(firstname).toBeVisible()
await expect(firstname).toHaveValue('Aarthy')
//await expect.soft(firstname).toBeEmpty()

 const lastname=await page.getByPlaceholder("Last Name")
 await lastname.pressSequentially("Moorthy")
 await expect(lastname).toBeEditable()

 const address=await page.locator('textarea')
 await address.fill('Medavakkam,chennai')
 const result=await address.isEnabled()
 console.log(result)
 await expect(address).toBeFocused()

 const email=await page.locator("input[type='email']")
 await email.fill('aarthy897@gmail.com')
 await expect(email).toBeEnabled()

 const phone=await page.locator("input[type='tel']")
 await phone.fill('9688809535')
 await expect(phone).toHaveValue('9688809535')

 const gender=await page.getByRole('radio',{name:'FeMale'})
 await gender.click()
 await expect(gender).toBeEnabled()

  const hobby1=await page.locator('input#checkbox1')
 await hobby1.check()

   const hobby2=await page.locator('#checkbox3')
 await hobby2.click()

 await hobby1.uncheck()
 //await expect.soft(hobby1).toBeChecked()

 const hobby3=await page.locator('#checkbox2')
 await hobby3.setChecked(true)
 await expect(hobby3).toBeChecked()

 const dropdown=await page.locator('div.ui-autocomplete-multiselect')
 await dropdown.click()
 const languange=await page.getByText('English').click()
 await expect(dropdown).toHaveText('English')
 await page.locator('body').click()

 const skills=await page.locator('#Skills')
 await skills.selectOption({value:'MySQL'})
 await expect(skills).toBeEditable()

 const default_country=await page.locator('#countries')
 await default_country.click()

 const country=await page.locator('#country')
 await country.selectOption('India')

 const year=await page.getByPlaceholder('Year')
 await year.selectOption({value:'1997'})
 await expect(year).toBeEditable()

 const month=await page.getByPlaceholder('Month')
 await month.selectOption({index:9})
 await expect(month).toBeVisible()

 const day=await page.getByPlaceholder('Day')
 await day.selectOption('8')
 await expect(day).toBeEnabled()

 const password=await page.locator('#firstpassword')
 await password.pressSequentially('Hello@123')
 await expect(password).toHaveAttribute('type','password')

 const confirm_password=await page.locator('#secondpassword')
 await confirm_password.pressSequentially('Hello@123')
 await expect(confirm_password).toHaveValue('Hello@123')
 
 const file=await page.locator('input[type="file"]')
 await file.setInputFiles('C:/Users/karth/Downloads/WhatsApp Image 2025-05-28 at 8.46.13 AM.jpeg')

 const submit=await page.getByRole('button',{name:' Submit '})
 await submit.click()
 await expect(submit).toBeEnabled()

 const praticesite=await page.getByText('Practice Site').first()
 await praticesite.click()
 await expect(praticesite).toBeEnabled()

 const shop=await page.getByText('Shop').first()
 await shop.click()
 await expect(shop).toBeVisible()

 //click javascript link
 const js=await page.getByRole('link',{name:'JavaScript'}).last()
 await js.click()
 await expect(js).toBeEnabled()

 //printing 3 books name and price
 const bookName1=await page.getByText('Functional Programming in JS').first()
 console.log(await bookName1.textContent())
 await expect(bookName1).toBeVisible()
    
 const bookPrice1=await page.locator('.woocommerce-Price-amount').first()
 console.log(await bookPrice1.textContent())
 await expect(bookPrice1).toBeVisible()

 const bookName2=await page.getByText('JS Data Structures and Algorithm').first()
 console.log(await bookName2.textContent())
 await expect(bookName2).toBeVisible()
    
 const bookPrice2=await page.locator('.woocommerce-Price-amount').nth(1)
 console.log(await bookPrice2.textContent())
 await expect(bookPrice2).toBeVisible()
    
 const bookName3=await page.getByText('Mastering JavaScript').first()
 console.log(await bookName3.textContent())
 await expect(bookName3).toContainText('Mastering JavaScript')
    
 const bookPrice3=await page.locator('.woocommerce-Price-amount').last()
 console.log(await bookPrice3.textContent())
 await expect(bookPrice3).toHaveText('₹350.00')

    
 const addToCart=await page.getByText('Add to basket').nth(1)
 await addToCart.click()
 await expect(addToCart).toBeEnabled()
 
 const bookTitle=await page.getByText('JS Data Structures and Algorithm').first()
 console.log(await bookTitle.textContent())
 const bookPrice=await page.locator('.woocommerce-Price-amount').nth(1)
 console.log(await bookPrice.textContent())
 
 const viewBasket=await page.getByTitle('View Basket')
 await viewBasket.click()

 const bookInCart=await page.getByText('JS Data Structures and Algorithm')
 console.log(await bookInCart.textContent())
 const bookPriceCart=await page.locator('.woocommerce-Price-amount').first()
 console.log(await bookPriceCart.textContent())
 
//storing the values as variable- before clicking viewbasket
 const originalTitle=await bookTitle.textContent()
 const originalPrice=await bookPrice.textContent()
 //after clicking viewbasket
 const cartTitle=await bookInCart.textContent()
 const cartPrice=await bookPriceCart.textContent()

 //compare book title and book price using assertion
 expect(cartTitle).toBe(originalTitle)
 expect(cartPrice).toBe(originalPrice)

 console.log('Proceed to checkout')

 const checkout=await page.locator('.checkout-button')
 await checkout.click()

 //enter firstname
 const firstName=await page.locator('#billing_first_name')
 await firstName.fill('Aarthy')
 await expect(firstName).toHaveValue('Aarthy')  //tocontaintext not works here input which are we give manually we should use toHavevalue
 //enter lastname
 const lastName=await page.locator('#billing_last_name').last()
 await lastName.fill("Moorthy")
 await expect(lastName).toHaveValue('Moorthy')
 //enter company name
 const companyName=await page.locator("input[name='billing_company']")
 await companyName.fill("Trendologies")
 await expect(companyName).toBeEditable()
 //enter emailid
 const email1=await page.locator('#billing_email')
 await email1.fill("aarthy897@gmail.com")
 await expect(email1).toHaveValue('aarthy897@gmail.com')
 //enter phone-no
 const phone1=await page.locator('#billing_phone')
 await phone1.fill('9688809535')
 await expect(phone).toHaveValue('9688809535')
 //select country 
 const country1=await page.locator('#s2id_billing_country').click()
 const country2=await page.getByRole('option',{name:'India'}).last()
 await country2.click()
// await expect.soft(country2).toBeEmpty() //soft assertion -will fail the test but continues to the next lines finally marking the test as "failed"
 //enter street address
 const street=await page.getByPlaceholder('Street address')
 await street.pressSequentially("medavakkam")
 await expect(street).toHaveValue(/vakkam/) //partial input to check 
 //enter city
 const city=await page.locator('#billing_city')
 await city.fill('chennai')
 await expect(city).toHaveValue('chennai')
 //select state 
 const state=await page.locator('#s2id_billing_state').click()
 const state2=await page.getByRole('option',{name:'Tamil Nadu'})
 await state2.click()
 const selectedValue = page.locator('#s2id_billing_state'); 
 await expect(selectedValue).toContainText('Tamil Nadu');
 //enter postcode
 const postcode=await page.locator('#billing_postcode').first()
 await postcode.fill('600100')
 await expect(postcode).toBeEditable()
 //click place order
 const placeorder=await page.locator("#place_order")
 await placeorder.click()
 await expect(placeorder).toBeEnabled()
    
 await page.waitForTimeout(3000)

 //take screenshot
await page.screenshot({path:'C:\\Users\\karth\\OneDrive\\Desktop\\PlayWright\\screenshots\\mini_project1.png',fullPage:false})
})