---
description: Generate a new AI-powered business idea with complete analysis
---

You are running the `/new-business` command to generate a comprehensive business idea.

## Your Task

1. **Understand the Input:**
   - If the user provided an industry/niche/problem, use that as the focus
   - If no input provided, generate a business idea in a promising AI-powered category

2. **Conduct Research:**
   - Search for market size and competitive landscape
   - Find pain points and existing solutions
   - Research pricing and willingness to pay
   - Identify AI implementation opportunities

3. **Generate Complete Business Plan:**
   Use the Business Idea Generator agent framework to create:
   - Business name and tagline
   - Market analysis and business overview
   - Target market and pricing strategy
   - Core features (MVP)
   - Revenue projections (conservative/moderate/success)
   - Startup costs (<$500)
   - Time to MVP
   - Competitive advantages
   - First 3 customers strategy
   - Potential challenges and mitigations

4. **Append to MASTER_PLAN.md:**
   - Add the new business idea to the appropriate section
   - Update the table of contents if needed
   - Increment the business number

5. **Create Directory Structure:**
   ```bash
   mkdir -p [business-slug]/v{1..5}
   mkdir -p [business-slug]/competitor
   mkdir -p [business-slug]/tests
   ```

6. **Generate README:**
   Create `[business-slug]/README.md` with:
   - Business overview
   - Landing page varieties (5)
   - Testing instructions
   - Deployment status
   - Analytics links (once deployed)

7. **Initialize Git Tracking:**
   - Stage the new files
   - Prepare for commit

8. **Output Summary:**
   Provide a summary including:
   - Business name and tagline
   - Key differentiator
   - Revenue potential
   - Next steps (build landing pages)

## Example Usage

```
/new-business fitness for busy professionals
```

This would generate a complete business idea targeting fitness solutions for busy professionals, add it to the master plan, create directory structure, and provide next steps.

## Success Criteria

- [ ] Complete business plan generated
- [ ] Research conducted (market size, competitors)
- [ ] Added to MASTER_PLAN.md
- [ ] Directory structure created
- [ ] README generated
- [ ] Next steps provided

---

**Now execute this workflow based on the user's input.**
