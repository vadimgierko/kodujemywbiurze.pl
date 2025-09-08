"use client";

import styles from "./aside.module.css";
import { useUiStore } from "@/context/useUiStore";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Article, Section } from "@/lib/types";

type AsideProps = {
	articles: Article[] | null;
	sections: Section[] | null;
	courseSlug: string;
};

type TitleType = "fullTitle" | "docTitle" | "tutorialTitle";

export function Aside({ articles, sections, courseSlug }: AsideProps) {
	const { showOffset, setShowOffset, isScreenLessThan992 } = useUiStore();
	const [titleType, setTitleType] = useState<TitleType>("fullTitle");
	const pathName = usePathname();

	return (
		<aside
			className={styles["aside"]}
			style={{
				display: showOffset ? "block" : "none",
				width: isScreenLessThan992 ? "60%" : "30%",
			}}
		>
			<h3>Spis treści</h3>

			<select
				value={titleType}
				onChange={(e) => setTitleType(e.target.value as TitleType)}
			>
				<option value="fullTitle">pełny tytuł</option>
				<option value="docTitle">dokumentacyjny tytuł</option>
				<option value="tutorialTitle">tutorialowy tytuł</option>
			</select>

			{sections && (
				<nav
					onClick={() =>
						isScreenLessThan992 && showOffset ? setShowOffset(false) : null
					}
				>
					{sections.map(({ title, articles, fileName }) => (
						<div key={`section-list-item-${title}`}>
							{fileName !== "wprowadzenie" && fileName !== "koniec" && (
								<h3>{title}</h3>
							)}
							<ul>
								{articles.map((article) => (
									<div key={`section-article-list-item-${article.slug}`}>
										<li>
											<Link
												href={`/kursy/${courseSlug}/${article.slug}`}
												className={
													courseSlug.includes(article.slug)
														? styles["active-link"]
														: ""
												}
											>
												{article[titleType]}
											</Link>
										</li>
										<hr />
									</div>
								))}
							</ul>
						</div>
					))}
				</nav>
			)}

			{articles && (
				<nav
					onClick={() =>
						isScreenLessThan992 && showOffset ? setShowOffset(false) : null
					}
				>
					<ul>
						{articles.map((article) => (
							<div key={`article-list-item-${article.slug}`}>
								<li>
									<Link
										href={`/kursy/${courseSlug}/${article.slug}`}
										className={
											pathName.includes(article.slug)
												? styles["active-link"]
												: ""
										}
									>
										{article[titleType]}
									</Link>
								</li>
								<hr />
							</div>
						))}
					</ul>
				</nav>
			)}
		</aside>
	);
}
