<script lang="ts">
	import { isIndexPage } from '$lib/stores';
	import heroImg from './hero-img-square.png';

	import HeroSection from '$lib/components/HeroSection.svelte';
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
		content="https://www.kodujemywbiurze.pl/content/kursy/javascript/kodujemy-w-biurze-pl-strona-internetowa-screenshot.jpg"
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
		btnHref="/kursy/javascript/wprowadzenie-czym-jest-javascript-i-dlaczego-warto-sie-go-uczyc"
		btnCTA="Przejdź do kursu!"
		imgSrc={heroImg}
		handleMount={() => isIndexPage.set(true)}
		additionalClasses="container"
	/>

	<p style="text-align: center; padding-bottom: 2rem">Dowiedz się więcej 👇</p>

	<AboutSection />

	<div style="text-align: center;">
		<a href="/kursy/javascript/wprowadzenie-czym-jest-javascript-i-dlaczego-warto-sie-go-uczyc">
			<button class="bg-primary">Przejdź do kursu!</button>
		</a>
	</div>

	<br />
</main>

<style scoped>
	/* MEDIA QUERIES */

	/* MOBILE */

	button {
		margin-top: 2em;
		font-size: 1rem;
		font-weight: 600;
		padding: 1em 2em;
		border-radius: 18px;
		color: rgb(0, 0, 0);
	}

	/* Small devices (landscape phones, 576px and up) */

	@media screen and (min-width: 576px) {
	}

	/* Medium devices (tablets, 768px and up) */
	@media screen and (min-width: 768px) and (orientation: portrait) {
	}

	@media screen and (min-width: 768px) and (orientation: landscape) {
	}

	/* Large devices (desktops, 992px and up) */
	@media screen and (min-width: 992px) and (orientation: portrait) {
		button {
			margin-top: 32px;

			font-size: 1.2rem;
			font-weight: 600;
			padding: 1.2em 2.4em;
			border-radius: 20px;
			color: rgb(0, 0, 0);
		}
	}

	@media screen and (min-width: 992px) and (orientation: landscape) {
		button {
			margin-top: 32px;

			font-size: 1.2rem;
			font-weight: 600;
			padding: 1.2em 2.4em;
			border-radius: 20px;
			color: rgb(0, 0, 0);
		}
	}

	/* Extra large devices (large desktops, 1200px and up) */
	@media screen and (min-width: 1200px) and (orientation: landscape) {
		button {
			margin-top: 32px;

			font-size: 1.2rem;
			font-weight: 600;
			padding: 1.2em 2.4em;
			border-radius: 20px;
			color: rgb(0, 0, 0);
		}
	}
</style>
