import { test, expect } from "@playwright/test";

test.describe("Professional Deep Diagnostics & Mobile Audit", () => {
  const allRoutes = [
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
    "/work/nav-bharat-school",
    "/work/hotel-sarkar",
    "/work/mohit-enterprise",
  ];

  const mobileViewports = [
    { width: 320, height: 568, name: "iPhone SE 1st gen (320px)" },
    { width: 360, height: 740, name: "Standard Android (360px)" },
    { width: 375, height: 667, name: "iPhone SE / 8 (375px)" },
    { width: 390, height: 844, name: "iPhone 12/13/14 (390px)" },
  ];

  for (const route of allRoutes) {
    for (const vp of mobileViewports) {
      test(`[${vp.name}] ${route} has zero horizontal overflow`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        const res = await page.goto(route, { waitUntil: "networkidle" });
        expect(res?.status()).toBe(200);

        // 1. Verify document-level scrollWidth doesn't exceed viewport
        const docScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
        const docClientWidth = await page.evaluate(() => document.documentElement.clientWidth);
        expect(docScrollWidth).toBeLessThanOrEqual(docClientWidth + 1.5);

        // 2. Find any unclipped DOM elements leaking past viewport
        const overflowElements = await page.evaluate((docWidth) => {
          function isClipped(el: HTMLElement): boolean {
            let parent = el.parentElement;
            while (parent && parent !== document.documentElement && parent !== document.body) {
              const style = window.getComputedStyle(parent);
              if (
                style.overflowX === "hidden" ||
                style.overflowX === "clip" ||
                style.overflow === "hidden" ||
                style.overflow === "clip"
              ) {
                return true;
              }
              parent = parent.parentElement;
            }
            return false;
          }

          const badEls: string[] = [];
          document.querySelectorAll("body *").forEach((node) => {
            const el = node as HTMLElement;
            const rect = el.getBoundingClientRect();
            if (rect.right > docWidth + 1.5 && !isClipped(el)) {
              const tag = el.tagName.toLowerCase();
              const id = el.id ? `#${el.id}` : "";
              const cls = el.className && typeof el.className === "string" 
                ? `.${el.className.split(" ")[0]}` 
                : "";
              badEls.push(`${tag}${id}${cls} (right: ${Math.round(rect.right)}, docWidth: ${docWidth})`);
            }
          });
          return badEls.slice(0, 5);
        }, vp.width);

        expect(overflowElements).toEqual([]);
      });
    }

    test(`Page ${route} has zero broken images`, async ({ page }) => {
      await page.goto(route, { waitUntil: "networkidle" });
      
      // Scroll through sections to allow lazy-loaded images to mount
      await page.evaluate(async () => {
        const elements = document.querySelectorAll("section, footer, [id]");
        for (const el of elements) {
          el.scrollIntoView({ behavior: "instant" });
          await new Promise((r) => setTimeout(r, 80));
        }
      });
      await page.waitForTimeout(400);

      const brokenImages = await page.evaluate(() => {
        const images = Array.from(document.querySelectorAll("img"));
        return images
          .filter((img) => !img.complete || img.naturalWidth === 0)
          .map((img) => ({
            src: img.src,
            alt: img.alt,
          }));
      });

      expect(brokenImages).toEqual([]);
    });
  }

  test("Mobile form inputs have at least 16px font-size to prevent iOS Safari auto-zoom", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/contact", { waitUntil: "networkidle" });

    const inputs = page.locator("input:not([type='hidden']), textarea, select");
    const count = await inputs.count();
    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i);
      if (await input.isVisible()) {
        const fontSize = await input.evaluate((el) => {
          return parseFloat(window.getComputedStyle(el).fontSize);
        });
        expect(fontSize).toBeGreaterThanOrEqual(16);
      }
    }
  });

  test("Homepage Quick Quote inputs have at least 16px font-size on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/", { waitUntil: "networkidle" });

    const quoteInputs = page.locator("#quote input:not([type='hidden']), #quote select, #quote textarea");
    const count = await quoteInputs.count();
    for (let i = 0; i < count; i++) {
      const input = quoteInputs.nth(i);
      if (await input.isVisible()) {
        const fontSize = await input.evaluate((el) => {
          return parseFloat(window.getComputedStyle(el).fontSize);
        });
        expect(fontSize).toBeGreaterThanOrEqual(16);
      }
    }
  });

  test("Mobile interactive tap targets meet >= 44x44px standard", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/", { waitUntil: "networkidle" });

    // 1. Mobile menu toggle button
    const menuBtn = page.getByRole("button", { name: /open menu/i });
    if (await menuBtn.isVisible()) {
      const box = await menuBtn.boundingBox();
      expect(box?.height).toBeGreaterThanOrEqual(44);
      expect(box?.width).toBeGreaterThanOrEqual(44);
    }

    // 2. Open drawer and check close button & nav links
    await menuBtn.click();
    await page.waitForTimeout(300);

    const closeBtn = page.getByRole("button", { name: /close drawer/i });
    const closeBox = await closeBtn.boundingBox();
    expect(closeBox?.height).toBeGreaterThanOrEqual(44);
    expect(closeBox?.width).toBeGreaterThanOrEqual(44);

    const drawerLinks = page.locator("nav a");
    const linkCount = await drawerLinks.count();
    for (let i = 0; i < linkCount; i++) {
      const l = drawerLinks.nth(i);
      if (await l.isVisible()) {
        const box = await l.boundingBox();
        expect(box?.height).toBeGreaterThanOrEqual(44);
      }
    }
  });
});
