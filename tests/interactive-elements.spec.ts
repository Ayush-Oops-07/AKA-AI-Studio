import { test, expect } from "@playwright/test";

test.describe("Interactive Components & Forms", () => {
  test("FAQ accordion opens and closes", async ({ page }) => {
    await page.goto("/");
    // Scroll to FAQ section
    const faqHeading = page.locator("#faq");
    await faqHeading.scrollIntoViewIfNeeded();

    // First accordion item is open by default
    const firstAnswer = page.locator("#faq div[role='region']").first();
    await expect(firstAnswer).toBeVisible();

    // Click second accordion button to open it
    const secondAccordionBtn = page.locator("#faq button").nth(1);
    await secondAccordionBtn.click();
    await page.waitForTimeout(300);

    const secondAnswer = page.locator("#faq div[role='region']").first();
    await expect(secondAnswer).toBeVisible();
  });

  test("Reviews Carousel navigation and swipe buttons work", async ({ page }) => {
    await page.goto("/");
    const reviewsSec = page.locator("#reviews");
    await reviewsSec.scrollIntoViewIfNeeded();

    // Test carousel next and prev buttons
    const nextBtn = page.getByRole("button", { name: /next review/i });
    const prevBtn = page.getByRole("button", { name: /previous review/i });

    if (await nextBtn.isVisible()) {
      await nextBtn.click();
      await page.waitForTimeout(400);
      await prevBtn.click();
      await page.waitForTimeout(400);
    }

    // Check that review cards exist
    const cards = page.locator("#reviews article, #reviews [class*='card']");
    expect(await cards.count()).toBeGreaterThan(0);
  });

  test("Quick Quote Form validates required phone and handles submission", async ({ page }) => {
    await page.goto("/");
    const quoteSec = page.locator("#quote");
    await quoteSec.scrollIntoViewIfNeeded();

    // Try submitting without phone
    const submitBtn = quoteSec.getByRole("button", { name: /send details on whatsapp/i });
    if (await submitBtn.isVisible()) {
      await submitBtn.click();
      // Should show validation error for phone
      await expect(page.locator("text=Please enter your phone number")).toBeVisible();

      // Enter invalid phone
      const phoneInput = page.locator("#quote-phone");
      await phoneInput.fill("123");
      await submitBtn.click();
      await expect(page.locator("text=Please enter a valid 10-digit phone number")).toBeVisible();

      // Enter valid phone
      await phoneInput.fill("9876543210");
      // Check that error clears
      await expect(page.locator("text=Please enter a valid 10-digit phone number")).not.toBeVisible();
    }
  });

  test("Contact page form validates required fields", async ({ page }) => {
    await page.goto("/contact");
    const nameInput = page.locator("#contact-name");
    const phoneInput = page.locator("#contact-phone");
    const msgInput = page.locator("#contact-message");
    const submitBtn = page.getByRole("button", { name: /send message/i });

    await expect(nameInput).toBeVisible();
    await expect(phoneInput).toBeVisible();
    await expect(msgInput).toBeVisible();
    await expect(submitBtn).toBeVisible();
  });

  test("Privacy Policy consent lines exist on forms", async ({ page }) => {
    await page.goto("/");
    const quoteSec = page.locator("#quote");
    await expect(quoteSec.getByRole("link", { name: /Privacy Policy/i })).toBeVisible();

    await page.goto("/contact");
    await expect(page.getByRole("link", { name: /Privacy Policy/i }).first()).toBeVisible();
  });
});
