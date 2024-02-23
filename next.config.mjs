/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sjjddzdtblsrywsiiorv.supabase.co",
      },
    ],
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
