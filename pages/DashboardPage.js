const { By } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class DashboardPage extends BasePage {

    constructor(driver) {
        super(driver);
        this.dashboardHeader = By.xpath("//h6[text()='Dashboard']");
    }

    async isDashboardDisplayed() {
        await this.waitForElement(this.dashboardHeader);
        return true;
    }
}

module.exports = DashboardPage;
