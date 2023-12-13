<script lang="ts">
	import { isIndexPage } from '$lib/stores';
	import heroImg from './hero-img-square.png';

	import HeroSection from '$lib/components/HeroSection.svelte';
	import AuthorSection from '$lib/components/homepage/AuthorSection.svelte';
	import AboutSection from '$lib/components/homepage/AboutSection.svelte';
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

<main>
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
		additionalClasses="container"
	/>

	<p style="text-align: center; padding-bottom: 2rem">Dowiedz się więcej 👇</p>

	<AboutSection />

	<AuthorSection />
</main>
