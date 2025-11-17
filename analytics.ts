// Google Analytics 4 Integration
import { config } from './config';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export const initAnalytics = (): void => {
  if (!config.enableAnalytics || !config.gaMeasurementId) {
    console.log('Analytics disabled or measurement ID not configured');
    return;
  }

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  
  // Define gtag function
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  // Initialize GA4
  window.gtag('js', new Date());
  window.gtag('config', config.gaMeasurementId, {
    page_path: window.location.pathname,
    send_page_view: true,
  });

  // Load GA4 script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${config.gaMeasurementId}`;
  document.head.appendChild(script);
};

// Track page views
export const trackPageView = (path: string): void => {
  if (!config.enableAnalytics || !window.gtag) return;
  
  window.gtag('event', 'page_view', {
    page_path: path,
  });
};

// Track custom events
export const trackEvent = (eventName: string, eventParams?: Record<string, unknown>): void => {
  if (!config.enableAnalytics || !window.gtag) return;
  
  window.gtag('event', eventName, eventParams);
};

// Analytics instance
export const analytics = {
  init: initAnalytics,
  pageView: trackPageView,
  event: trackEvent,
};
