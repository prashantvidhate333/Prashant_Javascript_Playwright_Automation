import { test, expect } from "@playwright/test";

test("TC-001 Propmt Alert : Accept", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Alerts.html");
  await page.waitForTimeout(2000);
  await page.locator("//a[contains(text(), 'Alert with Textbox ')]").click();
  await page.waitForTimeout(2000);
  let passText = "My Name Is Virat";
  page.on("dialog", async (dialog) => {
    console.log(await dialog.message());
    console.log(await dialog.type());
    await dialog.accept(passText);
  });
  await page.waitForTimeout(2000);
  await page.locator('[onclick="promptbox()"]').click();
  await page.waitForTimeout(2000);
  await expect(await page.locator('[id="demo1"]')).toHaveText(
    `Hello ${passText} How are you today`,
  );
});

test("TC-001 Prompt Alert : Cancel", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Alerts.html");
  await page.waitForTimeout(2000);
  await page.locator("//a[contains(text(), 'Alert with Textbox ')]").click();
  await page.waitForTimeout(2000);
  page.on("dialog", async (dialog) => {
    console.log(await dialog.message());
    console.log(await dialog.type());
    await dialog.dismiss();
  });
  await page.waitForTimeout(2000);
  await page.locator('[onclick="promptbox()"]').click();
  await page.waitForTimeout(2000);
  await expect(await page.locator('[id="demo1"]')).toBeEmpty();
});

test("TC-002 Prompt Alert : Accept", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  await page.waitForTimeout(2000);
  let textEntered = "My Name Is Rohit";
  page.on("dialog", async (dialog) => {
    await page.waitForTimeout(2000);
    console.log(await dialog.message());
    console.log(await dialog.type());
    await dialog.accept(textEntered);
  });
  await page.waitForTimeout(2000);
  await page.locator('[onclick="jsPrompt()"]').click();
  await page.waitForTimeout(2000);
  await expect(await page.locator('[id="result"]')).toHaveText(
    `You entered: ${textEntered}`,
  );
});
