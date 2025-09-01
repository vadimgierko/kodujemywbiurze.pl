import { HeroSection } from "@/lib/components/HeroSection";
import MarkdownRenderer from "@/lib/components/MarkdownRenderer";
import { Course } from "@/lib/types";
import { Metadata } from "next";
import Link from "next/link";

const content = `
<h2 align="center">Twórz aplikację krok po kroku od pierwszej lekcji<br>i jednocześnie poznawaj podstawy programowania!</h2>

---

Jak sama nazwa wskazuje, w trakcie tego metakursu:

1. **będziemy tworzyć i stopniowo rozbudowywać aplikację do zarządzania listą zadań do zrobienia**, która będzie działać w przeglądarce,
2. i **przy okazji** tworzenia aplikacji **opanujemy niezbędne do tego podstawy języka JavaScript oraz HTML**.

Aplikacja, którą stworzymy, umożliwi nam:

- zapisywanie,
- przechowywanie,
- wyświetlanie,
- dodawanie,
- modyfikowanie oraz
- usuwanie zadań do zrobienia.

<h2 align="center">Struktura metakursu</h2>

---

Kurs ten nazwałem *metakursem*, ponieważ jest on zlepkiem **4 mniejszych odrębnych kursów**, skupionych na konkretnych językach programowania, ich integracji oraz wbudowanych funkcjonalnościach przeglądarki.

### 1️⃣ JavaScript

Na początku (w 1. module <a href="/kursy/javascript" target="_blank">kursu JavaScript</a>) będziemy zarządzać naszymi zadaniami za pomocą nowopoznanych poleceń JavaScript w konsoli *(za chwilę dowiesz się, czym jest konsola i jak z niej korzystać)*.

Później (<a href="/kursy/javascript/programowanie-imperatywne-a-deklaratywne-funkcyjne" target="_blank">w module 2. kursu JavaScript</a>) stworzymy i będziemy używać własnych funkcji, które zostaną zapisane w pliku bezpośrednio w przeglądarce, dzięki czemu nasz kod zostanie zachowany nawet po przeładowaniu strony oraz będziemy mogli go uruchomić w konsoli.

### 2️⃣ Local Storage

Później przejdziemy do <a href="/kursy/local-storage" target="_blank">kursu Local Storage</a>, w którym rozbudujemy naszą aplikację w ten sposób, że zadania zostaną zapisane w "pamięci" przeglądarki, dzięki czemu ich nie utracimy nawet po zamknięciu przeglądarki.

### 3️⃣ HTML

Potem poznamy totalnie ascetyczne <a href="/kursy/html" target="_blank">podstawy HTML</a>, by stworzyć prosty UI (widok naszej aplikacji w przeglądarce).

### 4️⃣ HTML + DOM

Ostatecznie zaś <a href="/kursy/html-javascript-dom" target="_blank">zintegrujemy HTML i JavaScript za pomocą DOM</a>, dzięki czemu przeniesiemy naszą aplikację z konsoli do przeglądarki oraz zintegrujemy nasz UI z kodem JavaScript. W ten sposób powstanie prawdziwa interaktywna aplikacja do zarządzania zadaniami z interfacem użytkownika w przeglądarce - z przyciskami, okienkiem dialogowym do wpisywania zadań itd.

---

<h2 align="center">Przyszłość strony <em>kodujemywbiurze.pl</em> oraz kursu/ów</h2>

**W zależności od Waszego zainteresowania projektem, będziemy rozbudowywać niniejszeją stronę i dodawać kolejne lekcje i kursy**, co znaczy, że:

- będziemy przekształcać i dalej rozwijać ww. aplikację w aplikację z pełnego zdarzenia - z bazą danych w chmurze, rejestracją użytkowników, opublikowaniem aplikacji w Internecie itd.,
- powstanie drugi metakurs *Programowanie interaktywnych stron internetowych*, który także będzie korzystał z istniejących kursów na tej stronie, jednak będzie kładł nacisk na specyfikę budowy stron www, a nie aplikacji webowych.

*Sky is the limit*, aczkolwiek na początek w ramach eksperymentu ograniczymy się do funkcjonalności, którymi dysponuje nasza przeglądarka.

<h2 align="center">Polub 👍 i udostępnij ✈️, by strona mogła się rozwijać! 🚀</h2>

---

Mam nadzieję, że kiedy dobrniesz do końca kursu (w obecnej postaci), będziesz chciał/a więcej!

Jeśli tak będzie, to daj mi znać, że jesteś zainteresowany/a dalszymi lekcjami w tym samym stylu.

Pamiętaj, że rozwój niniejszego projektu zależy od Twojego zainteresowania, dlatego zachęcam do:

- 👍 polubienia i śledzenia profilu na <a href="https://www.facebook.com/kodujemywbiurze" target="_blank">Facebooku</a> i <a href="https://www.linkedin.com/company/kodujemywbiurze" target="_blank">LinkedIn</a> oraz
- 📢 udostępniania tej strony, by jak najwięcej osób mogło skorzystać z szansy na rozwój!

*Happy Coding!*
`;

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
            'Przy okazji nauczysz się podstaw programowania webowego - JavaScript i HTML (na razie 😏)!'
        ],
        btnHref: '/kursy/javascript/wprowadzenie-czym-jest-javascript-i-dlaczego-warto-sie-go-uczyc',
        btnCTA: 'Zacznij kurs!',
        imgSrc: '',
    }
};

const {title, description, ogDescription, ogImage, ogTitle, ogUrl} = course.headData

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: ogTitle,
    description: ogDescription, 
    images: ogImage,
    url: ogUrl,
    type: "article"
  }
}

export default function Page() {
    const { heroSectionData } = course;

    return (
        <main className="container">
            <HeroSection
                courseSlug="programowanie-aplikacji-webowych"
                h1FirstSmallText={heroSectionData.h1FirstSmallText}
                h1LargeText={heroSectionData.h1LargeText}
                descriptionParagraphs={heroSectionData.descriptionParagraphs}
                btnHref={heroSectionData.btnHref}
                btnCTA={heroSectionData.btnCTA}
                imgSrc={heroSectionData.imgSrc}
            />

            <p style={{ textAlign: "center", paddingBottom: "2rem" }}>Dowiedz się więcej 👇</p>

            <article className="container">
                <MarkdownRenderer markdown={content} />
            </article>

            <div className="text-center">
                <Link href="/kursy/javascript/wprowadzenie-czym-jest-javascript-i-dlaczego-warto-sie-go-uczyc">
                    <button
                        className="bg-primary"
                        style={{
                            margin: "2em 0",
                            fontSize: "1.5rem",
                            fontWeight: 600,
                            padding: "1em 2em",
                            borderRadius: "18px",
                            color: "rgb(0, 0, 0)"
                        }}
                    >
                        Przejdź do pierwszego kursu (JavaScript)
                    </button>
                </Link>
            </div>
        </main>
    );
}