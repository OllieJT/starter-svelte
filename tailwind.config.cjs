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
				mono: colors.zinc,
				brand: colors.orange,
				accent: colors.purple,
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
				'fill-40': 'repeat(auto-fill, minmax(10rem, 1fr))', // 160px
				'fill-60': 'repeat(auto-fill, minmax(15rem, 1fr))', // 240px
				'fill-80': 'repeat(auto-fill, minmax(20rem, 1fr))', // 320px
				'fill-100': 'repeat(auto-fill, minmax(25rem, 1fr))', // 400px
				'fill-120': 'repeat(auto-fill, minmax(30rem, 1fr))', // 480px
				'fill-140': 'repeat(auto-fill, minmax(35rem, 1fr))', // 560px
				'fill-160': 'repeat(auto-fill, minmax(40rem, 1fr))', // 640px
				'fill-180': 'repeat(auto-fill, minmax(45rem, 1fr))', // 720px
				'fill-200': 'repeat(auto-fill, minmax(50rem, 1fr))', // 800px
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
			addVariant('focus', ['&:focus', '&:focus-visible', '&:focus-within']);
			addVariant('error', ['&:invalid', '&.invalid']);
			addVariant('current', ['&.current']);
			addVariant('resting', ['&:not(.current)']);
		}),
	],
};

module.exports = config;
