import { format, formatRelative } from 'date-fns';

/* eslint-disable  */
export function asSlug(text: string): string {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w\-]+/g, '') // Remove all non-word chars
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, ''); // Trim - from end of text
}

export const asDate = (d: Date | string) => {
	const date = new Date(d);

	return {
		long: () => format(date, 'do MMMM yyyy'),
		shortDay: () => format(date, 'do MMMM'),
		shortMonth: () => format(date, 'MMMM yyyy'),
		shortTime: () => format(date, 'do MMM, h:mm aaa'),
		longTime: () => format(date, 'do MMMM, h:mm aaa'),
		relative: (compareDate: Date) => formatRelative(date, compareDate, { weekStartsOn: 1 }),
		html: () => format(date, 'yyyy-MM-dd'),
	};
};

export function asWholeNumber(value: number | string, precision: number = 2) {
	if (typeof value === 'string') {
		value = parseFloat(value);
	}
	return (Math.round(value * 100) / 100).toFixed(precision);
}
