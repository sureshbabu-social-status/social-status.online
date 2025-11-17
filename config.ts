// Environment configuration utility
interface Config {
  gaMeasurementId: string;
  siteUrl: string;
  siteName: string;
  siteDescription: string;
  domains: string[];
  enableAnalytics: boolean;
  isDevelopment: boolean;
  isProduction: boolean;
}

const getConfig = (): Config => {
  const currentHost = typeof window !== 'undefined' ? window.location.hostname : '';
  
  // Determine the site URL based on current hostname
  let siteUrl = import.meta.env.VITE_SITE_URL || 'https://social-status.online';
  
  // Auto-detect domain
  if (currentHost.includes('social-status.online')) {
    siteUrl = 'https://social-status.online';
  } else if (currentHost.includes('localhost')) {
    siteUrl = 'http://localhost:3000';
  }

  return {
    gaMeasurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || '',
    siteUrl,
    siteName: import.meta.env.VITE_SITE_NAME || 'Social Status Online | Professional Profiles Directory',
    siteDescription: import.meta.env.VITE_SITE_DESCRIPTION || 
      'Discover talented professionals and their exceptional work. A curated directory of solution architects, developers, designers, and innovators.',
    domains: import.meta.env.VITE_DOMAINS?.split(',') || ['social-status.online', 'www.social-status.online'],
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
  };
};

export const config = getConfig();

// Helper to get the current canonical URL
export const getCanonicalUrl = (path: string = ''): string => {
  return `${config.siteUrl}${path}`.replace(/\/$/, '');
};

// Helper to generate Open Graph image URL
export const getOgImageUrl = (): string => {
  return `${config.siteUrl}/og-image.jpg`;
};
