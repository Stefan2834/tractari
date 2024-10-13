//Utilities
import React from "react";
import { useDefault } from "@/contexts/useDefault";

//Components
import Main from "@/components/homepage/Main";
import Scroll from "@/components/homepage/Scroll";
import Review from "@/components/homepage/Review";
import Slider from "@/components/homepage/Slider";
import Contact from "@/components/homepage/Contact";
import Head from "next/head";

export default function Home() {
   const { screenWidth } = useDefault();

   return (
      <>
         <Head>
            <title>Kot Asistență - Tractări 24/7 Prahova</title>
         </Head>
         <div className="main-container">
            <Main />
            <Scroll />
            <Review />
            <div className="main-slider-content">
               <h1 className="title">
                  Nu suntem unica firmă de tractaj
                  {screenWidth > 600 && <br />} 24/7 din România, însă...
               </h1>
               <p className="description">
                  Suntem dedicați să oferim cele mai bune servicii de tractări auto în Prahova și nu numai. 
                  Ne pasă de fiecare client și punem accent pe o muncă de calitate, indiferent de complexitatea situației. Tractăm orice tip de autoturisme, 
                  inclusiv vehicule cu sistem de direcție grav avariat.
                  Dacă te afli în județul Prahova și ai nevoie de o intervenție rapidă, echipa noastră va ajunge la tine în cel mai scurt timp, 
                  oferind asistență de urgență oriunde în zonă, fie la Ploiești, Câmpina sau alte localități din județ. Suntem disponibili 24/7 pentru a veni în ajutorul tău, 
                  oriunde te-ai afla, nu doar în Prahova, ci și în toată România.
                  <br />
               </p>
            </div>
            <Slider />
            <Contact />
         </div>
      </>
   );
}
