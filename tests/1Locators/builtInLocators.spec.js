import { test, expect } from "@playwright/test";

test("TC-001 Ex-1 Built-In Locator : getByRole()", async ({ page }) => {
  // Navigate to saucedemo Login Page
  await page.goto("https://www.saucedemo.com/");

  // Enter Username using getByRole : textbox
  await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
  await page.waitForTimeout(2000);

  // Enter Password getByRole : textbox
  await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
  await page.waitForTimeout(2000);

  // Click Login Button getByRole : button
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForTimeout(2000);

  // Verify Open Menu button getByRole : button
  await expect(page.getByRole("button", { name: "Open Menu" })).toBeVisible();
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.waitForTimeout(2000);

  // getByRole : link
  await expect(page.getByRole("link", { name: "All Items" })).toBeVisible();
  await page.getByRole("link", { name: "About" }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByRole("link", { name: "REGISTER NOW" })).toBeVisible();
  await page
    .locator('//h2[text()="Strategic Outcomes"]')
    .scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);
  // getByRole : heading
  await expect(
    page.getByRole("heading", { name: "Strategic Outcomes" }),
  ).toBeVisible();
  // getByRole : img
  await page
    .getByRole("img", { name: "Pixelated Blocks" })
    .first()
    .scrollIntoViewIfNeeded();
  await expect(
    page.getByRole("img", { name: "Pixelated Blocks" }).first(),
  ).toBeVisible();
  await page.waitForTimeout(2000);
  await page.goBack();
});

test("TC-001 Ex-2 Built-In Locator : getByRole()", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  await page.waitForTimeout(2000);
  // getByRole : radio
  await page.getByRole("radio", { name: "Male", exact: true }).check();
  await page.waitForTimeout(2000);
});

test("TC-002 Buit-In Locator : getByLabel()", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");
  await page.waitForTimeout(2000);
  await page.getByLabel("Username").fill("tomsmith");
  await page.waitForTimeout(2000);
  await page.getByLabel("Password").fill("SuperSecretPassword!");
  await page.waitForTimeout(2000);
  await page.getByRole("button", { name: " Login" }).click();
  await page.waitForTimeout(2000);
  const obj = await page.getByRole("heading", {
    name: " Secure Area",
    exact: true,
  });
  await expect(obj).toBeVisible();
});
test("TC-003 Built-In Locator : getByPlaceholder()", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  await page.waitForTimeout(2000);
  await page.getByPlaceholder("First Name").fill("Prashant");
  await page.waitForTimeout(2000);
  await expect(await page.getByPlaceholder("First Name").inputValue()).toBe(
    "Prashant",
  );
  await page.getByPlaceholder("Last Name").fill("Vidhate");
  await page.waitForTimeout(2000);
  await expect(await page.getByPlaceholder("Last Name").inputValue()).toBe(
    "Vidhate",
  );
});

test("TC-004 Built-In Locator : getByText()", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.waitForTimeout(2000);
  await expect(await page.getByText("Name:")).toBeVisible();
  await expect(await page.getByText("Form", { exact: true })).toBeVisible();
});

test.only("TC-005 Built-In Locator : getByAltText()", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
  await page.waitForTimeout(2000);

  // Enter Password getByRole : textbox
  await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
  await page.waitForTimeout(2000);

  // Click Login Button getByRole : button
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForTimeout(2000);

  // Verify Open Menu button getByRole : button
  await expect(page.getByRole("button", { name: "Open Menu" })).toBeVisible();
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.waitForTimeout(2000);

  // getByRole : link
  await expect(page.getByRole("link", { name: "All Items" })).toBeVisible();
  await page.getByRole("link", { name: "About" }).click();
  await page.waitForTimeout(2000);

  // getByAltText
  await expect(
    await page.getByAltText("Pixelated Blocks").first(),
  ).toBeVisible();
  await page.waitForTimeout(2000);
});
