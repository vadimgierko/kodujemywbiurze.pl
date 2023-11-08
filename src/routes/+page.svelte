<script lang="ts">
	import { marked } from 'marked';
	import { onMount } from 'svelte';
	import slugify from 'slugify';

	export let data;

	const { content } = data;

	function customSlugify(text: string) {
		slugify.extend({ '|': '-' });
		return slugify(text, { lower: true, strict: true, remove: /[*+~.()'"!:@]|/g });
	}

	let headers: string[] = [];

	onMount(() => {
		// find all headers:
		const h2s = document.querySelectorAll('h2');

		// add id to every header:
		h2s.forEach((h2) => {
			h2.setAttribute('id', customSlugify(h2.textContent as string));

			headers = [...headers, h2.textContent as string];
		});
	});
</script>

<svelte:head>
	<title>Kodujemy w biurze</title>
	<meta
		name="description"
		content="Eksperymentalna darmowa interaktywna strona edukacyjna do zachęcenia do nauki programowania webowego dla
  pracowników biurowych. Poznaj podstawy języka JavaScript, takie jak zmienne, wartości, tablice, funkcje poprzez stworzenie prostej aplikacji do zarządzania zadaniami, która działa w konsoli przeglądarki"
	/>
</svelte:head>

<div id="container">
	{#if headers.length}
		<aside>
			<h3 style="text-align: center;">Spis treści</h3>
			<nav>
				<ul>
					{#each headers as header}
						<li>
							<a href={`#${customSlugify(header)}`}>{header}</a>
						</li>
					{/each}
				</ul>
			</nav>
		</aside>
	{/if}
	<main>
		<header>
			<h1>Witaj na stronie <em>Kodujemy w biurze</em>!</h1>
			<hr />
			<p style="text-align: center;">
				<strong>
					Spędź wolne chwile w biurze, poznając w przystępny i interaktywny sposób podstawy
					programowania webowego (w najbardziej popularnym języku programowania <em>JavaScript</em
					>), zamieniając swoją przeglądarkę w edytor kodu i prostą aplikację do zarządzania
					zadaniami!
				</strong>
			</p>
		</header>

		<figure>
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
		</figure>

		<article>
			{@html marked(content)}
		</article>
	</main>
</div>

<style>
	#container {
		margin-top: 40px;
	}

	/* Styles for screens with a minimum width of 992px (typical laptop) */
	@media screen and (min-width: 992px) {
		/* Your laptop-specific CSS styles here */
		aside {
			height: calc(100% - 40px);
			width: 30%;
			margin-top: 40px;
			position: fixed;
			z-index: 1;
			top: 0;
			left: 0;
			overflow-x: hidden;
		}

		main {
			/* margin-top: 40px; */
			margin-left: 30%; /* Same as the width of the sidenav */
			padding: 0 1em;
		}
	}

	/* Styles for screens with a maximum width of 991px (typical mobile) */
	@media screen and (max-width: 991px) {
		/* Your mobile-specific CSS styles here */
		aside {
			display: none;
		}

		main {
			width: auto;
			margin-left: 1em;
			margin-right: 1em;
		}
	}
</style>
