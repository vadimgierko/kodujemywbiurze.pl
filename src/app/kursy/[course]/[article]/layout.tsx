import { ReactNode } from "react";
import { getArticlesAndSections } from "./getArticlesAndSections";
import { MainWrapper } from "./MainWrapper";
import { Aside } from "@/lib/components/Aside";

type ArticleLayoutParams = {
	children: ReactNode;
	params: Promise<{ course: string; article: string }>;
};

export default async function ArticleLayout({
	children,
	params,
}: ArticleLayoutParams) {
	const { course: courseSlug } = await params;
	const { articles, sections } = await getArticlesAndSections({
		course: courseSlug,
	});

	return (
		<>
			<Aside articles={articles} sections={sections} courseSlug={courseSlug} />
			<MainWrapper>{children}</MainWrapper>
		</>
	);
}
