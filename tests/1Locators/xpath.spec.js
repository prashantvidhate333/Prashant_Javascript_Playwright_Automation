import { test, expect } from "@playwright/test";

let baseURL = "https://demo.automationtesting.in/Register.html";

test("TC-001 Xpath By Atrribute", async ({ page }) => {
  await page.goto(baseURL);
  await page.waitForTimeout(3000);
  await page.locator('//input[@placeholder="First Name"]').fill("Prashant");
  await page.locator('//input[@placeholder="Last Name"]').fill("Vidhate");
  await page.waitForTimeout(3000);
});

test("TC-002 Xpath by text", async ({ page }) => {
  await page.goto(baseURL);
  await page.waitForTimeout(3000);
  await page.locator('//input[@placeholder="First Name"]').fill("Prashant");
  await page.locator('//input[@placeholder="Last Name"]').fill("Vidhate");
  // xpath with text
  await page.locator('//button[text()="Refresh"]').click();
  await page.waitForTimeout(3000);
  const header = await page.locator('//h2[text()="Register"]');
  await expect(header).toBeVisible();
});

test("TC-003 Xpath by contains Attribute", async ({ page }) => {
  await page.goto(baseURL);
  await page
    .locator('//input[contains(@placeholder,"First")]')
    .fill("Prashant");
  await expect(page.locator('//div[@id="eid"]')).toHaveAttribute("id");
  await page.locator('//input[contains(@placeholder,"Last")]').fill("Vidhate");
  await page.waitForTimeout(3000);
});

test("TC-004 Xpath with contains text", async ({ page }) => {
  await page.goto(baseURL);
  await page.waitForTimeout(3000);
  await page.locator("//button[contains(text(),'Ref')]").click();
  await page.waitForTimeout(3000);
});

test("TC-005 Xpath with index", async ({ page }) => {
  await page.goto(baseURL);
  await page.waitForTimeout(3000);
  await page.locator('(//input[@name="radiooptions"])[1]').click();
  await expect(
    page.locator('(//input[@name="radiooptions"])[1]'),
  ).toBeChecked();
});
