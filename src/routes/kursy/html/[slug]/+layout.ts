import convertMarkdownIntoArticlesArray from '$lib/utils/convertMarkdownIntoArticlesArray.js';

export async function load({ fetch }) {
	const res = await fetch(`/content/kursy/html/index.md`);
	const mdContent = await res.text();

	const articles = convertMarkdownIntoArticlesArray(mdContent);

	return {
		articles
	};
}
