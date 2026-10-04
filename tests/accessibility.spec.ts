import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accessibility (Axe WCAG 2.1 AA)", () => {
  const routes = [
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

  for (const route of routes) {
    test(`Page ${route} has zero critical or serious axe violations`, async ({ page }) => {
      await page.goto(route, { waitUntil: "networkidle" });
      // Allow entrance animations to settle to full opacity
      await page.waitForTimeout(800);
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      const seriousOrCritical = accessibilityScanResults.violations.filter(
        (v) => v.impact === "critical" || v.impact === "serious"
      );

      if (seriousOrCritical.length > 0) {
        console.error(
          `Violations on ${route}:`,
          JSON.stringify(seriousOrCritical, null, 2)
        );
      }

      expect(seriousOrCritical).toEqual([]);
    });
  }
});
