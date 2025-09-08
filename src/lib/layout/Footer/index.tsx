"use client";

import { useUiStore } from "@/context/useUiStore";
import styles from "./footer.module.css";

import { GithubIcon } from "@/lib/icons/GitHubIcon";
import { GlobeIcon } from "@/lib/icons/GlobeIcon";
import { LinkedInIcon } from "@/lib/icons/LinkedInIcon";
import Link from "next/link";
import { useParams } from "next/navigation";
import { JSX } from "react";

const FOOTER_LINKS: {
	href: string;
	Icon: () => JSX.Element;
}[] = [
	{
		href: "https://vadimgierko.com",
		Icon: GlobeIcon,
	},
	{
		href: "https://github.com/vadimgierko",
		Icon: GithubIcon,
	},
	{
		href: "https://www.linkedin.com/in/vadimgierko/",
		Icon: LinkedInIcon,
	},
];

export function Footer() {
	const params = useParams();
	const isIndexPage = Boolean(!params.article);

	const { showOffset } = useUiStore();

	return (
		<footer
			className={`${styles.footer} ${
				isIndexPage || (!isIndexPage && !showOffset)
					? styles["hide-aside-footer"]
					: styles["show-aside-footer"]
			}`}
		>
			<hr />
			<p>
				&copy; 2023-2025 Vadim Gierko
				<br />
				<Link href="/o-autorze" className={styles["social-media-link"]}>
					o autorze
				</Link>
				{FOOTER_LINKS.map(({ href, Icon }) => (
					<a
						key={href}
						className={styles["social-media-link"]}
						href={href}
						target="_blank"
					>
						<Icon />
					</a>
				))}
			</p>
		</footer>
	);
}
