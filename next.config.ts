import type { NextConfig } from "next";

const pages = process.env.GITHUB_PAGES === "true";
const basePath = pages ? new URL(process.env.SITE_URL!).pathname.replace(/\/$/, "") : "";

const config: NextConfig = {
  poweredByHeader: false,
  agentRules: false,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_PAGES_DEMO: String(pages),
  },
  ...(pages && {
    output: "export",
    trailingSlash: true,
    images: { unoptimized: true },
    // A página e o layout são TSX. O handler POST em route.ts requer um servidor.
    pageExtensions: ["tsx"],
  }),
};

export default config;
