module.exports = {
	plugins: ["./node_modules/prettier-plugin-tailwindcss"],
	bracketSpacing: true,
	jsxBracketSameLine: true,
	printWidth: 96,
	semi: true,
	singleQuote: false,
	tabWidth: 4,
	trailingComma: "all",
	useTabs: true,
	endOfLine: "lf",
	svelteSortOrder: "options-scripts-styles-markup",
	overrides: [
		{
			files: "*.svelte",
			options: { parser: "svelte" },
		},
	],
};
