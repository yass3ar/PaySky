const { test, expect } = require('@playwright/test');
const { HomePage } = require('../Pages/HomePage');
const { AuthPage } = require('../Pages/AuthPage');
const { PurchasePage } = require('../Pages/PurchasePage');
const userData = require('../Data/userData.json');
const url = userData.url.baseURL

test('User can shop on practice software testing', async ({ page }) => {
        const homePage = new HomePage(page);
        const purchasePage = new PurchasePage(page);
        const authPage = new AuthPage(page);
        const { username, password } = userData.credentials;

        // navigate to website, choose a product and place an order
        await homePage.navigateTo(url);
        await authPage.login(username, password);
        if (await authPage.loginError.isVisible()) {
            const errorMessage = await authPage.loginError.textContent();
            if (errorMessage.includes('Invalid email or password')) {
              await authPage.signUp(username, password, userData.customerDetails);
            }
        }
        await homePage.selectProduct();
        await purchasePage.chooseProduct();
        await purchasePage.getToCart();
        await purchasePage.proceed();   
        await purchasePage.placeOrder(userData.customerDetails);

        // Verify order success
        await expect(page.locator('app-payment')).toContainText('Payment was successful');
        await purchasePage.confirmOrder();
        await expect(page.locator('#order-confirmation')).toContainText('Thanks for your order! Your invoice number is');

    });