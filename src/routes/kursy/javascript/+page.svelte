<script lang="ts">
	import heroImg from './javascript-logo.svg';
	import HeroSection from '$lib/components/HeroSection.svelte';
</script>

<svelte:head>
	<title>Kodujemy w biurze | Podstawy Javascript. Pierwsza aplikacja w konsoli</title>
	<meta
		property="og:title"
		content="Kodujemy w biurze | Podstawy Javascript. Pierwsza aplikacja w konsoli"
	/>

	<meta
		name="description"
		content="Naucz się podstaw Javascript i stwórz aplikację do zarządzania Twoimi zadaniami bezpośrednio w Twojej przeglądarce!"
	/>
	<meta
		property="og:description"
		content="Naucz się podstaw Javascript i stwórz aplikację do zarządzania Twoimi zadaniami bezpośrednio w Twojej przeglądarce!"
	/>

	<meta
		property="og:image"
		content="/content/kursy/javascript/kurs-podstawy-javascript-pierwsza-aplikacja-w-konsoli-screenshot.jpg"
	/>

	<meta property="og:url" content="https://www.kodujemywbiurze.pl/kursy/javascript" />
	<meta property="og:type" content="article" />
</svelte:head>

<main class="container">
	<HeroSection
		h1FirstSmallText="Darmowy kurs"
		h1LargeText="Podstawy Javascript. Pierwsza aplikacja w konsoli"
		descriptionParagraphs={[
			'Naucz się podstaw Javascript - najbardziej popularnego języka programowania!',
			'W trakcie kursu stworzysz działającą aplikację do zarządzania Twoimi zadaniami bezpośrednio w konsoli Twojej przeglądarki!'
		]}
		btnHref="/kursy/javascript/wprowadzenie"
		btnCTA="Zacznij kurs!"
		imgSrc={heroImg}
		handleMount={() => {}}
	/>
</main>
