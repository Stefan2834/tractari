//Utilities
import React, { useRef } from "react";
import { useDefault } from "@/contexts/useDefault";

//GSAP
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


//Images
import truck from "@/assets/truck.png";


gsap.registerPlugin(ScrollTrigger);

export default function Scroll() {
   const { screenWidth } = useDefault();
   const containerRef = useRef<any>();

   useGSAP(
      () => {
         gsap.to(".moving-img", {
            scrollTrigger: {
               trigger: ".moving-img",
               scrub: 3,
               start: "top 99%",
               end: "bottom 30%",
            },
            x: "100vw",
            duration: 3,
         });
         gsap.to(".moving-text", {
            scrollTrigger: {
               trigger: ".moving-text",
               scrub: 3,
               start: "top 80%",
               end: "bottom 80%",
            },
            x: "50vw",
            duration: 3,
         });
      },
      { scope: containerRef }
   );

   return (
      <div
         style={{ height: "800px", width: "1700px" }}
         className="scroll-container"
         ref={containerRef}
      >
         <div className="moving-element">
            <img src={truck.src} alt="truck" className="moving-img" />
            <div className="moving-text">
               <p className="scroll-text">PESTE</p>
               <span
                  className="primary-color font-bold"
                  style={{
                     fontSize: `${screenWidth > 600 ? "256px" : "196px"}`,
                     lineHeight: "1.1",
                  }}
               >
                  300
               </span>
               <p className="scroll-text">clienți mulțumiți</p>
            </div>
         </div>
      </div>
   );
}
