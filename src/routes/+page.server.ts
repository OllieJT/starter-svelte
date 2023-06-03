import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, url }) => {
	return { params, searchParams: [...url.searchParams] };
};
