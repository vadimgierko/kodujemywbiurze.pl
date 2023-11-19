import type { Article } from '$lib/types/index.js';
import slugify from 'slugify';

function customSlugify(text: string) {
	slugify.extend({ '|': '-' });
	return slugify(text, { lower: true, strict: true, remove: /[*+~.()`'"!:@]|/g });
}

function convertMarkdownIntoArticlesArray(mdContent: string) {
	const regXHeader = /^##\s.+/gm; // Regex for H2 headers
	const headerContent = /(?:^|\n)##\s[^\n]*\n(.*?)(?=\n##?\s|$)/gs;

	const headersFromMd = mdContent.match(regXHeader)?.map((h) => h.replace('## ', ''));
	const articlesFromMd = mdContent.match(headerContent);

	if (!mdContent || !headersFromMd || !articlesFromMd) return [];

	const articles: Article[] = headersFromMd.map((h, i) => ({
		title: h,
		slug: customSlugify(h),
		content: articlesFromMd[i]
	}));

	return articles;
}

export async function load({ fetch }) {
	const res = await fetch('/content/dokumentacja/javascript/index.md');
	const mdContent = await res.text();

	const articles = convertMarkdownIntoArticlesArray(mdContent);

	return {
		mdContent,
		articles
	};
}
