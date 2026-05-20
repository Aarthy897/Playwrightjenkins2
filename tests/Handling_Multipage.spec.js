const {test,expect,chromium}=require('@playwright/test');

test('two Windows',async()=>{ 

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page1 = await context.newPage();
  const page2 = await context.newPage();

  await page1.goto('https://testautomationpractice.blogspot.com/',{waitUntil:'domcontentloaded'});

  await expect(page1).toHaveTitle('Automation Testing Practice');

  //await page1.locator("//a[text()='Blogger']").click();

  await page1.waitForTimeout(3000);

  await page2.goto('https://www.blogger.com/about/?bpli=1');
  await expect(page2).toHaveTitle('Blogger.com - Create a unique and beautiful blog easily.');
  await page2.waitForTimeout(3000);

})

test('Handles Multiple Window',async()=>{ 

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page1 = await context.newPage();

  await page1.goto('https://testautomationpractice.blogspot.com/');
  await expect(page1).toHaveTitle('Automation Testing Practice');

  const pagePromise = context.waitForEvent('page');
  await page1.locator("//a[text()='Blogger']").click();

  const newPage = await pagePromise;
  
  await expect(newPage).toHaveTitle('Blogger.com - Create a unique and beautiful blog easily.');


  await newPage.waitForTimeout(5000);
  await browser.close();

})
