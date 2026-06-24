import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// Gunakan async (params) dengan await requestLocale
export default getRequestConfig(async (params) => {
  const { requestLocale } = params;
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../../locales/${locale}.json`)).default,
  };
});