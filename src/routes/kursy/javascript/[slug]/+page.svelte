<script lang="ts">
	import { page } from '$app/stores';
	import PrevNextArticle from '$lib/components/PrevNextArticle.svelte';
	import { marked } from 'marked';
	import { isIndexPage } from '$lib/stores';
	import { onMount } from 'svelte';
	import type { Article } from '$lib/types/index.js';

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
