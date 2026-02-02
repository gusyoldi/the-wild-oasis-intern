import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
});

test("cabins visual snapshot", async ({ page }) => {
  await page.goto("/cabins");
  await page.waitForLoadState("networkidle");
  await expect(page).toHaveScreenshot("cabins.png");
});
