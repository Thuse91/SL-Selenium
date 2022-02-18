const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");



var searchString = "Automation testing with Selenium";

async function Swaglabs_standard_login() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
    var title = await driver.getTitle();
    console.log('Title is:',title,searchString);
    console.log("First test - Swag Labs Standard Login")
    console.log("Test Passed")
    await driver.close();
}
Swaglabs_standard_login();


async function Swaglabs_locked_login() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("locked_out_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
    var title = await driver.getTitle();
    console.log('Title is:',title,searchString);
    console.log("Second test - Swag Labs Locked Login")
    console.log("Test Passed")
    await driver.close();
}

Swaglabs_locked_login();


async function Swaglabs_problem_login() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("problem_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
    var title = await driver.getTitle();
    console.log('Title is:',title,searchString);
    console.log("Third test - Swag Labs Problem Login")
    console.log("Test Passed")
    await driver.close();
}

Swaglabs_problem_login();


async function Swaglabs_glitch_login() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("performance_glitch_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
    var title = await driver.getTitle();
    console.log('Title is:',title,searchString);
    console.log("Fourth test - Swag Labs Glitched Login")
    console.log("Test Passed")
    await driver.quit();
}

Swaglabs_glitch_login();

