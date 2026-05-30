import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://ysmMachine.github.io",
  base: "/ysm_hompage/",
  integrations: [mdx(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  }
});
