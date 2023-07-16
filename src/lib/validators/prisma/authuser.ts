import * as z from 'zod';

export const AuthUserModel = z.object({
	id: z.string(),
	time_created: z.date(),
	time_updated: z.date(),
	name_first: z.string(),
	name_last: z.string().nullish(),
	email: z.string(),
	email_verified: z.boolean(),
});
