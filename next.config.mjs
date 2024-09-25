/** @type {import('next').NextConfig} */


const nextConfig = {
    reactStrictMode: false,
    i18n: {
        locales: ["ro"],
        defaultLocale: "ro",
    },
    async rewrites() {
        return [
            {
                source: 'http://kotasistenta.ro',
                destination: 'https://kotasistenta.ro',
                permanent: "true",
            }
        ]
    }
};

export default nextConfig;
