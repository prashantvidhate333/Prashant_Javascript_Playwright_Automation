import { test, expect } from "@playwright/test";

test("TC-001 Confirmation Alert : Accept", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  await page.waitForTimeout(2000);
  page.on("dialog", async (dialog) => {
    console.log(await dialog.message());
    console.log(await dialog.type());
    await page.waitForTimeout(2000);
    await dialog.accept();
  });
  await page.locator('[onclick="jsConfirm()"]').click();
  await page.waitForTimeout(2000);
  const result = await page.locator('[id="result"]');
  await expect(result).toHaveText("You clicked: Ok");
});

test("TC-001 Confirmation Alert : Cancel", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  await page.waitForTimeout(2000);
  page.on("dialog", async (dialog) => {
    console.log(await dialog.message());
    console.log(await dialog.type());
    await page.waitForTimeout(2000);
    await dialog.dismiss();
  });
  await page.locator('[onclick="jsConfirm()"]').click();
  await page.waitForTimeout(2000);
  const result = await page.locator('[id="result"]');
  await expect(result).toHaveText("You clicked: Cancel");
});

test("TC-002 Confirmation Alert : Accept", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Alerts.html");
  await page.waitForTimeout(2000);
  await page.locator("//a[contains(text(), 'OK & Cancel ')]").click();
  await page.waitForTimeout(2000);
  page.on("dialog", async (dialog) => {
    console.log(await dialog.message());
    console.log(await dialog.type());
    await page.waitForTimeout(2000);
    await dialog.accept();
  });
  await page.locator('[onclick="confirmbox()"]').click();
  await page.waitForTimeout(2000);
  await expect(await page.locator('[id="demo"]')).toHaveText("You pressed Ok");
});
test("TC-002 Confirmation Alert : Cancel", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Alerts.html");
  await page.waitForTimeout(2000);
  await page.locator("//a[contains(text(), 'OK & Cancel ')]").click();
  await page.waitForTimeout(2000);
  page.on("dialog", async (dialog) => {
    console.log(await dialog.message());
    console.log(await dialog.type());
    await page.waitForTimeout(2000);
    await dialog.dismiss();
  });
  await page.locator('[onclick="confirmbox()"]').click();
  await page.waitForTimeout(2000);
  await expect(await page.locator('[id="demo"]')).toHaveText(
    "You Pressed Cancel",
  );
});
/*
setTimeout(()=>{
  debugger, 1000
  })
*/
