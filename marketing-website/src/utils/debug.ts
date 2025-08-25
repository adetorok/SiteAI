// Debug utilities for development and testing
export const DEBUG = process.env.NODE_ENV === 'development';

export const debugLog = (message: string, data?: any) => {
  if (DEBUG) {
    console.log(`[DEBUG] ${message}`, data || '');
  }
};

export const debugError = (message: string, error?: any) => {
  if (DEBUG) {
    console.error(`[DEBUG ERROR] ${message}`, error || '');
  }
};

export const debugWarn = (message: string, data?: any) => {
  if (DEBUG) {
    console.warn(`[DEBUG WARN] ${message}`, data || '');
  }
};

export const debugGroup = (label: string, fn: () => void) => {
  if (DEBUG) {
    console.group(`[DEBUG] ${label}`);
    try {
      fn();
    } finally {
      console.groupEnd();
    }
  }
};

// Performance monitoring
export const debugPerformance = (label: string, fn: () => any) => {
  if (DEBUG) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`[DEBUG PERFORMANCE] ${label}: ${(end - start).toFixed(2)}ms`);
    return result;
  }
  return fn();
};

// Component render tracking
export const debugRender = (componentName: string) => {
  if (DEBUG) {
    console.log(`[DEBUG RENDER] ${componentName} rendered at ${new Date().toISOString()}`);
  }
};

// Form validation debugging
export const debugFormValidation = (formData: any, errors: any) => {
  if (DEBUG) {
    console.group('[DEBUG FORM VALIDATION]');
    console.log('Form Data:', formData);
    console.log('Validation Errors:', errors);
    console.groupEnd();
  }
};

// API call debugging
export const debugApiCall = (endpoint: string, method: string, data?: any) => {
  if (DEBUG) {
    console.log(`[DEBUG API] ${method} ${endpoint}`, data || '');
  }
};

// Clean up debug logs in production
export const cleanupDebug = () => {
  if (!DEBUG) {
    // Remove any debug-related console methods in production
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.debugLog = undefined;
      // @ts-ignore
      window.debugError = undefined;
      // @ts-ignore
      window.debugWarn = undefined;
    }
  }
};
