class DashboardPage {

    constructor(page) {
        this.page = page;
        this.products = page.locator(".card-body");
    }

    async addProductToCart(productName) {
        await this.products.first().waitFor();
        const totalProducts = await this.products.count();

        for (let i = 0; i < totalProducts; i++) {

            const title = await this.products.nth(i).locator("b").textContent();

            if (title.trim() === productName) {

                await this.products.nth(i).locator("text=Add To Cart").click();

                break;
            }
        }
    }
}

module.exports = { DashboardPage };