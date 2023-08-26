import { error, redirect } from '@sveltejs/kit';
import type { User } from 'lucia';

export const guard_route = async (
	{
		locals,
		url,
	}: {
		locals: App.Locals;
		url: URL;
	},
	authorize: (user: User) => string | null = () => null,
) => {
	const auth = await locals.auth.validate();

	console.log('guarding: ', url);

	if (!auth?.user) {
		console.warn('User is not logged in');
		throw redirect(302, '/');
	}

	const custom_error = authorize(auth?.user);
	if (custom_error) {
		console.warn('User is not allowed to access this page (custom)');
		throw error(403, custom_error);
	}

	return { user: auth.user };
};
