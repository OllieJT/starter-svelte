import { content } from '$src/content/content';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const articles = await content.articles.find_by_slug(event.params.slug);
	const article = articles[0];
	console.log('article', article);

	if (!article) {
		throw error(404, 'Article not found');
	}

	return {
		searchParams: [...event.url.searchParams],
		article,
	};
};
