import type { Metadata } from "next";
import "./custom-framework.css"; /** THIS GOES BEFORE GLOBAL (AT LEAST IN SVELTE VERSION) */
import "./globals.css";
import { UiStoreProvider } from "@/context/useUiStore";
import { Layout } from "@/lib/layout";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.kodujemywbiurze.pl"),
	title: "kodujemywbiurze.pl",
	description:
		"Naucz się tworzyć aplikacje webowe i strony www... w przerwach między zadaniami w biurze 😏 Zacznij pisać kod swojej pierwszej aplikacji bezpośrednio w przeglądarce już od pierwszej lekcji!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl" data-theme="light">
			<body>
				<UiStoreProvider>
					<Layout>{children}</Layout>
				</UiStoreProvider>
			</body>
		</html>
	);
}
