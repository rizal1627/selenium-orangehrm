const fs = require('fs');
const path = require('path');

async function takeScreenshot(driver, testName) {
    const image = await driver.takeScreenshot();
    const dir = path.resolve(__dirname, '../reports/screenshot');

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    const safeName = testName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const filePath = path.join(dir, `${safeName}.png`);
    console.log("Screenshot saved:", filePath);

    fs.writeFileSync(filePath, image, 'base64');
}

module.exports = { takeScreenshot };
