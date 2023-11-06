<script lang="ts">
	import { marked } from 'marked';

	export let data;

	const { content } = data;
</script>

<svelte:head>
	<title>Kodujemy w biurze</title>
	<meta
		name="description"
		content="Eksperymentalna darmowa interaktywna strona edukacyjna do zachęcenia do nauki programowania webowego dla
  pracowników biurowych. Poznaj podstawy języka JavaScript, takie jak zmienne, wartości, tablice, funkcje poprzez stworzenie prostej aplikacji do zarządzania zadaniami, która działa w konsoli przeglądarki"
	/>
</svelte:head>

<article>
	{@html marked(content)}
</article>
