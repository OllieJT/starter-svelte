import * as z from 'zod';

export const SessionModel = z.object({
	id: z.string(),
	sessionToken: z.string(),
	userId: z.string(),
	expires: z.date(),
});
