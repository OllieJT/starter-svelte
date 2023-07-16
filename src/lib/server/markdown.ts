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
	markedSmartypants(),
	gfmHeadingId(),
	mangle(),
	markedHighlight({
		langPrefix: 'hljs language-',
		highlight(code, lang) {
			const language = hljs.getLanguage(lang) ? lang : 'plaintext';
			return hljs.highlight(code, { language }).value;
		},
	}),
);

export const get_markdown_file = async <T>(
	filename: string,
	file: string,
	validator: (values: { [key: string]: unknown }) => T,
) => {
	const markdown = matter(file);
	const metadata = validator(markdown.data);
	const content = marked.parse(markdown.content);
	const slug = filename.replace(/\.md$/, '');

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
