"use client";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { i18n, type Locale, getLocalizedPathname } from "@/lib/i18n-config";

const locales = [
  { code: "en" as const, name: "English", flag: "🇺🇸" },
  { code: "fr" as const, name: "Français", flag: "🇫🇷" },
  { code: "es" as const, name: "Español", flag: "🇪🇸" },
  { code: "de" as const, name: "Deutsch", flag: "🇩🇪" },
  { code: "uz" as const, name: "Oʻzbekcha", flag: "🇺🇿" },
  { code: "ru" as const, name: "Русский", flag: "🇷🇺" },
];

export default function MobileLanguageSwitcher() {
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
    <div className="flex justify-between gap-2 items-center !bg-[#0c6e6d] p-2  w-full relative">
      <div className="d-flex align-items-center gap-3 text-white">
        <span className="right_info">
          <i className="fas fa-phone-alt"></i>
          <a
            href="tel:+491749111715"
            className="text-white text-decoration-none hover:text-primary"
            title="Call us"
          >
            {" "}
            +49 174 911 17 15
          </a>
        </span>
      </div>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-2 py-1 rounded-md bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <span className="text-sm">
            {locales.find((l) => l.code === currentLocale)?.flag}
          </span>
          <span className="text-sm font-medium text-gray-700">
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
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg !z-50">
            <div className="flex flex-col p-2">
              {locales.map((locale) => (
                <button
                  key={locale.code}
                  onClick={() => switchLanguage(locale.code)}
                  className={`flex items-center space-x-2 px-2 py-1 rounded hover:bg-gray-100 transition-colors text-left ${
                    currentLocale === locale.code
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-800"
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
    </div>
  );
}
