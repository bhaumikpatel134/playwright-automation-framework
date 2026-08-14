const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');

test('Add product to cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await loginPage.goTo();
    await loginPage.login('alexsmith77@example.com','Test@1234');
    await dashboardPage.addProductToCart('ZARA COAT 3');
    await page.pause();
});