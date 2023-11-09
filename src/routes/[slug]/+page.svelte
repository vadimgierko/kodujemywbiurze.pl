<script lang="ts">
	import { page } from '$app/stores';
	import PrevNextArticle from '$lib/components/PrevNextArticle.svelte';
	import { marked } from 'marked';

	export let data;

	$: article = data.articles.find((a) => a.slug === $page.params.slug);
	$: articleIndex = data.articles.findIndex((a) => a.slug === $page.params.slug);
	$: prevArticleSlug = articleIndex > 0 ? data.articles[articleIndex - 1].slug : null;
	$: nextArticleSlug =
		articleIndex !== data.articles.length - 1 ? data.articles[articleIndex + 1].slug : null;
</script>

{#if article}
	<PrevNextArticle prevSlug={prevArticleSlug} nextSlug={nextArticleSlug} />
	<article>
		{@html marked(article.content)}
	</article>
	<PrevNextArticle prevSlug={prevArticleSlug} nextSlug={nextArticleSlug} />
{:else}
	<p style="text-align: center; color: red">Niestety nie ma takiego artykułu...</p>
{/if}
