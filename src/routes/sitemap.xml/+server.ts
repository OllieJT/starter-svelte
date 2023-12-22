import { WEBSITE_URL } from '$src/lib/constants';
import { date_to_html_date } from '$src/lib/functions/format-date';
import type { RequestHandler } from './$types';

function join_sitemap(entry: string[]) {
	const children = entry.join('\n\t');
	return /** XML */ `<?xml version="1.0" encoding="UTF-8" ?><urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="https://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="https://www.w3.org/1999/xhtml" xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="https://www.google.com/schemas/sitemap-image/1.1" xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">\n${children}\n</urlset>`;
}

function create_entry({
	change_frequency,
	date_updated,
	priority,
	pathname,
}: {
	pathname: string;
	date_updated: Date;
	change_frequency: 'daily' | 'weekly' | 'monthly';
	priority: '0.1' | '0.2' | '0.3' | '0.4' | '0.5' | '0.6' | '0.7' | '0.8' | '0.9' | '1.0';
}) {
	const url = new URL(pathname, WEBSITE_URL);
	const lastmod = date_to_html_date(date_updated);
	return /** XML */ `<url><loc>${url.href}</loc><lastmod>${lastmod}</lastmod><changefreq>${change_frequency}</changefreq><priority>${priority}</priority></url>`;
}

export const GET: RequestHandler = async () => {
	const entries = [
		create_entry({
			pathname: '/',
			date_updated: new Date('2023-12-16'),
			change_frequency: 'weekly',
			priority: '1.0',
		}),
	];
	const sitemap = join_sitemap(entries);
	const response = new Response(sitemap);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
};
