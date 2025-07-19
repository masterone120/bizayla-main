"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { i18n, type Locale } from "../../lib/i18n-config";

export interface Translations {
  navigation: {
    home: string;
    about: string;
    services: string;
    blog: string;
    contact: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
      learnMore: string;
    };
    about: {
      title: string;
      subtitle: string;
      description: string;
    };
    services: {
      title: string;
      subtitle: string;
      consulting: string;
      development: string;
      marketing: string;
      support: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    mission: string;
    vision: string;
    values: string;
  };
  services: {
    title: string;
    subtitle: string;
    consulting: {
      title: string;
      description: string;
    };
    development: {
      title: string;
      description: string;
    };
    marketing: {
      title: string;
      description: string;
    };
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    publishedOn: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    address: string;
    phone: string;
  };
  footer: {
    copyright: string;
    privacy: string;
    terms: string;
  };
  common: {
    loading: string;
    error: string;
    notFound: string;
    backToHome: string;
  };
}

export function useTranslation() {
  const pathname = usePathname();
  const [translations, setTranslations] = useState<Translations | null>(null);
  const [loading, setLoading] = useState(true);
  const [locale, setLocale] = useState<Locale>(i18n.defaultLocale);

  useEffect(() => {
    const getLocaleFromPath = (): Locale => {
      const pathSegments = pathname.split("/");
      const pathLocale = pathSegments[1];
      return i18n.locales.includes(pathLocale as Locale)
        ? (pathLocale as Locale)
        : i18n.defaultLocale;
    };

    const loadTranslations = async () => {
      setLoading(true);
      const currentLocale = getLocaleFromPath();
      // console.log("Loading translations for locale:", currentLocale);
      setLocale(currentLocale);

      try {
        const response = await fetch(`/locales/${currentLocale}.json`);
        if (!response.ok) {
          throw new Error(
            `Failed to load translations for ${currentLocale}: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        // console.log("Loaded translations:", data);
        setTranslations(data);
      } catch (error) {
        console.error(
          `Error loading translations for ${currentLocale}:`,
          error
        );
        // Fallback to default locale
        try {
          // console.log(
          //   "Attempting fallback to default locale:",
          //   i18n.defaultLocale
          // );
          const fallbackResponse = await fetch(
            `/locales/${i18n.defaultLocale}.json`
          );
          if (!fallbackResponse.ok) {
            throw new Error(
              `Failed to load fallback translations: ${fallbackResponse.status} ${fallbackResponse.statusText}`
            );
          }
          const fallbackData = await fallbackResponse.json();
          // console.log("Loaded fallback translations:", fallbackData);
          setTranslations(fallbackData);
        } catch (fallbackError) {
          console.error("Error loading fallback translations:", fallbackError);
        }
      } finally {
        setLoading(false);
      }
    };

    loadTranslations();
  }, [pathname]);

  const t = (key: string) => {
    if (!translations) return key;

    const keys = key.split(".");
    let value: unknown = translations;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    // Return value directly (string, array, or object)
    return value;
  };

  return {
    t,
    translations,
    loading,
    locale,
    locales: i18n.locales,
  };
}
