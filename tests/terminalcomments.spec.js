import {test,chromium} from '@playwright/test';
test("User launch the Application", async({page})=>{
   await page.goto('https://playwright.dev/');
   await page.waitForTimeout(5000);
      
})

// npx playwright test terminalcomments.spec.js --headed    =opens browser UI
// npx playwright test terminalcomments.spec.js --project=chromium     = to run on specific browser
// npx playwright test terminalcomments.spec.js --project=chromium --debug    =runs in debug mode (slow + inspector) /if shows blank page need to resume in debug,Resume is required only in debug or paused state
// npx playwright codegen url   --automatically record your interactions and generate test code 
// npx playwright test   --run all tests
// npx playwright test terminalcomments.spec.js   --Run specific test file
// npx playwright test -g "User launch the Application"   --Run specific test (by name)
// npx playwright show-report   --generate html report
//npx playwright codegen   -- record actions and generate testscript