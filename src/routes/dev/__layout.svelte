<script lang="ts">
	import RichText from "$lib/RichText.svelte";
</script>

<style lang="scss" global>
	:global(section) {
		margin: 4rem auto;
	}
</style>

<RichText constrain>
	<slot />
</RichText>
