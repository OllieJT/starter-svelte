<script context="module" lang="ts">
	import { client } from "$lib/api/client";
	import { QueryCountryList } from "$lib/api/QueryCountry";
	import type { Load } from "@sveltejs/kit";

	export const load: Load = async function () {
		const data = await client.query(QueryCountryList).toPromise();

		if (data.error) {
			console.log({
				name: data.error.name,
				message: data.error.message,
				stack: data.error.stack,
				networkError: data.error.networkError,
				graphQLErrors: data.error.graphQLErrors,
			});
			return {
				status: 400,
				error: data.error.networkError,
			};
		}

		return {
			props: { demoData: data.data },
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

		<ul>
			{#each demoData.countries as country}
				<li>
					<a href="/country/{country.code}">{country.name}</a>
				</li>
			{/each}
		</ul>
	</Prose>
</Wrapper>

<pre>
	{JSON.stringify(demoData, null, 2)}
</pre>
