"use client";

import styled from "styled-components";
import { JavaScriptLogo } from "../logos/JavaScriptLogo";
import { HtmlLogo } from "../logos/HtmlLogo";

const StyledSection = styled.section`
	/* STYLES NOT DEPENDENT ON SCREEN SIZE */
	.hero-section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: calc(100dvh - 40px - 90px);
		line-height: normal;
		overflow: hidden;
		/* margin: 0 auto; */
	}

	.hero-wrapper {
		text-align: center;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	/* MEDIA QUERIES */

	/* MOBILE */

	h1 {
		font-size: 1rem;
		margin: 1.5em 0;
	}

	#page-name {
		font-size: 2rem;
		font-weight: 800;
	}

	p {
		margin: 1em 0;
	}

	button {
		margin-top: 2em;
		font-size: 1rem;
		font-weight: 600;
		padding: 1em 2em;
		border-radius: 18px;
		color: rgb(0, 0, 0);
	}

	.right {
		margin-top: 2em;
	}

	img {
		max-width: 400px;
	}

	/* Small devices (landscape phones, 576px and up) */

	@media screen and (min-width: 576px) {
		h1 {
			font-size: 1.2rem;
			margin-bottom: 2.2em;
		}

		#page-name {
			font-size: 3.2rem;
			font-weight: 800;
		}

		p {
			font-size: 1.3rem;
		}

		img {
			max-width: 600px;
		}
	}

	/* Medium devices (tablets, 768px and up) */
	@media screen and (min-width: 768px) and (orientation: portrait) {
		h1 {
			font-size: 1.5rem;
			margin-bottom: 1em;
		}

		#page-name {
			font-size: 4rem;
			font-weight: 800;
		}

		p {
			font-size: 1.3rem;
			text-align: center;
		}
	}

	/* !!! HERE .hero-content becomes flex !!! */
	@media screen and (min-width: 768px) and (orientation: landscape) {
		.hero-content {
			display: flex;
			flex-direction: row;
			text-align: start;
		}

		.left {
			width: 60%;
		}

		.right {
			width: 40%;
			margin-top: 0;
		}

		h1 {
			font-size: 1.5rem;
			margin-bottom: 2em;
		}

		#page-name {
			font-size: 4rem;
			font-weight: 800;
		}

		p {
			font-size: 1.3rem;
			text-align: start;
		}
	}

	/* Large devices (desktops, 992px and up) */
	@media screen and (min-width: 992px) and (orientation: portrait) {
		h1 {
			margin-top: 1em;
			font-size: 1.6rem;
			margin-bottom: 1em;
		}

		#page-name {
			font-size: 4.2rem;
			font-weight: 800;
		}

		p {
			font-size: 1.6rem;
		}

		button {
			margin-top: 32px;

			font-size: 1.2rem;
			font-weight: 600;
			padding: 1.2em 2.4em;
			border-radius: 20px;
			color: rgb(0, 0, 0);
		}

		img {
			max-width: 700px;
		}
	}

	@media screen and (min-width: 992px) and (orientation: landscape) {
		h1 {
			margin-top: 1em;
			font-size: 1.6rem;
			margin-bottom: 1em;
		}

		#page-name {
			font-size: 4.2rem;
			font-weight: 800;
		}

		p {
			font-size: 1.6rem;
			text-align: start;
		}

		button {
			margin-top: 32px;

			font-size: 1.2rem;
			font-weight: 600;
			padding: 1.2em 2.4em;
			border-radius: 20px;
			color: rgb(0, 0, 0);
		}

		img {
			max-width: 700px;
		}
	}

	/* Extra large devices (large desktops, 1200px and up) */
	@media screen and (min-width: 1200px) and (orientation: landscape) {
		h1 {
			font-size: 1.6rem;
			margin-bottom: 1em;
		}

		#page-name {
			font-size: 4.2rem;
			font-weight: 800;
		}

		p {
			font-size: 1.8rem;
			text-align: start;
		}

		button {
			margin-top: 32px;

			font-size: 1.2rem;
			font-weight: 600;
			padding: 1.2em 2.4em;
			border-radius: 20px;
			color: rgb(0, 0, 0);
		}

		img {
			max-width: 700px;
		}
	}
`;

type HeroSectionProps = {
	additionalClasses?: string;
	imgSrc: string;
	btnHref: string;
	btnCTA: string;
	h1FirstSmallText: string;
	h1LargeText: string;
	descriptionParagraphs: string[];
	courseSlug: string | undefined
};

export function HeroSection({
	additionalClasses,
	h1FirstSmallText,
	h1LargeText,
	descriptionParagraphs,
	btnHref,
	btnCTA,
	imgSrc,
	courseSlug
}: HeroSectionProps) {
	return (
		<StyledSection className={"hero-section " + additionalClasses}>
			<div className="hero-wrapper">
				<h1>
					{h1FirstSmallText.length > 0 ? (
						<>
							{h1FirstSmallText}
							<br />
						</>
					) : null}
					<span id="page-name">{h1LargeText}</span>
				</h1>

				<div className="hero-content">
					<div className="left">
						{descriptionParagraphs.map((p) => (
							<p key={p}>{p}</p>
						))}

						<a href={btnHref}>
							<button className="bg-primary">{btnCTA}</button>
						</a>
					</div>

					<div className="right">
						{
							courseSlug === 'javascript' || courseSlug === "local-storage" || courseSlug === "programowanie-aplikacji-webowych"
								? <JavaScriptLogo />
								: courseSlug === 'html' || courseSlug === "html-javascript-dom"
									? <HtmlLogo />
									: <img src={imgSrc} width="100%" alt="" />
						}
					</div>
				</div>
			</div>
		</StyledSection>
	);
}
