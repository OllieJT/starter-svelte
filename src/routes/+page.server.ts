import { content } from '$src/content/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const articles = content.articles.all();
	console.log(articles[0]?.slug);
	return {};
};
