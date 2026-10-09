import { BasePage } from "./basePage";
import { expect } from "@playwright/test";

export class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.fName = page.locator("#first-name");
    this.lName = page.locator("#last-name");
    this.zipCode = page.locator("#postal-code");
    this.continueBtn = page.locator("#continue");
    this.totalAmtWithTax = page.locator("//div[text()='Total: $']");
    this.finishBtn = page.locator("#finish");
    this.confirmationMsg = page.locator("h2");
  }

  async fillCheckoutDetails(firstName, lastName, postalCode) {
    await this.fillText(this.fName, firstName);
    await this.fillText(this.lName, lastName);
    await this.fillText(this.zipCode, postalCode);
    await this.click(this.continueBtn);
  }

  async clickOnFinish() {
    await this.click(this.finishBtn);
  }

  async getConfirmationMsg() {
    return await this.getText(this.confirmationMsg);
  }
  async getTotalPrice() {
    await this.totalAmtWithTax.scrollIntoViewIfNeeded();
    return await this.getText(this.totalAmtWithTax);
  }
}
