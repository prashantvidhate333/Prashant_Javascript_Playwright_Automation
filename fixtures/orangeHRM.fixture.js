import { BasePage } from "../pages/orangeHRMPages/basePage";
import { LoginPage } from "../pages/orangeHRMPages/loginPage";
import { DashBoardPage } from "../pages/orangeHRMPages/dashboardPage";
import { PimPage } from "../pages/orangeHRMPages/pimPage";
import { test as base, expect } from "@playwright/test";

const test = base.extend({
  loginPageFix: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  loginPageFixture: async ({ page, loginPageFix }, use) => {
    await loginPageFix.navigateToURL();
    await loginPageFix.loginIntoApp("Admin", "admin123");
    await page.waitForTimeout(2000);
    await use(loginPageFix);
  },

  dashBoardPageFix: async ({ page }, use) => {
    await use(new DashBoardPage(page));
  },

  dashBoardPageFixture: async ({ page, dashBoardPageFix }, use) => {
    await dashBoardPageFix.verifyDashboardOpen();
    await page.waitForTimeout(2000);
    await use(dashBoardPageFix);
  },

  pimPageFix: async ({ page }, use) => {
    await use(new PimPage(page));
  },

  pimPageFixture: async ({ page, pimPageFix }, use) => {
    const randomNumber = Math.floor(1000 + Math.random() * 9000).toString();
    console.log(randomNumber);
    await pimPageFix.openPim();
    await pimPageFix.openAddEmp();
    await pimPageFix.addEmpDetails("Bharat", "Ram", "Vidhate", randomNumber);
    await page.waitForTimeout(2000);
    await use(pimPageFix);
  },
});
export { test, expect };
