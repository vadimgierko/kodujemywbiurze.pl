<script lang="ts">
	import { marked } from 'marked';

	export let data;

	const { content } = data;
</script>

<svelte:head>
	<title>Kodujemy w biurze | Podstawy JavaScript</title>
	<meta
		name="description"
		content="Poznaj podstawy języka JavaScript, takie jak zmienne, wartości, tablice, funkcje poprzez stworzenie prostej aplikacji do zarządzania zadaniami, która działa w konsoli przeglądarki"
	/>
</svelte:head>

<div>{@html marked(content)}</div>
