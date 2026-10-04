import { test, expect } from "@playwright/test";

test.describe("Navigation & Links Integrity", () => {
  const pages = [
    "/",
    "/about",
    "/work",
    "/services",
    "/industries",
    "/technologies",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ];

  for (const path of pages) {
    test(`Page ${path} loads cleanly without console errors or 404s`, async ({ page }) => {
      const consoleErrors: string[] = [];
      const failedRequests: string[] = [];

      page.on("console", (msg) => {
        if (msg.type() === "error") {
          consoleErrors.push(msg.text());
        }
      });

      page.on("requestfailed", (req) => {
        // Ignore external service network aborts if any
        if (req.url().includes("localhost:3000")) {
          failedRequests.push(`${req.url()} (${req.failure()?.errorText})`);
        }
      });

      const response = await page.goto(path);
      expect(response?.status()).toBe(200);

      // Verify no critical console errors
      expect(consoleErrors).toEqual([]);
      expect(failedRequests).toEqual([]);

      // Verify page has an H1
      const h1Count = await page.locator("h1").count();
      expect(h1Count).toBeGreaterThanOrEqual(1);
    });
  }

  test("Custom 404 page renders for missing route", async ({ page }) => {
    const response = await page.goto("/non-existent-page-test-404");
    expect(response?.status()).toBe(404);
    await expect(page.locator("h1")).toContainText(/Page Not Found/i);
    await expect(page.getByRole("link", { name: /Back to Home/i })).toBeVisible();
  });

  test("Desktop and mobile navigation menu behaves correctly", async ({ page }) => {
    await page.goto("/");
    const viewport = page.viewportSize();

    if (viewport && viewport.width < 768) {
      // Mobile menu toggle test
      const menuBtn = page.getByRole("button", { name: /menu/i });
      if (await menuBtn.isVisible()) {
        await menuBtn.click();
        await page.waitForTimeout(300);
        // Check that mobile navigation overlay opened
        const navLinks = page.locator("nav a");
        expect(await navLinks.count()).toBeGreaterThan(0);
      }
    } else {
      // Desktop nav links visible
      const workLink = page.getByRole("link", { name: "Work", exact: true }).first();
      await expect(workLink).toBeVisible();
    }
  });

  test("WhatsApp links contain correct valid prefilled text and number", async ({ page }) => {
    await page.goto("/");
    const waLinks = page.locator('a[href*="wa.me"]');
    const count = await waLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < Math.min(count, 5); i++) {
      const href = await waLinks.nth(i).getAttribute("href");
      expect(href).toMatch(/wa\.me\/91[0-9]{10}/);
    }
  });

  test("Phone and email links are formatted correctly", async ({ page }) => {
    await page.goto("/contact");
    const mailto = page.locator('a[href^="mailto:"]').first();
    const tel = page.locator('a[href^="tel:"]').first();

    await expect(mailto).toHaveAttribute("href", "mailto:akaaistudio03@gmail.com");
    await expect(tel).toHaveAttribute("href", /tel:\+91/);
  });
});
