// Page-specific metadata for SEO optimization
import { config } from '../config';

export interface PageMetadata {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  keywords: string;
  canonical: string;
}

export const getPageMetadata = (pathname: string): PageMetadata => {
  const baseUrl = config.siteUrl;
  
  // Default metadata
  const defaultMetadata: PageMetadata = {
    title: 'Social Status Online | Professional Profiles Directory',
    description: 'Discover talented professionals and their exceptional work. A curated directory of solution architects, developers, designers, and innovators.',
    ogTitle: 'Social Status Online | Professional Profiles Directory',
    ogDescription: 'Discover talented professionals and their exceptional work. A curated directory showcasing solution architects, developers, designers, and innovators.',
    ogImage: `${baseUrl}/og-image.jpg`,
    keywords: 'professional profiles, talent directory, solution architects, software engineers, developers portfolio, tech professionals',
    canonical: baseUrl,
  };

  // Page-specific metadata
  const pageMetadata: Record<string, Partial<PageMetadata>> = {
    '/': defaultMetadata,
    
    '/about': {
      title: 'About Us - Our Mission & Vision | Social Status Online',
      description: 'Learn about Social Status Online - empowering professionals worldwide with personalized subdomains to showcase their skills, achievements, and build their digital identity.',
      ogTitle: 'About Social Status Online - Professional Profiles Platform',
      ogDescription: 'Discover our mission to democratize professional online presence. Free personalized subdomains for everyone.',
      ogImage: `${baseUrl}/og-image-about.jpg`,
      keywords: 'about us, mission, professional profiles, digital identity, personal branding',
      canonical: `${baseUrl}/about`,
    },
    
    '/how-it-works': {
      title: 'How It Works - Get Your Professional Subdomain | Social Status Online',
      description: 'Simple 4-step process to get your professional subdomain: Request, Customize, Launch, and Grow. Free forever, set up in 24-48 hours.',
      ogTitle: 'How It Works - Create Your Professional Profile',
      ogDescription: 'Request your subdomain, customize your profile, and launch your professional online presence in just 4 simple steps.',
      ogImage: `${baseUrl}/og-image-howto.jpg`,
      keywords: 'how it works, subdomain setup, profile creation, professional website, personal branding',
      canonical: `${baseUrl}/how-it-works`,
    },
    
    '/pricing': {
      title: 'Pricing - Free Forever | Social Status Online',
      description: 'Social Status Online is 100% free forever. Get your professional subdomain, customizable profile, SEO optimization, and all features at no cost.',
      ogTitle: 'Pricing - Free Professional Profiles',
      ogDescription: 'Free forever. No credit card required. Get your personalized subdomain and professional profile with all features included.',
      ogImage: `${baseUrl}/og-image-pricing.jpg`,
      keywords: 'pricing, free profile, free subdomain, professional website cost, free portfolio',
      canonical: `${baseUrl}/pricing`,
    },
    
    '/faq': {
      title: 'FAQ - Frequently Asked Questions | Social Status Online',
      description: 'Find answers to common questions about Social Status Online: subdomains, profiles, security, features, and support.',
      ogTitle: 'Frequently Asked Questions - Social Status Online',
      ogDescription: 'Get answers to all your questions about creating your professional online presence with Social Status Online.',
      ogImage: `${baseUrl}/og-image-faq.jpg`,
      keywords: 'faq, questions, help, support, subdomain questions, profile help',
      canonical: `${baseUrl}/faq`,
    },
    
    '/contact': {
      title: 'Contact Us - Get Your Subdomain | Social Status Online',
      description: 'Request your professional subdomain or get support. Contact Social Status Online via email at hello@social-status.online or use our contact form.',
      ogTitle: 'Contact Us - Request Your Subdomain',
      ogDescription: 'Ready to create your professional online presence? Contact us to request your personalized subdomain today.',
      ogImage: `${baseUrl}/og-image-contact.jpg`,
      keywords: 'contact, support, request subdomain, email, help, customer service',
      canonical: `${baseUrl}/contact`,
    },
    
    '/privacy': {
      title: 'Privacy Policy - Data Protection & GDPR | Social Status Online',
      description: 'Our privacy policy explains how we collect, use, and protect your data. GDPR compliant, secure hosting, no data selling.',
      ogTitle: 'Privacy Policy - Social Status Online',
      ogDescription: 'Learn how we protect your privacy and handle your data responsibly.',
      ogImage: `${baseUrl}/og-image.jpg`,
      keywords: 'privacy policy, data protection, GDPR, security, privacy',
      canonical: `${baseUrl}/privacy`,
    },
    
    '/terms': {
      title: 'Terms of Service - Usage Agreement | Social Status Online',
      description: 'Read our terms of service to understand your rights and responsibilities when using Social Status Online.',
      ogTitle: 'Terms of Service - Social Status Online',
      ogDescription: 'Terms and conditions for using Social Status Online platform.',
      ogImage: `${baseUrl}/og-image.jpg`,
      keywords: 'terms of service, terms and conditions, usage agreement, legal',
      canonical: `${baseUrl}/terms`,
    },
  };

  // Get metadata for current path or use default
  const metadata = pageMetadata[pathname] || defaultMetadata;
  
  // Merge with defaults to ensure all fields are present
  return {
    ...defaultMetadata,
    ...metadata,
  };
};

// Update document metadata dynamically
export const updatePageMetadata = (pathname: string) => {
  const metadata = getPageMetadata(pathname);
  
  // Update title
  document.title = metadata.title;
  
  // Update description
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', metadata.description);
  }
  
  // Update keywords
  const keywordsMeta = document.querySelector('meta[name="keywords"]');
  if (keywordsMeta) {
    keywordsMeta.setAttribute('content', metadata.keywords);
  }
  
  // Update canonical URL
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute('href', metadata.canonical);
  }
  
  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', metadata.ogTitle);
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', metadata.ogDescription);
  }
  
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) {
    ogImage.setAttribute('content', metadata.ogImage);
  }
  
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute('content', metadata.canonical);
  }
  
  // Update Twitter Card tags
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', metadata.ogTitle);
  }
  
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) {
    twitterDescription.setAttribute('content', metadata.ogDescription);
  }
  
  const twitterImage = document.querySelector('meta[name="twitter:image"]');
  if (twitterImage) {
    twitterImage.setAttribute('content', metadata.ogImage);
  }
  
  const twitterUrl = document.querySelector('meta[name="twitter:url"]');
  if (twitterUrl) {
    twitterUrl.setAttribute('content', metadata.canonical);
  }
};
