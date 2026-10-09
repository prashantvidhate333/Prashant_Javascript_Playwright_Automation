import { test, expect } from "@playwright/test";

test("TC-001 iFrame handling", async ({ page }) => {
  await page.goto(
    "https://www.w3schools.com/js/tryit.asp?filename=tryjs_myfirst",
  );
  await page.waitForTimeout(2000);
  const frame1 = await page.frameLocator('[name="iframeResult"]');
  await frame1
    .locator("//button[contains(text(), 'Click me to display')]")
    .click();
  await page.waitForTimeout(2000);
  await expect(await frame1.locator('[id="demo"]')).toContainText(
    "(India Standard Time)",
  );
});
