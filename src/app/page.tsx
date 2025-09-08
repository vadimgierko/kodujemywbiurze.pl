import styles from "./main-button.module.css";
import { HeroSection } from "@/lib/components/HeroSection";
import { AboutSection } from "@/lib/components/homepage/AboutSection";
import Link from "next/link";

export default function Home() {
	return (
		<main>
			<HeroSection
				courseSlug={undefined}
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
					<button className={`${styles["main-button"]} bg-primary`}>
						Przejdź do kursu!
					</button>
				</Link>
			</div>

			<br />
		</main>
	);
}
