import { Metadata } from "next";

const title = "O autorze kursu | kodujemywbiurze.pl";
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
	return (
		<main className="container" style={{ textAlign: "center" }}>
			<div
				className="avatar-container"
				style={{
					maxWidth: "200px",
					margin: "0 auto",
					paddingTop: "2em",
				}}
			>
				<img
					src="content/vadim-gierko-avatar.jpg"
					width="100%"
					style={{ borderRadius: "50%" }}
					alt="Vadim Gierko autor strony kodujemywbiurze.pl zdjęcie profilowe"
				/>
			</div>
			<h1 style={{ fontSize: "2.5rem" }}>Cześć 👋</h1>
			<p>Nazywam się Vadim Gierko.</p>
			<p>
				<strong>Pracuję w biurze 🏢</strong> (a dokładniej w Urzędzie) ➕
				<strong>programuję 💻 od końca 2020 r.</strong>.
			</p>
			<p>Stąd też pomysł na stworzenie tej strony!</p>

			<hr />

			<p>
				<strong>Jestem programistycznym samoukiem</strong>
				<br /> i tworzę strony oraz aplikacje webowe za pomocą takich
				technologii, jak:
			</p>

			<h2 style={{ padding: "1em 0" }}>Języki</h2>

			<div>
				<img
					src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
					height="35"
				/>
				<img
					src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
					height="35"
				/>
				<img
					src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
					height="35"
				/>
				<img
					src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
					height="35"
				/>
				<img
					src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white"
					height="35"
				/>
			</div>

			<h2 style={{ padding: "1em 0" }}>Frameworki</h2>

			<div>
				<img
					src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
					height="35"
				/>
				<img
					src="https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00"
					height="35"
				/>
				<img
					src="https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=Svelte&logoColor=white"
					height="35"
				/>
				<img
					src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
					height="35"
				/>
				<img
					src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
					height="35"
				/>
				<img
					src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white"
					height="35"
				/>
				<img
					src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white"
					height="35"
				/>
			</div>

			<h2 style={{ padding: "1em 0" }}>Biblioteki</h2>

			<div>
				<img
					src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
					height="35"
				/>
				<img
					src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
					height="35"
				/>
				<img
					src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
					height="35"
				/>
			</div>

			<h2 style={{ padding: "1em 0" }}>
				Baza danych, autoryzacja użytkowników oraz płatności
			</h2>

			<div>
				<img
					src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black"
					height="35"
				/>
				<img
					src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white"
					height="35"
				/>
			</div>

			<h2 style={{ padding: "1em 0" }}>Deployment</h2>

			<div>
				<img
					src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"
					height="35"
				/>
				<img
					src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white"
					height="35"
				/>
			</div>

			<h2 style={{ padding: "1em 0" }}>Kontrola wersji oraz edytor kodu</h2>

			<div>
				<img
					src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
					height="35"
				/>
				<img
					src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"
					height="35"
				/>
			</div>

			<br />
			<hr />

			<p>
				I teraz chciałbym podzielić się swoją wiedzą i doświadczeniem z każdym!
			</p>
			<p>
				Jeśli chcesz wiedzieć więcej nt. tego, czym się zajmuję (w
				szczególności, co robiłem wcześniej) i kim jestem, zapraszam do
				odwiedzenia mojej strony www{" "}
				<a href="https://www.vadimgierko.com" target="_blank">
					vadimgierko.com
				</a>
				!
			</p>
		</main>
	);
}
