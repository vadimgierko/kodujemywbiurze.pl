import type { Course } from '$lib/types';

const course: Course = {
    slug: 'programowanie-aplikacji-webowych',
    headData: {
        title: 'Kodujemy w biurze | Programowanie aplikacji webowych',
        ogTitle: 'Kodujemy w biurze | Programowanie aplikacji webowych',
        description:
            'Naucz się podstaw programowania webowego i stwórz aplikację do zarządzania Twoimi zadaniami!',
        ogDescription:
            'Naucz się podstaw programowania webowego i stwórz aplikację do zarządzania Twoimi zadaniami!',
        ogImage:
            '/content/kursy/javascript/kurs-podstawy-javascript-pierwsza-aplikacja-w-konsoli-screenshot.jpg',
        ogUrl: 'https://www.kodujemywbiurze.pl/kursy/programowanie-aplikacji-webowych'
    },
    heroSectionData: {
        h1FirstSmallText: 'Darmowy metakurs',
        h1LargeText: 'Podstawy programowania webowego. Tworzymy aplikację!',
        descriptionParagraphs: [
            'W trakcie tego metakursu stworzysz krok po kroku aplikację do zarządzania swoimi zadaniami w przeglądarce!',
            'Przy okazji nauczysz się podstaw programowania webowego - JavaScript i HTML (na razie 😏)!',
            
        ],
        btnHref: '/kursy/javascript/wprowadzenie-czym-jest-javascript-i-dlaczego-warto-sie-go-uczyc',
        btnCTA: 'Zacznij kurs!',
        imgSrc: '',
        handleMount: () => { }
    }
}

export async function load() {
    return { course };
}
