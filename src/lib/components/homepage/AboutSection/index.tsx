"use client";

import { HtmlLogo } from "@/lib/logos/HtmlLogo";
import { JavaScriptLogo } from "@/lib/logos/JavaScriptLogo";
import { EmojiTextFlexRow } from "../EmojiTextFlexRow";
import styled from "styled-components";

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

const StyledParagraph = styled.p`
	font-size: 1.5rem;
	line-height: normal;
`;

export function AboutSection() {
	return (
		<section className="about-section" style={{ textAlign: "center" }}>
			<EmojiTextFlexRow items={questions} header="" />
			<StyledParagraph
				style={{ fontSize: "3rem", padding: "1em 0" }}
				className="container"
			>
				<strong>Zamień scrollowanie na kodowanie!</strong>😈
			</StyledParagraph>
			<EmojiTextFlexRow items={pros} header="Programowanie jest..." />
			<StyledParagraph
				style={{ padding: "1em 0", lineHeight: "2.0" }}
				className="container"
			>
				<strong style={{ fontSize: "2rem" }}>
					Poznaj podstawy web developmentu -
				</strong>
				<br />
				sztuki tworzenia stron internetowych i aplikacji webowych!
			</StyledParagraph>
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
					<div className="logo">
						<HtmlLogo />
					</div>
					<StyledParagraph>
						<strong>HTML</strong>
					</StyledParagraph>
				</div>
				<div>
					<div className="logo">
						<JavaScriptLogo />
					</div>
					<StyledParagraph>
						<strong>JavaScript</strong>
					</StyledParagraph>
				</div>
			</div>
			{/* <!-- LANGUAGES END --> */}
			<EmojiTextFlexRow items={benefits} header="" />
		</section>
	);
}
