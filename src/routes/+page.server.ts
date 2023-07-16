import { content } from '$src/content/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const articles = await content.articles.all();
	return { articles };
};
