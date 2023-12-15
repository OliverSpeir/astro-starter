/* eslint-disable */
const darkModeToggles = document.querySelectorAll(".darkmode-toggle");

const enableDarkMode = (store = true) => {
	document.documentElement.classList.add("dark");
	setBrowserThemeColor("#27272a");
	const darkModeToggles = document.querySelectorAll(".darkmode-toggle");
	darkModeToggles.forEach((toggle) => {
		switchSVG(
			toggle,
			`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="md:w-8 md:h-8 w-6 h-6 dark:text-zinc-100 text-zinc-950" aria-hidden="true" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z"/></svg>`,
		);
	});
	if (store) localStorage.setItem("darkMode", "enabled");
};

const switchSVG = (toggle, svgString) => {
	toggle.innerHTML = svgString;
};

const disableDarkMode = (store = true) => {
	document.documentElement.classList.remove("dark");
	setBrowserThemeColor("#2f3a91");
	const darkModeToggles = document.querySelectorAll(".darkmode-toggle");
	darkModeToggles.forEach((toggle) => {
		switchSVG(
			toggle,
			`<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="md:w-8 md:h-8 w-6 h-6 dark:text-zinc-100 text-zinc-950" aria-hidden="true" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75 9.75 9.75 0 0 1 8.25 6c0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25 9.75 9.75 0 0 0 12.75 21a9.753 9.753 0 0 0 9.002-5.998z"/></svg>`,
		);
	});
	if (store) localStorage.setItem("darkMode", "disabled");
};

const setBrowserThemeColor = (color) => {
	const metaThemeColor = document.querySelector("meta[name=theme-color]");
	metaThemeColor.setAttribute("content", color);
};

const setDarkMode = () => {
	const darkMode = localStorage.getItem("darkMode");
	const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

	if (darkMode === "enabled") {
		enableDarkMode(false);
	} else if (darkMode === "disabled") {
		disableDarkMode(false);
	} else {
		isSystemDark ? enableDarkMode(false) : disableDarkMode(false);
	}
};
setDarkMode();

const activateToggles = (darkModeToggles) => {
	darkModeToggles.forEach((darkModeToggle) => {
		darkModeToggle.addEventListener("click", (event) => {
			if (
				event.target.tagName === "path" ||
				event.target.parentNode.tagName === "path" ||
				event.target.tagName === "svg" ||
				event.target.parentNode.tagName === "svg"
			) {
				event.stopImmediatePropagation();
			}

			const darkMode = document.documentElement.classList.contains("dark");
			!darkMode ? enableDarkMode() : disableDarkMode();
		});
	});
};
activateToggles(darkModeToggles);

document.addEventListener("astro:after-swap", () => {
	activateToggles(document.querySelectorAll(".darkmode-toggle"));
	setDarkMode();
});
window.addEventListener("pageshow", setDarkMode);
