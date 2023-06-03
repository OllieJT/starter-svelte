import * as z from 'zod';

export const UserModel = z.object({
	id: z.string(),
	is_onboarded: z.boolean(),
	created_at: z.date(),
	updated_at: z.date(),
	email: z.string(),
	emailVerified: z.date().nullish(),
	name: z.string().nullish(),
	avatar: z.string().nullish(),
});
