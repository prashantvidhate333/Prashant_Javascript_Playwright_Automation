import { test, expect } from "@playwright/test";

test("TC-001 Single Iframe", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Frames.html");
  await page.waitForTimeout(2000);
  await page.locator('[href="#Single"]').click();
  await page.waitForTimeout(2000);
  const iframe1 = await page.frameLocator('[id="singleframe"]');
  await iframe1.locator('input[type="text"]').fill("Prashant Vidhate");
  await page.waitForTimeout(2000);
  const name = await iframe1.locator('input[type="text"]').inputValue();
  expect(name).toBe("Prashant Vidhate");
  await page.waitForTimeout(2000);
});

test("TC-002 Multiple IFrame", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Frames.html");
  await page.waitForTimeout(2000);
  await page.locator('[href="#Multiple"]').click();
  await page.waitForTimeout(2000);
  const frame1 = await page.frameLocator('//div[@id="Multiple"]//iframe');
  const frameText = frame1.locator(
    '//div[@class="container iframes-page-container"]//div//h5',
  );
  await page.waitForTimeout(2000);
  await expect(frameText).toContainText("Nested iFrames");
  await page.waitForTimeout(2000);
});
//
