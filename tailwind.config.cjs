const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,md,mdx,svelte,ts}'],
	// darkMode: "class",

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: colors.violet,
				mono: colors.slate,
			},
		},
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		plugin(function ({ addVariant }) {
			addVariant('hocus', ['&:hover', '&:focus']);
		}),
	],
};

module.exports = config;
