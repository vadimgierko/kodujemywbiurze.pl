<script lang="ts">
	import MoonIcon from '$lib/components/icons/MoonIcon.svelte';
	import SunIcon from '$lib/components/icons/SunIcon.svelte';
	import { onMount } from 'svelte';

	let theme: 'light' | 'dark';

	function switchMode() {
		if (theme === 'light') {
			document.documentElement.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
			theme = 'dark';
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
			theme = 'light';
		}
	}

	onMount(() => {
		theme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark';
	});
</script>

<header class="header-container">
	<div class="header-content">
		<div><a href="/" id="nav-brand"><strong>Kodujemy w biurze</strong></a></div>
		<div>
			<span on:click={switchMode} id="theme-icon">
				{#if theme === 'dark'}
					<SunIcon />
				{:else}
					<MoonIcon />
				{/if}
			</span>
		</div>
	</div>
</header>

<style>
	.header-container {
		position: fixed;
		left: 0;
		right: 0;
		padding: 0 1em;

		width: auto;
		height: 40px;
	}

	.header-content {
		display: flex;
		justify-content: space-between;
		color: white;
	}

	#nav-brand {
		text-decoration: none;
		font-size: large;
	}

	.header-content a,
	#theme-icon {
		color: white;
	}

	.header-content a:hover,
	#theme-icon:hover {
		color: rgba(255, 255, 255, 0.7);
	}

	/* Styles for screens with a minimum width of 1200px (typical desktop) */
	@media screen and (min-width: 1200px) {
		/* Your desktop-specific CSS styles here */
		.header-content {
			max-width: 1140px;
			margin: 0 auto;
		}
	}

	/* Styles for screens with a minimum width of 992px (typical laptop) */
	@media screen and (min-width: 992px) and (max-width: 1199px) {
		/* Your laptop-specific CSS styles here */
		.header-content {
			max-width: 970px;
			margin: 0 auto;
		}
	}

	/* Styles for screens with a maximum width of 991px (typical mobile) */
	@media screen and (max-width: 991px) {
		/* Your mobile-specific CSS styles here */
		.header-content {
			max-width: 90vw;
			margin: 0 auto;
		}
	}

	#theme-icon {
		cursor: pointer;
	}
</style>
