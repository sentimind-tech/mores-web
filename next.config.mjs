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
    ],
  },
};

export default nextConfig;
