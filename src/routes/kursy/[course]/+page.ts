import type { Course } from '$lib/types';

const courses: Course[] = [
	{
		slug: 'javascript',
		headData: {
			title: 'Kodujemy w biurze | Podstawy Javascript. Pierwsza aplikacja w konsoli',
			ogTitle: 'Kodujemy w biurze | Podstawy Javascript. Pierwsza aplikacja w konsoli',
			description:
				'Naucz się podstaw Javascript i stwórz aplikację do zarządzania Twoimi zadaniami bezpośrednio w Twojej przeglądarce!',
			ogDescription:
				'Naucz się podstaw Javascript i stwórz aplikację do zarządzania Twoimi zadaniami bezpośrednio w Twojej przeglądarce!',
			ogImage:
				'/content/kursy/javascript/kurs-podstawy-javascript-pierwsza-aplikacja-w-konsoli-screenshot.jpg',
			ogUrl: 'https://www.kodujemywbiurze.pl/kursy/javascript'
		},
		heroSectionData: {
			h1FirstSmallText: 'Darmowy kurs',
			h1LargeText: 'Podstawy Javascript. Pierwsza aplikacja w konsoli',
			descriptionParagraphs: [
				'Naucz się podstaw Javascript - najbardziej popularnego języka programowania!',
				'W trakcie kursu stworzysz działającą aplikację do zarządzania Twoimi zadaniami bezpośrednio w konsoli Twojej przeglądarki!'
			],
			btnHref: '/kursy/javascript/wprowadzenie-czym-jest-javascript-i-dlaczego-warto-sie-go-uczyc',
			btnCTA: 'Zacznij kurs!',
			imgSrc: '',
			handleMount: () => {}
		}
	},
	{
		slug: 'html',
		headData: {
			title: 'Kodujemy w biurze | Podstawy HTML. Pierwsza statyczna strona internetowa',
			ogTitle: 'Kodujemy w biurze | Podstawy HTML. Pierwsza statyczna strona internetowa',
			description:
				'Naucz się podstaw HTML i stwórz pierwszą statyczną stronę aplikacji do zarządzania Twoimi zadaniami!',
			ogDescription:
				'Naucz się podstaw HTML i stwórz pierwszą statyczną stronę aplikacji do zarządzania Twoimi zadaniami!',
			ogImage: '',
			ogUrl: 'https://www.kodujemywbiurze.pl/kursy/html'
		},
		heroSectionData: {
			h1FirstSmallText: 'Darmowy kurs',
			h1LargeText: 'Podstawy HTML. Pierwsza statyczna strona internetowa',
			descriptionParagraphs: [
				'Naucz się podstaw HTML - podstawowego budulca stron i aplikacji internetowych!',
				'W trakcie kursu stworzysz statyczną stronę aplikacji do zarządzania zadaniami, którą zbudowaliśmy w kursie JavaScript!'
			],
			btnHref: '/kursy/html/wprowadzenie',
			btnCTA: 'Zacznij kurs!',
			imgSrc: '',
			handleMount: () => {}
		}
	}
	// {
	// 	slug: 'javascript-dom',
	// 	headData: {
	// 		title: 'Kodujemy w biurze | Podstawy JavaScript DOM. Pierwsza interaktywna aplikacja webowa',
	// 		ogTitle:
	// 			'Kodujemy w biurze | Podstawy JavaScript DOM. Pierwsza interaktywna aplikacja webowa',
	// 		description:
	// 			'Naucz się podstaw JavaScript DOM i stwórz pierwszą interaktywną aplikację webową do zarządzania Twoimi zadaniami!',
	// 		ogDescription:
	// 			'Naucz się podstaw JavaScript DOM i stwórz pierwszą interaktywną aplikację webową do zarządzania Twoimi zadaniami!',
	// 		ogImage: '',
	// 		ogUrl: 'https://www.kodujemywbiurze.pl/kursy/javascript-dom'
	// 	},
	// 	heroSectionData: {
	// 		h1FirstSmallText: 'Darmowy kurs',
	// 		h1LargeText: 'Podstawy JavaScript DOM. Pierwsza interaktywna aplikacja webowa',
	// 		descriptionParagraphs: [],
	// 		btnHref: '/kursy/javascript-dom/wprowadzenie',
	// 		btnCTA: 'Zacznij kurs!',
	// 		imgSrc: '',
	// 		handleMount: () => {}
	// 	}
	// }
];

export async function load() {
	return { courses };
}
