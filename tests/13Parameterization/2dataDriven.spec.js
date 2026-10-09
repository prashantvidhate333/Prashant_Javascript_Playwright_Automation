import { test, expect } from "@playwright/test";
import users from "../../testData/usersData.json";
/*
Parameterization : Execute same test with different test data
Data-Driven Testing : kept tests & test data seperately, use that test data using import
*/
for (const user of users) {
  test(`Parameterization : Data Driven Testing ${user.userName}`, async ({
    page,
  }) => {
    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    await page.getByPlaceholder("Username").fill(user.userName);
    await page.getByPlaceholder("Password").fill(user.password);
    await page.waitForTimeout(4000);
    await page.getByRole("button", { name: "Login" }).click();
    await page.waitForTimeout(4000);
    if (user.valid) {
      await expect(
        page.getByRole("heading", { name: "Dashboard" }),
      ).toBeVisible();
    } else {
      await expect(
        page.locator("//p[text()='Invalid credentials']"),
      ).toHaveText("Invalid credentials");
    }
  });
}
