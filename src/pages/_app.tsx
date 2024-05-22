import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout";
import { DefaultProvider } from "../contexts/useDefault";
import "../app/globals.css";

import type { AppProps } from "next/app";
import type { Session } from "next-auth";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
	return (
		<SessionProvider session={session}>
			<DefaultProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</DefaultProvider>
		</SessionProvider>
	);
}
