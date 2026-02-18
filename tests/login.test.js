const { expect } = require('chai');
const { createDriver } = require('../utils/driverFactory');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const loginData = require('../testData/loginData.json');
const { takeScreenshot } = require('../utils/screenshot');


describe("OrangeHRM Login Test Suite", function () {

    let driver;
    let loginPage;
    let dashboardPage;

    beforeEach(async function () {
        driver = await createDriver();
        loginPage = new LoginPage(driver);
        dashboardPage = new DashboardPage(driver);
        await loginPage.open();
    });

    afterEach(async function () {
        if (this.currentTest.state === 'failed') {
        await takeScreenshot(driver, this.currentTest.title);
        }
        await driver.quit();
    });

    loginData.forEach((data) => {

        it(`Login test with username: ${data.username}`, async function () {

            await loginPage.login(data.username, data.password);

            if (data.expected === "success") {
                const result = await dashboardPage.isDashboardDisplayed();
                expect(result).to.be.true;
            } else {
                const errorMsg = await loginPage.getErrorMessage();
                expect(errorMsg).to.include(data.expected);
            }
        });

    });

});
