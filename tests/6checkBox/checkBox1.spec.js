import { test, expect } from "@playwright/test";

test("TC-001 CheckBox Checked", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.waitForTimeout(3000);
  await page.locator('[id="tuesday"]').check();
  await page.waitForTimeout(3000);
  await expect(page.locator('[id="tuesday"]')).toBeChecked();
  await page.locator('[id="tuesday"]').uncheck();
  await page.waitForTimeout(3000);
  await expect(page.locator('[id="tuesday"]')).not.toBeChecked();
  await page.locator('[id="wednesday"]').check();
  await page.waitForTimeout(3000);
  await page.locator('[id="friday"]').check();
  await page.waitForTimeout(3000);
  await expect(page.locator('[id="wednesday"]')).toBeChecked();
  await expect(page.locator('[id="friday"]')).toBeChecked();
});
test.only("TC-002 Radio Button Checked", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.waitForTimeout(3000);
  await page.locator('[id="male"]').click();
  await page.waitForTimeout(3000);
  await expect(page.locator('[id="male"]')).toBeChecked();
});
