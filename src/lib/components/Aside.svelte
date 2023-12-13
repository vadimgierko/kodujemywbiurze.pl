<script lang="ts">
	import { page } from '$app/stores';
	import type { Article, Section } from '$lib/types';
	import { isScreenLessThan992, showOffset } from '$lib//stores';

	export let sections: Section[] | null;
	export let articles: Article[] | null;

	let titleType: 'fullTitle' | 'docTitle' | 'tutorialTitle' = 'fullTitle';
</script>

<aside class="text-center" id={$isScreenLessThan992 && $showOffset ? 'offset' : 'aside'}>
	<h3>Spis treści</h3>

	<select bind:value={titleType}>
		<option value="fullTitle">pełny tytuł</option>
		<option value="docTitle">dokumentacyjny tytuł</option>
		<option value="tutorialTitle">tutorialowy tytuł</option>
	</select>

	{#if sections}
		<nav on:click={() => ($isScreenLessThan992 && $showOffset ? showOffset.set(false) : null)}>
			{#each sections as { title, articles, fileName }}
				{#if fileName !== 'wprowadzenie' && fileName !== 'koniec'}
					<h3>{title}</h3>
				{/if}
				<ul>
					{#each articles as article}
						<li>
							<a
								href={`/kursy/${$page.params.course}/${article.slug}`}
								class={$page.url.pathname.includes(article.slug) ? 'active-link' : ''}
								>{article[titleType]}</a
							>
						</li>
						<hr />
					{/each}
				</ul>
			{/each}
		</nav>
	{/if}

	{#if articles}
		<nav on:click={() => ($isScreenLessThan992 && $showOffset ? showOffset.set(false) : null)}>
			<ul>
				{#each articles as article}
					<li>
						<a
							href={`/kursy/${$page.params.course}/${article.slug}`}
							class={$page.url.pathname.includes(article.slug) ? 'active-link' : ''}
							>{article[titleType]}</a
						>
					</li>
					<hr />
				{/each}
			</ul>
		</nav>
	{/if}
</aside>

<style scoped>
	.active-link {
		font-weight: bold;
	}

	:global(html[data-theme='light'] .active-link) {
		color: black;
	}

	:global(html[data-theme='dark'] .active-link) {
		color: var(--primary);
	}

	ul {
		list-style: none;
		padding-left: 0;
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
