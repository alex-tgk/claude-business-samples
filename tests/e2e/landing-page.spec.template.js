/**
 * Playwright E2E Test Template
 * Tests complete user journeys through landing pages
 */

const { test, expect } = require('@playwright/test');

test.describe('[BUSINESS_NAME] - Variety [VARIETY] - E2E Tests', () => {
  const pageUrl = '/[BUSINESS_DIR]/v[VARIETY]/';

  test.beforeEach(async ({ page }) => {
    await page.goto(pageUrl);
  });

  /**
   * CRITICAL USER JOURNEY
   */
  test('should complete primary conversion flow', async ({ page }) => {
    // 1. Page loads successfully
    await expect(page).toHaveTitle(/[BUSINESS_NAME]/i);

    // 2. User sees hero section with CTA
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();

    const primaryCTA = page.locator('[data-testid*="cta"]').first();
    await expect(primaryCTA).toBeVisible();

    // 3. User scrolls to see social proof
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(500);

    const socialProof = page.locator('[data-testid*="testimonial"], [data-testid*="social-proof"]').first();
    await expect(socialProof).toBeVisible();

    // 4. User clicks CTA
    await primaryCTA.click();

    // 5. Assert: Modal opens, form appears, or navigation occurs
    // Customize based on actual conversion action
    await page.waitForTimeout(500);
    // Example assertions:
    // await expect(page.locator('[data-testid="signup-modal"]')).toBeVisible();
    // OR: await expect(page).toHaveURL(/signup|checkout/);
  });

  /**
   * PAGE LOAD PERFORMANCE
   */
  test('should load within 3 seconds', async ({ page }) => {
    const startTime = Date.now();

    await page.goto(pageUrl, { waitUntil: 'networkidle' });

    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(3000);
  });

  test('should have Core Web Vitals in acceptable range', async ({ page }) => {
    await page.goto(pageUrl);

    // Measure Largest Contentful Paint (LCP)
    const lcp = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry.renderTime || lastEntry.loadTime);
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        setTimeout(() => resolve(0), 5000);
      });
    });

    expect(lcp).toBeLessThan(2500); // Good LCP is < 2.5s

    // Measure Cumulative Layout Shift (CLS)
    const cls = await page.evaluate(() => {
      return new Promise((resolve) => {
        let clsValue = 0;
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
          resolve(clsValue);
        }).observe({ entryTypes: ['layout-shift'] });

        setTimeout(() => resolve(clsValue), 5000);
      });
    });

    expect(cls).toBeLessThan(0.1); // Good CLS is < 0.1
  });

  /**
   * RESPONSIVE DESIGN
   */
  test('should be usable on mobile device', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'This test is only for mobile');

    await page.goto(pageUrl);

    // Mobile menu should be visible if navigation exists
    const mobileNav = page.locator('[data-testid="mobile-nav"], .mobile-menu, button[aria-label*="menu"]');
    const desktopNav = page.locator('[data-testid="desktop-nav"], .desktop-nav');

    // Either mobile nav should be visible, or no nav at all (single-page)
    if (await desktopNav.count() > 0) {
      await expect(mobileNav).toBeVisible();
    }

    // CTA should be tappable (min 44x44px)
    const cta = page.locator('[data-testid*="cta"]').first();
    const box = await cta.boundingBox();
    expect(box.width).toBeGreaterThanOrEqual(44);
    expect(box.height).toBeGreaterThanOrEqual(44);

    // Text should be readable (min 16px)
    const fontSize = await page.locator('body').evaluate(el => {
      return window.getComputedStyle(el).fontSize;
    });
    expect(parseInt(fontSize)).toBeGreaterThanOrEqual(16);
  });

  /**
   * ANALYTICS TRACKING
   */
  test('should track page view event', async ({ page }) => {
    // Mock analytics endpoint
    let analyticsEventsCaptured = [];
    await page.route('**/api/collect', (route) => {
      analyticsEventsCaptured.push(route.request().postDataJSON());
      route.fulfill({ status: 200 });
    });

    await page.goto(pageUrl);
    await page.waitForTimeout(1000);

    // Check analytics was called
    expect(analyticsEventsCaptured.length).toBeGreaterThan(0);
  });

  test('should track CTA click event', async ({ page }) => {
    let ctaClickTracked = false;

    // Intercept analytics calls
    await page.route('**/api/collect', (route) => {
      const data = route.request().postDataJSON();
      if (data && data.eventName && data.eventName.includes('cta')) {
        ctaClickTracked = true;
      }
      route.fulfill({ status: 200 });
    });

    await page.goto(pageUrl);

    const cta = page.locator('[data-testid*="cta"]').first();
    await cta.click();

    await page.waitForTimeout(500);
    expect(ctaClickTracked).toBe(true);
  });

  /**
   * FORM VALIDATION (if applicable)
   */
  test('should validate email input in form', async ({ page }) => {
    const emailInput = page.locator('input[type="email"], input[name="email"]');

    // Skip if no email input
    if (await emailInput.count() === 0) {
      test.skip();
      return;
    }

    await emailInput.fill('invalid-email');
    await page.keyboard.press('Enter');

    // Should show validation error
    const errorMessage = page.locator('[data-testid*="error"], .error, .invalid-feedback');
    await expect(errorMessage).toBeVisible();

    // Fix email and error should disappear
    await emailInput.fill('valid@example.com');
    await expect(errorMessage).not.toBeVisible();
  });

  /**
   * SOCIAL PROOF INTERACTION
   */
  test('should display testimonials carousel', async ({ page }) => {
    const testimonials = page.locator('[data-testid*="testimonial"]');

    if (await testimonials.count() === 0) {
      test.skip();
      return;
    }

    // Should have at least one testimonial
    await expect(testimonials.first()).toBeVisible();

    // If carousel, should have navigation
    const nextButton = page.locator('[data-testid*="next"], .carousel-next');
    if (await nextButton.count() > 0) {
      await nextButton.click();
      await page.waitForTimeout(500);
      // Second testimonial should now be visible
      await expect(testimonials.nth(1)).toBeVisible();
    }
  });

  /**
   * CROSS-BROWSER COMPATIBILITY
   */
  test('should render consistently across browsers', async ({ page, browserName }) => {
    await page.goto(pageUrl);

    // Take screenshot for visual comparison
    await page.screenshot({
      path: `test-results/screenshots/${browserName}-[VARIETY].png`,
      fullPage: true,
    });

    // Basic rendering checks
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();

    const cta = page.locator('[data-testid*="cta"]').first();
    await expect(cta).toBeVisible();
  });

  /**
   * ACCESSIBILITY (a11y)
   */
  test('should have no critical accessibility violations', async ({ page }) => {
    await page.goto(pageUrl);

    // Check for common a11y issues
    const images = page.locator('img');
    const imageCount = await images.count();

    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      expect(alt).toBeDefined(); // All images should have alt (can be empty for decorative)
    }

    // Links should have discernible text
    const links = page.locator('a');
    const linkCount = await links.count();

    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i);
      const text = await link.textContent();
      const ariaLabel = await link.getAttribute('aria-label');
      expect(text.trim().length > 0 || ariaLabel).toBeTruthy();
    }
  });

  /**
   * EXIT INTENT (if implemented)
   */
  test('should show exit intent modal on cursor leave', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Exit intent not applicable on mobile');

    await page.goto(pageUrl);

    // Move cursor to top of page to trigger exit intent
    await page.mouse.move(0, 0);
    await page.mouse.move(0, -100); // Move above viewport

    await page.waitForTimeout(500);

    // Check if exit modal appears
    const exitModal = page.locator('[data-testid*="exit-modal"], .exit-intent-modal');
    if (await exitModal.count() > 0) {
      await expect(exitModal).toBeVisible();
    }
  });

  /**
   * SCROLL DEPTH TRACKING
   */
  test('should track scroll depth milestones', async ({ page }) => {
    let scrollEvents = [];

    await page.exposeFunction('captureScrollEvent', (depth) => {
      scrollEvents.push(depth);
    });

    await page.goto(pageUrl);

    // Scroll to bottom gradually
    const scrollSteps = [25, 50, 75, 100];
    for (const percent of scrollSteps) {
      await page.evaluate((p) => {
        const scrollHeight = document.documentElement.scrollHeight;
        const targetScroll = (scrollHeight * p) / 100;
        window.scrollTo(0, targetScroll);
      }, percent);
      await page.waitForTimeout(500);
    }

    // Analytics should have tracked key milestones
    // (This would need actual implementation in the landing page JS)
  });

  /**
   * VARIETY-SPECIFIC E2E TESTS
   */
  test('[V2] should display countdown timer', async ({ page }) => {
    // Only for Variety 2: Bold Conversion
    const countdown = page.locator('[data-testid*="countdown"], .countdown-timer');

    if (await countdown.count() === 0) {
      test.skip();
      return;
    }

    await expect(countdown).toBeVisible();

    // Timer should count down
    const initialTime = await countdown.textContent();
    await page.waitForTimeout(2000);
    const afterTime = await countdown.textContent();

    expect(initialTime).not.toBe(afterTime);
  });

  test('[V5] should have interactive quiz', async ({ page }) => {
    // Only for Variety 5: Interactive
    const quiz = page.locator('[data-testid*="quiz"], .interactive-quiz');

    if (await quiz.count() === 0) {
      test.skip();
      return;
    }

    await expect(quiz).toBeVisible();

    // Should be able to progress through quiz
    const nextButton = page.locator('[data-testid="quiz-next"]');
    await nextButton.click();

    await page.waitForTimeout(500);
    const questionTwo = page.locator('[data-testid="question-2"]');
    await expect(questionTwo).toBeVisible();
  });
});
