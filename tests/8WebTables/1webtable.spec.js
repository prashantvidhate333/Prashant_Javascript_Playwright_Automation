import { test, expect } from "@playwright/test";

test("TC-001 Print Whole WebTable", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = await page.locator("//h2[contains(text(),'Static Web Table')]");
  await table.scrollIntoViewIfNeeded();
  // Verify row Count in webTable
  const rows = await page.locator('//table[@name="BookTable"]//tbody//tr');
  const rowCount = await rows.count();
  console.log("Row Count in webTable", rowCount);

  // Verify column Count in webTable
  const columns = await page.locator('//table[@name="BookTable"]//th');
  const columnCount = await columns.count();
  console.log("Column Count in webTable", columnCount);

  // To Print whole table data

  for (let i = 0; i < rowCount; i++) {
    const cells = rows.nth(i).locator("td");
    const cellsCount = await cells.count();
    const rowData = [];
    for (let j = 0; j < cellsCount; j++) {
      const text = await cells.nth(j).textContent();
      rowData.push(text ? text.trim() : "");
    }
    console.log(rowData.join(" | "));
  }
  await page.waitForTimeout(3000);
});
test.only("TC-002 Print Specific data from WebTable", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = await page.locator("//h2[contains(text(),'Static Web Table')]");
  await table.scrollIntoViewIfNeeded();
  // Verify row Count in webTable
  const rows = await page.locator('//table[@name="BookTable"]//tbody//tr');
  const rowCount = await rows.count();
  console.log("Row Count in webTable", rowCount);

  // Verify column Count in webTable
  const columns = await page.locator('//table[@name="BookTable"]//th');
  const columnCount = await columns.count();
  console.log("Column Count in webTable", columnCount);

  // To Print specific data from webTable
  const specificText = await page.locator(
    '//table[@name="BookTable"]//tbody//tr[2]//td[3]',
  );
  console.log(await specificText.innerText());

  await page.waitForTimeout(3000);
});
