import MarkdownRenderer from "@/lib/components/MarkdownRenderer";
import { getArticlesAndSections } from "./getArticlesAndSections";
import { Metadata } from "next";
import { courses } from "../page";

type PageParams = {
	params: Promise<{ course: string; article: string }>;
};

/**
 * ❗❗❗ TODO ❗❗❗
 */
export const metadata: Metadata = {
	//
};

{
	/* <svelte:head>
	<title>Kodujemy w biurze | {article?.title}</title>
	<meta property="og:title" content={`Kodujemy w biurze | ${article?.title}`} />

	<meta name="description" content={`${article?.title}`} />
	<meta property="og:description" content={`${article?.title}`} />

	<meta
		property="og:image"
		content="https://www.kodujemywbiurze.pl/content/kursy/javascript/kurs-podstawy-javascript-pierwsza-aplikacja-w-konsoli-screenshot.jpg"
	/>

	<meta
		property="og:url"
		content={`https://www.kodujemywbiurze.pl/kursy/${$page.params.course}/${$page.params.article}`}
	/>
	<meta property="og:type" content="article" />
</svelte:head> */
}

export async function generateStaticParams() {
	const coursesSlugs = courses.map((c) => c.slug);
	console.log(coursesSlugs);

	const params: { course: string; article: string }[] = [];

	coursesSlugs.forEach(async (courseSlug) => {
		const { articles } = await getArticlesAndSections({ course: courseSlug });

		if (articles) {
			console.log(articles.map((a) => a.slug));
			articles.forEach((a) =>
				params.push({ course: courseSlug, article: a.slug })
			);
		}
	});

	return params;
}

export default async function ArticlePage({ params }: PageParams) {
	const { course: courseSlug, article: articleSlug } = await params;
	const { articles } = await getArticlesAndSections({ course: courseSlug });

	const article = articles?.find((a) => a.slug === articleSlug);

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
