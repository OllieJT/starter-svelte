<script context="module" lang="ts">
	export const prerender = true;

	import type { Load } from "@sveltejs/kit";

	export const load: Load = async function ({ params, fetch }) {
		return {
			props: { countryCode: params.id },
			status: 200,
		};
	};
</script>

<script lang="ts">
	import Prose from "$components/container/Prose.svelte";
	import Wrapper from "$components/container/Wrapper.svelte";
	import SvelteSeo from "svelte-seo";

	import { operationStore, query } from "@urql/svelte";
	import { QueryCountryDetail } from "$lib/api/QueryCountry";

	export let countryCode: string | undefined;
	const countryQuery = operationStore(QueryCountryDetail, { countryCode });

	query(countryQuery);

	console.log($countryQuery);

	$: detail = $countryQuery?.data?.country;
</script>

<SvelteSeo title="Homepage" />

<Wrapper constrain gutter>
	<Prose>
		<h1>{detail?.name}</h1>
		<h3>Capital: {detail?.capital}</h3>

		<hr />

		<code><pre>{JSON.stringify(detail, null, 4)}</pre></code>

		<hr />
		<h1>A multi-line demo <br />for Heading 1</h1>
		<h2>A multi-line demo <br />for Heading 2</h2>
		<h3>A multi-line demo <br />for Heading 3</h3>
		<h4>A multi-line demo <br />for Heading 4</h4>
		<h5>A multi-line demo <br />for Heading 5</h5>
		<h6>A multi-line demo <br />for Heading 6</h6>
		<p>
			Far far away, behind the word mountains, far from the countries Vokalia and
			Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
			at the coast of the Semantics, a large language ocean. A small river named Duden
			flows by their place and supplies it with the necessary regelialia.
		</p>
		<p>
			It is a paradisematic country, in which roasted parts of sentences fly into your
			mouth. Even the all-powerful Pointing has no control about the blind texts it is an
			almost unorthographic life One day however a small line of blind text by the name of
			Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her
			not to do so, because there were thousands of bad Commas, wild Question Marks and
			devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven
			versalia, put her initial into the belt and made herself on the way. When she
			reached the first hills of the Italic Mountains, she had a last view back on the
			skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the
			subline of her own road, the Line Lane.
		</p>
		<p>Pityful a rethoric question ran over her cheek, then that was all.</p>
	</Prose>
</Wrapper>
