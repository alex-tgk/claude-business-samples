# Midjourney Prompts for Children's Book Illustrations

This guide provides tested prompts and techniques for creating consistent, professional children's book illustrations with Midjourney.

## Essential Midjourney Parameters for Children's Books

### Key Parameters to Use
- `--ar 1:1` or `--ar 4:5` - Aspect ratio (square works best for most books)
- `--seed [number]` - For consistency across illustrations
- `--cref [image URL]` - Character reference for consistent characters
- `--sref [image URL]` - Style reference for consistent art style
- `--v 6` - Use version 6 for best quality
- `--s [0-1000]` - Stylization (50-150 works well for children's books)
- `--c [0-100]` - Chaos/variety (keep low, 0-20, for consistency)

### Optimal Settings for Children's Books
```
--ar 1:1 --v 6 --s 100 --c 10
```

## Step-by-Step Character Creation Workflow

### Step 1: Create Your Main Character

**Prompt Template:**
```
children's book illustration, [character description], [clothing], [personality traits], white background, character design sheet, multiple poses, full body, Pixar style, colorful, friendly, simple shapes, age [X], [ethnicity], [distinctive features] --ar 1:1 --v 6 --s 100
```

**Example Prompts:**

**For a Young Fox Character:**
```
children's book illustration, cute orange fox cub, wearing blue overalls and red sneakers, curious and friendly expression, white background, character design sheet, multiple poses, full body, Pixar style, colorful, bright eyes, fluffy tail, simple shapes --ar 1:1 --v 6 --s 100
```

**For a Human Child:**
```
children's book illustration, 5-year-old girl with curly brown hair, wearing yellow dress with flower pattern, joyful and energetic, white background, character design sheet, multiple poses, full body, Pixar style, colorful, brown skin, bright smile, simple shapes --ar 1:1 --v 6 --s 100
```

**For a Diverse Cast:**
```
children's book illustration, character lineup, diverse group of young animal friends, bear in green shirt, rabbit in purple dress, raccoon in orange hoodie, white background, character design sheet, Pixar style, colorful, friendly expressions, full body, simple shapes --ar 16:9 --v 6 --s 100
```

**Important:** Save the image URL of your best character design. You'll use this as a `--cref` in all subsequent scene illustrations.

### Step 2: Create a Style Reference

Generate one perfect illustration in your desired style, then use it as a style reference for all other images.

**Style Reference Prompt:**
```
children's book illustration, [simple scene], soft watercolor and digital art, pastel colors, gentle lighting, whimsical, warm atmosphere, textured brushstrokes, storybook style, professional, clean composition --ar 1:1 --v 6 --s 150
```

**Example:**
```
children's book illustration, cozy bedroom with toys and books, soft watercolor and digital art, pastel colors, warm sunlight through window, whimsical, textured brushstrokes, storybook style, professional --ar 1:1 --v 6 --s 150
```

Save this image URL to use as `--sref` in your scene illustrations.

### Step 3: Generate Scene Illustrations

Now combine your character reference and style reference:

**Scene Illustration Template:**
```
children's book illustration, [character] [action/emotion], [setting description], [mood/atmosphere], storybook style, clean composition, suitable for children ages [X] --ar 1:1 --v 6 --cref [character URL] --sref [style URL] --s 100
```

**Example Scenes:**

**Opening Scene:**
```
children's book illustration, cute orange fox waking up in cozy bedroom, stretching and yawning, warm morning sunlight, happy mood, storybook style, clean composition, suitable for children ages 3-7 --ar 1:1 --v 6 --cref https://... --sref https://... --s 100
```

**Action Scene:**
```
children's book illustration, orange fox running through flower meadow, excited expression, butterflies flying around, bright sunny day, joyful atmosphere, storybook style, clean composition, suitable for children ages 3-7 --ar 1:1 --v 6 --cref https://... --sref https://... --s 100
```

**Emotional Scene:**
```
children's book illustration, orange fox sitting alone looking sad, under a tree, cloudy sky, gentle mood, soft colors, storybook style, clean composition, suitable for children ages 3-7 --ar 1:1 --v 6 --cref https://... --sref https://... --s 100
```

**Resolution Scene:**
```
children's book illustration, orange fox surrounded by friends, group hug, big smiles, colorful background with hearts, warm happy mood, storybook style, clean composition, suitable for children ages 3-7 --ar 1:1 --v 6 --cref https://... --sref https://... --s 100
```

## Art Style Variations

### Watercolor Style
```
soft watercolor children's book illustration, [scene], gentle brushstrokes, pastel colors, white space, whimsical, traditional storybook feel, dreamy atmosphere --ar 1:1 --v 6 --s 120
```

### Bold and Colorful (Modern)
```
vibrant children's book illustration, [scene], bold outlines, saturated colors, flat design, modern storybook style, playful, high contrast, clean shapes --ar 1:1 --v 6 --s 80
```

### Classic Storybook
```
classic children's book illustration, [scene], detailed linework, rich colors, traditional storybook art, warm lighting, professional picture book style, nostalgic --ar 1:1 --v 6 --s 150
```

### Minimalist
```
simple children's book illustration, [scene], minimal details, soft pastel colors, lots of white space, clean geometric shapes, modern minimal style, suitable for toddlers --ar 1:1 --v 6 --s 70
```

### 3D Rendered (Pixar-style)
```
3D rendered children's book illustration, [scene], Pixar style animation, soft lighting, vibrant colors, cute character design, professional CGI, warm atmosphere --ar 1:1 --v 6 --s 100
```

## Character Consistency Tips

### Method 1: Character Reference (--cref)
1. Create one perfect character image
2. Copy the image URL (right-click > Copy Link)
3. Use `--cref [URL]` in every subsequent prompt
4. Midjourney will maintain the character's appearance

### Method 2: Seed + Detailed Description
1. Find a seed that works well: `--seed 12345`
2. Use identical character description in every prompt
3. Keep style parameters consistent

### Method 3: Blend Both Methods
```
--seed 67890 --cref https://... --sref https://...
```

## Common Prompt Structures

### Full Page Illustration
```
children's book illustration, full page scene, [detailed scene], [character] [action], [environment details], [mood/lighting], storybook style, professional, clean composition --ar 1:1 --v 6
```

### Character Focus
```
children's book illustration, close-up of [character], [emotion/expression], [background element], soft focus background, suitable for children, warm colors, storybook style --ar 1:1 --v 6
```

### Establishing Shot
```
children's book illustration, wide view of [location], [character] small in scene, [time of day], [atmosphere], establishing shot, storybook style, professional picture book art --ar 4:5 --v 6
```

## Emotions & Expressions Library

Create a reference sheet of emotions for your character:

```
children's book illustration, [character] emotion reference sheet, showing different emotions: happy, sad, angry, surprised, scared, excited, thinking, sleeping, white background, character design, multiple expressions, Pixar style --ar 16:9 --v 6 --cref https://...
```

## Settings & Backgrounds

### Indoor Scenes
```
children's book illustration, cozy [room type], warm lighting, soft colors, age-appropriate details, [specific furniture/toys], storybook style, inviting atmosphere --ar 1:1 --v 6
```

### Outdoor Scenes
```
children's book illustration, [outdoor setting], [time of day], [weather], natural elements, soft lighting, storybook landscape, suitable for children's book --ar 1:1 --v 6
```

### Magical/Fantasy Settings
```
children's book illustration, whimsical [fantasy setting], magical atmosphere, sparkles and soft glow, dreamy colors, enchanted, storybook fantasy art, child-friendly --ar 1:1 --v 6
```

## Cover Design Prompts

### Front Cover (without text)
```
children's book cover illustration, [main character] [signature action/pose], [key setting element], eye-catching composition, colorful, professional, suitable for Amazon thumbnail, [age range], storybook cover art, vertical composition --ar 4:5 --v 6 --cref https://... --sref https://...
```

### Back Cover Scene
```
children's book back cover illustration, [supporting characters or secondary scene], [setting], soft colors, supporting visual to front cover, storybook style, professional --ar 4:5 --v 6 --sref https://...
```

## Age-Appropriate Style Adjustments

### Ages 0-3 (Board Books)
- Use simple shapes and bold colors
- Minimal background details
- High contrast
- Larger, clearer characters
```
simple toddler book illustration, [subject], bold colors, minimal details, high contrast, large simple shapes, white space, board book style --ar 1:1 --v 6 --s 50
```

### Ages 3-5 (Picture Books)
- More detail but still clear
- Warm, inviting colors
- Expressive characters
- Engaging backgrounds
```
preschool children's book illustration, [scene], warm colors, friendly characters, clear details, engaging, picture book style, suitable for ages 3-5 --ar 1:1 --v 6 --s 100
```

### Ages 5-7 (Early Readers)
- More sophisticated compositions
- Richer details
- Varied perspectives
- Complex scenes
```
children's book illustration, [scene], detailed environment, rich colors, dynamic composition, early reader picture book style, ages 5-7 --ar 1:1 --v 6 --s 130
```

## Quality Control Checklist

Before accepting an illustration, verify:
- [ ] Character looks consistent with previous images
- [ ] Style matches your book's aesthetic
- [ ] Appropriate for target age group
- [ ] Clear composition (not too busy)
- [ ] Correct emotions/actions depicted
- [ ] High enough resolution (at least 2048x2048)
- [ ] Colors are warm and inviting
- [ ] No scary or inappropriate elements
- [ ] Text space available (if needed for layout)

## Troubleshooting Common Issues

### Issue: Character looks different in each image
**Solution:** Use `--cref` with a clear character reference image, or increase use of seed consistency

### Issue: Images too detailed/busy
**Solution:** Add phrases like "simple composition," "clean design," "minimal background," lower `--s` value to 70-80

### Issue: Wrong mood/atmosphere
**Solution:** Be more specific about lighting and mood: "warm morning light," "soft gentle atmosphere," "bright cheerful sunny day"

### Issue: Style inconsistent
**Solution:** Use `--sref` consistently, keep all style parameters identical across prompts

### Issue: Image quality not high enough
**Solution:** Always generate at least 2048x2048, upscale if needed, use `--v 6` for best quality

## Batch Generation Strategy

For a 24-page book, generate illustrations in batches:

**Batch 1: Character + Style (Day 1)**
- Create character reference sheet
- Create style reference image
- Test 2-3 scenes to verify consistency

**Batch 2: Key Scenes (Day 2)**
- Opening scene
- Inciting incident
- Climax scene
- Resolution scene

**Batch 3: Fill-in Scenes (Day 3)**
- Rising action scenes
- Transition scenes
- Supporting scenes

**Batch 4: Cover (Day 4)**
- Front cover
- Back cover
- Spine elements (if needed)

## Midjourney Commands Quick Reference

- `/imagine [prompt]` - Generate image
- `/blend` - Blend multiple images
- `U1, U2, U3, U4` - Upscale specific image from grid
- `V1, V2, V3, V4` - Create variations of specific image
- `🔄` - Re-roll entire generation
- **Zoom Out** - Expand image with more context
- **Vary (Region)** - Edit specific parts of image

## Advanced: Creating Consistent Assets

### Pattern/Texture Library
Create reusable patterns for backgrounds:
```
seamless pattern for children's book, [theme], pastel colors, simple repeating motifs, whimsical, suitable for background texture --ar 1:1 --v 6 --tile
```

### Props & Objects Library
Create individual objects to composite:
```
children's book illustration, [object], white background, isolated object, no shadow, colorful, simple design, storybook style --ar 1:1 --v 6 --s 80
```

## Example: Complete 24-Page Book Illustration Set

1. **Character Reference** → Save URL as CHAR_REF
2. **Style Reference** → Save URL as STYLE_REF
3. **Page 1-24:** Use template:
```
children's book illustration, [CHARACTER from CHAR_REF] [specific action], [specific setting], [mood], storybook style --ar 1:1 --v 6 --cref CHAR_REF --sref STYLE_REF --s 100 --seed [same seed]
```

## Final Tips

1. **Generate extras:** Make 1-2 extra versions of key scenes
2. **Keep it simple:** Overly complex illustrations are hard to print and distracting
3. **Think about layout:** Leave space for text placement
4. **Consider Amazon thumbnail:** Cover should be readable at small size
5. **Print test:** Order a proof copy to see how colors print
6. **Save all URLs:** Keep a document with all image URLs and seeds
7. **Backup everything:** Download all high-res versions immediately

---

## Next Steps

After generating all illustrations:
1. Download all images in highest resolution
2. Review for consistency and quality
3. Proceed to layout and book design
4. See `docs/workflows/book-creation-workflow.md` for next steps
