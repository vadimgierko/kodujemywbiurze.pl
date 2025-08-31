import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Navbar />
			<div
				style={{
					marginTop: "40px",
					flexGrow: 1,
					display: "flex",
					flexDirection: "column",
				}}
			>
				{children}
			</div>
			<Footer />
		</>
	);
}
