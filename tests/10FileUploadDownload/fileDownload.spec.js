import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";
import { PDFParse } from "pdf-parse";

test("TC-001 File Download", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/download");

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.locator('[href="download/LambdaTest.txt"]').click(),
    page.waitForTimeout(3000),
  ]);

  // Get Downloaded fileName
  const fileName = download.suggestedFilename();
  console.log(`Downloaded file name is : ${fileName}`);
  // Validate file name
  await expect(fileName).toBe("LambdaTest.txt");

  // Create download path
  const downloadPath = path.join("downloads", fileName);
  //Save downloaded file
  await download.saveAs(downloadPath);
  console.log("File Saved At :", downloadPath);
  // Validate file exists
  expect(fs.existsSync(downloadPath)).toBeTruthy();
});

test.only("TC-002 Download Files", async ({ page }, testInfo) => {
  await page.goto("https://the-internet.herokuapp.com/download");

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.locator('[href="download/Assignment 6.pdf"]').click(),
    page.waitForTimeout(3000),
  ]);
  // Get Downloaded fileName
  const fileName = download.suggestedFilename();
  // Validate file name
  await expect(fileName).toBe("Assignment 6.pdf");
  // Create download path

  const downloadPath = path.join("download", fileName);
  //Save downloaded file
  await download.saveAs(downloadPath);
  // Validate file exists
  await expect(fs.existsSync(downloadPath)).toBeTruthy;

  // Read the PDF file as a Buffer
  const pdfBuffer = fs.readFileSync(downloadPath);
  // Create PDF parser
  const parser = new PDFParse({
    data: pdfBuffer,
  });
  const result = await parser.getText();
  // Validate total number of pages
  expect(result.total).toBe(4);
  if (testInfo.status === "passed") {
    console.log(`✅ PASSED: ${testInfo.title}`);
  } else if (testInfo.status === "failed") {
    console.log(`❌ FAILED: ${testInfo.title}`);
    // Take screenshot on failure for debugging
    await page.screenshot({ path: `failures/${testInfo.title}.png` });
  }
});
