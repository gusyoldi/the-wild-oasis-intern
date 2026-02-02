import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
});

test("bookings visual snapshot", async ({ page }) => {
  await page.goto("/bookings");
  await page.waitForLoadState("networkidle");
  await expect(page).toHaveScreenshot("bookings.png");
});
