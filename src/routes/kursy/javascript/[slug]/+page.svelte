<script lang="ts">
	import { page } from '$app/stores';
	import PrevNextArticle from '$lib/components/PrevNextArticle.svelte';
	import { marked } from 'marked';
	import { isIndexPage } from '$lib/stores';
	import { onMount, afterUpdate } from 'svelte';
	import type { Article } from '$lib/types/index.js';

	//========================== CODE HIGHLIGHTING =======================//
	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';

	hljs.registerLanguage('javascript', javascript);

	// Function to dynamically load dark/light CSS based on the theme
	function loadHighlightTheme() {
		const theme = document.documentElement.getAttribute('data-theme');
		const link = document.createElement('link');
		link.rel = 'stylesheet';

		if (theme === 'dark') {
			link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/vs2015.css';
		} else {
			link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/vs.css';
		}

		// Remove any existing highlight.js styles
		const existingStyles = document.querySelectorAll(
			'link[href*="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/"]'
		);
		existingStyles.forEach((style) => style.remove());

		document.head.appendChild(link);
	}
	//========================== CODE HIGHLIGHTING: END =======================//

	export let data;

	const { sections } = data;

	const articles = sections.reduce((all, s) => [...all, ...s.articles], [] as Article[]);

	$: article = articles.find((a) => a.slug === $page.params.slug);
	$: articleIndex = articles.findIndex((a) => a.slug === $page.params.slug);
	$: prevArticleSlug = articleIndex > 0 ? articles[articleIndex - 1].slug : null;
	$: nextArticleSlug =
		articleIndex !== articles.length - 1 ? articles[articleIndex + 1].slug : null;

	onMount(() => {
		isIndexPage.set(false);

		//========================== CODE HIGHLIGHTING =======================//
		loadHighlightTheme();

		// Observer to watch for changes in data-theme attribute
		const observer = new MutationObserver((mutationsList) => {
			for (let mutation of mutationsList) {
				if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
					loadHighlightTheme();
				}
			}
		});

		// Start observing changes in the data-theme attribute
		observer.observe(document.documentElement, { attributes: true });

		//========================== CODE HIGHLIGHTING: END =======================//
	});

	// Initialize highlighting:
	afterUpdate(() => {
		document.querySelectorAll('code').forEach((block) => {
			hljs.highlightElement(block);
		});
	});
</script>

<svelte:head>
	<title>Kodujemy w biurze | {article?.title}</title>
	<meta name="description" content="" />
</svelte:head>

{#if article}
	<PrevNextArticle
		prevSlug={prevArticleSlug ? `kursy/javascript/${prevArticleSlug}` : null}
		nextSlug={nextArticleSlug ? `kursy/javascript/${nextArticleSlug}` : null}
	/>
	<article>
		{@html marked(article.content)}
	</article>
	<PrevNextArticle
		prevSlug={prevArticleSlug ? `kursy/javascript/${prevArticleSlug}` : null}
		nextSlug={nextArticleSlug ? `kursy/javascript/${nextArticleSlug}` : null}
	/>
{:else}
	<p style="text-align: center; color: red">Niestety nie ma takiego artykułu...</p>
{/if}
