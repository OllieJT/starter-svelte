export function format_follower_count(value: number) {
	if (value < 1000) return value;
	if (value < 100000) return `${(value / 1000).toFixed(1)}k`;
	if (value < 1000000) return `${(value / 1000).toFixed(0)}k`;
	return `${(value / 1000000).toFixed(1)}m`;
}
