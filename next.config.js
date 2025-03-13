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
    // Base path ekleyin (eğer alt dizine yükleyecekseniz)
    // basePath: '/site-klasoru',
    // Trailing slashes ekleyin (isteğe bağlı)
    trailingSlash: true,
    output: 'export'
}

module.exports = nextConfig