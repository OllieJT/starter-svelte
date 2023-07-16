declare module '*?raw' {
	const value: string;
	export default value;
}

declare module 'marked-smartypants' {
	type value = { markedSmartypants: marked.MarkedExtension };
	export const markedSmartypants: marked.MarkedExtension;
}
