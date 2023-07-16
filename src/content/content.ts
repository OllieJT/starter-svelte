import { get_markdown_files } from '$src/lib/server/markdown';
import { z } from 'zod';

const Metadata = z.object({
	title: z.string(),
	date: z.string().transform((x) => new Date(x)),
	description: z.string(),
});

const get_articles = async (slug?: string) => {
	const files = import.meta.glob(`./articles/*.md`, { as: 'raw' });
	const articles = await get_markdown_files(files, Metadata.parse);

	if (slug) {
		const found = articles.filter((a) => a.slug === slug);
		console.info(`💠 Found ${found.length} articles matching slug "${slug}"`);
		return found;
	}

	// sort articles by metadata.date
	articles.sort((a, b) => {
		return b.metadata.date.getTime() - a.metadata.date.getTime();
	});

	console.info(`💠 Loaded ${articles.length} articles`);
	console.info(articles.map((a) => a.slug));

	return articles;
};

export const content = {
	articles: {
		all: async () => await get_articles(),
		find_by_slug: async (slug: string) => await get_articles(slug),
	},
};
