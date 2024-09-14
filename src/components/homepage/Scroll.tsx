//Utilities
import React, { useRef } from "react";
import { useDefault } from "@/contexts/useDefault";

//GSAP
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


//Images
import truck from "@/assets/truck.png";

//Style

import styles from "../../css/modules/scroll.module.css"


gsap.registerPlugin(ScrollTrigger);

export default function Scroll() {
   const { screenWidth } = useDefault();
   const containerRef = useRef<any>();

   useGSAP(
      () => {
         gsap.to(".scrollImg", {
            scrollTrigger: {
               trigger: ".scrollImg",
               scrub: 3,
               start: "top 99%",
               end: "bottom 30%",
            },
            x: "100vw",
            duration: 3,
         });
         gsap.to(".scrollTextContainer", {
            scrollTrigger: {
               trigger: ".scrollTextContainer",
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
         className={styles.scrollContainer}
         ref={containerRef}
      >
         <div className={styles.scrollElement}>
            <img src={truck.src} alt="truck" className="scrollImg" />
            <div className="scrollTextContainer">
               <p className={styles.scrollText}>PESTE</p>
               <span
                  className="primary-color font-bold"
                  style={{
                     fontSize: `${screenWidth > 600 ? "256px" : "196px"}`,
                     lineHeight: "1.1",
                  }}
               >
                  300
               </span>
               <p className={styles.scrollText}>clienți mulțumiți</p>
            </div>
         </div>
      </div>
   );
}
