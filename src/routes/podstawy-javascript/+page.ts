export async function load({ fetch }) {
	const res = await fetch('/content/podstawy-javascript.md');
	const content = await res.text();

	return {
		content
	};
}
