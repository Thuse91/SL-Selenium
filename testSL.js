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

const {By,until,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

var searchString = "Automation testing with Selenium";

/*
//Login Tests

//Test to login with standard user
async function Swaglabs_standard_login() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
    //added interaction on successful login to check that it worked
    await driver.findElement(By.name("add-to-cart-sauce-labs-backpack")).click();
    var title = await driver.getTitle();
    console.log('\nTitle is:',title,searchString);
    console.log("Swag Labs Standard Login - Test Passed\n")
    //Driver.close , closes the browser remaining from the test.
    await driver.close();
}
Swaglabs_standard_login();

//Test to login with locked user
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
    console.log("Swag Labs Locked Login - Passed Test\n")
    //Driver.close , closes the browser remaining from the test.
    await driver.close();
}

Swaglabs_locked_login();

//Test to login with Problem user
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
    console.log("Swag Labs Problem Login - Test Passed\n")
    //Driver.close , closes the browser remaining from the test.
    await driver.close();
}

Swaglabs_problem_login();

//Test to login with gliched user
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
    console.log("Swag Labs Glitched Login - Test Passed\n")
   //Driver.close , closes the browser remaining from the test.
    await driver.close();
}

Swaglabs_glitch_login();

//Test to login and logoff with standard_user
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
        console.log("Swag Labs Standard login - logoff - Test Passed\n")
       //Driver.close , closes the browser remaining from the test.
        await driver.close();
    }
    setTimeout(awaitCss,1000)
};

Swaglabs_standard_login_logoff();


// UI functionality test (Standrad_user)

//Test to add all shoppingcart items
async function Swaglabs_standard_login_add() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
    await driver.findElement(By.name("add-to-cart-sauce-labs-backpack")).click();
    await driver.findElement(By.name("add-to-cart-sauce-labs-bike-light")).click();
    await driver.findElement(By.name("add-to-cart-sauce-labs-bolt-t-shirt")).click();
    await driver.findElement(By.name("add-to-cart-sauce-labs-fleece-jacket")).click();
    await driver.findElement(By.name("add-to-cart-sauce-labs-onesie")).click();
    await driver.findElement(By.name("add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)")).click();
    var title = await driver.getTitle();
    console.log('Title is:',title,searchString);
    console.log("Swag Labs Standard Login - Add all items - Test Passed\n")
    //Driver.close , closes the browser remaining from the test.
    await driver.close();
}
Swaglabs_standard_login_add();

//Test to add and remove all Shoppingcart items
async function Swaglabs_standard_login_add_remove() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
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
    console.log("Swag Labs Standard Login - Add and remove all items - Test Passed\n")
    //Driver.close , closes the browser remaining from the test.
    await driver.close();
}
Swaglabs_standard_login_add_remove();

//Test to press the About button in the sidebar/burger menu and verify that it landed on that page.
async function Swaglabs_standard_login_about() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
    await driver.findElement(By.id("react-burger-menu-btn")).click();
    async function awaitCss(){
        await driver.findElement(By.id("about_sidebar_link")).click();
        //Verify that we are arrived on the about page.
        await driver.findElement(By.className("nav-image-link")).click();
        let title = await driver.getTitle();
        console.log('Title is:',title,searchString);
        console.log("Swag Labs Standard Login - Pressing About in sidebar - Test Passed\n")
        //Driver.close , closes the browser remaining from the test.
        await driver.close();
    }
    setTimeout(awaitCss,1000)
}
Swaglabs_standard_login_about();

//Test to press the "Inventory" button in the burger,sidebar
async function Swaglabs_standard_login_inventory() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
    await driver.findElement(By.id("shopping_cart_container")).click();
    await driver.findElement(By.id("react-burger-menu-btn")).click();
    async function awaitCss(){
        await driver.findElement(By.id("inventory_sidebar_link")).click();
        //Verify that we are arrived on the select item page.
        await driver.findElement(By.name("add-to-cart-sauce-labs-backpack")).click();
        await driver.findElement(By.name("remove-sauce-labs-backpack")).click();
        let title = await driver.getTitle();
        console.log('Title is:',title,searchString);
        console.log("Swag Labs Standard Login - Pressing All Items in sidebar - Test Passed\n")
        //Driver.close , closes the browser remaining from the test.
        await driver.close();
    }
    setTimeout(awaitCss,1000)
}
Swaglabs_standard_login_inventory();

//Test to press the "Reset app state" button in the burger,sidebar
async function Swaglabs_standard_login_reset_app() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
    await driver.findElement(By.id("shopping_cart_container")).click();
    await driver.findElement(By.id("react-burger-menu-btn")).click();
    async function awaitCss(){
        await driver.findElement(By.id("reset_sidebar_link")).click();
        //Verify that we are arrived on the select item page.
        await driver.findElement(By.name("add-to-cart-sauce-labs-backpack")).click();
        await driver.findElement(By.name("remove-sauce-labs-backpack")).click();
        let title = await driver.getTitle();
        console.log('Title is:',title,searchString);
        console.log("Swag Labs Standard Login - Pressing Reset app state in sidebar - Test Passed\n")
       //Driver.close , closes the browser remaining from the test.
        await driver.close();
    }
    setTimeout(awaitCss,1000)
}
Swaglabs_standard_login_reset_app();
*/
