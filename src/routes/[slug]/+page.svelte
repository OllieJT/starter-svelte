<script lang="ts">
	// import { page } from '$app/stores';
	import { SITE } from '$src/lib/constants';
	import { MetaTags } from 'svelte-meta-tags';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<MetaTags
	title="Hello World"
	titleTemplate={SITE.titleTemplate}
	openGraph={{
		...SITE.openGraph,
		title: 'Hello World',
	}}
/>

<h1 class="text-lg leading-loose text-black">Nested Page!</h1>
<a class="text-primary-500" href="/">{'<--'} Return to homepage</a>

<br />

<pre class="my-10 border-t border-mono-500/50 py-10">{JSON.stringify(data, null, 4)}</pre>
