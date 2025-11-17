# Social Status Online

**Professional Profiles Directory** - Discover exceptional talent and innovation.

[![Production Ready](https://img.shields.io/badge/status-production--ready-success)](https://social-status.online)
[![SEO Optimized](https://img.shields.io/badge/SEO-optimized-blue)](https://social-status.online)
[![React](https://img.shields.io/badge/React-19.2.0-61dafb)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.18-38bdf8)](https://tailwindcss.com/)

## 🌟 Overview

Social Status Online is a modern, SEO-optimized directory platform showcasing talented professionals, innovators, and thought leaders. Built with React, TypeScript, and Tailwind CSS, it features a beautiful neumorphic design with dark mode support.

**Live Site:** [https://social-status.online](https://social-status.online)

## ✨ Features

### 🎨 Design & UX
- **Neumorphic Design** - Beautiful soft UI with depth and shadows
- **Dark Mode** - Full dark mode support with smooth transitions
- **Responsive** - Mobile-first design that works on all devices
- **Accessibility** - WCAG compliant with keyboard navigation support
- **Animations** - Smooth, performant animations (respects `prefers-reduced-motion`)

### 🔍 Search & Discovery
- **Real-time Search** - Instant filtering by name, title, skills, or bio
- **Tag Filtering** - Filter profiles by expertise and technologies
- **Featured Profiles** - Highlight top talent with featured badges
- **Smart Sorting** - Intelligent profile organization

### ⚡ Performance
- **Optimized Bundle** - Code splitting and lazy loading
- **Fast Loading** - < 3s First Contentful Paint
- **SEO Ready** - Comprehensive meta tags and structured data
- **PWA Support** - Service worker for offline capability
- **CDN Optimized** - Assets served via Firebase CDN

### 🛡️ Security & Privacy
- **Security Headers** - CSP, XSS protection, frame denial
- **HTTPS Only** - Enforced secure connections
- **Privacy First** - No tracking without consent
- **Input Sanitization** - Protection against XSS attacks

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Firebase CLI (for deployment)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd social-status.online

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

## 📝 Adding New Profiles

To add a new profile, edit `constants.tsx`:

```typescript
{
  id: 'unique-id',
  name: 'Full Name',
  title: 'Job Title',
  tagline: 'One-liner description',
  bio: 'Detailed bio (2-3 sentences)',
  imageUrl: 'https://profile-image-url.jpg',
  profileUrl: 'https://subdomain.social-status.online',
  featured: true, // or false
  tags: ['Tag1', 'Tag2'],
  location: 'City, Country',
  expertise: ['Skill1', 'Skill2', 'Skill3'],
  achievements: [
    { label: 'Experience', value: '5+ Years' },
  ],
  social: {
    linkedin: 'https://linkedin.com/in/username',
    github: 'https://github.com/username',
    twitter: 'https://twitter.com/username',
  },
  joinedDate: 'YYYY-MM-DD',
  verified: true,
}
```

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.js` to customize colors:

```javascript
colors: {
  neumorphic: {
    bg: '#e0e5ec',      // Light background
    light: '#ffffff',   // Light shadow
    dark: '#a3b1c6',    // Dark shadow
  },
  dark: {
    bg: '#1a1a2e',      // Dark background
    card: '#16213e',    // Card background
    highlight: '#0f3460',
    light: '#e94560',   // Accent color
  },
}
```

### SEO Configuration

Update `constants.tsx` for site-wide SEO settings:

```typescript
export const SITE_CONFIG = {
  name: 'Your Site Name',
  tagline: 'Your Tagline',
  description: 'Your description',
  keywords: ['keyword1', 'keyword2'],
  // ...
};
```

## 🚢 Deployment

### Firebase Hosting (Recommended)

```bash
# Login to Firebase
npm run firebase:login

# Initialize Firebase project (first time only)
firebase init hosting

# Deploy
npm run deploy

# Or deploy with a message
npm run deploy:message "Update: Added new profiles"

# Or use the deploy script
chmod +x deploy.sh
./deploy.sh "Deployment message"
```

### Other Platforms

The built files in `dist/` can be deployed to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop `dist` folder
- **GitHub Pages**: Push `dist` to `gh-pages` branch
- **AWS S3 + CloudFront**: Upload `dist` contents

## 📊 SEO Optimization

### Built-in SEO Features

✅ **Meta Tags**
- Title, description, keywords
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Canonical URLs

✅ **Structured Data**
- Schema.org JSON-LD
- WebSite schema
- ItemList for profiles
- Person schema for each profile

✅ **Technical SEO**
- Sitemap.xml
- Robots.txt
- Semantic HTML5
- Mobile-responsive
- Fast loading times

✅ **Content SEO**
- Descriptive headings (H1, H2, H3)
- Alt text for images
- Internal linking
- Keyword-rich content

### SEO Checklist

- [ ] Update `index.html` meta tags
- [ ] Add all profiles to `sitemap.xml`
- [ ] Configure Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Open Graph tags with [OpenGraph.xyz](https://opengraph.xyz/)
- [ ] Test mobile-friendliness with [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Check page speed with [PageSpeed Insights](https://pagespeed.web.dev/)

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Build analysis
npm run build:analyze

# Lighthouse audit
npx lighthouse https://social-status.online --view
```

## 📁 Project Structure

```
social-status.online/
├── public/
│   ├── _headers              # Security headers
│   ├── robots.txt           # Search engine directives
│   ├── sitemap.xml          # XML sitemap
│   ├── manifest.json        # PWA manifest
│   └── sw.js               # Service worker
├── components/
│   └── ProfileCard.tsx      # Profile card component
├── hooks/
│   ├── useTheme.ts          # Dark mode hook
│   └── usePrefersReducedMotion.ts
├── App.tsx                  # Main application
├── constants.tsx            # Profile data & config
├── types.ts                 # TypeScript types
├── config.ts                # Environment config
├── seo.ts                   # SEO utilities
├── analytics.ts             # Google Analytics
├── index.tsx                # Entry point
├── index.css                # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
├── tailwind.config.js       # Tailwind config
├── firebase.json            # Firebase config
└── deploy.sh               # Deployment script
```

## 🔧 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run type-check` | Check TypeScript types |
| `npm run deploy` | Build and deploy to Firebase |

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT License - Feel free to use this project for your own profile directory.

## 🤝 Contributing

This is a private project, but suggestions and improvements are welcome!

## 📞 Support

For questions or support:
- Email: hello@social-status.online
- Create an issue in the repository

## 🙏 Acknowledgments

- Design inspired by neumorphism.io
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Built with ❤️ by the Social Status Online Team**

Last Updated: November 17, 2025