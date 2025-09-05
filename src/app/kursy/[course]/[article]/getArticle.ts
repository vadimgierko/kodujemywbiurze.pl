import { getArticlesAndSections } from "./getArticlesAndSections";

export async function getArticle({ courseSlug, articleSlug }: { courseSlug: string; articleSlug: string }) {
    const { articles } = await getArticlesAndSections({ course: courseSlug });

    if (!articles) return;

    const article = articles.find(a => a.slug === articleSlug);

    return article;
}