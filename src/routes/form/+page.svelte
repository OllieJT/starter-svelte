<script lang="ts">
	import DebugForm from '$src/components/debug-form.svelte';
	import Metadata from '$src/components/metadata.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';

	export let data: PageData;

	const { form, constraints, allErrors } = superForm(data.form);
</script>

<Metadata title="Secondary Page" />

<h1 class="text-lg leading-loose text-black">Nested Page!</h1>
<a class="text-primary-500" href="/">{'<--'} Return to homepage</a>

<br />

<DebugForm data={$form} />
<form method="POST">
	<input type="text" bind:value={$form.value} {...$constraints.value} />
	<button type="submit">Submit</button>
</form>

<pre>{JSON.stringify(allErrors, null, 3)}</pre>

<br />

<pre class="my-10 border-t border-mono-500/50 py-10">{JSON.stringify(data, null, 4)}</pre>
