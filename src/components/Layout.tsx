import "../app/globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tractari",
	description: "Tractari auto alin cotoban srl",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className={inter.className}>
			<Head>
				<title>Kot Asistență</title>
				<meta
					name="Tractari"
					content="Tractari auto alin cotoban srl"
				/>
				<meta name="author" content="Iosif Stefan Alexandru" />
				<meta
					name="keywords"
					content="tractari , auto, masina, cotoban, kot, alin kot, remorca, remorcare, tractare"
				/>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta name="mobile-web-app-capable" content="yes" />
				<script src="http://localhost:3000"></script>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
					rel="stylesheet"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</Head>
			<main>{children}</main>
		</div>
	);
}

