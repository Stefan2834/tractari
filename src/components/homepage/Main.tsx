import React from "react";
import Link from "next/link";
import { useDefault } from "@/contexts/useDefault";
import { Button } from "@mui/material";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import lightning from "@/assets/icons/lightning.webp";
import hours24 from "@/assets/icons/24.webp";
import checked from "@/assets/icons/checked.webp";

export default function Main() {
   const { screenWidth } = useDefault();

   return (
      <>
         <div className="bg-main" />
         <div className="main-bar" />
         <div className="main-element">
            <div className="main-flex">
               <p
                  className="mb-4 font-semibold m:mb-2"
                  style={{
                     fontSize: `${screenWidth > 600 ? "20px" : "16px"}`,
                  }}
               >
                  TRACTĂRI AUTO ȘI ASISTENȚĂ RUTIERĂ
               </p>
               <h1 className="mt-4 text-8xl font-bold m:text-5xl">KOT ASISTENȚĂ RUTIERĂ</h1>
               <h3 className="font-second text-3xl font-normal m:text-lg">
                  Probleme pe drum? Sună-ne acum!
               </h3>
               <Link href="tel:+40730222643">
                  <Button
                     variant="contained"
                     sx={{
                        color: "white",
                        textTransform: "none",
                        marginTop: "40px",
                        fontSize: `${screenWidth > 600 ? "20px" : "16px"}`,
                        padding: `${screenWidth > 600 ? "10px 20px" : "6px 12px"}`,
                     }}
                  >
                     DISPONIBILI NON STOP, SUNĂ ACUM
                  </Button>
               </Link>
               <Link
                  href="https://wa.me/+400730222643"
                  className="mt-2 text-lg font-normal hover:underline"
                  style={{
                     fontSize: `${screenWidth > 600 ? "16px" : "12px"}`,
                  }}
               >
                  * sau lasă-ne un mesaj pe whatsapp
                  <ArrowRightAltIcon />
                  <WhatsAppIcon />
               </Link>
            </div>
         </div>
         <Link href="/">
            <div className="main-absolute" />
         </Link>
         <div className="main-absolute-flex">
            <div className="main-absolute-element">
               <div className="flex items-start justify-start">
                  <div className="w-10 h-full mr-3 flex items-center justify-center">
                     <img src={lightning.src} alt="lightning" className="main-absolute-img" />
                  </div>
                  <div>
                     <p className="text-2xl mt-3 text-black">Simplu și rapid</p>
                     <div
                        className="w-full bg-gray-400"
                        style={{ height: "1px", marginTop: "4px" }}
                     />
                  </div>
               </div>
               <p className="my-6 text-md text-gray-800">
                  Sărim în ajutorul tău în cel mai scurt timp posibil. Nu te îngrijora, vom fi acolo
                  cât mai rapid.
               </p>
            </div>
            <div className="main-absolute-element">
               <div className="flex items-start justify-start">
                  <div className="w-10 h-full mr-3 flex items-center justify-center">
                     <img src={hours24.src} alt="24 hours" className="main-absolute-img" />
                  </div>
                  <div>
                     <p className="text-2xl mt-3 text-black">Oriunde și oricând</p>
                     <div
                        className="w-full bg-gray-400"
                        style={{ height: "1px", marginTop: "4px" }}
                     />
                  </div>
               </div>
               <p className="my-6 text-md text-gray-800">
                  Venim oriunde în țară, la orice oră din zi și din noapte. Nu ezita să ne
                  contactezi.
               </p>
            </div>
            <div className="main-absolute-element">
               <div className="flex items-start justify-start">
                  <div className="w-10 h-full mr-3 flex items-center justify-center">
                     <img src={checked.src} alt="checked" className="main-absolute-img" />
                  </div>
                  <div>
                     <p className="text-2xl mt-3 text-black">Servicii calitative</p>
                     <div
                        className="w-full bg-gray-400"
                        style={{ height: "1px", marginTop: "4px" }}
                     />
                  </div>
               </div>
               <p className="my-6 text-md text-gray-800">
                  Oferim servicii de calitate superioară. Nu contează cât de avariată este mașina,
                  noi o vom tracta.
               </p>
            </div>
         </div>
      </>
   );
}
