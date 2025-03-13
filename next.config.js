/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Eksik modülleri görmezden gel
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        };
        
        return config;
    },
    // Resim optimizasyonunu devre dışı bırak
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig