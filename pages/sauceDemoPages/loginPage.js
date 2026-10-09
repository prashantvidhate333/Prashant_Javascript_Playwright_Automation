import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.userNameInput = page.locator("#user-name");
    this.passwordInput = page.locator("#password");
    this.loginBtn = page.locator("#login-button");
  }

  async navigateToURL() {
    await this.navigate("https://www.saucedemo.com/");
  }

  async loginIntoApp(username, password) {
    await this.userNameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.click(this.loginBtn);
  }
}
