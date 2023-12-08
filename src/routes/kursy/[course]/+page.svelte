<script lang="ts">
	import { page } from '$app/stores';
	import HeroSection from '$lib/components/HeroSection.svelte';

	export let data;

	const { courses } = data;

	$: course = courses.find((c) => c.slug === $page.params.course);
	$: heroSectionData = course?.heroSectionData;
	$: headData = course?.headData;
</script>

<svelte:head>
	<title>{headData?.title}</title>
	<meta property="og:title" content={headData?.ogTitle} />

	<meta name="description" content={headData?.description} />
	<meta property="og:description" content={headData?.ogDescription} />

	<meta property="og:image" content={headData?.ogImage} />

	<meta property="og:url" content={headData?.ogUrl} />
	<meta property="og:type" content="article" />
</svelte:head>

{#if !course || !heroSectionData || !headData}
	<p style="color: red">Niestety nie ma takiego kursu...</p>
{:else}
	<main class="container">
		<HeroSection
			h1FirstSmallText={heroSectionData.h1FirstSmallText}
			h1LargeText={heroSectionData.h1LargeText}
			descriptionParagraphs={heroSectionData.descriptionParagraphs}
			btnHref={heroSectionData.btnHref}
			btnCTA={heroSectionData.btnCTA}
			imgSrc={heroSectionData.imgSrc}
			handleMount={heroSectionData.handleMount}
		/>
	</main>
{/if}
