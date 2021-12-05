<script lang="ts">
	import type { IconName } from "@fortawesome/fontawesome-common-types";

	type IconSet = "brands" | "regular" | "solid";

	export let set: IconSet = "solid";
	export let name: IconName;

	// export let isLogo: boolean = false;
	// export let style: IconStyle | undefined = undefined;
	// const iconStyle = style ?? isLogo ? "fab" : "fas";
</script>

<style lang="scss">
	svg {
		font-size: inherit;
		color: inherit;
		width: 1em;
		height: 1em;
		line-height: 1em;
		:global(*) {
			fill: currentColor;
		}
	}
</style>

<svg>
	<use xlink:href="icons/{set}.svg#{name}" />
</svg>
