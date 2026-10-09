import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.userNameInput = page.locator('[placeholder="Username"]');
    this.passwordInput = page.locator('[placeholder="Password"]');
    this.loginBtn = page.locator('[type="submit"]');
  }

  async navigateToURL() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  }

  async loginIntoApp(username, password) {
    await this.userNameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.click(this.loginBtn);
  }
}
