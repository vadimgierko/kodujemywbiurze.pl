export interface Article {
	fullTitle: string;
	docTitle: string;
	tutorialTitle: string;
	title: string;
	slug: string;
	content: string;
}

export interface Section {
	title: string;
	fileName: string;
	mdContent: string;
	articles: Article[];
}

export interface Course {
	heroSectionData: IHeroSection;
	headData: IHead;
	slug: string;
}

export interface IHeroSection {
	h1FirstSmallText: string;
	h1LargeText: string;
	descriptionParagraphs: string[];
	btnHref: string;
	btnCTA: string;
	imgSrc: string;
	handleMount: () => void;
}

export interface IHead {
	title: string;
	ogTitle: string;
	description: string;
	ogDescription: string;
	ogImage: string;
	ogUrl: string;
}
