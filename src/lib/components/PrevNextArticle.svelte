<script lang="ts">
	import ArrowLeft from '$lib/icons/ArrowLeft.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';

	export let nextSlug: string | null;
	export let prevSlug: string | null;
</script>

<div>
	{#if prevSlug}
		<nav>
			<ArrowLeft /> <a href={`/${prevSlug}`}>Poprzedni artykuł</a>
		</nav>
	{:else}
		<div />
	{/if}

	{#if nextSlug}
		<nav>
			<a href={`/${nextSlug}`}>Kolejny artykuł</a>
			<ArrowRight />
		</nav>
	{/if}
</div>

<style>
	div {
		display: flex;
		justify-content: space-between;
	}
</style>
