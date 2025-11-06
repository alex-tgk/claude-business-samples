---
description: Create and deploy a competing version of a business that aims to beat the original
---

You are running the `/deploy-competitor` command to create a superior competing version.

## Your Task

1. **Identify Original Business:**
   ```
   /deploy-competitor [business-name]
   ```

   Load business details from MASTER_PLAN.md:
   - Value proposition
   - Pricing
   - Features
   - Target market
   - Landing page structure

2. **Analyze Original Landing Page:**

   Review the winning variety (or best performing):
   - What works well (must match or beat)
   - What's weak (opportunity to exploit)
   - Missing features
   - UX friction points
   - Trust deficits

3. **Conduct Competitive Research:**

   Search for:
   - "[Business name] complaints" on Reddit
   - "[Business name] reviews" on Google
   - Alternative solutions customers mention
   - Common feature requests

4. **Use Competitor Creator Agent:**

   Generate comprehensive competitive strategy:
   - Top 3 weaknesses to exploit
   - Differentiation strategy
   - Aggressive pricing (20-30% undercut OR 50% more value)
   - Superior value proposition
   - Better landing page copy

5. **Design Competitor Landing Page:**

   Create an improved version that beats original on:

   **10 Ways to Be 10% Better:**
   1. **Headline:** More specific benefit
   2. **Pricing:** More transparent, better value
   3. **CTA:** Stronger, more urgent
   4. **Social Proof:** More abundant, specific
   5. **Trust Signals:** Stronger guarantee
   6. **Features:** Highlight what original lacks
   7. **Copy:** Clearer, more benefit-focused
   8. **Design:** Cleaner, less friction
   9. **Load Speed:** Faster performance
   10. **Mobile UX:** Better touch targets

6. **Write Tests for Competitor Version:**

   Create: `[business-slug]/tests/competitor.test.js`

   Additional tests:
   - Assert competitor has stronger headline
   - Assert competitor pricing is more transparent
   - Assert competitor has more social proof
   - Assert competitor loads faster
   - Assert competitor has better mobile UX

7. **Implement Competitor Landing Page:**

   Create files:
   ```
   [business-slug]/competitor/index.html
   [business-slug]/competitor/styles.css
   [business-slug]/competitor/script.js
   ```

   **Key differences to implement:**

   ```html
   <!-- ORIGINAL (Weak) -->
   <h1>Resume Optimization Service</h1>
   <button>Get Started</button>
   <p>Pricing: Contact Us</p>

   <!-- COMPETITOR (Stronger) -->
   <h1>Get 3X More Interviews in 48 Hours with ATS-Beating Resumes</h1>
   <button data-testid="cta-hero">
     Optimize My Resume Now - Only $29
   </button>
   <div class="transparent-pricing">
     <span class="price">$29</span> one-time fee
     <span class="guarantee">100% Money-Back Guarantee</span>
   </div>
   ```

8. **Add Competitive Comparison Section:**

   Include on competitor page:

   ```html
   <section class="comparison">
     <h2>Why Switch from [Original]?</h2>
     <table>
       <tr>
         <th>Feature</th>
         <th>[Original]</th>
         <th>Us ✓</th>
       </tr>
       <tr>
         <td>Price</td>
         <td>$49</td>
         <td><strong>$29</strong> (40% less)</td>
       </tr>
       <tr>
         <td>Turnaround</td>
         <td>5-7 days</td>
         <td><strong>24 hours</strong></td>
       </tr>
       <tr>
         <td>Guarantee</td>
         <td>7-day refund</td>
         <td><strong>Interview guarantee or free redo</strong></td>
       </tr>
       <tr>
         <td>Cover Letter</td>
         <td>+$29</td>
         <td><strong>Included free</strong></td>
       </tr>
     </table>
     <button>Switch and Save 40% Today</button>
   </section>
   ```

9. **Configure Split Testing:**

   Set up traffic distribution:
   ```javascript
   // In index.html at root
   const variant = Math.random() < 0.5 ? 'original' : 'competitor';
   const winningVariety = 'v2'; // or whichever won A/B test

   if (variant === 'original') {
     window.location.href = `./${winningVariety}/index.html`;
   } else {
     window.location.href = './competitor/index.html';
   }

   // Track which version user saw
   trackEvent('variant_assigned', { variant });
   ```

10. **Set Up Comparison Tracking:**

    Create: `[business-slug]/analytics-config.json`

    ```json
    {
      "businessName": "[Business Name]",
      "variants": {
        "original": {
          "url": "/v2/",
          "name": "Original (V2)"
        },
        "competitor": {
          "url": "/competitor/",
          "name": "Competitor"
        }
      },
      "comparisonMetrics": [
        "conversion_rate",
        "engagement_score",
        "time_on_page",
        "bounce_rate"
      ],
      "winConditions": {
        "primary": "conversion_rate",
        "minimumVisitors": 100,
        "confidenceLevel": 0.95
      }
    }
    ```

11. **Run All Tests:**

    ```bash
    npm test -- [business-slug]/tests/competitor.test.js
    npx playwright test [business-slug]/tests/competitor.e2e.spec.js
    npm run test:lighthouse -- [business-slug]/competitor
    ```

    All tests must pass ✅

12. **Deploy Both Versions:**

    ```bash
    # Deploy to GitHub Pages
    git add [business-slug]/competitor/
    git add [business-slug]/index.html (traffic splitter)
    git commit -m "feat: deploy competitor for [business-name]

    Competitive advantages:
    - [Advantage 1]
    - [Advantage 2]
    - [Advantage 3]

    Split testing: 50/50 traffic"

    git push origin [branch-name]
    ```

13. **Create Competition Dashboard:**

    Create: `[business-slug]/COMPETITION.md`

    ```markdown
    # [Business Name] - Original vs Competitor Battle

    **Start Date:** [Date]
    **Status:** 🔴 In Progress

    ## Competitors

    ### Original (Winning Variety)
    - **URL:** /v2/
    - **Value Prop:** [Original value prop]
    - **Price:** $X

    ### Competitor (Our Challenger)
    - **URL:** /competitor/
    - **Value Prop:** [Improved value prop]
    - **Price:** $Y (Z% cheaper)

    ## Competitive Advantages (Competitor)

    1. **[Advantage 1]:** [How we're better]
    2. **[Advantage 2]:** [How we're better]
    3. **[Advantage 3]:** [How we're better]

    ## Live Metrics

    | Metric | Original | Competitor | Winner |
    |--------|----------|------------|---------|
    | Visitors | [N] | [N] | - |
    | Conversions | [N] | [N] | - |
    | Conv Rate | [X%] | [X%] | - |
    | Engagement | [score] | [score] | - |
    | Avg Time | [Xs] | [Xs] | - |

    **Current Leader:** ⏳ Need more data (minimum 100 visitors each)

    ## Weekly Updates

    ### Week 1 (Date)
    - Competitor leading by [X%]
    - Key insight: [What's working]

    [Auto-generated each week]

    ## Final Results (Week 4)

    **Winner:** 🏆 [Original or Competitor]
    **Margin:** [+X%]
    **Statistical Significance:** [95%+]

    **Why they won:**
    - [Reason 1]
    - [Reason 2]
    - [Reason 3]

    **Lessons Learned:**
    - [Lesson 1]
    - [Lesson 2]

    **Next Actions:**
    - [ ] Deploy winner as primary
    - [ ] Archive loser
    - [ ] Apply learnings to other businesses
    ```

14. **Schedule Weekly Reports:**

    Set up automated reporting:
    ```bash
    # Add to cron or GitHub Actions
    # Every Monday at 9 AM
    0 9 * * 1 npm run compare-competitors [business-slug]
    ```

15. **Generate Summary:**

    ```markdown
    ## Competitor Deployment Summary

    **Business:** [Business Name]
    **Competitor Name:** [Name]
    **Deployment Date:** [Date]

    ### Competitive Advantages:
    ✓ [Advantage 1]
    ✓ [Advantage 2]
    ✓ [Advantage 3]

    ### Key Differentiators:
    - **Pricing:** $X vs. their $Y ([Z]% cheaper)
    - **Speed:** [Our speed] vs. their [their speed]
    - **Features:** [Unique feature] they don't have

    ### Testing Setup:
    ✓ 50/50 traffic split configured
    ✓ Analytics tracking both versions
    ✓ Weekly automated reports scheduled
    ✓ Comparison dashboard created

    ### URLs:
    - Original: https://[domain]/[business-slug]/v2/
    - Competitor: https://[domain]/[business-slug]/competitor/
    - Dashboard: https://[domain]/[business-slug]/COMPETITION.md

    ### Next Check-in: [Date - 1 week from now]

    ### Success Criteria:
    Winner declared after 4 weeks or 100+ visitors per variant with 95% confidence.
    ```

## Competitive Philosophy

### Be Genuinely Better, Not Just Cheaper

**Good Competition:**
- Solve the same problem in a measurably better way
- Compete on value, not just price
- Address real weaknesses, not superficial ones
- Provide better customer experience

**Bad Competition:**
- Just copying with lower price (unsustainable)
- Fake scarcity or urgency
- Misleading comparisons
- Unsubstantiated claims

### Win on Multiple Fronts

Don't just be 50% cheaper OR 2x better features. Be:
- 20% cheaper AND
- 30% faster AND
- Better UX AND
- Stronger guarantee

Multiple small wins > One big win

## Success Criteria

- [ ] Competitor version created with clear advantages
- [ ] All tests pass (unit, E2E, Lighthouse)
- [ ] Traffic splitting configured (50/50)
- [ ] Analytics tracking both versions separately
- [ ] Comparison dashboard created
- [ ] Weekly reporting scheduled
- [ ] Deployed to GitHub Pages
- [ ] Competition.md documented

## Example Usage

```bash
/deploy-competitor resumegenius-ai
```

This would:
1. Analyze ResumeGenius AI original
2. Find weaknesses and opportunities
3. Create superior competitor version
4. Deploy with 50/50 split testing
5. Track performance head-to-head

---

**Now create the competitor version that will WIN.**
