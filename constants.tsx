import type { Profile } from './types';

// All Profiles Data
export const PROFILES: Profile[] = [
  {
    id: 'suresh-babu-gogula',
    name: 'Suresh Babu Gogula',
    title: 'Solution Architect',
    tagline: 'Building resilient products & leading engineering teams',
    bio: 'Solution architect with 7+ years of designing resilient products, leading teams, and shipping Node, Go, Python, and React platforms end-to-end.',
    imageUrl: 'https://suresh.social-status.online/profile-avatar.jpg',
    profileUrl: 'https://suresh.social-status.online',
    featured: true,
    tags: ['Solution Architect', 'Full Stack', 'Cloud', 'Leadership', 'Node.js', 'React', 'Go', 'Python', 'AWS', 'Microservices', 'System Design', 'Frontend', 'Backend', 'DevOps'],
    location: 'India',
    expertise: ['Node.js', 'React', 'Go', 'Python', 'AWS', 'Microservices', 'System Design'],
    achievements: [
      { label: 'Experience', value: '7+ Years' },
      { label: 'Projects', value: '20+ Enterprise' },
      { label: 'Team Size', value: '15+ Engineers' },
    ],
    social: {
      linkedin: 'https://www.linkedin.com/in/suresh-babu-gogula/',
      github: 'https://github.com/SURESH-BABU-G',
      twitter: 'https://twitter.com/sureshbabug',
      instagram: 'https://www.instagram.com/king_of_happieness/',
    },
    joinedDate: '2024-01-15',
    verified: true,
  },
  {
    id: 'sandya-gogula',
    name: 'Sandya Gogula',
    title: 'Coming Soon',
    tagline: 'Professional profile under construction',
    bio: 'Professional profile page is being crafted with care. Stay tuned for an amazing showcase of talent and expertise.',
    imageUrl: 'https://via.placeholder.com/400x400/e0e5ec/6b7280?text=SG',
    profileUrl: 'https://sandya.social-status.online',
    featured: false,
    tags: ['Coming Soon'],
    location: 'India',
    expertise: [],
    achievements: [],
    social: {},
    joinedDate: '2024-11-17',
    verified: false,
  },
];

// All available expertise tags for filtering
export const ALL_EXPERTISE_TAGS = [
  'Solution Architect',
  'Full Stack',
  'Cloud',
  'Leadership',
  'Node.js',
  'React',
  'Go',
  'Python',
  'AWS',
  'Microservices',
  'System Design',
  'Frontend',
  'Backend',
  'DevOps',
  'AI/ML',
  'Mobile',
  'Design',
  'Product Management',
];

// Site configuration
export const SITE_CONFIG = {
  name: 'Social Status Online',
  tagline: 'Discover Exceptional Talent',
  description: 'A curated directory showcasing talented professionals, innovators, and thought leaders. Connect with solution architects, developers, designers, and industry experts.',
  keywords: [
    'professional profiles',
    'talent directory',
    'solution architects',
    'software engineers',
    'developers portfolio',
    'tech professionals',
    'career showcase',
  ],
  contact: {
    email: 'hello@social-status.online',
  },
  social: {
    twitter: '@socialstatus',
    linkedin: 'company/social-status-online',
  },
};
