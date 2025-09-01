"use client"

import { HeroSection } from "@/lib/components/HeroSection";
import { AboutSection } from "@/lib/components/homepage/AboutSection";
import { IndexPageSetter } from "@/lib/components/IndexPageSetter";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
	return (
		<StyledMain>
			<IndexPageSetter />
			<HeroSection
				h1FirstSmallText="Witaj na stronie"
				h1LargeText="Kodujemy w biurze!"
				descriptionParagraphs={[
					"Naucz się tworzyć aplikacje webowe i strony www... w przerwach między zadaniami w biurze 😏",
					"Zacznij pisać kod swojej pierwszej aplikacji bezpośrednio w przeglądarce już od pierwszej lekcji!",
				]}
				btnHref="/kursy/programowanie-aplikacji-webowych"
				btnCTA="Przejdź do kursu!"
				imgSrc="content/hero-img.png" //{heroImg}
				additionalClasses="container"
			/>

			<p
				className="text-center"
				style={{
					paddingBottom: "2rem",
				}}
			>
				Dowiedz się więcej 👇
			</p>

			<AboutSection />

			<div className="text-center">
				<Link href="/kursy/programowanie-aplikacji-webowych">
					<button className="bg-primary">Przejdź do kursu!</button>
				</Link>
			</div>

			<br />
		</StyledMain>
	);
}

const StyledMain = styled.main`
	/* MEDIA QUERIES */

	/* MOBILE */

	button {
		margin-top: 2em;
		font-size: 1rem;
		font-weight: 600;
		padding: 1em 2em;
		border-radius: 18px;
		color: rgb(0, 0, 0);
	}

	/* Small devices (landscape phones, 576px and up) */

	@media screen and (min-width: 576px) {
	}

	/* Medium devices (tablets, 768px and up) */
	@media screen and (min-width: 768px) and (orientation: portrait) {
	}

	@media screen and (min-width: 768px) and (orientation: landscape) {
	}

	/* Large devices (desktops, 992px and up) */
	@media screen and (min-width: 992px) and (orientation: portrait) {
		button {
			margin-top: 32px;

			font-size: 1.2rem;
			font-weight: 600;
			padding: 1.2em 2.4em;
			border-radius: 20px;
			color: rgb(0, 0, 0);
		}
	}

	@media screen and (min-width: 992px) and (orientation: landscape) {
		button {
			margin-top: 32px;

			font-size: 1.2rem;
			font-weight: 600;
			padding: 1.2em 2.4em;
			border-radius: 20px;
			color: rgb(0, 0, 0);
		}
	}

	/* Extra large devices (large desktops, 1200px and up) */
	@media screen and (min-width: 1200px) and (orientation: landscape) {
		button {
			margin-top: 32px;

			font-size: 1.2rem;
			font-weight: 600;
			padding: 1.2em 2.4em;
			border-radius: 20px;
			color: rgb(0, 0, 0);
		}
	}
`;
