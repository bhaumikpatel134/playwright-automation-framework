const { test } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { OrdersPage } = require('../pages/OrdersPage');

test('Navigate to Orders Page', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const ordersPage = new OrdersPage(page);

    await loginPage.goTo();
    await loginPage.login('alexsmith77@example.com','Test@1234');
    await dashboardPage.addProductToCart('ZARA COAT 3');
    await cartPage.goToCart();
    await cartPage.checkout();
    await checkoutPage.selectCountry('Ind');
    await checkoutPage.fillPaymentDetails('02','27','123','Rahul Sharma','rahulshettyacademy');
    await checkoutPage.placeOrder();
    await ordersPage.goToOrders();
    await page.pause();
});