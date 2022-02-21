//****************************************************************************************/
//
//      Selenium Webdriver Testing of https://www.saucedemo.com/ - SWAGLABS
//
//      Section 1. 
//          - loggin test
//
//      Section 2.
//          - UI functionality test (Standrad_user)
//
//      Section 3.
//          - Verify Product
//
//      Section 4.
//          - End-to-End test
//
//****************************************************************************************/


const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

var searchString = "Automation testing with Selenium";

/*
// login Tests
async function Swaglabs_standard_login() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
    //added interaction on successful login to check that it worked
    await driver.findElement(By.name("add-to-cart-sauce-labs-backpack")).click();
    var title = await driver.getTitle();
    console.log('Title is:',title,searchString);
    console.log("First test - Swag Labs Standard Login")
    console.log("Test Passed")
    //Driver.close , closes the browser remaining from the test.
    await driver.close();
}
Swaglabs_standard_login();


async function Swaglabs_locked_login() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("locked_out_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
    //Verify that locked out login popped up
    await driver.findElement(By.xpath("//*[contains(text(), 'Epic sadface')]"));
    var title = await driver.getTitle();
    console.log('Title is:',title,searchString);
    console.log("Second test - Swag Labs Locked Login")
    console.log("Test Passed")
    //Driver.close , closes the browser remaining from the test.
    await driver.close();
}

Swaglabs_locked_login();


async function Swaglabs_problem_login() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("problem_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
    //added interaction on successful login to check that it worked
    await driver.findElement(By.name("add-to-cart-sauce-labs-backpack")).click();
    var title = await driver.getTitle();
    console.log('Title is:',title,searchString);
    console.log("Third test - Swag Labs Problem Login")
    console.log("Test Passed")
    //Driver.close , closes the browser remaining from the test.
    await driver.close();
}

Swaglabs_problem_login();


async function Swaglabs_glitch_login() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("performance_glitch_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
    //added interaction on successful login to check that it worked
    await driver.findElement(By.name("add-to-cart-sauce-labs-backpack")).click();
    var title = await driver.getTitle();
    console.log('Title is:',title,searchString);
    console.log("Fourth test - Swag Labs Glitched Login")
    console.log("Test Passed")
   //Driver.close , closes the browser remaining from the test.
    await driver.close();
}

Swaglabs_glitch_login();

async function Swaglabs_standard_login_logoff() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
    await driver.findElement(By.id("react-burger-menu-btn")).click();
    async function awaitCss(){
        await driver.findElement(By.id("logout_sidebar_link")).click();
        //Verify that we are back at the login-screen by pressing the login-button
        await driver.findElement(By.id("login-button")).click();
        let title = await driver.getTitle();
        console.log('Title is:',title,searchString);
        console.log("Fourth test - Swag Labs Glitched Login")
        console.log("Test Passed")
       //Driver.close , closes the browser remaining from the test.
        await driver.close();
    }
    setTimeout(awaitCss,1000)
};

Swaglabs_standard_login_logoff();


// UI functionality test (Standrad_user)

async function Swaglabs_standard_login_add() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
    //added interaction on successful login to check that it worked
    await driver.findElement(By.name("add-to-cart-sauce-labs-backpack")).click();
    await driver.findElement(By.name("add-to-cart-sauce-labs-bike-light")).click();
    await driver.findElement(By.name("add-to-cart-sauce-labs-bolt-t-shirt")).click();
    await driver.findElement(By.name("add-to-cart-sauce-labs-fleece-jacket")).click();
    await driver.findElement(By.name("add-to-cart-sauce-labs-onesie")).click();
    await driver.findElement(By.name("add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)")).click();
    var title = await driver.getTitle();
    console.log('Title is:',title,searchString);
    console.log("Fifth test - Swag Labs Standard Login")
    console.log("Test Passed")
    //Driver.close , closes the browser remaining from the test.
    await driver.close();
}
Swaglabs_standard_login_add();

async function Swaglabs_standard_login_add_remove() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
    //added interaction on successful login to check that it worked
    await driver.findElement(By.name("add-to-cart-sauce-labs-backpack")).click();
    await driver.findElement(By.name("remove-sauce-labs-backpack")).click();
    await driver.findElement(By.name("add-to-cart-sauce-labs-bike-light")).click();
    await driver.findElement(By.name("remove-sauce-labs-bike-light")).click();
    await driver.findElement(By.name("add-to-cart-sauce-labs-bolt-t-shirt")).click();
    await driver.findElement(By.name("remove-sauce-labs-bolt-t-shirt")).click();
    await driver.findElement(By.name("add-to-cart-sauce-labs-fleece-jacket")).click();
    await driver.findElement(By.name("remove-sauce-labs-fleece-jacket")).click();
    await driver.findElement(By.name("add-to-cart-sauce-labs-onesie")).click();
    await driver.findElement(By.name("remove-sauce-labs-onesie")).click();
    await driver.findElement(By.name("add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)")).click();
    await driver.findElement(By.name("remove-test\.allthethings\(\)-t-shirt-\(red\)")).click();
    var title = await driver.getTitle();
    console.log('Title is:',title,searchString);
    console.log("Sixth test - Swag Labs Standard Login")
    console.log("Test Passed")
    //Driver.close , closes the browser remaining from the test.
    await driver.close();
}
Swaglabs_standard_login_add_remove();

async function Swaglabs_standard_login_about() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
    await driver.findElement(By.id("react-burger-menu-btn")).click();
    //added interaction on successful login to check that it worked
    async function awaitCss(){
        await driver.findElement(By.id("about_sidebar_link")).click();
        //Verify that we are arrived on the about page.
        await driver.findElement(By.className("nav-image-link")).click();
        let title = await driver.getTitle();
        console.log('Title is:',title,searchString);
        console.log("Seventh test - Swag Labs Standard Login")
        console.log("Test Passed")
       //Driver.close , closes the browser remaining from the test.
        await driver.close();
    }
    setTimeout(awaitCss,1000)
}
Swaglabs_standard_login_about();
*/
async function Swaglabs_standard_login_all_items() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
    await driver.findElement(By.id("shopping_cart_container")).click();
    await driver.findElement(By.id("react-burger-menu-btn")).click();
    //added interaction on successful login to check that it worked
    async function awaitCss(){
        await driver.findElement(By.id("inventory_sidebar_link")).click();
        //Verify that we are arrived on the about page.
        await driver.findElement(By.name("add-to-cart-sauce-labs-backpack")).click();
        await driver.findElement(By.name("remove-sauce-labs-backpack")).click();
        let title = await driver.getTitle();
        console.log('Title is:',title,searchString);
        console.log("Seventh test - Swag Labs Standard Login")
        console.log("Test Passed")
       //Driver.close , closes the browser remaining from the test.
        await driver.close();
    }
    setTimeout(awaitCss,1000)
}
Swaglabs_standard_login_all_items();

