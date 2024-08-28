import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mores Strategics",
  description:
    "Consultant/advisory specializes in communication, creative financing, business & investment through data analysis, technology & ethnographic approach",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
