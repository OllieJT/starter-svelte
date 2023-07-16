import * as z from 'zod';

export const AuthSessionModel = z.object({
	id: z.string(),
	active_expires: z.bigint(),
	idle_expires: z.bigint(),
	user_id: z.string(),
});
