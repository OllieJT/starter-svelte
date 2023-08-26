<script lang="ts">
	import { page } from '$app/stores';
	import { MetaTags, type OpenGraph } from 'svelte-meta-tags';

	export let title: string;
	export let description: string | undefined = undefined;
	export let canonical: string = $page?.url?.href;
	export let profile: OpenGraph['profile'] | undefined = undefined;
	export let images: OpenGraph['images'] | undefined = undefined;

	/* TODO: Set site metadata */

	$: openGraph = {
		locale: 'en_GB', // en_US
		siteName: 'TODO',
		type: 'website',
		url: canonical,
		title: title,
		description: description!,
		profile: profile!,
		images: images!,
	} satisfies OpenGraph;
</script>

<MetaTags
	titleTemplate="%s | {openGraph.siteName}"
	title={openGraph.title}
	description={openGraph.description}
	{canonical}
	{openGraph}
/>
