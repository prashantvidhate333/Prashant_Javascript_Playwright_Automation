import { test, expect } from "@playwright/test";

test("TC-001 Multiple Window Handling", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.waitForTimeout(2000);

  // 1. Open 1st Window : Linkdin

  const [linkedinPage] = await Promise.all([
    page.waitForEvent("popup"),
    page
      .locator(
        '//a[@href="https://www.linkedin.com/company/orangehrm/mycompany/"]',
      )
      .click(),
    page.waitForTimeout(2000),
  ]);
  await expect(linkedinPage.locator('[data-test-id="nav-logo"]')).toBeVisible();

  // 2. Open 2nd Window : facebook
  const [facebookPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator('//a[@href="https://www.facebook.com/OrangeHRM/"]').click(),
    page.waitForTimeout(2000),
  ]);
  await expect(
    facebookPage.locator('[aria-label="Facebook"]').first(),
  ).toBeVisible();
  // await linkedinPage.bringToFront();
  // await linkedinPage.waitForTimeout(3000);
  // console.log(page.context().pages().length);
  // 2. Open 2nd Window : facebook

  const [twitterPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator('//a[@href="https://twitter.com/orangehrm?lang=en"]').click(),
    page.waitForTimeout(2000),
  ]);
  await expect(
    twitterPage.locator('//a[@aria-label="X"]').first(),
  ).toBeVisible();

  // To find total windows open including parent
  const windowsLength = page.context().pages().length;
  console.log(windowsLength); // 4

  // To print all windows title & url
  const pages = page.context().pages();
  for (let i = 0; i < windowsLength; i++) {
    const windowsTitle = await pages[i].title();
    const windowURL = await pages[i].url();
    console.log(`Window Title : ${windowsTitle}`);
    console.log(`Window URL   : ${windowURL}  `);
  }
});
