import styles from "./hero-section.module.css";
import { JavaScriptLogo } from "../../logos/JavaScriptLogo";
import { HtmlLogo } from "../../logos/HtmlLogo";
import Link from "next/link";

type HeroSectionProps = {
	additionalClasses?: string;
	imgSrc: string;
	btnHref: string;
	btnCTA: string;
	h1FirstSmallText: string;
	h1LargeText: string;
	descriptionParagraphs: string[];
	courseSlug: string | undefined;
};

export function HeroSection({
	additionalClasses,
	h1FirstSmallText,
	h1LargeText,
	descriptionParagraphs,
	btnHref,
	btnCTA,
	imgSrc,
	courseSlug,
}: HeroSectionProps) {
	return (
		<section className={styles["hero-section"] + " " + additionalClasses}>
			<div className={styles["hero-wrapper"]}>
				<h1>
					{h1FirstSmallText.length > 0 ? (
						<>
							{h1FirstSmallText}
							<br />
						</>
					) : null}
					<span className={styles["page-name"]}>{h1LargeText}</span>
				</h1>

				<div className={styles["hero-content"]}>
					<div className={styles["left"]}>
						{descriptionParagraphs.map((p) => (
							<p key={p}>{p}</p>
						))}

						<Link href={btnHref}>
							<button className="bg-primary">{btnCTA}</button>
						</Link>
					</div>

					<div className={styles["right"]}>
						{courseSlug === "javascript" ||
						courseSlug === "local-storage" ||
						courseSlug === "programowanie-aplikacji-webowych" ? (
							<JavaScriptLogo />
						) : courseSlug === "html" ||
						  courseSlug === "html-javascript-dom" ? (
							<HtmlLogo />
						) : (
							<img src={imgSrc} width="100%" alt="" />
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
