<script lang="ts">
	import { onMount } from 'svelte';
	import avatar from '../../routes/vadim-gierko-avatar.jpg';
	import { isIndexPage } from '$lib/stores';

	onMount(() => isIndexPage.set(true));
</script>

<svelte:head>
	<title>O autorze | kodujemywbiurze.pl</title>
	<meta property="og:title" content="O autorze | kodujemywbiurze.pl" />

	<meta
		name="description"
		content="Cześć👋 Nazywam się Vadim Gierko. Pracuję w biurze 🏢 i programuję 💻 od 3 lat, stąd też pomysł na stworzenie tej strony!"
	/>
	<meta
		property="og:description"
		content="Cześć👋 Nazywam się Vadim Gierko. Pracuję w biurze 🏢 i programuję 💻 od 3 lat, stąd też pomysł na stworzenie tej strony!"
	/>

	<meta
		property="og:image"
		content="https://www.kodujemywbiurze.pl/content/vadim-gierko-avatar.jpg"
	/>

	<meta property="og:url" content="https://www.kodujemywbiurze.pl/o-autorze" />
	<meta property="og:type" content="article" />
</svelte:head>

<main class="container">
	<div class="avatar-container">
		<img
			src={avatar}
			width="100%"
			alt="Vadim Gierko autor strony kodujemywbiurze.pl zdjęcie profilowe"
		/>
	</div>
	<h1>Cześć 👋</h1>
	<p>Nazywam się Vadim Gierko.</p>
	<p>
		<strong>Pracuję w biurze 🏢</strong> (a dokładniej w Urzędzie) ➕
		<strong>programuję 💻 od 3 lat</strong>.
	</p>
	<p>Stąd też pomysł na stworzenie tej strony!</p>

	<hr />

	<p>
		<strong>Jestem programistycznym samoukiem</strong><br /> i tworzę strony oraz aplikacje webowe za
		pomocą takich technologii, jak:
	</p>

	<h2>Języki</h2>

	<div>
		<img
			src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
			height="35"
		/>
		<img
			src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
			height="35"
		/>
		<img
			src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
			height="35"
		/>
		<img
			src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
			height="35"
		/>
		<img
			src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white"
			height="35"
		/>
	</div>

	<h2>Frameworki</h2>

	<div>
		<img
			src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
			height="35"
		/>
		<img
			src="https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00"
			height="35"
		/>
		<img
			src="https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=Svelte&logoColor=white"
			height="35"
		/>
		<img
			src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
			height="35"
		/>
	</div>

	<h2>Biblioteki</h2>

	<div>
		<img
			src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
			height="35"
		/>
		<img
			src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
			height="35"
		/>
	</div>

	<h2>Baza danych, autoryzacja użytkowników oraz płatności</h2>

	<div>
		<img
			src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black"
			height="35"
		/>
		<img
			src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white"
			height="35"
		/>
	</div>

	<h2>Deployment</h2>

	<div>
		<img
			src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"
			height="35"
		/>
		<img
			src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white"
			height="35"
		/>
	</div>

	<h2>Kontrola wersji oraz edytor kodu</h2>

	<div>
		<img
			src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
			height="35"
		/>
		<img
			src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"
			height="35"
		/>
	</div>

	<br />
	<hr />

	<p>I teraz chciałbym podzielić się swoją wiedzą i doświadczeniem z każdym!</p>
	<p>
		Jeśli chcesz wiedzieć więcej nt. tego, czym się zajmuję (w szczególności, co robiłem wcześniej)
		i kim jestem, zapraszam do odwiedzenia mojej strony www <a
			href="https://www.vadimgierko.com"
			target="_blank">vadimgierko.com</a
		>!
	</p>
</main>

<style scoped>
	main {
		text-align: center;
	}

	.avatar-container {
		max-width: 200px;
		margin: 0 auto;
		padding-top: 2em;

		& img {
			border-radius: 50%;
		}
	}

	h1 {
		font-size: 2.5rem;
	}

	h2 {
		padding: 1em 0;
	}
</style>
