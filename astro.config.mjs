import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/edge";

import { inject } from "@vercel/analytics";

inject();
// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
});
