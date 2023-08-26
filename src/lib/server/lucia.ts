import { dev } from '$app/environment';
import {
	AUTH_GOOGLE_CLIENT_ID,
	AUTH_GOOGLE_CLIENT_SECRET,
	AUTH_REDIRECT_URI,
} from '$env/static/private';
import { prisma } from '$lib/server/prisma';
import { prisma as lucia_adapter } from '@lucia-auth/adapter-prisma';
import { google } from '@lucia-auth/oauth/providers';
import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';

const use_redirect = (pathname: string) => {
	const URI = new URL(AUTH_REDIRECT_URI);
	URI.pathname = pathname;

	return URI.href;
};

export const auth = lucia({
	experimental: {
		debugMode: false,
	},
	adapter: lucia_adapter(prisma, {
		user: 'authUser',
		key: 'authKey',
		session: 'authSession',
	}),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	// origin: []
	getUserAttributes(database_user) {
		return {
			...database_user,
			id: database_user.id,
			email: database_user.email,
		};
	},
});

export type Auth = typeof auth;

export const auth_google = google(auth, {
	clientId: AUTH_GOOGLE_CLIENT_ID,
	clientSecret: AUTH_GOOGLE_CLIENT_SECRET,
	redirectUri: use_redirect('/account/auth/google'),
	// https://developers.google.com/identity/protocols/oauth2/scopes#calendar
	scope: ['email', 'profile'],
});
