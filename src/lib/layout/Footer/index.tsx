"use client";

import { useUiStore } from "@/context/useUiStore";
import "./style.css";

import { GithubIcon } from "@/lib/icons/GitHubIcon";
import { GlobeIcon } from "@/lib/icons/GlobeIcon";
import { LinkedInIcon } from "@/lib/icons/LinkedInIcon";
import Link from "next/link";

export function Footer() {
	const { isIndexPage, showOffset } = useUiStore();

	return (
		<footer
			className={
				isIndexPage || (!isIndexPage && !showOffset)
					? "hide-aside-footer"
					: "show-aside-footer"
			}
		>
			<hr />
			<p>
				&copy; 2023-2025 Vadim Gierko
				<br />
				<Link href="/o-autorze" className="social-media-link">
					o autorze
				</Link>{" "}
				|
				<a
					className="social-media-link"
					href="https://vadimgierko.com"
					target="_blank"
				>
					<GlobeIcon />
				</a>
				|
				<a
					className="social-media-link"
					href="https://github.com/vadimgierko"
					target="_blank"
				>
					<GithubIcon />
				</a>
				|
				<a
					className="social-media-link"
					href="https://www.linkedin.com/in/vadimgierko/"
					target="_blank"
				>
					<LinkedInIcon />
				</a>
			</p>
		</footer>
	);
}
