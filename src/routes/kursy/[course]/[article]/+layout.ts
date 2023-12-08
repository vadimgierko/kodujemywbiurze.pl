import type { Article, Section } from '$lib/types';
import convertMarkdownIntoArticlesArray from '$lib/utils/convertMarkdownIntoArticlesArray.js';

export async function load({ fetch, params }) {
	let sections: Section[] | null = null;
	let articles: Article[] | null = null;

	if (params.course === 'javascript') {
		const sectionsTitles = [
			{ title: 'Wprowadzenie', fileName: 'wprowadzenie' },
			{
				title: 'Moduł 1. Zarządzanie zadaniami za pomocą poleceń JavaScript w konsoli',
				fileName: '1'
			},
			{
				title:
					'Moduł 2. Zarządzanie zadaniami za pomocą własnych funkcji. Przechowywanie kodu w pliku. Aplikacja w wersji 1.0',
				fileName: '2'
			},
			{
				title: 'Moduł 3. Przechowywanie zadań w Local Storage. Aplikacja w wersji 2.0',
				fileName: '3'
			},
			{
				title: 'Zakończenie (na razie) oraz darmowe źródła do samodzielnej nauki (po angielsku)',
				fileName: 'koniec'
			}
		];

		sections = await Promise.all(
			sectionsTitles.map(async (section) => {
				const { title, fileName } = section;
				const res = await fetch(`/content/kursy/javascript/${fileName}.md`);
				const mdContent = await res.text();

				const articles = convertMarkdownIntoArticlesArray(mdContent);

				const sectionObject: Section = {
					title,
					fileName,
					mdContent,
					articles
				};

				return sectionObject;
			})
		);
	} else if (params.course === 'html') {
		const res = await fetch(`/content/kursy/html/index.md`);
		const mdContent = await res.text();

		articles = convertMarkdownIntoArticlesArray(mdContent);
	}

	return {
		articles,
		sections
	};
}
