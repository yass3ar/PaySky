const {test, expect} = require('@playwright/test')

exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
    }
    get homePage() {
        return this.page.locator('[data-test="nav-home"]');
    }
    get productSelector() {
        return this.page.locator("xpath=//*/h5[@data-test='product-name' and contains(text(), 'Combination Pliers')]");
    }
    async navigateTo(url) {
        await this.page.goto(url);
    }
    async selectProduct() {
        await this.homePage.click();
        await this.productSelector.click();
    }
}