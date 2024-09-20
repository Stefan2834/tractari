/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    i18n: {
        locales: ["ro"],
        defaultLocale: "ro",
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cityprintshop.ro',
            },
        ],
    },
};

export default nextConfig;
