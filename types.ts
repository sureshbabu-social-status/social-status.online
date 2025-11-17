// Type definitions for Social Status Online

export interface Profile {
  id: string;
  name: string;
  title: string;
  tagline: string;
  bio: string;
  imageUrl: string;
  profileUrl: string;
  featured: boolean;
  tags: string[];
  location?: string;
  expertise: string[];
  achievements?: {
    label: string;
    value: string;
  }[];
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
  };
  joinedDate: string;
  verified: boolean;
}

export interface SearchFilters {
  query: string;
  tags: string[];
  featured: boolean | null;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  canonicalUrl: string;
  structuredData: Record<string, unknown>;
}
