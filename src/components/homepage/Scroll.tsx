//Utilities
import React, { useRef, useEffect, useState } from "react";
import { useDefault } from "@/contexts/useDefault";
import Image from "next/image"

//Images
import truck from "@/assets/truck.png";

//Style
import styles from "../../css/modules/scroll.module.css"



export default function Scroll() {
   const { screenWidth, data } = useDefault();
   const containerRef = useRef<any>();
   const [activateAnimation, setActivateAnimation] = useState<boolean>(false);

   useEffect(() => {
      const handleScroll = () => {
         if(screenWidth > 600) {
            if (window.scrollY >= 600) {
               setActivateAnimation(true);
            }
         } else {
            if(window.scrollY >= 1200) {
               setActivateAnimation(true);
            }
         }
      };


      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);

   }, []);

   return (
      <div
         style={{ height: "800px" }}
         className={styles.scrollContainer}
         ref={containerRef}
      >
         <div className={styles.scrollElement} >
            <Image src={truck} alt="Mașină de tractare" className={styles.scrollImg} 
               style={{ transform: `translate(${activateAnimation ? "calc(100vh + 60% + 100px)" : "calc(-100vh - 60% - 100px)"})` }}
            />
            <div className={styles.scrollTextContainer}
               style={{ transform: `translate(${activateAnimation ? "0px" : "calc(-100vh - 60% - 100px)"})` }}
            >
               <p className={styles.scrollText}>PESTE</p>
               <span
                  className="primary-color font-bold"
                  style={{
                     fontSize: `${screenWidth > 600 ? "256px" : "160px"}`,
                     lineHeight: "1.1",
                  }}
               >
                  {data.clientsNumber}
               </span>
               <p className={styles.scrollText}>de clienți mulțumiți</p>
            </div>
         </div>
      </div>
   );
}
