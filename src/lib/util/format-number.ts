function rounded(value: number, precision: number = 2) {
	return (Math.round(value * 100) / 100).toFixed(precision);
}

export const formatNumber = {
	rounded,
};
