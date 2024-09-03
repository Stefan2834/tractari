"use client";
import React from "react";

import { Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

import email from "../assets/icons/email.webp";
import whatsapp from "../assets/icons/whatsapp.webp";
import facebook from "../assets/icons/facebook.webp";
import logo from "../assets/logo.png";

import Link from "next/link";
import { useDefault } from "@/contexts/useDefault";

export default function Footer() {
   const { screenWidth } = useDefault();

   return (
      <footer className="bg-white">
         <div
            className="mt-20 w-full grad-footer flex items-center justify-center flex-col xl:mt-8"
            style={{
               height: "600px",
               clipPath: "polygon(0 10%, 100% 0%, 100% 100%, 0% 100%)",
            }}
         >
            <Link href="/">
               <img src={logo.src} alt="logo" className="w-64" />
            </Link>
            <Link href="tel:+40730222643">
               <Button
                  variant="contained"
                  sx={{
                     fontSize: `${screenWidth > 600 ? "18px" : "14px"}`,
                     color: "white",
                     p: `${screenWidth > 900 ? "14px 20px" : "8px 16px"}`,
                     borderRadius: "4px",
                     backgroundColor: "#E3B626",
                  }}
                  startIcon={<PhoneIcon />}
               >
                  DISPONIBILI NON STOP, SUNĂ ACUM
               </Button>
            </Link>
            <div className="flex items-center justify-center text-white font-semibold text-2xl mt-16 m:text-base m:mt-8 m:flex-col">
               <Link href="/" className="mx-3 m:my-1">
                  Serviciile noastre
               </Link>
               <Link href="/" className="mx-3 m:my-1">
                  Cine suntem?
               </Link>
               <Link href="/gallery" className="mx-3 m:my-1">
                  Galerie foto
               </Link>
            </div>
            <div className="flex items-center justify-center text-white font-semibold text-2xl mt-8">
               <Link href="/">
                  <img
                     src={email.src}
                     alt="Email"
                     className={`${screenWidth > 600 ? "h-9" : "h-6"} mx-3`}
                  />
               </Link>
               <Link href="/">
                  <img
                     src={whatsapp.src}
                     alt="Whatsapp"
                     className={`${screenWidth > 600 ? "h-9" : "h-6"} mx-3`}
                  />
               </Link>
               <Link href="/">
                  <img
                     src={facebook.src}
                     alt="Facebook"
                     className={`${screenWidth > 600 ? "h-9" : "h-6"} mx-3`}
                  />
               </Link>
            </div>
         </div>
         <div className="w-full h-20 bg-black flex items-center justify-between font-light px-24 -mt-1 xl:flex-col xl:items-start xl:justify-center xl:h-auto xl:py-6 m:px-8">
            <p className="text-white font-light text-lg m:text-base">@2024 - All rights reserved</p>
            <p className="text-white font-light text-lg m:text-base">
               Designed and Developed by <span className="underline">Iosif Ștefan</span> &{" "}
               <span className="underline">Mareș Gabriel</span>
            </p>
         </div>
      </footer>
   );
}
