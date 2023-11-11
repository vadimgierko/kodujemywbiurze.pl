import { writable } from 'svelte/store';

export const showOffset = writable(false);
// showOffset.subscribe((value) => {
// 	console.log('show offset', value)
// });

export const isScreenLessThan992 = writable<boolean | null>(null);
isScreenLessThan992.subscribe((value) => {
	//console.log('isScreenLessThan992', value);

	// when screen is > 992, reset showOffset:
	if (!value) {
		showOffset.set(false);
	}
});

export const isIndexPage = writable(true);
