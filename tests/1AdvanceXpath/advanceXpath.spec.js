import { test, expect } from "@playwright/test";

test("TC-001 Advance Xpath", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");
  await page.waitForTimeout(5000);
  await page
    .locator('//input[@placeholder="Search for Products, Brands and More"]')
    .first()
    .fill("samsung mobiles");
  await page.waitForTimeout(5000);
  await page.locator("//span[text()='samsung mobiles']").first().click();
  await page.waitForTimeout(5000);
  await expect(
    page.locator(
      "//div[text()='Samsung Galaxy A06 5G (Light Gray, 64 GB)']//..//following-sibling::div//div[text()='Bank Offer']",
    ),
  ).toHaveText("Bank Offer");
});
test("TC-002 Advance Xpath", async ({ page }) => {
  await page.goto("https://www.amazon.in/ref=nav_logo");
  await page.locator('//input[@id="twotabsearchtextbox"]').fill("laptop");
  //   await page.waitForEvent("load");
  await page.waitForTimeout(4000);
  await page.locator('[aria-label="laptop stand metal"]').click();
  await page.waitForTimeout(4000);
  const text = await page
    .locator(
      '//h2[contains(@aria-label,"Sponsored Ad - Dyazo")]//..//..//following-sibling::div//span[text()="Add to cart"]',
    )
    .innerText();
  console.log(text);
  await expect(
    page.locator(
      '//h2[contains(@aria-label,"Sponsored Ad - Dyazo")]//..//..//following-sibling::div//span[text()="Add to cart"]',
    ),
  ).toHaveText("Add to cart");
});
