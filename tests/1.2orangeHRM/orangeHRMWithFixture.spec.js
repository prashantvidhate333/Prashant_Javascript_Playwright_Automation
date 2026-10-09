import { test, expect } from "../../fixtures/orangeHRM.fixture";

test("OrangeHRM Tests With Fixture", async ({
  page,
  loginPageFixture,
  dashBoardPageFixture,
  pimPageFixture,
}) => {
  await page.waitForTimeout(3000);
  expect(await pimPageFixture.getEmpAddedText()).toBe("Bharat Vidhate");
});
