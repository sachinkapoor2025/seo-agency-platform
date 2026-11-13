import type { NextConfig } from "next";

const legacyCaseStudyRedirects = [
  "/case-studies/international-product-catalogue",
  "/case-studies/b2b-software-documentation",
  "/case-studies/multi-location-service-business",
  "/case-studies/advisory-explanatory-content",
];

const nextConfig: NextConfig = {
  output: "export",
  async redirects() {
    return legacyCaseStudyRedirects.map((source) => ({
      source,
      destination: "/case-studies",
      permanent: true,
    }));
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
