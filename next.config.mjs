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
        protocol: "http",
        hostname: "103.186.1.45",
        port: "82",
      },
    ],
  },
};

export default nextConfig;
