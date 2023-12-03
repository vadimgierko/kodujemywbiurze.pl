<script lang="ts">
	import { isIndexPage } from '$lib/stores';
	import heroImg from './hero-img-square.png';
	import HeroSection from '$lib/components/HeroSection.svelte';
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
			'Zacznij pisać kod swojej aplikacji bezpośrednio w przeglądarce już od pierwszej lekcji!'
		]}
		btnHref="/kursy/javascript"
		btnCTA="Zacznij kurs!"
		imgSrc={heroImg}
		handleMount={() => isIndexPage.set(true)}
	/>
</main>
