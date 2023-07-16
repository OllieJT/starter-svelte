import { guard_route } from '$src/lib/server/guard-route';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { user } = await guard_route(event);

	return {
		searchParams: [...event.url.searchParams],
		user,
	};
};
