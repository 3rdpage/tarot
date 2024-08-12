/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'placecats.com' }],
  },
};

export default nextConfig;
