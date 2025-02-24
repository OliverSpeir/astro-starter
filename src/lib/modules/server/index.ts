import type { CollectionEntry } from "astro:content";

export const example = "Hello World";

export function readableDate(
	date: Date | undefined,
	options: Intl.DateTimeFormatOptions = {
		timeZone: "UTC",
		year: "numeric",
		month: "short",
		day: "2-digit",
	},
): string {
	if (date === undefined) {
		return "Invalid Date";
	}

	return date.toLocaleDateString("en-US", options);
}

export const blogDateSort = (a: CollectionEntry<"blog">, b: CollectionEntry<"blog">) => {
	return b.data.date.getTime() - a.data.date.getTime();
};
