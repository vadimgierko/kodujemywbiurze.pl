import type { Article } from "$lib/types";
import slugify from "slugify";

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

	const articles: Article[] = headersFromMd.map((h, i) => ({
		title: h,
		slug: customSlugify(h),
		content: articlesFromMd[i]
	}));

	return articles;
}
