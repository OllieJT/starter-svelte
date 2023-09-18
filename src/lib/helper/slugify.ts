import { z } from 'zod';

/* eslint-disable  */
export function slugify(text: string) {
	return text
		.toString()
		.normalize()
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w\-]+/g, '') // Remove all non-word chars
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, ''); // Trim - from end of text
}

export const slug_validator = z
	.string()
	.min(3)
	.max(64)
	.superRefine((arg, ctx) => {
		const value = arg.toLowerCase();

		if (value.includes(' ')) {
			ctx.addIssue({
				code: z.ZodIssueCode.invalid_string,
				validation: { includes: 'space' },
				message: 'Slugs cannot include spaces.',
			});
		}

		if (
			value.includes('admin') ||
			value === 'new' ||
			value === 'create' ||
			value === 'edit' ||
			value === 'manage' ||
			value === 'delete'
		) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: `'${arg}' contains a reserved word and cannot be used.`,
			});
		}

		if (!/^[a-zA-Z0-9_-]+$/.test(value)) {
			ctx.addIssue({
				code: 'custom',
				message: `${ctx.path} can only contain letters, numbers, dashes, and underscores.`,
			});
		}
	});
