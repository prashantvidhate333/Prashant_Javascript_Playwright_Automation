import { test, expect } from "@playwright/test";

const userData = [
  { username: "standard_user", password: "secret_sauce", isValid: true },
  { username: "problem_user", password: "secret_sauce", isValid: true },
  { username: "wrong", password: "secret_sauce", isValid: false },
];

for (const user of userData) {
  test(`Parameterization ${user.username}`, async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill(user.username);
    await page.locator("#password").fill(user.password);
    await page.waitForTimeout(3000);
    await page.locator("#login-button").click();
    await page.waitForLoadState("load");
    await page.waitForTimeout(3000);
    if (user.isValid) {
      await expect(page).toHaveURL(/inventory/);
    } else {
      await expect(page.locator("h3")).toContainText(
        "Username and password do not match",
      );
    }
  });
}
