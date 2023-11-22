<script lang="ts">
	import heroImg from './javascript-logo.svg';
	import HeroSection from '$lib/components/HeroSection.svelte';
</script>

<main class="container">
	<HeroSection
		h1FirstSmallText="Darmowy kurs"
		h1LargeText="Podstawy Javascript. Pierwsza aplikacja w konsoli"
		descriptionParagraphs={[
			'Naucz się podstaw Javascript - najbardziej popularnego języka programowania!',
			'W trakcie kursu stworzysz działającą aplikację do zarządzania Twoimi zadaniami bezpośrednio w konsoli Twojej przeglądarki!'
		]}
		btnHref="/kursy/podstawy-javascript-pierwsza-aplikacja-w-konsoli-darmowy-kurs/wprowadzenie"
		btnCTA="Zacznij kurs!"
		imgSrc={heroImg}
		handleMount={() => {}}
	/>
</main>
