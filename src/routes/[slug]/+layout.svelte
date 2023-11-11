<script lang="ts">
	import { showOffset, isScreenLessThan992 } from '$lib/stores';

	export let data;

	const { articles } = data;

	function hideOffset() {
		showOffset.set(false);
	}
</script>

<aside
	id={$isScreenLessThan992 && $showOffset ? 'offset' : 'aside'}
	on:click={() => ($isScreenLessThan992 && $showOffset ? hideOffset() : null)}
>
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

<main on:click={() => ($isScreenLessThan992 && $showOffset ? hideOffset() : null)}>
	<slot />
</main>

<style>
	aside {
		font-size: smaller;
		height: calc(100% - 40px);
	}
	/* Styles for screens with a minimum width of 992px (typical laptop) */
	@media screen and (min-width: 992px) {
		/* Your laptop-specific CSS styles here */
		#aside {
			width: 30%;
			margin-top: 40px;
			position: fixed;
			z-index: 1;
			top: 0;
			left: 0;
			overflow-x: hidden;
		}

		#offset {
			display: none;
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
		#aside {
			display: none;
		}

		#offset {
			width: 50%;
			margin-top: 40px;
			position: fixed;
			z-index: 1;
			top: 0;
			left: 0;
			overflow-x: hidden;
		}

		main {
			width: auto;
			margin-left: 1em;
			margin-right: 1em;
		}
	}
</style>
