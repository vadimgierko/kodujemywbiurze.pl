"use client";

import { useUiStore } from "@/context/useUiStore";
import { Article, Section } from "../types";
import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledAside = styled.aside`
.active-link {
	font-weight: bold;
}

:global(html[data-theme='light'] .active-link) {
	color: black;
}

:global(html[data-theme='dark'] .active-link) {
	color: var(--primary);
}

ul {
	list-style: none;
	padding-left: 0;
}

aside {
	box-sizing: border-box;
	font-size: smaller;
	height: calc(100% - 40px);
	padding: 0 2em;

	margin-top: 40px;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	overflow-x: hidden;
}

aside a {
	text-decoration: none;
}
`

type AsideProps = {
	articles: Article[] | null;
	sections: Section[] | null;
	courseSlug: string;
	pathName: string;
}

type TitleType = 'fullTitle' | 'docTitle' | 'tutorialTitle';

export function Aside({ articles, sections, courseSlug, pathName }: AsideProps) {
	const { showOffset, setShowOffset, isScreenLessThan992 } = useUiStore();
	const [titleType, setTitleType] = useState<TitleType>("fullTitle");

	return (
		<StyledAside
			className="text-center"
			style={{
				display: showOffset
					? isScreenLessThan992
						? 'display: block; width: 60%'
						: 'display: block; width: 30%'
					: 'display: none'
			}}
		>
			<h3>Spis treści</h3>

			<select value={titleType} onChange={e => setTitleType(e.target.value as TitleType)}>
				<option value="fullTitle">pełny tytuł</option>
				<option value="docTitle">dokumentacyjny tytuł</option>
				<option value="tutorialTitle">tutorialowy tytuł</option>
			</select>

			{
				sections && <nav
					onClick={() => (isScreenLessThan992 && showOffset ? setShowOffset(false) : null)}
				>
					{
						sections.map(
							({ title, articles, fileName }) =>
								<div key={`section-list-item-${title}`}>
									{fileName !== 'wprowadzenie' && fileName !== 'koniec' && <h3>{title}</h3>}
									<ul>
										{
											articles.map(article => <div key={`section-article-list-item-${article.slug}`}>
												<li>
													<Link
														href={`/kursy/${courseSlug}/${article.slug}`}
														className={courseSlug.includes(article.slug) ? 'active-link' : ''}
													>
														{article[titleType]}
													</Link>
												</li>
												<hr />
											</div>)
										}
									</ul>
								</div>
						)
					}
				</nav>
			}

			{
				articles && <nav onClick={() => (isScreenLessThan992 && showOffset ? setShowOffset(false) : null)}>
					<ul>
						{
							articles.map(article => <div key={`article-list-item-${article.slug}`}>
								<li>
									<Link
										href={`/kursy/${courseSlug}/${article.slug}`}
										className={pathName.includes(article.slug) ? 'active-link' : ''}
									>
										{article[titleType]}
									</Link>
								</li>
								<hr />
							</div>)
						}
					</ul>
				</nav>
			}
		</StyledAside>
	);
}



{/* <style scoped>
	.active-link {
		font-weight: bold;
	}

	:global(html[data-theme='light'] .active-link) {
		color: black;
	}

	:global(html[data-theme='dark'] .active-link) {
		color: var(--primary);
	}

	ul {
		list-style: none;
		padding-left: 0;
	}

	aside {
		box-sizing: border-box;
		font-size: smaller;
		height: calc(100% - 40px);
		padding: 0 2em;

		margin-top: 40px;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		overflow-x: hidden;
	}

	aside a {
		text-decoration: none;
	}
</style> */}
