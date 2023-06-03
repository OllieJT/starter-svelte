import { format, formatRelative } from 'date-fns';

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
