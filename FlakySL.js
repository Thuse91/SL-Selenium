
// Flaky tests. possibly due to uncorrect creation.

const {By,until,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

var searchString = "Automation testing with Selenium";

//Test to press the "Twitter-social" button in the footer
async function Swaglabs_standard_login_twitter() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
    //Do something to open new tabs

    //Store the ID of the original window
    const originalWindow = await driver.getWindowHandle();

    //Click the link which opens in a new window
    await driver.findElement(By.className("social_twitter")).click();
    //Wait for the new window or tab
    await driver.wait(
    async () => (await driver.getAllWindowHandles()).length === 2,
    10000
  );
    //Loop through until we find a new window handle
    const windows = await driver.getAllWindowHandles();
    windows.forEach(async handle => {
    if (handle !== originalWindow) {
        await driver.switchTo().window(handle);
        }
    });
        await driver.close(originalWindow)
        async function awaitNewTab() {
        await driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile('Screenshots/Selenium/TwitterImg.png', image, 'base64', function(err) {
                    //console.log(err);
                });
            
            }
        );
        let title = await driver.getTitle();
        console.log('Title is:',title,searchString);
        console.log("Swag Labs Standard Login - Pressing Twitter link + taking screenshot - Test Passed\n")
        await driver.close()
        }
        setTimeout(awaitNewTab,2000)
    }
Swaglabs_standard_login_twitter();

//Test to press the "Facebook-social" button in the footer
async function Swaglabs_standard_login_facebook() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
    //Do something to open new tabs

    //Store the ID of the original window
    const originalWindow = await driver.getWindowHandle();

    //Click the link which opens in a new window
    await driver.findElement(By.className("social_facebook")).click();
    //Wait for the new window or tab
    await driver.wait(
    async () => (await driver.getAllWindowHandles()).length === 2,
    10000
  );
    //Loop through until we find a new window handle
    const windows = await driver.getAllWindowHandles();
    windows.forEach(async handle => {
    if (handle !== originalWindow) {
        await driver.switchTo().window(handle);
        }
    });
        await driver.close(originalWindow)
        async function awaitNewTab() {
        await driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile('Screenshots/Selenium/FacebookImg.png', image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );
        let title = await driver.getTitle();
        console.log('Title is:',title,searchString);
        console.log("Swag Labs Standard Login - Pressing Facebook link + taking screenshot - Test Passed\n")
        await driver.close()
        }
        setTimeout(awaitNewTab,2000)
    }
Swaglabs_standard_login_facebook();

//Test to press the "Facebook-social" button in the footer
async function Swaglabs_standard_login_linkedin() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement(By.id("user-name")).click();
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
    //Do something to open new tabs

    //Store the ID of the original window
    const originalWindow = await driver.getWindowHandle();

    //Click the link which opens in a new window
    await driver.findElement(By.className("social_linkedin")).click();
    //Wait for the new window or tab
    await driver.wait(
    async () => (await driver.getAllWindowHandles()).length === 2,
    10000
  );
    //Loop through until we find a new window handle
    const windows = await driver.getAllWindowHandles();
    windows.forEach(async handle => {
    if (handle !== originalWindow) {
        await driver.switchTo().window(handle);
        }
    });
        await driver.close(originalWindow)
        async function awaitNewTab() {
        await driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile('Screenshots/Selenium/LinkedinImg.png', image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );
        let title = await driver.getTitle();
        console.log('Title is:',title,searchString);
        console.log("Swag Labs Standard Login - Pressing Linkedin link + taking screenshot - Test Passed\n")
        await driver.close()
        }
        setTimeout(awaitNewTab,2000)
    }
Swaglabs_standard_login_linkedin();
