<script lang="ts">
	import { isIndexPage } from '$lib/stores';
	import { onMount } from 'svelte';

	export let data;

	const { firstHeaderSlug } = data;

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

		{#if firstHeaderSlug}
			<a href={firstHeaderSlug}>
				<button id="cta-btn">Zacznij zabawę z kodem!</button>
			</a>
		{/if}
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
		flex-grow: 1;
		width: 60%;
		margin: 0 auto;
		text-align: center;
	}

	button {
		font-size: large;
		padding: 24px 48px;
		border-radius: 10px;
		color: white;
	}

	@media screen and (max-width: 900px) {
		main {
			width: auto;
			margin: 0 1em;
		}

		h1 {
			font-size: 2.074rem;
		}
	}
</style>
