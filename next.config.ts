import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // Use this if you are absolutely sure the errors are from generated files
    // and you cannot resolve them otherwise.
    ignoreDuringBuilds: true,

    // Alternatively, if you want to be more specific, you can provide
    // a custom `dirs` array, but `ignoreDuringBuilds` is simpler for now.
    // dirs: ['pages', 'components', 'utils', 'lib', 'app'], // Example, adjust as needed
  },
  images: {
    remotePatterns: [
      {
        hostname: "www.salesforce.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
