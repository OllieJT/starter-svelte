import { resolvePath } from '@sveltejs/kit';

const path_map = {
	home: '/',
	page: '/[slug]',
	detail: '/detail/[id]',
} as const;

type PATH_MAP = typeof path_map;
type PATH_NAME = keyof PATH_MAP;

type RouteParamsType = {
	'/': Record<string, never>;
	'/[slug]': { slug: string };
	'/detail/[id]': { id: string };
};

type RouteParams<T extends PATH_NAME> = RouteParamsType[PATH_MAP[T]];

export function use_path<T extends PATH_NAME>(path: T, params: RouteParams<T>) {
	return resolvePath(path, params);
}
