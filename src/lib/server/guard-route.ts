import type { UserRole } from '@prisma/client';
import { error } from '@sveltejs/kit';
import type { User } from 'lucia';

const is_restricted = (
	roles: UserRole[] | null | undefined,
): roles is Exclude<UserRole, null>[] => {
	return Boolean(roles && roles.length);
};

const is_unrestricted = (roles: UserRole[] | null | undefined) => {
	return roles === null || roles === undefined || roles.length === 0;
};

// Overload signatures
export async function guard_route(
	event: { locals: App.Locals; url: URL },
	access?: null,
): Promise<{ user: User; sessionId: string } | { user: null; sessionId: null }>;

export async function guard_route(
	event: { locals: App.Locals; url: URL },
	access: UserRole[],
): Promise<{ user: User; sessionId: string }>;

// Implementation

export async function guard_route(
	event: { locals: App.Locals; url: URL },
	access?: UserRole[] | null,
) {
	const auth = await event.locals.auth.validate();

	if (!!access && access.length === 0) {
		throw error(500, 'Invalid access role declaration');
	}

	if (is_restricted(access)) {
		if (auth && access.includes(auth.user.role)) {
			return { user: auth.user, sessionId: auth.sessionId };
		} else {
			throw error(403, 'Forbidden');
		}
	}

	if (is_unrestricted(access)) {
		if (auth) {
			return { user: auth.user, sessionId: auth.sessionId };
		} else {
			return { user: null, sessionId: null };
		}
	}

	throw error(401, 'Unauthorized');
}
