import { test, expect } from "@playwright/test";

test("TC-001 Window Handling", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Windows.html");

  // 1. Verify Title & URL of page
  console.log(await page.title());
  console.log(await page.url());
  await expect(page).toHaveTitle(/Frames & windows/);
  await expect(page).toHaveURL(
    "https://demo.automationtesting.in/Windows.html",
  );
  console.log("Parent Window Count :", page.context().pages().length);

  // Wndows handling
  const [popup] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator("//button[contains(text(),'click')]").first().click(),
    page.waitForTimeout(3000),
  ]);
  console.log("Total Windows :", page.context().pages().length);

  // 2. verify child window title & url
  console.log(await popup.title());
  console.log(await popup.url());
  await expect(popup).toHaveTitle(/Selenium/);
  await expect(popup).toHaveURL("https://www.selenium.dev/");
  await expect(
    popup.locator("//h4[contains(text(), 'Selenium WebDriver')]"),
  ).toContainText("WebDriver");

  // to close child window

  await popup.close();

  //   VALIDATE PARENT WINDOW

  await expect(page.locator("//h1[text()='Automation Demo Site ']")).toHaveText(
    "Automation Demo Site ",
  );
});
