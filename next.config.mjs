/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "*",
        port: "",
      },
      {
        protocol: "https",
        hostname: "*",
        port: "",
      },
    ],
  },
  rewrites: () => [
    {
      source: "/storage/:path*",
      destination: `${process.env.S3_ENDPOINT}/:path*`,
    },
  ],
};

export default nextConfig;
