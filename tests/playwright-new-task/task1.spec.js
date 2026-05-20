/*task 6- open pratice website shop click javascript link,printing 3 books name and price,sort dropdown low to high price
after sorting print 3 books name and price,click add to basket,click cart
update the quantity,click on update basket
print quantity,subtotal,price and covert them to number
use if condition compare if subtotal and price * quantity is equal or not if it is equal click proceed to check 
fill the form and click place order ,take screenshot of order details
*/
import {test}from '@playwright/test'
test('placing order',async({page})=>{

    await page.goto('https://practice.automationtesting.in/shop/',{waitUntil:'domcontentloaded'})
    
    //click javascript link
    const js=await page.getByRole('link',{name:'JavaScript'}).last()
    await js.click()
    //counting how many text present in DOM
    const count = await page.getByText('Functional Programming in JS').count();
    console.log(count);
    
    //printing 3 books name and price
    const bookName1=await page.getByText('Functional Programming in JS').first()
    console.log(await bookName1.textContent())
    
    const bookPrice1=await page.locator('.woocommerce-Price-amount').first()
    console.log(await bookPrice1.textContent())

    const bookName2=await page.getByText('JS Data Structures and Algorithm').first()
    console.log(await bookName2.textContent())
    
    const bookPrice2=await page.locator('.woocommerce-Price-amount').nth(1)
    console.log(await bookPrice2.textContent())
    
    const bookName3=await page.getByText('Mastering JavaScript').first()
    console.log(await bookName3.textContent())
    
    const bookPrice3=await page.locator('.woocommerce-Price-amount').last()
    console.log(await bookPrice3.textContent())
    
    //sort dropdown low to high price
    const sort=await page.locator('.orderby').first()
    await sort.selectOption({index: 4})
    
    //after sorting print 3 books name and price
    const bookName4=await page.getByText('JS Data Structures and Algorithm').first()
    console.log(await bookName4.textContent())

    const bookPrice4=await page.locator('.woocommerce-Price-amount').first()
    console.log(await bookPrice4.textContent())

    const bookName5=await page.getByText('Functional Programming in JS').first()//
    console.log(await bookName5.textContent())
    
    const bookPrice5=await page.locator('.woocommerce-Price-amount').nth(1)
    console.log(await bookPrice5.textContent())

    const bookName6=await page.getByText('Mastering JavaScript').first()//
    console.log(await bookName6.textContent())
    
    const bookPrice6=await page.locator('.woocommerce-Price-amount').last()
    console.log(await bookPrice6.textContent())

    //click add to basket
    const addToCart= await page.getByText('Add to basket').first()
    await addToCart.click() //add 1 item
    
    //click on cart
    const cart=await page.locator('.cartcontents')
    await cart.click()

    //update the quantity
    const quantity=await page.locator("input[type='number']").first()
    await quantity.press('ArrowUp') //keyboard action
    console.log('quantity:'+await quantity.inputValue()) //if element tagname is input we have to inputValue()

    // const quantity=await page.locator("input[type='number']").first()
    // await quantity.fill('2') //fill() method expects a string input even if it's a number

    //click on update basket
    const update=await page.locator("input[name='update_cart']")
    await update.click()

    await page.waitForTimeout(3000)

    //print price of the product
    const price=await page.locator('.woocommerce-Price-amount').first()
    console.log('price:'+await price.textContent()) //if element tagname is span,div use textContent()
    
    //print subTotal 
    const subTotal=await page.locator('.product-subtotal .woocommerce-Price-amount')//space Find child element .woocommerce-Price-amount inside .product-subtotal
    console.log('subTotal:'+await subTotal.textContent())
    
    // Remove the ₹ symbol,then convert to a Number
    const priceValue = Number((await price.textContent()).replace('₹',''))

    // Convert the input value directly to a Number
    const quantityValue = Number(await quantity.inputValue())

    // Remove the ₹ symbol,then convert to a Number
    const subTotalValue = Number((await subTotal.textContent()).replace('₹',''))

    //using if condition to compare total and subtotal amount
    const total=priceValue * quantityValue
    console.log('Total:'+total)
    if(subTotalValue===total)
    {
        const checkout=await page.getByText(' Proceed to Checkout')
        await checkout.click()
        console.log('proceed to checkout')
    }
    else
    {
       console.log('subtotal not equal to total')
    }
  
    //enter firstname
    const firstName=await page.locator('#billing_first_name')
    await firstName.fill("Aarthy")
    //enter lastname
    const lastName=await page.locator('#billing_last_name').last()
    await lastName.fill("Moorthy")
    //enter company name
    const companyName=await page.locator("input[name='billing_company']")
    await companyName.fill("Trendologies")
    //enter emailid
    const email=await page.locator('#billing_email')
    await email.fill("aarthy897@gmail.com")
    //enter phone-no
    const phone=await page.locator('#billing_phone')
    await phone.fill('9688809535')
    //select country 
    const country1=await page.locator('#s2id_billing_country').click()
    const country2=await page.getByRole('option',{name:'India'}).last()
    await country2.click()
    //enter street address
    const street=await page.getByPlaceholder('Street address')
    await street.pressSequentially("medavakkam")
    //enter city
    const city=await page.locator('#billing_city')
    await city.fill('chennai')
     //select state 
    const state=await page.locator('#s2id_billing_state').click()
    const state2=await page.getByRole('option',{name:'Tamil Nadu'})
    await state2.click()
    //enter postcode
    const postcode=await page.locator('#billing_postcode')
    await postcode.fill('600100')
    //click place order
    const placeorder=await page.locator("#place_order")
    await placeorder.click()
    
    await page.waitForTimeout(3000)

    //take screenshot
    await page.screenshot({path:'C:\\Users\\karth\\OneDrive\\Desktop\\PlayWright\\screenshots\\task6.png',fullPage:true})

})