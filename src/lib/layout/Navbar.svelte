<script lang="ts">
	import MoonIcon from '$lib/icons/MoonIcon.svelte';
	import SunIcon from '$lib/icons/SunIcon.svelte';
	import ThreeDotsVertical from '$lib/icons/ThreeDotsVertical.svelte';
	import ThreeDotsHorizontal from '$lib/icons/ThreeDotsHorizontal.svelte';
	import { onMount } from 'svelte';
	import { showOffset, isIndexPage, isScreenLessThan992 } from '$lib/stores';
	import FacebookIcon from '$lib/icons/FacebookIcon.svelte';
	import LinkedInIcon from '$lib/icons/LinkedInIcon.svelte';

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

	let isNavbarExpanded = false;

	function toggleNavbar() {
		if (!isScreenLessThan992) return;

		isNavbarExpanded = !isNavbarExpanded;

		// console.log({ isNavbarExpanded });
	}

	onMount(() => {
		theme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark';
	});
</script>

<header>
	<div class="container">
		<div class="header-content">
			<div class="left-section" style={$isIndexPage ? 'display: none' : 'display: inline'}>
				<!-- MENU TOGGLE -->
				<span on:click={() => showOffset.set(!$showOffset)} class="icon" id="menu-toggle">
					{#if $showOffset}
						<ThreeDotsHorizontal />
					{:else}
						<ThreeDotsVertical />
					{/if}
				</span>
			</div>

			<div class="center-section">
				<!-- NAV BRAND -->
				<a href="/" id="nav-brand" class="nav-link"><strong>kodujemywbiurze.pl</strong></a>
			</div>

			<div class="right-section">
				{#if !$isScreenLessThan992}
					<a href="/wprowadzenie-co-stworzymy-i-czego-sie-nauczymy" class="nav-link">tutorial</a>
					<a href="/dokumentacja/javascript/wprowadzenie" class="nav-link">dokumentacja</a>
				{/if}

				<!-- THEME TOGGLE -->
				<span on:click={switchMode} class="icon nav-link" id="theme-toggle">
					{#if theme === 'dark'}
						<SunIcon />
					{:else}
						<MoonIcon />
					{/if}
				</span>

				<a href="https://www.facebook.com/kodujemywbiurze" target="_blank" class="nav-link"
					><FacebookIcon /></a
				>
				<a href="https://www.linkedin.com/company/kodujemywbiurze" target="_blank" class="nav-link"
					><LinkedInIcon /></a
				>

				<!-- NAVBAR TOGGLE -->
				<span
					style={!$isScreenLessThan992 ? 'display: none' : 'display: inline; padding-left: 0.5em'}
					on:click={toggleNavbar}
					class="icon"
					id="navbar-toggle"
				>
					{#if isNavbarExpanded}
						<ThreeDotsHorizontal />
					{:else}
						<ThreeDotsVertical />
					{/if}
				</span>
			</div>
		</div>

		{#if isScreenLessThan992 && isNavbarExpanded}
			<hr />
			<div class="expanded-nav-section">
				<a
					href="/wprowadzenie-co-stworzymy-i-czego-sie-nauczymy"
					class="nav-link"
					on:click={toggleNavbar}>tutorial</a
				>
				<a href="/dokumentacja/javascript/wprowadzenie" class="nav-link" on:click={toggleNavbar}
					>dokumentacja</a
				>
				<hr style="visibility: hidden;" />
			</div>
		{/if}
	</div>
</header>

<style>
	header {
		background-color: var(--header-background-color);
		line-height: 2em;
		min-height: 40px;
		position: fixed;
		z-index: 99;
		width: 100%;
	}

	header .header-content {
		background-color: var(--header-background-color);
	}

	.header-content {
		display: flex;
		color: white;
		align-items: center;
	}

	#nav-brand {
		text-decoration: none;
		font-size: large;
	}

	.header-content,
	.nav-link,
	.icon {
		color: white;
	}

	.nav-link {
		text-decoration: none;
	}

	.right-section .nav-link {
		padding-left: 0.5em;
	}

	.header-content,
	.nav-link:hover,
	.icon:hover {
		color: rgba(255, 255, 255, 0.7);
	}

	.left-section,
	.right-section {
		flex: 1;
		display: inline-block;
		vertical-align: middle;
	}

	.right-section {
		text-align: end;
	}

	.center-section {
		/* If you want the center section to stay centered regardless of right content growth */
		flex: 0 1 auto; /* This allows the center section to shrink and grow as needed, but not shrink smaller than its content */
		margin: 0 auto; /* This centers the center section */
	}

	/* Style for icons, logos, or other spans */
	span {
		display: inline-block;
		vertical-align: middle;
	}

	/* Style for links in the right section */
	.right-section a {
		display: inline-block;
		vertical-align: middle;
		/* Add other styles as needed */
	}

	.expanded-nav-section {
		display: flex;
		flex-direction: column;

		/* & a {
			color: white;
		}

		& a:hover {
			color: rgba(255, 255, 255, 0.7);
		} */
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
