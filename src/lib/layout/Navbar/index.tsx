"use client";
import styles from "./navbar.module.css";

import { useUiStore } from "@/context/useUiStore";
import { FacebookIcon } from "@/lib/icons/FacebookIcon";
import { LinkedInIcon } from "@/lib/icons/LinkedInIcon";
import { MoonIcon } from "@/lib/icons/MoonIcon";
import { SunIcon } from "@/lib/icons/SunIcon";
import { ThreeDotsHorizontal } from "@/lib/icons/ThreeDotsHorizontal";
import { ThreeDotsVertical } from "@/lib/icons/ThreeDotsVertical";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const NAV_LINKS: {
	href: string;
	value: string;
}[] = [
	{
		href: "/kursy/javascript",
		value: "1️⃣ js",
	},
	{
		href: "/kursy/local-storage",
		value: "2️⃣ storage",
	},
	{
		href: "/kursy/html",
		value: "3️⃣ html",
	},
	{
		href: "/kursy/html-javascript-dom",
		value: "4️⃣ html + js",
	},
];

export function Navbar() {
	const params = useParams();
	const isIndexPage = Boolean(!params.article);

	const { showOffset, setShowOffset, isScreenLessThan992 } = useUiStore();
	const [theme, setTheme] = useState<Theme>();
	const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

	function saveTheme(t: Theme) {
		document.documentElement.setAttribute("data-theme", t);
		localStorage.setItem("theme", t);
		setTheme(t);
	}

	function switchMode() {
		if (!theme) return;

		saveTheme(theme === "light" ? "dark" : "light");
	}

	function toggleNavbar() {
		if (!isScreenLessThan992) return;

		setIsNavbarExpanded(!isNavbarExpanded);
	}

	useEffect(() => {
		const themeFromLocalStorage = localStorage.getItem("theme");
		const themeFromHtmlAttribute = document.documentElement.getAttribute(
			"data-theme"
		) as Theme; // THEME IS HARDCODED

		if (theme) return console.log("theme:", theme);

		// if no theme, get theme from local storage
		if (themeFromLocalStorage) return saveTheme(themeFromLocalStorage as Theme);

		// if no theme from local strorage, get theme from html attr
		saveTheme(themeFromHtmlAttribute as Theme);
	}, [theme]);

	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles["header-content"]}>
					<div
						className={styles["left-section"]}
						style={{ display: isIndexPage ? "none" : "inline" }}
					>
						{/* <!-- MENU TOGGLE --> */}
						<span
							onClick={() => setShowOffset(!showOffset)}
							className={`icon ${styles["header-icon"]} ${styles["span"]}`}
							id="menu-toggle"
						>
							{showOffset ? <ThreeDotsHorizontal /> : <ThreeDotsVertical />}
						</span>
					</div>

					<div className={styles["center-section"]}>
						{/* <!-- NAV BRAND --> */}
						<Link
							href="/"
							id="nav-brand"
							className={`${styles["nav-brand"]} ${styles["nav-link"]}`}
						>
							<strong>kodujemywbiurze.pl</strong>
						</Link>
					</div>

					<div className={styles["right-section"]}>
						{!isScreenLessThan992 && (
							<>
								{NAV_LINKS.map(({ href, value }) => (
									<Link key={href} href={href} className={styles["nav-link"]}>
										{value}
									</Link>
								))}
							</>
						)}

						{/* <!-- THEME TOGGLE --> */}
						<span
							onClick={switchMode}
							className={`${styles["span"]} icon ${styles["header-icon"]} ${styles["nav-link"]}`}
							id="theme-toggle"
						>
							{theme === "dark" ? <SunIcon /> : <MoonIcon />}
						</span>

						{!isScreenLessThan992 && (
							<>
								<a
									href="https://www.facebook.com/kodujemywbiurze"
									target="_blank"
									className={styles["nav-link"]}
								>
									<FacebookIcon />
								</a>
								<a
									href="https://www.linkedin.com/company/kodujemywbiurze"
									target="_blank"
									className={styles["nav-link"]}
								>
									<LinkedInIcon />
								</a>
							</>
						)}

						{/* <!-- NAVBAR TOGGLE --> */}
						<span
							style={{
								display: !isScreenLessThan992 ? "none" : "inline",
								paddingLeft: isScreenLessThan992 ? "0.5em" : "",
							}}
							onClick={toggleNavbar}
							className={`icon ${styles["header-icon"]}`}
							id="navbar-toggle"
						>
							{isNavbarExpanded ? (
								<ThreeDotsHorizontal />
							) : (
								<ThreeDotsVertical />
							)}
						</span>
					</div>
				</div>

				{isScreenLessThan992 && isNavbarExpanded && (
					<>
						<hr />
						<div className={styles["expanded-nav-section"]}>
							{NAV_LINKS.map(({ href, value }) => (
								<Link
									key={href}
									href={href}
									className={styles["nav-link"]}
									onClick={toggleNavbar}
								>
									{value}
								</Link>
							))}

							<hr />

							<a
								href="https://www.facebook.com/kodujemywbiurze"
								target="_blank"
								className={styles["nav-link"]}
							>
								<FacebookIcon />
							</a>
							<a
								href="https://www.linkedin.com/company/kodujemywbiurze"
								target="_blank"
								className={styles["nav-link"]}
							>
								<LinkedInIcon />
							</a>
							<hr style={{ visibility: "hidden" }} />
						</div>
					</>
				)}
			</div>
		</header>
	);
}
