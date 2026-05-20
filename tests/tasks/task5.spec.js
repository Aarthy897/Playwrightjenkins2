/*task 5-open amazon dropdown select books,search harry potter and hover to harry potter book set click,
getcontent harry potter book set,check on papeback checkbox,
print harry potter set of 7 book name,author and price of the book 
and click add to car button after that click on cart
print shopping cart and book name author name price
click see more like this and take screenshot*/
import{test}from '@playwright/test'
test('performing hover and textcontent actions on amazon',async({page})=>{
    await page.goto('https://www.amazon.in/',{waitUntil:'domcontentloaded'})

    const book=await page.getByTitle('Search in').last()
    await book.selectOption({value:'search-alias=stripbooks'})

    const search=await page.locator('#twotabsearchtextbox').last()
    await search.pressSequentially('harry potter')

    const move=await page.locator('#sac-suggestion-row-2')
    await move.hover()
    await move.click()

    const gettext=await page.locator('span.a-color-state')
    console.log(await gettext.textContent())
  
    const check=await page.locator('.a-icon-checkbox').nth(3) //nth index start from 0
    await check.check()

    const bookTitle=await page.getByText('Harry Potter : The Complete Collection (Set of 7 Books)').last()
    console.log(await bookTitle.textContent())
    
    const bookAuthor=await page.getByText('J.K. Rowling').first()
    console.log(await bookAuthor.textContent())

    const bookPrice=await page.getByText('₹2,649').first()
    console.log(await bookPrice.textContent())

    const addToCart=await page.getByText('Add to cart').nth(2)
    await addToCart.click()

    await page.waitForTimeout(2000)
    
    const cart=await page.locator('#nav-cart-count')
    await cart.click()
    
    const shopCart=await page.locator('#sc-active-items-header').first()
    console.log(await shopCart.textContent())

    const bookTitle1=await page.locator('.a-truncate-full').first()
    console.log(await bookTitle1.textContent())

    const bookAuthor1=await page.locator('.sc-product-creator')
    console.log(await bookAuthor1.textContent())

    const bookPrice1=await page.getByText('₹2,649').nth(2)
    console.log(await bookPrice1.textContent())

    const link=await page.locator('.a-color-link').nth(11)
    await link.click()
    
    await page.waitForTimeout(3000)

    await page.screenshot({path:'C:\\Users\\karth\\OneDrive\\Desktop\\PlayWright\\screenshots\\task5.png',fullPage:false})

    
})