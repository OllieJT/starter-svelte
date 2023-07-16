import type { Adapter, AdapterAccount } from '@auth/sveltekit/node_modules/@auth/core/adapters';
import type { Account, Prisma, PrismaClient } from '@prisma/client';
import { error } from '@sveltejs/kit';
import { z } from 'zod';

const provider_type = z.union([
	z.literal('oidc'),
	z.literal('oauth'),
	z.literal('email'),
	// z.literal('credentials'),
]);

function accountToAdapterAccount(account: Account) {
	const adapter_account = {
		...account,
		type: provider_type.parse(account.type),
		access_token: account.access_token || '',
		id_token: account.id_token || '',
		expires_in: account.expires_at || 1,
		refresh_token: account.refresh_token || '',
		scope: account.scope || '',
		token_type: account.token_type || '',
	} satisfies AdapterAccount;

	return adapter_account;
}

export const PrismaAdapter = (prisma: PrismaClient): Adapter => ({
	createUser: async (data) => {
		console.info(`🔐 :: createUser(...)`);
		console.info(JSON.stringify(data));

		const res = await prisma.user.upsert({
			where: { email: data.email },
			create: {
				email: data.email,
				emailVerified: data.emailVerified,
				name: data.name || null,
				avatar: data.image || null,
			},
			update: {
				avatar: data.image || null,
			},
		});

		return res;
	},
	getUser: async (id) => {
		console.info(`🔐 :: getUser(...)`);
		const res = await prisma.user.findUnique({ where: { id } });

		return res;
	},
	getUserByEmail: async (email) => {
		console.info(`🔐 :: getUserByEmail(${JSON.stringify(email)})`);
		const res = await prisma.user.findUnique({ where: { email } });

		return res;
	},
	getUserByAccount: async (provider_providerAccountId) => {
		console.info(`🔐 :: getUserByAccount(...)`);
		const res = await prisma.account.findUnique({
			where: { provider_providerAccountId },
			select: { user: true },
		});

		return res?.user || null;
	},
	updateUser: async ({ id, ...data }) => {
		console.info(`🔐 :: updateUser(...)`);

		if (!id) throw error(500, { message: 'id is required' });

		const res = await prisma.user.update({ where: { id }, data });

		return res;
	},
	deleteUser: async (id) => {
		console.info(`🔐 :: deleteUser(...)`);
		const res = await prisma.user.delete({ where: { id } });

		return res;
	},
	linkAccount: async (data) => {
		/* const fixed_data = {
			...data,
			expires_at: data.expires_in,
		}; */
		console.info(`🔐 :: linkAccount(...)`, JSON.stringify(data));

		const res = await prisma.account.create({
			data: {
				userId: data.userId,
				type: data.type,
				provider: data.provider,
				providerAccountId: data.providerAccountId,
				refresh_token: data.refresh_token || null,
				access_token: data.access_token || null,
				expires_at: data.expires_at ? parseInt(data.expires_at.toString()) : null,
				token_type: data.token_type || null,
				scope: data.scope || null,
				id_token: data.id_token || null,
				session_state: data.session_state ? data.session_state.toString() : null,

				expires_in: data.expires_in || null,
				version: data.version ? data.version.toString() : null,
			},
		});
		const db_account = accountToAdapterAccount(res);

		return db_account;
	},
	unlinkAccount: async (provider_providerAccountId) => {
		console.info(`🔐 :: unlinkAccount(...)`);
		const res = await prisma.account.delete({
			where: { provider_providerAccountId },
		});
		const db_account = accountToAdapterAccount(res);

		return db_account;
	},
	getSessionAndUser: async (sessionToken) => {
		console.info(`🔐 :: getSessionAndUser(...)`);
		const res = await prisma.session.findUnique({
			where: { sessionToken },
			include: { user: true },
		});

		if (!res?.user) return null;

		const { user: res_user, ...session } = res;

		return { user: res_user, session };
	},
	createSession: async (data) => {
		console.info(`🔐 :: createSession(...)`);
		const res = await prisma.session.create({ data });

		return res;
	},
	updateSession: async (data) => {
		console.info(`🔐 :: updateSession(...)`);
		const res = await prisma.session.update({
			where: { sessionToken: data.sessionToken },
			data,
		});

		return res;
	},
	deleteSession: async (sessionToken) => {
		console.info(`🔐 :: deleteSession(...)`);
		const res = await prisma.session.delete({ where: { sessionToken } });

		return res;
	},
	createVerificationToken: async (data) => {
		console.info(`🔐 :: createVerificationToken(...)`);
		const res = await prisma.verificationToken.create({ data });
		// @ts-expect-errors // MongoDB needs an ID, but we don't
		if (res.id) delete verificationToken.id;
		return res;
	},
	useVerificationToken: async (identifier_token) => {
		console.info(`🔐 :: useVerificationToken(...)`);
		try {
			const res = await prisma.verificationToken.delete({
				where: { identifier_token },
			});
			// @ts-expect-errors // MongoDB needs an ID, but we don't
			if (res.id) delete verificationToken.id;
			return res;
		} catch (error) {
			// If token already used/deleted, just return null
			// https://www.prisma.io/docs/reference/api-reference/error-reference#p2025
			if ((error as Prisma.PrismaClientKnownRequestError).code === 'P2025') return null;
			throw error;
		}
	},
});
