import path from "path";
import fs from "fs";

/*
	1. Open dev tools [Elements > Styles]
	2. Find CSScustom properties under :root{...}
	3. Copy and paste all properties into `pasteCssCustomProperties` below.
	4. run `yarn format-custom-properties`
*/

const pasteCssCustomProperties = `
	--font-family-sans: "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
	--font-family-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
	--font-family-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
	--font-size-hero-title: 4.8rem;
	--font-size-large-title: 3.2rem;
	--font-size-medium-title: 2.2rem;
	--font-size-small-title: 1.6rem;
	--font-size-hero-content: 2.4rem;
	--font-size-large-content: 2rem;
	--font-size-medium-content: 1.8rem;
	--font-size-small-content: 1.4rem;
	--font-weight-base: 300;
	--font-weight-medium: 600;
	--font-weight-bold: 800;
	--line-height-tiny: calc(1em - 0.4rem);
	--line-height-small: 1em;
	--line-height-medium: calc(1em + 0.4rem);
	--line-height-large: calc(1em + 0.8rem);
	--line-height-huge: calc(1em + 1.6rem);
	--space-tiny: 0.4rem;
	--space-small: 0.8rem;
	--space-medium: 1.6rem;
	--space-large: 3.2rem;
	--space-huge: 6.4rem;
	--radius-tiny: 0.2rem;
	--radius-small: 0.4rem;
	--radius-medium: 0.8rem;
	--radius-large: 1.2rem;
	--radius-huge: 100rem;
	--clr-dark-fg-brand: #fa3879;
	--clr-dark-fg-accent: #38faa9;
	--clr-dark-fg: white;
	--clr-dark-fg-content: #b2b2b2;
	--clr-dark-fg-detail: gray;
	--clr-dark-bg-brand: #290a14;
	--clr-dark-bg-accent: #082116;
	--clr-dark-bg-elevated: #19191a;
	--clr-dark-bg: #0d0d0d;
	--clr-dark-bg-depressed: #050505;
	--clr-dark-border-brand: #ec135b;
	--clr-dark-border-accent: #13ec92;
	--clr-dark-border-elevated: #313135;
	--clr-dark-border: #252525;
	--clr-dark-border-depressed: #020203;
	--clr-light-fg-brand: #b8003d;
	--clr-light-fg-accent: #008055;
	--clr-light-fg: black;
	--clr-light-fg-content: #3c3c44;
	--clr-light-fg-detail: #818188;
	--clr-light-bg-brand: #fccfde;
	--clr-light-bg-accent: #cffced;
	--clr-light-bg-elevated: white;
	--clr-light-bg: #fafafa;
	--clr-light-bg-depressed: #eaebec;
	--clr-light-border-brand: #f20d59;
	--clr-light-border-accent: #00e599;
	--clr-light-border-elevated: white;
	--clr-light-border: #dbdbdb;
	--clr-light-border-depressed: #c9cccf;
	color-scheme: dark;
	--fg-brand: var(--clr-dark-fg-brand);
	--fg-accent: var(--clr-dark-fg-accent);
	--fg: var(--clr-dark-fg);
	--fg-content: var(--clr-dark-fg-content);
	--fg-detail: var(--clr-dark-fg-detail);
	--bg-brand: var(--clr-dark-bg-brand);
	--bg-accent: var(--clr-dark-bg-accent);
	--bg-elevated: var(--clr-dark-bg-elevated);
	--bg: var(--clr-dark-bg);
	--bg-depressed: var(--clr-dark-bg-depressed);
	--border-brand: var(--clr-dark-border-brand);
	--border-accent: var(--clr-dark-border-accent);
	--border-elevated: var(--clr-dark-border-elevated);
	--border: var(--clr-dark-border);
	--border-depressed: var(--clr-dark-border-depressed);
`;

function saveToFile(input = "") {
	const pathToFile = path.resolve("./src/styles/variables.scss");
	const updateNote = `// Last Updated: ${new Date().toUTCString()}`;
	const data = updateNote + input;

	fs.writeFile(pathToFile, data, (err) => {
		if (err) console.log(err);
		else {
			console.log("File written successfully\n");
			console.log("The written has the following contents:");
			console.log(fs.readFileSync(pathToFile, "utf8"));
		}
	});
}

function extractPropertiesForCss(css = "") {
	const values = css.split(";");
	const removeValues = values
		.map((v) => v.trim().split(":")[0])
		.filter((x) => {
			if (!x) return false;
			if (x.startsWith("--")) return true;
			return false;
		});

	return removeValues;
}
/* function extractPropertiesForSass(css = "") {
	const values = css.split(";");
	const removeValues = values
		.map((v) => v.trim())
		.filter((x) => {
			if (!x) return false;
			if (x.startsWith("--")) return true;
			return false;
		});

	return removeValues;
} */

saveToFile(
	extractPropertiesForCss(pasteCssCustomProperties).reduce((previous = "", current) => {
		const value = `var(${current})`;
		const property = current.replace("--", "");

		return `${previous}\n$${property}:${value};`;
	}, ""),
);
