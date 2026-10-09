import { test, expect } from "@playwright/test";
import path from "node:path";

test("TC-001 Page Screenshot", async ({ page }) => {
  await page.goto("https://www.facebook.com/");
  await page.waitForTimeout(3000);
  await page.screenshot({ path: "Screenshot/TC0012.png" });
});
