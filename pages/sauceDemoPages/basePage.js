export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async click(locator) {
    await locator.click();
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async goBackPage() {
    await this.page.goBack();
  }

  async goForwardPage() {
    await this.page.goForward();
  }

  async fillText(locator, text) {
    await locator.fill(text);
  }

  async getText(locator) {
    return (await locator.textContent())?.trim();
  }
}
