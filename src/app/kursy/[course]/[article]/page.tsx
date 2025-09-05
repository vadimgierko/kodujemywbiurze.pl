import MarkdownRenderer from "@/lib/components/MarkdownRenderer";
import { getArticlesAndSections } from "./getArticlesAndSections";
import { Metadata } from "next";
import { courses } from "../page";
import { getArticle } from "./getArticle";

type ArticleSlugPageParams = {
	course: string;
	article: string;
};

export async function generateMetadata({
	params,
}: {
	params: Promise<ArticleSlugPageParams>;
}): Promise<Metadata> {
	const { course: courseSlug, article: articleSlug } = await params;

	const article = await getArticle({ courseSlug, articleSlug });

	if (!article) return {};

	const { title } = article;

	return {
		title: `Kodujemy w biurze | ${title}`,
		/**
		 * ❗❗❗ FIX THIS ❗❗❗
		 * add descriptions for articles
		 */
		description: `Kodujemy w biurze | ${title}`,
		openGraph: {
			title: `Kodujemy w biurze | ${title}`,
			description: `Kodujemy w biurze | ${title}`,
			images: "https://www.kodujemywbiurze.pl/content/kursy/javascript/kurs-podstawy-javascript-pierwsza-aplikacja-w-konsoli-screenshot.jpg",
			type: "article",
			url: `https://www.kodujemywbiurze.pl/kursy/${courseSlug}/${articleSlug}`,
		},
	};
}

export async function generateStaticParams() {
	const coursesSlugs = courses.map((c) => c.slug);
	console.log(coursesSlugs);

	const results = await Promise.all(
		coursesSlugs.map(async (courseSlug) => {
			const courseArticlesAndSections = await getArticlesAndSections({ course: courseSlug });
			const { articles } = courseArticlesAndSections;
			return { courseSlug, articles: articles || [] }
		})
	);

	return results.flatMap(({ courseSlug, articles }) =>
		articles.map((a) => ({ course: courseSlug, article: a.slug }))
	);
}

export default async function ArticlePage({ params }: { params: Promise<ArticleSlugPageParams> }) {
	const { course: courseSlug, article: articleSlug } = await params;

	const article = await getArticle({ courseSlug, articleSlug });

	if (!article)
		return (
			<p
				style={{
					textAlign: "center",
					color: "red",
				}}
			>
				Niestety nie ma takiego artykułu...
			</p>
		);

	return (
		<article className="container">
			<MarkdownRenderer markdown={article.content} />
		</article>
	);
}
