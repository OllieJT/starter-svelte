import * as z from 'zod';

export const AccountModel = z.object({
	id: z.string(),
	userId: z.string(),
	type: z.string(),
	provider: z.string(),
	providerAccountId: z.string(),
	refresh_token: z.string().nullish(),
	access_token: z.string().nullish(),
	expires_at: z.number().int().nullish(),
	token_type: z.string().nullish(),
	scope: z.string().nullish(),
	id_token: z.string().nullish(),
	session_state: z.string().nullish(),
	expires_in: z.number().int().nullish(),
	version: z.string().nullish(),
});
