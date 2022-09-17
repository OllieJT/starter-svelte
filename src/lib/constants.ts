import { dev } from '$app/environment';
import type { OpenGraph } from 'svelte-meta-tags';

//TODO: Replace default openGraph data
const openGraph: OpenGraph = {
	type: 'website',
	locale: 'en_GB',
	site_name: 'Craft Coop',
};

//TODO: Replace URL
export const SITE = {
	name_long: 'Some long website title.',
	name_short: 'Short Title',
	description: 'Some fallback description for the website.',
	title: 'Site Name',
	titleTemplate: '%s | Site Name',
	openGraph,

	color_fg: '#fb923c',
	color_bg: '#6b21a8',

	url: dev ? 'http://127.0.0.1:5173/' : 'https://inqling.studio',

	twitter_username: 'username',
	twitter_id: '1234567890',
};
