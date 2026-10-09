import { test, expect } from "@playwright/test";
const baseURL = "https://testautomationpractice.blogspot.com/";

test("TC-001 Multi-Select Options from dropdown using value", async ({
  page,
}) => {
  await page.goto(baseURL);
  await page.waitForTimeout(2000);
  const colourDropdown = await page.locator("#colors");
  await colourDropdown.scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);
  const colourValues = [{ value: "red" }, { value: "green" }];
  await colourDropdown.selectOption(colourValues);
  await page.waitForTimeout(2000);
});

test.only("TC-002 Multi-Select Options from dropdown using label", async ({
  page,
}) => {
  await page.goto(baseURL);
  await page.waitForTimeout(2000);
  const animalDropdown = await page.locator("#animals");
  await animalDropdown.scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);
  const animalValues = [{ label: "Cat" }, { label: "Dog" }];
  await animalDropdown.selectOption(animalValues);
  await page.waitForTimeout(2000);
  // Verify selected options & count
  const selectedvalues = await animalDropdown
    .locator("option:checked")
    .allTextContents();
  const selectedvalueCount = await animalDropdown
    .locator("option:checked")
    .count();
  console.log(`Selected values : ${selectedvalues}`);
  console.log(`Selected count : ${selectedvalueCount}`);
  await expect(selectedvalues).toHaveLength(2);
  await expect(selectedvalueCount).toBeLessThanOrEqual(2);
});
