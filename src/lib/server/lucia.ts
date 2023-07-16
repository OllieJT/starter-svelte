import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import { prisma } from '$src/lib/server/prisma';
import licia_adapter from '@lucia-auth/adapter-prisma';
import { google } from '@lucia-auth/oauth/providers';
import lucia from 'lucia-auth';
import { sveltekit } from 'lucia-auth/middleware';
import { z } from 'zod';

const { AUTH_GOOGLE_CLIENT_ID, AUTH_GOOGLE_CLIENT_SECRET, AUTH_REDIRECT_URI } = z
	.object({
		AUTH_GOOGLE_CLIENT_ID: z.string(),
		AUTH_GOOGLE_CLIENT_SECRET: z.string(),
		AUTH_REDIRECT_URI: z.string(),
	})
	.parse(env);

const use_redirect = (pathname: string) => {
	const URI = new URL(AUTH_REDIRECT_URI);
	URI.pathname = pathname;

	return URI.href;
};

export const auth = lucia({
	experimental: {
		debugMode: false,
	},
	adapter: licia_adapter(prisma),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	// origin: []
	transformDatabaseUser(database_user) {
		return {
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
