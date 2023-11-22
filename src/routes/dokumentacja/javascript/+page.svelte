<script lang="ts">
	import heroImg from '../../kursy/podstawy-javascript-pierwsza-aplikacja-w-konsoli-darmowy-kurs/javascript-logo.svg';
	import HeroSection from '$lib/components/HeroSection.svelte';
</script>

<main class="container">
	<HeroSection
		h1FirstSmallText="Dokumentacja"
		h1LargeText="Javascript"
		descriptionParagraphs={[
			'Dokumentacja JavaScript zawiera zestaw haseł, które opisują składnię języka, metody, funkcje, obiekty i inne aspekty potrzebne do kodowania w JavaScript. Nie jest to zbiór kompletny, zawiera natomiast wszystkie pojęcia, z jakimi zetkniesz się w tutorialach omawianych na tej stronie.',
			'W pewnym sensie jest to osobny, bardziej "suchy" i równoległy kurs, do którego możesz zajrzeć, by pogłębić wiedzę zaczerpniętą z praktycznych kursów.'
		]}
		btnHref="/dokumentacja/javascript/wprowadzenie"
		btnCTA="Przejdź do dokumentacji!"
		imgSrc={heroImg}
		handleMount={() => {}}
	/>
</main>
