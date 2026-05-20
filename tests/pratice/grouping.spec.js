import {test,expect}from '@playwright/test'

test.describe.configure({ mode: 'serial' }) //tests in that file to run in a single worker
//test.describe.configure({ mode: ' parallel' }) //tests in that file to run in a multiple worker

//hooks - only print 1 time before all test and group
test.beforeAll(async()=>{   
    console.log("welcome")
})

//hooks - only print 1 time after all test and group
test.afterAll(async()=>{ 
    console.log("Bye")
})

//hooks - print each time before each test
test.beforeEach(async()=>{ 
    console.log("how are you")
})

//hooks - print each time after each test
test.afterEach(async()=>{ 
    console.log("nice to meet you")
})

test.describe.only('group1',()=>{   //creating describe block -grouping test //only is to run only specific group or test

test.skip("test 1",async({page})=>{    //skip will skip the particular test from running

    console.log("this is test 1")
})

test("test 2",async({page})=>{

    console.log("this is test 2")
})

})

test.describe.only('group2',()=>{

test.fixme("test 3",async({page})=>{  //use fixme for tests that should run but are currently broken.it will not execute test

    console.log("this is test 3")
})

test("test 4",async({page})=>{

    console.log("this is test 4")
})
})
