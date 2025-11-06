---
description: Generate performance comparison report across all landing pages and declare winners
---

You are running the `/compare-performance` command to analyze and compare landing page performance.

## Your Task

1. **Fetch Analytics Data:**

   For each business and variety, collect:
   - Unique visitors
   - Page views
   - CTA clicks
   - Conversion events
   - Bounce rate
   - Average time on page
   - Scroll depth milestones
   - Device breakdown (mobile vs desktop)

2. **Calculate Key Metrics:**

   For each landing page:
   ```javascript
   conversionRate = (ctaClicks / uniqueVisitors) * 100
   engagementScore = (avgTimeOnPage * scrollDepth) / bounceRate
   mobileScore = mobileConversionRate / desktopConversionRate
   ```

3. **Determine Statistical Significance:**

   For each variety comparison:
   ```javascript
   // Need minimum 100 visitors per variety
   // Need 95% confidence level
   // Calculate using z-test for proportions
   ```

4. **Generate Comparison Report:**

   ```markdown
   # Landing Page Performance Report
   **Report Date:** [Date]
   **Time Period:** [Date Range]

   ## Executive Summary

   **Total Pages Analyzed:** [N]
   **Total Visitors:** [X]
   **Average Conversion Rate:** [Y%]
   **Best Performing Business:** [Business Name] ([Z%] conversion)
   **Best Performing Variety:** Variety [N] - [Name] ([Z%] conversion)

   ---

   ## Overall Winners 🏆

   ### Highest Conversion Rate:
   **[Business Name] - Variety [N]**
   - Conversion Rate: [X%]
   - Visitors: [N]
   - Conversions: [N]
   - Statistical Significance: [95%+ ✅ or Need more data ⏳]

   ### Highest Engagement:
   **[Business Name] - Variety [N]**
   - Engagement Score: [X]
   - Avg Time on Page: [X seconds]
   - Scroll Depth: [X%]

   ### Best Mobile Experience:
   **[Business Name] - Variety [N]**
   - Mobile Conversion: [X%]
   - Mobile vs Desktop Ratio: [X]

   ---

   ## Business-Level Analysis

   ### [Business #1: Business Name]

   | Variety | Visitors | Conversions | Rate | Engagement | Winner |
   |---------|----------|-------------|------|------------|---------|
   | V1: Minimal | [N] | [N] | [X%] | [score] | |
   | V2: Bold | [N] | [N] | [X%] | [score] | 🏆 |
   | V3: Story | [N] | [N] | [X%] | [score] | |
   | V4: Data | [N] | [N] | [X%] | [score] | |
   | V5: Interactive | [N] | [N] | [X%] | [score] | |

   **Winner:** Variety [N] - [Name]
   **Reason:** [Why it won - specific insights]
   **Statistical Significance:** [✅ 95%+ or ⏳ Need [X] more visitors]

   **Key Insights:**
   - [Insight 1 about what worked]
   - [Insight 2 about what didn't work]
   - [Insight 3 about audience preference]

   **Recommendation:** [Continue testing / Scale winner / Iterate on loser]

   [Repeat for all 20 businesses]

   ---

   ## Variety Performance Across All Businesses

   | Variety | Avg Conversion | Wins | Best For |
   |---------|----------------|------|----------|
   | V1: Minimal Clean | [X%] | [N]/20 | [Type of business] |
   | V2: Bold Conversion | [X%] | [N]/20 | [Type of business] |
   | V3: Story-Driven | [X%] | [N]/20 | [Type of business] |
   | V4: Data-Driven | [X%] | [N]/20 | [Type of business] |
   | V5: Interactive | [X%] | [N]/20 | [Type of business] |

   **Overall Best Variety:** [Variety Name]
   **Why:** [Analysis of why this variety performs best]

   ---

   ## Original vs Competitor Battle 🥊

   | Business | Original CR | Competitor CR | Winner | Margin |
   |----------|-------------|---------------|---------|---------|
   | [Business 1] | [X%] | [Y%] | [Name] | +[Z%] |
   | [Business 2] | [X%] | [Y%] | [Name] | +[Z%] |
   [... all 20 businesses]

   **Competitor Win Rate:** [N]/20 ([X%])

   **Why Competitors Win:**
   1. [Common advantage 1]
   2. [Common advantage 2]
   3. [Common advantage 3]

   **Why Originals Win:**
   1. [Common advantage 1]
   2. [Common advantage 2]

   ---

   ## Device Breakdown

   | Device | Visitors | Conversions | Rate |
   |--------|----------|-------------|------|
   | Desktop | [N] ([X%]) | [N] | [X%] |
   | Mobile | [N] ([X%]) | [N] | [X%] |
   | Tablet | [N] ([X%]) | [N] | [X%] |

   **Insight:** [Mobile-first vs desktop-first recommendations]

   ---

   ## Traffic Sources

   | Source | Visitors | Conversions | Rate | Best Business |
   |--------|----------|-------------|------|---------------|
   | Direct | [N] | [N] | [X%] | [Business] |
   | Organic | [N] | [N] | [X%] | [Business] |
   | Social | [N] | [N] | [X%] | [Business] |
   | Referral | [N] | [N] | [X%] | [Business] |

   ---

   ## Revenue Projections

   Based on current conversion rates and assumed pricing:

   | Business | Monthly Visitors | CR | Price | Projected Monthly Revenue |
   |----------|------------------|----|----|---------------------------|
   | [Business 1] | [N] | [X%] | $[Y] | $[Z] |
   [... all 20 businesses]

   **Total Projected Revenue:** $[X]/month across all businesses

   **Top 3 Revenue Generators:**
   1. [Business Name]: $[X]/month
   2. [Business Name]: $[Y]/month
   3. [Business Name]: $[Z]/month

   ---

   ## A/B Test Recommendations

   Based on performance data, here are the top 10 A/B tests to run:

   ### Test #1: [Business Name] - [Element to Test]
   **Hypothesis:** [What we think will happen]
   **Control:** [Current version]
   **Variant:** [What to change]
   **Expected Lift:** [+X%]
   **Confidence:** [High/Medium/Low]

   [Repeat for tests 2-10]

   ---

   ## Action Items

   ### Immediate (This Week):
   1. **Scale Winners:** Increase traffic to top 3 performing pages
   2. **Fix Critical Issues:** [Specific pages with <1% conversion]
   3. **Deploy Winning Variants:** Replace losers with winners for:
      - [Business 1]: Deploy V[N] as primary
      - [Business 2]: Deploy V[N] as primary

   ### Short-term (This Month):
   1. **Run A/B Tests:** Start top 5 tests from recommendations
   2. **Iterate on Losers:** Redesign bottom 3 performing pages
   3. **Content Updates:** Refresh copy on medium performers

   ### Long-term (This Quarter):
   1. **Build Out Winners:** Focus resources on top 5 businesses
   2. **Sunset Losers:** Consider dropping bottom 3 businesses
   3. **New Varieties:** Test V6, V7 based on learnings

   ---

   ## Methodology Notes

   **Data Collection Period:** [X days/weeks]
   **Minimum Sample Size:** 100 visitors per variety
   **Confidence Level:** 95%
   **Outliers Removed:** [Any anomalies noted]

   **Limitations:**
   - [Limitation 1 - e.g., "Low traffic on some pages"]
   - [Limitation 2 - e.g., "Short testing period"]
   - [Limitation 3 - e.g., "No actual purchases tracked yet"]

   ---

   ## Appendix: Raw Data

   [Link to CSV export or detailed data tables]

   ```

5. **Generate Visual Charts (ASCII Art):**

   Create simple bar charts for key metrics:
   ```
   Conversion Rate by Variety:

   V1: ████████ 3.2%
   V2: ████████████ 4.8%
   V3: ██████ 2.5%
   V4: ██████████ 4.1%
   V5: ██████████████ 5.5% 🏆
   ```

6. **Export Data:**

   Create CSV files:
   - `analytics/performance-summary.csv`
   - `analytics/business-comparison.csv`
   - `analytics/variety-performance.csv`
   - `analytics/original-vs-competitor.csv`

7. **Update README Files:**

   For each business, update its README with:
   - Current winning variety
   - Latest conversion rate
   - Link to analytics dashboard

8. **Send Notifications:**

   If integration exists, send summary to:
   - Slack/Discord
   - Email
   - Dashboard update

## Data Sources

1. **Umami Analytics:** API call to fetch events
2. **Cloudflare Analytics:** Backup data source
3. **Local Storage Logs:** Fallback from analytics.js
4. **Custom Endpoint:** If configured

## Success Criteria

- [ ] Data fetched for all landing pages
- [ ] Winners declared per business (if statistically significant)
- [ ] Overall patterns identified
- [ ] Recommendations generated
- [ ] Report saved to `analytics/report-[date].md`
- [ ] CSV exports created
- [ ] Action items clear and prioritized

## Example Usage

```bash
/compare-performance --period=7d
/compare-performance --period=30d
/compare-performance --business=resumegenius-ai
```

---

**Now fetch analytics data and generate the comprehensive report.**
