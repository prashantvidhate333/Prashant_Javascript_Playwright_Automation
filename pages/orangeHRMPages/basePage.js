export class BasePage {
  constructor(page) {
    this.page = page;
  }
  async click(locator) {
    await locator.click();
  }
  async getText(locator) {
    return (await locator.textContent())?.trim();
  }
}
