import { test, expect } from "@playwright/test";

let baseURL = "https://testautomationpractice.blogspot.com/";

test("TC-001 CSS with id", async ({ page }) => {
  await page.goto(baseURL);
  await page.locator("#name").fill("Prashant");
  await page.locator("#sunday").click();
  await page.waitForTimeout(3000);
  await expect(page.locator("#sunday")).toBeChecked();
});

test("TC-002 CSS Tagname with id", async ({ page }) => {
  await page.goto(baseURL);
  await page.locator("input#email").fill("prashant@gmail.com");
  await page.locator("textarea#textarea").fill("Address for form");
  await page.waitForTimeout(3000);
});

test("TC-003 CSS Attribute", async ({ page }) => {
  await page.goto(baseURL);
  await page.locator('[placeholder="Enter Name"]').fill("Prashant");
  await page.waitForTimeout(3000);
});

test("TC-004 CSS Attribute with Tagname", async ({ page }) => {
  await page.goto(baseURL);
  await page.locator('input[placeholder="Enter Name"]').fill("Prashant");
  await page
    .locator('input[placeholder="Enter EMail"]')
    .fill("Prashant@gmail.com");
  await page.waitForTimeout(3000);
});

test("TC-005 CSS class", async ({ page }) => {
  await page.goto(baseURL);
  await expect(await page.locator(".description").first()).toBeVisible();
  await page.waitForTimeout(3000);
});

test("TC-006 CSS class with tagname", async ({ page }) => {
  await page.goto(baseURL);
  await expect(await page.locator("p.description")).toBeVisible();
  await page.waitForTimeout(3000);
});
