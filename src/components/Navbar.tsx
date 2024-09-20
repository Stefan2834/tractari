// Utilities
import React, { useEffect, useState } from "react";
import { useDefault } from "@/contexts/useDefault";
import { useRouter } from "next/router";
import Image from "next/image"

// Components
import Link from "next/link";
import CustomButton from "./custom/CustomButton";

// Assets
import logo from "../assets/logo.png";

//Style 
import styles from "../css/modules/navbar.module.css"

export default function Navbar() {
   const { screenWidth, data } = useDefault();
   const [isMobileNavigation, setIsMobileNavigation] = useState<boolean>(false);
   const [isScroll, setIsScroll] = useState<boolean>(false);

   const router = useRouter();

   useEffect(() => {
      document.body.style.overflowY = isMobileNavigation ? "hidden" : "scroll";
   }, [isMobileNavigation]);

   useEffect(() => {
      if (screenWidth > 900) {
         setIsMobileNavigation(false);
      }
   }, [screenWidth]);



   useEffect(() => {

      const handleScrollSize = () => {
         const scroll = window.scrollY;
         if (scroll > 100) {
            setIsScroll(true);
         } else {
            setIsScroll(false);
         }
      }

      handleScrollSize();

      document.addEventListener("scroll", handleScrollSize)

      return () => {
         document.removeEventListener("scroll", handleScrollSize);
      }
   }, [])

   return (
      <>
         <div
            className={isScroll ? styles.containerScrolled : styles.container}
         >
            <Link href="/" className={styles.logo}>
               <Image src={logo} alt="Logo" />
            </Link>
            <div
               className={styles.hamburger}
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
               <Link onClick={() => setIsMobileNavigation(false)} href={data.tarifePage} className={`${styles.link}`}>
                  Tarife
               </Link>
               <Link onClick={() => setIsMobileNavigation(false)} href={data.galleryPage} className={`${styles.link}`}>
                  Galerie foto
               </Link>
               <Link onClick={() => setIsMobileNavigation(false)} href={`${router.pathname}#contact`} className={styles.linkButton}>
                  <CustomButton
                     fontSize="20px"
                     padding={`${screenWidth > 900 ? "6px 18px" : "4px 12px"}`}
                     background={isScroll ? "white" : undefined}
                  >
                     <span>
                        Contacteaza-ne!
                     </span>
                  </CustomButton>
               </Link>
               {screenWidth < 900 && (
                  <div className={styles.phoneNav}>
                     <div>
                        <Link href="/" className={styles.logo}>
                           <Image src={logo} alt="Logo" />
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
               className={styles.backgroundContainer}
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
