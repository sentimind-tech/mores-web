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
                hostname: process.env.NEXT_PUBLIC_IMAGE_HOSTNAME,
                port: process.env.NEXT_PUBLIC_IMAGE_PORT,
            },
        ],
    },

};

export default nextConfig;
