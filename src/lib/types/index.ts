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
