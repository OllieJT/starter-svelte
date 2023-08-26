const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				white: '#fff',
				black: '#000',
				mono: colors.slate,
				brand: colors.orange,
			},
			screens: {
				xs: '480px',
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						pre: { 'background-color': 'transparent' },
					},
				},
			}),

			transitionTimingFunction: {
				'out-circ': 'cubic-bezier(0, 0.3, 0, 1)',
			},
			gridTemplateColumns: {
				'fill-40': 'repeat(auto-fill, minmax(10rem, 1fr))',
				'fill-60': 'repeat(auto-fill, minmax(15rem, 1fr))',
				'fill-80': 'repeat(auto-fill, minmax(20rem, 1fr))',
			},
		},
	},

	corePlugins: {
		aspectRatio: false,
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),

		plugin(function ({ addVariant }) {
			addVariant('hocus', ['&:hover', '&:focus', '&:focus-visible']);
			addVariant('focus', ['&:focus', '&:focus-visible']);
			addVariant('error', ['&:invalid', '&.invalid']);
			addVariant('current', ['&.current']);
		}),
	],
};

module.exports = config;
