const { test } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');
const { CartPage } = require('../pages/CartPage');

test('Add to cart and navigate to checkout', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const cartPage = new CartPage(page);
    await loginPage.goTo();
    await loginPage.login('alexsmith77@example.com','Test@1234');
    await dashboardPage.addProductToCart('ZARA COAT 3');
    await cartPage.goToCart();
    await cartPage.checkout();
});