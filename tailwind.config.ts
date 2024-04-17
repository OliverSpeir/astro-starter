import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
	content: ["./src/**/*.{astro,js,ts,tsx,md,mdx}"],
	darkMode: ["selector", '[data-theme="dark"]'],
	corePlugins: {
		preflight: false,

		// We disable those because they add stuff to the CSS file even when unused
		filter: false,
		backdropFilter: false,
		ringWidth: false,
		ringColor: false,
		ringOffsetWidth: false,
		ringOffsetColor: false,
		boxShadow: false,
		transform: false,
		touchAction: false,
		scrollSnapType: false,
		borderColor: false, // If we don't disable this, Tailwind will apply a default border color to all the elements
		borderOpacity: false,
		textOpacity: false,

		// Things we might need in the future but disable for now as they also add stuff
		fontVariantNumeric: false,
	},

	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		extend: {
			colors: {
				inherit: "inherit",
				"light-bg": "#f2f3f5",
				"dark-bg": "#27272a",
				"light-text": "#09090b",
				"dark-text": "#ecf1f9",
				"link-color": "#272d6f",
				"dark-link-color": "#7089f6",
			},
		},
	},

	plugins: [
		plugin(({ addBase, theme }) => {
			addBase({
				// Small reset, preflight include a lot of stuff we don't use so let's make our own
				"*, ::before, ::after": {
					boxSizing: "border-box",
				},
				html: {
					fontSize: "17px",
					lineHeight: "1.5",
					"@apply text-light-text": {},
				},

				body: {
					"@apply min-h-screen w-full bg-light-bg dark:bg-dark-bg p-2 dark:text-dark-text": {},
				},

				"body, dl, dd, p": {
					margin: "0",
				},

				":root": {
					"-moz-tab-size": "4",
					tabSize: "4",
				},

				// Custom stuff
				"html, body": {
					fontFamily:
						"ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', fallback-arial, 'Arial', 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
				},

				a: {
					textDecoration: "none",
					fontWeight: "500",
					transition: "color .15s",
					"&:hover": {
						textDecoration: "underline",
						textUnderlinePosition: "from-font",
						textDecorationThickness: "2px",
					},
					"@apply text-link-color dark:text-dark-link-color": {},
				},

				"h1, h2, h3, h4": {
					letterSpacing: "-.01em",
					fontWeight: "550",
				},

				dt: { fontWeight: "bold" },

				"dd:not(:last-of-type)": {
					marginBottom: "1rem",
				},

				// Articles
				article: {
					marginBottom: "3rem",
				},

				"article p, p, ul, pre, blockquote": {
					marginBottom: "1em",
				},

				"h1, h2": {
					marginTop: "1.3rem",
					marginBottom: ".6rem",
				},

				h3: {
					marginBottom: ".6rem",
				},

				"li>p": {
					marginBottom: ".6rem",
				},

				blockquote: {
					paddingTop: "0.5rem",
					paddingBottom: "0.5rem",
					paddingLeft: "1rem",
					borderLeft: "5px solid",
					borderColor: "#35363A",
					backgroundColor: "#D4D4D8",
					borderRadius: theme("borderRadius.md"),
					fontStyle: "italic",
					fontWeight: "450",
					marginLeft: "0",
					marginRight: "0",
					"@apply sm:mx-5 dark:bg-zinc-900": {},
					"& p:last-child": {
						marginBottom: "0",
					},
				},

				figure: {
					marginTop: "1.4rem",
					marginBottom: "1rem",
					textAlign: "center",
					"@apply sm:mx-8 mx-0": {},
				},

				img: {
					maxWidth: "100%",
					height: "auto",
					borderRadius: theme("borderRadius.md"),
				},

				figcaption: {
					textAlign: "center",
					display: "block",
					margin: ".15rem 0",
					fontStyle: "italic",
					fontSize: ".95rem",
					"@apply text-zinc-600 dark:text-zinc-400": {},
				},

				iframe: {
					margin: "0 auto 1rem",
					display: "block",
				},
			});
		}),
	],
};

export default config;
