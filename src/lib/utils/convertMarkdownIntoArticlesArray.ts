import type { Article } from '$lib/types';
import slugify from 'slugify';

function customSlugify(text: string) {
	slugify.extend({ '|': '-' });
	return slugify(text, { lower: true, strict: true, remove: /[*+~.()`'"!:@]|/g });
}

export default function convertMarkdownIntoArticlesArray(mdContent: string) {
	const regXHeader = /^##\s.+/gm; // Regex for H2 headers
	const headerContent = /(?:^|\n)##\s[^\n]*\n(.*?)(?=\n##?\s|$)/gs;

	const headersFromMd = mdContent.match(regXHeader)?.map((h) => h.replace('## ', ''));
	const articlesFromMd = mdContent.match(headerContent);

	if (!mdContent || !headersFromMd || !articlesFromMd) return [];

	const titles = headersFromMd.map((title) => {
		const separatorIndex = title.indexOf('|');
		const fullTitle = title.trim();
		const docTitle = separatorIndex !== -1 ? title.slice(0, separatorIndex).trim() : title.trim();
		const tutorialTitle =
			separatorIndex !== -1 ? title.slice(separatorIndex + 1).trim() : title.trim();

		return {
			fullTitle,
			docTitle,
			tutorialTitle
		};
	});

	const articles: Article[] = titles.map((t, i) => ({
		...t,
		title: t.fullTitle,
		slug: customSlugify(t.docTitle),
		content: articlesFromMd[i]
	}));

	return articles;
}
