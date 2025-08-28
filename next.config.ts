import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "offline-cache",
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
};

export default nextConfig
