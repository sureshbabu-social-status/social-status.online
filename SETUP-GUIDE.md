# 🚀 Social Status Online - Setup & Deployment Guide

## 📋 Table of Contents
1. [Initial Setup](#initial-setup)
2. [Development](#development)
3. [Adding New Profiles](#adding-new-profiles)
4. [Customization](#customization)
5. [Deployment](#deployment)
6. [SEO Optimization](#seo-optimization)
7. [Troubleshooting](#troubleshooting)

---

## 1. Initial Setup

### Step 1: Install Dependencies

```bash
cd social-status.online
npm install
```

### Step 2: Configure Environment

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your settings
nano .env
```

Update these values:
- `VITE_SITE_URL` - Your domain (e.g., https://social-status.online)
- `VITE_GA_MEASUREMENT_ID` - Google Analytics ID (optional)
- `VITE_ENABLE_ANALYTICS` - Set to `true` to enable analytics

### Step 3: Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your site!

---

## 2. Development

### File Structure

```
social-status.online/
├── App.tsx                  # Main app with search & filters
├── components/
│   └── ProfileCard.tsx      # Individual profile card
├── constants.tsx            # ⭐ EDIT THIS to add profiles
├── config.ts                # Environment configuration
├── types.ts                 # TypeScript type definitions
├── index.html               # HTML with SEO meta tags
└── public/
    ├── sitemap.xml          # Update when adding profiles
    └── robots.txt           # Search engine directives
```

### Key Files to Edit

1. **`constants.tsx`** - Add/edit profiles here
2. **`public/sitemap.xml`** - Add new profile URLs
3. **`index.html`** - Update meta tags if needed

---

## 3. Adding New Profiles

### Step-by-Step Guide

#### Step 1: Prepare Profile Information

Gather:
- Full name
- Job title
- Tagline (one-liner)
- Bio (2-3 sentences)
- Profile photo (400x400px recommended)
- Profile URL (subdomain)
- Skills/expertise
- Social media links
- Achievements (optional)

#### Step 2: Edit `constants.tsx`

Open `constants.tsx` and add to the `PROFILES` array:

```typescript
{
  id: 'john-doe',                    // Unique identifier (lowercase, hyphenated)
  name: 'John Doe',                  // Full name
  title: 'Senior Developer',         // Job title
  tagline: 'Building the future of web apps',  // Short tagline
  bio: 'Full-stack developer with 5+ years of experience creating scalable web applications. Passionate about React, Node.js, and cloud architecture.',
  imageUrl: 'https://john.social-status.online/profile.jpg',  // Profile photo URL
  profileUrl: 'https://john.social-status.online',  // Full profile site
  featured: true,                    // Show as featured (true/false)
  tags: ['Full Stack', 'React', 'Node.js'],  // Category tags
  location: 'San Francisco, USA',    // Location
  expertise: ['React', 'Node.js', 'AWS', 'TypeScript', 'MongoDB'],  // Skills list
  achievements: [
    { label: 'Experience', value: '5+ Years' },
    { label: 'Projects', value: '30+' },
    { label: 'Team Size', value: '10+' },
  ],
  social: {
    linkedin: 'https://linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
    twitter: 'https://twitter.com/johndoe',
    instagram: 'https://instagram.com/johndoe',  // Optional
  },
  joinedDate: '2025-01-15',         // YYYY-MM-DD format
  verified: true,                    // Verified badge (true/false)
},
```

#### Step 3: Update Sitemap

Open `public/sitemap.xml` and add:

```xml
<url>
  <loc>https://john.social-status.online/</loc>
  <lastmod>2025-11-17</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>
</url>
```

#### Step 4: Update Expertise Tags (Optional)

If adding new expertise areas, update `ALL_EXPERTISE_TAGS` in `constants.tsx`:

```typescript
export const ALL_EXPERTISE_TAGS = [
  'Solution Architecture',
  'Full Stack',
  'Your New Tag',  // Add here
  // ...
];
```

#### Step 5: Test Locally

```bash
npm run dev
```

Check:
- Profile appears in the grid
- Search works with name/skills
- Filter by expertise works
- Profile card looks correct
- "Visit Profile" link works

---

## 4. Customization

### Change Site Information

Edit `constants.tsx`:

```typescript
export const SITE_CONFIG = {
  name: 'Your Directory Name',
  tagline: 'Your Tagline',
  description: 'Your description for SEO',
  keywords: ['keyword1', 'keyword2'],
  contact: {
    email: 'your@email.com',
  },
};
```

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  neumorphic: {
    bg: '#e0e5ec',      // Main background
    light: '#ffffff',   // Light shadow
    dark: '#a3b1c6',    // Dark shadow
  },
  dark: {
    bg: '#1a1a2e',      // Dark mode background
    card: '#16213e',    // Card background
    light: '#e94560',   // Accent color
  },
}
```

### Change Fonts

Edit `index.html` and `tailwind.config.js`:

```html
<!-- index.html -->
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600&display=swap" rel="stylesheet">
```

```javascript
// tailwind.config.js
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
}
```

---

## 5. Deployment

### Option 1: Firebase Hosting (Recommended)

#### Initial Setup (One-time)

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init hosting

# Select options:
# - Use existing project or create new
# - Public directory: dist
# - Configure as single-page app: Yes
# - Set up automatic builds: No
```

#### Deploy

```bash
# Build and deploy
npm run deploy

# Or with custom message
npm run deploy:message "Added John Doe profile"

# Or use deploy script
chmod +x deploy.sh
./deploy.sh "Deployment message"
```

#### Custom Domain Setup

1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Enter `social-status.online`
4. Follow DNS configuration instructions
5. Add subdomains for each profile:
   - `suresh.social-status.online` → suresh profile site
   - `sandya.social-status.online` → sandya profile site

### Option 2: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Option 3: Netlify

1. Drag and drop `dist` folder to Netlify
2. Or connect GitHub repository for auto-deploys

---

## 6. SEO Optimization

### Pre-Launch Checklist

- [ ] Update all meta tags in `index.html`
- [ ] Add all profiles to `sitemap.xml`
- [ ] Test Open Graph with [OpenGraph.xyz](https://opengraph.xyz/)
- [ ] Test mobile-friendliness
- [ ] Run Lighthouse audit (aim for 90+ score)
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools

### Post-Launch SEO Tasks

#### 1. Google Search Console

```bash
# Go to: https://search.google.com/search-console
```

1. Add property for `social-status.online`
2. Verify ownership (DNS or file upload)
3. Submit sitemap: `https://social-status.online/sitemap.xml`
4. Monitor indexing status

#### 2. Google Analytics (Optional)

1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXX)
3. Add to `.env`:
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXX
   VITE_ENABLE_ANALYTICS=true
   ```
4. Rebuild and redeploy

#### 3. Social Media Sharing

Test with these tools:
- **Facebook**: [Sharing Debugger](https://developers.facebook.com/tools/debug/)
- **Twitter**: [Card Validator](https://cards-dev.twitter.com/validator)
- **LinkedIn**: Share and preview

#### 4. Schema Markup

Verify structured data:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)

### SEO Best Practices

✅ **For Each Profile:**
- Use descriptive bio with keywords
- Add relevant expertise tags
- Link to social profiles
- Use high-quality images (compress with TinyPNG)
- Keep URLs clean (subdomain.social-status.online)

✅ **Content Strategy:**
- Keep profiles updated
- Add new profiles regularly
- Feature top performers
- Use descriptive taglines

---

## 7. Troubleshooting

### Build Errors

**Error: `Cannot find module 'react'`**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Error: TypeScript errors**
```bash
# Check types
npm run type-check

# Fix common issues in constants.tsx or types.ts
```

### Deployment Issues

**Firebase: `Error: HTTP Error: 403`**
```bash
# Re-authenticate
firebase login --reauth

# Select correct project
firebase use --add
```

**Site not updating after deploy**
```bash
# Clear browser cache
# Or open in incognito mode
# Or hard refresh: Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)
```

### Performance Issues

**Slow loading**
1. Compress all images (use WebP format)
2. Check bundle size: `npm run build:analyze`
3. Use CDN for profile images
4. Enable caching headers (already configured)

**Layout issues**
1. Test on multiple devices
2. Use Chrome DevTools responsive mode
3. Check Tailwind classes are correct

### Common Questions

**Q: How do I make a profile "Coming Soon"?**
```typescript
{
  id: 'person-name',
  title: 'Coming Soon',
  featured: false,
  verified: false,
  expertise: [],  // Empty array
  // ... minimal info
}
```

**Q: How do I remove a profile?**
1. Remove from `PROFILES` array in `constants.tsx`
2. Remove from `sitemap.xml`
3. Rebuild and redeploy

**Q: Can I add custom sections?**
Yes! Edit `components/ProfileCard.tsx` or create new components.

---

## 🎉 You're All Set!

Your professional profiles directory is ready to shine!

### Next Steps:
1. ✅ Add all profile data to `constants.tsx`
2. ✅ Deploy to Firebase/Vercel/Netlify
3. ✅ Configure custom domain
4. ✅ Submit sitemap to Google
5. ✅ Share on social media!

### Support

Need help? 
- Check the main [README.md](./README.md)
- Review code comments in source files
- Create an issue in the repository

**Happy profiling! 🚀**
