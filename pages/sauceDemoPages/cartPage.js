import { BasePage } from "./basePage";
import { expect } from "@playwright/test";
export class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.cartCount = page.locator('[data-test="shopping-cart-badge"]');
    this.checkoutBtn = page.locator("#checkout");
  }

  async removeCartItem(productName) {
    await this.click(this.page.locator(`#remove-${productName}`));
  }

  async verifyItemCount(expected) {
    await expect(this.cartCount).toHaveText(expected);
  }

  async clickOnCheckout() {
    await this.click(this.checkoutBtn);
  }
}
