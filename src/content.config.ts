import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const blogsCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.date(),
			ogImage: image(),
			ogImageAlt: z.string().default(""),
			tags: z.array(z.string()).default([]),
		}),
});

export const collections = {
	blog: blogsCollection,
};
