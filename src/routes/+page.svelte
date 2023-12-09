<script lang="ts">
	import { isIndexPage } from '$lib/stores';
	import heroImg from './hero-img-square.png';

	import HeroSection from '$lib/components/HeroSection.svelte';
	import { marked } from 'marked';
	import AuthorSection from '$lib/components/AuthorSection.svelte';

	const about = `
- **Pracujesz w biurze?**
- **Masz do dyspozycji komputer/ laptop, Internet i kubek kawy/ herbaty?**
- A może tak spróbujesz przekonać się, czy **kodowanie może być równie dobrym wypełniaczem Twojego czasu w biurze, jak skrollowanie Fejsa czy Insta**?

*Kodujemy w biurze* powstało, by **zachęcić pracowników biurowych do spróbowania swoich sił w kodowaniu** webowym w przyjazny i nie wymagający żadnych konfiguracji sposób.

Chodzi mi przede wszystkim o **pobudzenie Twojej ciekawości** i pokazanie, że **pisanie kodu jest dostępne dla każdego** i może być świetną **zabawą oraz rozrywką intelektualną** (w szczególności w biurze 😉)!

Ponieważ wolę **uczyć się nowych rzeczy w praktyce, widząc natychmiastowe rezultaty** mojej nauki i pracy, dlatego w trakcie kursów na tej stronie (na razie opublikowano [1 kurs podstaw JavaScript](/kursy/javascript)):

- od samego początku **będziemy tworzyć coraz bardziej rozbudowaną aplikację do zarządzania listą zadań do zrobienia, która będzie działać w konsoli naszej przeglądarki bezpośrednio na tej stronie**,
- **przy okazji** tworzenia aplikacji **opanujemy podstawy języka JavaScript** - <a href="https://bulldogjob.pl/readme/najpopularniejsze-jezyki-programowania-2020" target="_blank">najbardziej popularnego języka programowania</a>, który sprawia, że strony www i aplikacje webowe są interaktywne.

**PS.** *de facto* stworzymy co najmniej kilka samodzielnych, samowystarczalnych i coraz bardziej rozbudowanych i zaawansowanych wersji wspomnianej aplikacji, rozbudowując ją przy okazji poznawania kolejnych zagadnień z języka JavaScript (a później też HTML i CSS w kolejnych nowych kursach). Każda z wersji aplikacji będzie całością samą w sobie i można będzie ich używać osobno - te pierwsze wersje będą działać tylko w konsoli przeglądarki, kolejne natomiast będą możliwe do pobrania.

W ramach rozbudowy niniejszej strony i dodawania kolejnych lekcji i kursów (co zależy od Waszego zainteresowania projektem, dlatego zachęcam do polubienia i śledzenia profilu na <a href="https://www.facebook.com/kodujemywbiurze" target="_blank">Facebooku</a> i <a href="https://www.linkedin.com/company/kodujemywbiurze" target="_blank">LinkedIn</a>), będziemy przekształcać i dalej rozwijać tę aplikację w aplikację z pełnego zdarzenia - z interfacem użytkownika, bazą danych, rejestracją użytkowników itd.

*Sky is the limit*, aczkolwiek na początek w ramach eksperymentu ograniczymy się do funkcjonalności, którymi dysponuje nasza przeglądarka. Dlatego zachęcam do polubienia profili tej strony w social media, by być na bieżąco z nowymi lekcjami i kursami, które będą sukcesywnie dodawane.

Mam nadzieję, że kiedy dobrniesz do końca [pierwszego (i na razie jedynego) tutoriala](/kursy/javascript), będziesz chciał/a więcej! Jeśli tak będzie, to daj mi znać, że jesteś zainteresowany/a dalszymi lekcjami w tym samym stylu.
	`;
</script>

<svelte:head>
	<title>Kodujemy w biurze</title>
	<meta property="og:title" content="Kodujemy w biurze" />

	<meta
		name="description"
		content="Naucz się tworzyć aplikacje webowe i strony www za pomocą JavaScript, HTML i CSS... w przerwach między zadaniami w biurze!"
	/>
	<meta
		property="og:description"
		content="Naucz się tworzyć aplikacje webowe i strony www za pomocą JavaScript, HTML i CSS... w przerwach między zadaniami w biurze!"
	/>

	<meta
		property="og:image"
		content="/content/kursy/javascript/kodujemy-w-biurze-pl-strona-internetowa-screenshot.jpg"
	/>

	<meta property="og:url" content="https://www.kodujemywbiurze.pl" />
	<meta property="og:type" content="website" />
</svelte:head>

<main class="container">
	<HeroSection
		h1FirstSmallText="Witaj na stronie"
		h1LargeText="Kodujemy w biurze!"
		descriptionParagraphs={[
			'Naucz się tworzyć aplikacje webowe i strony www... w przerwach między zadaniami w biurze 😏',
			'Zacznij pisać kod swojej pierwszej aplikacji bezpośrednio w przeglądarce już od pierwszej lekcji!'
		]}
		btnHref="/kursy/javascript"
		btnCTA="Zacznij kodować!"
		imgSrc={heroImg}
		handleMount={() => isIndexPage.set(true)}
	/>

	<hr />

	<div class="about-section">
		{@html marked(about)}
	</div>

	<hr />

	<AuthorSection />
</main>
