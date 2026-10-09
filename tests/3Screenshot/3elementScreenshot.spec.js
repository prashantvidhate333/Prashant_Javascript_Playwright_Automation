import { test, expect } from "@playwright/test";

test("TC-001 Element Screenshot", async ({ page }) => {
  await page.goto("https://www.facebook.com/");
  await page.waitForTimeout(3000);
  await page
    .locator("#login_form")
    .screenshot({ path: "Screenshot/element.png" });
});
