"use client";
import "./style.css";

import { useUiStore } from "@/context/useUiStore";
import { FacebookIcon } from "@/lib/icons/FacebookIcon";
import { LinkedInIcon } from "@/lib/icons/LinkedInIcon";
import { MoonIcon } from "@/lib/icons/MoonIcon";
import { SunIcon } from "@/lib/icons/SunIcon";
import { ThreeDotsHorizontal } from "@/lib/icons/ThreeDotsHorizontal";
import { ThreeDotsVertical } from "@/lib/icons/ThreeDotsVertical";
import Link from "next/link";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function Navbar() {
	const { showOffset, setShowOffset, isIndexPage, isScreenLessThan992 } =
		useUiStore();
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
		<header id="navbar">
			<div className="container">
				<div className="header-content">
					<div
						className="left-section"
						style={{ display: isIndexPage ? "none" : "inline" }}
					>
						{/* <!-- MENU TOGGLE --> */}
						<span
							onClick={() => setShowOffset(!showOffset)}
							className="icon"
							id="menu-toggle"
						>
							{showOffset ? <ThreeDotsHorizontal /> : <ThreeDotsVertical />}
						</span>
					</div>

					<div className="center-section">
						{/* <!-- NAV BRAND --> */}
						<Link href="/" id="nav-brand" className="nav-link">
							<strong>kodujemywbiurze.pl</strong>
						</Link>
					</div>

					<div className="right-section">
						{!isScreenLessThan992 && (
							<>
								<Link href="/kursy/javascript" className="nav-link">
									1️⃣ js
								</Link>
								<Link href="/kursy/local-storage" className="nav-link">
									2️⃣ storage
								</Link>
								<Link href="/kursy/html" className="nav-link">
									3️⃣ html
								</Link>
								<Link href="/kursy/html-javascript-dom" className="nav-link">
									4️⃣ html + js
								</Link>
							</>
						)}

						{/* <!-- THEME TOGGLE --> */}
						<span
							onClick={switchMode}
							className="icon nav-link"
							id="theme-toggle"
						>
							{theme === "dark" ? <SunIcon /> : <MoonIcon />}
						</span>

						{!isScreenLessThan992 && (
							<>
								<a
									href="https://www.facebook.com/kodujemywbiurze"
									target="_blank"
									className="nav-link"
								>
									<FacebookIcon />
								</a>
								<a
									href="https://www.linkedin.com/company/kodujemywbiurze"
									target="_blank"
									className="nav-link"
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
							className="icon"
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
						<div className="expanded-nav-section">
							<Link
								href="/kursy/javascript"
								className="nav-link"
								onClick={toggleNavbar}
							>
								1️⃣ javascript
							</Link>
							<Link
								href="/kursy/local-storage"
								className="nav-link"
								onClick={toggleNavbar}
							>
								2️⃣ local storage
							</Link>
							<Link href="/kursy/html" className="nav-link" onClick={toggleNavbar}>
								3️⃣ html
							</Link>
							<Link
								href="/kursy/html-javascript-dom"
								className="nav-link"
								onClick={toggleNavbar}
							>
								4️⃣ html + javascript
							</Link>

							<hr />

							<a
								href="https://www.facebook.com/kodujemywbiurze"
								target="_blank"
								className="nav-link"
							>
								<FacebookIcon />
							</a>
							<a
								href="https://www.linkedin.com/company/kodujemywbiurze"
								target="_blank"
								className="nav-link"
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
