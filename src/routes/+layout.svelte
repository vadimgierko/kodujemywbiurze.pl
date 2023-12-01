<script lang="ts">
	import '../custom-framework.css';
	import '../app.css';
	import Footer from '$lib/layout/Footer.svelte';
	import Navbar from '$lib/layout/Navbar.svelte';
	import { isScreenLessThan992 } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		// set isScreenLessThan992 & update on resize:

		if (window.innerWidth < 992) {
			isScreenLessThan992.set(true);
		} else {
			isScreenLessThan992.set(false);
		}

		window.addEventListener('resize', () => {
			if (window.innerWidth < 992) {
				isScreenLessThan992.set(true);
			} else {
				isScreenLessThan992.set(false);
			}
		});
	});
</script>

<Navbar />

<div>
	<slot />
</div>

<Footer />

<style>
	div {
		margin-top: 40px;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}
</style>
