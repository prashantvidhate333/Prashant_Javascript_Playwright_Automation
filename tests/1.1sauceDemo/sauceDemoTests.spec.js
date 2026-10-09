import { test, expect } from "@playwright/test";
import { BasePage } from "../../pages/sauceDemoPages/basePage";
import { InventoryPage } from "../../pages/sauceDemoPages/inventoryPage";
import { LoginPage } from "../../pages/sauceDemoPages/loginPage";
import { CartPage } from "../../pages/sauceDemoPages/cartPage";
import { CheckoutPage } from "../../pages/sauceDemoPages/checkout";

test("Sauce Demo Test Case", async ({ page }) => {
  // Create object for all POM's
  const baseClassObj = new BasePage(page);
  const loginClassObj = new LoginPage(page);
  const inventoryClassObj = new InventoryPage(page);
  const cartClassObj = new CartPage(page);
  const checkoutClassObj = new CheckoutPage(page);

  // Navigate to sauceDemo URL
  loginClassObj.navigateToURL();

  // Logged in into app
  loginClassObj.loginIntoApp("standard_user", "secret_sauce");
  await page.waitForTimeout(3000);

  // Verified Inventory page is opened
  inventoryClassObj.verifyInventoryPage();

  // Add Item into cart
  inventoryClassObj.addToCartItem("sauce-labs-backpack");
  await page.waitForTimeout(2000);
  inventoryClassObj.addToCartItem("sauce-labs-onesie");
  await page.waitForTimeout(2000);
  inventoryClassObj.clickOnCart();
  await page.waitForTimeout(2000);

  // Verified cart count
  cartClassObj.verifyItemCount("2");

  // Remove cart item & check Count
  cartClassObj.removeCartItem("sauce-labs-onesie");
  await page.waitForTimeout(3000);
  cartClassObj.verifyItemCount("1");

  // Go Back page & add 1 more item in cart & Verify count
  baseClassObj.goBackPage();
  inventoryClassObj.addToCartItem("sauce-labs-fleece-jacket");
  await page.waitForTimeout(2000);
  // Verified cart count
  baseClassObj.goForwardPage();
  await page.waitForTimeout(2000);
  cartClassObj.verifyItemCount("2");

  //Click On checkout btn
  cartClassObj.clickOnCheckout();

  // Fill Details On checkout page, Click on continue
  checkoutClassObj.fillCheckoutDetails("Virat", "Kohli", "112233");

  // Verify Total Price with Tax
  expect(await checkoutClassObj.getTotalPrice()).toContain("86.38");
  await page.waitForTimeout(3000);

  // Click on finish btn
  checkoutClassObj.clickOnFinish();

  // Verify Confirmation Text
  console.log(checkoutClassObj.confirmationMsg);
  expect(checkoutClassObj.confirmationMsg).toContainText(
    "Thank you for your order!",
  );
});
