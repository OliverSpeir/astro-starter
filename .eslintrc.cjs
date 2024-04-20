/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
	ignorePatterns: ["node_modules", "dist"],
	root: true,
	env: {
		node: true,
	},
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "prettier"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"plugin:astro/recommended",
		"plugin:astro/jsx-a11y-strict",
	],
	rules: {
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{ varsIgnorePattern: "Props", ignoreRestSiblings: true },
		],
		"@typescript-eslint/triple-slash-reference": "off",
	},
	overrides: [
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			rules: {
				"prettier/prettier": "off",
			},
		},
		{
			files: ["./src/assets/scripts/*"],
			env: {
				node: false,
				browser: true,
			},
		},
	],
	globals: {
		theme: "readonly",
	},
};
