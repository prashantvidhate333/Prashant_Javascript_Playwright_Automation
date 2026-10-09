import { test, expect } from "@playwright/test";

test("TC-001 Date Selection from calender", async ({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form");
  //   await page.locator("#dateOfBirthInput").click();
  //   await page.locator(".react-datepicker__month-select").selectOption("May");
  //   await page.locator(".react-datepicker__year-select").selectOption("1997");
  //   await page.locator("//div[text()='13']").click();
  //   await page.waitForTimeout(4000);
  //   await expect(page.locator("#dateOfBirthInput")).toHaveValue("13 May 1997");
  async function selectDate(page, year, month, date) {
    await page.locator("#dateOfBirthInput").click();
    await page.locator(".react-datepicker__month-select").selectOption(month);
    await page.locator(".react-datepicker__year-select").selectOption(year);
    await page.locator(`//div[text()=${date}]`).click();
  }
  selectDate(page, "1997", "May", "13");
  await page.waitForTimeout(4000);
  await expect(page.locator("#dateOfBirthInput")).toHaveValue("13 May 1997");
});
