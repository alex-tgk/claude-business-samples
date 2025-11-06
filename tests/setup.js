/**
 * Jest Setup File
 * Configures testing environment for landing page validation
 */

require('@testing-library/jest-dom');

// Mock window.matchMedia for responsive testing
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver for lazy loading tests
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};

// Mock analytics functions
global.umami = {
  track: jest.fn(),
};

global.trackEvent = jest.fn();

// Global test utilities
global.testUtils = {
  /**
   * Simulate scroll to position
   */
  scrollTo: (position) => {
    window.pageYOffset = position;
    window.dispatchEvent(new Event('scroll'));
  },

  /**
   * Simulate viewport resize
   */
  resizeViewport: (width, height) => {
    window.innerWidth = width;
    window.innerHeight = height;
    window.dispatchEvent(new Event('resize'));
  },

  /**
   * Wait for async operations
   */
  waitFor: (ms) => new Promise(resolve => setTimeout(resolve, ms)),

  /**
   * Get computed styles
   */
  getStyles: (element) => window.getComputedStyle(element),
};

// Console error suppression for expected errors in tests
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning: ReactDOM.render') ||
       args[0].includes('Not implemented: HTMLFormElement.prototype.submit'))
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
