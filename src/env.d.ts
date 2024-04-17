// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="astro/client" />

interface Window {
	theme: {
		setTheme: (theme: "auto" | "dark" | "light") => void;
		getTheme: () => "auto" | "dark" | "light";
		getSystemTheme: () => "light" | "dark";
		getDefaultTheme: () => "auto" | "dark" | "light";
	};
}
