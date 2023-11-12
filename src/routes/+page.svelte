<script lang="ts">
	import { isIndexPage } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => isIndexPage.set(true));
</script>

<svelte:head>
	<title>Kodujemy w biurze</title>
	<meta
		name="description"
		content="Eksperymentalna darmowa interaktywna strona edukacyjna do zachęcenia do nauki programowania webowego dla
  pracowników biurowych. Poznaj podstawy języka JavaScript, takie jak zmienne, wartości, tablice, funkcje poprzez stworzenie prostej aplikacji do zarządzania zadaniami, która działa w konsoli przeglądarki"
	/>
</svelte:head>

<!-- <figure>
	<img
		src="/img/kodujemy-w-biurze-baner-vadim-gierko.jpg"
		width="100%"
		alt="baner strony kodujemy w biurze pl z laptopem, kawą i notesem na biurku"
	/>
	<figcaption>
		źródło obrazka: <a
			href="https://pl.freepik.com/darmowe-zdjecie/uzgodnienie-z-laptopem-i-roslina_8989399.htm#query=coffee%20computer&position=10&from_view=search&track=ais"
			target="_blank">Freepik</a
		>
	</figcaption>
</figure> -->

<main>
	<header>
		<h1>Witaj na stronie <em>Kodujemy w biurze</em>!</h1>

		<hr />

		<p>
			<strong>Nauka programowania webowego w przerwach między zadaniami w biurze?</strong>
		</p>

		<p>Z kodujemywbiurze.pl jest to możliwe!</p>
		<p>
			<strong>
				Zacznij programować od razu bezpośrednio w przeglądarce, tworząc <em>(na początek)</em> prostą
				aplikację do zarządzania Twoimi zadaniami!
			</strong>
		</p>

		<a href="/wprowadzenie">
			<button>Zacznij zabawę z kodem!</button>
		</a>
	</header>
</main>

<style>
	/* figure {
		position: absolute;
		left: 0;
		right: 0;
		top: 40px;
		z-index: 1;
	} */

	main {
		width: 60%;
		margin: 0 auto;
		text-align: center;
	}

	button {
		font-size: large;
		padding: 24px 48px;
		border-radius: 10px;
		background-color: rgb(0, 21, 255);
		border-color: rgb(0, 21, 255);
		color: white;
	}

	button:hover {
		background-color: rgba(0, 21, 255, 0.8);
	}

	@media screen and (max-width: 900px) {
		main {
			width: auto;
			margin: 0 1em;
		}
	}
</style>
