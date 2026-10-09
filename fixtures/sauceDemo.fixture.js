import { test as base, expect } from "@playwright/test";
import { BasePage } from "../pages/sauceDemoPages/basePage";
import { LoginPage } from "../pages/sauceDemoPages/loginPage";
import { CartPage } from "../pages/sauceDemoPages/cartPage";
import { InventoryPage } from "../pages/sauceDemoPages/inventoryPage";
import { CheckoutPage } from "../pages/sauceDemoPages/checkout";

const test = base.extend({
  loginPageFix: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  loginPageFixture: async ({ page, loginPageFix }, use) => {
    await loginPageFix.navigateToURL();
    await loginPageFix.loginIntoApp("standard_user", "secret_sauce");
    await page.waitForTimeout(2000);
    await use(loginPageFix);
  },
});

export { test, expect };
