import * as z from 'zod';

export const AuthKeyModel = z.object({
	id: z.string(),
	primary_key: z.boolean(),
	hashed_password: z.string().nullish(),
	expires: z.bigint().nullish(),
	user_id: z.string(),
});
