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
	<div id="content-container">
		<h1>
			Witaj na stronie
			<br />
			<span id="page-name">Kodujemy w biurze!</span>
		</h1>

		<img src={heroImg} alt="mężczyzna siedzący przy biurku przed komputerem z kubkiem" />

		<p>Naucz się programowania webowego<br />w przerwach między zadaniami w biurze!</p>

		<p>Zacznij pisać kod bezpośrednio w swojej przeglądarce!</p>

		{#if firstHeaderSlug}
			<a href={firstHeaderSlug}>
				<button class="bg-primary" id="cta-btn">Zacznij kodować w biurze!</button>
			</a>
		{/if}
	</div>
</main>

<style scoped>
	/* STYLES NOT DEPENDENT ON SCREEN SIZE */

	main {
		flex-grow: 1;
		line-height: normal;
		overflow: hidden;
	}

	/* MEDIA QUERIES */

	/* MOBILE */
	main {
		text-align: center;
		display: flex;
		flex-direction: column;
		height: calc(100dvh - 40px - 90px);
		min-height: calc(100dvh - 40px - 90px);
		justify-content: center;
	}

	h1 {
		font-size: 18px;
		margin-top: 1rem;
	}

	#page-name {
		font-size: 32px;
		font-weight: 800;
	}

	button {
		margin-top: 18px;

		font-size: 16px;
		font-weight: 600;
		padding: 12px 24px;
		border-radius: 20px;
		color: rgb(0, 0, 0);
	}

	img {
		width: 100%;
		max-width: 400px;
		margin-top: -72px;
		margin-bottom: -32px;
	}

	/* Small devices (landscape phones, 576px and up) */
	@media screen and (min-width: 576px) {
		/* this is here to not fuck up styles... */
		main {
			/* RESET MOBILE STYLES */
			line-height: normal;
			text-align: start;
			display: block;
			position: relative;
			width: 100%;
		}

		/* Styles for small devices */
		h1 {
			text-align: start;
			font-size: 18px;
			margin-bottom: 40px;
		}

		#page-name {
			font-size: 52px;
			font-weight: 800;
		}

		p {
			width: 60%;
			font-size: 16px;
			margin-bottom: 20px;
		}

		button {
			margin-top: 20px;

			font-size: 16px;
			font-weight: 600;
			padding: 12px 24px;
			border-radius: 20px;
			color: rgb(0, 0, 0);
		}

		img {
			position: absolute;
			right: 0px;
			top: 0px;
			z-index: -1;
			width: 600px;
			max-width: 600px;
			margin-right: -64px;
			margin-top: 32px;
			margin-bottom: 0px;
		}
	}

	/* Medium devices (tablets, 768px and up) */
	@media screen and (min-width: 768px) {
		/* Styles for medium devices */
		h1 {
			font-size: 20px;
			margin-bottom: 48px;
		}

		#page-name {
			font-size: 56px;
			font-weight: 800;
		}

		p {
			width: 70%;
			font-size: 18px;
			margin-bottom: 24px;
		}

		button {
			margin-top: 24px;

			font-size: 16px;
			font-weight: 600;
			padding: 16px 32px;
			border-radius: 20px;
			color: rgb(0, 0, 0);
		}

		img {
			position: absolute;
			right: 0px;
			top: 0px;
			z-index: -1;
			width: 600px;
			max-width: 600px;
			margin-right: -64px;
			margin-top: 32px;
		}
	}

	/* Large devices (desktops, 992px and up) */
	@media screen and (min-width: 992px) {
		/* Styles for large devices */
		h1 {
			font-size: 24px;
			margin-bottom: 56px;
		}

		#page-name {
			font-size: 64px;
			font-weight: 800;
		}

		p {
			width: 60%;
			font-size: 18px;
			margin-bottom: 32px;
		}

		button {
			margin-top: 32px;

			font-size: 18px;
			font-weight: 600;
			padding: 20px 40px;
			border-radius: 20px;
			color: rgb(0, 0, 0);
		}

		img {
			position: absolute;
			right: 0px;
			top: 0px;
			z-index: -1;
			width: 700px;
			max-width: 700px;
			margin-right: -60px;
			margin-top: -80px;
		}
	}

	/* Extra large devices (large desktops, 1200px and up) */
	@media screen and (min-width: 1200px) {
		/* Styles for extra large devices */
		h1 {
			font-size: 32px;
			margin-bottom: 48px;
		}

		#page-name {
			font-size: 72px;
			font-weight: 800;
		}

		p {
			width: 60%;
			font-size: 20px;
			margin-bottom: 24px;
		}

		button {
			margin-top: 24px;

			font-size: 20px;
			font-weight: 600;
			padding: 24px 48px;
			border-radius: 20px;
			color: rgb(0, 0, 0);
		}

		img {
			position: absolute;
			right: 0px;
			top: 0px;
			z-index: -1;
			width: 770px;
			max-width: 770px;
			margin-right: -80px;
			margin-top: -120px;
		}
	}
</style>
