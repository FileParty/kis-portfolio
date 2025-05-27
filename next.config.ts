import type { NextConfig } from "next";
import { writeFileSync } from 'fs';
import { join } from 'path';

const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

console.log('=== BUILD CONFIGURATION ===');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('GITHUB_PAGES:', process.env.GITHUB_PAGES);
console.log('isProd:', isProd);
console.log('isGitHubPages:', isGitHubPages);
console.log('Will use basePath:', isProd && isGitHubPages ? "/kis-portfolio" : "NONE");
console.log('============================');

// GitHub Pages용 .nojekyll 파일 생성
if (isProd && isGitHubPages) {
  const nojekyllPath = join(process.cwd(), 'out', '.nojekyll');
  try {
    writeFileSync(nojekyllPath, '');
    console.log('.nojekyll file created for GitHub Pages');
  } catch (error) {
    console.log('.nojekyll creation will happen after build');
  }
}

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
