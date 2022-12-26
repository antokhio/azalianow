/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        apiUrl: `https://fakestoreapi.com`,
    },
};

module.exports = nextConfig;
