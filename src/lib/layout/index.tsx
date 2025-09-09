import styles from "./layout.module.css";
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Navbar />
			<div className={styles["children-div"]}>{children}</div>
			<Footer />
		</>
	);
}
