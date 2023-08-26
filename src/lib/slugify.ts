import { z } from 'zod';

/* eslint-disable  */
export function slugify(text: string) {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w\-]+/g, '') // Remove all non-word chars
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, ''); // Trim - from end of text
}

export const slug_validator = z.string().superRefine((value, ctx) => {
	if (value.includes(' ')) {
		ctx.addIssue({
			code: z.ZodIssueCode.invalid_string,
			validation: { includes: 'space' },
			message: 'Slugs cannot include spaces',
		});
	}

	if (value.includes('admin')) {
		ctx.addIssue({
			code: z.ZodIssueCode.invalid_string,
			validation: { includes: 'admin' },
			message: 'Slugs cannot include "admin"',
		});
	}

	if (
		value === 'new' ||
		value === 'create' ||
		value === 'edit' ||
		value === 'manage' ||
		value === 'delete'
	) {
		ctx.addIssue({
			code: z.ZodIssueCode.invalid_string,
			validation: { includes: 'reserved' },
			message: `${value} is a reserved word and cannot be used as a slug`,
		});
	}
});
