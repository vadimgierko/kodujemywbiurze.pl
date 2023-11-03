<script lang="ts">
	import { marked } from 'marked';

	export let data;

	const { content } = data;
</script>

<div>{@html marked(content)}</div>
