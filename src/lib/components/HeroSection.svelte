<script lang="ts">
	import { onMount } from 'svelte';

    // we need to pass this to the component:
    export let imgSrc: string

    export let btnHref: string
    export let btnCTA: string

    export let h1FirstSmallText: string
    export let h1LargeText: string

    export let descriptionParagraphs: string[]
    
    export let handleMount: () => void

	onMount(() => handleMount());
</script>

<main class="container">
	<div class="hero-wrapper">
		<h1>
			{h1FirstSmallText}
			<br />
			<span id="page-name">{h1LargeText}</span>
		</h1>

		<div class="hero-content">
			<div class="left">
				{#each descriptionParagraphs as p}
                    <p>{p}</p>
                {/each}

					<a href={btnHref}>
						<button class="bg-primary" id="cta-btn">{btnCTA}</button>
					</a>
			
			</div>

			<div class="right">
                <img src={imgSrc} width="100%" />
            </div>
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

    .right {
        margin-top: 2em;
    }

	img {
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
	}

    /* !!! HERE .hero-content becomes flex !!! */
	@media screen and (min-width: 768px) and (orientation: landscape) {
		.hero-content {
			display: flex;
			flex-direction: row;
			text-align: start;
		}

		.left {
			width: 60%;
		}

		.right {
			width: 40%;
            margin-top: 0;
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
			max-width: 700px;
		}
	}

	@media screen and (min-width: 992px) and (orientation: landscape) {
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
			max-width: 700px;
		}
	}

	/* Extra large devices (large desktops, 1200px and up) */
	@media screen and (min-width: 1200px) and (orientation: landscape) {
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
			max-width: 700px;
		}
	}
</style>