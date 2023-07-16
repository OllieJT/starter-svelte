import matter from 'gray-matter';
import hljs from 'highlight.js';
import { marked } from 'marked';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import { markedHighlight } from 'marked-highlight';
import { mangle } from 'marked-mangle';
import { markedSmartypants } from 'marked-smartypants';

marked.use({
	gfm: true,
});
marked.use(
	markedHighlight({
		langPrefix: 'hljs language-',
		async: true,
		highlight(code, lang) {
			return new Promise<string>((resolve) => {
				const language = hljs.getLanguage(lang) ? lang : 'plaintext';
				console.log(language, ' :: ', code);
				const value = hljs.highlight(code, { language }).value;
				resolve(value);
			});
		},
	}),
);
marked.use(markedSmartypants());
marked.use(gfmHeadingId());
marked.use(mangle());

export const get_markdown_file = async <T>(
	filename: string,
	file: string,
	validator: (values: { [key: string]: unknown }) => T,
) => {
	const markdown = matter(file);
	const metadata = validator(markdown.data);
	const content = await marked.parse(markdown.content, { async: true });
	const slug = filename.replace(/\.md$/, '').split('/').pop();

	return { metadata, content, slug };
};

export const get_markdown_files = async <T>(
	files: Record<string, () => Promise<string>>,
	validator: (values: { [key: string]: unknown }) => T,
) => {
	const entries = Object.entries(files);
	const documents = entries.map(async ([filename, file]) => {
		const data = await file();
		const result = get_markdown_file(filename, data, validator);
		return result;
	});

	return Promise.all(documents);
};
