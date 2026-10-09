import { test, expect } from "@playwright/test";

const twoSec = 2000;
test("TC-001 RedBus ", async ({ page }) => {
  await page.goto("https://www.redbus.in/");
  await page.waitForTimeout(twoSec);
  await page.getByRole("combobox", { name: "From" }).fill("Pune");
  await page.waitForTimeout(twoSec);
  await page.waitForLoadState("domcontentloaded");
  const suggestedOptions = await page.locator(
    '//div[@aria-label="Search suggestions list"]//div//div[@role="button"]',
  );
  await page.waitForTimeout(twoSec);
  await page.waitForLoadState("domcontentloaded");
  const suggestedAllText = await suggestedOptions.allTextContents();
  console.log(suggestedAllText);
  await page.waitForTimeout(twoSec);
  for (let i = 0; i <= suggestedAllText.length - 1; i++) {
    // remove extra spaces
    const finalSuggestText = suggestedAllText[i].trim();
    if (finalSuggestText.toLowerCase().includes("wakad, pune")) {
      await suggestedOptions.nth(i).click();
      break;
    }
  }
  await page.getByRole("combobox", { name: "To" }).fill("Karad");
  await page.waitForTimeout(twoSec);
  await page.waitForLoadState("domcontentloaded");
  const toSuggestedOption = await page.locator(
    '//div[@aria-label="Search suggestions list"]//div[@role="button"]',
  );
  await page.waitForLoadState("domcontentloaded");
  const toSuggestedAllText = await toSuggestedOption.allTextContents();
  for (let i = 0; i <= toSuggestedAllText.length - 1; i++) {
    const finalToSuggestedText = toSuggestedAllText[i].trim();
    if (finalToSuggestedText.toLowerCase().includes("karad")) {
      toSuggestedOption.nth(i).click();
      break;
    }
  }
  await page.getByRole("button", { name: "Search buses" }).click();
  await page.waitForTimeout(5000);
  await page.waitForLoadState("domcontentloaded");
  await page
    .getByRole("button", {
      name: "Konduskar Travels Pvt. Ltd, Volvo 9600 A/C Seater (2+2). Departs 15:15, arrives",
    })
    .getByLabel("View seats for Konduskar")
    .click();
  await page.waitForTimeout(6000);
});
