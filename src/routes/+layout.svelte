<script lang="ts">
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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						id="sun-icon"
						><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line
							x1="12"
							y1="21"
							x2="12"
							y2="23"
						/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line
							x1="18.36"
							y1="18.36"
							x2="19.78"
							y2="19.78"
						/><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line
							x1="4.22"
							y1="19.78"
							x2="5.64"
							y2="18.36"
						/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg
					>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						id="moon-icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg
					>
				{/if}
			</span>
		</div>
	</div>
</header>

<main>
	<slot />
</main>

<footer>
	<hr />
	<p>&copy; 2023 Vadim Gierko</p>
</footer>

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

	main {
		margin-top: 40px;
		flex-grow: 1;
	}

	footer {
		text-align: center;
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
		vertical-align: -0.3em;
		cursor: pointer;
	}
</style>
