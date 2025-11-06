---
description: Build a complete landing page with TDD approach for a specific business and variety
---

You are running the `/build-landing-page` command to create a landing page following Test-Driven Development.

## Your Task

1. **Parse Arguments:**
   ```
   /build-landing-page [business-name] [variety-number]
   ```
   - business-name: The slug of the business (e.g., "resumegenius-ai")
   - variety-number: 1-5 (which design variety)

2. **Verify Business Exists:**
   - Check MASTER_PLAN.md for business details
   - Confirm directory structure exists
   - If not, run `/new-business` first

3. **STEP 1: Write Failing Tests (TDD Approach)**

   Create test file:
   ```
   [business-slug]/tests/v[N].test.js
   ```

   Based on the test template, write tests for:
   - HTML structure (h1, meta tags, title)
   - CTA elements and tracking
   - Content quality
   - Social proof elements
   - Responsive design
   - Analytics integration
   - Accessibility
   - Variety-specific requirements

   **Run tests - they should FAIL** ❌

4. **STEP 2: Design Landing Page (Based on Variety)**

   **Variety 1 - Minimal Clean:**
   - White/light gray background
   - Single accent color
   - Max 600px width content
   - Generous whitespace
   - Single prominent CTA

   **Variety 2 - Bold Conversion:**
   - High contrast colors
   - Multiple CTAs
   - Countdown timer
   - Urgency language
   - Sticky bottom bar

   **Variety 3 - Story-Driven:**
   - Warm color palette
   - Vertical storytelling flow
   - Problem → Agitation → Solution
   - Before/after testimonials
   - Journey timeline

   **Variety 4 - Data-Driven:**
   - Professional blues/grays
   - Statistics prominent
   - Comparison tables
   - ROI calculator
   - Client logos grid

   **Variety 5 - Interactive:**
   - Vibrant gradients
   - Hover animations
   - Quiz or assessment
   - Progress indicators
   - Real-time counters

5. **STEP 3: Implement HTML**

   Create file: `[business-slug]/v[N]/index.html`

   Include:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta name="description" content="[SEO-optimized description]">
     <title>[Business Name] - [Tagline]</title>
     <link rel="stylesheet" href="styles.css">
     <link rel="icon" href="../../shared/images/favicon.ico">
   </head>
   <body>
     <!-- Hero Section -->
     <header>
       <h1>[Compelling headline]</h1>
       <p class="subheadline">[Supporting copy]</p>
       <button class="cta-primary" data-testid="cta-hero" data-location="hero">
         [Action-oriented CTA]
       </button>
     </header>

     <!-- Social Proof -->
     <section data-testid="social-proof">
       [Trust indicators, testimonials, logos]
     </section>

     <!-- Features/Benefits -->
     <section>
       [3-5 key benefits with icons]
     </section>

     <!-- Testimonials -->
     <section data-testid="testimonials">
       [2-3 specific testimonials]
     </section>

     <!-- Final CTA -->
     <section class="cta-section">
       <button class="cta-primary" data-testid="cta-footer" data-location="footer">
         [Action-oriented CTA]
       </button>
     </section>

     <footer>
       [Privacy, terms, contact]
     </footer>

     <script src="../../shared/analytics.js" defer></script>
     <script src="script.js" defer></script>
   </body>
   </html>
   ```

6. **STEP 4: Implement CSS**

   Create file: `[business-slug]/v[N]/styles.css`

   Follow variety-specific design system:
   - Typography scale
   - Color palette
   - Spacing system
   - Responsive breakpoints
   - Component styles

7. **STEP 5: Implement JavaScript**

   Create file: `[business-slug]/v[N]/script.js`

   Include:
   - CTA click handlers
   - Form validation (if applicable)
   - Scroll animations
   - Mobile menu toggle
   - Variety-specific interactions

8. **STEP 6: Run Tests**

   ```bash
   npm test -- [business-slug]/tests/v[N].test.js
   ```

   **Tests should PASS** ✅

   If tests fail:
   - Fix implementation
   - Re-run tests
   - Repeat until all pass

9. **STEP 7: E2E Tests**

   ```bash
   npx playwright test [business-slug]/tests/v[N].e2e.spec.js
   ```

   Test complete user journey:
   - Page load
   - CTA interaction
   - Form submission
   - Analytics tracking

10. **STEP 8: Performance Test**

    Run Lighthouse audit:
    ```bash
    npm run test:lighthouse -- [business-slug]/v[N]
    ```

    Target scores:
    - Performance: 90+
    - Accessibility: 90+
    - Best Practices: 90+
    - SEO: 90+

11. **STEP 9: Generate Report**

    Create summary:
    ```markdown
    ## [Business Name] - Variety [N] - Build Report

    **Build Date:** [Date]
    **Variety:** [Name]
    **Status:** ✅ Complete

    ### Test Results:
    - Unit Tests: ✅ [X/X passing]
    - E2E Tests: ✅ [X/X passing]
    - Lighthouse: ✅ [Performance: X, Accessibility: X, etc.]

    ### Key Features:
    - [Feature 1]
    - [Feature 2]
    - [Feature 3]

    ### Analytics:
    - Tracking: ✅ Configured
    - Events: page_view, cta_click, scroll_depth

    ### Next Steps:
    - [ ] Deploy to GitHub Pages
    - [ ] Configure analytics dashboard
    - [ ] Start traffic test
    ```

12. **STEP 10: Commit Changes**

    ```bash
    git add [business-slug]/v[N]/
    git add [business-slug]/tests/
    git commit -m "feat: add variety [N] landing page for [business-name]

    - Implemented [variety-type] design
    - All tests passing
    - Lighthouse score: [X/100]"
    ```

## Success Criteria

- [ ] All unit tests pass
- [ ] All E2E tests pass
- [ ] Lighthouse score 90+
- [ ] Mobile responsive
- [ ] Analytics integrated
- [ ] Accessibility compliant
- [ ] Git committed

## Example Usage

```bash
/build-landing-page resumegenius-ai 1
```

This would build Variety 1 (Minimal Clean) for the ResumeGenius AI business.

---

**Now execute this workflow with TDD rigor.**
