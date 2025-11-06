# Complete Book Creation Workflow

This is your step-by-step guide to creating a professional children's book from concept to print-ready files.

**Total Time:** 10-14 days for first book, 3-5 days for subsequent books

---

## Phase 1: Concept & Planning (Day 1)

### Step 1: Choose Your Niche (2-3 hours)

**Research Process:**
1. Go to Amazon.com > Books > Children's Books
2. Browse bestseller lists in subcategories:
   - Children's Emotions Books
   - Children's Social Skills Books
   - Animal Stories
   - ABC Books
   - Bedtime Stories
   - First Experiences

3. Look for patterns in top 20 books:
   - What themes are popular?
   - What illustration styles dominate?
   - What age ranges have most competition vs. gaps?
   - What price points are common?

4. Use Amazon's "Customers also bought" feature to find related niches

**Choose Your Book Concept:**
- [ ] Age range: [2-3 / 3-5 / 5-7]
- [ ] Theme: [emotions / education / animals / adventure / bedtime / etc.]
- [ ] Specific topic: [Be very specific, e.g., "managing anger through breathing"]
- [ ] Educational goal: [What will children learn?]
- [ ] Unique angle: [What makes yours different from existing books?]

**Market Validation:**
- [ ] Found 10+ successful books in this niche
- [ ] Identified what works in these books
- [ ] Spotted opportunities to improve or differentiate
- [ ] Confirmed target age group needs books on this topic

### Step 2: Story Outline (1-2 hours)

**Create Basic Structure:**

**Beginning (Pages 1-6):**
- Introduce main character
- Show their normal world
- Present the problem/challenge/theme

**Middle (Pages 7-18):**
- Character experiences problem
- Tries different solutions
- Learns and grows
- Faces setbacks (builds resilience message)

**End (Pages 19-24):**
- Character succeeds using new skills/knowledge
- Resolution feels earned
- Subtle reinforcement of lesson
- Emotionally satisfying conclusion

**Outline Template:**
```
WORKING TITLE: [Title]
TARGET AGE: [Age range]
PAGE COUNT: [16, 24, or 32]
LESSON/THEME: [Core message]

PLOT SUMMARY (3-4 sentences):
[Brief overview of the story]

PAGE-BY-PAGE OUTLINE:
Page 1: [What happens]
Page 2: [What happens]
[Continue for all pages]
```

---

## Phase 2: Story Generation (Days 2-3)

### Step 1: Generate Story with AI (2-4 hours)

**Process:**
1. Open ChatGPT Plus or Claude Pro
2. Use prompts from `templates/ai-prompts/story-generation-prompts.md`
3. Generate 3-5 complete story versions
4. Save each version to separate documents

**Prompt Checklist:**
- [ ] Specified age range
- [ ] Specified page count
- [ ] Defined theme and lesson
- [ ] Requested image descriptions for each page
- [ ] Set vocabulary level
- [ ] Mentioned diverse, inclusive characters

**Example Session:**
```
Prompt: [Use master story generation prompt]

Review Output:
- Does it match page count?
- Is vocabulary age-appropriate?
- Are image descriptions clear?
- Does story have emotional arc?

Refine: "Make page 8 simpler" or "Add more emotion to the ending"
```

### Step 2: Refine and Combine (2-3 hours)

**Review Process:**
1. Read all versions aloud
2. Mark favorite pages/phrases
3. Check pacing (does each page turn feel natural?)
4. Verify reading level with Hemingway Editor or similar tool

**Editing Checklist:**
- [ ] Every page advances the story
- [ ] Vocabulary is consistent and age-appropriate
- [ ] No sudden jumps in logic or setting
- [ ] Emotions are clear and relatable
- [ ] Ending feels satisfying
- [ ] No problematic content (stereotypes, scary elements, etc.)
- [ ] Story respects children's intelligence

**Reading Level Check:**
- Ages 2-3: Aim for Flesch-Kincaid Grade Level 0-1
- Ages 4-5: Aim for Grade Level 1-2
- Ages 6-7: Aim for Grade Level 2-3

**Tools:**
- Hemingway Editor (free online)
- Readable.com
- Or ask AI: "Check this text for reading level: [paste text]"

### Step 3: Prepare Final Story Document (1 hour)

**Format:**
```
TITLE: [Final Title]
SUBTITLE: [Optional subtitle]
AGE RANGE: [X-X years]
WORD COUNT: [total]

PAGE 1:
[Text]

[IMAGE DESCRIPTION: Detailed description for illustration]

PAGE 2:
[Text]

[IMAGE DESCRIPTION: Detailed description]

[Continue for all pages...]

FRONT COVER:
[Text that will appear]
[IMAGE DESCRIPTION: Cover scene]

BACK COVER COPY:
[2-3 sentence description for parents]

AUTHOR BIO:
[Brief bio, 2-3 sentences]
```

**Save as:** `book-[working-title]-final-story.txt`

---

## Phase 3: Character & Illustration Creation (Days 4-7)

### Step 1: Character Design (Half day)

**Process:**
1. Open Midjourney Discord
2. Use character prompts from `templates/ai-prompts/midjourney-prompts.md`
3. Generate 4-6 character design variations
4. Choose the best one

**Character Creation Prompt Template:**
```
children's book illustration, [character description], white background, character design sheet, multiple poses, full body, Pixar style, colorful, friendly, simple shapes --ar 1:1 --v 6 --s 100
```

**Character Checklist:**
- [ ] Clear, distinctive appearance
- [ ] Age-appropriate design
- [ ] Expressive face
- [ ] Simple enough to stay consistent
- [ ] Appealing to target age group
- [ ] Diverse representation (if applicable)
- [ ] Original (not similar to copyrighted characters)

**Save:**
- Download high-res version (upscale if needed)
- Copy image URL for use as `--cref` in future prompts
- Document in project folder: `character-reference.jpg`

### Step 2: Style Reference (1-2 hours)

**Create Style Test:**
1. Generate 3-4 illustrations in different styles:
   - Watercolor
   - Bold and colorful
   - Classic storybook
   - Minimalist

2. Choose the style that best fits your story and target age

3. Generate one perfect illustration in your chosen style

4. Save image URL as style reference (`--sref`)

**Style Selection Criteria:**
- Appropriate for age group
- Matches story mood (gentle, playful, adventurous)
- Stands out in Amazon thumbnails
- Printable (not too dark or too light)
- Consistent with market expectations for your niche

### Step 3: Generate All Illustrations (2-3 days)

**Batch Generation Strategy:**

**Day 1: Test & Key Scenes (4-6 hours)**
- Generate 3-4 test scenes using `--cref` and `--sref`
- Verify character consistency
- Adjust prompts if needed
- Generate 4 key scenes:
  - Opening scene
  - Mid-point emotional scene
  - Climax scene
  - Ending scene

**Day 2: Middle Scenes (4-6 hours)**
- Generate pages 5-12
- Maintain consistent seed and references
- Review for consistency with key scenes

**Day 3: Remaining Scenes (4-6 hours)**
- Generate pages 13-20 (or through 24/32)
- Generate 2-3 alternative versions of any weak images
- Final consistency check

**Per-Scene Process:**
1. Review story text and image description for that page
2. Craft Midjourney prompt using character/style references
3. Generate image
4. Evaluate: Does it match the story moment? Is character consistent?
5. Regenerate if needed or create variations (V1-V4)
6. Download best version in high resolution
7. Name file: `page-01.png`, `page-02.png`, etc.

**Standard Scene Prompt:**
```
children's book illustration, [CHARACTER] [ACTION], [SETTING], [MOOD], storybook style, clean composition, suitable for children ages [X] --ar 1:1 --v 6 --cref [character URL] --sref [style URL] --s 100 --seed [consistent seed]
```

**Quality Checklist per Image:**
- [ ] Character looks consistent
- [ ] Matches story moment accurately
- [ ] Appropriate emotion/expression
- [ ] Clean, uncluttered composition
- [ ] Colors are vibrant but not overwhelming
- [ ] High resolution (minimum 2048x2048)
- [ ] Safe for children (no scary elements)

### Step 4: Create Cover (Half day)

**Front Cover:**
```
children's book cover illustration, [MAIN CHARACTER] [signature action], [key setting element], eye-catching composition, colorful, professional, suitable for Amazon thumbnail, ages [X], storybook cover art --ar 4:5 --v 6 --cref [character URL] --sref [style URL] --s 120
```

**Cover Design Criteria:**
- Main character prominently featured
- Clear, not cluttered
- Readable as thumbnail (test at 100x160px)
- Conveys story mood
- Eye-catching colors
- Leaves space for title text

**Back Cover:**
- Can use a supporting scene from the book
- Or generate new illustration of secondary characters/elements
- Should complement front cover

---

## Phase 4: Layout & Book Design (Days 8-10)

### Step 1: Set Up Page Layout (2-3 hours)

**Choose Your Tool:**

**Option A: Canva Pro (Easiest)**
1. Create custom size: 8.5" x 8.5" (or your chosen size)
2. Create 32 pages (for 24-page story + cover pages)
3. Set up bleed (0.125" on all sides for print)

**Option B: Affinity Publisher (More Professional)**
1. New document: 8.5" x 8.5", facing pages
2. Set margins: 0.5" all sides
3. Set bleed: 0.125" all sides
4. Add 32 pages

**Standard Children's Book Sizes:**
- 8" x 8" (most common for ages 2-5)
- 8.5" x 8.5" (common, good for print)
- 8.5" x 11" (common for ages 5-7)
- 6" x 9" (early readers)

**KDP Print Requirements:**
- Minimum 24 pages, maximum 828 pages
- Bleed: 0.125" on all sides
- Margins: At least 0.25" (recommend 0.5")
- Resolution: 300 DPI minimum for images
- Color space: RGB for interior, CMYK for cover

### Step 2: Import Illustrations (1-2 hours)

**Process:**
1. Import all page illustrations (page-01.png through page-24.png)
2. Place each on its corresponding page
3. Ensure images are full-bleed (extend to bleed edge)
4. Verify all images are at least 300 DPI

**Layout Options:**
- **Full bleed:** Image covers entire page, text overlaid
- **Image + text separate:** Image on top 2/3, text on bottom 1/3
- **Alternating:** Text on one page, illustration on facing page

**For Ages 2-4:** Full bleed with minimal text overlay works best
**For Ages 5-7:** More text separate from image is acceptable

### Step 3: Add Text (2-3 hours)

**Typography Guidelines:**

**Font Choices:**
- **Ages 2-4:** Large, rounded, sans-serif (e.g., Arial Rounded, Quicksand, Fredoka)
- **Ages 5-7:** Clean serif or sans-serif (e.g., Garamond, Georgia, Open Sans)
- **Avoid:** Overly decorative fonts that are hard to read

**Font Sizes:**
- **Ages 2-4:** 18-24pt
- **Ages 5-7:** 14-18pt
- Adjust based on word count per page

**Text Placement:**
- Keep text in safe zone (not too close to edges)
- Ensure high contrast with background (use text box or shadow if needed)
- Maintain consistent placement across pages
- Test readability at actual print size

**Text Formatting:**
- Left-aligned is easiest for young readers
- Ample line spacing (1.3-1.5x)
- Short lines (30-50 characters max)
- Consistent paragraph spacing

### Step 4: Design Front & Back Cover (2-3 hours)

**Cover Components:**

**Front Cover:**
- Cover illustration (full bleed)
- Title (large, readable)
- Subtitle (if applicable)
- Author name
- Age range indicator (optional: "Ages 3-5")

**Spine (if applicable):**
- Title
- Author name
- Publisher name (optional)
- Note: KDP requires 130+ pages for spine text

**Back Cover:**
- Back illustration or solid color
- Book description (2-4 sentences for parents)
- Author bio (1-2 sentences)
- Barcode space (2" x 1.25" in lower right - KDP adds this)
- Age range
- Category indicators

**Cover Text Guidelines:**
- Title: Large, bold, contrasting color
- Readable as thumbnail (test at small size!)
- Professional but playful
- Consider adding subtle drop shadow or outline for readability

**Tools for Adding Text:**
- Canva: Use text tools directly
- Affinity/InDesign: Create text frames
- Or design in Photoshop/GIMP if more comfortable

### Step 5: Quality Review (1-2 hours)

**Complete Checklist:**

**Content:**
- [ ] All pages in correct order
- [ ] No typos or grammar errors
- [ ] Text is readable at print size
- [ ] Images are high quality (300 DPI minimum)
- [ ] Consistent layout throughout
- [ ] Bleed extends properly on all pages
- [ ] Text doesn't go into bleed area

**Visual:**
- [ ] Color consistency across all pages
- [ ] Character looks consistent
- [ ] No pixelation or blurriness
- [ ] Cover is eye-catching at thumbnail size
- [ ] Back cover has proper barcode space

**Print Readiness:**
- [ ] Correct dimensions for KDP
- [ ] Proper bleed settings
- [ ] RGB color mode for interior
- [ ] All fonts embedded or outlined
- [ ] Final page count is even number

---

## Phase 5: Export & Prepare for Publishing (Day 11)

### Step 1: Export Print Interior (30 min)

**Export Settings:**

**From Canva:**
1. Download > PDF Print
2. Choose "Download with crop marks and bleed"
3. Ensure 300 DPI
4. Save as: `book-title-interior.pdf`

**From Affinity Publisher:**
1. File > Export > PDF
2. PDF/X-1a format
3. Include bleed (0.125")
4. Embed all fonts
5. 300 DPI
6. Save as: `book-title-interior.pdf`

**Verify PDF:**
- [ ] Opens correctly
- [ ] All pages present
- [ ] Images look sharp
- [ ] Text is crisp
- [ ] Bleed is visible
- [ ] File size reasonable (<400MB)

### Step 2: Export eBook Interior (30 min)

**For Kindle eBooks:**
- Images should be 2560 x 1600 pixels (landscape) or 1600 x 2560 (portrait)
- Or use KDP's Create tool to build from images + text
- Or export as PDF and use KDP's PDF converter

**Simple Method:**
- Export each page as high-res JPG (2560x2560 pixels)
- Use Amazon's Kindle Kids' Book Creator (free tool)
- Import images, add text if not burned in
- Export as .mobi or upload directly to KDP

### Step 3: Create Cover PDF (30 min)

**KDP Cover Requirements:**
- Single PDF with front cover, spine (if applicable), and back cover
- Calculate exact dimensions using KDP Cover Calculator
- Required: Title, author name, barcode space

**Using KDP Cover Template:**
1. Go to KDP > Cover Calculator
2. Enter: Interior type (black/white or color), paper type, page count, trim size
3. Download custom template
4. Place your cover design onto template
5. Export as single PDF

**Cover Dimensions Example (8.5" x 8.5" book, 32 pages, color):**
- Total width: ~17.25" (includes spine)
- Height: 8.75" (includes bleed)
- Use calculator for exact dimensions

**Export Settings:**
- PDF format
- 300 DPI minimum
- RGB color mode (KDP converts to CMYK)
- Flatten all layers

### Step 4: Final Checks (1 hour)

**Use KDP Previewer:**
1. Upload files to KDP (draft, not published)
2. Use online previewer to check every page
3. Look for:
   - Correct page order
   - Images aligned
   - Text readable
   - Cover looks correct
   - No errors or warnings

**Print Proof:**
- Strongly recommended for first book
- Order physical proof copy ($5-10)
- Review in-hand before publishing
- Check colors, text size, binding

---

## Phase 6: Backup & Organization (Day 11)

### Create Project Archive

**Folder Structure:**
```
Book - [Title]/
├── 01-story/
│   ├── story-draft-v1.txt
│   ├── story-draft-v2.txt
│   └── story-final.txt
├── 02-characters/
│   ├── character-reference.png
│   ├── character-url.txt
│   └── emotion-sheet.png
├── 03-illustrations/
│   ├── page-01.png
│   ├── page-02.png
│   └── [all pages...]
├── 04-layout-files/
│   ├── book-layout.afpub (or .canva link)
│   └── working-files/
├── 05-final-pdfs/
│   ├── book-interior-print.pdf
│   ├── book-cover-print.pdf
│   └── book-ebook-files/
├── 06-marketing/
│   ├── book-description.txt
│   ├── keywords.txt
│   ├── social-media-images/
│   └── author-bio.txt
└── project-notes.txt
```

**Document Important Info:**
- Midjourney seeds and reference URLs
- Font names and sizes used
- Color codes
- KDP book details (ASIN after publishing)
- Costs and time tracking

---

## Troubleshooting

### "My character keeps changing appearance"
- Use `--cref` consistently with same image URL
- Use same seed across all images
- Keep character description identical in every prompt
- Generate emotion sheet once character is established

### "Images are too low resolution"
- Always upscale Midjourney images
- Generate at larger size initially
- Use `--v 6` for best quality
- Verify 300 DPI when placed in layout

### "Text is hard to read over images"
- Add semi-transparent text box behind text
- Use contrasting text color with subtle outline/shadow
- Place text in simpler areas of image
- Consider separate page for text vs. illustration

### "Book feels too busy/cluttered"
- Simplify illustration prompts ("clean composition," "simple background")
- Reduce text per page
- Increase white space
- Use more consistent layout

### "Colors look different in print vs. screen"
- Always order proof copy before wide release
- Colors will be slightly less vibrant in print
- Avoid very dark backgrounds (expensive ink, doesn't print well)
- Test critical colors in proof

---

## Next Steps

After completing your book:
1. Proceed to `docs/workflows/kdp-publishing-workflow.md`
2. Set up Amazon KDP listing
3. Publish your book
4. Order proof copy
5. Start marketing (see `docs/marketing-guide.md`)

**Then repeat this process for book #2!**

Your goal: Publish 1-2 books per month to build your catalog.
