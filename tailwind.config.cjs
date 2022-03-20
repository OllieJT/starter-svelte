const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	darkMode: "class",

	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter var", "Inter", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: colors.orange,
				secondary: colors.indigo,
				mono: colors.stone,
			},
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
