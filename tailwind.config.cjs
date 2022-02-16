const plugin = require("tailwindcss/plugin");

const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	darkMode: "class",

	theme: {
		fontFamily: {
			sans: [
				"Inter",
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
				"BlinkMacSystemFont",
				"Segoe UI",
				"Roboto",
				"Helvetica Neue",
				"Arial",
				"Noto Sans",
				"sans-serif",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
				"Noto Color Emoji",
			],
			serif: [
				"Recoleta Alt",
				"Playfair Display",
				"ui-serif",
				"Georgia",
				"Cambria",
				"Times New Roman",
				"Times",
				"serif",
			],
			mono: [
				"ui-monospace",
				"SFMono-Regular",
				"Menlo",
				"Monaco",
				"Consolas",
				"Liberation Mono",
				"Courier New",
				"monospace",
			],
		},
		extend: {
			minHeight: {
				interactive: "48px",
			},
			minWidth: {
				interactive: "48px",
			},
		},
	},

	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		plugin(function ({ addVariant }) {
			addVariant("enabled", "&:enabled");
			addVariant("hocus", ["&:hover", "&:focus"]);
			addVariant("interacting", ["&:hover", "&:focus", "&:focus-within", "&.active"]);
		}),
	],
};

module.exports = config;
