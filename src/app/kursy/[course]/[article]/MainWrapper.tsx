"use client";

import { useUiStore } from "@/context/useUiStore";
import { ReactNode } from "react";

export function MainWrapper({ children }: { children: ReactNode }) {
	const { showOffset, isScreenLessThan992, setShowOffset } = useUiStore();

	return (
		<main
			style={{
				boxSizing: "border-box",
				marginLeft: showOffset ? (isScreenLessThan992 ? 0 : "30%") : 0,
				maxWidth: showOffset
					? isScreenLessThan992
						? "100vw"
						: "calc(100vw - 30%)"
					: "100vw",
				padding: showOffset ? (isScreenLessThan992 ? "" : "0 2em") : "",
			}}
			onClick={() =>
				isScreenLessThan992 && showOffset ? setShowOffset(false) : null
			}
		>
			{children}
		</main>
	);
}
