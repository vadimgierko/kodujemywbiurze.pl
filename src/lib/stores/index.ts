import { writable } from 'svelte/store';

export const showOffset = writable(false);

export const isScreenLessThan992 = writable<boolean | null>(null);

export const isIndexPage = writable(true); // not course page
