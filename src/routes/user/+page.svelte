<script lang="ts">
	import Metadata from '$src/components/metadata.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Metadata title="Secondary Page" />

<h1 class="text-lg leading-loose text-black">Nested Page!</h1>
<a class="text-primary-500" href="/">{'<--'} Return to homepage</a>

<br />

<pre class="my-10 border-t border-mono-500/50 py-10">{JSON.stringify(data, null, 4)}</pre>
<br />
