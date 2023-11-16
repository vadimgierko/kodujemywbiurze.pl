<script>
	import { isIndexPage, isScreenLessThan992, showOffset } from '$lib/stores';
	import GitHubIcon from '../icons/GitHubIcon.svelte';
	import LinkedInIcon from '../icons/LinkedInIcon.svelte';
</script>

<footer
	style={$isIndexPage
		? 'margin-left: 0'
		: $isScreenLessThan992
		? 'margin-left: 0'
		: 'margin-left: 30%;'}
>
	<hr />
	<p>
		&copy; 2023 <a href="https://vadimgierko.com" target="_blank" style="margin-left: 0.5em"
			>Vadim Gierko</a
		>
		<br />
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

	.social-media-link {
		margin: 0 1em;
	}
</style>
