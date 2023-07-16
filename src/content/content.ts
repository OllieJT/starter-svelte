import { get_markdown_files } from '$src/lib/server/markdown';
import { z } from 'zod';

const Metadata = z.object({
	title: z.string(),
	date: z.string().transform((x) => new Date(x)),
	description: z.string(),
});

const get_articles = async () => {
	const files = import.meta.glob('./articles/*.md', { as: 'raw' });
	const articles = await get_markdown_files(files, Metadata.parse);

	// sort articles by metadata.date
	articles.sort((a, b) => {
		return b.metadata.date.getTime() - a.metadata.date.getTime();
	});

	console.info(`💠 Loaded ${articles.length} articles`);

	return articles;
};

async function use() {
	let articles = await get_articles();

	return {
		articles: {
			all: () => articles,
			find: (slug: string) => {
				return articles.find((article) => article.slug === slug);
			},
			refresh: async () => {
				articles = await get_articles();
			},
		},
	};
}

export const content = await use();
