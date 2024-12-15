const { test, expect } = require("@playwright/test");
exports.AuthPage = class AuthPage {
  constructor(page) {
    this.page = page;
  }

  // Lazy initialization of locators

  get registerLink() {
    return this.page.locator('[data-test="register-link"]');
  }

  get firstNameInput() {
    return this.page.locator('[data-test="first-name"]');
  }

  get lastNameInput() {
    return this.page.locator('[data-test="last-name"]');
  }

  get dobInput() {
    return this.page.locator('[data-test="dob"]');
  }

  get addressInput() {
    return this.page.locator('[data-test="address"]');
  }

  get postcodeInput() {
    return this.page.locator('[data-test="postcode"]');
  }

  get cityInput() {
    return this.page.locator('[data-test="city"]');
  }

  get stateInput() {
    return this.page.locator('[data-test="state"]');
  }

  get countrySelect() {
    return this.page.locator('[data-test="country"]');
  }

  get phoneInput() {
    return this.page.locator('[data-test="phone"]');
  }

  get emailInput() {
    return this.page.locator('[data-test="email"]');
  }

  get passwordInput() {
    return this.page.locator('[data-test="password"]');
  }

  get registerSubmitButton() {
    return this.page.locator('[data-test="register-submit"]');
  }

  get loginError() {
    return this.page.locator('[data-test="login-error"] div')
  }

  get signInBtn() {
    return this.page.locator('[data-test="nav-sign-in"]');
  }
  get loginUsernameField() {
    return this.page.locator('[data-test="email"]');
  }

  get loginPasswordField() {
    return this.page.locator('[data-test="password"]');
  }

  get loginSubmit() {
    return this.page.locator('[data-test="login-submit"]');
  }

  // Methods for interacting with the page

  async login(username, password) {
    await this.signInBtn.click();
    await this.loginUsernameField.fill(username);
    await this.loginPasswordField.fill(password);
    await this.loginSubmit.click();
  }
  async signUp(username,password,customerDetails) {
    await this.registerLink.click();
    await this.firstNameInput.fill(customerDetails.firstName);
    await this.lastNameInput.fill(customerDetails.lastName);
    await this.dobInput.fill(customerDetails.DOB);
    await this.dobInput.press("Enter");
    await this.addressInput.fill(customerDetails.address);
    await this.postcodeInput.fill(customerDetails.postcode);
    await this.cityInput.fill(customerDetails.city);
    await this.stateInput.fill(customerDetails.state);
    await this.countrySelect.selectOption(customerDetails.countrycode);
    await this.phoneInput.fill(customerDetails.phone);
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.registerSubmitButton.click();
  }
};
