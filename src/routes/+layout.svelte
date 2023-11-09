<script lang="ts">
	import Footer from '$lib/components/layout/Footer.svelte';
	import Navbar from '$lib/components/layout/Navbar.svelte';

	export let data;

	const { articles } = data;
</script>

<Navbar />

<div id="container">
	<aside>
		<h3 style="text-align: center;">Spis treści</h3>
		<nav>
			<ul>
				{#each articles as { title, slug }}
					<li>
						<a href={`/${slug}`}>{title}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</aside>
	<main>
		<slot />
	</main>
</div>

<Footer />

<style>
	#container {
		margin-top: 40px;
	}

	/* Styles for screens with a minimum width of 992px (typical laptop) */
	@media screen and (min-width: 992px) {
		/* Your laptop-specific CSS styles here */
		aside {
			height: calc(100% - 40px);
			width: 30%;
			margin-top: 40px;
			position: fixed;
			z-index: 1;
			top: 0;
			left: 0;
			overflow-x: hidden;
		}

		main {
			/* margin-top: 40px; */
			margin-left: 30%; /* Same as the width of the sidenav */
			padding: 0 1em;
		}
	}

	/* Styles for screens with a maximum width of 991px (typical mobile) */
	@media screen and (max-width: 991px) {
		/* Your mobile-specific CSS styles here */
		aside {
			display: none;
		}

		main {
			width: auto;
			margin-left: 1em;
			margin-right: 1em;
		}
	}
</style>
