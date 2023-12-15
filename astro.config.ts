import { defineConfig } from "astro/config";
import type { AstroUserConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

const config: AstroUserConfig = defineConfig({
	site: "http://www.example.com",
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		robotsTxt(),
	],
});

export default defineConfig(config);
