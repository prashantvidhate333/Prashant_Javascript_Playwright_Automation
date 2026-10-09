import { test, expect } from "@playwright/test";

test("TC-001 Simple Alert", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  await page.waitForTimeout(2000);
  page.on("dialog", async (dialog) => {
    console.log(await dialog.type());
    console.log(await dialog.message());
    await expect(await dialog.message()).toBe("I am a JS Alert");
    await page.waitForTimeout(3000);
    await dialog.accept();
  });
  page.locator('//button[@onclick="jsAlert()"]').click();
  await expect(page.locator('[id="result"]')).toHaveText(
    "You successfully clicked an alert",
  );
});

test("TC-002 Simple Alert", async ({ page }) => {
  await page.goto(
    "https://demo.automationtesting.in/Alerts.html#google_vignette",
  );
  await page.waitForTimeout(2000);
  await page.locator("//a[text()='Alert with OK ']").click();
  page.on("dialog", async (dialog) => {
    console.log(await dialog.message());
    console.log(await dialog.type());
    await page.waitForTimeout(2000);
    await dialog.accept();
  });
  await page.locator('[onclick="alertbox()"]').click();
  await page.waitForTimeout(2000);
});
