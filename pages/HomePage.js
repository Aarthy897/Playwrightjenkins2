exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;
        this.productList = '//div[@id="tbodyid"]//div/h4/a';
        this.addToCartBtn = '//a[text()="Add to cart"]';
        this.cart = '#cartur';
    }


    async addProductToCart(productName) {

        const product = this.page.locator(this.productList, {
        hasText: productName
        });

        await product.first().click(); // always fresh element


        this.page.once('dialog', async dialog => {
            if (dialog.message().includes('Product added')) {
                await dialog.accept();
            }
        });

        await this.page.locator(this.addToCartBtn).click();
    }

async goToCart(){
        await this.page.locator(this.cart).click();
    }
}
