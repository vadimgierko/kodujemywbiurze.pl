<script lang="ts">
	import Aside from '$lib/components/Aside.svelte';
	import Warning from '$lib/components/Warning.svelte';
	import { showOffset, isScreenLessThan992 } from '$lib/stores';

	export let data;

	const { sections } = data;
</script>

<Aside {sections} />

<main
	class="container"
	on:click={() => ($isScreenLessThan992 && $showOffset ? showOffset.set(false) : null)}
>
	<Warning />
	<slot />
</main>

<style>
	/* Styles for screens with a minimum width of 992px (typical laptop) */
	@media screen and (min-width: 992px) {
		/* Your laptop-specific CSS styles here */
		main {
			box-sizing: border-box;
			/* margin-top: 40px; */
			margin-left: 30%; /* Same as the width of the sidenav */
			padding: 0 2em;
			max-width: calc(100vw - 30%);
		}
	}
</style>
