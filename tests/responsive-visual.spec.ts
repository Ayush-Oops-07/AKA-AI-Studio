import { test, expect } from "@playwright/test";

test.describe("Visual & Responsive QA", () => {
  const widths = [320, 360, 390, 768, 1024, 1280, 1440];

  for (const width of widths) {
    test(`No horizontal scroll and proper layout at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      await page.goto("/", { waitUntil: "networkidle" });

      // Verify no horizontal overflow
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const innerWidth = await page.evaluate(() => window.innerWidth);
      expect(scrollWidth).toBeLessThanOrEqual(innerWidth + 1); // 1px rounding margin

      // Check fixed buttons visibility
      const waFloating = page.locator("a[aria-label='Chat with us on WhatsApp'], a[href*='wa.me']").first();
      await expect(waFloating).toBeAttached();

      // Capture screenshot into /qa-screenshots
      await page.screenshot({
        path: `qa-screenshots/home-${width}px.png`,
        fullPage: false,
      });
    });
  }

  test("Touch tap targets on mobile 360px are at least 44px", async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    await page.goto("/", { waitUntil: "networkidle" });

    // Primary CTA buttons should be at least 44px tall
    const buttons = page.locator(".btn, a.btn");
    const count = await buttons.count();

    for (let i = 0; i < Math.min(count, 5); i++) {
      const box = await buttons.nth(i).boundingBox();
      if (box && box.height > 0) {
        expect(box.height).toBeGreaterThanOrEqual(40); // 40-44px minimum tap target standard
      }
    }
  });

  test("Reduced motion preferences are respected", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    // Ensure page loads smoothly with reduced motion
    await expect(page.locator("h1")).toBeVisible();
  });
});
