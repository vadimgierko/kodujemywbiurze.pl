import styles from "./about-section.module.css";
import { HtmlLogo } from "@/lib/logos/HtmlLogo";
import { JavaScriptLogo } from "@/lib/logos/JavaScriptLogo";
import { EmojiTextFlexRow } from "../EmojiTextFlexRow";

const questions = [
	{
		text: "Pracujesz w biurze?",
		emoji: "🏢",
	},
	{
		text: "Masz komputer i Internet?",
		emoji: "💻",
	},
	{
		text: "Kubek kawy/ herbaty?",
		emoji: "☕",
	},
];

const pros = [
	{
		text: "dostępne dla każdego",
		emoji: "😃",
	},
	{
		text: "świetną zabawą",
		emoji: "🤸",
	},
	{
		text: "rozrywką intelektualną",
		emoji: "🦉",
	},
	{
		text: "wartościowym skillem",
		emoji: "💰",
	},
	{
		text: "szansą na przebranżowienie",
		emoji: "🚀",
	},
	{
		text: "sposobem na wyróżnienie się",
		emoji: "🦄",
	},
	{
		text: "możliwością tworzenia",
		emoji: "🖌️",
	},
	{
		text: "mega kreatywne",
		emoji: "🌈",
	},
];

const benefits = [
	{
		text: "koduj w przeglądarce",
		emoji: "💻",
	},
	{
		text: "od razu tworzysz aplikację",
		emoji: "🧮",
	},
	{
		text: "widzisz rezultaty",
		emoji: "🏆",
	},
	{
		text: "przyjazny, prosty język",
		emoji: "🙃",
	},
	{
		text: "nie musisz niczego instalować",
		emoji: "🛠",
	},
	{
		text: "lekcje w formie tekstowej",
		emoji: "📄",
	},
];

export function AboutSection() {
	return (
		<section className={styles["about-section"]}>
			<EmojiTextFlexRow items={questions} header="" />
			<p
				style={{ fontSize: "3rem", padding: "1em 0" }}
				className={`${styles["p"]} container`}
			>
				<strong>Zamień scrollowanie na kodowanie!</strong>😈
			</p>
			<EmojiTextFlexRow items={pros} header="Programowanie jest..." />
			<p
				style={{ padding: "1em 0", lineHeight: "2.0" }}
				className={`${styles["p"]} container`}
			>
				<strong style={{ fontSize: "2rem" }}>
					Poznaj podstawy web developmentu -
				</strong>
				<br />
				sztuki tworzenia stron internetowych i aplikacji webowych!
			</p>
			{/* <!-- LANGUAGES --> */}
			<div
				className="container"
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					padding: "4rem 0",
				}}
			>
				<div>
					<div className={styles["logo"]}>
						<HtmlLogo />
					</div>
					<p className={styles["p"]}>
						<strong>HTML</strong>
					</p>
				</div>
				<div>
					<div className={styles["logo"]}>
						<JavaScriptLogo />
					</div>
					<p className={styles["p"]}>
						<strong>JavaScript</strong>
					</p>
				</div>
			</div>
			{/* <!-- LANGUAGES END --> */}
			<EmojiTextFlexRow items={benefits} header="" />
		</section>
	);
}
