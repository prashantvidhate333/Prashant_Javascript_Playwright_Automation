import { BasePage } from "./basePage";
import { expect } from "@playwright/test";
export class DashBoardPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.dashboardText = page.locator("h6");
  }
  async verifyDashboardOpen() {
    expect(await this.dashboardText).toHaveText("Dashboard");
  }
}
