const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');
const config = require('../config/config');

async function createDriver() {
    // return await new Builder().forBrowser(config.browser).build();
    let options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');
    return await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    
}

module.exports = { createDriver };
