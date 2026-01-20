/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], // 使用现代图片格式（更小更快）
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 允许所有外部图片（根据需要可以限制域名）
      },
    ],
  },
  reactStrictMode: true, // 开启严格模式，提前发现错误
  compress: true, // 开启 Gzip 压缩
  ...(process.env.NODE_ENV === 'production' && {
    compiler: {
      removeConsole: {
        exclude: ['error', 'warn'], // 生产环境移除 console.log，保留 error 和 warn
      },
    },
  }),
};

module.exports = nextConfig;
