<script lang="ts">
	import { isIndexPage } from '$lib/stores';
	import heroImg from './hero-img-square.png';
	import HeroSection from '$lib/components/HeroSection.svelte';
</script>

<svelte:head>
	<title>Kodujemy w biurze</title>
	<meta
		name="description"
		content="Eksperymentalna darmowa interaktywna strona edukacyjna do zachęcenia do nauki programowania webowego dla
  pracowników biurowych. Poznaj podstawy języka JavaScript, takie jak zmienne, wartości, tablice, funkcje poprzez stworzenie prostej aplikacji do zarządzania zadaniami, która działa w konsoli przeglądarki"
	/>
</svelte:head>

<main class="container">
	<HeroSection
		h1FirstSmallText="Witaj na stronie"
		h1LargeText="Kodujemy w biurze!"
		descriptionParagraphs={[
			'Naucz się programowania webowego w przerwach między zadaniami w biurze!',
			'Zacznij pisać kod pierwszej aplikacji bezpośrednio w swojej przeglądarce!'
		]}
		btnHref="/kursy/javascript"
		btnCTA="Zacznij kodować w biurze!"
		imgSrc={heroImg}
		handleMount={() => isIndexPage.set(true)}
	/>
</main>
