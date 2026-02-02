import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
});

test("settings visual snapshot", async ({ page }) => {
  await page.goto("/settings");
  await page.waitForLoadState("networkidle");
  await expect(page).toHaveScreenshot("settings.png");
});
