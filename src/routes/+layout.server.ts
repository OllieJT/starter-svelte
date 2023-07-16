import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const { user } = await event.locals.auth.validateUser();

	return { user };
};
