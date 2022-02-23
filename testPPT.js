const puppeteer = require('puppeteer');
  //await page.screenshot({ path: 'example.png' });
  var searchString = "Automation testing with Puppeteer";
  // save code, good 2 know
  //const found = await page.evaluate(() => window.find("Epic"));

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

(async ()=> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com', { waitUntil: 'networkidle0' });
  await page.setViewport({width: 1920, height: 1080});
  await page.type("#user-name","locked_out_user");
  await page.type("#password","secret_sauce");
  await page.click("#login-button");
  //Verify that locked out login popped up
  await page.waitForFunction(
    'document.querySelector("#login_button_container > div > form > div.error-message-container.error > h3").innerText.includes("Epic")'
  );
  //console.log(found)
  console.log('Title is: Swag Labs',searchString);
  console.log("Second test - Swag Labs Locked Login")
  console.log("Test Passed")
  //page.close , closes the browser remaining from the test.
  await browser.close();
})();

(async ()=> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com', { waitUntil: 'networkidle0' });
  await page.type("#user-name","problem_user");
  await page.type("#password","secret_sauce")
  await page.click("#login-button");
  //added interaction on successful login to check that it worked
  await page.click("#add-to-cart-sauce-labs-backpack")
  console.log('Title is:',searchString);
  console.log("Third test - Swag Labs Problem Login")
  console.log("Test Passed")
  //browser.close , closes the browser remaining from the test.
  await browser.close();
})();

(async ()=> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com', { waitUntil: 'networkidle0' });
  await page.type("#user-name","performance_glitch_user");
  await page.type("#password","secret_sauce")
  await page.click("#login-button");
  //added interaction on successful login to check that it worked
  await page.click("#add-to-cart-sauce-labs-backpack");
  console.log('Title is:',searchString);
  console.log("Fourth test - Swag Labs Glitched Login")
  console.log("Test Passed")
  //browser.close() , closes the browser remaining from the test.
  await browser.close();
})();

(async ()=> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com', { waitUntil: 'networkidle0' });
  await page.type("#user-name","standard_user");
  await page.type("#password","secret_sauce")
  await page.click("#login-button");
  await page.click("#react-burger-menu-btn");
  async function awaitCss(){
      await page.click("#logout_sidebar_link");
      //Verify that we are back at the login-screen by pressing the login-button
      await page.click("#login-button");
      console.log('Title is:',searchString);
      console.log("Fourth test - Swag Labs Glitched Login")
      console.log("Test Passed")
     //browser.close() , closes the browser remaining from the test.
     await browser.close();
  }
  setTimeout(awaitCss,1000)
})();

// UI functionality test (Standrad_user)
(async ()=> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com', { waitUntil: 'networkidle0' });
  await page.type("#user-name","standard_user");
  await page.type("#password","secret_sauce")
  await page.click("#login-button");
  //added interaction on successful login to check that it worked
  await page.click("#add-to-cart-sauce-labs-backpack");
  await page.click("#add-to-cart-sauce-labs-bike-light");
  await page.click("#add-to-cart-sauce-labs-bolt-t-shirt");
  await page.click("#add-to-cart-sauce-labs-fleece-jacket");
  await page.click("#add-to-cart-sauce-labs-onesie");
  await page.$x('//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]')
  console.log('Title is:',searchString);
  console.log("Fifth test - Swag Labs Standard Login")
  console.log("Test Passed")
  //browser.close() , closes the browser remaining from the test.
  await browser.close();
})();

(async ()=> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com', { waitUntil: 'networkidle0' });
  await page.type("#user-name","standard_user");
  await page.type("#password","secret_sauce")
  await page.click("#login-button");
  //added interaction on successful login to check that it worked
  await page.click("#add-to-cart-sauce-labs-backpack");
  await page.click("#remove-sauce-labs-backpack");
  await page.click("#add-to-cart-sauce-labs-bike-light");
  await page.click("#remove-sauce-labs-bike-light");
  await page.click("#add-to-cart-sauce-labs-bolt-t-shirt");
  await page.click("#remove-sauce-labs-bolt-t-shirt");
  await page.click("#add-to-cart-sauce-labs-fleece-jacket");
  await page.click("#remove-sauce-labs-fleece-jacket");
  await page.click("#add-to-cart-sauce-labs-onesie");
  await page.click("#remove-sauce-labs-onesie");
  await page.$x('//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]')
  await page.$x('//*[@id="remove-test.allthethings()-t-shirt-(red)"]')
  console.log('Title is:',searchString);
  console.log("Sixth test - Swag Labs Standard Login")
  console.log("Test Passed")
  ///browser.close() , closes the browser remaining from the test.
  await browser.close();
})();

(async ()=> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com', { waitUntil: 'networkidle0' });
  await page.type("#user-name","standard_user");
  await page.type("#password","secret_sauce")
  await page.click("#login-button");
  await page.click("#react-burger-menu-btn");
  //added interaction on successful login to check that it worked
  async function awaitCss(){
      await page.click("#about_sidebar_link");
      //Verify that we are arrived on the about page.
      await page.$x('//*[@id="headerMainNav"]/div/nav/div/a');
      console.log('Title is:',searchString);
      console.log("Seventh test - Swag Labs Standard Login")
      console.log("Test Passed")
      //browser.close() , closes the browser remaining from the test.
      await browser.close();
  }
  setTimeout(awaitCss,1000)
})();

(async ()=> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com', { waitUntil: 'networkidle0' });
  await page.type("#user-name","standard_user");
  await page.type("#password","secret_sauce")
  await page.click("#login-button");
  await page.click("#shopping_cart_container");
  await page.click("#react-burger-menu-btn");
  //added interaction on successful login to check that it worked
  async function awaitCss(){
      await page.click("#inventory_sidebar_link");
      //Verify that we are arrived on the select item page.
      await page.click("#add-to-cart-sauce-labs-backpack");
      await page.click("#remove-sauce-labs-backpack");
      console.log('Title is:',searchString);
      console.log("Seventh test - Swag Labs Standard Login")
      console.log("Test Passed")
      //browser.close(), closes the browser remaining from the test.
      await browser.close();
  }
  setTimeout(awaitCss,1000)
})();
