import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    edgeMiddleware: true,
    functionPerRoute: true,
    edgeMiddleware: true,
    imageService: true,
    webAnalytics: {
      enabled: true
    },
    imagesConfig: {
      sizes: [100],
    },
    maxDuration: 8,
  })
});
