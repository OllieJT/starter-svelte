const currency = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	maximumFractionDigits: 0,
});

const date_time = new Intl.DateTimeFormat('en-US', {});

const list = new Intl.ListFormat('en-US', {});

export const en_us = {
	currency,
	date_time,
	list,
};
