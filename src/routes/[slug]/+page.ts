import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, url }) => {
	return { params, searchParams: [...url.searchParams] };
};
