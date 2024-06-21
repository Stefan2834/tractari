import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout";
import { DefaultProvider } from "../contexts/useDefault";
import "../app/globals.css";
import "../app/media.css";
import { ThemeProvider } from '@mui/material/styles';

import type { AppProps } from "next/app";
import type { Session } from "next-auth";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#E3B626",
		},
		secondary: {
			main: "#0b0a0a",
		},
	},
});

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
	return (
		<SessionProvider session={session}>
			<ThemeProvider theme={theme}>
				<DefaultProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</DefaultProvider>
			</ThemeProvider>
		</SessionProvider>
	);
}
