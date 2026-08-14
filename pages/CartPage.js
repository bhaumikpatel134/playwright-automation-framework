class CartPage {

    constructor(page) {
        this.page = page;
        this.cartButton = page.locator("button[routerlink='/dashboard/cart']");
        this.buyNowButton = page.locator('text= Buy Now');
    }
    async goToCart() {
        await this.cartButton.click();
    }
    async checkout() {
        await this.buyNowButton.click();
    }
}
module.exports = { CartPage };