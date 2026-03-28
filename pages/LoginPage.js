const { By } = require('selenium-webdriver');
const BasePage = require('./BasePage');
const config = require('../config/config');
// const env = require("../../config/env.config");

class LoginPage extends BasePage {

    constructor(driver) {
        super(driver);
        this.usernameField = By.name('username');
        this.passwordField = By.name('password');
        this.loginButton = By.css('button[type="submit"]');
        this.errorMessage = By.css('.oxd-alert-content-text');

        // this.driver = driver;
        // this.url = `${env.baseUrl}/web/index.php/auth/login`;
    }

    async open() {
        await this.visit(config.baseUrl);
        // await this.driver.get(this.url);
    }

    async login(username, password) {
        await this.waitForElement(this.usernameField);
        await this.driver.findElement(this.usernameField).sendKeys(username);
        await this.driver.findElement(this.passwordField).sendKeys(password);
        await this.driver.findElement(this.loginButton).click();
    }

    async getErrorMessage() {
        await this.waitForElement(this.errorMessage);
        return await this.driver.findElement(this.errorMessage).getText();
    }
}

module.exports = LoginPage;
