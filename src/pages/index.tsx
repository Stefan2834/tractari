//Utilities
import React from "react";
import { useDefault } from "@/contexts/useDefault";

//Components
import Main from "@/components/homepage/Main";
import Scroll from "@/components/homepage/Scroll";
import Review from "@/components/homepage/Review";
import Slider from "@/components/homepage/Slider";
import Contact from "@/components/homepage/Contact";

export default function Home() {

   const { screenWidth } = useDefault()

   return (
      <div className="main-container">
         <Main />
         <Scroll />
         <Review />
         <div className="main-slider-content">
            <h1 className="title">
               Nu suntem unica firmă de tractaj
               {screenWidth > 600 && <br />}
               24/7 din România, însă...
            </h1>
            <p className="description">
               Ne pasă de clienții noștri, și apreciem o muncă de calitate. Tractăm orice tip de
               autoturisme,
               chiar dacă sistemul de direcție este grav avariat. Sărim în ajutorul tău în cel mai
               scurt timp posibil,
               oriunde în țară și la orice oră. Nu ezita să ne contactezi dacă întâmpini probleme.
               <br />
            </p>
         </div>
         <Slider />
         <Contact />
      </div>
   );
}
