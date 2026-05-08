import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  headers: () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store",
        },
      ],
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
      {
        protocol: process.env.NEXT_PUBLIC_IMAGE_PORT == "443" ? "https" : "http",
        hostname: process.env.NEXT_PUBLIC_IMAGE_HOSTNAME,
        port: process.env.NEXT_PUBLIC_IMAGE_PORT == "443" ? "" : process.env.NEXT_PUBLIC_IMAGE_PORT,
      },
    ],
  },
};

export default withNextIntl(nextConfig);
