<script lang="ts">
	import Aside from '$lib/components/Aside.svelte';
	import { showOffset, isScreenLessThan992 } from '$lib/stores';

	export let data;

	const { articles } = data;
</script>

<Aside {articles} />

<main
	class="container"
	on:click={() => ($isScreenLessThan992 && $showOffset ? showOffset.set(false) : null)}
>
	<slot />
</main>

<style>
	@media only screen and (min-width: 992px) {
		main {
			box-sizing: border-box;
			margin-left: 30%; /* Same as the width of the sidenav */
			padding: 0 2em;
			max-width: calc(100vw - 30%);
		}
	}
</style>
