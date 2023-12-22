<script>
	import GlobeIcon from '$lib/icons/GlobeIcon.svelte';
	import { isIndexPage, showOffset } from '$lib/stores';
	import GitHubIcon from '../icons/GitHubIcon.svelte';
	import LinkedInIcon from '../icons/LinkedInIcon.svelte';
</script>

<footer
	class={$isIndexPage || (!$isIndexPage && !$showOffset)
		? 'hide-aside-footer'
		: 'show-aside-footer'}
>
	<hr />
	<p>
		&copy; 2023 Vadim Gierko | <a href="/o-autorze" style="margin-left: 0.5em"
			>więcej o autorze</a
		>
		<br />
		<a class="social-media-link" href="https://vadimgierko.com" target="_blank"
			><GlobeIcon /></a
		>
		|
		<a class="social-media-link" href="https://github.com/vadimgierko" target="_blank"
			><GitHubIcon /></a
		>
		|
		<a class="social-media-link" href="https://www.linkedin.com/in/vadimgierko/" target="_blank"
			><LinkedInIcon /></a
		>
	</p>
</footer>

<style scoped>
	footer {
		text-align: center;
	}

	.hide-aside-footer {
		margin: 0;
	}

	.show-aside-footer {
		margin-left: 30%;
	}

	.social-media-link {
		margin: 0 1em;
	}
</style>
