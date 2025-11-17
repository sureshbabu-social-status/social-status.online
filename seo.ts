// SEO Utilities for dynamic meta tag updates
import { config, getCanonicalUrl, getOgImageUrl } from './config';

export const updateMetaTags = (): void => {
  const currentUrl = getCanonicalUrl();
  const ogImageUrl = getOgImageUrl();

  // Update canonical URL
  const canonicalLink = document.getElementById('canonical-link') as HTMLLinkElement;
  if (canonicalLink) {
    canonicalLink.href = currentUrl;
  }

  // Update Open Graph URL
  const ogUrl = document.getElementById('og-url') as HTMLMetaElement;
  if (ogUrl) {
    ogUrl.content = currentUrl;
  }

  // Update Open Graph Image
  const ogImage = document.getElementById('og-image') as HTMLMetaElement;
  if (ogImage) {
    ogImage.content = ogImageUrl;
  }

  // Update Twitter URL
  const twitterUrl = document.getElementById('twitter-url') as HTMLMetaElement;
  if (twitterUrl) {
    twitterUrl.content = currentUrl;
  }

  // Update Twitter Image
  const twitterImage = document.getElementById('twitter-image') as HTMLMetaElement;
  if (twitterImage) {
    twitterImage.content = ogImageUrl;
  }

  // Update page title with site name
  document.title = config.siteName;
};

// Preconnect to external domains for performance
export const addPreconnects = (): void => {
  const preconnects = [
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
  ];

  preconnects.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = url;
    document.head.appendChild(link);
  });
};

// Generate JSON-LD structured data
export const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Social Status Online",
    "alternateName": "Professional Profiles Directory",
    "url": config.siteUrl,
    "description": config.siteDescription,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${config.siteUrl}?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
};
