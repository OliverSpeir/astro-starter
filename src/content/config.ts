import { z, defineCollection } from "astro:content";

const blogsCollection = defineCollection({
	type: "content",
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
