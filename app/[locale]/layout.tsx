import { i18n } from "../../lib/i18n-config";
import { notFound } from "next/navigation";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = i18n.locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  return <>{children}</>;
}

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}
 