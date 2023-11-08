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

	#theme-icon {
		cursor: pointer;
	}
</style>
