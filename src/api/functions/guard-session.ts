import { redirect, type ServerLoad } from '@sveltejs/kit';

export const guard_session = async <PageServerLoad extends ServerLoad>(
	event: Parameters<PageServerLoad>[0],
) => {
	const session = await event.locals.getSession();

	if (!session?.user) throw redirect(302, '/login');
	if (!session.user.is_onboarded) throw redirect(302, '/onboard');

	return session.user;
};
