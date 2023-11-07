<script lang="ts">
	import Footer from '$lib/components/layout/Footer.svelte';
	import Navbar from '$lib/components/layout/Navbar.svelte';
</script>

<Navbar />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		margin-top: 40px;
		flex-grow: 1;
	}
</style>
