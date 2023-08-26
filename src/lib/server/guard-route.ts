import type { UserRole } from '@prisma/client';
import { error } from '@sveltejs/kit';
import type { User } from 'lucia';

type AllowedRoles = UserRole[] | null;

const is_restricted = (roles: AllowedRoles): roles is UserRole[] => {
	return Boolean(roles && roles.length);
};

const is_unrestricted = (roles: AllowedRoles): roles is null => {
	return roles === null;
};

// Overload signatures
export async function guard_route(
	event: { locals: App.Locals; url: URL },
	access: null,
): Promise<{ user: User; sessionId: string } | { user: null; sessionId: null }>;

export async function guard_route(
	event: { locals: App.Locals; url: URL },
	access: UserRole[],
): Promise<{ user: User; sessionId: string }>;

// Implementation

export async function guard_route(
	event: { locals: App.Locals; url: URL },
	access: AllowedRoles = null,
) {
	const auth = await event.locals.auth.validate();

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
