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

// Generate Organization Schema
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Social Status Online",
    "alternateName": "Professional Profiles Directory",
    "url": config.siteUrl,
    "logo": `${config.siteUrl}/logo.png`,
    "description": config.siteDescription,
    "foundingDate": "2025",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@social-status.online",
      "contactType": "Customer Service",
      "areaServed": "Worldwide",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://twitter.com/socialstatus",
      "https://linkedin.com/company/social-status-online",
      "https://github.com/social-status-online"
    ]
  };
};

// Generate WebSite Schema with SearchAction
export const generateWebSiteSchema = () => {
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
        "urlTemplate": `${config.siteUrl}/?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Social Status Online",
      "logo": {
        "@type": "ImageObject",
        "url": `${config.siteUrl}/logo.png`
      }
    }
  };
};

// Generate FAQPage Schema
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Generate HowTo Schema
export const generateHowToSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Get Your Professional Subdomain on Social Status Online",
    "description": "Step-by-step guide to creating your professional online presence with a personalized subdomain",
    "image": `${config.siteUrl}/og-image-howto.jpg`,
    "totalTime": "PT2M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Request Your Subdomain",
        "text": "Choose your desired subdomain name and submit a request through our contact form",
        "image": `${config.siteUrl}/step1.jpg`,
        "url": `${config.siteUrl}/contact`
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Personalization",
        "text": "Customize your profile with your photo, bio, skills, and social links",
        "image": `${config.siteUrl}/step2.jpg`
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Review & Launch",
        "text": "Review your profile and we'll activate your subdomain within 24-48 hours",
        "image": `${config.siteUrl}/step3.jpg`
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Share & Grow",
        "text": "Share your new professional URL and watch your digital presence grow",
        "image": `${config.siteUrl}/step4.jpg`
      }
    ]
  };
};

// Generate Person Schema (for individual profiles)
export const generatePersonSchema = (person: {
  name: string;
  jobTitle: string;
  description: string;
  image: string;
  url: string;
  email?: string;
  sameAs?: string[];
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": person.name,
    "jobTitle": person.jobTitle,
    "description": person.description,
    "image": person.image,
    "url": person.url,
    ...(person.email && { "email": person.email }),
    ...(person.sameAs && { "sameAs": person.sameAs })
  };
};

// Generate BreadcrumbList Schema
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

// Helper to inject JSON-LD script into the page
export const injectStructuredData = (schema: object) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
};

// Main function to inject all common schemas
export const injectCommonSchemas = () => {
  injectStructuredData(generateOrganizationSchema());
  injectStructuredData(generateWebSiteSchema());
};
