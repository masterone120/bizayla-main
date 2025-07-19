import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n, getLocaleFromPathname } from "./lib/i18n-config";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Detect if the path already has a locale
  const pathnameLocale = getLocaleFromPathname(pathname);
  const hasLocaleInPath = i18n.locales.includes(pathnameLocale);

  // Only redirect if the path does NOT have a locale
  if (!hasLocaleInPath) {
    const locale = detectUserLocale(request);
    const newUrl = new URL(`/${locale}${pathname}`, request.url);

    // Prevent redirect loop
    if (newUrl.pathname !== pathname) {
      return NextResponse.redirect(newUrl);
    }
  }

  const response = NextResponse.next();

  // Optional: theme logic
  const theme = request.cookies.get("theme")?.value;
  if (!theme) {
    const prefersDark =
      request.headers.get("sec-ch-prefers-color-scheme") === "dark";
    response.cookies.set("theme", prefersDark ? "dark" : "light");
  }

  return response;
}

// Detect locale from cookie or Accept-Language header
function detectUserLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (
    cookieLocale &&
    i18n.locales.includes(cookieLocale as (typeof i18n.locales)[number])
  ) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0].trim())
      .find((lang) =>
        i18n.locales.includes(
          lang.split("-")[0] as (typeof i18n.locales)[number]
        )
      );

    if (preferredLocale) {
      return preferredLocale.split("-")[0];
    }
  }

  return i18n.defaultLocale;
}

// Only match paths that do NOT already have a locale or are static files
export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*|en|fr|es|de|ru|uz).*)"],
};
