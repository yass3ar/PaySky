const { test, expect } = require('@playwright/test');

exports.PurchasePage = class PurchasePage {
    constructor(page) {
        this.page = page;
    }

    get addToCart() {
        return this.page.locator('[data-test="add-to-cart"]');
    }
    get cartBtn() {
        return this.page.locator('[data-test="nav-cart"]');
    }

    get firstProceedBtn() {
        return this.page.locator('[data-test="proceed-1"]');
    }

    get secondProceedBtn() {
        return this.page.locator('[data-test="proceed-2"]');
    }

    get thirdProceedBtn() {
        return this.page.locator('[data-test="proceed-3"]');    
    }

    get addressField() {
        return this.page.locator('[data-test="address"]');
    }
    
    
    get cityField() {
        return this.page.locator('[data-test="city"]');

    }

    get stateField() {
        return this.page.locator('[data-test="state"]');
    }

    get countryField() {
        return this.page.locator('[data-test="country"]');
    }

    get postcodeField() {
        return this.page.locator('[data-test="postcode"]');
    }

    get paymentMethodField() {
    return this.page.locator('[data-test="payment-method"]');
    }

    get purchaseButton() {
        return this.page.locator('[data-test="finish"]');
    }

    // Methods for interacting with the page
    async chooseProduct() {
        await this.addToCart.click();
    }
    async getToCart() {
        await this.page.waitForSelector('a[data-test="nav-cart"]', { state: 'visible', timeout: 5000 });
        await this.cartBtn.click();
    }
    async proceed() {
        await this.firstProceedBtn.click();    
    }
    async placeOrder(customerDetails) {
        await this.secondProceedBtn.click();
        await this.addressField.fill(customerDetails.address);
        await this.cityField.fill(customerDetails.city);
        await this.stateField.fill(customerDetails.state);
        await this.countryField.fill(customerDetails.country);
        await this.postcodeField.fill(customerDetails.postcode);
        await this.thirdProceedBtn.click();
        await this.paymentMethodField.selectOption('cash-on-delivery');
        await this.purchaseButton.click();
    }
    async confirmOrder(){
        await this.purchaseButton.click();
    }
};
