import type { Page } from '@sveltejs/kit';

export const href_is_external = (href: string) => !href.startsWith('/');

export const href_is_current = (href: string, $page: Page) => {
	if (href_is_external(href)) return false;
	if (href === '/') return $page.url.pathname === '/';
	return $page.url.pathname.startsWith(href);
};
