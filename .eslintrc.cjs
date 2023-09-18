module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:svelte/prettier',
	],
	plugins: ['@typescript-eslint', 'unused-imports'],
	ignorePatterns: ['*.cjs'],
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			// Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
		{
			files: ['validators/prisma/*.ts'],
			rules: {
				'@typescript-eslint/no-unused-vars': 'off',
			},
		},
	],
	globals: {
		$$Generic: 'readonly',
		$$Props: 'readonly',
	},
	settings: {
		'svelte3/typescript': () => require('typescript'),
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	rules: {
		'@typescript-eslint/no-inferrable-types': 'off',
	},
};
