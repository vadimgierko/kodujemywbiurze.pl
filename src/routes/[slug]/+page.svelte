<script lang="ts">
	import { page } from '$app/stores';
	import { marked } from 'marked';

	export let data;

	$: mdContent = data.articles.find((a) => a.slug === $page.params.slug);
</script>

{#if mdContent}
	<article>
		{@html marked(mdContent.content)}
	</article>
{:else}
	<p style="text-align: center; color: red">Niestety nie ma takiego artykułu...</p>
{/if}
