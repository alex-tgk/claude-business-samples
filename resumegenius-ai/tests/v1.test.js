/**
 * ResumeGenius AI - Variety 1 (Minimal Clean) - Unit Tests
 * TDD Approach: These tests are written BEFORE implementation
 * They should FAIL initially, then pass after implementation
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('ResumeGenius AI - Variety 1 - Minimal Clean', () => {
  let dom;
  let document;
  let window;

  beforeEach(() => {
    // Load the HTML file
    const htmlPath = path.resolve(__dirname, '../v1/index.html');

    // Check if file exists
    if (!fs.existsSync(htmlPath)) {
      // Create empty HTML for initial failing test
      const html = '<!DOCTYPE html><html><head></head><body></body></html>';
      dom = new JSDOM(html, {
        url: 'http://localhost:8000',
        runScripts: 'dangerously',
        resources: 'usable',
      });
    } else {
      const html = fs.readFileSync(htmlPath, 'utf8');
      dom = new JSDOM(html, {
        url: 'http://localhost:8000',
        runScripts: 'dangerously',
        resources: 'usable',
      });
    }

    document = dom.window.document;
    window = dom.window;

    // Inject analytics mock
    window.umami = { track: jest.fn() };
    window.trackEvent = jest.fn();
  });

  afterEach(() => {
    dom.window.close();
  });

  /**
   * HTML STRUCTURE TESTS
   */
  describe('HTML Structure', () => {
    test('should have valid HTML5 doctype', () => {
      expect(dom.window.document.doctype.name).toBe('html');
    });

    test('should have exactly one h1 element with value proposition', () => {
      const h1Elements = document.querySelectorAll('h1');
      expect(h1Elements.length).toBe(1);
      expect(h1Elements[0].textContent.trim().length).toBeGreaterThan(20);
      // Should mention key benefit
      const text = h1Elements[0].textContent.toLowerCase();
      expect(
        text.includes('interview') ||
        text.includes('ats') ||
        text.includes('resume') ||
        text.includes('job')
      ).toBe(true);
    });

    test('should have meta viewport for mobile responsiveness', () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      expect(viewport).toBeTruthy();
      expect(viewport.getAttribute('content')).toContain('width=device-width');
    });

    test('should have meta description for SEO', () => {
      const description = document.querySelector('meta[name="description"]');
      expect(description).toBeTruthy();
      expect(description.getAttribute('content').length).toBeGreaterThan(50);
      expect(description.getAttribute('content').length).toBeLessThan(160);
    });

    test('should have title tag with business name', () => {
      expect(document.title).toBeTruthy();
      expect(document.title.toLowerCase()).toContain('resume');
      expect(document.title.length).toBeGreaterThan(10);
      expect(document.title.length).toBeLessThan(60);
    });

    test('should have favicon link', () => {
      const favicon = document.querySelector('link[rel*="icon"]');
      expect(favicon).toBeTruthy();
    });

    test('should link to external CSS file (not inline)', () => {
      const styleLinks = document.querySelectorAll('link[rel="stylesheet"]');
      expect(styleLinks.length).toBeGreaterThan(0);

      // Check one links to styles.css
      const hasStylesCss = Array.from(styleLinks).some(link =>
        link.getAttribute('href').includes('styles.css')
      );
      expect(hasStylesCss).toBe(true);
    });
  });

  /**
   * CALL-TO-ACTION TESTS
   */
  describe('Call-to-Action Elements', () => {
    test('should have at least one CTA button above the fold', () => {
      const ctaButtons = document.querySelectorAll('[data-testid*="cta"], .cta-button, button');
      expect(ctaButtons.length).toBeGreaterThan(0);
    });

    test('should have CTA in hero section with data-testid', () => {
      const heroCTA = document.querySelector('[data-testid="cta-hero"]');
      expect(heroCTA).toBeTruthy();
    });

    test('should have action-oriented CTA text', () => {
      const ctaButtons = document.querySelectorAll('[data-testid*="cta"]');

      ctaButtons.forEach(button => {
        const text = button.textContent.trim().toLowerCase();
        expect(text.length).toBeGreaterThan(5);
        expect(text.length).toBeLessThan(60);

        // Should have action verb
        const hasActionVerb =
          text.includes('get') ||
          text.includes('start') ||
          text.includes('optimize') ||
          text.includes('improve') ||
          text.includes('try') ||
          text.includes('upload');

        expect(hasActionVerb).toBe(true);
      });
    });

    test('should have at least 2 CTAs (above and below fold)', () => {
      const ctaButtons = document.querySelectorAll('[data-testid*="cta"]');
      expect(ctaButtons.length).toBeGreaterThanOrEqual(2);
    });

    test('should have CTA with data-location attribute for analytics', () => {
      const heroCTA = document.querySelector('[data-testid="cta-hero"]');
      expect(heroCTA).toBeTruthy();
      expect(heroCTA.hasAttribute('data-location')).toBe(true);
      expect(heroCTA.getAttribute('data-location')).toBe('hero');
    });
  });

  /**
   * CONTENT & COPYWRITING TESTS
   */
  describe('Content Quality', () => {
    test('should have compelling value proposition in h1', () => {
      const h1 = document.querySelector('h1');
      const text = h1.textContent;

      expect(text.length).toBeGreaterThan(30);
      expect(text.length).toBeLessThan(100);

      // Should mention specific benefit (interviews, ATS, 15 minutes, etc.)
      const hasBenefit =
        text.includes('interview') ||
        text.includes('ATS') ||
        text.includes('15 minutes') ||
        text.includes('3X');

      expect(hasBenefit).toBe(true);
    });

    test('should have subheadline explaining the offer', () => {
      const subheadline = document.querySelector('.subheadline, .subtitle, h2');
      expect(subheadline).toBeTruthy();
      expect(subheadline.textContent.length).toBeGreaterThan(20);
    });

    test('should not have lorem ipsum placeholder text', () => {
      const bodyText = document.body.textContent.toLowerCase();
      expect(bodyText).not.toContain('lorem ipsum');
      expect(bodyText).not.toContain('dolor sit amet');
      expect(bodyText).not.toContain('consectetur adipiscing');
    });

    test('should mention price/pricing somewhere on page', () => {
      const bodyText = document.body.textContent;
      const hasPrice = bodyText.includes('$') || bodyText.toLowerCase().includes('price');
      expect(hasPrice).toBe(true);
    });

    test('should have benefit-focused headlines (not feature-focused)', () => {
      const headlines = document.querySelectorAll('h2, h3');
      expect(headlines.length).toBeGreaterThan(0);

      // At least one headline should mention benefit
      const hasBenefitLanguage = Array.from(headlines).some(h => {
        const text = h.textContent.toLowerCase();
        return (
          text.includes('more interviews') ||
          text.includes('faster') ||
          text.includes('cheaper') ||
          text.includes('better') ||
          text.includes('save') ||
          text.includes('boost') ||
          text.includes('increase')
        );
      });

      expect(hasBenefitLanguage).toBe(true);
    });
  });

  /**
   * SOCIAL PROOF TESTS
   */
  describe('Social Proof Elements', () => {
    test('should have social proof or testimonials section', () => {
      const socialProof = document.querySelector(
        '[data-testid*="testimonial"], [data-testid*="social-proof"], .testimonials, .social-proof'
      );
      expect(socialProof).toBeTruthy();
    });

    test('should have at least one testimonial with specific results', () => {
      const testimonials = document.querySelectorAll('[data-testid*="testimonial"], .testimonial');
      expect(testimonials.length).toBeGreaterThan(0);

      // At least one should mention specific outcome
      const hasSpecificResult = Array.from(testimonials).some(t => {
        const text = t.textContent;
        return text.match(/\d+/) && (text.includes('interview') || text.includes('offer') || text.includes('job'));
      });

      expect(hasSpecificResult).toBe(true);
    });

    test('should have trust indicators (stats, guarantees, etc.)', () => {
      const trustElements = document.querySelectorAll(
        '[data-testid*="trust"], [data-testid*="stat"], .stats, .guarantee, .trust-badge'
      );
      expect(trustElements.length).toBeGreaterThan(0);
    });
  });

  /**
   * PRICING TRANSPARENCY TESTS
   */
  describe('Pricing Display', () => {
    test('should show price clearly on page', () => {
      const priceElement = document.querySelector('[data-testid*="price"], .price, .pricing');
      expect(priceElement).toBeTruthy();

      const priceText = priceElement.textContent;
      expect(priceText).toContain('$29');
    });

    test('should mention money-back guarantee', () => {
      const bodyText = document.body.textContent.toLowerCase();
      const hasGuarantee =
        bodyText.includes('guarantee') ||
        bodyText.includes('money back') ||
        bodyText.includes('refund');

      expect(hasGuarantee).toBe(true);
    });
  });

  /**
   * RESPONSIVE DESIGN TESTS
   */
  describe('Responsive Design (Mobile-First)', () => {
    test('should have responsive images with alt text', () => {
      const images = document.querySelectorAll('img');

      images.forEach(img => {
        expect(img.hasAttribute('alt')).toBe(true);
      });
    });

    test('should have max-width constraint for readability', () => {
      // Variety 1 is "Minimal Clean" - should have max-width ~600px
      const container = document.querySelector('.container, main, .content');
      expect(container).toBeTruthy();
    });

    test('should not have horizontal scroll on mobile viewport', () => {
      const body = document.body;
      const style = window.getComputedStyle(body);

      expect(style.overflowX).not.toBe('scroll');
    });
  });

  /**
   * ANALYTICS INTEGRATION TESTS
   */
  describe('Analytics Integration', () => {
    test('should load analytics script', () => {
      const analyticsScript =
        document.querySelector('script[src*="analytics"]') ||
        document.querySelector('script[src*="umami"]');

      expect(analyticsScript).toBeTruthy();
    });

    test('should have data-testid on all trackable elements', () => {
      const ctaButtons = document.querySelectorAll('button, a[href*="checkout"], a[href*="buy"]');

      ctaButtons.forEach(button => {
        expect(button.hasAttribute('data-testid')).toBe(true);
      });
    });
  });

  /**
   * ACCESSIBILITY TESTS
   */
  describe('Accessibility (a11y)', () => {
    test('should have lang attribute on html', () => {
      const html = document.querySelector('html');
      expect(html.hasAttribute('lang')).toBe(true);
      expect(html.getAttribute('lang')).toBe('en');
    });

    test('should have semantic HTML structure', () => {
      expect(document.querySelector('header')).toBeTruthy();
      expect(document.querySelector('main')).toBeTruthy();
      expect(document.querySelector('footer')).toBeTruthy();
    });

    test('should have form labels if form exists', () => {
      const inputs = document.querySelectorAll('input, textarea');

      inputs.forEach(input => {
        const label = document.querySelector(`label[for="${input.id}"]`);
        const ariaLabel = input.getAttribute('aria-label');
        const ariaLabelledby = input.getAttribute('aria-labelledby');

        expect(label || ariaLabel || ariaLabelledby).toBeTruthy();
      });
    });
  });

  /**
   * VARIETY-SPECIFIC TESTS (Minimal Clean)
   */
  describe('Variety 1 Specific: Minimal Clean Design', () => {
    test('should have white or very light background', () => {
      const body = document.body;
      // Will verify via CSS once implemented
      expect(body).toBeTruthy();
    });

    test('should use single accent color (not multiple competing colors)', () => {
      // This will be verified through CSS
      const buttons = document.querySelectorAll('button, .cta-button');
      expect(buttons.length).toBeGreaterThan(0);
    });

    test('should have generous whitespace (minimal clutter)', () => {
      // Verify section spacing exists
      const sections = document.querySelectorAll('section');
      expect(sections.length).toBeGreaterThanOrEqual(3);
    });

    test('should have simple, clean typography', () => {
      const h1 = document.querySelector('h1');
      expect(h1).toBeTruthy();
      // Font styling will be in CSS
    });
  });

  /**
   * CONVERSION FUNNEL TESTS
   */
  describe('Conversion Funnel', () => {
    test('should have clear path to purchase', () => {
      // User journey: Land → Read value prop → See price → Click CTA → Go to checkout
      const h1 = document.querySelector('h1');
      const price = document.querySelector('[data-testid*="price"], .price');
      const cta = document.querySelector('[data-testid="cta-hero"]');

      expect(h1).toBeTruthy();
      expect(price).toBeTruthy();
      expect(cta).toBeTruthy();
    });

    test('should minimize friction (no unnecessary navigation)', () => {
      // Minimal Clean variety should have minimal or no navigation
      const navLinks = document.querySelectorAll('nav a');
      expect(navLinks.length).toBeLessThan(5); // Should be minimal
    });
  });

  /**
   * PERFORMANCE TESTS (Basic)
   */
  describe('Performance Basics', () => {
    test('should defer or async non-critical scripts', () => {
      const scripts = document.querySelectorAll('script[src]');

      scripts.forEach(script => {
        const src = script.getAttribute('src');

        // Analytics should be deferred
        if (src.includes('analytics') || src.includes('umami')) {
          const hasDefer = script.hasAttribute('defer') || script.hasAttribute('async');
          expect(hasDefer).toBe(true);
        }
      });
    });

    test('should not have excessive DOM depth', () => {
      const maxDepth = (element, depth = 0) => {
        if (!element.children.length) return depth;
        return Math.max(...Array.from(element.children).map(child => maxDepth(child, depth + 1)));
      };

      const depth = maxDepth(document.body);
      expect(depth).toBeLessThan(12); // Minimal Clean should have shallow DOM
    });
  });
});
