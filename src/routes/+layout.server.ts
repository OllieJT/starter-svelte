import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const auth = await event.locals.auth.validate();

	return { user: auth?.user };
};
