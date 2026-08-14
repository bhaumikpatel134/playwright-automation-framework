class LoginPage {

    constructor(page) {
        this.page = page;
        this.email = page.locator('#userEmail');
        this.password = page.locator('[type="password"]');
        this.loginButton = page.locator('input[value="Login"]');
    }

    async goTo() {
        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    }

    async login(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}

module.exports = { LoginPage };