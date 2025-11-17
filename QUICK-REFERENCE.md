# ⚡ QUICK REFERENCE CARD - Social Status Online

**Keep this handy for quick access to common commands and workflows!**

---

## 🚀 Essential Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server (localhost:3000) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Build and deploy to Firebase |
| `npm run type-check` | Check TypeScript types |

---

## 📝 Adding a Profile (5-Minute Checklist)

1. **Fill Profile Data**
   - Open `PROFILE_TEMPLATE_FORM.md` and complete all fields

2. **Edit `constants.tsx`**
   - Add profile object to `PROFILES` array
   - Update `ALL_EXPERTISE_TAGS` if needed

3. **Update `sitemap.xml`**
   - Add new profile URL to `public/sitemap.xml`

4. **Test Locally**
   ```bash
   npm run dev
   # Visit localhost:3000 and verify profile appears
   ```

5. **Deploy**
   ```bash
   npm run deploy
   ```

---

## 🎯 Profile Object Template (Copy & Paste)

```typescript
{
  id: 'firstname-lastname',
  name: 'First Last',
  title: 'Job Title',
  tagline: 'One-liner about what you do',
  bio: 'Professional bio 2-3 sentences with keywords.',
  imageUrl: 'https://example.com/photo.jpg',
  profileUrl: 'https://firstname.social-status.online',
  featured: true,
  tags: ['Tag1', 'Tag2', 'Tag3'],
  location: 'City, Country',
  expertise: ['Skill1', 'Skill2', 'Skill3', 'Skill4', 'Skill5'],
  achievements: [
    { label: 'Experience', value: '5+ Years' },
    { label: 'Projects', value: '30+' },
    { label: 'Team Size', value: '10+' },
  ],
  social: {
    linkedin: 'https://linkedin.com/in/username',
    github: 'https://github.com/username',
    twitter: 'https://twitter.com/username',
    instagram: 'https://instagram.com/username',
  },
  joinedDate: '2025-11-17',
  verified: true,
},
```

---

## 🎨 Common Customizations

### Change Site Name/Tagline
**File:** `constants.tsx`
```typescript
export const SITE_CONFIG = {
  name: 'Your New Name',
  tagline: 'Your New Tagline',
  // ...
};
```

### Change Colors
**File:** `tailwind.config.js`
```javascript
colors: {
  neumorphic: {
    bg: '#e0e5ec',
  },
}
```

### Change Logo Text
**File:** `App.tsx` (search for "SS" in the header)

---

## 🐛 Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Build errors | `rm -rf node_modules && npm install` |
| TypeScript errors | `npm run type-check` to see details |
| Firebase 403 error | `firebase login --reauth` |
| Site not updating | Clear browser cache (Cmd+Shift+R) |
| Image not loading | Check URL is public and correct |

---

## 📊 SEO Quick Checklist

- [ ] All profiles have unique IDs
- [ ] Each profile has descriptive bio with keywords
- [ ] Profile photos are high quality (400x400px+)
- [ ] All URLs in sitemap.xml
- [ ] Meta tags in index.html are updated
- [ ] Google Search Console set up
- [ ] Test with Lighthouse (aim for 90+ scores)

---

## 🔑 Important Files

| File | What It Does |
|------|--------------|
| `constants.tsx` | ⭐ **Profile data lives here** |
| `App.tsx` | Main application logic |
| `components/ProfileCard.tsx` | Individual profile card |
| `public/sitemap.xml` | SEO sitemap (update when adding profiles) |
| `index.html` | Meta tags and SEO markup |
| `.env` | Environment variables (don't commit!) |

---

## 🚢 Deployment Quick Steps

### Firebase (Recommended)
```bash
# First time only
firebase login
firebase init hosting

# Every deploy
npm run deploy
```

### Vercel
```bash
npm i -g vercel
vercel --prod
```

### Netlify
Drag `dist/` folder to Netlify dashboard

---

## 📞 Support Contacts

**Documentation:**
- Main: `README.md`
- Setup: `SETUP-GUIDE.md`
- Profile Form: `PROFILE_TEMPLATE_FORM.md`

**Online Resources:**
- React: https://react.dev
- Tailwind: https://tailwindcss.com
- Firebase: https://firebase.google.com/docs/hosting

**Project Email:** hello@social-status.online

---

## 💡 Pro Tips

1. **Test everything locally** before deploying
2. **Compress images** before adding (use TinyPNG.com)
3. **Use descriptive keywords** in bios for better SEO
4. **Keep profiles updated** for better engagement
5. **Run Lighthouse audit** after major changes
6. **Back up your data** before major edits

---

## 🎯 Workflow Summary

```
Edit constants.tsx → npm run dev → Test → npm run build → npm run deploy
```

---

**Version:** 1.0.0  
**Last Updated:** November 17, 2025

**Print this and keep it on your desk! 📌**
