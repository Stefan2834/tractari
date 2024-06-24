import Layout from "../components/Layout";
import {DefaultProvider} from "@/contexts/useDefault";
import "../css/globals.css";
import "../css/media.css";
import {ThemeProvider} from '@mui/material/styles';

import type {AppProps} from "next/app";

import {createTheme} from "@mui/material/styles";

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

export default function App({Component, pageProps: pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <DefaultProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </DefaultProvider>
        </ThemeProvider>
    );
}
