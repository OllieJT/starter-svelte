<script lang="ts">
	import Metadata from '$src/components/metadata.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<Metadata title="Homepage" />

<h1 class="text-lg leading-loose text-black">Hello World</h1>
<a class="text-primary-500" href="/nested-page">Go to nested page -></a>
<a class="text-primary-500" href="/form">Go to form demo -></a>

<ul>
	{#each data.articles as article}
		<li>
			<a href="/{article.slug}" class="font-medium text-purple-700 hover:underline">
				{article.metadata.title}
			</a>
		</li>
	{/each}
</ul>

<pre class="my-10 border-t border-mono-500/50 py-10">{JSON.stringify(data, null, 4)}</pre>
