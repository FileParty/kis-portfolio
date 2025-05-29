import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd && isGitHubPages ? "/kis-portfolio" : "",
  assetPrefix: isProd && isGitHubPages ? "/kis-portfolio/" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
};

export default nextConfig;
