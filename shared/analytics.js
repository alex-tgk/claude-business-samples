/**
 * Universal Analytics Wrapper
 * Supports: Umami, Cloudflare Web Analytics, and custom CSV logging
 *
 * Usage:
 *   trackEvent('cta_click', { button_id: 'primary-cta', variety: '1' });
 *   trackPageView();
 *   trackScrollDepth(75);
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    // Umami configuration
    umami: {
      enabled: true,
      websiteId: 'YOUR_UMAMI_WEBSITE_ID', // Replace with actual ID
      scriptUrl: 'https://analytics.yourdomain.com/umami.js', // Replace with actual URL
    },

    // Cloudflare Web Analytics
    cloudflare: {
      enabled: true,
      token: 'YOUR_CLOUDFLARE_TOKEN', // Replace with actual token
    },

    // Custom logging (fallback/backup)
    customLog: {
      enabled: true,
      endpoint: '/api/analytics-log', // Custom endpoint if needed
    },

    // Debug mode
    debug: false,
  };

  // Analytics manager
  const Analytics = {
    /**
     * Initialize analytics
     */
    init: function() {
      if (CONFIG.debug) console.log('[Analytics] Initializing...');

      // Load Umami
      if (CONFIG.umami.enabled) {
        this.loadUmami();
      }

      // Load Cloudflare
      if (CONFIG.cloudflare.enabled && CONFIG.cloudflare.token) {
        this.loadCloudflare();
      }

      // Track initial page view
      this.trackPageView();

      // Set up automatic event listeners
      this.setupAutoTracking();

      if (CONFIG.debug) console.log('[Analytics] Initialized successfully');
    },

    /**
     * Load Umami script
     */
    loadUmami: function() {
      if (window.umami) return; // Already loaded

      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.setAttribute('data-website-id', CONFIG.umami.websiteId);
      script.src = CONFIG.umami.scriptUrl;
      document.head.appendChild(script);

      if (CONFIG.debug) console.log('[Analytics] Umami script loaded');
    },

    /**
     * Load Cloudflare Web Analytics
     */
    loadCloudflare: function() {
      const script = document.createElement('script');
      script.defer = true;
      script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
      script.setAttribute('data-cf-beacon', JSON.stringify({ token: CONFIG.cloudflare.token }));
      document.head.appendChild(script);

      if (CONFIG.debug) console.log('[Analytics] Cloudflare script loaded');
    },

    /**
     * Track custom event
     * @param {string} eventName - Name of the event
     * @param {object} eventData - Additional data
     */
    trackEvent: function(eventName, eventData = {}) {
      if (CONFIG.debug) console.log('[Analytics] Event:', eventName, eventData);

      // Add metadata
      const enrichedData = {
        ...eventData,
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
      };

      // Send to Umami
      if (window.umami) {
        umami.track(eventName, enrichedData);
      }

      // Cloudflare tracks automatically, but we can use custom events
      if (window.cloudflare && window.cloudflare.trackEvent) {
        cloudflare.trackEvent(eventName, enrichedData);
      }

      // Custom logging
      if (CONFIG.customLog.enabled) {
        this.sendToCustomEndpoint(eventName, enrichedData);
      }
    },

    /**
     * Track page view
     */
    trackPageView: function() {
      const pageData = {
        url: window.location.href,
        title: document.title,
        referrer: document.referrer,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
      };

      this.trackEvent('page_view', pageData);
    },

    /**
     * Track scroll depth
     * @param {number} depth - Percentage scrolled (0-100)
     */
    trackScrollDepth: function(depth) {
      this.trackEvent('scroll_depth', { depth: depth });
    },

    /**
     * Track time on page
     * @param {number} seconds - Seconds spent on page
     */
    trackTimeOnPage: function(seconds) {
      let bucket;
      if (seconds < 10) bucket = '0-10s';
      else if (seconds < 30) bucket = '10-30s';
      else if (seconds < 60) bucket = '30-60s';
      else if (seconds < 120) bucket = '1-2min';
      else bucket = '2min+';

      this.trackEvent('time_on_page', {
        seconds: seconds,
        bucket: bucket,
      });
    },

    /**
     * Track CTA click
     * @param {string} ctaId - ID of the CTA button
     * @param {string} location - Location on page (header, footer, etc.)
     */
    trackCTAClick: function(ctaId, location = 'unknown') {
      this.trackEvent('cta_click', {
        cta_id: ctaId,
        location: location,
        variety: this.getVarietyId(),
      });
    },

    /**
     * Track form interaction
     * @param {string} action - 'start' or 'complete'
     * @param {string} formId - ID of the form
     */
    trackFormInteraction: function(action, formId) {
      this.trackEvent(`form_${action}`, {
        form_id: formId,
      });
    },

    /**
     * Track conversion
     * @param {string} conversionType - Type of conversion
     * @param {number} value - Value of conversion (optional)
     */
    trackConversion: function(conversionType, value = 0) {
      this.trackEvent('conversion', {
        type: conversionType,
        value: value,
        variety: this.getVarietyId(),
      });
    },

    /**
     * Set up automatic event tracking
     */
    setupAutoTracking: function() {
      // Track all CTA clicks
      document.addEventListener('click', (e) => {
        const target = e.target.closest('[data-testid*="cta"], .cta-button, [data-track="cta"]');
        if (target) {
          const ctaId = target.getAttribute('data-testid') || target.id || 'unnamed-cta';
          const location = target.getAttribute('data-location') || 'unknown';
          this.trackCTAClick(ctaId, location);
        }
      });

      // Track scroll depth milestones
      let scrollMilestones = [25, 50, 75, 100];
      let reachedMilestones = [];

      window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

        scrollMilestones.forEach(milestone => {
          if (scrollPercent >= milestone && !reachedMilestones.includes(milestone)) {
            reachedMilestones.push(milestone);
            this.trackScrollDepth(milestone);
          }
        });
      });

      // Track time on page
      const startTime = Date.now();
      const trackTime = () => {
        const timeOnPage = Math.floor((Date.now() - startTime) / 1000);
        this.trackTimeOnPage(timeOnPage);
      };

      // Track time on page at key intervals
      setTimeout(() => trackTime(), 10000); // 10s
      setTimeout(() => trackTime(), 30000); // 30s
      setTimeout(() => trackTime(), 60000); // 1min

      // Track time on page before leaving
      window.addEventListener('beforeunload', trackTime);

      // Track form starts
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        let formStarted = false;
        form.addEventListener('focusin', () => {
          if (!formStarted) {
            formStarted = true;
            this.trackFormInteraction('start', form.id || 'unnamed-form');
          }
        });

        form.addEventListener('submit', () => {
          this.trackFormInteraction('complete', form.id || 'unnamed-form');
        });
      });

      // Track exit intent (desktop only)
      if (!this.isMobile()) {
        document.addEventListener('mouseout', (e) => {
          if (e.clientY <= 0) {
            this.trackEvent('exit_intent', {});
          }
        });
      }

      if (CONFIG.debug) console.log('[Analytics] Auto-tracking enabled');
    },

    /**
     * Send data to custom endpoint
     * @param {string} eventName
     * @param {object} data
     */
    sendToCustomEndpoint: function(eventName, data) {
      // Store in localStorage as backup
      try {
        const logs = JSON.parse(localStorage.getItem('analytics_logs') || '[]');
        logs.push({ event: eventName, data: data });
        // Keep only last 100 events
        if (logs.length > 100) logs.shift();
        localStorage.setItem('analytics_logs', JSON.stringify(logs));
      } catch (e) {
        if (CONFIG.debug) console.error('[Analytics] Local storage error:', e);
      }

      // Send to custom endpoint if configured
      if (CONFIG.customLog.endpoint) {
        fetch(CONFIG.customLog.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ event: eventName, data: data }),
        }).catch(err => {
          if (CONFIG.debug) console.error('[Analytics] Custom endpoint error:', err);
        });
      }
    },

    /**
     * Get current variety ID from URL or data attribute
     */
    getVarietyId: function() {
      const path = window.location.pathname;
      const match = path.match(/\/v(\d)/);
      return match ? match[1] : 'unknown';
    },

    /**
     * Check if mobile device
     */
    isMobile: function() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },

    /**
     * Get analytics logs (for debugging)
     */
    getLogs: function() {
      try {
        return JSON.parse(localStorage.getItem('analytics_logs') || '[]');
      } catch (e) {
        return [];
      }
    },

    /**
     * Clear analytics logs
     */
    clearLogs: function() {
      localStorage.removeItem('analytics_logs');
      if (CONFIG.debug) console.log('[Analytics] Logs cleared');
    },
  };

  // Export to global scope
  window.Analytics = Analytics;
  window.trackEvent = Analytics.trackEvent.bind(Analytics);
  window.trackConversion = Analytics.trackConversion.bind(Analytics);

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Analytics.init());
  } else {
    Analytics.init();
  }

  // Debug helper
  if (CONFIG.debug) {
    window.analyticsDebug = {
      getLogs: () => Analytics.getLogs(),
      clearLogs: () => Analytics.clearLogs(),
      config: CONFIG,
    };
    console.log('[Analytics] Debug mode enabled. Use window.analyticsDebug for debugging.');
  }
})();
