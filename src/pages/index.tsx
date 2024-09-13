//Utilities
import React from "react";

//Components
import Main from "@/components/homepage/Main";
import Scroll from "@/components/homepage/Scroll";
import Review from "@/components/homepage/Review";
import Slider from "@/components/homepage/Slider";
import Contact from "@/components/homepage/Contact";

export default function Home() {
   return (
      <div className="main-container">
         <Main />
         <Scroll />
         <Review />
         <h1 className="main-text">
            Nu suntem unica firmă de tractaj
            <br /> 24/7 din România, însă...
         </h1>
         <p className="main-paragraph">
            Ne pasă de clienții noștri, și apreciem o muncă de calitate. Tractăm orice tip de
            autoturisme,
            <br />
            chiar dacă sistemul de direcție este grav avariat. Sărim în ajutorul tău în cel mai
            scurt timp posibil,
            <br />
            oriunde în țară și la orice oră. Nu ezita să ne contactezi dacă întâmpini probleme.
            <br />
         </p>
         <Slider />
         <Contact />
      </div>
   );
}
