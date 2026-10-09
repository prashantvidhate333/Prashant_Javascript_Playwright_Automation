/*
test → Creates a test case.
async → Allows asynchronous operations inside the test.
page → Controls the browser tab.
await → Waits for each browser action to finish.
Promise → Returned by browser actions like goto(), click(), and fill().
expect → Verifies that the result is what you expect.
*/
import { test, expect } from "@playwright/test";
test("TC001", async ({ page }) => {
  await page.goto(
    "https://demo.automationtesting.in/Register.html#google_vignette",
  );
  await page.waitForTimeout(5000);
  await page.locator("//a[text()='Home']").click();
  await page.waitForTimeout(5000);
});

test("Test Tile", async ({ page }) => {
  await page.goto("https://www.facebook.com/");
  await expect(page).toHaveURL("https://www.facebook.com/");
});
