// Utilities
import React, { useEffect, useState } from "react";
import { useDefault } from "@/contexts/useDefault";

// Components
import Link from "next/link";
import CustomButton from "./custom/CustomButton";

// Assets
import logo from "../assets/logo.png";

//Style 
import styles from "../css/modules/navbar.module.css"

export default function Navbar() {
   const [isMobileNavigation, setIsMobileNavigation] = useState<boolean>(false);
   const { screenWidth } = useDefault();

   useEffect(() => {
      document.body.style.overflowY = isMobileNavigation ? "hidden" : "scroll";
   }, [isMobileNavigation]);

   useEffect(() => {
      if (screenWidth > 900) {
         setIsMobileNavigation(false);
      }
   }, [screenWidth]);

   return (
      <>
         <div
            className={`${styles.container} grad`}
         >
            <Link href="/" className={styles.logo}>
               <img src={logo.src} alt="logo" />
            </Link>
            <div
               className="nav-ham"
               onClick={() => setIsMobileNavigation((prevState) => !prevState)}
               data-is-mobile-navigation={isMobileNavigation ? "true" : "false"}
            >
               <div className="line" />
               <div className="line" />
               <div className="line" />
            </div>
            <div
               className={styles.linkContainer}
               style={{
                  transform: `translateX(${screenWidth < 900 && !isMobileNavigation ? "100%" : "0"}`,
               }}
            >
               <Link href="/tarife" className={`${styles.link}`}>
                  Tarife
               </Link>
               <Link href="/galerie-foto" className={`${styles.link}`}>
                  Galerie foto
               </Link>
               <Link href="/#contact" className={styles.linkButton}>
                  <CustomButton
                     fontSize="20px"
                     padding={`${screenWidth > 900 ? "6px 18px" : "4px 12px"}`}
                  >
                     Contacteaza-ne
                  </CustomButton>
               </Link>
               {screenWidth < 900 && (
                  <div className={styles.phoneNav}>
                     <div>
                        <Link href="/" className={styles.logo}>
                           <img src={logo.src} alt="logo" />
                        </Link>
                     </div>
                     <div>
                        <p className="text-base">@2024 - All rights reserved</p>
                     </div>
                  </div>
               )}
            </div>
         </div>
         {screenWidth < 900 && (
            <div
               onClick={() => setIsMobileNavigation(false)}
               className={styles.hamburger}
               style={{
                  transition: "400ms ease",
                  visibility: `${isMobileNavigation ? "visible" : "hidden"}`,
                  opacity: `${isMobileNavigation ? "0.5" : "0"}`,
               }}
            />
         )}
      </>
   );
}
