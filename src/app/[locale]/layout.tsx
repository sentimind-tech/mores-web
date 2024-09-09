import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import "../globals.css";
import "toastr/build/toastr.min.css";

type LayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<LayoutProps, "children">) {
  const t = await getTranslations({ locale, namespace: "Common" });

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: [
        {
          media: "(prefers-color-scheme: light)",
          url: "/images/favicon-black-32x32.png",
          href: "/images/favicon-black-32x32.png",
        },
        {
          media: "(prefers-color-scheme: dark)",
          url: "/images/favicon-white-32x32.png",
          href: "/images/favicon-white-32x32.png",
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<LayoutProps>) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
