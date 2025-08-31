import { Metadata } from "next";
import { AboutAuthorPage } from "./AboutAuthorPage";

const title = "O autorze | kodujemywbiurze.pl";
const description =
	"Cześć👋 Nazywam się Vadim Gierko. Pracuję w biurze 🏢 i programuję 💻 od końca 2020 r., stąd też pomysł na stworzenie tej strony!";

export const metadata: Metadata = {
	alternates: {
		canonical: "https://www.kodujemywbiurze.pl/o-autorze",
	},
	title,
	description,
	openGraph: {
		title,
		description,
		images: "/content/vadim-gierko-avatar.jpg",
		url: "https://www.kodujemywbiurze.pl/o-autorze",
		type: "article",
	},
};

export default function Page() {
	return <AboutAuthorPage />;
}
