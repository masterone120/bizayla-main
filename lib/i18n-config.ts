export const i18n = {
  defaultLocale: "en",
  locales: ["en", "fr", "es", "de", "ru", "uz"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split("/");
  const locale = segments[1];

  if (i18n.locales.includes(locale as Locale)) {
    return locale as Locale;
  }

  return i18n.defaultLocale;
}

export function getPathnameWithoutLocale(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);
  if (locale === i18n.defaultLocale) {
    return pathname;
  }
  return pathname.replace(`/${locale}`, "") || "/";
}

export function getLocalizedPathname(pathname: string, locale: Locale): string {
  // First, get the current locale from the pathname
  const currentLocale = getLocaleFromPathname(pathname);

  // Remove the current locale from the pathname
  let pathWithoutLocale = pathname;
  if (i18n.locales.includes(currentLocale)) {
    pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/";
  }

  // Add the new locale
  if (locale === i18n.defaultLocale) {
    return pathWithoutLocale;
  }
  return `/${locale}${pathWithoutLocale}`;
}
