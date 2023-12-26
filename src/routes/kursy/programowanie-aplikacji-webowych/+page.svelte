<script lang="ts">
	import HeroSection from '$lib/components/HeroSection.svelte';
	import { isIndexPage } from '$lib/stores/index.js';
	import { marked } from 'marked';
	import { onMount } from 'svelte';

	export let data;

	const { course } = data;

	const { heroSectionData, headData } = course;

	onMount(() => {
		isIndexPage.set(true);
	});

	const content = `
Witaj w darmowym metakursie dla początkujących koderów w biurze *Podstawy programowania webowego. Tworzymy aplikację*!

## Twórz aplikację krok po kroku od pierwszej lekcji i jednocześnie poznawaj podstawy programowania webowego!

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

## Struktura metakursu

---

Kurs ten nazwałem *metakursem*, ponieważ jest on zlepkiem **4 mniejszych odrębnych kursów**, skupionych na konkretnych językach programowania, ich integracji oraz wbudowanych funkcjonalnościach przeglądarki.

### JavaScript

Na początku (w 1. module <a href="/kursy/javascript" target="_blank">kursu JavaScript</a>) będziemy zarządzać naszymi zadaniami za pomocą nowopoznanych poleceń JavaScript w konsoli *(za chwilę dowiesz się, czym jest konsola i jak z niej korzystać)*.

Później (w module 2. kursu JavaScript) stworzymy i będziemy używać własnych funkcji, które zostaną zapisane w pliku bezpośrednio w przeglądarce, dzięki czemu nasz kod zostanie zachowany nawet po przeładowaniu strony oraz będziemy mogli go uruchomić w konsoli.

### Local Storage

Później przejdziemy do <a href="/kursy/local-storage" target="_blank">kursu Local Storage</a>, w którym rozbudujemy naszą aplikację w ten sposób, że zadania zostaną zapisane w "pamięci" przeglądarki, dzięki czemu ich nie utracimy nawet po zamknięciu przeglądarki.

### HTML + DOM

Potem poznamy totalnie ascetyczne <a href="/kursy/html" target="_blank">podstawy HTML</a>, by stworzyć prosty UI (widok naszej aplikacji w przeglądarce), oraz <a href="/kursy/html-javascript-dom" target="_blank">zintegrujemy HTML i JavaScript za pomocą DOM</a>, dzięki czemu przeniesiemy naszą aplikację z konsoli do przeglądarki oraz zintegrujemy nasz UI z kodem JavaScript. W ten sposób powstanie prawdziwa interaktywna aplikacja do zarządzania zadaniami z interfacem użytkownika w przeglądarce - z przyciskami, okienkiem dialogowym do wpisywania zadań itd.

## Przyszłość strony *kodujemywbiurze.pl* oraz kursu/ów

W zależności od Waszego zainteresowania projektem, będziemy rozbudowywać niniejszeją stronę i dodawać kolejne lekcje i kursy, co znaczy, że:

- będziemy przekształcać i dalej rozwijać ww. aplikację w aplikację z pełnego zdarzenia - z bazą danych w chmurze, rejestracją użytkowników, opublikowaniem aplikacji w Internecie itd.,
- powstanie drugi metakurs *Programowanie interaktywnych stron internetowych*, który także będzie korzystał z istniejących kursów na tej stronie, jednak będzie kładł nacisk na specyfikę budowy stron www, a nie aplikacji webowych.

*Sky is the limit*, aczkolwiek na początek w ramach eksperymentu ograniczymy się do funkcjonalności, którymi dysponuje nasza przeglądarka.

## CTA: polub i udostępnij, by strona mogła się rozwijać!

Mam nadzieję, że kiedy dobrniesz do końca kursu (w obecnej postaci), będziesz chciał/a więcej! Jeśli tak będzie, to daj mi znać, że jesteś zainteresowany/a dalszymi lekcjami w tym samym stylu.

Pamiętaj, że rozwój niniejszego projektu zależy od Twojego zainteresowania, dlatego zachęcam do:

- 👍 polubienia i śledzenia profilu na <a href="https://www.facebook.com/kodujemywbiurze" target="_blank">Facebooku</a> i <a href="https://www.linkedin.com/company/kodujemywbiurze" target="_blank">LinkedIn</a> oraz
- 📢 udostępniania tej strony, by jak najwięcej osób mogło skorzystać z szansy na rozwój!

*Happy Coding!*
	`
</script>

<svelte:head>
	<title>{headData.title}</title>
	<meta property="og:title" content={headData.ogTitle} />

	<meta name="description" content={headData.description} />
	<meta property="og:description" content={headData.ogDescription} />

	<meta property="og:image" content={headData.ogImage} />

	<meta property="og:url" content={headData.ogUrl} />
	<meta property="og:type" content="article" />
</svelte:head>

<main class="container">
	<HeroSection
		h1FirstSmallText={heroSectionData.h1FirstSmallText}
		h1LargeText={heroSectionData.h1LargeText}
		descriptionParagraphs={heroSectionData.descriptionParagraphs}
		btnHref={heroSectionData.btnHref}
		btnCTA={heroSectionData.btnCTA}
		imgSrc={heroSectionData.imgSrc}
		handleMount={heroSectionData.handleMount}
	/>

	<p style="text-align: center; padding-bottom: 2rem">Dowiedz się więcej 👇</p>

	<article class="container">
		{@html marked(content)}
	</article>
</main>
