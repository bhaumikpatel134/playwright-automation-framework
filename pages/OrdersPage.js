class OrdersPage {

    constructor(page) {

        this.page = page;
        this.ordersButton = page.locator('button[routerlink="/dashboard/myorders"]').first();
        this.orderRows = page.locator('[scope="row"]');
    }

    async goToOrders() {
        await this.ordersButton.click();
        await this.orderRows.first().waitFor();
    }
}

module.exports = { OrdersPage };