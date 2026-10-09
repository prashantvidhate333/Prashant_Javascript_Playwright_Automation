import { test, expect } from "@playwright/test";
test("TC-001 Amazon dropdown", async ({ page }) => {
  await page.goto(
    "https://www.amazon.in/?tag=msndeskabkin-21&ref=pd_sl_8q6j7d3no5_e&adgrpid=1316117075550739&hvadid=82257648266169&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=149333&hvtargid=kwd-82258245571482:loc-90&hydadcr=14451_2462838&mcid=a9e94cac121e322980ac4994863afb97",
  );
  await page.waitForTimeout(3000);
  await page.locator("#nav-link-accountList").hover();
  await page.waitForTimeout(2000);
  await page.locator('//span[text()="Your Account"]').click();
  await page.waitForTimeout(3000);
  await expect(
    await page.getByRole("heading", { name: "Your Account" }),
  ).toBeVisible();
});
