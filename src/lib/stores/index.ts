import { writable } from 'svelte/store';

export const showOffset = writable(true);

export const isScreenLessThan992 = writable<boolean | null>(null);

isScreenLessThan992.subscribe((value) => {
	if (value) {
		showOffset.set(false);
	} else {
		showOffset.set(true);
	}
});

export const isIndexPage = writable(true); // not course page
