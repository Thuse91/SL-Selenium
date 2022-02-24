const {By,until,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

var searchString = "Automation testing with Selenium";
/*
async function Swaglabs_standard_login_placeholder_check() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    let placeholder_username = await driver.findElement(By.id('user-name')).getAttribute('placeholder');
    let placeholder_password = await driver.findElement(By.id('password')).getAttribute('placeholder');
    if (placeholder_username !== 'Username' || placeholder_password !== 'Password'){
        console.log("Username or Password - placeholder missmatch")
        await driver.close();
    }
    else {
    var title = await driver.getTitle();
    console.log('\nTitle is:',title,searchString);
    console.log("Swag Labs login screen - Both placeholders are correct - Test Passed\n")
    //Driver.close , closes the browser remaining from the test.
    await driver.close();
    }
}
Swaglabs_standard_login_placeholder_check();

async function Swaglabs_standard_login_creds_check() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    let acceptText = await driver.findElement(By.xpath('//*[@id="login_credentials"]/h4')).getText();
    let passwordText = await driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div[2]/div/div[2]/h4')).getText();
    await driver.findElement(By.xpath('//*[text()="standard_user"]'))
    await driver.findElement(By.xpath('//*[text()="locked_out_user"]'))
    await driver.findElement(By.xpath('//*[text()="problem_user"]'))
    await driver.findElement(By.xpath('//*[text()="performance_glitch_user"]'))
    await driver.findElement(By.xpath('//*[text()="secret_sauce"]'))
    if (acceptText !== "Accepted usernames are:"){
        console.log("Accepted users text missmatch")
        await driver.close();
    }
    else if (passwordText !== "Password for all users:"){
        console.log("Password for all users text missmatch")
        await driver.close();
    }
    else {
        var title = await driver.getTitle();
        console.log('\nTitle is:',title,searchString);
        console.log("Swag Labs login screen - All login Credential texts are correct - Test Passed\n")
        //Driver.close , closes the browser remaining from the test.
        await driver.close();
    }
}
Swaglabs_standard_login_creds_check();
*/

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