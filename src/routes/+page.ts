import slugify from 'slugify';

function customSlugify(text: string) {
	slugify.extend({ '|': '-' });
	return slugify(text, { lower: true, strict: true, remove: /[*+~.()`'"!:@]|/g });
}

function getFirstHeaderSlug(mdContent: string) {
	const regXHeader = /#{2}.+/g; // for all headers: 1,6

	const headersFromMd = mdContent.match(regXHeader)?.map((h) => h.replace('## ', ''));

	const firstHeader = headersFromMd ? headersFromMd[0] : null;

	if (firstHeader) {
		return customSlugify(firstHeader);
	}

	return null;
}

export async function load({ fetch }) {
	const res = await fetch('/content/kursy/podstawy-javascript/index.md');
	const mdContent = await res.text();

	const firstHeaderSlug = getFirstHeaderSlug(mdContent);

	return {
		firstHeaderSlug
	};
}
