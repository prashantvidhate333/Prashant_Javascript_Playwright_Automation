import { BasePage } from "./basePage";
import { expect } from "@playwright/test";

export class InventoryPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.productText = page.locator('[data-test="title"]');
    this.cartSection = page.locator('[data-test="shopping-cart-link"]');
    this.addToCartBtn = page.locator(`#add-to-cart-sauce-labs-backpack`);
  }

  async verifyInventoryPage() {
    await expect(this.productText).toHaveText("Products");
    await expect(this.cartSection).toBeVisible();
  }

  async addToCartItem(productName) {
    await this.click(this.page.locator(`#add-to-cart-${productName}`));
  }

  async clickOnCart() {
    await this.click(this.cartSection);
  }
}
