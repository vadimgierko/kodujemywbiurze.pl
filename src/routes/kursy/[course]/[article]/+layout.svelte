<script lang="ts">
	import Aside from '$lib/components/Aside.svelte';
	import Warning from '$lib/components/Warning.svelte';
	import { showOffset, isScreenLessThan992 } from '$lib/stores';

	export let data;

	const { sections, articles } = data;
</script>

<Aside {articles} {sections} />

<main
	style={$showOffset
		? $isScreenLessThan992
			? 'margin-left: 0;	max-width: 100vw;'
			: 'margin-left: 30%;	max-width: calc(100vw - 30%); padding: 0 2em;'
		: 'margin-left: 0;	max-width: 100vw;'}
	on:click={() => ($isScreenLessThan992 && $showOffset ? showOffset.set(false) : null)}
>
	<!-- <Warning /> -->
	<slot />
</main>

<style>
	main {
		box-sizing: border-box;
	}
</style>
