import { test, expect } from "@playwright/test";
import path from "path";

test.only("TC-001 File Upload", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");
  await page.waitForTimeout(3000);
  // const filePath =
  //   "D:/Javascript_Projects/Playwright_Automation/testData/Assignment 6.pdf";
  const filePath = path.join(__dirname, "../../testData/Assignment 6.pdf");
  await page.locator('//input[@type="file"]').first().setInputFiles(filePath);
  await page.waitForTimeout(3000);
  await page.locator("#file-submit").click();
  await page.waitForTimeout(3000);
  await expect(await page.locator("h3")).toHaveText("File Uploaded!");
});

test("TC-002 File Upload", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.waitForTimeout(3000);
  // const filePath =
  //   "D:/Javascript_Projects/Playwright_Automation/testData/Assignment 6.pdf";
  const filePath = path.join(__dirname, "../../testData/Assignment 6.pdf");
  await page.locator('//input[@type="file"]').first().scrollIntoViewIfNeeded();
  await page.locator('//input[@type="file"]').first().setInputFiles(filePath);
  await page.waitForTimeout(5000);
  await page.locator('//button[@type="submit"]').first().click();
  await page.waitForTimeout(3000);
  await expect(await page.locator("#singleFileStatus")).toContainText(
    "Assignment 6.pdf",
  );
});
