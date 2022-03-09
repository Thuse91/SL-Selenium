const assert  = require("assert");
const {By,until,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

//mocha .\testSL-Mocha.js

describe('Login tests', function(){
    this.timeout(50000);
    beforeEach(function(){
        //before
    });
    afterEach(function() {
        //after
    })
    it('Standard user login test', async function(){
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).click();
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
        //added interaction on successful login to check that it worked
        await driver.findElement(By.name("add-to-cart-sauce-labs-backpack")).click();
        let verifyText = await driver.findElement(By.xpath('//*[@id="item_4_title_link"]/div')).getText().then(function(value){
            return value
        });
        assert.strictEqual(verifyText,"Sauce Labs Backpack");
        await driver.close();
    })

    it('Locked out user login test', async function(){
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).click();
        await driver.findElement(By.id("user-name")).sendKeys("locked_out_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
        //Verify that locked out login popped up
        await driver.findElement(By.xpath("//*[contains(text(), 'Epic sadface')]"));
        let verifyText = await driver.findElement(By.xpath('//*[@id="login_button_container"]/div/form/div[3]/h3')).getText().then(function(value){
            return value
        });
        assert.strictEqual(verifyText,"Epic sadface: Sorry, this user has been locked out.");
        await driver.close();
    })
    it('Problem user login test', async function(){
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).click();
        await driver.findElement(By.id("user-name")).sendKeys("problem_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
        //added interaction on successful login to check that it worked
        await driver.findElement(By.name("add-to-cart-sauce-labs-backpack")).click();
        let verifyText = await driver.findElement(By.xpath('//*[@id="item_4_title_link"]/div')).getText().then(function(value){
            return value
        });
        assert.strictEqual(verifyText,"Sauce Labs Backpack");
        await driver.close();
    })
    it('Glitched performance user login test', async function(){
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).click();
        await driver.findElement(By.id("user-name")).sendKeys("performance_glitch_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
        //added interaction on successful login to check that it worked
        await driver.findElement(By.name("add-to-cart-sauce-labs-backpack")).click();
        let verifyText = await driver.findElement(By.xpath('//*[@id="item_4_title_link"]/div')).getText().then(function(value){
            return value
        });
        assert.strictEqual(verifyText,"Sauce Labs Backpack");
        await driver.close();
    })
    it('Standard user login-logoff test', async function(){
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
            let verifyText = await driver.findElement(By.xpath('//*[@id="login_credentials"]/h4')).getText().then(function(value){
                return value
            });
            assert.strictEqual(verifyText,"Accepted usernames are:");
            await driver.close();
        }
        setTimeout(awaitCss,1000)
    })
    it('Wrong user credentials login test', async function(){
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).click();
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauced",Key.RETURN)
        //added interaction on failed login to check if error msg worked.
        await driver.findElement(By.xpath("//*[contains(text(), 'Epic sadface')]"));
        let verifyText = await driver.findElement(By.xpath('//*[@id="login_button_container"]/div/form/div[3]/h3')).getText().then(function(value){
            return value
        });
        assert.strictEqual(verifyText,"Epic sadface: Username and password do not match any user in this service");
        await driver.close();

    })
})

describe('UI functionality test (Standrad_user)', function(){
    this.timeout(50000);
    beforeEach(function(){
        //before
    });
    afterEach(function() {
        //after
    })
    it('Add all exisiting items to cart test', async function(){
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
        await driver.findElement(By.xpath('//*[@id="shopping_cart_container"]/a/span')).click();
        let verifyFirstItem = await driver.findElement(By.xpath('//*[@id="item_4_title_link"]/div')).getText().then(function(value){
            return value
        });
        assert.strictEqual(verifyFirstItem,"Sauce Labs Backpack");

        let verifySecondItem = await driver.findElement(By.xpath('//*[@id="item_0_title_link"]/div')).getText().then(function(value){
            return value
        });
        assert.strictEqual(verifySecondItem,"Sauce Labs Bike Light");

        let verifyThirdItem = await driver.findElement(By.xpath('//*[@id="item_1_title_link"]/div')).getText().then(function(value){
            return value
        });
        assert.strictEqual(verifyThirdItem,"Sauce Labs Bolt T-Shirt");

        let verifyFourthItem = await driver.findElement(By.xpath('//*[@id="item_5_title_link"]/div')).getText().then(function(value){
            return value
        });
        assert.strictEqual(verifyFourthItem,"Sauce Labs Fleece Jacket");

        let verifyFiftItem = await driver.findElement(By.xpath('//*[@id="item_2_title_link"]/div')).getText().then(function(value){
            return value
        });
        assert.strictEqual(verifyFiftItem,"Sauce Labs Onesie");

        let verifySixthItem = await driver.findElement(By.xpath('//*[@id="item_3_title_link"]/div')).getText().then(function(value){
            return value
        });
        assert.strictEqual(verifySixthItem,"Test.allTheThings() T-Shirt (Red)");
        await driver.close();
    })
    it('Add and remove all exisiting items to cart test', async function(){
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
        await driver.close();
    })
    it('Press about button in sidebar test', async function(){
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
            await driver.close();
        }
        setTimeout(awaitCss,1000)
    })
    it('Press inventory button in sidebar test', async function(){
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
            await driver.close();
        }
        setTimeout(awaitCss,1000)
    })
    it('Press reset app button in sidebar test', async function(){
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).click();
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
        await driver.findElement(By.id("react-burger-menu-btn")).click();
        async function awaitCss(){
            await driver.findElement(By.id("reset_sidebar_link")).click();
            //Verify that we are arrived on the select item page.
            await driver.findElement(By.name("add-to-cart-sauce-labs-backpack")).click();
            await driver.findElement(By.name("remove-sauce-labs-backpack")).click();
            await driver.close();
        }
        setTimeout(awaitCss,1000)
    })
    it('First sorting menu + screenshot test', async function(){
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).click();
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
        await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div[2]/span/select/option[1]')).click();
        await driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile('Screenshots/Selenium/SortingInventoryFirstImg.png', image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );
        await driver.close();
    })
    it('Second sorting menu + screenshot test', async function(){
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).click();
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
        await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div[2]/span/select/option[2]')).click();
        await driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile('Screenshots/Selenium/SortingInventorySecondImg.png', image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );
        await driver.close();
    })
    it('Third sorting menu + screenshot test', async function(){
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).click();
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
        await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div[2]/span/select/option[3]')).click();
        await driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile('Screenshots/Selenium/SortingInventoryThirdImg.png', image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );
        await driver.close();
    })
    it('Fourth sorting menu + screenshot test', async function(){
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).click();
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
        await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div[2]/span/select/option[4]')).click();
        await driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile('Screenshots/Selenium/SortingInventoryFourthImg.png', image, 'base64', function(err) {
                    //console.log(err);
                });
            }
        );
        await driver.close();
    })
    it('Continue shopping button test', async function(){
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).click();
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
        await driver.findElement(By.id('shopping_cart_container')).click();
        await driver.findElement(By.id('continue-shopping')).click();
        //Added interaction on item page to verify that we landed there correctly
        await driver.findElement(By.name("add-to-cart-sauce-labs-backpack")).click();
        await driver.close();
    })
    it('Checkout in shopping-cart button test', async function(){
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).click();
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
        await driver.findElement(By.id('shopping_cart_container')).click();
        await driver.findElement(By.id('checkout')).click();
        //Added interaction on item page to verify that we landed there correctly
        let getText = await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/span')).getText();
        let shouldBe = "CHECKOUT: YOUR INFORMATION"
        if(getText !== shouldBe) {
            console.log("Text does not match! Test FAILED");
            throw err;
        }
        else {
            await driver.close();
        }
    })

    it('Cancel in shopping-cart button test', async function(){
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).click();
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
        await driver.findElement(By.id('shopping_cart_container')).click();
        await driver.findElement(By.id('checkout')).click();
        await driver.findElement(By.id('cancel')).click();
        //Added interaction on item page to verify that we landed there correctly
        let getText = await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/span')).getText();
        let shouldBe = "YOUR CART"
        if(getText !== shouldBe) {
            console.log("Text does not match! Test FAILED");
            throw err;
        }
        else {
            await driver.close();
        }
    })
    it('Cancel in finish-page button test', async function(){
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).click();
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
        await driver.findElement(By.id('shopping_cart_container')).click();
        await driver.findElement(By.id('checkout')).click();
        await driver.findElement(By.id('continue')).click();
        //checking if error when you enter nothing
        await driver.findElement(By.xpath("//*[contains(text(), 'Error: First Name is required')]"));
        await driver.findElement(By.id('first-name')).sendKeys("Tester_firstName");
        await driver.findElement(By.id('last-name')).sendKeys("Tester_lastName");
        await driver.findElement(By.id('postal-code')).sendKeys("Tester_ZipCode");
        await driver.findElement(By.id('continue')).click();
        await driver.findElement(By.xpath("//*[contains(text(), 'FREE PONY EXPRESS DELIVERY!')]"));
        await driver.findElement(By.id('cancel')).click();
        //Verify that we are arrived on the select item page.
        await driver.findElement(By.name("add-to-cart-sauce-labs-backpack")).click();
        await driver.close();
    })
    it('Fully finish purchase test', async function(){
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).click();
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
        await driver.findElement(By.id('shopping_cart_container')).click();
        await driver.findElement(By.id('checkout')).click();
        await driver.findElement(By.id('continue')).click();
        //checking if error when you enter nothing
        await driver.findElement(By.xpath("//*[contains(text(), 'Error: First Name is required')]"));
        await driver.findElement(By.id('first-name')).sendKeys("Tester_firstName");
        await driver.findElement(By.id('last-name')).sendKeys("Tester_lastName");
        await driver.findElement(By.id('postal-code')).sendKeys("Tester_ZipCode");
        await driver.findElement(By.id('continue')).click();
        await driver.findElement(By.xpath("//*[contains(text(), 'FREE PONY EXPRESS DELIVERY!')]"));
        await driver.findElement(By.id('finish')).click();
        await driver.findElement(By.xpath("//*[contains(text(), 'THANK YOU FOR YOUR ORDER')]"));
        await driver.findElement(By.id("back-to-products")).click();
        //Verify that we are arrived on the select item page.
        await driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
        await driver.close();
    })
})


describe('Verify page content tests', function(){
    this.timeout(50000);
    beforeEach(function(){
        //before
    });
    afterEach(function() {
        //after
    })
    it('Standard user login test', async function(){
        let driver = await new Builder().forBrowser("chrome").build();
        const args = process.argv.slice(3);
        args.shift()
        await driver.get("https://www.saucedemo.com/");
        await driver.findElement(By.id("user-name")).click();
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");
        await driver.findElement(By.id("password")).sendKeys("secret_sauce",Key.RETURN)
        //added interaction on successful login to check that it worked
        await driver.findElement(By.name("add-to-cart-sauce-labs-backpack")).click();
        await driver.close();
    })

    it('Login credential check', async function(){
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
            throw err;
        }
        else if (passwordText !== "Password for all users:"){
            console.log("Password for all user text missmatch")
            throw err;
        }
        else {
            await driver.close();
        }
    })
    it('Username/password placeholder check', async function(){
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.saucedemo.com/");
        let placeholder_username = await driver.findElement(By.id('user-name')).getAttribute('placeholder');
        let placeholder_password = await driver.findElement(By.id('password')).getAttribute('placeholder');
        if (placeholder_username !== 'Username' || placeholder_password !== 'Password'){
            console.log("username/password placeholder text missmatch")
            throw err;
        }
        else {
        await driver.close();
        }
    })
})
