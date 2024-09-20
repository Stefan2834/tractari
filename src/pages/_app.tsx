// Styles
import "../css/globals.css";
import "../css/media.css";

// Components
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Utilities
import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { AppProps } from "next/app";
import { DefaultContextProvider } from "../contexts/useDefault";


const montserrat = Montserrat({
   weight: ["100", "300", "400", "500", "700", "900"],
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Tractari",
   description: "Tractari auto alin cotoban srl",
   authors: [  
      { name: "Iosif Stefan Alexandru", url: "TODO: linkedin" },
      { name: "Mareș Gabriel", url: "https://www.linkedin.com/in/mares-gabriel/" },
   ],
   keywords: [
      "tractări auto Prahova",
      "tractări auto Ploiești",
      "servicii tractări auto Prahova",
      "tractări urgente Prahova",
      "remorcări auto Prahova",
      "tractări non-stop Prahova",
      "asistență rutieră Prahova",
      "tractări mașini ieftine Prahova",
      "tractări rapide Ploiești",
      "tractări 24/7 Prahova",
      "tractări accidente Prahova",
      "remorcări auto Ploiești",
      "tractări auto DN1 Prahova",
      "tractări auto Valea Prahovei",
      "transport auto defect Prahova",
      "tractări autostrada A3",
      "ajutor rutier Prahova",
      "recuperare auto Prahova",
   ],
   icons: {
      apple: [
         { sizes: "57x57", url: "/apple-icon-57x57.png" },
         { sizes: "76x76", url: "/apple-icon-76x76.png" },
         { sizes: "114x114", url: "/apple-icon-114x114.png" },
         { sizes: "152x152", url: "/apple-icon-152x152.png" },
         { sizes: "180x180", url: "/apple-icon-180x180.png" },
      ],
      icon: [
         { sizes: "192x192", url: "/android-icon-192x192.png" },
         { sizes: "32x32", url: "/favicon-32x32.png" },
         { sizes: "96x96", url: "/favicon-96x96.png" },
         { sizes: "16x16", url: "/favicon-16x16.png" },
      ],
   },
   other: {
      "ahrefs-site-verification":
         "7032a56cb4feb225916320921e1d52b8606b13ec5cbd11ac209c36834448b179",
   },
};

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

export default function App({ Component, pageProps: pageProps }: AppProps) {
   return (
         <DefaultContextProvider>
            <div className={montserrat.className}>
               <Head>
                  <meta name="description" content="Firmă de tractări prahova" />
                  <title>Kot Asistență</title>
               </Head>
               <main className="bg-white">
                  <Navbar />
                  <Component {...pageProps} />
                  <Footer />
               </main>
               <Analytics />
               <SpeedInsights />
            </div>
         </DefaultContextProvider>
   );
}
