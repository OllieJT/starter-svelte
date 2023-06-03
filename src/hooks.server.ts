import { env } from '$env/dynamic/private';
import { PrismaAdapter } from '$src/api/prisma/adapter-authjs';
import { prisma } from '$src/api/prisma/client';
import ProviderDiscord from '@auth/core/providers/discord';
import ProviderPatreon from '@auth/core/providers/patreon';
import { SvelteKitAuth } from '@auth/sveltekit';
import type { Handle } from '@sveltejs/kit';

export const handle = SvelteKitAuth({
	// debug: true,
	callbacks: {
		session: async ({ session, user }) => {
			if (session.user) {
				session.user.id = user.id;
				session.user.has_onboarded = user.is_onboarded;
				session.user.name = user.name;
				session.user.avatar = user.avatar;
			}

			return session;
		},
	},
	theme: {
		colorScheme: 'dark',
	},
	providers: [
		// @ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
		ProviderPatreon({
			clientId: env.AUTH_PATREON_ID || '',
			clientSecret: env.AUTH_PATREON_SECRET || '',
		}),
		// @ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
		ProviderDiscord({
			clientId: env.AUTH_DISCORD_ID || '',
			clientSecret: env.AUTH_DISCORD_SECRET || '',
		}),
	],

	adapter: PrismaAdapter(prisma),
}) satisfies Handle;
