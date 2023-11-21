<script lang="ts">
	import { isIndexPage } from '$lib/stores';
	import { onMount } from 'svelte';
	import heroImg from './hero-img.png';

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

<main class="container">
	<div class="hero-wrapper">
		<h1>
			Witaj na stronie
			<br />
			<span id="page-name">Kodujemy w biurze!</span>
		</h1>

		<div class="hero-content">
			<div class="left">
				<p>Naucz się programowania webowego<br />w przerwach między zadaniami w biurze!</p>

				<p>Zacznij pisać kod bezpośrednio w swojej przeglądarce!</p>

				{#if firstHeaderSlug}
					<a
						href={`/kursy/podstawy-javascript-pierwsza-aplikacja-w-konsoli-darmowy-kurs/${firstHeaderSlug}`}
					>
						<button class="bg-primary" id="cta-btn">Zacznij kodować w biurze!</button>
					</a>
				{/if}
			</div>

			<img class="right" src={heroImg} />
		</div>
	</div>
</main>

<style scoped>
	/* STYLES NOT DEPENDENT ON SCREEN SIZE */
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: calc(100dvh - 40px - 90px);
		line-height: normal;
		overflow: hidden;
		/* margin: 0 auto; */
	}

	.hero-wrapper {
		text-align: center;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	/* MEDIA QUERIES */

	/* MOBILE */

	h1 {
		font-size: 1rem;
		margin: 1.5em 0;
	}

	#page-name {
		font-size: 2rem;
		font-weight: 800;
	}

	p {
		margin: 1em 0;
	}

	button {
		margin-top: 2em;
		font-size: 1rem;
		font-weight: 600;
		padding: 1em 2em;
		border-radius: 18px;
		color: rgb(0, 0, 0);
	}

	img {
		position: relative;
		z-index: -1;
		margin-top: -3em;
		width: 100%;
		max-width: 400px;
	}

	/* Small devices (landscape phones, 576px and up) */

	@media screen and (min-width: 576px) {
		h1 {
			font-size: 1.2rem;
			margin-bottom: 2.2em;
		}

		#page-name {
			font-size: 3.2rem;
			font-weight: 800;
		}

		p {
			font-size: 1.3rem;
		}

		img {
			margin-top: -5em;
			width: 600px;
			max-width: 600px;
		}
	}

	/* Medium devices (tablets, 768px and up) */
	@media screen and (min-width: 768px) and (orientation: portrait) {
		h1 {
			font-size: 1.5rem;
			margin-bottom: 1em;
		}

		#page-name {
			font-size: 4rem;
			font-weight: 800;
		}

		p {
			font-size: 1.3rem;
			text-align: center;
		}

		img {
			width: 100%;
		}
	}

	@media screen and (min-width: 768px) and (orientation: landscape) {
		.hero-content {
			display: flex;
			flex-direction: row;
			text-align: start;
		}

		.left {
			width: 40%;
		}

		.right {
			width: 60%;
		}

		h1 {
			font-size: 1.5rem;
			margin-bottom: 2em;
		}

		#page-name {
			font-size: 4rem;
			font-weight: 800;
		}

		p {
			font-size: 1.3rem;
			text-align: start;
		}

		img {
			width: 100%;
		}
	}

	/* Large devices (desktops, 992px and up) */
	@media screen and (min-width: 992px) and (orientation: portrait) {
		h1 {
			margin-top: 1em;
			font-size: 1.6rem;
			margin-bottom: 1em;
		}

		#page-name {
			font-size: 4.2rem;
			font-weight: 800;
		}

		p {
			font-size: 1.6rem;
		}

		button {
			margin-top: 32px;

			font-size: 1.2rem;
			font-weight: 600;
			padding: 1.2em 2.4em;
			border-radius: 20px;
			color: rgb(0, 0, 0);
		}

		img {
			margin-top: -8em;
			max-width: 700px;
			width: 100%;
		}
	}

	@media screen and (min-width: 992px) and (orientation: landscape) {
		.hero-content {
			display: flex;
			flex-direction: row;
			text-align: start;
		}

		.left {
			width: 45%;
		}

		.right {
			width: 55%;
		}

		h1 {
			margin-top: 1em;
			font-size: 1.6rem;
			margin-bottom: 1em;
		}

		#page-name {
			font-size: 4.2rem;
			font-weight: 800;
		}

		p {
			font-size: 1.6rem;
			text-align: start;
		}

		button {
			margin-top: 32px;

			font-size: 1.2rem;
			font-weight: 600;
			padding: 1.2em 2.4em;
			border-radius: 20px;
			color: rgb(0, 0, 0);
		}

		img {
			margin-top: -8em;
			max-width: 700px;
			width: 100%;
		}
	}

	/* Extra large devices (large desktops, 1200px and up) */
	@media screen and (min-width: 1200px) and (orientation: landscape) {
		.left {
			width: 45%;
		}

		.right {
			width: 55%;
		}

		h1 {
			font-size: 1.6rem;
			margin-bottom: 1em;
		}

		#page-name {
			font-size: 4.2rem;
			font-weight: 800;
		}

		p {
			font-size: 1.8rem;
			text-align: start;
		}

		button {
			margin-top: 32px;

			font-size: 1.2rem;
			font-weight: 600;
			padding: 1.2em 2.4em;
			border-radius: 20px;
			color: rgb(0, 0, 0);
		}

		img {
			margin-top: -9em;
			max-width: 700px;
			width: 100%;
		}
	}
</style>
