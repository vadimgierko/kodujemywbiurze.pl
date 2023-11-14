<script lang="ts">
	import MoonIcon from '$lib/icons/MoonIcon.svelte';
	import SunIcon from '$lib/icons/SunIcon.svelte';
	import ThreeDotsVertical from '$lib/icons/ThreeDotsVertical.svelte';
	import ThreeDotsHorizontal from '$lib/icons/ThreeDotsHorizontal.svelte';
	import { onMount } from 'svelte';
	import { showOffset, isIndexPage } from '$lib/stores';

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
		<!-- MENU TOGGLE -->
		{#if !$isIndexPage}
			<span on:click={() => showOffset.set(!$showOffset)} class="icon" id="menu-toggle">
				{#if $showOffset}
					<ThreeDotsHorizontal />
				{:else}
					<ThreeDotsVertical />
				{/if}
			</span>
		{/if}

		<!-- NAV BRAND -->
		<a href="/" id="nav-brand"><strong>Kodujemy w biurze</strong></a>

		<!-- THEME TOGGLE -->
		<span on:click={switchMode} class="icon" id="theme-toggle">
			{#if theme === 'dark'}
				<SunIcon />
			{:else}
				<MoonIcon />
			{/if}
		</span>
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
		padding-top: 3px;
	}

	.header-content a,
	.icon {
		color: white;
	}

	.header-content a:hover,
	.icon:hover {
		color: rgba(255, 255, 255, 0.7);
	}

	/* Styles for screens with a minimum width of 992px (typical laptop) */
	@media screen and (min-width: 992px) {
		/* Your laptop-specific CSS styles here */
		#menu-toggle {
			visibility: hidden;
		}
	}

	/* Styles for screens with a maximum width of 991px (typical mobile) */
	@media screen and (max-width: 991px) {
		/* Your mobile-specific CSS styles here */
		#menu-toggle {
			visibility: visible;
		}
	}
</style>
