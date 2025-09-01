import { HeroSection } from '@/lib/components/HeroSection';
import type { Course } from '@/lib/types';
import { Metadata } from 'next';

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
                'https://www.kodujemywbiurze.pl/content/kursy/javascript/kurs-podstawy-javascript-pierwsza-aplikacja-w-konsoli-screenshot.jpg',
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
        }
    },
    {
        slug: 'local-storage',
        headData: {
            title: 'Kodujemy w biurze | Javascript i Local Storage. Przechowujemy dane w przeglądarce',
            ogTitle: 'Kodujemy w biurze | Javascript i Local Storage. Przechowujemy dane w przeglądarce',
            description:
                'Naucz się podstaw Local Storage i zapisuj dane aplikacji do zarządzania zadaniami bezpośrednio w przeglądarce!',
            ogDescription:
                'Naucz się podstaw Local Storage i zapisuj dane aplikacji do zarządzania zadaniami bezpośrednio w przeglądarce!',
            ogImage:
                'https://www.kodujemywbiurze.pl/content/kursy/javascript/kurs-podstawy-javascript-pierwsza-aplikacja-w-konsoli-screenshot.jpg',
            ogUrl: 'https://www.kodujemywbiurze.pl/kursy/local-storage'
        },
        heroSectionData: {
            h1FirstSmallText: 'Darmowy kurs',
            h1LargeText: 'Javascript i Local Storage. Przechowujemy dane w przeglądarce',
            descriptionParagraphs: [
                'Naucz się podstaw Local Storage i zapisuj dane bezpośrednio w przeglądarce.',
                'W trakcie kursu rozbudujesz aplikację do zarządzania zadaniami tak, by przechowywała Twoje dane!'
            ],
            btnHref: '/kursy/local-storage/wprowadzenie-czym-jest-local-storage',
            btnCTA: 'Zacznij kurs!',
            imgSrc: '',
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
            ogImage:
                'https://www.kodujemywbiurze.pl/content/kursy/javascript/kurs-podstawy-javascript-pierwsza-aplikacja-w-konsoli-screenshot.jpg',
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
        }
    },
    {
        slug: 'html-javascript-dom',
        headData: {
            title:
                'Kodujemy w biurze | Integrujemy HTML i JavaScript. Podstawy DOM. Pierwsza interaktywna aplikacja webowa',
            ogTitle:
                'Kodujemy w biurze | Integrujemy HTML i JavaScript. Podstawy DOM. Pierwsza interaktywna aplikacja webowa',
            description:
                'Stwórz pierwszą interaktywną aplikację webową do zarządzania Twoimi zadaniami łącząc HTML i JavaScript!',
            ogDescription:
                'Stwórz pierwszą interaktywną aplikację webową do zarządzania Twoimi zadaniami łącząc HTML i JavaScript!',
            ogImage:
                'https://www.kodujemywbiurze.pl/content/kursy/javascript/kurs-podstawy-javascript-pierwsza-aplikacja-w-konsoli-screenshot.jpg',
            ogUrl: 'https://www.kodujemywbiurze.pl/kursy/html-javascript-dom'
        },
        heroSectionData: {
            h1FirstSmallText: 'Darmowy kurs',
            h1LargeText:
                'Integrujemy HTML i JavaScript. Podstawy DOM. Pierwsza interaktywna aplikacja webowa',
            descriptionParagraphs: [
                'Połącz swoją wiedzę z zakresu JavaScript i HTML, dzięki czemu przeniesiesz swoją aplikację do zarzadzania zadaniami z konsoli do przeglądarki!'
            ],
            btnHref: '/kursy/html-javascript-dom/wprowadzenie',
            btnCTA: 'Zacznij kurs!',
            imgSrc: '',
        }
    }
];

type CourseSlugPageParams = { course: string };

export async function generateMetadata({
    params,
}: {
    params: Promise<CourseSlugPageParams>;
}): Promise<Metadata> {
    const courseSlug = (await params).course;

    const pageData = courses.find(c => c.slug === courseSlug);

    if (!pageData) return {};

    const { title, description, ogDescription, ogImage, ogTitle, ogUrl } = pageData.headData

    return {
        title: `${title} | kodujemywbiurze.pl`,
        description: `${description}`,
        openGraph: {
            title: `${ogTitle} | kodujemywbiurze.pl`,
            description: `${ogDescription}`,
            images: ogImage,
            type: "article",
            url: ogUrl,
        },
    };
}

export async function generateStaticParams() {
    const slugs = courses.map(c => c.slug);

    const params: CourseSlugPageParams[] = slugs.map((slug) => ({
        course: slug,
    }));

    return params;
}

export default async function Page({
    params,
}: {
    params: Promise<CourseSlugPageParams>;
}) {
    const courseSlug = (await params).course;

    const course = courses.find(c => c.slug === courseSlug);

    if (!course) return <p style={{ color: "red" }}>Niestety nie ma takiego kursu...</p>

    const { heroSectionData } = course;

    return (
        <main className="container">
            <HeroSection
                courseSlug={courseSlug}
                h1FirstSmallText={heroSectionData.h1FirstSmallText}
                h1LargeText={heroSectionData.h1LargeText}
                descriptionParagraphs={heroSectionData.descriptionParagraphs}
                btnHref={heroSectionData.btnHref}
                btnCTA={heroSectionData.btnCTA}
                imgSrc={heroSectionData.imgSrc}
            />
        </main>
    );
}