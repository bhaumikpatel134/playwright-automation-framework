class CheckoutPage {

    constructor(page) {
        this.page = page;
        this.country = page.locator('[placeholder="Select Country"]');
        this.month = page.locator('select.input.ddl').first();
        this.year = page.locator('select.input.ddl').last();
        this.cvv = page.locator('input.input.txt').nth(1);
        this.nameOnCard = page.locator('input.input.txt').nth(2);
        this.coupon = page.locator('input.input.txt').nth(3);
        this.placeOrderButton = page.locator('.btnn.action__submit');
    }

    async selectCountry(countryName) {
        await this.country.click();
        await this.country.pressSequentially(countryName);
        await this.page.locator('.ta-item.list-group-item.ng-star-inserted').nth(1).click();
    }

    async fillPaymentDetails(month,year,cvv,name,coupon) {
        await this.month.selectOption(month);
        await this.year.selectOption(year);
        await this.cvv.fill(cvv);
        await this.nameOnCard.fill(name);
        await this.coupon.fill(coupon);
    }

    async placeOrder() {
        await this.placeOrderButton.click();
    }
}

module.exports = { CheckoutPage };