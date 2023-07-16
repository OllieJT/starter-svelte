export function filter_nullish_list<T>(items: T[]) {
	return items.filter(Boolean) as Exclude<T, null | undefined | boolean | 0>[];
}
