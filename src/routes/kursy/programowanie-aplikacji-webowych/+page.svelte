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
## Twórz aplikację do zarządzania zadaniami krok po kroku od pierwszej lekcji!

Ponieważ wolę **uczyć się nowych rzeczy w praktyce, widząc natychmiastowe rezultaty** mojej nauki i pracy, dlatego w trakcie tego kursu:

- od samego początku **będziemy tworzyć coraz bardziej rozbudowaną aplikację do zarządzania listą zadań do zrobienia, która będzie działać w konsoli naszej przeglądarki bezpośrednio na tej stronie**, a potem zostanie przekształcona w samodzielną aplikację webową,
- **przy okazji** tworzenia aplikacji **opanujemy podstawy języka JavaScript** - <a href="https://bulldogjob.pl/readme/najpopularniejsze-jezyki-programowania-2020" target="_blank">najbardziej popularnego języka programowania</a>, a potem także niezbędne podstawy HTML i CSS (w kolejnych kursach).

Aplikacja, którą stworzymy, umożliwi nam:

- zapisywanie,
- przechowywanie,
- wyświetlanie,
- dodawanie,
- modyfikowanie oraz
- usuwanie zadań do zrobienia.

## Struktura metakursu *Programowanie aplikacji webowych*

### JavaScript

Na początku (w 1. module kursu JavaScript) będzie to możliwe za pomocą poleceń napisanych przez nas kodem (poleceniami w czystym) JavaScript w konsoli.

Później (Moduł 2. kursu JavaScript), stworzymy i będziemy używać własnych funkcji, które zostaną zapisane w pliku bezpośrednio w przeglądarce, dzięki czemu nasz kod zostanie zachowany nawet po przeładowaniu strony oraz będziemy mogli go uruchomić w konsoli. W ten sposób powstanie aplikacja w wersji 1.0.

### Local Storage

Natomiast w kursie Local Storage rozbudujemy naszą aplikację w ten sposób, że zadania zostaną zapisane w przeglądarce za pośrednictwem wbudowanej funkcjonalności *localStorage*, która jest swego rodzaju magazynem danych. W ten sposób powstanie aplikacja w wersji 2.0.

### HTML i DOM

Z kolei później poznamy minimum HTML oraz podstawy DOM, który integruje HTML i JavaScript, dzięki czemu przeniesiemy naszą aplikację z konsoli do przeglądarki i stworzymy prosty UI zintegrowany z kodem JavaScript.

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
