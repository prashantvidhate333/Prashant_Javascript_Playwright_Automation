import { test, expect } from "@playwright/test";

test("TC-001 Full Page Screenshot", async ({ page }) => {
  await page.goto("https://www.facebook.com/");
  await page.waitForTimeout(3000);
  await page.screenshot({ path: "Screenshot/fullPage1.png", fullPage: true });
});
