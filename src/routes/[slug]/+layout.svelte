<script lang="ts">
	import { page } from '$app/stores';
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
					<a href={`/${slug}`} class={$page.url.pathname.includes(slug) ? 'active-link' : ''}
						>{title}</a
					>
				</li>
				<hr />
			{/each}
		</ul>
	</nav>
</aside>

<main
	class="container"
	on:click={() => ($isScreenLessThan992 && $showOffset ? hideOffset() : null)}
>
	<slot />
</main>

<style>
	.active-link {
		font-weight: bold;
	}

	:global(html[data-theme='light'] .active-link) {
		color: black;
	}

	:global(html[data-theme='dark'] .active-link) {
		color: yellow;
	}

	ul {
		list-style: none;
		padding-left: 0;
		text-align: center;
	}

	aside {
		box-sizing: border-box;
		font-size: smaller;
		height: calc(100% - 40px);
		padding: 0 2em;
	}

	aside a {
		text-decoration: none;
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
			padding: 0 2em;
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
	}
</style>
