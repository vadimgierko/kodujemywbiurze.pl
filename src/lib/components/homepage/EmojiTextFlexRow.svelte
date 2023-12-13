<script lang="ts">
	export let items: { text: string; emoji: string }[];
	export let header: string = '';
</script>

<section>
	{#if header.length}
		<h2 class="container">{header}</h2>
	{/if}
	<div class="emoji-text-row container">
		{#each items as { text, emoji }}
			<div class="emoji-text-div">
				<div class="emoji">{emoji}</div>
				<div class="text">{text}</div>
			</div>
		{/each}
	</div>
</section>

<style scoped>
	* {
		font-size: 1.5rem;
		line-height: normal;
		background-color: var(--section-background-color);
	}

	.emoji-text-row {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		padding: 4rem 0;
	}

	.emoji-text-div {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem;
		text-align: center;
	}

	.emoji {
		font-size: 100px;
		line-height: 1; /* Ensures proper vertical alignment */
	}

	.text {
		margin-top: 2rem;
	}

	h2 {
		font-size: 2.5rem;
		padding-top: 1em;
	}

	@media screen and (max-width: 568px) {
		h2 {
			font-size: 2rem;
		}
	}
</style>
