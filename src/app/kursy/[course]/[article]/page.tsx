import MarkdownRenderer from "@/lib/components/MarkdownRenderer";
import { getArticlesAndSections } from "./getArticlesAndSections";
import { Metadata } from "next";
import { courses } from "../page";
import { getArticle } from "./getArticle";
import { PrevNextArticle } from "@/lib/components/PrevNextArticle";

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
	// console.log(coursesSlugs);

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

const NoArticle = () => (
	<p
		style={{
			textAlign: "center",
			color: "red",
		}}
	>
		Niestety nie ma takiego artykułu...
	</p>
);

export default async function ArticlePage({ params }: { params: Promise<ArticleSlugPageParams> }) {
	const { course: courseSlug, article: articleSlug } = await params;

	const { articles } = await getArticlesAndSections({ course: courseSlug });
	if (!articles) return <NoArticle />;

	const article = await getArticle({ courseSlug, articleSlug });
	if (!article) return <NoArticle />;

	const articleIndex = articles.findIndex((a) => a.slug === articleSlug);

	const prevArticleSlug =
		articles && articleIndex && articleIndex > 0 ? articles[articleIndex - 1].slug : null;
	const nextArticleSlug =
		articles && articleIndex !== undefined && articleIndex !== articles.length - 1
			? articles[articleIndex + 1].slug
			: null;

	return (
		<>
			<PrevNextArticle
				prevSlug={prevArticleSlug ? `kursy/${courseSlug}/${prevArticleSlug}` : null}
				nextSlug={nextArticleSlug ? `kursy/${courseSlug}/${nextArticleSlug}` : null}
			/>
			<article className="container">
				<MarkdownRenderer markdown={article.content} />
			</article>
			<PrevNextArticle
				prevSlug={prevArticleSlug ? `kursy/${courseSlug}/${prevArticleSlug}` : null}
				nextSlug={nextArticleSlug ? `kursy/${courseSlug}/${nextArticleSlug}` : null}
			/>
		</>
	);
}
