# 📂 USER DASHBOARD - COMPLETE FILE STRUCTURE

**Project**: Social Status App (User Dashboard)  
**Location**: `/social-profiles/social-status-app/`  
**URL**: `app.social-status.online`  
**Total Files**: 35+ files  

---

## 🗂️ COMPLETE FILE TREE

```
social-status-app/
├── 📄 package.json                         ← Dependencies & scripts
├── 📄 vite.config.ts                       ← Vite configuration ✅ DONE
├── 📄 tsconfig.json                        ← TypeScript config ✅ DONE
├── 📄 tailwind.config.js                   ← Tailwind design tokens ✅ DONE
├── 📄 postcss.config.js                    ← PostCSS config ✅ DONE
├── 📄 firebase.json                        ← Firebase hosting config ✅ DONE
├── 📄 .env.example                         ← Environment variables template ✅ DONE
├── 📄 .env.local                           ← Actual environment variables (gitignored)
├── 📄 .gitignore                           ← Git ignore rules
├── 📄 README.md                            ← Project documentation
│
├── 📁 public/                              ← Static assets
│   ├── favicon.ico
│   ├── logo.png
│   └── manifest.json
│
└── 📁 src/                                 ← Source code
    ├── 📄 main.tsx                         ← Entry point
    ├── 📄 App.tsx                          ← Main app component
    ├── 📄 index.css                        ← Global styles ✅ DONE
    │
    ├── 📁 config/                          ← Configuration files
    │   └── 📄 firebase.config.ts           ← Firebase initialization
    │
    ├── 📁 types/                           ← TypeScript type definitions
    │   ├── 📄 user.types.ts                ← User types
    │   ├── 📄 profile.types.ts             ← Profile types
    │   └── 📄 request.types.ts             ← Subdomain request types
    │
    ├── 📁 contexts/                        ← React Context providers
    │   ├── 📄 AuthContext.tsx              ← Authentication context
    │   └── 📄 ThemeContext.tsx             ← Theme (dark mode) context
    │
    ├── 📁 hooks/                           ← Custom React hooks
    │   ├── 📄 useAuth.ts                   ← Authentication hook
    │   ├── 📄 useTheme.ts                  ← Theme toggle hook
    │   ├── 📄 useProfile.ts                ← Profile management hook
    │   └── 📄 useSubdomainRequest.ts       ← Subdomain request hook
    │
    ├── 📁 services/                        ← Business logic & API calls
    │   ├── 📄 auth.service.ts              ← Authentication service
    │   ├── 📄 profile.service.ts           ← Profile CRUD operations
    │   ├── 📄 request.service.ts           ← Subdomain request service
    │   └── 📄 storage.service.ts           ← File upload service
    │
    ├── 📁 utils/                           ← Utility functions
    │   ├── 📄 validation.ts                ← Form validation helpers
    │   ├── 📄 formatting.ts                ← String formatting helpers
    │   └── 📄 constants.ts                 ← App-wide constants
    │
    ├── 📁 components/                      ← React components
    │   │
    │   ├── 📁 shared/                      ← Reusable UI components
    │   │   ├── 📄 Button.tsx               ← Neumorphic button
    │   │   ├── 📄 Input.tsx                ← Neumorphic input
    │   │   ├── 📄 Card.tsx                 ← Neumorphic card
    │   │   ├── 📄 Modal.tsx                ← Modal dialog
    │   │   ├── 📄 Spinner.tsx              ← Loading spinner
    │   │   ├── 📄 Alert.tsx                ← Alert/notification
    │   │   └── 📄 ThemeToggle.tsx          ← Dark mode toggle
    │   │
    │   ├── 📁 layout/                      ← Layout components
    │   │   ├── 📄 Header.tsx               ← App header with logo
    │   │   ├── 📄 Sidebar.tsx              ← Dashboard sidebar
    │   │   ├── 📄 DashboardLayout.tsx      ← Main dashboard layout
    │   │   └── 📄 Footer.tsx               ← App footer
    │   │
    │   ├── 📁 auth/                        ← Authentication components
    │   │   ├── 📄 LoginForm.tsx            ← Email/password login
    │   │   ├── 📄 SignupForm.tsx           ← User registration
    │   │   ├── 📄 SocialAuth.tsx           ← Google/GitHub login
    │   │   ├── 📄 ForgotPassword.tsx       ← Password reset
    │   │   └── 📄 ProtectedRoute.tsx       ← Route guard
    │   │
    │   ├── 📁 dashboard/                   ← Dashboard components
    │   │   ├── 📄 WelcomeBanner.tsx        ← Welcome message
    │   │   ├── 📄 StatsCard.tsx            ← Statistics card
    │   │   ├── 📄 QuickActions.tsx         ← Quick action buttons
    │   │   └── 📄 RecentActivity.tsx       ← Activity timeline
    │   │
    │   ├── 📁 profile/                     ← Profile components
    │   │   ├── 📄 ProfileEditor.tsx        ← Main profile editor
    │   │   ├── 📄 BasicInfo.tsx            ← Name, title, bio
    │   │   ├── 📄 ImageUpload.tsx          ← Photo upload
    │   │   ├── 📄 SocialLinks.tsx          ← Social media links
    │   │   ├── 📄 SkillsEditor.tsx         ← Skills management
    │   │   ├── 📄 AchievementsEditor.tsx   ← Achievements list
    │   │   └── 📄 ProfilePreview.tsx       ← Live preview
    │   │
    │   └── 📁 request/                     ← Subdomain request components
    │       ├── 📄 RequestForm.tsx          ← Subdomain request form
    │       ├── 📄 SubdomainChecker.tsx     ← Check availability
    │       ├── 📄 RequestStatus.tsx        ← Request status badge
    │       └── 📄 RequestHistory.tsx       ← Past requests
    │
    └── 📁 pages/                           ← Page components (routes)
        ├── 📄 Login.tsx                    ← Login page
        ├── 📄 Signup.tsx                   ← Signup page
        ├── 📄 ForgotPassword.tsx           ← Password reset page
        ├── 📄 Dashboard.tsx                ← Main dashboard
        ├── 📄 RequestSubdomain.tsx         ← Request subdomain page
        ├── 📄 EditProfile.tsx              ← Profile editor page
        ├── 📄 Settings.tsx                 ← User settings
        ├── 📄 Help.tsx                     ← Help & FAQ
        └── 📄 NotFound.tsx                 ← 404 page
```

---

## 📋 FILE DETAILS & PURPOSE

### **1. Configuration Files** (Root Level)

#### `package.json`
**Purpose**: Dependencies, scripts, project metadata  
**Key Dependencies**:
- `react`, `react-dom` - UI framework
- `react-router-dom` - Routing
- `firebase` - Backend services
- `react-icons` - Icon library
- `tailwindcss` - Styling

**Scripts**:
```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "npm run build && firebase deploy --only hosting:app-social-status"
}
```

#### `vite.config.ts` ✅ **DONE**
**Purpose**: Vite build configuration  
**Features**: Code splitting, terser minification, path aliases

#### `tsconfig.json` ✅ **DONE** (Generated by Vite)
**Purpose**: TypeScript compiler configuration  
**Settings**: Strict mode, path mappings, modern target

#### `tailwind.config.js` ✅ **DONE**
**Purpose**: Tailwind CSS design system  
**Features**: Neumorphic colors, dark mode, custom animations

#### `firebase.json` ✅ **DONE**
**Purpose**: Firebase hosting configuration  
**Settings**: Rewrites for SPA, security headers, caching

#### `.env.example` ✅ **DONE**
**Purpose**: Environment variables template  
**Variables**: Firebase keys, Cloudinary config, app URLs

---

### **2. Configuration (src/config/)**

#### `firebase.config.ts`
**Purpose**: Initialize Firebase SDK  
**Exports**: `auth`, `db`, `storage`, `functions`  
**Dependencies**: `firebase` package  

```typescript
// Exports
export const auth: Auth
export const db: Firestore
export const storage: Storage
export const functions: Functions
```

---

### **3. Type Definitions (src/types/)**

#### `user.types.ts`
**Purpose**: User-related types  
```typescript
interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string | null;
  role: 'user' | 'admin';
  emailVerified: boolean;
  createdAt: Timestamp;
}
```

#### `profile.types.ts`
**Purpose**: Profile data structure  
```typescript
interface Profile {
  subdomain: string;
  userId: string;
  name: string;
  title: string;
  bio: string;
  photoURL: string;
  skills: string[];
  socialLinks: SocialLinks;
  isPublished: boolean;
}
```

#### `request.types.ts`
**Purpose**: Subdomain request structure  
```typescript
interface SubdomainRequest {
  id: string;
  userId: string;
  subdomain: string;
  status: 'pending' | 'approved' | 'rejected';
  reason: string;
  requestedAt: Timestamp;
}
```

---

### **4. Context Providers (src/contexts/)**

#### `AuthContext.tsx`
**Purpose**: Global authentication state  
**Provides**: Current user, login/logout functions  
**Used by**: All authenticated pages  

```typescript
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email, password) => Promise<void>;
  signup: (email, password) => Promise<void>;
  logout: () => Promise<void>;
}
```

#### `ThemeContext.tsx`
**Purpose**: Dark mode state management  
**Provides**: Current theme, toggle function  
**Used by**: ThemeToggle component, all pages  

```typescript
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
```

---

### **5. Custom Hooks (src/hooks/)**

#### `useAuth.ts`
**Purpose**: Access authentication context  
**Returns**: User state, auth functions  
**Usage**: `const { user, login, logout } = useAuth()`

#### `useTheme.ts`
**Purpose**: Access theme context  
**Returns**: Current theme, toggle function  
**Usage**: `const { theme, toggleTheme } = useTheme()`

#### `useProfile.ts`
**Purpose**: Profile CRUD operations  
**Returns**: Profile data, update/create functions  
**Usage**: `const { profile, updateProfile } = useProfile(userId)`

#### `useSubdomainRequest.ts`
**Purpose**: Subdomain request operations  
**Returns**: Request status, submit function  
**Usage**: `const { submitRequest, checkStatus } = useSubdomainRequest()`

---

### **6. Services (src/services/)**

#### `auth.service.ts`
**Purpose**: Firebase Authentication operations  
**Functions**:
- `loginWithEmail(email, password)`
- `signupWithEmail(email, password)`
- `loginWithGoogle()`
- `resetPassword(email)`
- `logout()`

#### `profile.service.ts`
**Purpose**: Firestore profile operations  
**Functions**:
- `getProfile(subdomain): Promise<Profile>`
- `createProfile(data): Promise<void>`
- `updateProfile(subdomain, data): Promise<void>`
- `deleteProfile(subdomain): Promise<void>`

#### `request.service.ts`
**Purpose**: Subdomain request operations  
**Functions**:
- `submitRequest(data): Promise<string>`
- `getRequestsByUser(userId): Promise<Request[]>`
- `checkSubdomainAvailability(subdomain): Promise<boolean>`

#### `storage.service.ts`
**Purpose**: File upload (Cloudinary or Firebase Storage)  
**Functions**:
- `uploadImage(file): Promise<string>` (returns URL)
- `deleteImage(url): Promise<void>`

---

### **7. Utilities (src/utils/)**

#### `validation.ts`
**Purpose**: Form validation helpers  
**Functions**:
- `validateEmail(email): boolean`
- `validateSubdomain(subdomain): boolean`
- `validatePassword(password): boolean`

#### `formatting.ts`
**Purpose**: String formatting  
**Functions**:
- `formatDate(timestamp): string`
- `truncateText(text, length): string`
- `slugify(text): string`

#### `constants.ts`
**Purpose**: App-wide constants  
```typescript
export const APP_NAME = 'Social Status Online';
export const MAX_BIO_LENGTH = 500;
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png'];
export const SUBDOMAIN_REGEX = /^[a-z0-9-]{3,30}$/;
```

---

### **8. Shared Components (src/components/shared/)**

#### `Button.tsx`
**Purpose**: Reusable neumorphic button  
**Props**: `variant`, `size`, `onClick`, `disabled`, `icon`  
**Variants**: primary, secondary, success, danger, ghost

#### `Input.tsx`
**Purpose**: Reusable neumorphic input  
**Props**: `type`, `label`, `value`, `onChange`, `error`, `icon`  
**Features**: Validation errors, icons, dark mode

#### `Card.tsx`
**Purpose**: Neumorphic card container  
**Props**: `children`, `className`, `onClick`  
**Features**: Hover effects, dark mode

#### `Modal.tsx`
**Purpose**: Modal dialog  
**Props**: `isOpen`, `onClose`, `title`, `children`  
**Features**: Backdrop, close button, animations

#### `Spinner.tsx`
**Purpose**: Loading indicator  
**Props**: `size`  
**Variants**: Small, medium, large

#### `Alert.tsx`
**Purpose**: Success/error/info messages  
**Props**: `type`, `message`, `onClose`  
**Types**: success, error, warning, info

#### `ThemeToggle.tsx`
**Purpose**: Dark mode switch  
**Features**: Sun/moon icons, smooth transition

---

### **9. Layout Components (src/components/layout/)**

#### `Header.tsx`
**Purpose**: App header with logo and user menu  
**Features**: Logo, theme toggle, user dropdown, logout

#### `Sidebar.tsx`
**Purpose**: Dashboard navigation sidebar  
**Links**: Dashboard, Request Subdomain, Edit Profile, Settings, Help

#### `DashboardLayout.tsx`
**Purpose**: Main layout wrapper  
**Structure**: Header + Sidebar + Content + Footer

#### `Footer.tsx`
**Purpose**: App footer  
**Content**: Copyright, links to marketing site

---

### **10. Auth Components (src/components/auth/)**

#### `LoginForm.tsx`
**Purpose**: Email/password login form  
**Fields**: Email, Password  
**Features**: Validation, error messages, "Remember me"

#### `SignupForm.tsx`
**Purpose**: User registration form  
**Fields**: Name, Email, Password, Confirm Password  
**Features**: Password strength, email verification

#### `SocialAuth.tsx`
**Purpose**: Social login buttons  
**Providers**: Google, GitHub  
**Features**: Icon buttons, error handling

#### `ForgotPassword.tsx`
**Purpose**: Password reset modal  
**Flow**: Enter email → Send reset link → Confirmation

#### `ProtectedRoute.tsx`
**Purpose**: Route guard for authenticated pages  
**Logic**: If not logged in → redirect to /login

---

### **11. Dashboard Components (src/components/dashboard/)**

#### `WelcomeBanner.tsx`
**Purpose**: Personalized greeting  
**Content**: "Welcome back, {name}!" + last login

#### `StatsCard.tsx`
**Purpose**: Display statistics  
**Metrics**: Profile views, request status, profile completion %

#### `QuickActions.tsx`
**Purpose**: CTA buttons  
**Actions**: Request Subdomain, Edit Profile, View Profile

#### `RecentActivity.tsx`
**Purpose**: Activity timeline  
**Events**: Profile updated, request submitted, etc.

---

### **12. Profile Components (src/components/profile/)**

#### `ProfileEditor.tsx`
**Purpose**: Main profile editing interface  
**Structure**: Multi-step form with tabs

#### `BasicInfo.tsx`
**Purpose**: Name, title, bio, location  
**Fields**: Text inputs with character counters

#### `ImageUpload.tsx`
**Purpose**: Profile photo upload  
**Features**: Drag-drop, crop, preview, Cloudinary upload

#### `SocialLinks.tsx`
**Purpose**: Social media links  
**Fields**: LinkedIn, GitHub, Twitter, Instagram, Website

#### `SkillsEditor.tsx`
**Purpose**: Add/remove skills  
**Features**: Tag input, suggestions, max 10 skills

#### `AchievementsEditor.tsx`
**Purpose**: List achievements  
**Features**: Bullet points, reorder, max 5 achievements

#### `ProfilePreview.tsx`
**Purpose**: Live preview of profile  
**Features**: Shows how profile will look on public page

---

### **13. Request Components (src/components/request/)**

#### `RequestForm.tsx`
**Purpose**: Subdomain request form  
**Fields**: Desired subdomain, reason (why you want it)

#### `SubdomainChecker.tsx`
**Purpose**: Real-time availability check  
**Features**: Check as you type, show taken/available

#### `RequestStatus.tsx`
**Purpose**: Status badge  
**States**: Pending (yellow), Approved (green), Rejected (red)

#### `RequestHistory.tsx`
**Purpose**: List of past requests  
**Data**: Date, subdomain, status, admin notes

---

### **14. Pages (src/pages/)**

#### `Login.tsx`
**Purpose**: Login page  
**Components**: LoginForm, SocialAuth, link to Signup

#### `Signup.tsx`
**Purpose**: Registration page  
**Components**: SignupForm, SocialAuth, link to Login

#### `Dashboard.tsx`
**Purpose**: Main dashboard page (post-login)  
**Components**: WelcomeBanner, StatsCard, QuickActions, RecentActivity

#### `RequestSubdomain.tsx`
**Purpose**: Subdomain request page  
**Components**: RequestForm, RequestHistory

#### `EditProfile.tsx`
**Purpose**: Profile editing page  
**Components**: ProfileEditor with all sub-components

#### `Settings.tsx`
**Purpose**: User settings  
**Sections**: Account (email, password), Preferences (theme), Danger zone (delete account)

#### `Help.tsx`
**Purpose**: Help & FAQ  
**Content**: Common questions, contact support

#### `NotFound.tsx`
**Purpose**: 404 error page  
**Content**: "Page not found" + link to dashboard

---

## 🎯 BUILD PRIORITY ORDER

### **Phase 1: Foundation** (Files 1-10)
1. ✅ Configuration files (DONE)
2. `firebase.config.ts` - Firebase initialization
3. Type definitions (user, profile, request)
4. `constants.ts` - App constants
5. `validation.ts` - Form validation
6. `ThemeContext.tsx` - Dark mode
7. `useTheme.ts` - Theme hook
8. Shared components: Button, Input, Card, Spinner
9. `Header.tsx`, `Footer.tsx` - Basic layout
10. `main.tsx`, `App.tsx` - Entry points

### **Phase 2: Authentication** (Files 11-18)
11. `auth.service.ts` - Auth operations
12. `AuthContext.tsx` - Auth state
13. `useAuth.ts` - Auth hook
14. `LoginForm.tsx` - Login UI
15. `SignupForm.tsx` - Signup UI
16. `SocialAuth.tsx` - Google/GitHub login
17. `ProtectedRoute.tsx` - Route guard
18. `Login.tsx`, `Signup.tsx` - Auth pages

### **Phase 3: Dashboard** (Files 19-26)
19. `DashboardLayout.tsx` - Main layout
20. `Sidebar.tsx` - Navigation
21. `WelcomeBanner.tsx` - Greeting
22. `StatsCard.tsx` - Statistics
23. `QuickActions.tsx` - CTA buttons
24. `RecentActivity.tsx` - Timeline
25. `Dashboard.tsx` - Dashboard page
26. `Settings.tsx` - Settings page

### **Phase 4: Profile Management** (Files 27-35)
27. `profile.service.ts` - Profile CRUD
28. `storage.service.ts` - Image upload
29. `useProfile.ts` - Profile hook
30. `BasicInfo.tsx` - Name/title/bio
31. `ImageUpload.tsx` - Photo upload
32. `SocialLinks.tsx` - Social media
33. `SkillsEditor.tsx` - Skills
34. `ProfileEditor.tsx` - Main editor
35. `EditProfile.tsx` - Editor page

### **Phase 5: Subdomain Requests** (Files 36-40)
36. `request.service.ts` - Request operations
37. `useSubdomainRequest.ts` - Request hook
38. `SubdomainChecker.tsx` - Availability
39. `RequestForm.tsx` - Submit form
40. `RequestSubdomain.tsx` - Request page

---

## 📊 FILE DEPENDENCIES CHART

```
main.tsx
  └── App.tsx
      ├── AuthContext (wraps entire app)
      ├── ThemeContext (wraps entire app)
      └── React Router
          ├── Login.tsx
          │   ├── LoginForm.tsx
          │   │   ├── Input.tsx
          │   │   ├── Button.tsx
          │   │   └── auth.service.ts
          │   └── SocialAuth.tsx
          │
          ├── Dashboard.tsx (Protected)
          │   ├── DashboardLayout.tsx
          │   │   ├── Header.tsx
          │   │   ├── Sidebar.tsx
          │   │   └── Footer.tsx
          │   ├── WelcomeBanner.tsx
          │   ├── StatsCard.tsx
          │   └── QuickActions.tsx
          │
          ├── EditProfile.tsx (Protected)
          │   ├── ProfileEditor.tsx
          │   │   ├── BasicInfo.tsx
          │   │   ├── ImageUpload.tsx
          │   │   ├── SocialLinks.tsx
          │   │   └── SkillsEditor.tsx
          │   └── profile.service.ts
          │
          └── RequestSubdomain.tsx (Protected)
              ├── RequestForm.tsx
              ├── SubdomainChecker.tsx
              └── request.service.ts
```

---

## 🚀 ESTIMATED BUILD TIME

| Phase | Files | Time | Complexity |
|-------|-------|------|------------|
| Phase 1: Foundation | 10 files | 30-45 min | Low |
| Phase 2: Authentication | 8 files | 45-60 min | Medium |
| Phase 3: Dashboard | 8 files | 30-45 min | Low |
| Phase 4: Profile | 9 files | 60-90 min | Medium |
| Phase 5: Requests | 5 files | 30-45 min | Medium |
| **Total** | **40 files** | **3-5 hours** | **Medium** |

---

## ✅ QUALITY CHECKLIST

### Design Consistency
- [ ] Same neumorphic style across all components
- [ ] Identical color palette as marketing site
- [ ] Same typography (Poppins)
- [ ] Consistent spacing/shadows
- [ ] Dark mode works everywhere

### Functionality
- [ ] Login/Signup works
- [ ] Firebase Auth integration
- [ ] Protected routes work
- [ ] Profile editor saves to Firestore
- [ ] Image upload works
- [ ] Subdomain request submits
- [ ] Dashboard displays real data

### User Experience
- [ ] Loading states everywhere
- [ ] Error messages clear
- [ ] Success confirmations
- [ ] Responsive on mobile
- [ ] Fast load times

### Security
- [ ] Environment variables used
- [ ] No secrets in code
- [ ] Input validation
- [ ] Protected routes
- [ ] Firestore rules (done later)

---

## 🎯 NEXT STEPS

**Master, this is the complete architecture!**

**40 files** organized in **5 phases**, built with the **same professional quality** as your marketing site.

**What would you like me to do?**

**A)** ✅ **START BUILDING** - Begin with Phase 1 (Foundation) - 10 files  
**B)** 🔍 **REVIEW FIRST** - You want to suggest changes to the structure  
**C)** 📝 **MORE DETAILS** - You want detailed specs for specific components  

**Your call, Master!** 🚀

---

*Document Created: December 9, 2025*  
*Total Files: 40*  
*Estimated Build: 3-5 hours*  
*Design: Consistent with marketing site*
