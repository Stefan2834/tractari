// Components
import Link from "next/link";
import { Button } from "@mui/material";

// Utilities
import React, { useEffect, useState } from "react";
import { useDefault } from "@/contexts/useDefault";

// Assets
import logo from "../assets/logo.png";

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
            className={`fixed w-full h-32 flex items-center justify-between grad z-30 pl-16 pr-8 nav-main xl:pl-4 xl:pr-4`}
         >
            <Link href="/" className="logo">
               <img src={logo.src} alt="logo" className="logo-img" />
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
               className="text-white flex items-center justify-center text-xl nav-div font-semibold"
               style={{
                  transform: `translateX(${
                     screenWidth < 900 && !isMobileNavigation ? "100%" : "0"
                  }`,
               }}
            >
               <Link href="/" className="mx-4 py-2 px-4 nav-link xl:mx-2 xl:px-2 xl:my-2">
                  Servicile noastre
               </Link>
               <Link href="/" className="mx-4 py-2 px-4 nav-link xl:mx-2 xl:px-2 xl:my-2">
                  Cine suntem?
               </Link>
               <Link href="/gallery" className="mx-4 py-2 px-4 nav-link xl:mx-2 xl:px-2 xl:my-2">
                  Galerie foto
               </Link>
               <Link href="/" className="mx-4 xl:mx-2">
                  <Button
                     variant="contained"
                     sx={{
                        backgroundColor: "#CCA424",
                        textTransform: "none",
                        color: "white",
                        position: "relative",
                        borderRadius: "4px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                        fontWeight: "500",
                        margin: `${screenWidth > 900 ? "0" : "0 5px"}`,
                        fontFamily: '"Monserrat", sans-serif',
                        fontSize: "20px",
                        padding: `${screenWidth > 900 ? "6px 18px" : "4px 12px"}`,
                     }}
                  >
                     Contacteaza-ne
                  </Button>
               </Link>
               {screenWidth < 900 && (
                  <div className="w-full h-28 absolute bottom-0 flex flex-col items-start justify-between px-6 pb-2">
                     <div>
                        <Link href="/" className="logo">
                           <img src={logo.src} alt="logo" className="logo-img" />
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
               className="w-full h-full bg-black fixed top-0 left-0 z-20"
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
