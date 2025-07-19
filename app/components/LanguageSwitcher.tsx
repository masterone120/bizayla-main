"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { i18n, type Locale, getLocalizedPathname } from "../../lib/i18n-config";

const locales = [
  { code: "en" as const, name: "English", flag: "🇺🇸" },
  { code: "fr" as const, name: "Français", flag: "🇫🇷" },
  { code: "es" as const, name: "Español", flag: "🇪🇸" },
  { code: "de" as const, name: "Deutsch", flag: "🇩🇪" },
  { code: "uz" as const, name: "Oʻzbekcha", flag: "🇺🇿" },
  { code: "ru" as const, name: "Русский", flag: "🇷🇺" },
];



export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const getCurrentLocale = (): Locale => {
    const pathSegments = pathname.split("/");
    const locale = pathSegments[1];
    return i18n.locales.includes(locale as Locale)
      ? (locale as Locale)
      : i18n.defaultLocale;
  };

  const switchLanguage = (localeCode: Locale) => {
    const newPath = getLocalizedPathname(pathname, localeCode);
    router.push(newPath);
    setIsOpen(false);
  };

  const currentLocale = getCurrentLocale();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-2 py-1 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <span className="text-sm font-medium">
          {locales.find((l) => l.code === currentLocale)?.flag}
        </span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {currentLocale.toUpperCase()}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
          <div className="grid grid-cols-2 gap-2 bg-white p-2 ">
            {locales.map((locale) => (
              <button
                key={locale.code}
                onClick={() => switchLanguage(locale.code)}
                className={`w-full flex items-center space-x-3 px-2 py-1 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                  currentLocale === locale.code
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    : "text-green-800 dark:text-gray-300"
                }`}
              >
                <span className="text-lg">{locale.flag}</span>
                <span className="text-sm font-medium">{locale.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
