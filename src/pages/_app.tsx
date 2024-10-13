// Styles
import "../css/globals.css";
import "../css/media.css";

// Components
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Utilities
import { useRouter } from "next/router";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { AppProps } from "next/app";
import { DefaultContextProvider } from "../contexts/useDefault";

const montserrat = Montserrat({
   weight: ["100", "300", "400", "500", "700", "900"],
   subsets: ["latin"],
});

export default function App({ Component, pageProps: pageProps }: AppProps) {
   const router = useRouter();

   return (
      <DefaultContextProvider>
         <div className={montserrat.className}>
            <Head>
               <meta charSet="UTF-8" />
               <meta name="viewport" content="width=device-width, initial-scale=1.0" />

               <meta
                  name="description"
                  content="Tractări și remorcări auto Prahova 24/7. Sună la 0724.717.111 pentru asistență rapidă în caz de avarii, accidente sau transport auto."
               />

               <meta
                  name="keywords"
                  content="tractari prahova, platforma prahova, remorcare prahova, tractări auto Ploiești, tractari alin cotoban, remorcare alin cotoban, kot asistenta, servicii tractări auto Prahova, tractări urgente Prahova, remorcări auto Prahova, tractări non-stop Prahova, asistență rutieră Prahova, tractări mașini ieftine Prahova, tractări rapide Ploiești, tractări 24/7 Prahova, tractări accidente Prahova, remorcări auto Ploiești, tractări auto DN1 Prahova, tractări auto Valea Prahovei, transport auto defect Prahova, ajutor rutier Prahova"
               />

               {/* Icons */}
               <link rel="icon" href="/favicon.ico" />

               {/* Verification tag */}
               <meta
                  name="ahrefs-site-verification"
                  content="7032a56cb4feb225916320921e1d52b8606b13ec5cbd11ac209c36834448b179"
               />

               {/* Authors meta tags (optional) */}
               <meta name="author" content="Iosif Ștefan Alexandru, Mareș Gabriel" />
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
