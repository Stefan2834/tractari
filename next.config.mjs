/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ["ro"],
        defaultLocale: "ro",
    },
    images: {
        domains: [
            "cityprintshop.ro",
        ],
    },
};

export default nextConfig;
