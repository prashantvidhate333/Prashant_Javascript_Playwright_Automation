import { test, expect } from "@playwright/test";

test("Smoke Test Cases @smoke", async () => {
  console.log("--@Smoke tagged test cases running--");
});
test("Regression Test Cases @regression", async () => {
  console.log("--@Regression tagged test cases running--");
});
test("E2E Test Cases @e2e", async () => {
  console.log("--@E2E tagged test cases running--");
});
test("E2E & Smoke Test Cases @e2e @smoke", async () => {
  console.log("--@E2E & @Smoke tagged test cases running--");
});
