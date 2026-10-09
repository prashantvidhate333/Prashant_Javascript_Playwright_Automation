import { test, expect } from "@playwright/test";

test("TC-001 Single select value from dropdown", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  const countryValues = await page.locator("#Skills");
  // select by value
  await page.waitForTimeout(3000);
  await countryValues.selectOption({ value: "Engineering" });
  // select by label
  await page.waitForTimeout(3000);
  await countryValues.selectOption({ label: "iPhone" });
  // select by index
  await page.waitForTimeout(3000);
  await countryValues.selectOption({ index: 1 });
  await page.waitForTimeout(3000);
});

test("TC-002 Select Year/Month/Day from dropdown using function", async ({
  page,
}) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  await page.waitForTimeout(2500);
  await page.getByPlaceholder("First Name").fill("Prashant");
  await expect(
    await page.getByPlaceholder("First Name").inputValue(),
  ).toContain("Prashant");
  const yearDropdown = await page.getByPlaceholder("Year");
  const monthDropdown = await page.getByPlaceholder("Month");
  const dayDropdown = await page.getByPlaceholder("Day");
  await expect(yearDropdown).toBeVisible();
  await expect(monthDropdown).toBeVisible();
  await expect(dayDropdown).toBeVisible();
  await page.waitForTimeout(2500);
  await page.getByPlaceholder("Year").scrollIntoViewIfNeeded();
  async function selectValueFromDropdown(locator, value) {
    locator.selectOption(value);
  }
  const date = "1997/May/13";
  const [yearValue, monthValue, dayValue] = date.split("/");
  selectValueFromDropdown(yearDropdown, yearValue);
  await page.waitForTimeout(2500);
  const selectedYear = await yearDropdown.inputValue();
  console.log(`-------${selectedYear}------------`);
  selectValueFromDropdown(monthDropdown, monthValue);
  await page.waitForTimeout(2500);
  selectValueFromDropdown(dayDropdown, dayValue);
  await page.waitForTimeout(2500);
  await expect(yearDropdown).toHaveValue(yearValue);
  await expect(monthDropdown).toHaveValue(monthValue);
  await expect(dayDropdown).toHaveValue(dayValue);
  // PRINT AVAILABLE MONTH OPTIONS
  const monthOptions = await monthDropdown.locator("option").allTextContents();
  console.log("Available Months :", monthOptions);
  console.log("Total Months :", monthOptions.length);
  console.log("--".repeat(25));
});
