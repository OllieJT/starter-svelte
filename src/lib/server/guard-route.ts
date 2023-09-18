import type { UserRole } from '@prisma/client';
import { error, redirect } from '@sveltejs/kit';
import type { User } from 'lucia';

const access_level = {
	NONE: null,
	USER: ['User', 'Admin'],
	ADMIN: ['Admin'],
} satisfies Record<string, UserRole[] | null>;

export type AccessLevel = keyof typeof access_level;

export async function guard_route(auth: App.Locals['auth'], access: AccessLevel = 'NONE') {
	const roles = access_level[access];

	const session = await auth.validate();

	if (!session?.user) throw redirect(302, '/login');

	if (roles?.length) {
		// @ts-expect-error - typescript is dumb sometimes
		const has_role = roles.includes(session.user.role);
		if (!has_role) throw error(403, 'Forbidden');
	}

	return session;
}

export function guard_game_series(user: User, developer: { user_id: string | null }) {
	if (user.role === 'Admin') return true;
	else if (developer.user_id === user.id) return true;
	else throw error(403, 'You are not authorized to manage this developer');
}

export function guard_developer(user: User, developer: { user_id: string | null }) {
	if (user.role === 'Admin') return true;
	else if (developer.user_id === user.id) return true;
	else throw error(403, 'You are not authorized to manage this developer');
}
