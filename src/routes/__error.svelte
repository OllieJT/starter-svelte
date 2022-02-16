<script context="module" lang="ts">
	import type { ErrorLoad } from "@sveltejs/kit";

	export const load: ErrorLoad = async function ({ error, status }) {
		return {
			props: { status, error },
		};
	};
</script>

<script lang="ts">
	import Wrapper from "$components/container/Wrapper.svelte";

	export let status: number;
	export let error: Error;
	console.error(error.stack);
</script>

<header>
	<Wrapper constrain gutter>
		<h1>Error {status}</h1>
		<p>{error.message}</p>
	</Wrapper>
</header>

<hr />

<Wrapper constrain gutter>
	<slot><p>Return to <a href="/">homepage</a></p></slot>
</Wrapper>
