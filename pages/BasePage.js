const { until } = require('selenium-webdriver');
const config = require('../config/config');

class BasePage {
    constructor(driver) {
        this.driver = driver;
    }

    async visit(url) {
        await this.driver.get(url);
    }

    async waitForElement(locator) {
        await this.driver.wait(until.elementLocated(locator), config.timeout);
    }
}

module.exports = BasePage;
