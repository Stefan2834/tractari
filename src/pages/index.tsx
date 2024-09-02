//Utilities
import React from "react";

//Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Main from "@/components/homepage/Main";
import Scroll from "@/components/homepage/Scroll";
import Review from "@/components/homepage/Review";
import Slider from "@/components/homepage/Slider";
import Contact from "./contact";

export default function Home() {
   return (
      <div className="w-full font overflow-hidden bg-white text-black">
         <Navbar />
         <Main />
         <Scroll />
         <Review />
         <h1 className="w-full text-center text-6xl mt-40 font-semibold m:text-3xl">
            Nu suntem unica firmă de tractaj
            <br /> 24/7 din România, însă...
         </h1>
         <p className="w-full text-center font-light text-3xl mt-10 m:text-xl">
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
         <Footer />
      </div>
   );
}
