exports.CartPage = class CartPage 
{
    constructor(page) 
    {
        this.page = page;
        this.productName = 'tr.success td:nth-child(2)'
    }

    async getProductName() {
        return await this.page.locator(this.productName).textContent()
    }
}