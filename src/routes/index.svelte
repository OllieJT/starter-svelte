<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";

	export const load: Load = async function () {
		return {
			props: { demoData: [{ hello: "world" }] },
			status: 200,
		};
	};
</script>

<script lang="ts">
	import Prose from "$components/container/Prose.svelte";
	import Wrapper from "$components/container/Wrapper.svelte";
	import SvelteSeo from "svelte-seo";

	export let demoData: any;
</script>

<SvelteSeo title="Homepage" />

<Wrapper constrain gutter>
	<Prose>
		<h1>A multi-line demo <br />for Heading 1</h1>

		<hr />

		<code>
			<pre>{JSON.stringify(demoData, null, 2)}</pre>
		</code>
	</Prose>
</Wrapper>
