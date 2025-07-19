# Internationalization (i18n) Setup Guide - App Router

## Overview

This project now supports 4 languages: English (en), French (fr), Spanish (es), and German (de) using Next.js App Router internationalization.

## URL Structure

- English: `/about`, `/contact`, etc.
- French: `/fr/about`, `/fr/contact`, etc.
- Spanish: `/es/about`, `/es/contact`, etc.
- German: `/de/about`, `/de/contact`, etc.

## Files Structure

### Translation Files

```
public/locales/
├── en.json (English)
├── fr.json (French)
├── es.json (Spanish)
└── de.json (German)
```

### Configuration Files

- `lib/i18n-config.ts` - i18n configuration and utilities
- `middleware.ts` - Locale detection and routing
- `app/hooks/useTranslation.ts` - Translation hook
- `app/components/LanguageSwitcher.tsx` - Language switcher component

## How to Use

### 1. Using Translations in Components

```tsx
"use client";

import { useTranslation } from "../hooks/useTranslation";

export default function MyComponent() {
  const { t, locale, loading } = useTranslation();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{t("home.hero.title")}</h1>
      <p>{t("home.hero.subtitle")}</p>
      <button>{t("home.hero.cta")}</button>
    </div>
  );
}
```

### 2. Creating Localized Links

```tsx
import Link from "next/link";
import { useTranslation } from "../hooks/useTranslation";
import { getLocalizedPathname } from "../../lib/i18n-config";

export default function Navigation() {
  const { locale } = useTranslation();

  const getLocalizedPath = (path: string) => {
    return getLocalizedPathname(path, locale);
  };

  return (
    <nav>
      <Link href={getLocalizedPath("/about")}>About</Link>
      <Link href={getLocalizedPath("/contact")}>Contact</Link>
    </nav>
  );
}
```

### 3. Adding the Language Switcher

```tsx
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Header() {
  return (
    <header>
      {/* Your header content */}
      <LanguageSwitcher />
    </header>
  );
}
```

## Translation Keys Structure

```json
{
  "navigation": {
    "home": "Home",
    "about": "About",
    "services": "Services",
    "blog": "Blog",
    "contact": "Contact"
  },
  "home": {
    "hero": {
      "title": "Welcome to Bizayla",
      "subtitle": "Your trusted partner for business solutions",
      "cta": "Get Started",
      "learnMore": "Learn More"
    }
  },
  "about": {
    "title": "About Bizayla",
    "subtitle": "Your Success is Our Mission",
    "description": "We are a team of passionate professionals...",
    "mission": "Our Mission",
    "vision": "Our Vision",
    "values": "Our Values"
  },
  "services": {
    "title": "Our Services",
    "subtitle": "Comprehensive solutions for your business"
  },
  "blog": {
    "title": "Blog",
    "subtitle": "Latest insights and updates",
    "readMore": "Read More",
    "publishedOn": "Published on"
  },
  "contact": {
    "title": "Contact Us",
    "subtitle": "Get in touch with our team",
    "name": "Name",
    "email": "Email",
    "message": "Message",
    "send": "Send Message"
  },
  "footer": {
    "copyright": "© 2024 Bizayla. All rights reserved.",
    "privacy": "Privacy Policy",
    "terms": "Terms of Service"
  },
  "common": {
    "loading": "Loading...",
    "error": "An error occurred",
    "notFound": "Page not found",
    "backToHome": "Back to Home"
  }
}
```

## Adding New Translations

### 1. Add New Keys

Add new translation keys to all language files:

```json
// en.json
{
  "newSection": {
    "title": "New Section Title",
    "description": "New section description"
  }
}

// fr.json
{
  "newSection": {
    "title": "Titre de la nouvelle section",
    "description": "Description de la nouvelle section"
  }
}
```

### 2. Use in Components

```tsx
const { t } = useTranslation();

return (
  <div>
    <h2>{t("newSection.title")}</h2>
    <p>{t("newSection.description")}</p>
  </div>
);
```

## Features

### ✅ Automatic Locale Detection

- Browser language preference detection
- Cookie-based locale persistence
- Fallback to default locale (English)

### ✅ SEO Friendly

- Proper URL structure with locale prefixes
- Automatic hreflang tags (can be added to layout)
- Search engine friendly URLs

### ✅ User Experience

- Language switcher with flags
- Smooth transitions between languages
- Loading states for translations

### ✅ Developer Experience

- Type-safe translations with TypeScript
- Easy-to-use `t()` function
- Nested key support (e.g., `t('home.hero.title')`)

## Best Practices

1. **Always use the `t()` function** for user-facing text
2. **Keep translation keys organized** in logical sections
3. **Use descriptive keys** that make sense in context
4. **Test all languages** after adding new content
5. **Maintain consistent terminology** across languages
6. **Use the `getLocalizedPath()` helper** for internal links

## Troubleshooting

### Translation Not Loading

- Check if the JSON file exists in `public/locales/`
- Verify the JSON syntax is valid
- Check browser console for errors

### Language Switcher Not Working

- Ensure the component is properly imported
- Check if the middleware is configured correctly
- Verify the locale codes match in all files

### URLs Not Working

- Check the middleware configuration
- Verify the `next.config.ts` i18n settings
- Ensure all pages are in the correct directory structure

## Next Steps

1. **Add more translations** to existing pages
2. **Implement hreflang tags** in the layout
3. **Add language-specific meta tags**
4. **Create language-specific content** where needed
5. **Add RTL support** for languages that need it
6. **Implement translation memory** for better UX
