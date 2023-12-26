<script lang="ts">
	import HtmlLogo from '$lib/logos/HtmlLogo.svelte';
	import JavaScriptLogo from '$lib/logos/JavaScriptLogo.svelte';
	import EmojiTextFlexRow from './EmojiTextFlexRow.svelte';

	const questions = [
		{
			text: 'Pracujesz w biurze?',
			emoji: '🏢'
		},
		{
			text: 'Masz komputer i Internet?',
			emoji: '💻'
		},
		{
			text: 'Kubek kawy/ herbaty?',
			emoji: '☕'
		}
	];

	const pros = [
		{
			text: 'dostępne dla każdego',
			emoji: '😃'
		},
		{
			text: 'świetną zabawą',
			emoji: '🤸'
		},
		{
			text: 'rozrywką intelektualną',
			emoji: '🦉'
		},
		{
			text: 'wartościowym skillem',
			emoji: '💰'
		},
		{
			text: 'szansą na przebranżowienie',
			emoji: '🚀'
		},
		{
			text: 'sposobem na wyróżnienie się',
			emoji: '🦄'
		},
		{
			text: 'możliwością tworzenia',
			emoji: '🪄'
		},
		{
			text: 'mega kreatywne',
			emoji: '🌈'
		}
	];

	const benefits = [
		{
			text: 'koduj w przeglądarce',
			emoji: '💻'
		},
		{
			text: 'od razu tworzysz aplikację',
			emoji: '🧮'
		},
		{
			text: 'widzisz rezultaty',
			emoji: '🏆'
		},
		{
			text: 'przyjazny, prosty język',
			emoji: '🙃'
		},
		{
			text: 'nie musisz niczego instalować',
			emoji: '🛠'
		},
		{
			text: 'lekcje w formie tekstowej',
			emoji: '📄'
		}
	];
</script>

<section class="about-section">
	<EmojiTextFlexRow items={questions} />
	<p class="cta container">
		<strong>Zamień scrollowanie na kodowanie!</strong>😈
	</p>
	<EmojiTextFlexRow items={pros} header="Programowanie jest..." />
	<p style="padding: 1em 0; line-height: 2.0" class="container">
		<strong style="font-size: 2rem;">Poznaj podstawy web developmentu -</strong><br />
		sztuki tworzenia stron internetowych i aplikacji webowych!
	</p>
	<!-- LANGUAGES -->
	<div
		class="container"
		style="display: flex; flex-wrap: wrap; justify-content: center; padding: 4rem 0;"
	>
		<div>
			<div class="logo">
				<HtmlLogo />
			</div>
			<p><strong>HTML</strong></p>
		</div>
		<div>
			<div class="logo">
				<JavaScriptLogo />
			</div>
			<p><strong>JavaScript</strong></p>
		</div>
	</div>
	<!-- LANGUAGES END -->
	<EmojiTextFlexRow items={benefits} />
</section>

<style scoped>
	.about-section {
		text-align: center;
	}

	p {
		font-size: 1.5rem;
		line-height: normal;
	}

	.cta {
		font-size: 3rem;
		padding: 1em 0;
	}

	.logo {
		min-width: 200px;
		width: 200px;
		height: 200px;
	}

	@media screen and (max-width: 568px) {
		.cta {
			font-size: 2rem;
		}

		/* .logo {
			width: 200px;
			height: 200px;
		} */
	}
</style>
