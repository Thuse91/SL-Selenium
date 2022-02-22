const puppeteer = require('puppeteer');
  //await page.screenshot({ path: 'example.png' });

  var searchString = "Automation testing with Puppeteer";

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // browser version check
    await page.browser().version().then(function(version) {
    console.log(version);
  });
    await page.goto('https://www.saucedemo.com', { waitUntil: 'networkidle0' });
    await page.setViewport({width: 1920, height: 1080});
    await page.type("#user-name", "standard_user")
    await page.type("#password", "secret_sauce")
    await page.click("#login-button")
    await (await page.$('[name="add-to-cart-sauce-labs-backpack"]')).click()
    //await page.screenshot({ path: 'Screenshots/Puppeteer/example.png' });
    console.log('Title is: Swag Labs',searchString);
    console.log("First test - Swag Labs Standard Login")
    console.log("Test Passed")
    await browser.close();
})();
