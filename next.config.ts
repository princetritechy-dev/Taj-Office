import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,

  // ✅ your folder name
  basePath: "/taj-virtual",
  assetPrefix: "/taj-virtual",
};

export default nextConfig;
