const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Login using POM', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.login('Test123@mail.com','Test1234');
    await page.pause();
});