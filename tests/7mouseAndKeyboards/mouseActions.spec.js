import { test, expect } from "@playwright/test";

test("TC0-001 Mouse Actions", async ({ page }) => {
  await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
  await page.waitForTimeout(2000);
  await page
    .locator("//span[text()='right click me']")
    .click({ button: "right" });
  const menuList = await page.locator(
    '//ul[@class="context-menu-list context-menu-root"]//li',
  );
  const menuCount = await menuList.count();
  console.log(menuCount);
  await expect(menuCount).toBeGreaterThan(1);
  await page.waitForTimeout(2000);
  for (let i = 0; i < menuCount; i++) {
    console.log(await menuList.nth(i).textContent());
  }
});
